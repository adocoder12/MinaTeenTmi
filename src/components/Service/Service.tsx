import style from "./service.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//component
import Button from "../Button/Button";

interface Props {
  title: string;
  description: string;
  img: string;
  id?: number;
}

export default function Service({ title, description, img, id }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as per your requirement
    };

    handleResize(); // Call it initially to set the initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={style["service___container"]}>
        <div className={style["service__img"]}>
          <img
            src={img}
            className={style["service__background__img"]}
            alt="Service background image"
            onClick={() => navigate(`palvelut/${id}`)}
          />
          {isMobile && <Button text="Lue lisää" btnLink={`palvelut/${id}`} />}
        </div>
        <div className={style["service__content"]}>
          <h2 className={style["content__title"]}>{title}</h2>
          <span className={style["content__Text"]}>{description}</span>
          {!isMobile && <Button text="Lue lisää" btnLink={`palvelut/${id}`} />}
        </div>
      </div>
    </>
  );
}
