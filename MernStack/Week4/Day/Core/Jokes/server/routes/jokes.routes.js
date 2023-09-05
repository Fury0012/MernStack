const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');

router.get('/api/jokes', jokesController.getAllJokes);
router.get('/api/jokes/:id', jokesController.getSingleJoke);
router.post('/api/jokes', jokesController.createJoke);
router.put('/api/jokes/:id', jokesController.updateJoke);
router.delete('/api/jokes/:id', jokesController.deleteJoke);

module.exports = router;
