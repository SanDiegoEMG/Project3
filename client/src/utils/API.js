import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  // get all species documents as array of objects
  getAllSpecies: () => {
    return axios.get(`/api/species`);
  },

  // get data associated with one mushroom species
  getOneSpecies: (id) => {
    return axios.get(`/api/species/${id}`);
  },

  deleteOneSpecies: (id) => {
    return axios.delete(`/api/species/${id}`)
  },

  // get all batch documents as array of objects
  // getAllBatch: () => {
  //   return axios.get(`/api/batch`);
  // },

  // // start a new batch document (use on Admin page)
  // startBatch: (batchNum, bagNum, species, bagSize) => {
  //   return axios.post('api/batch', {batchNum: batchNum, bagNum: bagNum, species: species, bagSize: bagSize}); 
  // }

  // get data associated with one batch id
  getOneBatch: (id) => {
    return axios.get(`/api/batch/${id}`);
  },
  
  // get request of all batches
  getAllBatches: () => {
    return axios.get(`/api/batch`);
  },

  // start a new batch document (use on Admin page)
  startBatch: (batchNum, bagNum, species, bagSize, growthStage, uniqueID) => {
    return axios.post('api/batch', {
      batchNum: batchNum,
      bagNum: bagNum,
      species: species,
      bagSize: bagSize,
      growthStage: growthStage,
      uniqueID: uniqueID
    }); 
  }
};
