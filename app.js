//Modular code is like using repositories. Encapusulating the code in private modules.
//Module Pattern ( closures and iffys)


//BUDGET CONTROLLER
var budgetController = (function() {

    //Some code

})();


//UI CONTROLLER
var UIController = (function(){
    var Domstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function(){

            return {
                type: document.querySelector(Domstrings.inputType).value,//will be either inc or exp
                descripton: document.querySelector(Domstrings.inputDescription).value,
                value: document.querySelector(Domstrings.inputValue).value
            };
            
        },
        getDomstrings: function() {
            return Domstrings;
        }
    };

})();


//GLOBAL APP CONTROLLER
var appController = (function(budgetCtrl, UICtrl) {
    //private function that sets up our event listeners
    var setupEventListeners = function (){
        //Calling DomStrings fnction from the UIController
        var Dom = UICtrl.getDomstrings();

         //adding a click eventlistner and callng our ctrlAdditem method
        document.querySelector(Dom.inputBtn).addEventListener('click', ctrlAddItem);

        //adding pressing any key event listener specified for the enter key
        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function(){
        //1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI.
        
    };
    //The app controller function is going to return the initialization function
    return {
        init: function() {
            setupEventListeners();
        }
    }

})(budgetController, UIController);
//here we are calling our initialization function outside of the controllers to actually intialization our application.
appController.init();