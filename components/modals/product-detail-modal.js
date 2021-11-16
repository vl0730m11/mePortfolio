import React, { useEffect, useRef, useState, createRef } from "react";
import ReactDOM from "react-dom";
import classes from './product-detail-modal.module.css'

function ProductDetailModal(props) {
    const { title, image, category, excert, date, slug } = props.product;
    const [imageIsPortrait, setImageIsPortrait] = useState(true);
    const imagePath = `/images/products/${image}`;

    var img = new Image();
    img.src = imagePath;
    img.onload = function () {
        var height = img.height;
        var width = img.width;
        height > width ? setImageIsPortrait(true) : setImageIsPortrait(false);
    }

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className={classes.modal} >
            {imageIsPortrait ?
                <img src={imagePath} alt={title} style={{ height:"40rem" }} /> :
                <img src={imagePath} alt={title} style={{ width: "100%" }} />
            }
            <div className={classes.description}>
                <p><strong>Create Time:</strong> {formattedDate} - {category}</p>
                <p><strong>Description:</strong> {excert}</p>
            </div>
        </div>
    );
}

export default ProductDetailModal