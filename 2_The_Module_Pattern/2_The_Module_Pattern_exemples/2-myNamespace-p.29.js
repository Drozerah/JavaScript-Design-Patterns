// 2-myNamespace-p.29.js

var myNamespace = (function () {
 
    // A private counter variable
    myPrivateVar = 0;
   
    // A private function which logs any arguments
    var myPrivateMethod = function( foo ) {
        console.log( foo );
        console.log(myPrivateVar);
    };
   
    return {
   
      // A public variable
      myPublicVar: "foo",
   
      // A public function utilizing privates
      myPublicFunction: function( bar ) {
   
        // Increment our private counter
        myPrivateVar++;
   
        // Call our private method using bar
        myPrivateMethod( bar );
   
      }
    };
   
  })();


myNamespace.myPublicVar

console.log(myNamespace.myPublicVar);

myNamespace.myPublicFunction( 'any argument' );




