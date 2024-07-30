// src/App.jsx

import './App.css'
import Permissions from './components/permission/permission_screen';
import AllowLocation from './components/location/allow_location';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'react-device-frameset/styles/marvel-devices.min.css'
import CloudChoice from './components/cloud_provider/provider';
import Phone from './components/phone';
import CookiesPermission from './components/cookies/cookies_permission';
import StarterPage from './components/function_pages/starter';
import PhoneNav from './components/function_pages/phone_pipelines';
import Feedback from './components/function_pages/feedback';
import { verifyToken } from './api/api';
import { useLocation } from 'react-router-dom';
import { isDemo } from '../config';

function App() {

  // get random nudge types
  function getRandomPermutation() {
    let array = [1, 2, 3, 4];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [isLogin, setIsLogin] = useState(false);
  const [participantId, setParticipantId] = useState("");
  const [nudgeSequence, setNudgeSequence] = useState(getRandomPermutation());

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const token = queryParams.get('token');
  // const token = "1ac2b";

  const stringToIntArray = function(str) {
    return str.split('').map(char => parseInt(char, 10));
  };

  // request user info and experiment setup
  useEffect(() => {
    if (!token) {
      return;
    }
    verifyToken(token)
      .then((response) => {
        if (response.status === 200) {
          setNudgeSequence(stringToIntArray(response.data.nudgeSequence));
          setParticipantId(response.data.participantId);
          setIsLogin(true);    
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  // token invalid
  if (!isDemo && !isLogin) {
    return (
      <div>
        <h1>Invalid or missing token</h1>
        <p>Please log in to access this page.</p>
      </div>
    );
  }

  return (
    <>
    <div className="flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
      <PhoneNav participantId={participantId} nudgeSequence={nudgeSequence} isLogin={isLogin} />
    </div>
    </>
  )
}

export default App;
