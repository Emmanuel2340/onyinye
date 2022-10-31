import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Cards";
import Wrapper from "./helper/Wrapper";
import { HomeImg } from "./Onyimage";

const Login: FC = () => {
  return (
    <Wrapper>
      <Container className="w-full bg-[#005f94] h-full   ">
        <div className="w-[500px] mx-auto flex flex-col items-center">
          <img className="pt-[4rem] w-[150px] " src={HomeImg} alt="" />
          <h3 className="text-2xl text-white font-medium mt-[2.2rem] mb-[10px]">
            Log in to Business
          </h3>
          <form className="flex flex-col w-[300px] gap-7" action="">
            <div className="flex flex-col w-[100%]">
              <label
                className="text-left text-white font-light text-lg"
                htmlFor="text"
                id="text"
              >
                Business Email
              </label>
              <input
                className="outline-none h-[30px] my-auto"
                type="email"
                placeholder="ex. xyz.company@example.com"
              />
            </div>
            <div className=" flex flex-col">
              <label
                className="text-left text-white font-light text-lg"
                htmlFor="text"
                id="text"
              >
                Business Telephone
              </label>
              <input
                className="outline-none h-[30px] my-auto"
                type="number"
                placeholder="ex. +234"
              />
            </div>
            <button className="text-black bg-[#FDB913] h-[30px] rounded-[5px]">
              Login
            </button>
          </form>
          <Link to="/register_business">
            <button className="mt-3 text-white font-light text-lg">
              Register Business instead
            </button>
          </Link>
          <span className="absolute bottom-[50px] text-white font-light">
            &copy; Onyinye Technologies 2022
          </span>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Login;
