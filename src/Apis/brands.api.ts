export interface BrandInterface {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export async function getBrands(): Promise<BrandInterface[]> {
  try {
    const [page1, page2] = await Promise.all([
      fetch("https://ecommerce.routemisr.com/api/v1/brands?page=1"),
      fetch("https://ecommerce.routemisr.com/api/v1/brands?page=2"),
    ]);

    if (!page1.ok || !page2.ok)
      throw new Error("Failed to fetch brands");

    const [data1, data2] = await Promise.all([
      page1.json(),
      page2.json(),
    ]);

    return [...(data1?.data ?? []), ...(data2?.data ?? [])];
  } catch (error) {
    throw new Error("Failed to fetch brands");
  }
}

export async function getBrandDetails(id: string): Promise<BrandInterface> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
    if (!res.ok) throw new Error("Failed to fetch brand details");
    const payload = await res.json();
    return payload?.data;
  } catch (error) {
    throw new Error("Failed to fetch brand details");
  }
}
