const updateNotifier = require("update-notifier")
const pkg = require("../package.json")
updateNotifier({ pkg }).notify()

module.exports = {
    version: pkg.version,
    Phisherman: require("./Phisherman"),
}

/*
Hi, welcome to looking in my code.
Any questions? Shoot me a message in the Phisherman Support server! TheShadow#8124
or just shoot me
that too
*/
