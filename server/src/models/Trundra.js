module.exports = (sequelize, DataTypes) => {
    const Trundra = sequelize.define('Trundra', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        age:DataTypes.STRING,
        birth:DataTypes.STRING,
        health:DataTypes.STRING,
        quantity:DataTypes.INTEGER
    })
    return Trundra
}