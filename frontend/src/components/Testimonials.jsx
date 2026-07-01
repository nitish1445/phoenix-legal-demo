import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonials } from "../assets/data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Testimonials() {
  return (
    <section className="px-2 py-24 md:py-32">
      <div className="container-pl grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading eyebrow="Client Voice" title="Trusted where reputation, capital, and control converge." />
        <Swiper modules={[Autoplay]} autoplay={{ delay: 4200 }} loop spaceBetween={24} className="w-full">
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <blockquote className="border border-pl-border bg-pl-white p-8 luxury-shadow">
                <p className="font-display text-xl md:text-2xl text-pl-text">{item.quote}</p>
                <footer className="mt-8">
                  <p className="font-semibold text-pl-walnut">{item.name}</p>
                  <p className="mt-1 text-sm text-pl-muted">{item.company}</p>
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
