route.get('/admin', function(req, res, next) {
    if (!res.locals.user.isAdmin) {
      return res.sendStatus(401);
    }  
 
    // Desarrollar la lógica del Admin
    res.send('No admin');
 
  });


  // middleware para manejar las sesiones

  
 module.exports = function(req, res, next){
    if(!req.session.user_id){
        res.redirect("/login");
    }else{
        User.findById(req.session.user_id, function(err, user){
            if(err){
                console.log(err);
                res.redirect("/login");
            }else{
                res.locals = {user: user};
                next();
            }
        });
    }
}