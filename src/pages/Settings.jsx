import React from 'react'
import Searchbar from '../components/settings_components/Searchbar'
import Profile_settings from '../components/settings_components/Profile_settings'
const Settings = () => {
  return (
    <div>
      
      <Searchbar/>
      <div className='flex justify-between mt-4'>
      <div className="leftWrapper bg-amber-300 w-[50%] rounded-lg">
        <Profile_settings/>
      </div>
      <div className="RightWrapper bg-blue-500 w-[49%] rounded-lg">aylin</div>
 
      </div>
         </div>
  )
}

export default Settings
