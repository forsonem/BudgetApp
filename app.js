//Modular code is like using repositories. Encapusulating the code in private modules.
//Module Pattern ( closures and iffys)


//BUDGET CONTROLLER
var budgetController = (function() {
    //expense function constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    //income function constructor
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    //Budget controller keeps track of incomes and expenses and there totals.
    var data = {
       allItems : {
           exp: [],
           inc: []
       },
       totals : {
            exp : 0,
            inc : 0
       }
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;    

            //create new ID
            if (data.allItems[type].length > 0) {

                ID = data.allItems[type][data.allItems[type]. length - 1].id + 1;
            } else{
                ID = 0;
            }


            //Create new item depending on type
            if (type ==='exp'){
                newItem =  new Expense(ID, des, val);
            }else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            //push our new item to our array data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
           
        }
    };

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
        //passing in the new item object
        addListitem: function(obj, type){
            var html, newHtml;
            //create html string with place holder text
            if (type = 'inc'){
                html = '<div class="item clearfix" id="%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }else if (type === 'exp'){
                html = '<div class="item clearfix" id="%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }
            
            //replace html string with actual data from the object
            newHtml = html.replace('%id%', obj.id,);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            //insert the HTML into the DOM

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
        var input, newItem;
        //1. Get the field input data
        input = UICtrl.getInput();
        console.log(input);

        //2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.descripton, input.value);

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