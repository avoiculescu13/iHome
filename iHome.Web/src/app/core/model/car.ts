import { Color } from "@angular-material-components/color-picker";
import { ColorHelper } from "../helpers/color-helpers";
import { Guid } from "../helpers/string-helpers";
import { LoginService } from "../services/LoginService";

export class Car {

    private _color: Color;
    private colorHex: string;

    constructor(private loginService: LoginService) {
        this.UserName = this.loginService.getSnapshotCurrentUser().userName;
        this.TechnicalInspection = [];
        this.TechnicalRevision = [];
    }

    //ColorHex: string;
    public set ColorHex(value: string) {
        this.colorHex = value;
        if (this.colorHex) {
            //Transform Hex to  Color
            let cHex: { [key: string]: number } = ColorHelper.hexToRgbA(this.colorHex);
            this._color = new Color(cHex['r'], cHex['g'], cHex['b'], cHex['a']);
        }
    }

    public get ColorHex() {
        return this.colorHex;
    }

    public set Color(value: Color) {
        this._color = value;
        if (this._color)
            this.colorHex = this._color.hex;
    }
    public get Color() {
        return this._color;
    }

    Id: string;
    TypeName: string;
    CylinderCapacity: number;
    ManufactureDate: Date;
    Brand: string;
    Price: number;
    UserName: string;
    TechnicalInspection: PeriodicTechnicalInspection[];
    TechnicalRevision: PeriodicTechnicalRevision[];
    HasImage: boolean;
}

export class PeriodicTechnicalInspection {
    constructor() {
    }
    Id: string;
    Passed: boolean;
    Kilometers: number;
    Notes: string;
    ServiceGarage: string;
    Price: number;
    Date: Date;
}

export class PeriodicTechnicalRevision {
    constructor() {
    }
    Id: string;
    Kilometers: number;
    Notes: string;
    ServiceGarage: string;
    Price: number;
    Date: Date;
}

export interface CarResolved {
    car: Car;
    error?: any;
}