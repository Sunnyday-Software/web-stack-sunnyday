import type {APIRoute} from "astro";
import { z } from 'astro:schema';
import {formDataToObject} from "astro:actions";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    
    const requestBodyObj = formDataToObject(data, z.object({email: z.string().email()}));
    
    if (!email){
        return new Response(
            JSON.stringify({
                error: "You must enter a valid email address",
            }),
            {
                status: 404,
            }
        );
    }
    
    return new Response(
        JSON.stringify({
            message: `You're successfully subscribed with email ${email} ${requestBodyObj.email}`,
        }),
        { status: 200}
    )
    
}

