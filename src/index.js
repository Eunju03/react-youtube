import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import axios from 'axios';

const httpClinet = axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},
});
const youtube = new Youtube(httpClinet);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);

