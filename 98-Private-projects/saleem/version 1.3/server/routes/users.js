
const userRoutes = (app, fs) => {

    // variables
    const dataPath = './data/users.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    //user validation
    app.get('/users/', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            const userId = req.query;
            if (typeof(userId["email"]) === 'undefined' && typeof(userId["passsword"]) === 'undefined' )
            {
            res.status(200).send('missing params');
            }
            else
            {
 
               
            if(JSON.parse(data)[userId["email"]] == '' || JSON.parse(data)[userId["email"]].password !== userId["password"])
            res.status(401).send('wrong credentials');
            else
            res.send(JSON.parse(data)[userId["email"]]);
            }
            
            
            
        });
    });
      //user validation
      app.get('/lama', (req, res) => {
        res.send("Hi,lama");
    });
  
  

    // CREATE
    app.post('/users', (req, res) => {

        readFile(data => {
            // Note: this isn't ideal for production use. 
            // ideally, use something like a UUID or other GUID for a unique ID value
            const newUserId = Date.now().toString();

            // add the new user
            data[newUserId.toString()] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new user added');
            });
        },
            true);
    });


    // UPDATE
    app.put('/users/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const userId = req.params["id"];
            data[userId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/users/:id', (req, res) => {

        readFile(data => {

            // delete the user
            const userId = req.params["id"];
            delete data[userId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} removed`);
            });
        },
            true);
    });
};


module.exports = userRoutes;
