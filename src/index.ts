import express from 'express';
import * as dotenv from 'dotenv';
import buscandoDadosMoodle from './providers/moodle/buscandoDadosMoodle';
import AddTaskIntoNotion from './providers/notion/AddTaskIntoNotion';
const app = express();
dotenv.config();


//TESTE DE ADIÇÃO DE DADOS EM UMA TABELA DO NOTION

app.get('/', async (request, response) => {
  const busca = new buscandoDadosMoodle();
  const addNt = new AddTaskIntoNotion();
  const listUsersResponse = await busca.getCourse();
  const testeNotion = await addNt.add();
  return response.status(200).json(testeNotion);
});

app.listen(8400, "localhost");