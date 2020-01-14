import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";
import CurrentLocationMap from '../components/currentLocationMap'

jest.mock('../components/buttonWithObj', () => "hello")

describe('MapView', function() {

  it ("has map location found starts as false", function() {
    const component = create(<CurrentLocationMap />);
    const instance = component.getInstance();

    expect(instance.state.locationFound).toBe(false)


  })

})
