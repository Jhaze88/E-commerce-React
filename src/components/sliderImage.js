import React from 'react';


const SliderImage = ({ images }) => {

    return (
        <>

            
            {/* <img 
                className="slider-img" 
                src={images.image} 
                alt={images.image} 
            /> */}
            {   
                images.map( (photo) => {
                    return (
                        <img 
                            className="slider-img" 
                            key={photo.id} 
                            src={photo.image} 
                            alt={photo.image}
                        />
                    )
                })
            }
            
         </>
    )
}

export default SliderImage;


