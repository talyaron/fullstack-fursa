// import other routes
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });



    let projects = [{name:'Android App',textmuted:'UX of new mobile App',daysleft:1,
    participant:[{name:"saleem",img:'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 '},
    {name:'nadya',img:'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}]},
    {name:'DataBase',textmuted:'UX of new mobile App',daysleft:5,
    participant:[{name:"saleem",img:'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {name:'nadya',img:'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}]},
    {name:'UI and UX',textmuted:'UX of new mobile App',daysleft:6,
    participant:[{name:"saleem",img:'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}],
    },
    {name:'Finishing',textmuted:'UX of new mobile App',daysleft:12,
    participant:[{name:"saleem",img:'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 '},
    {name:'nadya',img:'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}],
    },
    ]


    app.get('/projects', (req, res) => {
        console.log("arrived")
        res.send(projects);
    });
    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;