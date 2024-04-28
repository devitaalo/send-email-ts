const nodemailer = require("nodemailer");
const xlsx = require('xlsx');
const path = require('path');
import { criarCanalSMTP, transformarDadosExcelToUserList } from './functions';
import { ADM, User } from './tipos';

const Adm: ADM = {
    email: "typescriptemail@gmail.com",
    password: "twdrylhbzxttghre",
}

const UsersJson: User[] = transformarDadosExcelToUserList("C:\\Users\\conta\\OneDrive\\Documentos\\excelArquivos","testeEmails.xlsx");

console.log(UsersJson);

UsersJson.forEach((user) => {
    if (user.Endividado === "true") {
        const transport = criarCanalSMTP(Adm.email, Adm.password);


        const mailOptions = {
             from: 'typescriptemail@gmail.com',
             to: user.Email,
             subject: `Você está devendo, (EMAIL TESTE)`,
             text: `Olá ${user.Nome}, você está nos devendo um valor de R$ ${user.Valor}. EMAIL FALSO APENAS UM TESTE!!!`,
        };
        
         transport.sendMail(mailOptions, function(error: any, info: any) {
             if (error) {
                 console.log(error);
             } else {
                 console.log('Email enviado: ' + info.response);
             }
        });
    }
})

