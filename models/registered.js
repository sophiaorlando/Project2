module.exports = function(sequelize, DataTypes) {
  const Registered = sequelize.define(
    'Registered',
    {
      isTrue: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    },
    {
      freezeTableName: true
    }
  );

  Registered.associate = function(models) {
    // console.log("associate")
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Registered.belongsTo(models.Events, {
      foreignKey: {
        allowNull: false
      }
    });
    // Registered.hasMany(models.User, {
    //   foreignKey: {
    //     allowNull: false
    //   },
    //   onDelete: "cascade"
    // });
  };

  return Registered;
};
