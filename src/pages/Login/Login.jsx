import { useState } from "react";
import bgImage from "../../assets/background_banner.jpg";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import netflixSpinner from "../../assets/netflix_spinner.gif"
function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading,setLoading]=useState(false)



  const userAuth=async(event)=>{
    event.preventDefault()
    setLoading(true)
    if(signState==="Sign In"){
        await login(email,password)
    }else{
        await signup(name,email,password)
    }
    setLoading(false)
  }

  return (
    loading?<div className="w-full h-[100vh] flex items-center justify-center">
        <img className="w-[100px]" src={netflixSpinner} alt="" />
    </div>:
    <div id="login" className={`h-[100vh] px-3 sm:px-20`}>
      <img className="w-[150px] mb-5" src={logo} alt="" />
      <div className="w-full sm:max-w-[450px] bg-thinBlack rounded p-[20px] sm:p-[60px] mx-auto">
        <h1 className="text-2xl font-semibold mb-8">{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                ;
              }}
              className="w-full h-[50px] bg-inputBackground text-white my-[12px] border-none outline-none rounded py-[16px] px-[20px]"
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[50px] bg-inputBackground text-white my-[12px] border-none outline-none rounded py-[16px] px-[20px]"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full h-[50px] bg-inputBackground text-white my-[12px] border-none outline-none rounded py-[16px] px-[20px]"
            type="password"
            placeholder="Password"
          />
          <button
          onClick={userAuth}
          type="submit"
          className="w-full border-none outline-none p-[16px] bg-btnbgColor rounded mt-[20px] cursor-pointer">
            {signState}
          </button>
          <div className="flex items-center justify-between text-whitish text-[13px] mt-2">
            <div className="flex items-center gap-[5px]">
              <input className="w-[18px] h-[18px]" type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="mt-[40px] text-lastSignUpColor">
          {signState === "Sign In" ? (
            <p>
              New to Netflix ?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
                className="ml-[6px] text-white cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account ?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
                className="ml-[6px] text-white cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
