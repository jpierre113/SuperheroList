import React from 'react';

function HeroCard(props:any) {
    return(
      <div className='heroCard'>
        <img src={props.images.sm} />
        <h3>{props.name}</h3>
      </div>
    );
}

export default HeroCard;
