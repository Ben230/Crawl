import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { create } from "react-test-renderer";
import placesAPIResultMock from './resources/pubs'
import PubListView from "../components/pubListView"





describe('PubListView', function() {
  it('pass empty array and returns empty div', function() {
    const pubList = shallow(<PubListView pubs={[]}/>);

    expect(pubList.contains(<div><ul></ul></div>)).toBe(true);
  });

  it('pass in 1 pub and returns pub details', function() {
    const testPubArr = [{
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
    }]
    const pubList = shallow(<PubListView pubs={testPubArr}/>);

    expect(pubList.find('ul').text()).toEqual("The Ten Bells Spitalfields")
  })

  it('pass in 1 pub and returns pub details', function() {
    const testPubArr = [
      {
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
      },
      {
        "geometry": {
          "location": {
            "lat": 51.5168921,
            "lng": -0.0730285
          },
          "viewport": {
            "northeast": {
              "lat": 51.51829822989273,
              "lng": -0.07165832010727778
            },
            "southwest": {
              "lat": 51.51559857010729,
              "lng": -0.07435797989272222
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
        "id": "a7de8e56ac03dc313b8eff304e09fcf903934fd3",
        "name": "The Culpeper",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 2360,
            "html_attributions": [
              "<a href=\"https://maps.google.com/maps/contrib/118139050750641870512\">Nicole Faith Rolon</a>"
            ],
            "photo_reference": "CmRaAAAA-_0Jxateyaj4eO2FFeiiKLu0Wv3IqHZF6iGNpSSXI4xAZHFdonFkchFvyCU8_AROzja30D142Q6qC2j9mmAiKBCEjfYUt05udV5r3F74CHdT67jgG5_zuFiB_x7F4-DdEhCYwnRqr5LCIl4AkjyJZ64yGhRyubm_f-x0NCVdrGiq-8--FMWYmQ",
            "width": 10800
          }
        ],
        "place_id": "ChIJAfrz4lYxcEERCMgjl3xkNDI",
        "plus_code": {
          "compound_code": "GW8G+QQ London",
          "global_code": "9C3XGW8G+QQ"
        },
        "rating": 4.3,
        "reference": "ChIJAfrz4lYxcEERCMgjl3xkNDI",
        "scope": "GOOGLE",
        "types": [
          "lodging",
          "bar",
          "point_of_interest",
          "establishment"
        ],
        "user_ratings_total": 1890,
        "vicinity": "40 Commercial St, London"
      }]
    const pubList = shallow(<PubListView pubs={testPubArr}/>);

    expect(pubList.find('ul').text()).toEqual("The Ten Bells SpitalfieldsThe Culpeper")
  })
});
