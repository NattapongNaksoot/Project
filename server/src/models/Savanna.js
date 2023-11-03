module.exports = (sequelize, DataTypes) => {
    const Savanna = sequelize.define('Savanna', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        age:DataTypes.STRING,
        birth:DataTypes.STRING,
        health:DataTypes.STRING,
        quantity:DataTypes.INTEGER
    })
    return Savanna
}