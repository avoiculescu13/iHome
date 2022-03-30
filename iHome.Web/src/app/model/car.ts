import { Color } from "@angular-material-components/color-picker";
import { LoginService } from "../services/LoginService";

export class Car {

    constructor(private loginService: LoginService) {
        this.UserName = this.loginService.getSnapshotCurrentUser().userName;
        this.TechnicalInspection = [];
        this.TechnicalRevision = [];
    }

    ColorHex: string;
    private _color: Color;
    public set Color(value: Color) {
        this._color = value;
        if (this._color)
            this.ColorHex = this._color.hex;
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
}

export class PeriodicTechnicalInspection {
    Id: string;
    Passed: boolean;
    Kilometers: number;
    Notes: string;
    ServiceGarage: string;
    Price: number;
    Date: Date;
}

export class PeriodicTechnicalRevision {
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