import Joi from "joi";
import { Request, Response, NextFunction } from "express"

const courseDataValidator = (req: Request, res: Response, next: NextFunction) => {
    
    const combinedData = {
        ...req.body,
        ...req.file,
    }

    const courseSchema = Joi.object({
        courseName: Joi.string()
            .min(3)
            .max(30)
            .required(),
    })

    const { value, error } = courseSchema.validate(req.body)

    if (error) {
        
        const { path, message } = error.details[0]
        return res.status(400).json({
            error: {
                path: path[0],
                message
            },
            req: req.body,
        });
    }

    next();
}

export default courseDataValidator;
