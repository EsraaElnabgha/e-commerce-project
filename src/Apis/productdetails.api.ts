import { ProductInterface } from "../interfaces/products.interface";

export async function getProductDetails(id: string): Promise<ProductInterface | null> {
  try {
    const data = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!data.ok) throw new Error(`Failed to fetch product details: ${data.status}`);
    const payload = await data.json();
    return payload?.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}