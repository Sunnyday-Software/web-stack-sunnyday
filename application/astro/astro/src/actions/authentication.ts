import {ActionError, defineAction} from "astro:actions";
import {z} from "astro:schema";

export const authentication = {
    registration: defineAction({
        accept: "form",
        input: z.object({
            username: z.string().min(3),
            email: z.string().email(),
            password: z.string().min(6),
            confirmPassword: z.string().min(6),
            acceptTermsAndConditions: z.boolean(),
        }).superRefine(({password, confirmPassword}, ctx) => {
            if (confirmPassword !== password) {
                ctx.addIssue({
                    code: "custom",
                    message: "The confirmation password did not match",
                    path: ['confirmPassword']
                })
            }
        }),
        handler: async (input) => {
            console.log(`User with ${input.email} and ${input.username} wants to register`);
        }
    }),
    loginWithCredentials: defineAction({
        accept: "form",
        input: z.object({
            email: z.string().email().min(3),
            password: z.string().min(6),
        }),
        handler: async (input) => {
            console.log(`User with ${input.email} and ${input.password} wants to login`);
            
            
            throw new ActionError({
                code: "UNPROCESSABLE_CONTENT",
                message: 'You must enter a valid email address to continue',
            })
        }
    })
}