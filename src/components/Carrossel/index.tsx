import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Adicionado Autoplay
import { carrossel } from "../../data/carrossel";
import styled, { css } from "styled-components";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  .swiper-button-prev { left: 25px; }
  .swiper-button-next { right: 25px; }
  .swiper-pagination-bullet-active { background-color: #fff; }
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

// Div que ficará sobre a imagem com o conteúdo
const ContentOverlay = styled.div<{ position: string }>`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 0 10%;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  ${({ position }) => {
    switch (position) {
    case "left": return css`text-align: left; align-items: flex-start;`;
    case "right": return css`text-align: right; align-items: flex-end;`;
    default: return css`text-align: center; align-items: center;`;
    }
  }}
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

const Coupon = styled.p`
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  margin-top: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
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
              <SlideImage src={item.srcImg} alt={item.alt} />
              <ContentOverlay position={item.content.position}>
                {item.content.preTitle && <PreTitle>{item.content.preTitle}</PreTitle>}
                <Title>{item.content.title}</Title>
                {item.content.subtitle && <Subtitle>{item.content.subtitle}</Subtitle>}
                {item.content.coupon && <Coupon>{item.content.coupon}</Coupon>}
                <ActionButton href={item.content.buttonLink}>
                  {item.content.buttonText} &rarr;
                </ActionButton>
              </ContentOverlay>
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperContainer>
  );
}

export default Carrossel;