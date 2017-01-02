/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function (req, res) {
        res.view();
    },
    create: function (req, res, next) {
        Customer.create(req.params.all(), function customerCreated(err, customer) {
            if (err) { return next(err) };

            res.redirect('/customer/show/' + customer.id);
        })
    },
    show: function (req, res, next) {
        Customer.findOne(req.param('id'), function foundCustomer (err, customer) {
            if (err) { return next(err) };
            if (!customer) { return next() };
            res.view({
                customer: customer
            })
        })
    },
    index: function (req, res, next) {
        Customer.find(function (err, customers) {
            if (err) return next(err);

            res.view({
                customers: customers
            });
        });
    },
    edit: function (req, res, next) {
        Customer.findOne(req.param('id'), function editedCustomer(err, customer) {
            if (err) return next(err);
            if (!customer) return next();

            res.view({
                customer: customer
            });
        });
    },
    update: function (req, res, err) {
        Customer.update(req.param('id'), req.params.all(), function (err) {
            if (err) {
                return res.redirect('/customer/edit/' + req.param('id'));
            }
            res.redirect('/customer');
        })
    }
};
