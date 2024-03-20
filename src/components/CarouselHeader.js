import Carousel from 'react-bootstrap/Carousel';
import'./CarouselHeader.css'
import { FaTruck } from "react-icons/fa";

function CarouselHeader() {
  return (
    <Carousel className='Carousel' controls={false} indicators={false}>
      <Carousel.Item>
          <p>
          <FaTruck size={20}/>
            Envío gratis siempre a todo el país.
          </p>
      </Carousel.Item>
      <Carousel.Item>
          <p>
          <FaTruck size={20}/>
            Enviamos a cualquier parte del mundo.
          </p>
      </Carousel.Item>
      <Carousel.Item>
          <p>
            Te regalamos 10% al crear tu cuenta.
          </p>
      </Carousel.Item>
    </Carousel>
  );
}

export {CarouselHeader};