import { con } from "../server";

function uid() {
    return Math.floor(Math.random() * 1e6);
  }

export function register(req, res){
    try {
        const { name, city, password } = req.body;
        if (!name) throw new Error("No name in body");
        if (!city) throw new Error("No city in body");
        if (!password) throw new Error("No password in body");
    
        console.log("connect to rgister route");
        const sql = `INSERT INTO cats.owners(id,name,city,password) VALUES (${uid()},'${name}','${city}', ${password});`;
        // con.query(sql, (err, result) => {
        //   try {
        //     if (err) throw err;
        //     console.log("1 record inserted");
        //     res.send({ results: result });
        //   } catch (err) {
        //     console.log(err.message);
        //     res.send({ error: err.message });
        //   }
        // });
      } catch (error) {
        console.log(`In post-registe error: ${error.message}`);
        res.status(500).send({ error: error.message });
      }
}

export function login(req, res){
    try {
        const { name, password } = req.body;
        if (!name) throw new Error("No name in body");
        if (!password) throw new Error("No password in body");
    
        console.log("connect to login route");
        const sql = `SELECT * FROM cats.owners WHERE name = '${name}';`;
        con.query(sql, (err, result) => {
          try {
            if (err) throw err;
            console.log("1 record inserted");
            if (result.length > 0) {
              const passwordDB = result[0].password;
              if (password === passwordDB) {
                res.send({ login: true, userId: result[0].id });
              } else {
                res.send({ error: "no user with such name or password" });
              }
            } else {
              res.send({ error: "no user with such name or password" });
            }
          } catch (err) {
            console.log(err.message);
            res.send({ error: err.message });
          }
        });
      } catch (error) {
        console.log(`In post-registe error: ${error.message}`);
        res.status(500).send({ error: error.message });
      }
}