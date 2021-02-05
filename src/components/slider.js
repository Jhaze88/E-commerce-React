import React, {useState} from 'react';
import img from '../imageSlide.json';
import SliderImage from './sliderImage';

export const Slider = () => {

    // const [index, setIndex] = useState(0);

    const [images, setImages] = useState(img.imageSlide);

    console.log("IMAGE--->",images);
    

    const rigtSlide = () => {

        
        
        // if (index === images.length - 1) {
        //     setIndex(0)
        // } else {
        //     setIndex(index +1)
        // }
        // setImages(images[index]);
        const newOrder = [];

        images.forEach( (photo, index) => {
        const newIndex = ++index >= images.length ?  0 : index;
            newOrder[newIndex] = photo;
            console.log("SRC-->", photo, index)
            
        })

        setImages(newOrder);
    };

    const leftSlide = () => {
        const newOrder = [];

        images.forEach( (photo, index) => {
            
                const newIndex = --index <= 0 ? images.length -1 : index;
                newOrder[newIndex] = photo;
                console.log("SRC-->", photo, index)
            })
            
        setImages(newOrder);
    };

    return (
        <>
            <div className='slider'>
                <div>
                    <button 
                        className="arrow-left" 
                        onClick={leftSlide}
                    >{"<"}
                    </button>
                        <SliderImage  
                            images={images}
                        />
                    <button 
                        className="arrow-right" 
                        onClick={rigtSlide}
                    >{">"}
                    </button> 
                </div>
            </div>
        </>
    )
};

export default Slider;


