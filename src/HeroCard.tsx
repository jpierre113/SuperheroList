import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBrain, faDumbbell, faTachometerAlt, faShieldAlt, faBolt, faFistRaised }  from '@fortawesome/free-solid-svg-icons';

function HeroCard(props:any) {
  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

    return(
      <div className='heroCard'>
        <img src={props.images.sm} alt={props.name} style={{cursor: 'pointer'}} onClick={() => handleModal()} />
        <h3>{props.name}</h3>
        <div>
          <Modal show={modal} size='sm' centered>
            <Modal.Header>{props.name}</Modal.Header>
            <Modal.Body>
              <span className='statIcon'><FontAwesomeIcon icon={faBrain} /></span> Intelligence: {props.powerstats.intelligence}  <br/>
              <span className='statIcon'><FontAwesomeIcon icon={faDumbbell} /></span> Strength: {props.powerstats.strength}<br/>
              <span className='statIcon'><FontAwesomeIcon icon={faTachometerAlt} /></span> Speed: {props.powerstats.speed}  <br/>
              <span className='statIcon'><FontAwesomeIcon icon={faShieldAlt} /></span> Durability: {props.powerstats.durability}  <br/>
              <span className='statIcon'><FontAwesomeIcon icon={faBolt} /></span> Power: {props.powerstats.power} <br/>
              <span className='statIcon'><FontAwesomeIcon icon={faFistRaised} /></span>  Combat: {props.powerstats.combat} <br/>
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
