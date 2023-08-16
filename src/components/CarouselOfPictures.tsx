import { Carousel } from "react-responsive-carousel";

import FeaturedPicture1 from '../assets/featured.jpg';
import FeaturedPicture2 from '../assets/featured2.jpg';
import FeaturedPicture3 from '../assets/featured3.jpg';
import FeaturedPicture4 from '../assets/featured4.jpg';

import FeaturedPicture5 from '../assets/featured5.jpg';
import FeaturedPicture6 from '../assets/featured6.jpg';
import FeaturedPicture7 from '../assets/featured7.jpg';
import FeaturedPicture8 from '../assets/featured8.jpg';

// CAROUSEL OF PICTURES
const CarouselOfPictures = () => {
    return (
        <Carousel dynamicHeight autoPlay useKeyboardArrows infiniteLoop>
            <div>
                <img src={FeaturedPicture1} alt="featured picture #1" draggable="false" loading="lazy" />
            </div>

            <div>
                <img src={FeaturedPicture2} alt="featured picture #2" draggable="false" loading="lazy" />
            </div>

            <div>
                <img src={FeaturedPicture3} alt="featured picture #3" draggable="false" loading="lazy" />
            </div>

            <div>
                <img src={FeaturedPicture4} alt="featured picture #4" draggable="false" loading="lazy" />
            </div>

            <div>
                <img src={FeaturedPicture5} alt="featured picture #5" draggable="false" loading="lazy" />
            </div>

            <div>
                <img src={FeaturedPicture6} alt="featured picture #6" draggable="false" loading="lazy" />
            </div>

            <div>
                <img src={FeaturedPicture7} alt="featured picture #7" draggable="false" loading="lazy" />
            </div>

            <div>
                <img src={FeaturedPicture8} alt="featured picture #8" draggable="false" loading="lazy" />
            </div>
        </Carousel>
    )
}

export default CarouselOfPictures;
