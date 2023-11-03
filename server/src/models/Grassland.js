module.exports = (sequelize, DataTypes) => {
    const Grassland = sequelize.define('Grassland', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        age:DataTypes.STRING,
        birth:DataTypes.STRING,
        health:DataTypes.STRING,
        quantity:DataTypes.INTEGER
    })
    return Grassland
}