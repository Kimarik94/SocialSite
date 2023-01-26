import React from 'react';
import Avatarka from '../Style/Images/Ava.jpg';

const Profile = () =>{
    return(
      <div className='Profile'>
        <div className='Main'>
         <img src={Avatarka} alt='avatarka'></img>
          <div className='ProfileDescription'>
           <div className='UserName'>Сухостоев Алексей Владимирович</div>
           <div className='UserBD'>Дата Рождения: 23.09.1991</div>
           <br/>
           <div className='UserCountry'>Страна Проживания: Россия</div>
           <div className='UserCity'>Город: Санкт-Петербург</div>
           <br/>
           <div className='Star'>Знак Зодиака: Весы</div>
          </div>
        </div>
        <div className='Post'>
          <input type="text" name="login" id="login" placeholder="Новый Пост..."/>
          </div>
      </div>

    );
}

export default Profile;