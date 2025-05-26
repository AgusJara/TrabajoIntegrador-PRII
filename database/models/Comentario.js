module.exports= function(Sequelize, DataTypes) {
    let alias= 'Comentario'
    let cols= {
        id: {
            primaryKey: true, 
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        id_imagen: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        id_users: {
            type: DataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },
        texto: {
            type: DataTypes.STRING(100),
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
        tableName: 'comentarios',
        timestamps: true,
        underscored: false,
    }
    const Comentario= Sequelize.define(alias, cols, config)
    return Comentario;
}