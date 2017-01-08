import React from 'react'
import ExampleStateless from './example-stateless/example-sateless'

export default function App() {
  return (
    <div>
      <ExampleStateless text="Text via props">
        Hello child from stateless
      </ExampleStateless>
    </div>
  )
}
