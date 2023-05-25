import Buyable from "./buyable";

export default class Book implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly onlyOne: boolean,
        readonly price: number,
        readonly discount?: number
    ) {}
}