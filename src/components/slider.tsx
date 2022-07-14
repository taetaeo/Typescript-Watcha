import React from "react";
import ReactSlick, { Settings } from "react-slick";
import styled from "@emotion/styled";
import { MdArrowBack, MdArrowBackIos, MdArrowForward, MdArrowForwardIos } from "react-icons/md"; // 좌우 화살표

const DEFAULT_SETTINGS: Settings = {
  dots: false, // 하단 인디케이터
  arrows: true, // 좌우 이동 화살표 표시
  infinite: false, // 오토 플레이
  speed: 500, // 오토 플레이 스피드
  slidesToShow: 5,
  slidesToScroll: 5,
  swipe: true,
  draggable: true,
  prevArrow: (<ArrowButton>
    <MdArrowBackIos/>
  </ArrowButton>),
  nextArrow: (<ArrowButton>
    <MdArrowForwardIos/>
  </ArrowButton>),
};

interface Props<Iove {
  settings?: Settings;
}

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => {
  return <ReactSlick {...settings}>
    {children}
  </ReactSlick>;
};

export default Slider;

const ArrowButton = styled.button``;
