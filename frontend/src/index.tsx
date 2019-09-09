import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import IndexPage from './templates/index-page'
import configureStore from './store'
import './index.css'

const store = configureStore()
ReactDOM.render(<Provider store={store}><IndexPage /></Provider>, document.getElementById('root'))
