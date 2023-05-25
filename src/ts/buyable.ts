export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly onlyOne: boolean,
    readonly nameInEnglish?: string,
    readonly year?: number,
    readonly country?: string,
    readonly tagline?: string,
    readonly genre?: string[],
    readonly time?: number | string [],
    price?: number,
    discount?: number
}