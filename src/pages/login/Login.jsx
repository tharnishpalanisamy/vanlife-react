import {
    useLoaderData,
    useNavigate,
    Form,
    useActionData,
    useNavigation
} from "react-router-dom"

import { loginUser } from "../../api"
import { useEffect } from "react"

export default function Login() {

    const data = useLoaderData()
    const actionData = useActionData() 
    const navigate = useNavigate()
    const navigation = useNavigation()

    const isSubmitting = navigation.state === "submitting"

    useEffect(() => {

        if (actionData?.success) {
            navigate("/host")
        }

    }, [actionData, navigate])


    return (
        <>
            <h1>This is a login page</h1>

            {data && <h2>{data}</h2>}

            {actionData?.error && (
                <h3>{actionData.error}</h3>
            )}

            <Form method="post">

                <input
                    type="text"
                    name="email"
                    placeholder="Enter Your email"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "logging in..."
                        : "login"
                    }
                </button>

            </Form>
        </>
    )
}


export async function loader({ request }) {

    return new URL(request.url)
        .searchParams
        .get("message")
}


export async function action({ request }) {

    const formData = await request.formData()

    const email = formData.get("email")
    const password = formData.get("password")

    console.log("EMAIL:", email)
    console.log("PASSWORD:", password)

    try {

        const res = await loginUser({
            email: "b@b.com",
            password: "p123"
        })

        console.log("🔥 LOGIN RESPONSE:", res)

        localStorage.setItem(
            "token",
            res.token
        )

        console.log(
            "🔥 TOKEN:",
            localStorage.getItem("token")
        )

        return {
            success: true
        }

    } catch (error) {

        console.error(
            "🔥 LOGIN ERROR:",
            error
        )

        return {
            error: "Login failed"
        }
    }
}