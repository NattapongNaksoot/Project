module.exports = (sequelize, DataTypes) => {
    const Electrolux = sequelize.define('Electrolux', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        model: DataTypes.STRING,
        category: DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Electrolux
}