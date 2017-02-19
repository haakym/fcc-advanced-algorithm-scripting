function calculateOrbitalPeriod(satellite) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const satelliteAxis = earthRadius + satellite.avgAlt;

  // formula from https://en.wikipedia.org/wiki/Orbital_period#Small_body_orbiting_a_central_body
  const orbitalPeriod = Math.round((2 * Math.PI) * (Math.sqrt((Math.pow(satelliteAxis, 3) / GM))));

  return {'name': satellite.name, 'orbitalPeriod': orbitalPeriod};
}

function orbitalPeriod(arr) {
  return arr.map(calculateOrbitalPeriod);
}
