const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Blogposts extends Model {
 
}

Blogposts.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
  
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
        type: DataTypes.STRING,



    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key : 'id',

        }
    }

  
  },
  {
  
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Blogposts',
  }
);

module.exports = Blogposts;