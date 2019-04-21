// 3-basketModule-p.30.js

var basketModule = (function () {

    // Privates

    var basket = [];

    function doSomethingPrivate() {
        //...
        return console.log("doSomethingPrivate() was called");
    };

    function doSomethingElsePrivate() {
        //...
        return console.log("doSomethingElsePrivate() was called");
    };

    // Return an object exposed to the public
    
    return { // Public API

        // Add items to our basket
        addItem: function ( values ) {
            basket.push(values);
        },

        // Get the count items in the basket
        getItemCount: function () {
            return basket.length;
        },

        // Public alias to a private function
        doSomething: doSomethingPrivate,

        // Get the total value of items in the basket
        getTotal: function () {

            var itemCount = this.getItemCount();
            var total = 0;

            while(itemCount--) {
                total += basket[itemCount].price;
            }

            return total;   
        }
    };  
})();

// basketModule returns an object with a public API we can use

basketModule.addItem({
    item: "bread",
    price: 0.5
});

basketModule.addItem({
    item: "butter",
    price: 0.3
});

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

// Outputs: undefined
// This is because the basket itself is not exposed as a part of the public API
// console.log( basketModule.basket ); // undefined

// This also won't work as it only exists winthin the scope of our
// basketModule closure, but not the returned public object
// console.log( basket ); // basket is not defined

