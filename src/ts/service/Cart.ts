import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalSum(): number {
        return this._items.reduce((accum: number, current: Buyable) => accum + current.price, 0);         
    }

    totalSumDiscounted(discount: number): number {
        const result = this.totalSum();
        return result - (result * (discount / 100));
      }
    
    removeCart(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
      }
}