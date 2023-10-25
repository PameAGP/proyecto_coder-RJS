import {CartWidget } from "./CartWidget"


export const NavBar = () => {
    return (
        <nav>
            <div>
                <h2>Peluquería</h2>
                <ul>
                    <li><a href="">Femenina</a></li>
                    <li><a href="">Masculina</a></li>
                    <li><a href="">Niños</a></li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}