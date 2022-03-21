import { RouteRecordRaw } from "vue-router";
// 根据路径导出项目
export const formatGlob = (fileObj: Record<string, { default: RouteRecordRaw[] }>): Array<RouteRecordRaw> => {
    return Object.values(fileObj)
        .map((f) => f.default)
        .flat();
};