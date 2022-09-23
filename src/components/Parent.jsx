import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [userInput, setUserInput] = useState("")

  return (
    <div>
        <h2>Parent Component</h2>
        <Child userInput={userInput} setUserInput={setUserInput} />
        <p>{userInput}</p>
    </div>
  )
}

export default Parent
