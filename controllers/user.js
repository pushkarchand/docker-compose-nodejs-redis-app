const userDBA=require('../knex').User;
const client=require('../cache/redisCache');
const uuidv1 = require('uuid/v1');

exports.getUserDetails=(req,res)=>{
    const userId=req.params.userId;
    client.get(userId, (err, user) => {
        if(!err){
            if (user !== null) {
                res.send(JSON.parse(user));
            }
        }else {
            return userDBA.findOne({"Id":userId})
            .then(userDBAResponse=>{
                console.log(userDBAResponse);
                res.send(userDBAResponse);
            })
        }
    });
}


exports.createUser=(req,res)=>{
    const user=req.body;
    user.Id=uuidv1();
    return userDBA.create(user)
        .then(userDBAResponse=>{
            if(userDBAResponse.length>=1){
                const response=JSON.stringify(user);
                client.setex(user.Id,3600, response);
            }
            console.log(userDBAResponse);
            res.send(userDBAResponse);
        })
        .catch(error=>{
            res.send(error);
        })
}

exports.enumerateUsers=(req,res)=>{
    return userDBA.find({})
        .then(userDBAResponse=>{
            console.log(userDBAResponse);
            res.send(userDBAResponse);
        })
}

exports.removeUser=(req,res)=>{
    const userId=req.query.id;
    return userDBA.remove({"Id":userId})
        .then(userDBAResponse=>{
            console.log(userDBAResponse);
            res.send(userDBAResponse);
        })
}