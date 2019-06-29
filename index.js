const express = require("express");
const app = express();
// const Vue = require("vue");
// const vueApp = require('./src/app.js');
const App = require('./src/entry-server.js');

// const vueServerRender = require("vue-server-renderer").createRenderer();

let path = require("path");
const vueServerRender = require("vue-server-renderer").createRenderer({
    template:require("fs").readFileSync(path.join(__dirname,"./index.html"),"utf-8")
});

app.get('*', async(request, response) => {
    // const vueApp = new Vue({
    //     data:{
    //         message: "hello, world"
    //     },
    //     template: `<h1>{{message}}</h1>`
    // });
    // let vm = vueApp({});

    response.status(200);
    response.setHeader("Content-type", "text/html;charset-utf-8");

    let {url} = request;
    let vm;
    // try {
    //     vm = await App({url})
    // } 
    // catch (error) {
    //     console.log('error===', error)
    // }
    vm = await App({url})
    vueServerRender.renderToString(vm).then((html) => {
        response.end(html);
    }).catch(err => console.log(err))
})

app.listen(3001, () => {
    console.log('服务已开启')
})