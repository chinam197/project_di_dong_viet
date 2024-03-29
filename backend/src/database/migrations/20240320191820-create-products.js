"use strict";

const { INTEGER } = require("sequelize");
const { sequelize } = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      msp: {
        // Mã duy nhất để phân biệt các sản phẩm.
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(500),
      },
      price: {
        type: Sequelize.INTEGER,
      },
      category: {
        //Phân loại sản phẩm (ví dụ: Laptop, Máy tính bảng, Điện thoại di động).
        type: Sequelize.STRING(100),
      },
      details: {
        //Một trường có thể chứa thông tin chi tiết về cấu hình kỹ thuật của sản phẩm (ví dụ: CPU, RAM, dung lượng ổ cứng).
        type: Sequelize.TEXT,
      },
      inventory_Status: {
        type: Sequelize.INTEGER, //Thông tin về số lượng tồn kho của sản phẩm.
      },
      status: {
        type: Sequelize.BOOLEAN, //Trạng thái của sản phẩm (có sẵn, hết hàng, ...).
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
