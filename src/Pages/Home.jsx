import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 flex text-white justify-center items-center z-10">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold font-serif mb-4">
                            AGENCY FOR <br/>
                            OUTDOOR <br/>
                            ADVERTISING
                        </h1>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className='background-image'>
                        <img src="/background.png" alt="Slide 1" className="w-full h-screen object-cover"/>
                    </div>
                    <div>
                        <img src="/background.png" alt="Slide 2" className="w-full h-screen object-cover"/>
                    </div>
                    <div>
                        <img src="/background.png" alt="Slide 3" className="w-full h-screen object-cover"/>
                    </div>
                </Slider>
            </section>
            <section className="relative top-5 right-0 left-0 min-h-screen flex items-start justify-center pt-5 md:pt-4 lg:pt-5 md:mb-0">
                <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-lg p-2 sm:p-4 lg:p-8 max-w-6xl w-full mb-1 sm:mb-4 gap-2 sm:gap-4 md:ml-2 lg:ml-4">
                    <div className="first-content mb-2 text-center md:text-left mt-0 md:mt-0 md:flex-1">
                        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">WE CREATE MASS <br/>PUBLIC'S EYE</h2>
                        <span className="text-xl sm:text-2xl text-red-500 font-semibold">ATTENTION</span>
                    </div>
                    <div className="other-content text-center md:text-left md:flex-1 px-1 sm:px-2">
                        <p className="text-sm sm:text-base leading-relaxed">
                            We are a value-driven organization. Our core values inspire us to push our boundaries and set benchmarks for others and have them believe that our organization is top class.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
