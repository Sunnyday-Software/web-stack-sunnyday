import {defineAction, ActionError} from "astro:actions";
import {z} from "astro:schema";

export const newsletter = {
    subscribeToNewsletter: defineAction({
        accept: 'form',
        input: z.object({
            email: z.string().min(8, {message: "l'email deve essere almeno 8 caratteri"}).email({message: "Email is required"}),
        }),
        handler: async (input) => {
            console.log(`User with ${input.email} wants to subscribe to newsletter`);
            console.table(input);
            
            if (!input.email) {
                throw new ActionError({
                    code: "UNPROCESSABLE_CONTENT",
                    message: 'You must enter a valid email address to continue',
                })
            }
            
            return {
                message: `You're successfully subscribed with email ${input.email}`,
            }
        }
    })
};