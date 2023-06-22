import { useParams } from "react-router-dom";
import useGetDetail from "../../hooks/useGetDetail";
import { ContainerDetail, ContainerInfo, ImageBackground, Image, ContentRight, Loader } from "./style";
import { useState } from "react";
import { Dna } from 'react-loader-spinner'
import { AiTwotoneStar } from 'react-icons/ai';
import { OverviewSection } from "./OverviewSection/OverviewSection";
import { DetailsSection, MoreLikeThisSection, SectionsList, TrailersContent } from "..";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Footer } from "../../components";

interface Genre {
  id: number
  name: String
}

export const Detail = () => {
  const { type, id } = useParams();
  const [isSelected, setIsSelected] = useState('more like this');

  const handleSelectedClick = (section: string) => {
    setIsSelected(section)
  }

  const { detail, isLoading } = useGetDetail({ type, id })

  if (!isLoading) {
    return <Loader><Dna /></Loader>
  }

  const style = {
    padding: '.5rem 1.5rem',
    borderRadius: '20px',
    border: '2px solid #fff',
    fontSize: '.8rem',
    fontWeight: 'bold'
  }

  const sectionComponents: any = {
    'overview': <OverviewSection detail={detail} />,
    'trailers': <TrailersContent />,
    'more like this': <MoreLikeThisSection detail={detail} />,
    details: <DetailsSection detail={detail} />
  };

  console.log(detail);
  
  return (
    <>
      <ContainerDetail>
        <div>
          <ImageBackground src={`https://image.tmdb.org/t/p/w1280/${detail.data.backdrop_path}`} alt={`image banner ${detail.data.title}`} />
        </div>
        <ContainerInfo>
          <Image src={`https://image.tmdb.org/t/p/w500/${detail.data.poster_path}`} alt={`image ${detail.data.name}`} />
          <ContentRight>
            <div className="aaaa">
              <h2 style={{ paddingBottom: '.8rem' }}>{detail.data.name || detail.data.title}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{detail.data.vote_average}</p>
                <AiTwotoneStar />
              </div>
            </div>
            <p style={{ color: '#afadad', fontWeight: 'bold' }}>{detail.data.first_air_date || detail.data.release_date} | {type}: {detail.data.last_episode_to_air?.episode_number ?? 'Movie'} | 16+</p>
            <div style={{ display: 'flex', gap: '10px', paddingBlock: '1rem' }}>
              {detail.data.genres.map((genre: Genre) => {
                return <p style={style} key={genre.id}>{genre.name}</p>
              })}
            </div>
            <SectionsList handleSelectedClick={handleSelectedClick} isSelected={isSelected} />
            {isSelected === 'trailers' ? <TrailersContent detail={detail} /> : sectionComponents[isSelected]}
          </ContentRight>
        </ContainerInfo>
        <Swiper>
          <SwiperSlide>
            
          </SwiperSlide>
        </Swiper>
      </ContainerDetail>
    </>
  )
}