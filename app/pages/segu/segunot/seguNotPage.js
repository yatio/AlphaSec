var view = require("ui/core/view");
var drawer;
var frameModule =require("ui/frame");
var Observable = require("data/observable").Observable;
var page;
var pageData = new Observable();

function onNavigatingTo(args) {
    var page = args.object;
}

exports.onNavigatingTo = onNavigatingTo;

exports.notiPage=function() {
    // // console.log("Navigating");
    var navigationOptions={
        moduleName:'/pages/noti/notiPage'//,
        // context:{param1: "value1",
        //         param2: "value2"
        //         }
    }
    
    frameModule.topmost().navigate(navigationOptions);
}

exports.seguriPage=function() {
    // // console.log("Navigating");
    var navigationOptions={
        moduleName:'/pages/segu/seguPage'//,
        // context:{param1: "value1",
        //         param2: "value2"
        //         }
    }
    
    frameModule.topmost().navigate(navigationOptions);
}

exports.HomePage=function() {
    // // console.log("Navigating");
    var navigationOptions={
        moduleName:'/main-page'//,
        // context:{param1: "value1",
        //         param2: "value2"
        //         }
    }
    
    frameModule.topmost().navigate(navigationOptions);
}