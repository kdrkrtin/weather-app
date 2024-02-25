import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import { store } from './store'
import { Provider } from 'react-redux';

export const longDateFormat = date => new Date(date).toLocaleDateString('tr-TR', { weekday: 'long', month: 'long', day: 'numeric' });
export const timeFormat = time => new Date(time).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

export const tempFormat = temp => Math.ceil(parseInt(temp) - 273.15);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
