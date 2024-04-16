import {Utils} from '../src/utils';

describe('utils', () => {
    beforeEach( ()=> {
        process.env.PRECISION = '1';
    });

    it('hallo', () => {
        expect(Utils.hallo('Tom Kym')).toEqual('Hallo, Tom Kym');
    });

    it('numberFormater - roundDown', () => {
        expect(Utils.numberFormater(1.2345)).toEqual('1,2');
    });

    it('numberFormater - roundUp', () => {
        expect(Utils.numberFormater(1.2567)).toEqual('1,3');
    });
    //
    // it('priceFormater', () => {
    //     expect(priceFormater(1.2345)).toEqual('1,2 Kč');
    // });

    it('price', () => {
        const spy = jest.spyOn(Utils, 'numberFormater').mockReturnValue('1,2');
        const result = Utils.priceFormater(1.2345);
        expect(result).toEqual('1,2 Kč');
        expect(spy).toHaveBeenCalledTimes(1);
    })
})
