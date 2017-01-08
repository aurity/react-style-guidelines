import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Example from './example'

chai.use(chaiEnzyme())

describe('<Example>', () => {
  it('Initial state isGreen ===  true', () => {
    const wrapper = shallow(getExample())
    expect(wrapper.state().isGreen).to.equal(true)
  })

  it('renders "This is text from the store: "{textFromStore}"', () => {
    const textFromStore = 'unique text'
    const wrapper = shallow(getExample({ textFromStore }))
    expect(wrapper.contains(<p>This is text from store: &apos;{textFromStore}&apos;</p>)).to.equal(true)
  })

  it('renders "This is my counter: {counter}" text', () => {
    const counter = 10
    const wrapper = shallow(getExample({ counter }))
    expect(wrapper.contains(<p>This is my counter: {counter}</p>)).to.equal(true)
  })

  it('triggers "onExampleClick"', () => {
    const onExampleClick = sinon.spy()
    const wrapper = shallow(getExample({ onExampleClick }))

    // we expect only one button
    expect(wrapper.find('button').length).to.equal(1)
    wrapper.find('button').simulate('click')
    expect(onExampleClick.calledOnce).to.equal(true)
  })

  it('renders child with class "my-paragraph" when "isGreen" === true', () => {
    const wrapper = shallow(getExample())
    wrapper.setState({
      isGreen: true,
    })
    expect(wrapper.contains(<p style={{ color: 'green' }}>Child with own styling from parent</p>)).to.equal(true)
  })

  it('renders child with no class when "isGreen" === false', () => {
    const wrapper = shallow(getExample())
    wrapper.setState({
      isGreen: false,
    })
    expect(wrapper.contains(<p style={{ color: 'red' }}>Child with own styling from parent</p>)).to.equal(true)
  })
})

function getExample({ textFromStore = 'text', onExampleClick = () => {}, counter = 0 } = {}) {
  return (
    <Example
      textFromStore={textFromStore}
      onExampleClick={onExampleClick}
      counter={counter}
    />
  )
}
