import React from 'react'
import Hero from './Hero.jsx'
import ProfileInfo from './ProfileInfo.jsx'
import Security from './Security.jsx'
import "./settings.css"

function Settings() {
  return (
   <div className='settingsMain'>
   <Hero></Hero>
<ProfileInfo></ProfileInfo>
<Security></Security>

   </div>
  )
}

export default Settings