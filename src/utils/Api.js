//import {getToken} from './ApiStorage'

//const host = "http://localhost:3000"
//const hostApi = `${host}/api/v1`

const host = "http://localhost:3001"
const hostApi = `${host}`

const getHeaders = async() => {
    //const token = await getToken()
    const token = '__local__'
    return {
        'Accept': 'application/json',
        'Authorization': token
    }
}

const handleErrors = (response) => {
    if (response.ok) {
        return response;
    } else {
        /*
        if(response.status == 422) {
            return response;
        }
        if (response.status === 401) {
            alert('Sessão expirada.')
            window.location = '/login';
        }

        let error = new Error(response.statusText);
        error.response = response;
        throw error;
        */

        // FIX - https://stackoverflow.com/questions/40408219/how-to-get-readable-error-response-from-javascript-fetch-api
        return response.text().then(text => {throw new Error(text)})
    }
}

export { host, hostApi, getHeaders, handleErrors }