module.exports = (sequelize, DataTypes) => {
    const Aqatic = sequelize.define('Aqatic', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        age:DataTypes.STRING,
        birth:DataTypes.STRING,
        health:DataTypes.STRING
        
    })
    return Aqatic
}