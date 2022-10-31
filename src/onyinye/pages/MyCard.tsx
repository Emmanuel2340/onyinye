import { FC } from "react";
import Onyipcs from "../assets/image (2).png";
import Wrapper from "./helper/Wrapper";

const MyCard: FC = (props) => {
  const blue = "#005f94";
  return (
    <Wrapper>
      <div className={`w-[290px] h-[130px] rounded-[10px] mt-20 bg-[${blue}]`}>
        <h1 className="text-right font-normal text-white p-1">₦1000</h1>
        <div className="flex flex-col items-center justify-center mt-[20px]">
          <img
            className="w-[100px] flex flex-col items-center justify-center mx-auto my-auto "
            src={Onyipcs}
            alt="sorry"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MyCard;
