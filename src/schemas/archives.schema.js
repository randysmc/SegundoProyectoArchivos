import {z} from 'zod'

export const createArchiveSchema = z.object({
    title: z.string({
        required_error: 'title is required',
    }),
    extension: z.string({
        required_error: 'extension is required'
    }),
    description: z.string({
        required_error: 'description is required'
    }),
    date: z.string().datetime().optional()
})