import React from "react";

// debug without user token, nudges are random 
export const isDemo = true;

// host
export const hostUrl = "http://localhost:32769/";

// redirect to survey link, set to "" to disable in case we are pop-up window
export const surveyUrl = "https://localhost:5173/";

// text displayed
export const bufferPages = [
    // starter page
    {
        "title": "Starter",
        "text": "Setup permissions...",
    },
    // buffer page 1
    {
        "title": "BufferPage Title I",
        "text": "Setup location...",
    },
    // 2
    {
        "title": "BufferPage Title II",
        "text": "Setup cloud provider...",
    },
    // 3
    {
        "title": "BufferPage Title III",
        "text": "Setup cookies...",
    },
    // feed back page
    {
        "title": "",
        "text": "We would like your feedback:",
    },
    // closing page
    {
        "title": "Thank you!",
        "text": "We are directing you back to the survey... or you may leave this page manually.",
    },

]