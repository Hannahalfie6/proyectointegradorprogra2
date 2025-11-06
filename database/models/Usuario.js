module.exports = function (sequelize, DataTypes) {
  let alias= "Usuario"
  let cols={
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),

    },
    fotoPerfil: {
      type: DataTypes.STRING(100)
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  } 
  let config={
    tableName: 'usuarios',
    timestamps: true,
    underscored: false
  }
  let Usuario=sequelize.define(alias,cols,config)

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Producto, {
      as: 'productos',
      foreignKey: 'usuario_id'
    });
    Usuario.hasMany(models.Comentario, {
      as: 'comentarios',
      foreignKey: 'usuario_id'
    });
  };

  return Usuario;
};
