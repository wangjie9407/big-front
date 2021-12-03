import { defineStore } from 'pinia'
import { Cart } from '@/apis/models/OrderModal'

export default defineStore({
    id: 'cart',
    state: () => ({
        orderList: [] as Cart[]
    }),
    getters: {
        list: (satte) => satte.orderList
    },
    actions: {
        addOrderList(orderItem: Cart) {
            this.orderList.push(orderItem)
        },
        updateOrderList(orderItem: Cart, index: number) {
            this.orderList.splice(index, 1, orderItem)
        },
    }
})