import { useState } from 'react'
import './App.css'

export function TwitterFollowCard({ name, userName }) {

   const [follow, setFollow] = useState(false)


   const text = follow ? 'Following' : 'Follow'
   const buttonClassName = follow ? 'tw-followCard-button is-following' : 'tw-followCard-button'
   const onHandle = () => {
      setFollow(!follow)
   }
   return (
      <article className='tw-followCard'>

         <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt={`${userName} img`} />
            <div className='tw-followCard-info'>
               <strong>{name}</strong>
               <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
         </header>

         <aside>
            <button className={buttonClassName} onClick={onHandle}>
               {text}
            </button>
         </aside>

      </article >
   )
}