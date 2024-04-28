import { User } from "./tipos";
const xlsx = require('xlsx');
const path = require('path');
const nodemailer = require("nodemailer");


export function transformarDadosExcelToUserList(caminho: string, nomeDoArquivo: string): User[] {
    const workbook = xlsx.readFile(path.join(caminho,nomeDoArquivo));

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    const data: User[] = xlsx.utils.sheet_to_json(worksheet);

    return data;
}

export function criarCanalSMTP(username: string, password: string): any{
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465 ,
        secure: true,
        auth: {
            user: "typescriptemail@gmail.com",
            pass: "twdrylhbzxttghre",
        }
    })
    return transport;
}
