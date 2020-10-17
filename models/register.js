module.exports = function(sequelize, DataTypes) {
	const Register = sequelize.define('Register', {
		eventType: {
			type: DataTypes.BOOLEAN,
		},
	})

	Register.associate = function(models) {
		Register.belongsTo(models.Events, {
			foreignKey: {
				allowNull: false,
			},
		})

		Register.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		})
	}

	return Register
}
