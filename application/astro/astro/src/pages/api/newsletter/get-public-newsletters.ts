import type {APIRoute} from "astro";
import { z } from 'astro:schema';
import {formDataToObject} from "astro:actions";

export const GET: APIRoute = async ({ request }) => {
    
    const headers = request.headers;
    const contentType = headers.get("Content-Type");
    
    if (contentType !== "application/json") {
        return new Response(
            JSON.stringify({
                error: "The request accept only application/json Content-Type. Set it in your header request",
            }),
            {
                status: 400,
                statusText: "BAD_REQUEST"
            }
        );
    }
    
    return new Response(
        JSON.stringify({
            newsletters: [] as {}[]
        }),
        { status: 200}
    )
    
}

