import { Task, TaskCreate, TaskUpdate } from '../domains/types'

export type TaskRaw = Task
export type TaskCreateRaw = TaskCreate
export type TaskUpdateRaw = TaskUpdate

export interface ITaskRepository {
  getTasks(page: number, sorted: boolean): Promise<Task[]>
  getOneTask(id: string): Promise<Task>
  createTask(task: TaskCreate): Promise<Task>
  updateTask(id: string, data: TaskUpdate): Promise<void>
  deleteTask(id: string): Promise<void>
  addTag(taskId: string, tagId: string): Promise<void>
  removeTag(taskId: string, tagId: string): Promise<void>
}
