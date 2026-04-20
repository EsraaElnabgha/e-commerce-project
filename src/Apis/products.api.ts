import { ProductInterface } from "../interfaces/products.interface";

export async function getProducts():Promise<ProductInterface[]> {
    try {
        const data = await fetch("https://ecommerce.routemisr.com/api/v1/products");
console.log(data);
        if (!data.ok)
        throw new Error("failed to fetch products");
        const payload = await data.json();
    return payload?.data ?? []; 
    } catch (error) {
throw new Error("failed to fetch products");
    }
    
}

export async function getProductsByCategory(categoryId: string): Promise<ProductInterface[]> {
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`);
        if (!data.ok) throw new Error("failed to fetch category products");
        const payload = await data.json();
        return payload?.data ?? [];
    } catch (error) {
        throw new Error("failed to fetch category products");
    }
}