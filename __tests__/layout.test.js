import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";


import Layout from '../components/layout'

describe('Layout', function() {

  it ("Title changes depending on argument given", function() {
    const layout = shallow(<Layout titleName={"Test Name"}/>)

    expect(layout.find('title').text()).toEqual("Test Name")

  })

})
