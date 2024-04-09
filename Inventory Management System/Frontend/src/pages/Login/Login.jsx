import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center">
      <div className="min-w-[500px] px-10 py-16 rounded-l-3xl bg-white border border-gray-200 my-10 ml-10 shadow-md">
        <h1 className="text-3xl font-semibold text-center">Welcome Back</h1>
        <p className="font-medium text-base text-gray-500 mt-4 text-center">
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-28">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                className="text-base w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your email address"
                id="email"
                type="email" // Added type="email" for better input handling
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm font-medium">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                className="text-base w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your password"
                type="password"
                id="password"
                name="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm font-medium">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label className="ml-2 font-medium text-sm" htmlFor="remember">
                  Remember for 30 days
                </label>
              </div>
              <button
                className="font-medium text-sm text-blue-500"
                type="button"
              >
                Forgot password
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-500 rounded-xl text-white font-bold text-sm"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="max-w-[500px] rounded-3xl my-10 ml-[-5px] h-[650px] relative shadow-md">
        <span className="absolute text-white text-3xl font-medium right-6 top-5 hidden lg:block z-10">
          Inventerio
        </span>
        <span className="absolute text-white text-base font-medium px-6 bottom-6 hidden lg:block z-10">
          Embark on a journey of inventory mastery. Login to control, track, and
          optimize your stock, ensuring your business sails smoothly.
        </span>
        <img
          className="w-[500px] hidden lg:block bg-cover bg-no-repeat border-r border-y rounded-r-3xl h-full object-cover shadow-sm brightness-75 z-0"
          src="s/src/assets/warehouse.jpg"
          alt="Warehouse"
        />
      </div>
    </div>
  );
};

export default Login;
