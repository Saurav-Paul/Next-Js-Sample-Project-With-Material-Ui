import {NextApiRequest, NextApiResponse} from "next";


const dummy_data = {
    'expanses' : [
        {
            'title' : 'Buy food',
            'amount' : 100
        },
        {
            'title' : 'play pool',
            'amount' : 60
        }

    ]
    ,
    'incomes' : [
        {
            'title' : 'Salary',
            'amount' : 500
        }
    ]
}

export default (req:NextApiRequest, res : NextApiResponse) => {
    res.status(200).json(JSON.stringify(dummy_data))
}
