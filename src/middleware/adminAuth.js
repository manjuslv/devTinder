const adminAuth = (req,res,next) => {
const auth = "xyz";
if(auth == 'xyzd') {
    next()
} else {
    res.status(401).send("auth failed ")
}
}

module.exports = {
    adminAuth
}