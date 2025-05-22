import React, { useState } from "react";
import cross from "../assets/cross.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [value, setValue] = useState("Signup");
  const [showName, setShowName] = useState("false");
  const [input, setInput] = useState();

  const handleOnClick = () => {
    if (value === "Signup") {
      setValue("Login");
      setShowName(false);
    } else {
      setValue("Signup");
      setShowName(true);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="logiin">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box">
          <h1>{value} </h1>
          <Link to="/">
            {" "}
            <button>
              <img src={cross} alt="" />
            </button>
          </Link>
        </div>
        {showName && (
          <div className="inpput">
            <label htmlFor="">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" 
             {...register("name", { required: true })}
            />
             {errors.name && <span className="error">This field is required</span>}
          </div>
        )}
        <div className="email">
          <label htmlFor="">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" 
          {...register("email", { required: true })}
          />
            {errors.email && <span className="error">This field is required</span>}
        </div>
        <div className="password">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
            {errors.password && <span className="error">This field is required</span>}
        </div>
        <div className="signup">
          <button>{value}</button>
          <p>
            {value === "Signup" ? "Have an account?" : "Dont have any account?"}
            <span onClick={handleOnClick}>
              {value === "Signup" ? "Login" : "Signup"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
