
import bookcover from '../images/book-cover.png'
import { CiHeart } from "react-icons/ci";
import './BookInfo.css'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";

function BookInfo(){

    return(
        <div className='Page-main'>
            <div className='Columns'>
                <div className='Column'>
                    <div className='BookInfo-Container'>
                        <div className='BookInfo-Inner-Container-One'>
                            <h5>La Gran Cacería n 02/14</h5>
                            <p>Autor: Robert Jordan</p>
                            <p>Editorial: Minotauro</p>
                            <p>ISBN: 9788445007013</p>
                            <p className='Favorite'><span><CiHeart /></span>Agregar a tus favoritos</p>
                            <p className='Share'><span><CiHeart /></span>Compartir</p>
                        </div>
                        <div className='BookInfo-Inner-Container-Two'>
                            <div className='Image-Container'>
                            <img src={bookcover} />
                            <p>tapa blanda</p>
                            </div>
                        </div>
                        <div className='BookInfo-Inner-Container-Three'>
                            <div className='BookInfo-Inner-Container-Three-Background'>
                                <div className='Details-Price-Container'>
                                    <div className='Details-Price-Container-One'>
                                        <h6>Precio</h6>
                                        <p>Acumula hasta $48 puntos</p>
                                    </div>
                                    <div>
                                        <p className='Price'>$488</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Quantity-Container'>
                                <div>
                                    <p>
                                        Cantidad
                                    </p>
                                </div>
                                <div className='Quantity-Selector'>
                                    <CiCircleMinus size={25} color='gray'/>
                                    <p>1</p>
                                    <CiCirclePlus size={25}/>
                                </div>
                            </div>
                            <div className='Button-Container'>
                                <button className='Button'>AGREGAR A MI BOLSA</button>
                            </div>
                            <div className='Delivery-Container'>
                                <p><FaTruck size={20}/><span>Envío gratis siempre</span></p>
                                <p>Recíbelo mañana</p>
                                <p><u>Validad tiempo de entrega</u></p>
                            </div>
                            <div className='Delivery-Store-Container'>
                                <p><IoStorefrontSharp size={20}/><u>Recoger en Librería</u></p>
                                <p>Servicio limitado a un libro por servicio</p>
                            </div>
                            <div className='Delivery-Store-Container-Available'>
                                <p ><BsHandbag size={20}/><u>Ver disponibilidad</u></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {BookInfo}