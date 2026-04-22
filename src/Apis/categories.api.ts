export interface CategoryInterface {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export async function getCategories(): Promise<CategoryInterface[]> {
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);
    const payload = await res.json();
    return payload?.data ?? [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getCategoryDetails(id: string): Promise<CategoryInterface> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
    if (!res.ok) throw new Error("Failed to fetch category details");
    const payload = await res.json();
    return payload?.data;
  } catch (error) {
    throw new Error("Failed to fetch category details");
  }
}