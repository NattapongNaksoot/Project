module.exports = (sequelize, DataTypes) => {
    const Tropical = sequelize.define('Tropical', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        age:DataTypes.STRING,
        birth:DataTypes.STRING,
        health:DataTypes.STRING,
        quantity:DataTypes.INTEGER
    })
    return Tropical
}