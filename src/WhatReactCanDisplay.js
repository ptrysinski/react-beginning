import React from 'react'

const reactCanDisplayString = 'Ala ma kota'
const reactCanDisplayNumbers = 101
const reactCantDisplayBoolean = true
const reactCantDisplayNull = null
const reactCantDisplayUndefined = undefined

const reactCanDisplayFunctionCall = () => 'Ala ma psa'

const reactCanDisplayArray = ['Ala', 'Ola', 'Ela']
const reactCanDisplayReactElement = <b>Pogrubiony tekst</b>

const reactErrorsOnObjects = {
    name: 'Piotr'
}

const WhatReactCanDisplay = (props) => (
    <div>
        <h4>Strings</h4>
        <p>{reactCanDisplayString}</p>
        <h4>Numbers</h4>
        <p>{reactCanDisplayNumbers}</p>
        <h4>Boolean</h4>
        <p>{reactCantDisplayBoolean}</p>
        <h4>Null</h4>
        <p>{reactCantDisplayNull}</p>
        <h4>Undefined</h4>
        <p>{reactCantDisplayUndefined}</p>
        <h4>Function call</h4>
        <p>{reactCanDisplayFunctionCall()}</p>
        <h4>Array</h4>
        <p>{reactCanDisplayArray}</p>
        <h4>Array mapping</h4>
        <p>
        {
            reactCanDisplayArray.map(
                element => <div>{element}</div>
            )
        }
        </p>
        <h4>Array mapping keys</h4>
        <p>
        {
            reactCanDisplayArray.map(
                (element, index) => (
                <li
                    key = {index+element}
                >
                {element}
                </li>
                )
            )
        }
        </p>
        <h4>Element</h4>
        <p>{reactCanDisplayReactElement}</p>
        {/* <h4>Object</h4>
        <p>{obj}</p> */}
    </div>
)

export default WhatReactCanDisplay