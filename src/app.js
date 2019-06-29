const Vue = require("vue");
const createRouter = require("./router")

module.exports = (context) => {
    const router = createRouter();
    const app =  new Vue({
        router,
        data:{
            message:"Hello,Vue SSR!",
            propsData: context.propsData,
            asyncData: context.asyncData
        },
        template:`
            <div>
                <h1>{{message}}</h1>
                <p>{{asyncData}}</p>
                <p>{{propsData}}</p>
                <ul>
                    <li>
                        <router-link to="/">home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">about</router-link>
                    </li>
                </ul>
                <router-view></router-view>
            </div>
        ` 
    });
    return {
        app,
        router
    }
}