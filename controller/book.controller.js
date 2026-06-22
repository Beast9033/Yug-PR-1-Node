import { validationResult } from 'express-validator'
import Book from '../models/bookModel.js'

export const getAllBook = async (req, res) => {
    try {
        const search = req.query.search || ''
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const skip = (page - 1) * limit
        const total = await Book.countDocuments()

        const data = await Book.find({
            title: {
                $regex: search,
                $options: 'i'
            }
        })
            .skip(skip)
            .limit(limit)
            .sort({ title: 1 })

        return res.status(200).json(
            {
                success: true,
                message: 'All book data',
                data, skip, total, limit
            })

    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                message: error.message
            })
    }
};

export const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Book.findById(id)

        if (!data) {
            return res.status(404).json(
                {
                    success: false,
                    message: 'Book not found'
                })
        }

        return res.status(200).json(
            {
                success: true,
                message: 'book data', data
            })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: error.message
            })
    }
};

export const createBook = async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json(error.array())
        }

        const data = await Book.create(req.body);
        return res.status(201).json(
            {
                success: true,
                message: 'book created successfully', data
            })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: error.message
            })
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Book.findByIdAndDelete(id)

        if (!data) {
            return res.status(404).json({ success: false, message: 'Book not found' })
        }

        return res.status(200).json({ success: true, message: 'book data deleted', bookId: data.id })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Book.findByIdAndUpdate(id, req.body, { new: true })

        if (!data) {
            return res.status(404).json({ success: false, message: 'Book not found' })
        }

        return res.status(200).json({ success: true, message: 'book data updated', data })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
};
