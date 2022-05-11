import ICourseQueryDTO from "../../../dtos/ICourseQueryDTO";

export default interface IBuscandoDadosMoodle{
  getCourse(data?:ICourseQueryDTO): Promise<any>;
}