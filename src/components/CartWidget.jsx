import Carrito from '../assets/carrito.png'

export const CartWidget = () => {
    return(
        <div>
            <img src={Carrito} alt="carrito" class="carrito" />
            <span>0</span>
        </div>
        
    )
}