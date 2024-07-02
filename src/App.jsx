// src/App.jsx

import './App.css'
import Permissions from './components/permission/permission_screen';
import AllowLocation from './components/location/allow_location';
import React, { useEffect } from 'react';
import 'react-device-frameset/styles/marvel-devices.min.css'
import CloudChoice from './components/cloud_provider/provider';
import Phone from './components/phone';
import CookiesPermission from './components/cookies/cookies_permission';
import StarterPage from './components/function_pages/starter';
import PhoneNav from './components/function_pages/phone_navigations';
import Feedback from './components/function_pages/feedback';

function App() {

  // disable tab, space, and arrow keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Tab' || event.key === ' ' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
      <PhoneNav />
    </div>
    </>
  )
}

export default App;


// import React, { useEffect } from 'react';
// import CurrentTime from './test_clock';

// function App() {

//   return (
//     <div className="App">
//       <CurrentTime />
//     </div>
//   );
// }
// export default App;