// 引入vant组件
import { Form, Field, CellGroup, NavBar, Button, Icon } from 'vant';

const useVants = (app) => {
    app.use(Form)
        .use(Field)
        .use(CellGroup)
        .use(NavBar)
        .use(Button)
        .use(Icon)
}

export default useVants