//css
import loader from "./loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={loader["loader"]}>
        <div className={loader["loader__circle"]}></div>
        <div className={loader["loader__circle"]}></div>
        <div className={loader["loader__circle"]}></div>
        <div className={loader["loader__circle"]}></div>
      </div>
    </>
  );
}
