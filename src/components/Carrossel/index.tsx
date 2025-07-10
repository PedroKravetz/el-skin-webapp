import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { carrossel } from "../../data/carrossel";

import styled from "styled-components";

const StyledSwiperContainer = styled.div`
  width: 100%; // Ocupa toda a largura
  margin: 2rem 0; // Apenas margem vertical, sem 'auto' horizontal

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff; // Setas brancas para melhor contraste
    background-color: rgba(0, 0, 0, 0.25); // Fundo sutil para visibilidade
    border-radius: 50%;
    width: 44px; // Tamanho ajustado
    height: 44px;
    
    &:after {
      font-size: 1.2rem; // Tamanho do ícone da seta
      font-weight: bold;
    }
  }

  // Posicionamento das setas para dentro da área do carrossel
  .swiper-button-prev {
    left: 25px;
  }

  .swiper-button-next {
    right: 25px;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff; // Paginação branca
  }
`;

const SlideImage = styled.img`
  width: 100%;
  object-fit: cover;
  // Sem border-radius para que a imagem preencha as laterais
`;

function Carrossel() {
  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Navigation, Pagination]} // Módulos para setas e bolinhas
        spaceBetween={0} // Espaço entre os slides
        slidesPerView={1} // Quantos slides mostrar por vez
        navigation // Habilita as setas de navegação
        pagination={{ clickable: true }} // Habilita a paginação clicável
        loop={true}
        centeredSlides={true}
      >
        {carrossel.map((carrossel) => (
          <SwiperSlide key={carrossel.id}>
            <SlideImage src={carrossel.srcImg} alt={carrossel.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperContainer>
  );
}

export default Carrossel;
