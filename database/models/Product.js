module.exports= function(Sequelize, DataTypes) {
    let alias= 'Product'
    let cols= {
        id: {
            primaryKey: true, 
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
       id_users: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        imagen: {
            type: DataTypes.STRING(255),
        },
        nombre: {
            type: DataTypes.STRING(50) ,
            notNull: true,
        },
        descripcion: {
            type: DataTypes.STRING, 
            notNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
    }

    let config= {
        tableName: 'products',
        timestamps: true,
        underscored: false,
    }
    const Product= Sequelize.define(alias, cols, config)

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: "producto_usuario",
            foreignKey : "id_users"
        })
        Product.hasMany(models.Comentario, {
            as: "producto_comentario" ,
            foreignKey: "id_imagen"
        })

       
    }
    return Product;
}