import { Tag } from '../../../tag/domains/types'

export type Task = {
  id: string
  title: string
  description?: string
  status: number
  priority: number
  tags: Tag[]
}

export type TaskCreate = Omit<Task, 'id' | 'tags'>
export type TaskUpdate = Partial<TaskCreate>
