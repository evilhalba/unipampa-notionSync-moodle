import axios from "axios";
import ICourseQueryDTO from "../../dtos/ICourseQueryDTO";
import IBuscandoDadosMoodle from "./interfaces/IBuscandoDadosMoodle";

class buscandoDadosMoodle implements IBuscandoDadosMoodle{
  public async getCourse(data?: ICourseQueryDTO): Promise<any> {
    
    const response = await axios.get("https://moodle.unipampa.edu.br/moodle/webservice/rest/server.php", {params: {
      moodlewsrestformat: 'json',
      wsfunction: 'core_course_get_contents',
      wstoken: 'token gerado pelo moodle',
      courseid: '17264',// analise e projeto de software
    }});
    return response.data;
  }

}
export default buscandoDadosMoodle;