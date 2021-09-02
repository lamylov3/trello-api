import Joi from 'joi';
import { httpStatusCode } from '*/utillities/constants';

const createNew = async (req, res, next) => {
    const condition = Joi.object({
        title: Joi.string()
            .min(3)
            .max(30)
            .required()
    });
    next();
    try {
        await condition.validateAsync(req.body, { abortEarly: true })
    } catch (error) {
        res.status(httpStatusCode.BAD_REQUEST).json({
            message: new Error(error).message
        });
    }
}

export const boardValidation = { createNew };