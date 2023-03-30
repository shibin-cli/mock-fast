import Mock from 'mockjs'
import { MockItem } from '.'

const Random = Mock.Random

const articles: MockItem[] = [{
    url: '/api/article/:id',
    method: 'get',
    response(){
        return {
            errno: 0,
            data: {
                id: Random.id(),
                author: Random.cname(),
                email: Random.email(),
                address:Random.county(),
                content: Random.cparagraph()
            }
        }
    }
}]

export default articles
