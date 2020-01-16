function generateClickableURL(pubs) {
  var origin_place_id = pubs[0].place_id
  var origin_name = pubs[0].name
  var destination_place_id = pubs[pubs.length -1].place_id
  var destination_name = pubs[pubs.length -1].name
  var result = `https://www.google.com/maps/dir/?api=1&origin=${origin_name}&origin_place_id=${origin_place_id}&destination=${destination_name}&destination_place_id=${destination_place_id}&travelmode=walking`

  return encodeURI(result);
}


export default generateClickableURL;
