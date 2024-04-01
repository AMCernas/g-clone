import './SearchBar.css'
import { IoIosSearch } from "react-icons/io";


function SearchBar(){
    return(
        <div className='SearchBar-Container'>

        <div className='SearchBar-Link-Container'>
            <div className='SearchBar-Left-Link-Container'>
                <p className='Red-Color'>RINCÓN DE OPORTUNIDADES</p>
            </div>
            <div className='SearchBar-Right-Link-Container'>
                <p>LIBROS </p>
                <p>EBOOKS </p>
                <p>AUDIOLIBROS </p>
                <p>GANDHI SELECTO </p>
                <p>KOBO </p>
                <p>ACCESORIOS</p>
            </div>
        </div>

        <div className='Input-Container'>
            <input className="Input" placeholder='Busca por nombre, autor o ISBN'></input>
        </div>

        </div>
    )
}

export {SearchBar}