/**
 * Created by tangm on 2017/9/17.

const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter()); */


import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));

