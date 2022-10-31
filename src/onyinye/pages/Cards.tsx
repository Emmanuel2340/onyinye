import { FC } from "react";
import styled from "styled-components";
import CreatedCard from "./CreatedCard";
import Wrapper from "./helper/Wrapper";
import Navbar from "./Navbar";

const Cover = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-left: 3rem;
  background-color: #e6f3f5;
`;
export const Container = styled.div`
  width: ${(props) => props.className};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    height: 100vh;
  }
`;

const Cards: FC = () => {
  // const gray = "#231f20";
  // const yello = "#FDB913";
  // const sky = "#ccd9e0";
  return (
    <Wrapper>
      <header>
        <Navbar />
      </header>
      <Cover className="bg-[#e6f3f5] w-full h-full">
        <Container className="w-[500px] w-full">
          <h1 className="mt-5 font-semibold text-[25px]">Create card</h1>
          <CreatedCard />

          <div className="flex w-full justify-between my-[90px]">
            <span
              className={`bg-[#ccd9e0] py-[1px] px-[2px] w-[90px] text-center rounded-sm text-[#005f94] cursor-pointer`}
            >
              ← Previous
            </span>
            <span className="text-[#3a3637]">Page 1/1</span>
            <span
              className={`w-[60px] bg-[#ccd9e0] py-[1px] px-[2px] text-center rounded-sm text-[#005f94] cursor-pointer`}
            >
              Next →
            </span>
          </div>
          <span className="flex flex-col mb-1 absolute bottom-[20px] left-6 pl-[3rem]">
            &copy; Onyinye Technologies 2022
          </span>
        </Container>
      </Cover>
    </Wrapper>
  );
};

export default Cards;
