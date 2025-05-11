module.exports = (router) => {
	router.route('/categories').get(function(req, res, next) {
		const json = {
			test: "no"
		}
		res.json(json);
		res.status(200).send();
	});
};
