const UserModel = require('../Models/UserModel');
const TokenModel = require('../Models/TokenModel');

const bcrypt = require('bcrypt');

const jwt = require('json-web-token');

class AuthService {
    constructor(){
        this.userModel = UserModel;
        this.tokenModel = TokenModel;
    }
    //hash password
    hash_password(password){
        const saltRounds = parseInt(Env.SALT);

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    };

    //compare password
    compare_password(password, hash){
        return bcrypt.compareSync(password, hash);
    };
    async register(body){
        try {

            //step2
            if( !body.username || !body.password ){
                return {
                    message: 'username_or_password_is_require',
                    data: null
                }
            }
            //step3
            const user = await this.userModel.query()
            .where('username', body.username)
            .first();

            //step4
            if(user){
                return {
                    message: 'user_is_exist',
                    data: null
                }
            }

            //step5
            //do later
            const password_hash = this.hash_password(body.password);

            const dataInsert = {
                username: body.username,
                password: password_hash,
                name: body.username
            };

            const userInserted = await this.userModel.query().insert(dataInsert);

            let token = jwt.encode(Env.APP_KEY, {
                id: userInserted.id,
                timestamp: new Date().getTime()
            });

            const dataTokenInsert = {
                userId: userInserted.id,
                token: token.value,
                status: 1
            };

            await this.tokenModel.query().insert(dataTokenInsert);

            return {
                message: 'register_success',
                data: token.value
            };
        } catch (error) {
            
        }
    }
}

module.exports = new AuthService();