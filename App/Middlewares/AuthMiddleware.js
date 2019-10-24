const jwt = require('json-web-token');

class AuthMiddleware{
    constructor(){

    }
    /*
    auth function
    middleware check authentication of user
    param req, res, next
    */
    auth({req, res, next }){
        const { headers } = req;
        const token = headers.authorization;

        // console.log(process.env);
        // Check token is exist.
        if(!token){
            return next({
                message: 'UnAuthorization',
                data: null
            });
        }

        const dataToken = jwt.decode(Env.APP_KEY, token);

        if(!dataToken.value){
            return next({
                message: 'UnAuthorization2',
                data: null
            });
        }

        req.user = dataToken.value;
        next();
    }

    noAuth(){
        //TODO something not require login
    }
}

module.exports = new AuthMiddleware();