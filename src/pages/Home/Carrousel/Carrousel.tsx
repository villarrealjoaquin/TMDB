import { ContainerSwiper, ImageCarrousel, NewPremiersContainer, Svg } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movie } from '../../../models/types';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../constants/images';
import 'swiper/css';
import 'swiper/css/navigation';

interface CarrouselProps {
  category: string;
  movies: Movie[];
}

export function Carrousel({ category, movies }: CarrouselProps) {
  return (
    <NewPremiersContainer>
      <h2>{category}</h2>
      <ContainerSwiper>
        <Swiper
          navigation={true}
          slidesPerView={9}
          breakpoints={{
            1700: {
              slidesPerView: 9,
            },
            1500: {
              slidesPerView: 8,
            },
            1300: {
              slidesPerView: 7,
              spaceBetween: 100
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 100
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 100
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 60
            },
            640: {
              slidesPerView: 3,
              // spaceBetween: 70,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            100: {
              slidesPerView: 1,
              // spaceBetween: 10
            }
          }}>
          {movies?.map((movie: Movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`${movie.type}/${movie.id}`}>
                <ImageCarrousel
                  src={`${BASE_URL}${movie.poster_path}`}
                  alt={`Movie ${movie.title}`}
                />
               {/* <Svg>
                <MdViewCompact />
                <BsFillHeartFill />
               </Svg> */}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerSwiper>
    </NewPremiersContainer>
  );
}