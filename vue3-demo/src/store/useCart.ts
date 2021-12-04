import { defineStore } from "pinia";
import { Cart } from "@/apis/models/OrderModal";

export default defineStore({
    id: "cart",
    state: () => ({
        orderList: [] as Cart[],
        isSelectAll: false
    }),
    getters: {
        len: (state) => state.orderList.length,
        totalPrice: (state) =>
            state.orderList.reduce((r, c) => r + c.nums * c.price, 0),
        list: (state) => state.orderList,
    },
    actions: {
        setIsSelectAll(val: boolean){
            this.isSelectAll = val
        },
        selectAll() {
            this.isSelectAll =  !this.isSelectAll
            const arr = this.orderList.map((a) => {
                a.checked = this.isSelectAll;
                return a;
            });
            this.updateOrderList(arr);
        },
        addOrderList(orderItem: Cart) {
            this.orderList.push(orderItem);
        },
        updateOrderList(orderList) {
            this.orderList = orderList;
        },
        updateOrderItem(orderItem: Cart, index: number) {
            this.orderList.splice(index, 1, orderItem);
        },
    },
});
