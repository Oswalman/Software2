/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'products',

  attributes: {
    

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    ProductID: {
      type: 'integer',
      unique: true,
      autoIncrement: true,
      columnName: 'ProductID'
    },
    ProductName:{
      type: 'string',
      columnName: 'ProductName'
    },
    SupplierID:{
      type: 'integer',
      columnName: 'SupplierID'
    },
    CategoryID:{
      type: 'integer',
      columnName: 'CategoryID'
    },
    QuantityPerUnit:{
      type: 'string',
      columnName: ' QuantityPerUnit'
    },
    UnitPrice:{
      type: 'integer',
      columnName: 'UnitPrice'
    },
    UnitsInStock:{
      type: 'integer',
      columnName: 'UnitsInStock'
    },
    UnitsOnOrder:{
      type: 'integer',
      columnName: 'UnitsOnOrder'
    },
    ReorderLevel:{
      type: 'integer',
      columnName: 'ReorderLevel'
    },
    Discontinued:{
      type: 'integer',
      columnName: 'Discontinued'
    },


  },

};

