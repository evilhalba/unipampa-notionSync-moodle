import axios from "axios";
import IBuscandoDadosMoodle from "./interfaces/IBuscandoDadosMoodle";
import ITokenMoodle from "./interfaces/ITokenMoodle";

interface moodleStructure {
  data:[
    {
      id:string,
    }
  ]
}

class buscandoDadosMoodle implements IBuscandoDadosMoodle{
  public async genToken(): Promise<ITokenMoodle> {
    const responseData = await  axios.get("https://moodle.unipampa.edu.br/moodle/login/token.php", {params:{
      username: process.env.MOODLE_USER,
      password: process.env.MOODLE_PASSWORD,
      service: 'moodle_mobile_app'
    }});

    if(responseData.status !== 200){
      throw new Error("Error while trying gen the moodle token")
    }

    const responseFinal = {
      token: responseData.data.token,
      privateToken: responseData.data.privatetoken
    }
    return responseFinal;
  };

  public async getCourse(courseId: string): Promise<any> {
    const tokenMoodle = await this.genToken();
    const response = await axios.get("https://moodle.unipampa.edu.br/moodle/webservice/rest/server.php", {params: {
      moodlewsrestformat: 'json',
      wsfunction: 'core_course_get_contents',
      wstoken: tokenMoodle.token,
      courseid: courseId
    }});

    //tratar response e passar tudo para um array de 
    //courseLessons e disponibilizar no retorno da função
    
    const moodleStru: moodleStructure = response.data;
    const {data} = response;
    console.log(data[3].modules[2].dates);
    return moodleStru;
  }

}
export default buscandoDadosMoodle;