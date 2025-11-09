module.exports = function (sequelize, DataTypes) {
  let alias = "Producto";

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    usuario_id: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    imagen: {
      type: DataTypes.STRING
    },
    nombre: {
      type: DataTypes.STRING(100),
    },
    descripcion: {
      type: DataTypes.STRING
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
  };

  let config = {
    tableName: "productos",
    timestamps: true,
    underscored: false
  };

  let Producto = sequelize.define(alias, cols, config);

  // Asociaciones
  Producto.associate = function (models) {
    Producto.belongsTo(models.Usuario, { 
      as: "usuario",
      foreignKey: "usuario_id"
    });

    Producto.hasMany(models.Comentario, {
      as: "comentarios",
      foreignKey: "producto_id"
    });
  };

  return Producto;
};
