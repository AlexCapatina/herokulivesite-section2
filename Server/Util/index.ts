import express from 'express';

//Convenience function to return DisplayName of User
export function UserDisplayName(req: express.Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument
        return user.DisplayName.toString()
    }
    return '';
}

//Helper function for guarding secure locations
export function AuthGuard(req: express.Request, res:express.Response, next:express.NextFunction): void
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}