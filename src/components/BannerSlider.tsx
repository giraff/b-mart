import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import s from "./BannerSlider.module.scss";
import { Banner } from "@/types/product";

export interface Props {
  banners: Banner[];
}
export const INTERVAL_ID_NONE = -1;
export const BANNER_SCROLL_INTERVAL = 3500; // msecond

export function BannerSlider({ banners }: Props): React.ReactElement {
  const listRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const intervalId = useRef<number>(INTERVAL_ID_NONE);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalCount = banners.length;

  const autoScroll = () => {
    const { scrollLeft, offsetWidth } = listRef.current;

    listRef.current.scrollTo({
      left: scrollLeft + offsetWidth,
      behavior: "smooth"
    });
  };

  const stopAutoScroll = () => {
    if (intervalId.current === INTERVAL_ID_NONE) {
      return;
    }

    window.clearInterval(intervalId.current);
    intervalId.current = INTERVAL_ID_NONE;
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalId.current = window.setInterval(autoScroll, BANNER_SCROLL_INTERVAL);
  };

  const initSlider = () => {
    listRef.current.scrollLeft = listRef.current.offsetWidth;
  };

  const scrollHandler = () => {
    const listElement = listRef.current;
    const { scrollLeft, scrollWidth, offsetWidth } = listElement;

    // 더미 제외 마지막 배너 위치를 넘어갈 때
    if (scrollWidth - offsetWidth - scrollLeft <= 0) {
      listElement.style.scrollBehavior = "initial";
      listElement.scrollLeft = offsetWidth;
      listElement.style.scrollBehavior = "smooth";
    }

    // 좌측 스크롤 끝에 도달했을 때
    if (scrollLeft <= 0) {
      listElement.style.scrollBehavior = "initial";
      listElement.scrollLeft = scrollWidth - 2 * offsetWidth;
      listElement.style.scrollBehavior = "smooth";
    }

    const newCurrentIndex = Math.round(listElement.scrollLeft / offsetWidth) - 1;
    if (newCurrentIndex < 0 || newCurrentIndex > totalCount - 1) {
      setCurrentIndex(totalCount - 1);
    } else {
      setCurrentIndex(newCurrentIndex);
    }
  };

  useEffect(() => {
    initSlider();
    startAutoScroll();
    listRef.current.addEventListener("mouseenter", stopAutoScroll);
    listRef.current.addEventListener("mouseleave", startAutoScroll);
    listRef.current.addEventListener("touchstart", stopAutoScroll);
    listRef.current.addEventListener("touchend", startAutoScroll);
    listRef.current.addEventListener("scroll", scrollHandler);

    return () => {
      stopAutoScroll();
      listRef.current?.removeEventListener("mouseenter", stopAutoScroll);
      listRef.current?.removeEventListener("mouseleave", startAutoScroll);
      listRef.current?.removeEventListener("touchstart", stopAutoScroll);
      listRef.current?.removeEventListener("touchend", startAutoScroll);
      listRef.current?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const slides = totalCount > 1 ? [banners[totalCount - 1], ...banners, banners[0]] : banners;
  return (
    <>
      <div className={s.slider_container}>
        <div className={s.banner_list} ref={listRef}>
          {slides.map((banner, i) => {
            return (
              <div className={s.banner_item} key={i}>
                <Image src={banner.imageUrl} alt={`${banner.id}`} fill />
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.carousel_dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${s.dot} ${i === currentIndex ? s.active_dot : ""}`}
            onClick={() => setCurrentIndex(i)}
          >
            점
          </span>
        ))}
      </div>
    </>
  );
}
