import {z} from 'zod'

export const createFileSchema = z.object({
    name: z.string({
        required_error: "title is required"
    }),
    path: z.string({
        required_error: 'path required'
    })
})