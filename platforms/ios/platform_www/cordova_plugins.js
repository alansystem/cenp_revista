cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "pushbots-cordova-plugin.PushbotsPlugin",
        "file": "plugins/pushbots-cordova-plugin/www/pushbots.js",
        "pluginId": "pushbots-cordova-plugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-splashscreen": "4.0.1",
    "cordova-plugin-whitelist": "1.2.2",
    "pushbots-cordova-plugin": "1.4.1"
};
// BOTTOM OF METADATA
});