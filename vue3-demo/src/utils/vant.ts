// 引入vant组件
import { Form, Field, CellGroup, NavBar, Button, Icon,Checkbox,Tabbar, TabbarItem   } from 'vant';

const useVants = (app) => {
    app.use(Form)
        .use(Field)
        .use(CellGroup)
        .use(NavBar)
        .use(Button)
        .use(Icon)
        .use(Checkbox)
        .use(Tabbar)
        .use(TabbarItem)
}

export default useVants