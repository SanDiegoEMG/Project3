import axios from "axios";
export default {
  // Gets a single user by id
  getUser: id => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", {
      username: username,
      email: email,
      password: password
    });
  },

  // get all mushroom species data as array of objects
  getAllSpecies: () => {
    return axios.get(`/api/species`);
  },

  // get all batch data as array of objects
  getAllBatchData: () => {
    return axios.get(`/api/batch`);
  },

  // get all admin data as array of objects
  getAllAdmin: () => {
    return axios.get(`/api/admin`);
  },

  // get all motherculture data as array of objects
  getAllMothercultures: () => {
    return axios.get(`/api/mothercultures`);
  }
};
