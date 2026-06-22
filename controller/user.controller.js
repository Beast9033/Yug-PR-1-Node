import { validationResult } from 'express-validator'
import User from '../models/userModel.js'

export const getAllUser = async (req, res) => {
    try {
        const search = req.query.search || ''
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const skip = (page - 1) * limit
        const total = await User.countDocuments()

        const data = await User.find({
            name: {
                $regex: search,
                $options: 'i'
            }
        })
            .skip(skip)
            .limit(limit)
            .sort({ name: 1 })

        return res.status(200).json({ success: true, message: 'All user data', data, skip, total, limit })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await User.findById(id)

        if (!data) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        return res.status(200).json({ success: true, message: 'user data', data })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await User.findByIdAndDelete(id)

        if (!data) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        return res.status(200).json({ success: true, message: 'user data deleted', userId: data.id })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await User.findByIdAndUpdate(id, req.body, { new: true })

        if (!data) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        return res.status(200).json({ success: true, message: 'user data updated', data })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
};

export const registerUser = async (req, res) => {
    try {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json(error.array())
        }

        const { name, email, password, confirmPassword } = req.body

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ success: false, message: 'Enter all details' })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: 'Password and confirm password do not match' })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ success: false, message: 'User already exists' })
        }

        const user = await User.create({
            name: name,
            email: email,
            password: password
        });
        return res.status(201).json({ success: true, message: 'User registered successfully', user })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json(error.array())
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email, password })

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' })
        }

        return res.status(200).json({ success: true, message: 'Login successful.' })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
