
export interface ProductsTypes{
    name:string;
    description:string;
    price:number;
    stock:number;
    category:string;
    images:[{image:string}];
    rating:number;
    numOfReviews:number;
    reviews:[{
        name:string;
        rating:number;
        comment:string;
    }]
}

export interface SearchQuery{

    name?: {
        $regex:string,
        $options:string;
    };
    price?:{ $lte: number};
    category?:string;
}

export type ProductQuery = {
    search?: string;
    price?: string;
    category?: string;
  };