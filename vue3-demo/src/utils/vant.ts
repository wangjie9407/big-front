// 引入vant组件
import {
    Form,
    Field,
    CellGroup,
    NavBar,
    Button,
    Icon,
    Checkbox,
    Tabbar,
    TabbarItem,
    Badge,
    Stepper,
} from "vant";

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
        .use(Badge)
        .use(Stepper);
};

export default useVants;
