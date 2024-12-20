import { ExpoResponse, ExpoRequest } from 'expo-router/server';

export async function POST(request: Request): Promise<Response> {
    const { email, password } = await request.json()

    if (email === "luizz.paulo@gmail.com" && password === "1234") {
        return Response.json({
            email,
            name: "Luiz Paulo",

        })
    }

    return new Response("Usuário e/ou senha incorreta!", {
        status: 404,
        headers: {
            "Content-Type": "text/plain",
        },
    })


}