import React from 'react';
import {Carousel} from 'antd'

import image1 from '../assets/images/flyers/viernes-30-10.jpg'
import image2 from '../assets/images/flyers/viernes-28-11.jpg'
import image3 from '../assets/images/flyers/viernes-20-11.jpg'
import image4 from '../assets/images/flyers/viernes-06-11.jpg'


function Flyers() {
    const slideStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };

    const imgStyle = {
        width: '100%',
      };



    return (
        <Carousel autoplay>

            <div style={slideStyle}> <img src={image1} style={imgStyle} /> </div>
            <div style={slideStyle}> <img src={image2} style={imgStyle} /> </div>
            <div style={slideStyle}> <img src={image3} style={imgStyle} /> </div>
            <div style={slideStyle}> <img src={image4} style={imgStyle} /> </div>
        </Carousel>
    );
}

export default Flyers;