<<<<<<< HEAD
var Observable = require("data/observable").Observable;
var LocalNotifications = require("nativescript-local-notifications");
var dialogs = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");

exports.createViewModelNot = createViewModelNot;
exports.createViewModel = createViewModel;

function doAddOnMessageReceivedCallback() {
    LocalNotifications.addOnMessageReceivedCallback(
        function(notificationData) {
            dialogs.alert({
                title: "Notification received",
                message: "ID: " + notificationData.id +
                "\nTitle: " + notificationData.title +
                "\nBody: " + notificationData.body,
                okButtonText: "Excellent!"
            });
        }
    );
=======
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/ 
var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and JavaScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = createViewModel();
>>>>>>> e8b81d5f56d6276f280faf173ac086eb4246ee64
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;
var createViewModel = require("./main-view-model").createViewModel;
var frameModule =require("ui/frame");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
<<<<<<< HEAD


function createViewModel(database) {
    var viewModel = new Observable();
    viewModel.titulo = "";
    viewModel.day = "01";
    viewModel.month = "01";
    viewModel.year = "2018";
    viewModel.hora = "12";
    viewModel.minutos = "00";
    console.log("entro")

    viewModel.insert = function() {
        console.log("Entro aqui por lomenos");
        console.log("viewModel.day: " + viewModel.day)
        console.log("viewModel.month: " + viewModel.month)
        console.log("viewModel.year: " + viewModel.year)
        console.log("viewModel.hora: " + viewModel.hora)
        console.log("viewModel.minutos: " + viewModel.minutos)
            var month = viewModel.month;
            console.log("MESES: " + month);
            if (viewModel.titulo !="")
                {
                    database.execSQL("INSERT INTO Pills (titulo, dia, mes, year, hora, minutos) VALUES (?, ?, ?, ?, ?, ?)", [this.titulo ,this.day, this.month, this.year, this.hora, this.minutos ]).then(id => { 
                    console.log("INSERT RESULT", id);
                    }, error => {
                    console.log("INSERT ERROR", error);
                    });
                    alert("Ya se añadio");
                }
            else
                {
                    alert("Falta el titulo");
                }
            // if (mes > 0) 
            //     mes = parseInt(mes) - 1;
            // else
            //     mes = 0;


=======
exports.onNavigatingTo = onNavigatingTo;

exports.notifiPage=function() {
    // console.log("Navigating");
    var navigationOptions={
        moduleName:'pages/noti/notiPage'//,
        // context:{param1: "value1",
        //         param2: "value2"
        //         }
>>>>>>> e8b81d5f56d6276f280faf173ac086eb4246ee64
    }
    
    frameModule.topmost().navigate(navigationOptions);
}
exports.seguriPage=function() {
    // console.log("Navigating");
    var navigationOptions={
        moduleName:'pages/segu/seguPage'//,
        // context:{param1: "value1",
        //         param2: "value2"
        //         }
    }
    
    frameModule.topmost().navigate(navigationOptions);
}
<<<<<<< HEAD

=======
>>>>>>> e8b81d5f56d6276f280faf173ac086eb4246ee64
