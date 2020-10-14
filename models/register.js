module.exports = function(sequelize, DataTypes) {
	const Register = sequelize.define('Register', {
		eventType: {
			type: DataTypes.BOOLEAN,
		},
	})

	Register.associate = function(models) {
		// We're saying that a Post should belong to an Author
		// A Post can't be created without an Author due to the foreign key constraint
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
