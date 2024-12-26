const User = require("../models/user");

// get route for home page 
module.exports.renderHomePage = (req , res)=>{
    res.render("listings/index.ejs");
};

// get route callback
module.exports.renderSignupForm = (req , res)=>{
    res.render("users/signup.ejs");
};

// post route for signup callback 
module.exports.signup = async(req , res)=>{
    try{
        let{username , email , password} = req.body;
        const newUser = new User({email , username});
        const registeredUser = await User.register(newUser , password);
        console.log(registeredUser);
        req.login(registeredUser , (err)=>{
            if(err){
                return next(err);
            }
            req.flash("success" , "Welcome to Lodgify!");
            res.redirect("/listings");
        });
    } 
    catch(e){
        req.flash("error" , e.message);
        res.redirect("/signup");
    }
};

// get route for login callback 
module.exports.renderLoginForm = (req , res)=>{
    res.render("users/login.ejs");
};

// post route for login callback 
module.exports.login = async(req , res)=>{
    req.flash("success" , "welcome back to Lodgify");
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
};

// logout route callback 
module.exports.logout = (req , res, next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success" , "you are logged out!");
        res.redirect("/listings");
    });
};
