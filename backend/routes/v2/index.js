const express = require('express');

module.exports = () => {
	const router = express.Router();

	[
		require('./categoryRoutes')
	].forEach(register => register(router));

	return router;
};
