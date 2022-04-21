import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { HeeyAndesApp } from './HeeyAndesApp'

const container = document.getElementById('root')
const root = createRoot( container )
root.render( 
  <React.StrictMode>
    <HeeyAndesApp />
  </React.StrictMode>
);