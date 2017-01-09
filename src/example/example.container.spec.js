import React from 'react'
import chai, { expect, assert } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount, shallow } from 'enzyme'
import { spy } from 'sinon'
import ExampleContainer from './example.container'

chai.use(chaiEnzyme())

/* Testing rules
 - do not create additional classes/wrappers for testing purpose -> use .contains to check whole
 element
 - test functionality of the component in the first place eg. props, functionality, states
 - if component uses other component test if passed values are triggered or displayed ?!
 */

describe('<ExampleContainer>', () => {
  // in here we can check if hook was called and also if we called necessary actions/ services
  it('calls componentDidMount', () => {
    spy(ExampleContainer.prototype, 'componentDidMount')
    mount(<ExampleContainer />)
    expect(ExampleContainer.prototype.componentDidMount.calledOnce).to.equal(true)
  })

  it('Initial state counter ===  0', () => {
    const wrapper = shallow(<ExampleContainer />)
    expect(wrapper.state().counter).to.equal(0)
  })

  it('states +1 after button click', () => {
    const wrapper = mount(<ExampleContainer />)

    // good practice to set initial state
    wrapper.setState({ counter: 10 })

    // we expect only one button
    expect(wrapper.find('button[children="Click me to increase counter!"]').length).to.equal(1)
    wrapper.find('button[children="Click me to increase counter!"]').simulate('click')

    // expected state
    expect(wrapper.state().counter).to.equal(11)
  })

  it('Passes all props to <Example>', () => {
    const wrapper = shallow(<ExampleContainer />)
    const expectedProps = {
      textFromStore: 'Hello from store',
      counter: 0,
    }

    const passedProps = wrapper.props()
    expect(expectedProps.textFromStore).to.equal(passedProps.textFromStore)
    expect(expectedProps.counter).to.equal(passedProps.counter)
    assert.isFunction(passedProps.onExampleClick)
  })
})
