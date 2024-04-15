import { addArrays } from "./map-method-2";

describe('addArrays function', () => {
    it('add the values from both the Array elements', () => {
        expect(addArrays([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    });
    it('adds the values from both the array elements when arrays have negative values', () => {
        expect(addArrays([-1, -2, -3], [-4, -5, -6])).toEqual([-5, -7, -9]);
    });
    it('adds the values from both the array elements when arrays have decimal values', () => {
        expect(addArrays([1.5, 2.5, 3.5], [4.5, 5.5, 6.5])).toEqual([6, 8, 10]);
    });
    it('adds the values from both the array elements when arrays have zero values', () => {
        expect(addArrays([0, 0, 0], [0, 0, 0])).toEqual([0, 0, 0]);
    });
    it('throws an error if arrays have different lengths', () => {
        expect(() => addArrays([1, 2], [4, 5, 6])).toThrowError(Error);
    });
})