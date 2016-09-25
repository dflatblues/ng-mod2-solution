(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getCart();
    }

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getProducts();

        this.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }

    function ShoppingListCheckOffService() {
        var service  = this;
        var cart     = [];
        var products = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 3 },
            { name: "beer", quantity: 24 },
            { name: "orange juice", quantity: 5 },
            { name: "watermelon", quantity: 1 },
            { name: "apples", quantity: 6 },
            { name: "chocolate", quantity: 2 },
            { name: "milk", quantity: 6 }
        ];

        service.buyItem = function (itemIndex) {
            cart.push(products[itemIndex]);
            products.splice(itemIndex, 1);
        }

        service.getCart = function () {
            return cart;
        }

        service.getProducts = function () {
            return products;
        }
    }

})();