//Modular code is like using repositories. Encapusulating the code in private modules.
//Module Pattern ( closures and iffys) 
var budgetController = (function() {

    var x = 23;

    var add = function (a){
        return x + a;
    }
    return{
        publicTest: function(b){
            return add(b);
        }
    }


})();
var UIController = (function(){
    //Some Code

})();

var appController = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }



    

})(budgetController, UIController);