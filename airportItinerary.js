//create an itinerary feature that can compress the list of airports including only the list of unique in/out combination.

function itinerary(travel) {
    return travel.reduce((r, x) => r.concat(r[r.length-1] != x.in ? [x.in, x.out] : x.out), []).join('-');
  }