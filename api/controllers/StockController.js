/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function (req, res, next) {
        Customer.findOne(req.param('owner'), function foundCustomer(err, customer) {
            if (err) return next(err);
            if (!customer) return next();
            res.view({
                customer: customer
            });
        });
    },
    create: function (req, res, next) {
        Stock.create(req.params.all(), function (err, stock) {
            if (err) return next(err);

            res.redirect('/customer/show/' + stock.owner);
        });
    },
    destroy: function (req, res, next) {
        Stock.findOne(req.param('id')).exec(function (err, stock) {
         Stock.destroy(stock.id).exec(function (err, stock) {
            res.json(stock.owner)
         })
            res.redirect('/customer/show/' + stock.owner)
        })

    }
};

