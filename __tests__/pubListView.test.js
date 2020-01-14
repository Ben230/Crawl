import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";

import PubListView from "../components/pubListView"




describe('PubListView', function() {
  it('pass empty array and returns empty div', function() {
    const pubList = shallow(<PubListView pubs={[]}/>);

    expect(pubList.contains(<div><ul></ul></div>)).toBe(true);
  });

  it('pass in 1 pub and returns pub details', function() {
    const testPubArr = {
      "geometry": {
        "location": {
          "lat": 51.51935599999999,
          "lng": -0.074303
        },
        "viewport": {
          "northeast": {
            "lat": 51.52067557989272,
            "lng": -0.07304597010727777
          },
          "southwest": {
            "lat": 51.51797592010728,
            "lng": -0.07574562989272221
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
      "id": "6f8281318f3748afd88f6498d011c2907afbc463",
      "name": "The Ten Bells Spitalfields",
      "opening_hours": {
        "open_now": true
      },
      "photos": [
        {
          "height": 450,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/111593655817698340373\">A Google User</a>"
          ],
          "photo_reference": "CmRaAAAA2FQch_dJsvW0Xla64iQ5e4P-JWRR3aDblbRI11xxMv7p_OmBX56uILzgU-zKll_T46s9u412G-hHCH1fF2g2Hj8lkVFAdd9jc2DByvTZKufcj4D5wVcBeB3Hh7x_22NtEhDsdwbWzzEyHkJwN4lXU5qOGhQysvMLr6oIv4dDEd20gLzpJ74k7w",
          "width": 600
        }
      ],
      "place_id": "ChIJS36lO7QcdkgRrM1pXUYLS4g",
      "plus_code": {
        "compound_code": "GW9G+P7 London",
        "global_code": "9C3XGW9G+P7"
      },
      "price_level": 2,
      "rating": 4.3,
      "reference": "ChIJS36lO7QcdkgRrM1pXUYLS4g",
      "scope": "GOOGLE",
      "types": [
        "bar",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 2062,
      "vicinity": "84 Commercial St, London"
    }
    const pubList = shallow(<PubListView pubs={[testPubArr]}/>);

    expect(pubList.find('ul').text()).toEqual("The Ten Bells Spitalfields")
  })
});
