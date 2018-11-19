export interface IProduct {
    id: number;
    productName: string;
    productCode: string;
    tags?: string[];
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// export class Product implements IProduct {
//     constructor(
//         public productId: number,
//         public productName: string,
//         public productCode: string,
//         public releaseDate: string,
//         public price: number,
//         public description: string,
//         public starRating: number,
//         public imageUrl: string
//     ){

//     }
//     calculateDiscount(persent: number): number {
//         return this.price - (this.price * persent / 100);
//     }
// } 