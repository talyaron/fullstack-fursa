// import other routes
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });
    app.get('get-user',(req,res)=>{
        res.send({Name:'Elias from sarver'});
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;