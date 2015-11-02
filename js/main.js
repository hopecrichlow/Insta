import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import Router from './router';
import './ajax_setup';

let appElement = document.querySelector('.app');

// Create router & pass in appElement
let router = new Router(appElement);
router.start();

window.router=router;

console.log('Hello, World');