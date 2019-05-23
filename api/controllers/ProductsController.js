/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create(req, res){
        Products.create({
            ProductID: req.param('ProductID'),
            ProductName:req.param('ProductName'),
            SupplierID: req.param('SupplierID'),
            CategoryID:req.param('CategoryID'),
            QuantityPerUnit: req.param('QuantityPerUnit'),
            UnitPrice:req.param('UnitPrice'),
            UnitsInStock: req.param('UnitsInStock'),
            UnitsOnOrder:req.param('UnitsOnOrder'),
            ReorderLevel: req.param('ReorderLevel'),
            Discontinued:req.param('Discontinued'),
        })
        .then(products=>{
            return res.ok()
        })
        .catch(err => res.serverError(err));
    },
    find(req,res){
        Products.find()
        .then(products=>res.ok(products))
        .catch(err => res.notFound(err));
    },
    delete(req,res){
        Products.destroy({
            id:req.params.id
        })
        .then(products =>res.ok(products))
        .catch(err => res.serverError(err));
    },
    update(req,res){
        let attributes={};
        if(req.param('ProductName'))
        {
            attributes.ProductName=req.param('ProductName')
        }
        Products.update({
            id:req.params.id
        },attributes
        )
        .then(products=>{
            res.ok(products);
        })
        .catch(err=> res.serverError(err));
    },
    buy: async function (req, res) {
    
        var response = await ValidateStockService.verifyStock(  req.param('ProductID') , req.param('UnitsInStock') );

       // let response = await sails.helpers.validateStock.with( {id : req.param('productid') , quantity: req.param('productquantity') });

        if(response){
            sails.log("En Stock "+response);
            return res.json(response);

        }else{
            sails.log("No hay stock");
            return res.json(response);

        }

    },

    price: async function(req, res) {
        sails.log("price");
    
        var response = await ValidateStockService.discountOnStockSale(  req.param('ProductID') , req.param('Units') );

       // let response = await sails.helpers.validateStock.with( {id : req.param('productid') , quantity: req.param('productquantity') });
       sails.log(response);
       return res.json(response);

    }






    /*
    checkStockAvaliable(req,res)
    {
        let attributes={};
        if(req.param('UnitsInStock'))
        {
            attributes.UnitsInStock=req.param('UnitsInStock')
        }
        var finn=Products.findOne({
            ProductID: req.params.ProductID

        });
        if(attributes.UnitsInStock>finn.UnitsInStock)
        {
            sails.log('verdadero');
            return false;
        }
        else
        {
            sails.log('falso');
            return false;
        }

    }*/
    
  

};

