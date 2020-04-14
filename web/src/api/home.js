import axios from 'axios'

const getMenus = () => {
    return axios.get('/api/home/menu')
}

export { getMenus }