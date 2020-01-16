function generateClickableURL(pubs) {
  var origin_place_id = pubs[0].place_id
  var origin_name = pubs[0].name
  var destination_place_id = pubs[pubs.length -1].place_id
  var destination_name = pubs[pubs.length -1].name

  if (pubs.length > 2) {
    var waypoint_place_id = ""
    var waypoint_name = ""
    for (var i = 1;i<pubs.length-1;i++){
      waypoint_place_id += pubs[i].place_id + '|'
      waypoint_name += pubs[i].name + '|'

    }
    console.log("waypoint_place_id", waypoint_place_id)
    console.log("waypoint_name", waypoint_name)


    waypoint_place_id = waypoint_place_id.slice(0,-1)
    waypoint_name = waypoint_name.slice(0,-1)


    var result = `https://www.google.com/maps/dir/?api=1&origin=${origin_name}&origin_place_id=${origin_place_id}&destination=${destination_name}&destination_place_id=${destination_place_id}&waypoints=${waypoint_name}&waypoint_place_ids=${waypoint_place_id}&travelmode=walking`

  } else {
    var result = `https://www.google.com/maps/dir/?api=1&origin=${origin_name}&origin_place_id=${origin_place_id}&destination=${destination_name}&destination_place_id=${destination_place_id}&travelmode=walking`

  }


  return encodeURI(result);
}


export default generateClickableURL;
