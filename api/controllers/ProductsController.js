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
    }
    
  

};

