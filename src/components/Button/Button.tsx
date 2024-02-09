import style from "./btn.module.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  btnLink?: string;
}

export default function Button({ text, btnLink }: ButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/${btnLink}`)}
      className={`${style.Btn} }`}
    >
      {text}
    </button>
  );
}
