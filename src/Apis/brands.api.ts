export interface BrandInterface {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export async function getBrands(): Promise<BrandInterface[]> {
  try {
    const [page1, page2] = await Promise.all([
      fetch("https://ecommerce.routemisr.com/api/v1/brands?page=1", {
        next: { revalidate: 3600 },
      }),
      fetch("https://ecommerce.routemisr.com/api/v1/brands?page=2", {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!page1.ok || !page2.ok)
      throw new Error("Failed to fetch brands");

    const [data1, data2] = await Promise.all([
      page1.json(),
      page2.json(),
    ]);

    return [...(data1?.data ?? []), ...(data2?.data ?? [])];
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
}

export async function getBrandDetails(id: string): Promise<BrandInterface | null> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Failed to fetch brand details: ${res.status}`);
    const payload = await res.json();
    return payload?.data;
  } catch (error) {
    console.error("Error fetching brand details:", error);
    return null;
  }
}
