import axios from "axios";

export function getUsers(): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get("/get-users")
        .then((res) => {
          console.log(res);
          const { data } = res;
          console.log(data);
          const { users } = data;
          if (users) {
            resolve(users);
          }
        })
        .catch((err) => {
          console.error(err);
          reject(err.message);
        });
    } catch (err: any) {
      console.error(err);
      reject(err.message);
    }
  });
}
