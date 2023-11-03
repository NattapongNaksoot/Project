module.exports = (sequelize, DataTypes) => {
    const Aquatic = sequelize.define('Aquatic', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        age:DataTypes.STRING,
        birth:DataTypes.STRING,
        health:DataTypes.STRING,
        quantity:DataTypes.INTEGER
    })
    return Aquatic
}