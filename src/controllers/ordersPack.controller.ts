import { Request, Response } from "express";
import { connect } from "../database";
import { OrdersPack } from "../interface/OrdersPack.interface";
import { Orders } from "../interface/Orders.interface";

// Function to find the orders pack.
export async function findOrdersPack(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const findOrdersPack = await connt.query('SELECT * FROM OrdersPack');
    return res.json(findOrdersPack[0]);
}

// Function to delete the orders pack.
export async function deleteOrdersPack(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const deleteOrdersPack: OrdersPack = req.body;
    await connt.query('DELETE FROM OrdersPack WHERE IdOrdersPack = ? ', [deleteOrdersPack.IdOrdersPack]);
    return res.json({
        messge: 'Orders pack was deleted'
    });
}

// Function to create the orders pack.
export async function createOrdersPack(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const createOrdersPack: OrdersPack = req.body;
    await connt.query('INSERT INTO OrdersPack SET ? ', [createOrdersPack]);
    return res.json({
        message: 'Orders pack created'
    });
}

// Function to update the orders pack.
export async function updateOrdersPack(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const updateOrdersPack: OrdersPack = req.body;
    const getDate = new Date();
    const getResult = await connt.query('UPDATE OrdersPack SET ? WHERE IdOrdersPack = ? AND ExpirationDate = ?', [updateOrdersPack, updateOrdersPack.IdOrdersPack, updateOrdersPack.ExpirationDate]);
    return res.json({
        message: 'Orders pack has been updated'
    });
}