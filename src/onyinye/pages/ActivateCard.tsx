import Wrapper from "./helper/Wrapper";
import Navbar from "./Navbar";

const ActivateCard: React.FC = () => {
  return (
    <Wrapper>
      <header>
        <Navbar />
      </header>
      <div>Activate me</div>;
    </Wrapper>
  );
};

export default ActivateCard;
