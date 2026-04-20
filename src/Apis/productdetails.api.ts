import { ProductInterface } from "../interfaces/products.interface";

export async function getProductDetails(id:string):Promise<ProductInterface> {
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
console.log(data);
        if (!data.ok)
        throw new Error("failed to fetch products");
        const payload = await data.json();
    return payload?.data ; 
    } catch (error) {
throw new Error("failed to fetch products");
    }
    
}