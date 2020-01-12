import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";


import MapView from '../components/mapView'

describe('MapView', function() {

  it ("has a defult lat,long and zoom props", function() {
    const component = create(<MapView />);
       const instance = component.getInstance();

    expect(instance.props.defaultLat).toBe(51.516967);
    expect(instance.props.defaultLng).toBe(-0.073133);
    expect(instance.props.zoom).toBe(14);
  })

})
