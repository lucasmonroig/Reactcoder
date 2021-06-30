import React, {useState, useEffect} from "react";
import { ItemList } from "../../components/ItemList";

export const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    useEffect( ()=>{
        fetch("./productos/productos.json")
        .then(response => response.json())
        .then(data =>{
            setProductos(data)
        })
    },[])

    return (
        <>
        <h1>{props.greeting}</h1>
        <ItemList productos={productos}/>
    </>
    )
}