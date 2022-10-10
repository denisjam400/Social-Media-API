const PostModel = require('../models/post.model')

class PostService {
    createPost(postDetails){
        return new Promise(async (resolve, reject) => {
            try{
                const post = await PostModel.create(postDetails)
                if(!post){
                    return reject({code: 401, msg: 'post not created' })
                }
                return resolve(post)
            }
            catch(err){
                return reject(err)
            }
        })
    }

    getPost(postid){
        return new Promise(async (resolve, reject) => {
            try{
                const post = await PostModel.findById(postid)
                if(!post){
                    return reject({code: 404, msg: 'post not found' })
                }
                return resolve(post)
            }
            catch(err){
                return reject(err)
            }
        })
    }

    getAllPosts(){
        return new Promise(async (resolve, reject) => {
            try{
                const post = await PostModel.find()

                return resolve(post)
            }
            catch(err){
                return reject(err)
            }
        })
    }


    getUserPosts(userid){
        return new Promise(async (resolve, reject) => {
            try{
                const post = await PostModel.find({user: userid})

                return resolve(post)
            }
            catch(err){
                return reject(err)
            }
        })
    }

    updatepost(postid, body){
        return new Promise(async (resolve, reject) => {
            try{
                let post = await PostModel.findById(postid)
                if(!post){
                    return reject({code: 404, msg: 'post not found' })
                }
                let newpost = await PostModel.findByIdAndUpdate(postid, body, {
                        new: true,
                        runValidators: true
                    })
                if(!newpost){
                    return reject({code: 401, msg: 'Cannot create post'})
                }
                resolve(newpost)
            }
            catch(err){
                reject(err)
            }
        })
    }

    deletePost(postid){
        return new Promise(async (resolve, reject) => {
            try{
                let post = await PostModel.findById(postid)
                if(!post){
                    return reject({code: 404, msg: 'post not found' })
                }
                let newpost = await PostModel.findByIdAndDelete(postid)
                if(!newpost){
                    return reject({code: 401, msg: 'Cannot delete post'})
                }
                resolve()
            }
            catch(err){
                reject(err)
            }
        })
    }
}

module.exports = PostService