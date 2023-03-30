import users from './user'
import articles from './article'

type Method = 'get' | 'post' | 'delete' | 'put' | 'patch'

interface Response {
  data: any
  errno: number
}
export interface MockItem {
  method: Method
  url: string
  response: () => Response
}
export const mockList: MockItem[] = [...users, ...articles]

export default mockList

