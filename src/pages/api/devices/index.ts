import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ request, redirect }) => {

    const { data, error } = await supabase.from("wabot-devices").select("*");
    console.log(data)
    if (error) {
        // return res.status(500).json({ error: error.message });
        return new Response(null, {
            status: 500,
            statusText: JSON.stringify(Error)
          });
    }
  
    return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'success'
      });
};