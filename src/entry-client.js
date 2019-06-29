const createApp = require("./app.js");
let {app,router} = createApp({});

router.onReady(() => {
    app.$mount("#app")
});