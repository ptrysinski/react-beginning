import React from 'react'
import DisplayPrefix from './DisplayPrefix'
import DisplayName from './DisplayName'
import WhatReactCanDisplay from './WhatReactCanDisplay'
import DisplayPassedName from './DisplayPassedName'
import DisplayFirstNameAndLastName from './DisplayFirstNameAndLastName'

const App = () => (
  <div>
    <h1>Hello</h1>
    <DisplayPrefix />
    <DisplayName />
    <WhatReactCanDisplay />
    <DisplayPassedName
      name = {'Piotr'}
    />
    <DisplayFirstNameAndLastName
      firstName = {'Piotr'}
      lastName = {'Trysiński'}
    />
  </div>
)

export default App;
