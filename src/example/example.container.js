import React, { Component } from 'react'
import Example from './example'

/* Rules for components:
 - Are concerned with how things WORK.
 - May contain both presentational and container components** inside but usually don’t have any
  DOM markup of their own except for some wrapping divs, and never have any styles.
 - Provide the data and behavior to presentational or other container components.
 - Call Flux actions and provide these as callbacks to the presentational components.
 - Are often stateful, as they tend to serve as data sources.
 - Are usually generated using higher order components such as connect() from React Redux,
  createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
 */
export default class ExampleContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    console.log('I need to do some stuff here')

    // trigger some interaction here
    // dispatch(fetchData())
  }

  handleOnClick = (event) => {
    console.log('Dispatch action here')
    event.preventDefault()
    this.setState({ counter: this.state.counter + 1 })

    // dispatch(fetchDataFor(data))
  }

  render() {
    const store = {
      textFromStore: 'Hello from store',
    }
    const { counter } = this.state
    return (
      <Example
        textFromStore={store.textFromStore}
        onExampleClick={this.handleOnClick}
        counter={counter}
      />
    )
  }
}

ExampleContainer.propTypes = {}
ExampleContainer.defaultProps = {}
