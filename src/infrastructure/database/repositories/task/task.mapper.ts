import { TaskRaw } from '../../../../contexts/task'
import { toTagRaw } from '../tag/tag.mapper'

export function toTaskRaw(task: TaskRaw): any {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    tags: task.tags.map(tag => {
      return {
        id: tag.id,
        title: tag.title
      }
    })
  }
}
