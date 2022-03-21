export default interface MenuType{
    path:string,
    meta:{
        title: string,
        icon?: string,
    },
    children?: Array<MenuType>
}