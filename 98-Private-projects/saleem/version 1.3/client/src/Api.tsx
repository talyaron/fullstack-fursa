const Usersurl = "http://localhost:3001/users/";

const axios = require('axios');

interface loginParams{
  user:string,
  pss:string
}

export default function checkVerified(prop:loginParams) {
    return new Promise((resolve, reject) => {
      axios.get(Usersurl, { params: { email:prop.user,password:prop.pss } }).then((res: unknown) => {
        resolve(res)
      })
      .catch((err: any) => reject(err))})}

     


