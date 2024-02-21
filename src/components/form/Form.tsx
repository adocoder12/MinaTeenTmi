import style from "./form.module.css";
import { useState } from "react";
//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//axios
import axios from "axios";

export default function Form() {
  const [nimi, setNimi] = useState<string>("");
  const [katuosoite, setKatuosoite] = useState<string>("");
  const [paikkakunta, setPaikkakunta] = useState<string>("");
  const [sähköposti, setSähköposti] = useState<string>("");
  const [puhelinnumero, setPuhelinnumero] = useState<string>("");
  const [viesti, setViesti] = useState<string>("");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [ErrorMessage, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("from handle submit");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/contact-us/send-mail",
        {
          name: nimi,
          email: sähköposti,
          address: katuosoite,
          message: viesti,
          phone: puhelinnumero,
          municipy: paikkakunta,
        }
      );
      console.warn(response);
      setServerMessage(response.data.message);
      toast.success(serverMessage, { position: "top-right" });
    } catch (error) {
      // Handle errors here
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setError(errorMessage);
      toast.error(ErrorMessage, { position: "top-right" });
    }

    // Reset the state variables
    setNimi("");
    setKatuosoite("");
    setPaikkakunta("");
    setSähköposti("");
    setPuhelinnumero("");
    setViesti("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["input-container"]}>
        <input
          type="text"
          placeholder="Nimi"
          value={nimi}
          required
          onChange={(e) => setNimi(e.target.value)}
        />
        <span></span>
      </div>
      <div className={style["input-container"]}>
        <input
          type="text"
          placeholder="Katuosoite"
          value={katuosoite}
          onChange={(e) => setKatuosoite(e.target.value)}
          required
        />
      </div>
      <div className={style["input-container"]}>
        <input
          type="text"
          placeholder="Paikkakunta"
          value={paikkakunta}
          onChange={(e) => setPaikkakunta(e.target.value)}
        />
      </div>
      <div className={style["input-container"]}>
        <input
          type="email"
          placeholder="Sähköposti"
          value={sähköposti}
          onChange={(e) => setSähköposti(e.target.value)}
          required
        />
      </div>
      <div className={style["input-container"]}>
        <input
          inputMode="numeric"
          type="text"
          maxLength={9}
          placeholder="Puhelinnumero"
          value={puhelinnumero}
          onChange={(e) => setPuhelinnumero(e.target.value)}
          required
        />
      </div>
      <div className={style["input-container"]}>
        <textarea
          placeholder="Viesti"
          name="message"
          id=""
          rows={5}
          value={viesti}
          onChange={(e) => setViesti(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit" className={style["submit"]}>
        lähetä viesti
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnFocusLoss
        theme="dark"
      />
    </form>
  );
}
