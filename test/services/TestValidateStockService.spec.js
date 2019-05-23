var assert = require('assert');
require('../bootstrap');
stockService = require('../../api/services/ValidateStockService');


// Here we have our tests
describe('The ValidateStock', function () {

it('should return true if Product with ProductID = X is less than QuantityToBuy = Y in stock', function (done) {

  var idproduct = 1
  var quantity = 11

  stockService
  .discountOnStockSale(idproduct,quantity)
  .then(function (result) {
    result.should.equal(44);
    done();
  })
  .catch(done);
});

});