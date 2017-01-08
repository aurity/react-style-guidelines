import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import ExampleStateless, { doSomeStuff } from './example-sateless'

chai.use(chaiEnzyme())

// Main rules for testing:
// - check if props are rendered or passed to next component
// - use "shallow" whenever it's necessary
// - focus in component logic first then on UI aspects

describe('<ExampleStateless>', () => {
  it('renders children', () => {
    const wrapper = shallow(
      <ExampleStateless text="unique text" >
        <p>Test</p>
      </ExampleStateless>)

    // check if whole element is rendered correctly
    expect(wrapper.contains(<p>Test</p>)).to.equal(true)
  })

  it('renders text', () => {
    const wrapper = shallow(<ExampleStateless text="unique text" />)

    // use contains instead of .text and unique text
    expect(wrapper.contains('unique text')).to.equal(true)
  })

  it('renders default text', () => {
    const wrapper = shallow(<ExampleStateless text="unique text" />)
    expect(wrapper.contains('default')).to.equal(true)
  })

  it('renders "And I can do some stuff" text', () => {
    const wrapper = shallow(<ExampleStateless text="unique text" />)
    expect(wrapper.contains('And I can do some stuff')).to.equal(true)
  })

  // it's good practice to create helper functions export them and test in isolation
  it('doSomeStuff returns "And I can do some stuff"', () => {
    expect(doSomeStuff()).to.equal('And I can do some stuff')
  })
})
