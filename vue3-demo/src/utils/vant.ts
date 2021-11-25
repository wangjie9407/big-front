// 引入vant组件
import { Form, Field, CellGroup, NavBar, Button } from 'vant';

const useVants = (app) => {
    app.use(Form)
        .use(Field)
        .use(CellGroup)
        .use(NavBar)
        .use(Button)
}

export default useVants