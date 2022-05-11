import express from 'express';
import {Client} from "@notionhq/client"
const app = express();

const notion = new Client({
  auth: "auth_token"
});



async function addItem(texto:string) {
  try {
    const testandu = await notion.databases.retrieve({ database_id: "29a82dfdd15147309bacc945d1da3722" });
    const retorno = await notion.pages.create({
      parent: {
        database_id: "database_id",
      },
      properties:{
        Teste: {
          rich_text:[
            {
              text: {
                content: texto
              },
              
            },
          ],
        }
      
      },
    });
    console.log(testandu)
  }catch (e) {
    console.log(e);
  }
}

app.get('/', async (request, response) => {
  const listUsersResponse = await notion.users.list({});
  console.log(listUsersResponse);
  addItem("testando testado testador apiwededed");
  return response.status(200).send();
});

app.listen(8400, "localhost");