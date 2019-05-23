module.exports = {

  
    verifyStock: async function verifyStockService(idProd, quantity) {
  
        var result = await Products.findOne(idProd);
          
          if(result.UnitsInStock >= quantity){
            return true;
          }else{
            return false;
          }
      
  
  
      }
  
  }