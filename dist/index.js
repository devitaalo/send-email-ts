"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const xlsx = require('xlsx');
const path = require('path');
const functions_1 = require("./functions");
const Adm = {
    email: "typescriptemail@gmail.com",
    password: "twdrylhbzxttghre",
};
const UsersJson = (0, functions_1.transformarDadosExcelToUserList)("C:\\Users\\conta\\OneDrive\\Documentos\\excelArquivos", "testeEmails.xlsx");
console.log(UsersJson);
UsersJson.forEach((user) => {
    if (user.Endividado === "true") {
        const transport = (0, functions_1.criarCanalSMTP)(Adm.email, Adm.password);
        const mailOptions = {
            from: 'typescriptemail@gmail.com',
            to: user.Email,
            subject: `Você está devendo, (EMAIL TESTE)`,
            text: `Olá ${user.Nome}, você está nos devendo um valor de R$ ${user.Valor}. EMAIL FALSO APENAS UM TESTE!!!`,
        };
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email enviado: ' + info.response);
            }
        });
    }
});
