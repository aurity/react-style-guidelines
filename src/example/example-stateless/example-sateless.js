import React from 'react'
// js styles are awesome! Trust us, we tried sass, css-modules and js styles with Radium is the
// best solutions especially when you use react-native!
import styles from './example-stateless.style'

// export functions at the top of the file
export {
  doSomeStuff,
}

// When to use functions instead of Component?
// When you don't have to use react lifecycle hooks (eg. componentDidMount) you must use react
// stateless component as a function

// assign default values to function's params or use defaultProps
export default function ExampleStateless({ text, defaultText = 'default', children = '' }) {
  return (
    <div style={styles.exampleContainer}>
      <p>I am stateless component!</p>
      <p>{doSomeStuff()}</p>
      <p style={styles.text}>text: {text}</p>
      <p>default text: {defaultText}</p>
      {children}
    </div>
  )
}

// declare additional functions outside component body to avoid constructing object each time
// you render
function doSomeStuff() {
  return 'And I can do some stuff'
}

// assign default values to function's params or use defaultProps
// ExampleStateless.defaultProps = {}
ExampleStateless.propTypes = {

  // Unless you have default value use 'isRequired' flag
  text: React.PropTypes.string.isRequired,
  defaultText: React.PropTypes.string,
  children: React.PropTypes.node,
}
