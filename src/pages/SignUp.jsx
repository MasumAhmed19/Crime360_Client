import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";

const SignUP = () => {
  const { user, setUser, signInWithGoogle, createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then((res)=>{
        navigate('/');
        setUser(res.user);
        // TOAST: successfull login 
    }).catch((err)=>{
        // TOAST: Login failed 
        console.log(err);
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const profileURL = form.profileURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
        .then((res)=>{
            // const curUser = res.user;
            updateUserProfile({displayName:name, photoURL:profileURL})
            .then(()=>{
                // console.log("user profile updated")
                navigate('/');
            }).catch(err=>{
                console.log(err);
            })

        }).catch(err=>{
            console.log(err)
        })

    // console.log(email, password);
  };

  return (
    <div className="mt-10 min-h-[90vh] flex flex-col justify-center items-center bg-black p-4">
      

      {/* Login Container */}
      <div className="w-full max-w-md bg-white rounded-md shadow-lg p-8">
        <h4 className="text-center text-xl font-semibold mb-2">Welcome back to Crime360</h4>
        <h5 className="text-center text-[#8b8c8f] mb-6">
          Have an account?{" "}
          <Link to="/login" className="text-red-500">
            Log In
          </Link>
        </h5>

        {/* Google Login */}
        <div
          className="flex items-center justify-center border px-4 py-3 rounded-md mb-6 cursor-pointer hover:bg-gray-100 transition-all"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="mr-2" />
          <span>Log in with Google</span>
        </div>

        {/* Email Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h5 className="text-center text-sm">or SIgn up with email:</h5>
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              name="profileURL"
              placeholder="Profile photo (direct link)"
              className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <button
            type="submit"
            className="g6 text-white font-bold uppercase rounded-lg w-full py-2  transition-all"
          >
            Sign Up
          </button>
        </form>


      </div>
    </div>
  );
};

export default SignUP;
