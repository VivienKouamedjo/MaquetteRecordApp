/*Importations */
import axios from 'axios';
import User from '../model/User';

    export const loginUser = (newUser: User) =>{
        return axios
        .post('users/register', {
          genre: newUser.genre,
          tranche_d_age: newUser.tranche_d_age,
          pays: newUser.pays,
          ville: newUser.ville,
          email: newUser.email,
          password: newUser.password
        })
        .then(response => {
          console.log(response.data);
          console.log(response.data);
        })
    }

    export const login = (user: User) => {
        return axios
          .post('users/login', {
            email: user.email,
            password: user.password
          })
          .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
          })
          .catch(err => {
            console.log( err.response.request._response)
          })
      }


export default authService;



