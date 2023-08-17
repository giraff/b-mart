import Image from "next/image";
import React from "react";
import s from "./BannerSlider.module.scss";

export interface Banner {
  id: number;
  redirectUrl: string;
  imageUrl: string;
}
export interface Props {
  banners: Banner[];
}
export function BannerSlider({ banners }: Props): React.ReactElement {
  const totalCount = banners.length;

  const slides = totalCount > 1 ? [banners[totalCount - 1], ...banners, banners[0]] : banners;
  return (
    <div className={s.slider_container}>
      <div className={s.banner_list}>
        {slides.map((banner, i) => {
          return (
            <div className={s.banner_item} key={banner.id}>
              <Image src={banner.imageUrl} alt={`${banner.id}`} fill />
            </div>
          );
        })}
      </div>
    </div>
  );
}
