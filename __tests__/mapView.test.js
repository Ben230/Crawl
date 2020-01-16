import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";
import MapView from '../components/mapView'

jest.mock('../components/buttonWithObj', () => "hello")


describe('MapView', function() {

  it ("has defult props lat,longstate and zoom", function() {
    const component = create(<MapView />);
    const instance = component.getInstance();
    console.log("instance.props")
    console.log(instance.props)

    expect(instance.props.centerLat).toBe(51.516967);
    expect(instance.props.centerLng).toBe(-0.073133);
    expect(instance.props.zoom).toBe(6)
  })

})
