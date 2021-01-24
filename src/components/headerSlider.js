import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination]);

export default function HeaderSlider() {
	const slides = [];

	for (let i = 0; i < 4; i++) {
		slides.push(
			<SwiperSlide key={i}>
				<img className="swiper-slide-image" src={'https://picsum.photos/id/' + i + '/750/300'} alt={'slide' + i} />
				<span className="swiper-slide-descriptopn">text description text description text description</span>
			</SwiperSlide>
		)
	}

	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			loop={true}
			navigation
			pagination={{ clickable: true }}
		>
			{slides}
		</Swiper>
	);
};