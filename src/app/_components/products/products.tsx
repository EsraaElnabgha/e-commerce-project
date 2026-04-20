import { getProducts } from "@/Apis/products.api";
import ProductItem from "../../_components/productItem/productItem";

export default async function Products() {
  const data = await getProducts();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {data?.map((prod) => <ProductItem key={prod._id} prod={prod} />)}
    </div>
  );
}
