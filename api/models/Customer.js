/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      email: true
    },
    state: {
      type: 'string'
    },
    stocks: {  // one-to-many relationship: one customer can own many stocks
      collection: 'stock', //tells us what model to use, in this case Stock
      via: 'owner' // tells us which attribute of Stock is going to connect us back to Customer
    }
  }
};

