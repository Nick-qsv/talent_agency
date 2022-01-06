import { render } from 'react-dom';
import React from 'react';
import Main from '../client/components/Main'
import ReactDOM from 'react-dom'
import store from '../client/store'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}>
    <Main />
</Provider>, document.querySelector('#root'));

