import Mock from 'mockjs'
import { MockItem } from '.'

const Random = Mock.Random

const users: MockItem[] = [{
    url: '/api/user/:id',
    method: 'get',
    response(){
        return {
            errno: 0,
            data: {
                id: Random.id(),
                name: Random.cname(),
                email: Random.email(),
                address:Random.county(),
            }
        }
    }
}, {
    url: '/api/user',
    method: 'post',
    response(){
        return {
            errno: 0,
            data: {
                id: Random.id(),
            }
        }
    }
}]

export default users
