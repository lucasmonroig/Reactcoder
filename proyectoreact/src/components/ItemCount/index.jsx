import { useState } from "react";

export const ItemCount = (props) => {

    const [valor, setValor] = useState(props.initial);

    function onAdd() {
        if (valor < props.stock) {
            setValor(parseInt(valor) + 1)
        }
    }

    function onSubstract() {
        if (valor > 1) {
            setValor(parseInt(valor) - 1)
        } else {
            alert("La cantidad no puede ser menor a 1")
        }
    }

    return (
        <div className="input-group mb-3">
           
           <div className="input-group-prepend">
                <button className="btn btn-secondary" type="button" onClick={onSubstract}>-</button>
            </div>
            <input type='number' value={valor} readOnly className="form-control" />
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button" onClick={onAdd}>+</button>
            </div>
        </div>
    )
}