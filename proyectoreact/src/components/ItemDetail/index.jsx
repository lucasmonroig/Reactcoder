import React from "react";
import { ItemCount } from '../ItemCount';


export const ItemDetail = (props) => {

    return (
        <div className="card">
            <img src={props.item[0].book_image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{props.item[0].description}</p>
                <p className="card-text">$ {props.item[0].price}</p>
            </div>
            <ItemCount initial={1} stock={5}/>
        </div>
    )
    }