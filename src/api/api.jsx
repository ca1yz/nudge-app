import React from "react";
import axios from "axios";

// export const verifyToken = (token) => {
//     return axios.get(`${hostUrl}/verifytoken?token=${token}`);
//     }

// export const postSubmission = (data) => {
//     return axios.post(`${hostUrl}/submit`, data);
// }
const TIMEOUT = 9000;


const verification = axios.create({
    baseURL: `/api/tokeninfo`,
    timeout: TIMEOUT,
    });


export const verifyToken = (token) => {
    return verification.get(`?token=${token}`);
    }


export const postSubmission = (data) => {
    const transformedData = data.reduce((acc, setting) => {
        acc[setting.name] = setting.value;
        return acc;
    }, {});
    console.log(transformedData);
    return axios.post(`/api/submission`, transformedData);
}