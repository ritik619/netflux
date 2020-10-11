import Axios from 'axios'

const instance=Axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
//https://api.themoviedb.org/3//foo-bar
//instance.get('/foo-bar')

export default instance