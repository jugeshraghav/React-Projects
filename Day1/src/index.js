import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const User = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};

  const url = `https://twitter.com/${User.twitterUsername}`;

ReactDOM.render(
  <>
  <img src={User.avatar} alt="profile_pic"></img>
  <h1>NAME : <span>{User.name}</span></h1>
  <h1>LOCATION : <span>{User.location}</span></h1>
  <h1>FAV FOOD : <span>{User.foodtype}</span></h1>
  <h1>AGE : <span>{User.age}</span></h1>
  <h1>LIKES : <span>{User.likes}</span></h1>
  <h1>TWITTER USERNAME : <span>{User.twitterUsername}</span></h1>
  <h1><a href={url}>@Chris on code</a></h1>
  </>,
  document.getElementById('root')
);


