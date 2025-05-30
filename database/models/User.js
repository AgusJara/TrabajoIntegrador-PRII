const { usuario } = require("../../db/datos") 

module.exports= function(Sequelize, DataTypes) {
    let alias= 'User'
    let cols= {
        id: {
            primaryKey: true, 
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        usuario:{
            type:DataTypes.STRING(25),
            notNull: true,
        },
        email: {
            type: DataTypes.STRING(100),
            notNull: true,
            unique: true,
        },
        constrasenia: {
            type: DataTypes.STRING,
            notNull: true,
        },
        fechaDeNacimiento: {
            notNull: true,
            type: DataTypes.DATE,
        },
        nroDeDocumento: {
            type: DataTypes.INTEGER,
            unique: true,
        },
        fotoDePerfil: {
            type: DataTypes.STRING,
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
        tableName: 'users',
        timestamps: true,
        underscored: false,
    }
    const User= Sequelize.define(alias, cols, config)

    User.associate= function (models) {
        User.hasMany(models.Product, {
            as: 'usuario_producto',
            foreignKey: 'id_users',
        }), 
        User.hasMany(models.Comentario, {
            as: 'usuario_comentario',
            foreignKey: 'id_users'
        })
    }

    return User;
}