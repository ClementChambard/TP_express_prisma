import { Task } from '../../../../contexts/task/domains/types'

export function toTagRaw(tag) {
  return {
    id: tag.id,
    title: tag.title,
    tasks: tag.tasks.map((task: Task) => {
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        tags: []
      }
    })
  }
}
