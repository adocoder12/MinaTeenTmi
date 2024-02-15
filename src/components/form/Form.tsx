import style from "./form.module.css";
export default function Form() {
  return (
    <form className={style.form}>
      <div className={style["input-container"]}>
        <input type="text" placeholder="Nimi" />
        <span></span>
      </div>
      <div className={style["input-container"]}>
        <input type="text" placeholder="Katuosoite" />
      </div>
      <div className={style["input-container"]}>
        <input type="text" placeholder="Paikkakunta" />
      </div>
      <div className={style["input-container"]}>
        <input type="email" placeholder="Sähköposti" />
      </div>
      <div className={style["input-container"]}>
        <input
          inputMode="numeric"
          type="text"
          maxLength={9}
          placeholder="Puhelinnumero"
        />
      </div>
      <div className={style["input-container"]}>
        <textarea
          placeholder="Viesti"
          name="message"
          id=""
          rows={5}
          required
        ></textarea>
      </div>

      <button type="submit" className={style["submit"]}>
        lähetä viesti
      </button>
    </form>
  );
}
