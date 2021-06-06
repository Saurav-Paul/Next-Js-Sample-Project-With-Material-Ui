import {debug_print} from "./defaults";

const routes = new Map()

routes.set('home', '/')
routes.set('transaction_lists', 'http://localhost:3000/api/transactions')

export const get_route = (url: string, extra = '') => {
    try {
        return `${routes.get(url)}${extra}`
    } catch {
        debug_print('Url not found');
        return '/'
    }
}