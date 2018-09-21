import axios from 'axios';
import envConfig from 'env-config';

const corsAnywhere = 'https://mysterious-bayou-23172.herokuapp.com/';

export default axios.create({
  baseURL: `${corsAnywhere}${envConfig.baseURL}`,
});
