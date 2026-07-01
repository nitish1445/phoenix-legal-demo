import ReactCountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { statistics } from "../assets/data.js";

const CountUp = ReactCountUp.default ?? ReactCountUp;

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section ref={ref} className="bg-pl-footer py-0">
      <div className="container-pl">
        <div className="grid grid-cols-2 overflow-hidden border-l border-t border-pl-white/10 md:grid-cols-3 lg:grid-cols-6">
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="group border-b border-r border-pl-white/10 bg-pl-footer p-6 text-center transition-all duration-300 hover:bg-pl-gold/5 sm:p-8"
            >
              <div className="font-display text-3xl font-light text-pl-gold transition-transform duration-300 group-hover:scale-105 md:text-4xl">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.2}
                    separator=","
                  />
                )}
                {stat.suffix}
              </div>

              <h3 className="mt-4 text-sm text-pl-white">
                {stat.label}
              </h3>

              {stat.desc && (
                <p className="mt-2 text-[9px] leading-5 tracking-wide text-pl-white/40">
                  {stat.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
