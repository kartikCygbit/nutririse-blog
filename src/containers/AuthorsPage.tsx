import React, { useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import logo from './logo.svg';
import './styles/AuthorsStyles.css'

function AuthorPage() {
  const authorData = [
    {
      name: 'Zaheera Swing',
      position: 'Nutritional Therapist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum suscipit libero sit quisquam cumque, adipisci beatae fugit asperiores iste et inventore tempora eveniet aperiam architecto.',
      image: require('../assets/images/s1.png')
    },
    {
      name: 'Basim Mirza',
      position: 'Nutririse co-founder',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum suscipit libero sit quisquam cumque, adipisci beatae fugit asperiores iste et inventore tempora eveniet aperiam architecto.',
      image: require('../assets/images/s2.png')
    },
    {
      name: 'Ramsha Mirza',
      position: 'Nutririse co-founder',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum suscipit libero sit quisquam cumque, adipisci beatae fugit asperiores iste et inventore tempora eveniet aperiam architecto.',
      image: require('../assets/images/s3.png')
    },
    {
      name: 'Yolanda Tree',
      position: 'wellness writer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum suscipit libero sit quisquam cumque, adipisci beatae fugit asperiores iste et inventore tempora eveniet aperiam architecto.',
      image: require('../assets/images/s4.png')
    },
    {
      name: 'Yolanda Tree',
      position: 'wellness writer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum suscipit libero sit quisquam cumque, adipisci beatae fugit asperiores iste et inventore tempora eveniet aperiam architecto.',
      image: require('../assets/images/s4.png')
    },
  ]
  const [data, setData] = useState(authorData);
  return (
    <div className="main">
      <div className="section-1">
        <div className='sec1TopContainer'>
          <p className='sec1TopText'>blog</p>
          <p className='sec1TopText'>nutritions</p>
          <p className='sec1TopText'>recipes</p>
          <p className='sec1TopText'>mindfullness</p>
          <p className='sec1TopText'>fitness</p>
          <p className='sec1TopText'>beauty</p>
          <p className='sec1TopText'>lifestyle</p>
          <p className='sec1TopText'>parenting</p>
          <p className='sec1TopText'>inspiration</p>
          <p className='sec1TopText'>learn</p>
        </div>
        <img src={require('../assets/images/logo.png')} className='logo' />
        <div className='textCont'>
          <p className='heroText'>
            Embody a life of abundance and vibrance from the collective wisdom and expertise of our thought leaders, healers, and writers.
          </p>
        </div>
      </div>
      <div className="section-2">
        {
          data.map((author, index) => {
            return (
              <AuthorCard
                name={author.name}
                position={author.position}
                description={author.description}
                image={author.image}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default AuthorPage;
