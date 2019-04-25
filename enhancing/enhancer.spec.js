const enhancer = require('./enhancer.js');
// test away!
let testItem1 = {name:'Black Sword', durability: 79, enhancement: 13};
let testItem2 = {name:'Cuirass of The Valkyrie', durability: 100, enhancement: 20};
let testItem3 = {name: 'Amulet of Despair', durability: 50, enhancement: 16};
test('testing 123', () => {
    expect(true).toBe(true);
})
describe('enhancer.js', () => {
    describe('enhancer.repair()', () => {
        it('should return a new item with a durability(property) of 100', () => {
            expect(enhancer.repair(testItem1)).toEqual({...testItem1,durability:100})
        })
    })
    describe('enhancer.succeed()', ()=> {
        it('should return a new item with the enhancement property incresed by 1. If the property is already 20, then the property will not be increased.', ()=> {
            expect(enhancer.succeed(testItem1)).toEqual({...testItem1, enhancement: 14});
            expect(enhancer.succeed(testItem2)).toEqual({...testItem2})
        })
    })
    describe('enhancer.fail()', ()=> {
        it('should return a new item modified according to failure rules. ', ()=> {
            expect(enhancer.fail(testItem1)).toEqual({...testItem1, durability: 74})
            expect(enhancer.fail(testItem2)).toEqual({...testItem2, durability: 90, enhancement: 19})
            expect(enhancer.fail(testItem3)).toEqual({...testItem3, durability: 40})

        })

    })
})