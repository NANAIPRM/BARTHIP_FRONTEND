import {useState} from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {login, getMe} from '../../../api/bartripApi'

export default function Login() {
  const {setUser} = useAuth()

  const [input, setInput] = useState({
    username : '',
    password : '',
  })

  const hdlChangeInput = e => {
    setInput({...input, [e.target.name] : e.target.value}) 
  }

  const hdlSubmit = e => {
    e.preventDefault()
    // validation
 
    login(input)
    .then( rs => {
      // console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      let token = localStorage.getItem('token')
      return getMe(token)
    }).then( rs => {
      console.log(rs.data)
      setUser(rs.data)
    }).catch(err => alert(err.response.data.error || err.message))
  }

  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto  border-4 p-10 mt-16 border-color-2 rounded-2xl" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4  text-center text-gray-700 font-bold text-">Login Form</h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-user text-white min-w-16 text-center p-2.5 bg-color-4 rounded-full mr-[-11px]" />
          <input
                               className="  border-bg-color-2 w-full p-2.5 border  text-xl rounded-xl border-none focus:border-gray-500 focus:outline-none placeholder:tracking-wider tracking-wider"
            type="text"
            placeholder="Username"
            name="username"
            onChange={hdlChangeInput}
            value={input.username}
          />
        </div>

        <div className="flex w-full mb-4">
        <i className="fa fa-user text-white min-w-16 text-center p-2.5 bg-color-4 rounded-full mr-[-11px]" />

          <input
                                          className="  border-bg-color-2 w-full p-2.5 border  text-xl rounded-xl border-none focus:border-gray-500 focus:outline-none placeholder:tracking-wider tracking-wider"

            type="password"
            placeholder="Password"
            name="password"
            onChange={hdlChangeInput}
            value={input.password}
          />
        </div>

        <button type="submit" 
 className="btn btn-circle px-5 mt-3 py-3 w-full bg-color-2 border-color-2 border text-gray-700 font-bold text-[18pt] text-center rounded-xl hover:bg-color-3 active:scale-95 transition duration-75'"
        >
          Login
        </button>
        {/* <div className=" h-50 w-50  ">
          <div className=" bg-[url('/src/assets/eye.png')] h-fit w-fit flex bg-cover bg-center">
            
            <div className="flex-1 h-fit w-fit animate-spin">
              <img src="src/assets/reacticon.png" alt="" className="scale-50" />
            </div>
          </div>
        </div> */}
      </form>
      
    </div>
  );
}