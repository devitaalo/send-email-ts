"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCanalSMTP = exports.transformarDadosExcelToUserList = void 0;
const xlsx = require('xlsx');
const path = require('path');
const nodemailer = require("nodemailer");
function transformarDadosExcelToUserList(caminho, nomeDoArquivo) {
    const workbook = xlsx.readFile(path.join(caminho, nomeDoArquivo));
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);
    return data;
}
exports.transformarDadosExcelToUserList = transformarDadosExcelToUserList;
function criarCanalSMTP(username, password) {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "typescriptemail@gmail.com",
            pass: "twdrylhbzxttghre",
        }
    });
    return transport;
}
exports.criarCanalSMTP = criarCanalSMTP;
