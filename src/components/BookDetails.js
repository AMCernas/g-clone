
import './BookDetails.css'
import React, { useState } from 'react';
import { TbNumber } from "react-icons/tb";
import { FaEarthAmericas } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { TbDimensions } from "react-icons/tb";
import { FaBarcode } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function BookDetails() {

  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);

  return (
    <div>
        <div className='BookDetails-Container'>
            <div className='Dropdown-Details-Container-One'>
                <div className='Button-Details-Container'>
                    <button className='Dropdown-Details' onClick={() => setIsOpenFirst(!isOpenFirst)}>SINOPSIS</button><span><FaChevronDown /></span>
                </div>
                {isOpenFirst && (
                    <div>
                    <p>
                    ¡Rand ha sobrevivido a su primer enfrentamiento con los perversos seguidores del Oscuro, pero ni sus amigos ni él están a salvo, ya que el señor del mal ha liberado a los Renegados, mientras los héroes de todas las eras se levantan de la tumba cuando el Cuerno de Valere los saca de su sueño. Al verse obligado a enfrentarse a las fuerzas de la oscuridad, Rand decide escapar de su destino.Pero la profecía tiene que cumplirse. Por su calidad literaria, su ambicioso planteamiento y su descomunal historia, La Rueda del Tiempo es la saga de fantasía más importante de los últimos treinta años. El lector que inicie el camino junto a Egwene alVere, Nynaeve alMeara, Moraine, Rand, Mat y Perrin no podrá abandonar el viaje hasta su incierto y sorprendente final.
                    </p>
                    </div>
                )}
            </div>
            <div className='Dropdown-Details-Container-Two'>
                <div className='Button-Details-Container'>
                    <button className='Dropdown-Details' onClick={() => setIsOpenSecond(!isOpenSecond)}>CARACTERISTICAS</button><span><FaChevronDown /></span>
                </div>
                {isOpenSecond && (
                    <div>
                        <div className='Details'>
                            <p><span><TbNumber/></span>Número de páginas</p> <p>720</p>
                        </div>
                        <div className='Details'>
                            <p><span><FaEarthAmericas /></span>Idioma</p> <p>Español</p>
                        </div>
                        <div className='Details'>
                            <p><span><CiCalendar/></span>Fecha de publicación</p> <p>01 de Enero 2021</p>
                        </div>
                        <div className='Details'>
                            <p><span><TbDimensions/></span>Dimensiones</p> <p>150 x 230 x 40 cm</p>
                        </div>
                        <div className='Details'>
                            <p><span><FaBarcode /></span>ISBN</p> <p>9788445007013</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <div className='Author-Container'>
            <h5>Escrito por...</h5>
            <p className='Author-Name'>ROBERT JORDAN</p>
            <p>Robert Jordan (1948 – 2007) escribió críticas de danza y teatro, pero es la épica y extensa serie de La Rueda del Tiempo lo que hizo de él uno de los escritores de fantasía contemporáneos más famoso y querido. Antes de su prematura muerte en 2007, Robert Jordan dejó indicaciones sobre cómo debía ser el final de la saga para que Brandon Sanderson, reconocido autor del género fantástico, lo escribiera con la ayuda de Harriet McDougal, viuda de Jordan y editora de La Rueda del Tiempo. Sin embargo, debido a su extensión, se decidió convertirlo en tres tomos.</p>
        </div>
    </div>
  );
}

export {BookDetails}