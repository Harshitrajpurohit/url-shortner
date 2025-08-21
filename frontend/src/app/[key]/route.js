import { redirect } from "next/navigation";

export async function GET(request, { params }) {
  const { key } = await params;

  console.log("short key from URL:", key);  

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${key}/`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return Response.redirect(data.main_url, 302);

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
