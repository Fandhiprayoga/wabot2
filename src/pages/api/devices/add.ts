import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {

    const formData = await request.formData();
    const nomor = formData.get("nomor")?.toString();
    const deskripsi = formData.get("deskripsi")?.toString();
    const client = formData.get("client")?.toString();

    const resp = await supabase
    .from("wabot-devices")
    .insert({ nomor, deskripsi, client});

    if (resp.status != 201) {
        return new Response(null, {
            status: 500,
            statusText: JSON.stringify(Error)
          });
    } else {
        return new Response(JSON.stringify(resp));
    }
};