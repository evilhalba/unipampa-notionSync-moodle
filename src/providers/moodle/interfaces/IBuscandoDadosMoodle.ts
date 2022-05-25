import ITokenMoodle from "./ITokenMoodle";

export default interface IBuscandoDadosMoodle{
  getCourse(courseId:string): Promise<any>;
  genToken():Promise<ITokenMoodle>;
}