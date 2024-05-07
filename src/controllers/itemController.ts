import { Request, Response, NextFunction } from 'express';
import Item from '../models/itemModel';

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, desc, qty,price, spec } = req.body;
    const item = await Item.create({ name, desc, qty,price,spec, });
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name,desc, price, qty, spec } = req.body;
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    await item.update({ name, desc, price, qty, spec });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    await item.destroy();
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    next(err);
  }
};
