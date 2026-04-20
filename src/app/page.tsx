import Products from "./_components/products/products";
import MySlider from "./_components/slider/slider";
import slider from "../assets/slider/newcollection.jpg"
import slider1 from "../assets/slider/chic.jpg"
import slider2 from "../assets/slider/fashion.jpg"
import Categories from "./_components/categories/categories";
import Features from "./_components/features/features";

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-8 space-y-12">
      {/* slider */}
      <div className="rounded-lg overflow-hidden">
        <MySlider slidesPerView={1} PageList={[slider, slider1, slider2]} />
      </div>

      {/* features */}
      <Features />

      {/* categories */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Shop By <span className='text-green-600 underline'>Categories</span></h2>
        <Categories />
      </section>

      {/* products */}
      <section>
        <h2 className='text-2xl font-bold mb-6'>Featured <span className='text-green-600 underline'>Products</span></h2>
        <Products />
      </section>
    </div>
  );
}
