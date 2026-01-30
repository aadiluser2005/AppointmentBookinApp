import React from 'react'
import Hero from './Hero'
import ProfileInfo from './ProfileInfo'
import Security from './Security'
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