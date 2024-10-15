'use client';

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Preview1 from '@/assets/image/preview-1.png';
import Preview2 from '@/assets/image/preview-2.png';
import { cn } from '@/utils';

interface PreviewProps extends React.ComponentProps<'section'> { }

const Preview = (props: PreviewProps) => {
  const { className, ...rest } = props;

  return (
    <section
      className={cn('bg-[#181818] py-40', className)}
      {...rest}>
      <div className="container mx-auto flex flex-col-reverse items-center gap-6 px-12 md:flex-row lg:px-36 xl:gap-12 xl:px-48">
        <Swiper
          className={cn('max-w-full')}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel
          navigation
          autoplay
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Navigation, Pagination, Autoplay]}
          style={
            {
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#171717',
              '--swiper-pagination-bottom': '1rem',
              '--swiper-pagination-bullet-inactive-color': '#171717',
              '--swiper-pagination-bullet-inactive-opacity': '0.5',
              '--swiper-navigation-sides-offset': '0',
            } as React.CSSProperties
          }>
          {[Preview1, Preview2].map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                className={cn('mx-auto h-96 w-auto md:h-4/5')}
                src={item}
                height={896}
                alt={`app preview ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <hgroup className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-white lg:text-4xl xl:text-6xl">
            AirQ AI
          </h3>
          <h4 className="text-base font-bold text-[#C5C5C5] lg:text-xl xl:text-3xl">
            Simply take a photo, and you&apos;ll know the air quality of your
            location.
          </h4>
        </hgroup>
      </div>
    </section>
  );
};

export { Preview };
