const jwt  = require('jsonwebtoken')



const verifyUser = async (req,res,next) => {
    const token = req.headers['auth'].split(' ')[1]
    jwt.verify(token,'this#isseckj83u09qjer',(err,decoded) => {
        if(err){
            return res.status(503).json({
                message: 'not authenticated',
                err: err.message
            })
        } else {
            req.user = decoded
            next();
        }
    })
}

module.exports = verifyUser