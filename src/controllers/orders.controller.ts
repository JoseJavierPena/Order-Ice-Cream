import { Request, Response } from "express";
import { connect } from "../database";
import { Orders } from "../interface/Orders.interface";

// Function to find the orders.
export async function findOrder(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const order = await connt.query('SELECT * FROM Orders');
    return res.json(order[0]);
}

// Function to create orders.
export async function createOrders(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const newOrders: Orders = req.body;
    await connt.query('INSERT INTO Orders SET ? ', [newOrders]);
    return res.json({
        message: 'Orders created'
    });
}

// Function to delete orders.
export async function deleteOrders(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const deleteOrders: Orders = req.body;
    await connt.query('DELETE FROM Orders WHERE IdOrders = ? ', [deleteOrders]);
    return res.json({
        message: 'Order deleted'
    });
}

// Function to update the orders.
export async function updateOrders(req: Request, res: Response): Promise<Response> {

    const connt = await connect();
    const updateOrders: Orders = req.body;
    await connt.query('UPDATE Orders SET ? WHERE IdOrders = ? ', [updateOrders, updateOrders.IdOrders]);
    return res.json({
        message: 'Orders were updated'
    });
}