import { FileHandle } from "./file-handle.model";

export interface Product{
    // medicinName:string,
    // medicinDescription:string,
    // medicinDiscountPrice:number,
    // medicinActualPrice:number,
    // productImages:FileHandle[]
    medicinId:number;
    medicinname:String;
    description:String;
    brand:String;
    price:number;
    quantity:number;
    medicinImages:FileHandle[]

}




