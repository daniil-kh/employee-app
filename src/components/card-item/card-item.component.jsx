import React from 'react';

import './card-item.style.scss';

const CardItem = ({ props }) => {
  const { id, email, first_name, last_name, avatar, deleteHandler } = props;
  return (
    <div className='card-container'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${avatar})`,
        }}
      />
      <div className='person-info-container'>
        <p>Email: {email}</p>
        <p>First Name: {first_name}</p>
        <p>Last Name: {last_name}</p>
        <div
          className='delete-button'
          onClick={() => deleteHandler(id)}
          style={{
            backgroundImage:
              'url(https://th.bing.com/th/id/OIP.I_eO1cClF7gaBuAbm5dImgHaHa?pid=Api&rs=1)',
          }}
        />
      </div>
    </div>
  );
};

export default CardItem;
