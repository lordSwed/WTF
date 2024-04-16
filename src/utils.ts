class Utils {
    public static hallo(fullname: string): string {
        return `Hallo, ${fullname}`;
    }

    public static numberFormater(number: number): string {
        if (!process.env.PRECISION) {
            throw new Error('PRECISION not defined');
        }
        return number.toFixed(parseInt(process.env.PRECISION)).toString().replace('.', ',');
    }

    public static priceFormater(number: number): string {
        let formatedNumber = this.numberFormater(number);
        return `${formatedNumber} Kč`;
    }

    // ----------------------------



    public static findNumber(string: string): number {
        let allDiggits = string.match(/\d/g);
        if (!allDiggits) {
            return 0;
        }
        return parseInt(allDiggits[0]+allDiggits.pop());
    }

    public static doWTF(lines: string[]): number {
        let number: number = 0;
        for (let i = 0; i < lines.length; i++) {
            number += this.findNumber(lines[i]);
        }
        return number;
    }

    public static readFile(filename: string): string[] {
        const fs = require('fs');
        if (!fs.existsSync(filename)) {
            return [];
        }
        return fs.readFileSync(filename, 'utf8').split('\n');
    }
}
export {Utils}