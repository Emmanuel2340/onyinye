import { FC, useState } from "react";
import Wrapper from "./helper/Wrapper";
import Navbar from "./Navbar";
import { Container } from "./Cards";

const ReceivePayemnt: FC = () => {
  const [completed, setCompleted] = useState<boolean>(false);
  const checkCompleted = () => {
    if (completed) {
      setCompleted(!completed);
    } else {
      setCompleted(!completed);
    }
  };
  return (
    <Wrapper>
      <header className="fixed w-full">
        <Navbar />
      </header>
      <div className="bg-[#e6f3f5] w-full h-full pb-[6rem] py-[3rem]">
        <Container className="md:w-[630px] sm:w-full">
          <h1 className="mt-5 font-semibold text-[25px]">Receive Payment</h1>
          <div className="w-full">
            <p>
              These gift card can be gifted or sold to youe customers. this act
              is an incetive to bring them back to your business and also to
              bring in new customer.
            </p>
            <span>
              when a customer has hold of this card, it's act a means of payment
              for the products and services offered for your business.
            </span>
            <span>Node that only active cards can be used for payment.</span>
            <p>to receive a payment from a customer,</p>
            <p>
              Open a card that you want to use for a payment on a separate
              device
            </p>
            <span>Enter the amount of the payment</span>
            <span>
              Enter the coupon code on the card and click "Receive Payment" or
            </span>
            <span>Go ahead and scan the QR code on the card</span>
            <p>
              If your are using this demo on a Desktop or Laptop computer it
              will use your front camera or webcam
            </p>
            <p>
              If your are using this demo on a Tablet or Mobile phone it will
              use your back camera. you can also switch to your front camera
              with the toggle button
            </p>
            <p>
              Once the scan find the QR code, the payment starts automatically
            </p>
            <p>
              Once the payment is successfully, a demo receipt would be show
              which would be made available fro printing on a live application.
            </p>
          </div>
          <form className="md:flex flex-col py-1">
            <div className="flex flex-col">
              <label htmlFor="text" id="text">
                Amount
              </label>
              <input
                className="h-[30px] border-none outline-none rounded-[3px]"
                type="number"
                placeholder="NGN 0"
              />
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                style={{ backgroundColor: completed ? "red" : "blue" }}
                checked={completed}
                onClick={checkCompleted}
              />
              <span>Pay with coupon code</span>
            </div>
            {completed && (
              <div className="flex flex-col">
                <label htmlFor="text" id="text">
                  Coupon code
                </label>
                <input
                  className="h-[30px] border-none outline-none rounded-[3px]"
                  type="text"
                  placeholder="ex, 1234567890EA"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-[#005f94] h-[30px] text-white mt-4 rounded-[6px]"
            >
              Create
            </button>
          </form>
        </Container>
        <span className="flex flex-col mb-1 absolute bottom-[20px] left-6 pl-[3rem]">
          &copy; Onyinye Technologies 2022
        </span>
      </div>
    </Wrapper>
  );
};

export default ReceivePayemnt;
