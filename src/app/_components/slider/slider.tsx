"use client"
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function MySlider({ slidesPerView, PageList }: {
    slidesPerView: number,
    PageList: any[]
}) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={5}
            slidesPerView={slidesPerView}
            navigation
            pagination={{
                clickable: true, renderBullet:
                    (index, className) => { return `<span class="${className}"></span>` },
                bulletActiveClass: "bg-white! opacity-100!",
            }}
        >

            {PageList.map((img, index) =>
                <SwiperSlide key={index}>
                    <Image src={img} alt="" width={1200} height={600} priority className='w-full h-[250px] object-cover rounded-lg' />
                </SwiperSlide>
            )}
        </Swiper>
    );
};