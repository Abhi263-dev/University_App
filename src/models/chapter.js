module.exports = (sequelize, DataTypes) => {
    const Chapter = sequelize.define("chapter", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true, // Ensure it is an integer
          min: 0, // Minimum value allowed is 0
        },
      },
      timeRequired: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Chapter;
  };
  