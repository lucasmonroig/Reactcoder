export const CartWidgetComponent = (props) => {

    return (
      <>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          <ion-icon name="cart-outline"></ion-icon>  Carrito
        </button>
  
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn" data-dismiss="modal">X</button>
            </div>
            
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}