import { defineComponent, PropType, h, resolveComponent } from "vue";
import MenuType from "@/Models/MenuType";
import MenuKeyType from "@/Models/MenuKeyTypes"
import './index.less'

export default defineComponent({
    props: {
        menu: Array as PropType<any[]>,
        children: {
            type: String,
            default: 'children'
        },
        title: {
            type: String ,
            default: 'meta.title'
        },
        icon: {
            type: String ,
            default: 'meta.icon'
        },
        path: {
            type: String ,
            default: 'path'
        },
    },
    setup(props) {
        // 递归子菜单
        const loopSubMenu = (menu: MenuType[]) => {
            return menu?.map((m) => {
                const icon = (
                    <span class="icon-center">
                        {parseSubKey(m, props.icon) ? h(resolveComponent(parseSubKey(m, props.icon))) : ""}
                    </span>
                );
                const slots = {
                    title: () => (
                        <>
                            {icon}
                            <span>{parseSubKey(m, props.title)}</span>
                        </>
                    ),
                };
                if (m.children?.length) {
                    return (
                        <el-sub-menu index={parseSubKey(m, props.title)} v-slots={slots}>
                            {loopSubMenu(m.children)}
                        </el-sub-menu>
                    );
                }
                return (
                    <el-menu-item index={parseSubKey(m, props.path)}>
                        <>
                            {icon}
                            <span>{m.meta.title}</span>
                        </>
                    </el-menu-item>
                );
            });
        };
        // 根据自定义key获取菜单需要的值
        function parseSubKey<T> (data:T , key:( keyof T & string | string)): any {
            if(key.includes('.')){
                const keyArr = key.split('.') as Array<keyof T>
                // @ts-ignore
                return keyArr.reduce((r,c) => r = r[c] , data) 
            }else{
                return data[(key as keyof T)]
            }
        }
        return () => {
            return (
                <>
                    <el-menu router>
                        {loopSubMenu(props.menu ? props.menu : [])}
                    </el-menu>
                </>
            );
        };
    },
});
