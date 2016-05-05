'use strict';

var trucks = require('../helpers/truckRepo.json');
var jp = require('jsonpath');

module.exports = {
	get: function (req, res) {
		var id = req.swagger.params.id.value;
		return res.json(jp.query(trucks, '$..[?(@.id=='+id+')]'))
	},
	all: all
};

function all (req, res) {
	return res.json(trucks);
}