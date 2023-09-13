import axios from "axios"
export const burgerApi = async ()=>{
    return axios.get('https://adorable-bat-fatigues.cyclic.app/burgers')
}