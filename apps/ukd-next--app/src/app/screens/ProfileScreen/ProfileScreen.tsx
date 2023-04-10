import React from 'react'
import './ProfileScreen.scss'
import ProfileButton from '../../components/ProfileButton/ProfileButton'

export default function ProfileScreen() {
  return (
    <div className='profilescreen-container'>
        <div className='profile-menu'>
            <div className='profile-avatar'>
              <img src="https://cdn.discordapp.com/attachments/673322183761854484/1095018191530512424/image.png" alt=""  />
            </div>


            <p className='profile-fullname'>Уенсдей Адамс</p>
            <p className='profile-group'>ІПЗ-666</p>
            <p className='profile-email'>wednesday.addams@ukd.edu.ua</p>

            <ProfileButton name='Конфіденційність'/>
            <ProfileButton name='Налаштування профілю'/>
            <ProfileButton name='Повідомлення'/>
            <ProfileButton name='Налаштування'/>
            <ProfileButton name='Про програму'/>

        </div>
        
        
    </div>
  )
}
