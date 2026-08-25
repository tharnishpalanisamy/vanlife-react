import { useLoaderData } from "react-router-dom"

export default function Login(){ 
    let data = useLoaderData() 
    console.log(data)
    return(
        <>
            <h1>This is a login page</h1> 
            {data && <h2>{data}</h2> }
         </>
    )
}

export async function loader({request}){
    return new URL(request.url).searchParams.get('message')    
}