import express from 'express';

import Business from '../Models/business';

import { UserDisplayName } from '../Util';

export function DisplayBusinessContacts(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Business.find(function(err, businessCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Contacts', page: 'business', movies: businessCollection, displayName: UserDisplayName(req) });
    });
}