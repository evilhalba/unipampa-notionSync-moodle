import {Client} from "@notionhq/client"
import ITaskAddDTO from "../../dtos/ITaskAddDTO";
import IAddTaskToNotion from "./interfaces/IAddTaskToNotion";





class AddTaskIntoNotion implements IAddTaskToNotion{
  
  

  public async add(data?: ITaskAddDTO): Promise<any> {
    const notion = new Client({
      auth: process.env.NOTION_AUTH_TOKEN,
    });
    
    var database_id = process.env.NOTION_DATABASE_ID;
    if(!database_id) {
      throw new Error('database id not found in env file')
    }

    try {
      const testandu = await notion.databases.retrieve({ database_id });
      const retorno = await notion.pages.create({
        parent: {
          database_id,
        },
        properties:{
          Teste: {
            rich_text:[
              {
                text: {
                  content: "teste"
                },
                
              },
            ],
          }
        
        },
      });
      return testandu;
    }catch (e) {
      console.log(e);
    }
  }
  public async getTasks(): Promise<any> {
    throw new Error("Method not implemented.");
  }

}

export default AddTaskIntoNotion;