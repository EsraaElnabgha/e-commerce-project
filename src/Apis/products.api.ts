import { ProductInterface } from "../interfaces/products.interface";

export async function getProducts(): Promise<ProductInterface[]> {
  try {
    const data = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
      next: { revalidate: 3600 },
    });
    if (!data.ok) throw new Error(`Failed to fetch products: ${data.status}`);
    const payload = await data.json();
    return payload?.data ?? [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductsByCategory(categoryId: string): Promise<ProductInterface[]> {
  try {
    const data = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`, {
      next: { revalidate: 3600 },
    });
    if (!data.ok) throw new Error(`Failed to fetch category products: ${data.status}`);
    const payload = await data.json();
    return payload?.data ?? [];
  } catch (error) {
    console.error("Error fetching category products:", error);
    return [];
  }
}