export interface Cart {
    url: string; nums: number; name: string; price: number;checked: boolean
}

export interface Settle {
    selectAll: Boolean;
    total: Number;
}