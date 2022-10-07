const UserServices =  require('../services/userService')

const User = new UserServices()

module.exports.createUser = async (req, res) => {
    try{
        const user = await User.createUser(req.body)

        if(user){
            res.status(201).json({
                "success" : true,
                user
            })
        }
    }
    catch(e){
        res.status(500).json({
            "success" : false,
            "message" : e.message
        })
    }

}