var frameModule =require("ui/frame");

function onNavigatingTo(args) {
    var page = args.object;
}
exports.onNavigatingTo = onNavigatingTo;

function onNavigatingTo(args) {
    var page = args.object;
    var gotData=page.navigationContext;
}
exports.onNavigatingTo = onNavigatingTo;

function goToCreateNotifications(){

    var navigationEntry = {
        moduleName: "pages/crearNoti/crearNotiPage",
        transition: {
            name: "slideBottom"
        }
    }
    frameModule.topmost().navigate(navigationEntry);
}
exports.goToCreateNotifications = goToCreateNotifications;
