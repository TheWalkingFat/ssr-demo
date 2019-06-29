const createApp = require("./app.js");

const getData = function(){
    return new Promise((reslove, reject) => {
        let str = 'this is a async data!';
        reslove(str);
    })
}

module.exports = (context) => {
    return new Promise(async (reslove,reject) => {
        let {url} = context;

        // 数据传递
        context.propsData = 'this is a data from props!'

        context.asyncData = await getData();

        let {app,router} = createApp(context);
        router.push(url);
        //  router回调函数
        //  当所有异步请求完成之后就会触发
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents();
            if(!matchedComponents.length){
                return reject({
                    code:404,
                });
            }
            reslove(app);
        },reject)
    })
}