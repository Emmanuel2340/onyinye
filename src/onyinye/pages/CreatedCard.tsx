import { FC, FormEvent, useState, useRef } from "react";
import MyCard from "./MyCard";

const CreatedCard: FC = () => {
  const [msg, setMsg] = useState<string>("");
  const textInput = useRef<HTMLInputElement>(null);

  const onchanges = (e: FormEvent) => {
    e.preventDefault();
    const inputText = textInput.current!.value;
    if (inputText.trim().length === 0) {
      return;
    }
  };

  const onsubmitme = (e: FormEvent) => {
    e.preventDefault();
    const inputText = textInput.current!.value;

    if (inputText === "") {
      return;
    } else {
      setMsg("success");
      setInterval(() => {
        setMsg("");
      }, 3000);
    }
  };
  return (
    <div>
      <form className="md:flex flex-col" onSubmit={onsubmitme}>
        <label htmlFor="text" id="text">
          Amount
        </label>
        <input
          className="h-[30px] border-none outline-none rounded-[3px]"
          type="number"
          ref={textInput}
          onChange={onchanges}
          placeholder="NGN 0"
        />
        <button
          type="submit"
          className="w-full bg-[#005f94] h-[30px] text-white mt-4 rounded-[6px]"
        >
          Create
        </button>
        <p className="text-center">{msg}</p>
      </form>

      <MyCard />
    </div>
  );
};

export default CreatedCard;
