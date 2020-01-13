import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";


import MapView from '../components/mapView'

describe('MapView', function() {

  it ("has defult props lat,longstate", function() {
    const component = create(<MapView />);
    const instance = component.getInstance();

    expect(instance.props.centerLat).toBe(51.516967);
    expect(instance.props.centerLng).toBe(-0.073133);
  })

})
