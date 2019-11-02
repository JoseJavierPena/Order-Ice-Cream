import { Request, Response } from 'express';
import { connect } from "../database";
import { User } from "../interface/User.interface";

// Function to create a new user in the database.
export async function createUser(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const newUser: User = req.body;
    await connt.query('INSER INTO User SET ? ', [newUser]);
    return res.json({
        message: 'User has been created'
    });
}

// Function to find the location of the user in the database
export async function findUser(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const user = await connt.query('SELECT * FROM User');
    return res.json(user[0]);
}

// Function to sign in.
export async function signIn(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const user: User = req.body;
    const getUandP = await connt.query('SELECT * FROM User WHERE UserName = ? AND Passwrd = ?', [user.UserName, user.Passwrd]);
    return res.json(getUandP[0]);
}