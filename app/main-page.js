
var createViewModel = require("./main-view-model").createViewModel;
var frameModule =require("ui/frame");
exports.onNavigatingTo = onNavigatingTo;
<<<<<<< HEAD

=======
var createViewModel = require("./main-view-model").createViewModel;
var frameModule =require("ui/frame");
>>>>>>> 2acfeb1b505504c41c077625192a253bfedb4c3b
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}

exports.notifiPage=function() {
    // console.log("Navigating");
    var navigationOptions={
        moduleName:'pages/noti/notiPage'//,
        // context:{param1: "value1",
        //         param2: "value2"
        //         }
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
