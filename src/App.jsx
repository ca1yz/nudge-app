// src/App.jsx
import './App.css'
import Permissions from "./permission/permission_screen";

function App() {

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 md:justify-center w-full md:w-auto">
        <div className="flex flex-col">
          <Permissions nudgeType={1}/>
        </div>

        <div className="flex flex-col">
          <Permissions nudgeType={2}/>
        </div>

        <div className="flex flex-col">
          <Permissions nudgeType={3}/>
        </div>

        <div className="flex flex-col">
          <Permissions nudgeType={4}/>
        </div>

      </div>
    </>
  )
}

export default App
