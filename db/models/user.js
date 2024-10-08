"use strict";
const { Sequelize } = require("sequelize");
const Video = require("./video.js");
const sequelize = require("../../config/database");
const user = sequelize.define(
  "Users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    googleSub: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    profilePic: {
      type: Sequelize.STRING,
    },
    savedVideos: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "Users",
    sequelize,
    modelName: "Users",
  }
);

user.hasMany(Video, { foreignKey: "UserID" });
Video.belongsTo(user, {
  foreignKey: "UserID",
});

module.exports = user;
