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
}
export {Utils}