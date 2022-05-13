import ICourseQueryDTO from "../../../dtos/ICourseQueryDTO";
import ITokenMoodle from "./ITokenMoodle";

export default interface IBuscandoDadosMoodle{
  getCourse(data?:ICourseQueryDTO): Promise<any>;
  genToken():Promise<ITokenMoodle>;
}