import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../scss/Home.scss"

const styled = {
    signup : {
        marginTop: "200px",
    

    },

    input:{
        width: "25%",
        height: "40px",
        borderRadius: "5px",
        
    },
    label:{
        marginRight: "300px",
        
    
    },

    button:{
        backgroundColor: "#0056D2",
        width: "25%",
        height: "30px",
        marginLeft: "0",
        borderRadius: "5px",
        marginTop: "10px"
    }

}

const Login = ({setUser}) => {
//   var  email;
//   var password;

    const [userInfo,setUserInfo] = useState([]);
    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");
    const [error,setError] = useState("");
    const url = "http://localhost:3000/users";

    const navigate = useNavigate();

    const fetchUser = async ()=>{
        const response = await fetch(url);
        const userInfo = await response.json();
        console.log(userInfo);
        setUserInfo(userInfo);
    }
    useEffect(()=>{
        fetchUser()
    },[])

    

    // const [email] = getUserInfo;

//console.log(email)
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const getUserInfo = userInfo.find((info)=>{
            return info.email ===userEmail && info.password ===userPassword 
            
            
        });
        

        if(getUserInfo){
            setUser({email:userEmail,password:userPassword})
            navigate("/dashboard")
        }else{
            console.log("error")
        }
    }
  return (
    <div>
        <section style={styled.signup} className='signup'>
                <h1>LogIn</h1>
                <p>Learn on your own time on protekh</p>
                
            
                    

                        
                            <form  className='signup_banner'onSubmit={handleSubmit} >
                                <label style={styled.label} name="email">EMAIL</label>
                                <p><input style={styled.input} name="email" type="email" placeholder="example@email.com" required value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}></input></p>
                                <label style={styled.label} name="email">PASSWORD</label>
                                <p><input style={styled.input} name="" type="password" placeholder="input password" required value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}></input></p>
                                <button style={styled.button} type='submit'> LogIn</button>
                            </form>
                        
                
                
                <div>
                    
                    <div className='signup_footer'>
                        <p>Already on protekh?</p>
                        <Link to=''>Log In</Link>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Login