import { Task } from "../../enterprise/entities/task";

export interface TaskRepository {
  create(task: Task): Promise<void>;
}
