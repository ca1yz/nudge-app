// src/App.jsx
import './App.css'
import Permissions from './components/permission/permission_screen';
import AllowLocation from './components/location/allow_location';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'
import CloudChoice from './components/cloud_provider/provider';
import Phone from './components/phone';
import CookiesPermission from './components/cookies/cookies_permission';
import StarterPage from './components/function_pages/starter';
import PhoneNav from './components/function_pages/phone_navigations';
import Feedback from './components/function_pages/feedback';

function App() {

  // phone frame settings
  const scale = 0.9;
  const width = 320;
  const height = 500;


  return (
    <>
    <h1 className='text-left'> A full pipeline </h1>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
      <PhoneNav />
    </div>

    <h1 className='text-left'> Cookies </h1>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
      <Phone>
        <CookiesPermission nudgeType={1} />
      </Phone>
      <Phone>
        <CookiesPermission nudgeType={2} />
      </Phone>
      <Phone>
        <CookiesPermission nudgeType={3} />
      </Phone>
      <Phone>
        <CookiesPermission nudgeType={4} />
      </Phone>
    </div>

    <h1 className='text-left'> Permissions </h1>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
      <Phone>
        <Permissions nudgeType={1} />
      </Phone>
      <Phone>
        <Permissions nudgeType={2} />
      </Phone>
      <Phone>
        <Permissions nudgeType={3} />
      </Phone>
      <Phone>
        <Permissions nudgeType={4} />
      </Phone>
    </div>

    <h1 className='text-left'> Location </h1>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
      <Phone>
        <AllowLocation nudgeType={1} />
      </Phone>
      <Phone>
        <AllowLocation nudgeType={2} />
      </Phone>
      <Phone>
        <AllowLocation nudgeType={3} />
      </Phone>
      <Phone>
        <AllowLocation nudgeType={4} />
      </Phone>
    </div>

    <h1 className='text-left'> Cloud Provider </h1>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
      <Phone>
        <CloudChoice nudgeType={1}/>
      </Phone>
      <Phone>
        <CloudChoice nudgeType={2}/>
      </Phone>
      <Phone>
        <CloudChoice nudgeType={3}/>
      </Phone>
      <Phone>
        <CloudChoice nudgeType={4}/>
      </Phone>
    </div>
    </>
  )
}

export default App
