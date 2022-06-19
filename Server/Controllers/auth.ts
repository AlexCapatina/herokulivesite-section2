import express from 'express';

//import passport function
import passport from 'passport';
//include User model for authentication functions
import User from '../Models/user';

//Display functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
   res.render('index', {title: 'Login', page: 'login', message: req.flash('loginMessage'), displayName:''});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: 'register', page: 'register', message: req.flash('registerMessage'), displayName:''});
}

//Process Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    passport.authenticate('local', function(err, user, info)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }
        req.logIn(user, function(err)
        {
            if(err)
            {
                console.error(err);
                res.end(err);
            }

            return res.redirect('/movie-list');
        });
    })(req, res, next);
}
 
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let newUser = new User
    ({
        username:req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, function(err)
    {
        if(err)
        {
            if(err.name == "UserExistsError")
            {
                console.error('ERROR: User already exists');
                req.flash('registerMessage', "Registration Error!");
            }
            else
            {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error');
            }
            return res.redirect('/register');
        }

        //if everything checks out, automatically login the user
        return passport.authenticate('local')(req, res, function()
        {
            return res.redirect('/movie-list');
        })
    })
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    req.logOut();

    res.redirect ('/login');
}