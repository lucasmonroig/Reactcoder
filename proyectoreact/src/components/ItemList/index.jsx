import React from "react";
import { Item } from "../Item";


export const ItemList = (props) =>{

    return(
        <div>
            {props.productos.map( element => {
                    return <Item productos={element} key={element.id}/>
                })
            }
        </div>
    )
}
