export default function globalProperties (app) {
    // 全局过滤器
    app.config.globalProperties.$filters = {
        prefix(url) {
            if (url && url.startsWith('http')) {
                return url
            } else {
                url = `http://backend-api-01.newbee.ltd${url}`
                return url
            }
        }
    }
}