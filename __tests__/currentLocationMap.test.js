import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";


import CurrentLocationMap from '../components/currentLocationMap'

describe('MapView', function() {

  it ("has defult props lat,longstate, zoom", function() {
    const component = create(<CurrentLocationMap />);
    const instance = component.getInstance();

    expect(instance.state.centerLat).toBe(51.516967);
    expect(instance.state.centerLng).toBe(-0.073133);
    expect(instance.state.zoom).toBe(100);
  })

})
