import React, { Component } from 'react'
import ExampleStateless from './example-stateless/example-sateless'
import styles from './example.style'

/* Rules for components:
 - Component are concerned with how things LOOK.
 - May contain both presentational and container components** inside,
   and usually have some DOM markup and styles of their own.
 - Often allow containment via this.props.children.
 - Have no dependencies on the rest of the app, such as Flux actions or stores.
 - Don’t specify how the data is loaded or mutated.
 - Receive data and callbacks exclusively via props.
 - Rarely have their own state (when they do, it’s UI state rather than data).
 */
export default class Example extends Component {

  constructor(props) {
    super(props)

    // state only for UI
    this.state = {
      isGreen: true,
    }
  }

  onChangeColor = () => {
    const { isGreen } = this.state
    this.setState({ isGreen: !isGreen })
  }

  render() {
    const { textFromStore, onExampleClick, counter } = this.props
    const { isGreen } = this.state
    return (
      <div style={styles.container}>
        <p>Hello Example!</p>
        <p>This is text from store: &apos;{textFromStore}&apos;</p>
        <p>This is my counter: {counter}</p>
        <button onClick={onExampleClick}>Click me to increase counter!</button>
        <button onClick={this.onChangeColor}>Click me to change color!</button>

        <div>
          <ExampleStateless
            text="Text from parent"
          >
            <p style={{ color: isGreen ? 'green' : 'red' }}>
              Child with own styling from parent
            </p>
          </ExampleStateless>
        </div>
      </div>
    )
  }
}

Example.propTypes = {
  textFromStore: React.PropTypes.string.isRequired,
  counter: React.PropTypes.number.isRequired,
  onExampleClick: React.PropTypes.func.isRequired,
}
Example.defaultProps = {}
