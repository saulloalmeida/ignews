import {NextApiRequest, NextApiResponse} from 'next'
// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id:1,name:'Saullo'},
        {id:2,name:'Saullo 2'},
        {id:3,name:'Saullo 3'},
    ]

    return response.json(users)
}