import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import Resource from "./components/Resource.vue"

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.use(ElementPlus)
        router.addRoute({
            path:"/resource",
            component:Resource
        })
    },
    setup() {
    },
    rootComponents: [],
})