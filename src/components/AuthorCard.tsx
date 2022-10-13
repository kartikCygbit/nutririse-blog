import React from 'react';
import './styles/AuthorCardStyles.css';

function AuthorCard(props: any) {
  const {name, position,description,image} = props;
  return (
    <div className="card">
      <img src={image} className="authorImg" />
      <div className='cardInfo'>
        <div className='headerTextCont'>
          <div className='name'>{name}</div>
          <div className='position'>{position}</div>
        </div>
        <div className='info'>
          <div className='description'>{description}</div>
          <a className='learnMoreCont' href='#'>
            <div className='learnMore'>Learn More</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
