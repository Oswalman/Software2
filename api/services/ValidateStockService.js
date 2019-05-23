module.exports = {

  
    verifyStock: async function verifyStockService(idProd, quantity) {
  
        var result = await Products.findOne(idProd);
    
        
    
        if(result.UnitsInStock >= quantity){
            return true;
          }else{
            return false;
          }
      
  
  
      },

      discountOnStockSale: async function discount(idProd, quantity) {
  
        var result = await Products.findOne(idProd)
        var calcular= result.UnitPrice*quantity;
     
        return calcular;
       
  
  
      }
  
  }