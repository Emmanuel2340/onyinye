import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "./helper/Wrapper";
import OnyiLogo from "../assets/image (1).png";

const Navstyles = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background-color: #e6f3f5;
  img {
    width: 100px;
  }
  ul {
    display: flex;
    list-style-type: none;
    li {
      color: black;
      margin-right: 30px;

      a {
        font-size: 15px;
        &:hover {
          border-bottom: 2px solid #005f94;
        }
        .actives {
          border-bottom: 2px solid #005f94;
        }
      }
    }
  }
`;

const Navbar: FC = () => {
  const [seleecteda, setSelecteda] = useState<Boolean>(false);
  const [seleectedb, setSelectedb] = useState<Boolean>(false);
  const [seleectedc, setSelectedc] = useState<Boolean>(false);
  const [seleectedd, setSelectedd] = useState<Boolean>(false);

  const onselecta = () => {
    setSelecteda(true);
    setSelectedb(false);
    setSelectedc(false);
    setSelectedd(false);
  };
  const onselectb = () => {
    setSelecteda(false);
    setSelectedb(true);
    setSelectedc(false);
    setSelectedd(false);
  };
  const onselectc = () => {
    setSelecteda(false);
    setSelectedb(false);
    setSelectedc(true);
    setSelectedd(false);
  };
  const onselectd = () => {
    setSelecteda(false);
    setSelectedb(false);
    setSelectedc(false);
    setSelectedd(true);
  };
  return (
    <Wrapper>
      <Navstyles>
        <img src={OnyiLogo} alt="" />

        <ul>
          <li>
            <Link to="/home"></Link>
          </li>
          <li>
            <Link
              to="/card"
              onClick={onselecta}
              style={{ borderBottom: seleecteda ? "2px solid #005f94" : "" }}
            >
              Cards
            </Link>
          </li>
          <li>
            <Link
              to="/activate_card"
              onClick={onselectb}
              style={{ borderBottom: seleectedb ? "2px solid #005f94" : "" }}
            >
              Activate Card
            </Link>
          </li>
          <li>
            <Link
              to="/receive_payment"
              onClick={onselectc}
              style={{ borderBottom: seleectedc ? "2px solid #005f94" : "" }}
            >
              Receive Payment
            </Link>
          </li>
          <li className="last">
            <Link
              to="/login"
              className="text-red-500"
              onClick={onselectd}
              style={{ borderBottom: seleectedd ? "2px solid #005f94" : "" }}
            >
              Log Out
            </Link>
          </li>
        </ul>
      </Navstyles>
    </Wrapper>
  );
};

export default Navbar;
