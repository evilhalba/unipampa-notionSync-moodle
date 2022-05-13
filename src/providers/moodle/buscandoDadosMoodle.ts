import axios from "axios";
import ICourseQueryDTO from "../../dtos/ICourseQueryDTO";
import IBuscandoDadosMoodle from "./interfaces/IBuscandoDadosMoodle";
import ITokenMoodle from "./interfaces/ITokenMoodle";

class buscandoDadosMoodle implements IBuscandoDadosMoodle{
  public async genToken(): Promise<ITokenMoodle> {
    const responseData = await  axios.get("", {params:{
      username: process.env.MOODLE_USER,
      password: process.env.MOODLE_PASS
    }});

    if(responseData.status !== 200){
      throw new Error("Error while trying gen the moodle token")
    }

    const responseFinal = {
      token: responseData.data.token,
      privateToken: responseData.data.privateToken
    }

    return responseFinal;
  };

  public async getCourse(data?: ICourseQueryDTO): Promise<any> {
    const tokenMoodle = await this.genToken();
    const response = await axios.get("https://moodle.unipampa.edu.br/moodle/webservice/rest/server.php", {params: {
      moodlewsrestformat: 'json',
      wsfunction: 'core_course_get_contents',
      wstoken: tokenMoodle.token,
      courseid: '17264',// analise e projeto de software
    }});
    return response.data;
  }

}
export default buscandoDadosMoodle;