// 用户信息
 interface UserInfoType {
    loginName: string,
    password?: string,
    passwordMd5?: string,
}

 type UserItemType = {
    label: string,
    key: string,
    type: string
}

export {UserInfoType, UserItemType}