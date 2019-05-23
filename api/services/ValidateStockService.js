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

        var result = await Products.findOne(idProd);

        if(quantity>(result.UnitsInStock/2) && quantity > 10)
        {
          
          var calcular= (result.UnitPrice*quantity)-(result.UnitPrice*quantity*0.2);

        }
        else
        {
          var calcular= result.UnitPrice*quantity;
        }
  
        
        
        return calcular;
       
  
  
      },
      
  
  }