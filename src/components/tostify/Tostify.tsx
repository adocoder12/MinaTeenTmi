import { ReactNode } from "react";
import style from "./tostify.module.css";

interface TostifyProps {
  children: ReactNode;
  color: string;
}

export default function Tostify({ children, color }: TostifyProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={style["modal__container"]}
    >
      {children}
    </div>
  );
}
