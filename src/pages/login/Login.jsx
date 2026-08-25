import { useLoaderData } from "react-router-dom"
import { loginUser } from "../../api"
import { useState  } from "react"
export default function Login(){  

    const [status , setStatus] = useState('idle') 
    const [error , setError] = useState(null) 


    let data = useLoaderData() 
    console.log(data) 

    function handleSubmit(e) { 
        e.preventDefault()   
        setError(null)
        setStatus('submitting')
        console.log('working daaa'); 
        let data = new FormData(e.currentTarget) 
        loginUser({email:'b@b.com' , password : 'p123'}) 
        .then(res => {
            if(res.ok) {
                console.log('hi');
                
            }
        }
        ).catch(error => setError(error)) 
        .finally(()=> setStatus('idle'))
        
    }
    return(
        <>
            <h1>This is a login page</h1> 
            {data && <h2>{data}</h2> } 
            {error && <h3>{error.message}</h3>}

            <form action="" onSubmit={handleSubmit}>  
                <input type="text" name="name" id="name"  placeholder="Enter Your Name"/> 
                <input type="password" name="password" id="password"  placeholder="Enter Your Password"/> 
                <button type="submit" disabled={status === "submitting"}>{status == 'submitting' ? 'logging in' : 'login'}</button> 
            </form>
         </>
    )
}

export async function loader({request}){
    return new URL(request.url).searchParams.get('message')    
}