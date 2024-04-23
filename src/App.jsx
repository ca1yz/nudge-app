// src/App.jsx
import './App.css'
import Permissions from './components/permission/permission_screen';
import AllowLocation from './components/location/allow_location';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'

function App() {

  // phone frame settings
  const scale = 0.9;
  const width = 320;
  const height = 500;


  return (
    <>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
        <DeviceFrameset device="iPhone 8" color="gold" zoom={scale} width={width} height={height}>
          <AllowLocation nudgeType={1} />
        </DeviceFrameset>
        <DeviceFrameset device="iPhone 8" color="gold" zoom={scale} width={width} height={height}>
          <AllowLocation nudgeType={2} />
        </DeviceFrameset>
        <DeviceFrameset device="iPhone 8" color="gold" zoom={scale} width={width} height={height}>
          <AllowLocation nudgeType={3} />
        </DeviceFrameset>
        <DeviceFrameset device="iPhone 8" color="gold" zoom={scale} width={width} height={height}>
          <AllowLocation nudgeType={4} />
        </DeviceFrameset>
    </div>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
        <DeviceFrameset device="iPhone 8" color="gold" zoom={scale} width={width} height={height}>
          <Permissions nudgeType={1}/>
        </DeviceFrameset>
        <DeviceFrameset device="iPhone 8" color="gold" zoom={scale} width={width} height={height}>
          <Permissions nudgeType={2}/>
        </DeviceFrameset>
        <DeviceFrameset device="iPhone 8" color="gold" zoom={scale} width={width} height={height}>
          <Permissions nudgeType={3}/>
        </DeviceFrameset>
        <DeviceFrameset device="iPhone 8" color="gold" zoom={scale} width={width} height={height}>
          <Permissions nudgeType={4}/>
        </DeviceFrameset>
    </div>
    
    </>
  )
}

export default App
