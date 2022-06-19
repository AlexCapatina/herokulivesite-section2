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
    
}
 
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function ProcessLofoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}