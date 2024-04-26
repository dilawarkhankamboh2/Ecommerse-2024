

export interface OrderTypes{

    shippingInfo:[{
        address:string;
        city:string;
        state:string;
        country:string;
        pinCode:number;
    }]

    ordersItems:[{
        productId:string;
        name:string;
        price:number;
        photo:string;
        qty:number
    }]

    shippingCharges:number;
    total:number;
    subTotal:number;
    tax:number;
    discount:number;
    status: "Processing" | "Shipped" | "Delivered" | "Processing",
    user?:string;
}