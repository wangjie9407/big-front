export interface Cart {
    url: string; nums: number; name: string, price: number
}

export interface Settle {
    selectAll: Boolean;
    total: Number;
}