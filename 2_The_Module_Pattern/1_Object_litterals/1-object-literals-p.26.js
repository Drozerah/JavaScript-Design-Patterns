// object-literals-p.26.js

var myModule = {
    myProperty: "someValue",
    myProperty2: "Where in the world is Paul Irish today?",

    // object literal can contain properties and methods.
    // e.g we can define a further object for module condifiguration:
    myConfig:{
        useCaching: true,
        language: "en"
    },

    // a very basic method
    myMethod: function() {

        console.log(this.myProperty2);
    },

    // output a value based on the current configuration
    myMethod2: function() {

        console.log( "Caching is:" + (this.myConfig.useCaching) ? "enabled" : "disabled");
    },

    // override the current configuration
    myMethod3: function(newConfig) {

        if ( typeof newConfig === "object" ) {
            this.myConfig = newConfig;
            console.log( this.myConfig.language);
        }
    }
};

// Outputs: Where in the world is Paul Irish today?
myModule.myMethod();


// Outputs: enabled
myModule.myMethod2();

// Outputs: fr
myModule.myMethod3({
    language: "fr",
    useCaching: false
})
