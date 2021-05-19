import React from 'react'
import Appss from './Router'
import {Provider} from 'react-redux'
import Store from './redux'
function App() {
  return (
    <Provider store={Store}>
      <Appss />
    </Provider>
  )
}

export default App
