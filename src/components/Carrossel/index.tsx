import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Adicionado Autoplay
import styled from "styled-components";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

interface Carrousel {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
}

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 0 10%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  align-items: center;
`;

const StyledSwiperContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    width: 44px;
    height: 44px;

    &:after {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .swiper-button-prev {
    left: 25px;
  }
  .swiper-button-next {
    right: 25px;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
`;

// Container para cada slide
const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px; // Altura do banner
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// --- Componentes para o texto ---
const PreTitle = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0.5rem 0;
  line-height: 1;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  max-width: 450px;
`;

const ActionButton = styled.a`
  background-color: #8a2be2;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #7a1fb8;
  }
`;

function Carrossel() {
  const [carrossel, setCarrossel] = useState<Carrousel[]>([]);

  useEffect(() => {
    axios
      .get<Carrousel[]>("http://localhost:3001/carousel")
      .then((resposta) => {
        console.log(resposta.data);
        setCarrossel(resposta.data);
      });
  }, []);

  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Autoplay adicionado
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Rotação automática
      >
        {carrossel.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideContainer>
              <SlideImage src={item.backgroundImage} alt={item.description} />
              <ContentOverlay>
                {item.subtitle && <PreTitle>{item.subtitle}</PreTitle>}
                <Title>{item.title}</Title>
                {item.description && <Subtitle>{item.description}</Subtitle>}
                <ActionButton>Comprar Agora &rarr;</ActionButton>
              </ContentOverlay>
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperContainer>
  );
}

export default Carrossel;
