import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMeels } from './topMeel';
import CarouselItem from './CarouselItem';


export const MultiItemCarousel = () => {
    return (
        <div>
            <Slider>
                {topMeels.map((item)=> <CarouselItem image={item.image} title={item.title}/>)}
            </Slider>
        </div>
    )
}

export default MultiItemCarousel;