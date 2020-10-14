// const server = require("server.js");
const config = require('../config/config.js')

// const app = express();
// const server = require ("./server.js")
// const axios = require("axios");

// API CALL TO VISITOR CENTER (NODE AXIOS)

module.exports = function(sequelize, DataTypes) {
	const beachInfo = sequelize.define('beachInfo', {
		county: DataTypes.STRING,
		siteName: DataTypes.STRING,
		address: DataTypes.STRING,
		latitude: DataTypes.STRING,
		longitude: DataTypes.STRING,
		website: DataTypes.STRING,
		startTime: DataTypes.STRING,
		endTime: DataTypes.STRING,
		whatToBring: DataTypes.STRING,
		organization: DataTypes.STRING,
		phone: DataTypes.STRING,
		email: DataTypes.STRING,
	})

	beachInfo.associate = function(models) {
		beachInfo.hasMany(models.Events, {
			onDelete: 'cascade',
		})
	}
	return beachInfo
}
