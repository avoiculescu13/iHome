export class ColorHelper {
    static hexToRgbA(hex: string): { [key: string]: number } {
        var c: any;
        let result: { [key: string]: number };
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            result = {
                r: (c >> 16) & 255,
                g: (c >> 8) & 255,
                b: c & 255,
                a: 1
            };
            
            return result;
        }
        throw new Error('Bad Hex');
    }
}