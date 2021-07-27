import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

function HeroCard(props:any) {
  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

    return(
      <div className='heroCard'>
        <img src={props.images.sm} alt={props.name} onClick={() => handleModal()} />
        <h3>{props.name}</h3>
        <div>
          <Modal show={modal} size='sm' centered>
            <Modal.Header>{props.name}</Modal.Header>
            <Modal.Body>
              Intelligence: {props.powerstats.intelligence} <br/>
              Strength: {props.powerstats.strength} <br/>
              Speed: {props.powerstats.speed} <br/>
              Durability: {props.powerstats.durability} <br/>
              Power: {props.powerstats.power} <br/>
              Combat: {props.powerstats.combat} <br/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => handleModal()}> Close </Button>
            </Modal.Footer>
          </Modal>
      </div>
      </div>
    );
}

export default HeroCard;
