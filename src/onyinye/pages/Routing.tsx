import { FC } from "react";
import Wrapper from "./helper/Wrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Cards";
import ReceivePayemnt from "./ReceivePayemnt";
import ActivateCard from "./ActivateCard";
import styled from "styled-components";
import HomePage from "./HomePage";
import Login from "./Login";
import RegisterBusiness from "./RegisterBusiness";
import LogOuts from "./LogOuts";

const Routingtyles = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  /* background-color: #e6f3f5; */
`;

const Routing: FC = () => {
  return (
    <Wrapper>
      <Routingtyles>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register_business" element={<RegisterBusiness />} />
            <Route path="/Card" element={<Cards />} />
            <Route path="/Activate_card" element={<ActivateCard />} />
            <Route path="/receive_payment" element={<ReceivePayemnt />} />
            <Route path="/logOut" element={<LogOuts />} />
          </Routes>
        </Router>
      </Routingtyles>
    </Wrapper>
  );
};

export default Routing;
