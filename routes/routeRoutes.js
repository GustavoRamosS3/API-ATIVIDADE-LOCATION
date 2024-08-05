const express = require('express');
const router = express.Router();
const routeService = require('../services/routeService');

// Rota para buscar rotas
router.get('/routes', async (req, res) => {
  try {
    const routes = await routeService.fetchRoutes();
    res.json(routes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Rota para salvar uma nova rota
router.post('/routes', async (req, res) => {
  const { name, coordinates } = req.body;

  // Validação simples das coordenadas
  if (!Array.isArray(coordinates) || coordinates.some(coord => !Array.isArray(coord) || coord.length !== 2)) {
    return res.status(400).send('Invalid coordinates format');
  }

  try {
    const newRoute = await routeService.saveRoute({ name, coordinates });
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
