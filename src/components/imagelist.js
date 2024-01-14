 import React from "react";
 const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
           
                <img src={image.webformatURL} alt={image.id} style={{width: "100px", height: "100px", objectFit: "cover", border: "1px solid black", margin: "10px"}} />
        
        );
    });
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {images}
        </div>
    );
 };
 export default ImageList;
