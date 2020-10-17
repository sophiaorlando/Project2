module.exports = function(sequelize, DataTypes) {
	const Events = sequelize.define('Events', {
		eventType: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		eventDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		eventTime: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		eventTitle: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		eventDescription: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		createdByUser: {
			type: DataTypes.INTEGER,
		},
	})

	Events.associate = function(models) {
		// We're saying that a Post should belong to an Author
		// A Post can't be created without an Author due to the foreign key constraint
		Events.belongsTo(models.beachInfo, {
			foreignKey: {
				allowNull: false,
			},
		})

		Events.hasMany(models.Register, {
			onDelete: 'cascade',
		})
	}

	return Events
}
