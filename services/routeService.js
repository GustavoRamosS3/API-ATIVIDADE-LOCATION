const Parse = require('parse/node');

const fetchRoutes = async () => {
  const Route = Parse.Object.extend('Route');
  const query = new Parse.Query(Route);

  try {
    const results = await query.find();
    return results.map(result => ({
      id: result.id,
      name: result.get('name'),
      coordinates: result.get('coordinates') || [],
    }));
  } catch (error) {
    throw new Error('Error fetching routes: ' + error.message);
  }
};

const saveRoute = async (routeData) => {
  const Route = Parse.Object.extend('Route');
  const newRoute = new Route();

  newRoute.set('name', routeData.name);
  newRoute.set('coordinates', routeData.coordinates);

  try {
    await newRoute.save();
    return newRoute;
  } catch (error) {
    throw new Error('Error saving route: ' + error.message);
  }
};

module.exports = {
  fetchRoutes,
  saveRoute,
};
