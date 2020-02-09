import axios from 'axios'

export default axios.create({
  baseURL: `https://raw.githubusercontent.com/brownbaglunch-ma/bblma-data/master/baggers.json`
});
