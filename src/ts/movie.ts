import Buyable from "./buyable";

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly onlyOne: boolean,
        readonly nameInEnglish?: string,
        readonly year?: number,
        readonly country?: string,
        readonly tagline?: string,
        readonly genre?: string[],
        readonly time?: string []
    ) {}
}