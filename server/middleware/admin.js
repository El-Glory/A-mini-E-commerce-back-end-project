let admin = (req,res,next)=>{
  if (req.user.role === 0) {
     return res.send('You cannot be here');
  }
  next()
}

module.exports = { admin }