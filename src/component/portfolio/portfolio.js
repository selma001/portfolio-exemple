import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { useContext } from "react";
import {ThemeContext} from "../../Context"
import 'swiper/css'

function Portfolio(){

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode

    return(
        <div className="portfolio">
            {/* heading */}
            <span style={{color: darkMode?'white': ''}} >Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
            spaceBetween={0}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio