module.exports = (sequelize, DataTypes) => {
    const subChapter = sequelize.define("subchapter", {
        chapterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        details: {
            type: DataTypes.JSON,
            allowNull: false
        },
    });
    return subChapter;
  };