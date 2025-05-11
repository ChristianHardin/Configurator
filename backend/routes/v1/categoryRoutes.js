module.exports = (router) => {
	router.route('/categories').get(function(req, res, next) {
		const json = {
			test: "yes"
		}
		res.json(json);
		res.status(200).send();
	});

	router.route('/category/:categoryId').get(function(req, res, next) {
		const id = req.params.categoryId;
		res.json({"CategoryId": id});
		res.status(200).send();
	});
};
