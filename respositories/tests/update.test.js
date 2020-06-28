const {expect} = require('chai');
const moneyRepo = require('../moneyRepo')
const db= require('../../db');
const { ObjectID } = require('mongodb');

describe('moneyRepo.update', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });
//not working not sure why. 
it('should return result when update the existing shop item', async () => {
    const result = await moneyRepo.update( ObjectId('5ef75896e566c03a70377a8d'), {
        'title': 'Mcdonalds',
        'description': 'Fries',
    });
    console.log(result.title)
    expect(result).to.be.true;

});
});

