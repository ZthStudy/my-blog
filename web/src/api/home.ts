import axios from 'axios'

const queryCards = () => {
    return axios.get('/api/home/cards')
}

export { queryCards }