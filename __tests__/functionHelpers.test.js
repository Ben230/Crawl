import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";
import generateClickableURL from '../functionHelpers/generateClickableURL'

describe('generateClickableURL', function() {

  it ("returns url for origin and destination", function() {
    const pubs = [{place_id: "ChIJ-b_tyK4cdkgRj_BtpBlx-UM",name: "Finch's",vicinity: "12a Finsbury Square, Moorgate, London",rating: 4},
     {place_id: "ChIJVVXlm6UcdkgRJzordwoRuyE",name: "The Craft Beer Co. Old Street",vicinity: "235 Old St, London",rating: 4.3}];

    expect(generateClickableURL(pubs)).toEqual("https://www.google.com/maps/dir/?api=1&origin=Finch's&origin_place_id=ChIJ-b_tyK4cdkgRj_BtpBlx-UM&destination=The%20Craft%20Beer%20Co.%20Old%20Street&destination_place_id=ChIJVVXlm6UcdkgRJzordwoRuyE&travelmode=walking")
  });

  it ("returns url for origin and destination and 1 waypoint", function() {
    const pubs = [{place_id: "ChIJ-b_tyK4cdkgRj_BtpBlx-UM",name: "Finch's",vicinity: "12a Finsbury Square, Moorgate, London",rating: 4},
    {place_id: "ChIJn39jT68cdkgR-UtHSbKIISs",name: "The Angel",vicinity: "73 City Rd, London",rating: 4},
     {place_id: "ChIJVVXlm6UcdkgRJzordwoRuyE",name: "The Craft Beer Co. Old Street",vicinity: "235 Old St, London",rating: 4.3}];

    expect(generateClickableURL(pubs)).toEqual("https://www.google.com/maps/dir/?api=1&origin=Finch's&origin_place_id=ChIJ-b_tyK4cdkgRj_BtpBlx-UM&destination=The%20Craft%20Beer%20Co.%20Old%20Street&destination_place_id=ChIJVVXlm6UcdkgRJzordwoRuyE&waypoints=The%20Angel&waypoint_place_ids=ChIJn39jT68cdkgR-UtHSbKIISs&travelmode=walking")
  });

  it ("returns url for origin and destination and 2 waypoints", function() {
    const pubs = [{place_id: "ChIJ-b_tyK4cdkgRj_BtpBlx-UM",name: "Finch's",vicinity: "12a Finsbury Square, Moorgate, London",rating: 4},
    {place_id: "ChIJ59EmGa8cdkgRmeL0ck_N66g",name: "The Windmill",vicinity: "27 Tabernacle St, London",rating: 4},
    {place_id: "ChIJn39jT68cdkgR-UtHSbKIISs",name: "The Angel",vicinity: "73 City Rd, London",rating: 4},
    {place_id: "ChIJVVXlm6UcdkgRJzordwoRuyE",name: "The Craft Beer Co. Old Street",vicinity: "235 Old St, London",rating: 4.3}];

    expect(generateClickableURL(pubs)).toEqual("https://www.google.com/maps/dir/?api=1&origin=Finch's&origin_place_id=ChIJ-b_tyK4cdkgRj_BtpBlx-UM&destination=The%20Craft%20Beer%20Co.%20Old%20Street&destination_place_id=ChIJVVXlm6UcdkgRJzordwoRuyE&waypoints=The%20Windmill%7CThe%20Angel&waypoint_place_ids=ChIJ59EmGa8cdkgRmeL0ck_N66g%7CChIJn39jT68cdkgR-UtHSbKIISs&travelmode=walking")
  });
});
