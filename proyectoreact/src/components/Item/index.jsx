import { ItemCount } from '../ItemCount';

export const Item = (props) => {
    return (

        <div className="card">
            <img src={props.productos.pictureUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.productos.title}</h5>
                    <p className="card-text">{props.productos.description}</p>
                    <p className="card-text">{props.productos.price}</p>
                    <ItemCount stock={props.productos.stock} initial="1"/>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}