const Login = () => {
  return (
    <div className="flex justify-center ">
      <div className="min-w-[500px] px-10 py-16 rounded-l-3xl bg-white border border-gray-200 my-10 ml-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-center">Welcome Back</h1>
        <p className="font-medium text-base text-gray-500 mt-4 text-center">
          Welcome back! Please enter your details.
        </p>
        <div className="mt-16">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Email</label>
            <input
              className="text-base w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium">Password</label>
            <input
              className="text-base w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your password"
              type={"password"}
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-sm" htmlFor="remember">
                Remember for 30 days
              </label>
            </div>
            <button className="font-medium text-sm text-blue-500">
              Forgot password
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-500 rounded-xl text-white font-bold text-sm">
              Sign in
            </button>
            <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-sm border-2 border-gray-100 ">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths */}
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[500px] rounded-3xl my-10 ml-[-5px] h-[651px] relative">
        <span className="absolute text-black text-2xl font-medium right-6 top-5  hidden lg:block">
          Inventerio
        </span>
        <img
          className="max-w-[500px] hidden lg:block bg-cover bg-no-repeat  border-r border-y rounded-r-3xl h-full w-full object-cover shadow-sm"
          src="src\assets\warehouse.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
