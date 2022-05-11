import ITaskAddDTO from "../../../dtos/ITaskAddDTO";

export default interface IAddTaskToNotion{
  add(data?: ITaskAddDTO):Promise<any>;
  getTasks():Promise<any>;
}