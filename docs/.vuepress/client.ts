import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import Resource from "./components/Resource.vue"
import PipModules from "./components/PipModule.vue"

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.use(ElementPlus)
        router.addRoute({
            path:"/resource",
            component:Resource
        })
        router.addRoute({
            path:"/pipmodule",
            component:PipModules
        })
    },
    setup() {
    },
    rootComponents: [],
})