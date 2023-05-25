import Buyable from "./buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add (item: Buyable): void{
        if(this._items.includes(item) && item.onlyOne === true){
            return;
        }
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getPrice(): number {
        let sum = 0;
        for(let item of this._items){
            if(item.price === undefined){
                continue;
            }
            sum += item.price;
        }
        return sum;
    }

    getDiscountPrice (discount: number): number {
        let sum = this.getPrice();
        let discountPrice = sum - (sum/100 * discount);
        return discountPrice;
    }

    deleteItem(id: number): void{
        for(let item of this._items){
            if(item.onlyOne === false && item.id === id){
                const index = this._items.findIndex(item => item.id === id);
                    if (index !== -1) {
                    this._items.splice(index, 1);
                    }
                break;
            } else{
                this._items.splice(0, this._items.length, ...this._items.filter(item => item.id !== id));
            }
        }
    }
}
