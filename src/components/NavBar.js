import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineStorage } from "react-icons/md";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { FiUser } from "react-icons/fi";
import logo from '../images/librerias-gandhi.png'
import { BsCartDash } from "react-icons/bs";
import './NavBar.css'
import { MdClose } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { LiaQuestionSolid } from "react-icons/lia";
import { HiOutlineSpeakerphone } from "react-icons/hi";



function NavBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="NavBar-Container">

            <div className="NavBar-Left-Container">
                <div className="NavBar-Icon-Left">
                    <IoLocationOutline />
                    <span>Librerias</span>
                </div>
                <div className="NavBar-Icon-Left">
                    <CiCalendar />
                    <span>Eventos</span>
                </div>
                <div className="NavBar-Icon-Left">
                    <LiaQuestionSolid />
                    <span>Ayuda</span>
                </div>
                <div className="NavBar-Icon-Left">
                    <HiOutlineSpeakerphone />
                    <span>Publicidad</span>
                </div>
            </div>
            <div className="Modal-Icon-Container">
                <MdOutlineStorage onClick={handleShow} size={25} className="Modal-Icon"/>
            </div>
            <img className="Logo"  src={logo}></img>
            <div className="NavBar-Right-Container">
                <div>
                <FiUser size={20} className="NavBar-Right-Icon"/><span className="NavBar-Right-Text">Iniciar Sesión</span>
                </div>
                <div>
                <BsCartDash size={20} className="NavBar-Right-Icon"/><span className="NavBar-Right-Text">Bolsa</span>
                </div>
            </div>
            </div>

            <div>
            <Modal show={show} onHide={handleClose} animation={false}  className="Modal-Nav" fullscreen={true} scrollable={false}>
                <Modal.Header closeButton closeVariant="white">
                <Modal.Title>
                    <h5>Bienvenid@</h5> 
                </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    hola
                </Modal.Body>
                <Modal.Body>
                    hola
                </Modal.Body>
                <Modal.Body>
                    hola
                </Modal.Body>
                <Modal.Body>
                    hola
                </Modal.Body>
                <Modal.Body>
                    hola
                </Modal.Body>
                <Modal.Body>
                    hola
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    )
}

export {NavBar}