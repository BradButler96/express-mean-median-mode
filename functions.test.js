const { getMean, getMedian, numCount, getMode } = require('./functions.js')


describe('mean functions', () => {
    test('get mean of an array', () => {
        const nums = [1,2,3,4,5];
        expect(getMean(nums)).toEqual(3); 
    })

    test('test that mean is rounded to 2 decimal places if needed', () => {
        const nums = [3,3,4]
        expect(getMean(nums)).toEqual(3.33); 
        expect(getMean(nums)).not.toEqual(3.333); 
    })
})

describe('median functions', () => {
    test('get median of an array with an odd number of values', () => {
        const nums = [1,2,3,4,5];
        expect(getMedian(nums)).toEqual(3); 
    })

    test('get median of an array with an even number of values', () => {
        const nums = [1,2,4,5];
        expect(getMedian(nums)).toEqual(3); 
    })
})

describe('mode functions', () => {
    test('test that numCount object has correct counts', () => {
        const nums = [1,2,2,3,3,3];
        const count = numCount(nums)
        expect(count[1]).toEqual(1)
        expect(count[2]).toEqual(2)
        expect(count[3]).toEqual(3)
    })

    test('get mode of an array with only one mode', () => {
        const nums = [1,1,2];
        const count = numCount(nums)
        expect(getMode(count)).toEqual([ '1' ]); 
    })

    test('get mode of an array with two modes', () => {
        const nums = [1,1,2,3,3];
        const count = numCount(nums)
        expect(getMode(count)).toEqual([ '1', '3' ]); 
    })

})





