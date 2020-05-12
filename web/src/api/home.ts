import axios from 'axios'

const queryMenus = () => {
    return axios.get('/api/home/menu')
}

export { queryMenus }