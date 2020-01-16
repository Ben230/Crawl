import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";
import generateClickableURL from '../functionHelpers/generateClickableURL'

describe('generateClickableURL', function() {

  it ("returns url for origin and destination", function() {
    const pubs = [{place_id: "ChIJ-b_tyK4cdkgRj_BtpBlx-UM",name: "Finch's",vicinity: "12a Finsbury Square, Moorgate, London",rating: 4},
     {place_id: "ChIJVVXlm6UcdkgRJzordwoRuyE",name: "The Craft Beer Co. Old Street",vicinity: "235 Old St, London",rating: 4.3}];
     
    expect(generateClickableURL(pubs)).toEqual('https://www.google.com/maps/dir/?api=1&origin=Finchs&origin_place_id=ChIJ-b_tyK4cdkgRj_BtpBlx-UM&destination=The+Craft+Beer+Co+Old+Street&destination_place_id=ChIJVVXlm6UcdkgRJzordwoRuyE&travelmode=walking')
  });
});
