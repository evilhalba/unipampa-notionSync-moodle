import express from 'express';
import * as dotenv from 'dotenv';
import buscandoDadosMoodle from './providers/moodle/buscandoDadosMoodle';
import AddTaskIntoNotion from './providers/notion/AddTaskIntoNotion';
const app = express();
dotenv.config();


//TESTE DE ADIÇÃO DE DADOS EM UMA TABELA DO NOTION

app.get('/', async (request, response) => {
  const moodle = new buscandoDadosMoodle();
  const busca = await moodle.getCourse('16724');
  return response.status(200).json(busca);
});

app.listen(8400, "localhost");