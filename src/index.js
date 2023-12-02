const express = require('express');
const bodyParser = require('body-parser');
const { rateLimit } = require('express-rate-limit')
const apiRoutes = require('./routes/index');
const { PORT } = require('./config/serverConfig');
const app = express();


const prepareAndStartServer = () => {
    const limiter = rateLimit({
        windowMs: 2 * 60 * 1000, // 2 minutes
        max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(limiter);
    app.use('/api', apiRoutes);
    app.post("/home",(req,res) => {
        res.status(201).json({
            data : "hello"
        });
    })

    app.listen(PORT, async () => {
       console.log(`server started on Port: ${PORT}`);
    //    if(process.env.DB_SYNC){
    //     db.sequelize.sync({alter:true});
    //    }
    });
}

prepareAndStartServer();