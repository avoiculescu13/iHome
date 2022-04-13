export class CarType {
    private static _carTyeValus: string[]
        = ['Sedan', 'Suv', 'Hatchback', 'Coupe', 'Van', 'Sports', 'Hybrid', 'Electric', 'Limousine'];
    static get CarTypeValues(): string[] {
        return this._carTyeValus;
    }
}