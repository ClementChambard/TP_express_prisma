import { Task } from '../../../task/domains/types'

export type Tag = {
  id: string
  title: string
  tasks: Task[]
}

export type TagCreate = Omit<Tag, 'id' | 'tasks'>
export type TagUpdate = Partial<TagCreate>
