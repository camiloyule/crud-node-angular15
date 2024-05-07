import express from 'express';
import * as itemController from '../controllers/itemController';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - name
 *         - desc
 *         - qty
 *         - price
 *         - spec
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the item
 *         name:
 *           type: string
 *           description: The item name
 *         desc:
 *           type: string
 *           description: The item description
 *         qty:
 *           type: number
 *           description: The item qty available
 *       example:
 *         name: heavy line
 *         desc: for heavy duty work
 *         qty: 10
 *         price: 100
 *         spec: heavy line

 */

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: The items managing API
 */

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: The item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 */
router.post('/', itemController.createItem);

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get all items
 *     tags: [items]
 *     responses:
 *       200:
 *         description: The list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/item'
 *       500:
 *         description: Some server error
 */
router.get('/', itemController.getAllItems);

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Get a item by ID
 *     tags: [items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/item'
 *       404:
 *         description: item not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', itemController.getItemById);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update a item
 *     tags: [items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/item'
 *     responses:
 *       200:
 *         description: The updated item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/item'
 *       404:
 *         description: item not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', itemController.updateItem);

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Delete a item
 *     tags: [items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: item deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: item not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', itemController.deleteItem);

export default router;
