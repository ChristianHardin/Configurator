const express = require('express');

module.exports = () => {
  const router = express.Router();
  router.use('/v1', require('./v1')());
	router.use('/v2', require('./v2')());
  return router;
};

