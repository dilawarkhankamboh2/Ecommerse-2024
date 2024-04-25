
export interface ProductsTypes{
    name:string;
    price:number;
    stock:number;
    category:string;
    photo:string;
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