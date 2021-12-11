const axios = require("axios");

const API_ENDPOINT = "http://localhost/3000";

const RegisterUser = ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await axios.post(`${API_ENDPOINT}/auth/register`);
            console.log(user);

            resolve(user)
        } catch (err) {
            reject(false)
        }
    })
}


export default RegisterUser;
