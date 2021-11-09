import React, { useEffect, useRef, useState, createRef } from "react";
import ReactDOM from "react-dom";
import classes from './product-detail-modal.module.css'

function ProductDetailModal(props){
    const { title, image, category, excert, date, slug } = props.product;
    const imagePath = `/images/products/${image}`;
    const innerRef = useRef();

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return(
        <div className={classes.modal} ref={innerRef}>
            <img src={imagePath} alt={title} style={{ width:"100%" }}/>
            <div className={classes.description}>
                <p><strong>Create Time:</strong> {formattedDate} - {category}</p>
                <p><strong>Description:</strong> {excert}</p>
            </div>
        </div>
    );
}

export default ProductDetailModal