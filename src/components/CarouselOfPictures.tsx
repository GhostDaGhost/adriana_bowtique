import { Carousel } from "react-responsive-carousel";

import FeaturedPicture1 from '../assets/featured.jpg';
import FeaturedPicture2 from '../assets/featured2.jpg';
import FeaturedPicture3 from '../assets/featured3.jpg';
import FeaturedPicture4 from '../assets/featured4.jpg';

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
        </Carousel>
    )
}

export default CarouselOfPictures;
