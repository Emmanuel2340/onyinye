import { FC } from "react";
import Wrapper from "./helper/Wrapper";
// import OnyiHomeImg from "../assets/image (2).png";
import { Container } from "./Cards";
import { HomeImg } from "./Onyimage";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Container className="bg-[#005f94] w-full h-full ">
        <div className="flex flex-col items-center md:w-[600px] sm:w-[400px] mx-auto text-center ">
          <img className="w-[150px] py-20" src={HomeImg} alt="" />

          <div className=" flex flex-col">
            <h3 className="text-[2rem] text-white mb-3 font-semibold">
              Onyinye Tecnologies
            </h3>
            <p className="text-white font-light w-auto">
              Onyinye is a business that manufactures and delivers Gift-Cards to
              businesses across Nigeria and Africa.
            </p>
            <Link to="/register_business">
              <button className="mt-[4rem] bg-white w-[300px] mx-auto py-1 px-2 font-semibold text-[#005f94] text-xl rounded-lg shadow-[2rem]">
                Create a Demo Business
              </button>
            </Link>
            <Link to="/login">
              <button className="text-white font-medium mt-4 text-lg">
                Login to your Demo Business →
              </button>
            </Link>
          </div>
          <span className="absolute bottom-[50px] text-white">
            &copy; Onyinye Technologies 2022
          </span>
        </div>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
