module.exports = (req,res,next) => {
    if(req.decoded) {
        return ((req.decoded._doc.role == 1) || (req.decoded._doc.role == 2) || (req.decoded._doc.role == 3) || (req.decoded._doc.role == 5) ) ? next() : res.status(403).send('Forbidden');
    } else {
        return res.status(403).send('UnAuthorized');
    }
};