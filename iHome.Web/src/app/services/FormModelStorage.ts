import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

export class FormModelStorageService {
    private static container: Array<FormModelDescriptor> = [];

    /** TEST */
    public static get(path: string): FormModelDescriptor {
        return this._recursiveSearchByPath(this.container, path);
    }

    public static register(path: string, formModel: FormControl | FormGroup) {
        let descr: FormModelDescriptor;
        if (formModel instanceof FormGroup) {
            descr = this._formGroupToFormModelDescriptor(path, formModel);
        } else if (formModel instanceof FormControl) {
            descr = this._formControlToFormModelDescriptor(path, formModel);
        } else {
            console.error(`Object ${JSON.stringify(formModel)} is not a valid FromControl or FormGroup!`);
            return;
        }

        var idx = this.container.findIndex(r => r.path === descr.path);
        if (idx >= 0) {
            this.container.splice(idx, 1);
        }
        
        this.container.push(descr);
    }

    private static _formGroupToFormModelDescriptor(path: string, formModel: FormGroup): FormModelDescriptor {
        var descr = new FormModelDescriptor();
        descr.path = path;
        descr.formObject = formModel;

        var keys = Object.keys(formModel.controls);
        if (keys.length > 0) {
            keys.forEach(key => {
                var control = formModel.controls[key];

                if (control instanceof FormGroup) {
                    descr.children.push(this._formGroupToFormModelDescriptor(path.concat('/', key), control));
                } else if (control instanceof FormControl) {
                    descr.children.push(this._formControlToFormModelDescriptor(path.concat('/', key), control));
                }
            });
        }
        return descr;
    }

    private static _formControlToFormModelDescriptor(name: string, formModel: FormControl): FormModelDescriptor {
        var descr = new FormModelDescriptor();
        descr.children = [];
        descr.path = name;
        descr.formObject = formModel;

        return descr;
    }

    private static _recursiveSearchByPath(list: FormModelDescriptor[], path: string): FormModelDescriptor {
        var result: FormModelDescriptor = null;
        list.some(item => {
            if (item.path === path) {
                result = item;
                return result;
            }

            if (item.children.length > 0) {
                result = this._recursiveSearchByPath(item.children, path);
                return result;
            }
            
            return result;
        });

        return result;
    }
}

class FormModelDescriptor {
    public path: string;
    public formObject: FormControl | FormGroup;
    public children: FormModelDescriptor[];

    constructor() {
        this.children = [];
    }
}