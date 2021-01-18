
import { User } from './User-db';
import { Request , Response } from 'express';

let users: User[] = [];

export function checkUser(req: Request, res: Response ){
    let userdata = req.body
    let use_req = users.filter(user => user.username === userdata.username)
    console.log(use_req)
}

export function addUser(req: Request, res: Response) {
    let userdata = req.body
    let newuser: User
    newuser = userdata
    this.users.push(newuser)
}