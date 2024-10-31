import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Daxil olun");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData =
        currentState === "Daxil olun"
          ? { email, password }
          : { name, surname, email, password };

      const url =
        currentState === "Daxil olun"
          ? "https://twitter.bitcode.az/api/auth/login"
          : "https://twitter.bitcode.az/api/auth/register";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Response data:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setCurrentState("Daxil olun");
      } else {
        setError(data.message || "Məlumat tapılmadı, yenidən yoxlayın.");
      }
    } catch (error) {
      setError("Zəhmət olmasa yenidən cəhd edin.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getHomePage = () => {
    navigate("/");
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%]  m-auto  gap-4 text-gray-800 px-6">

      <div className="inline-flex items-center gap-2 mt-10 mb-2">
        <p className="text-3xl prata-regular">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {error && (
        <div className="p-2 mb-2 text-red-600 bg-red-100 rounded">{error}</div>
      )}

      {currentState === "Qeydiyyatdan keçin" && (

        <div className="flex flex-col gap-4 w-[350px]">
          <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Ad" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Soyad" required value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>

      )}

      <div className="flex flex-col gap-4 w-[350px]">
        <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Şifrə" required value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>


      <div className="w-full flex flex-col gap-4 text-sm mt-[8px]">
        <p className="cursor-pointer">Parolunuzu unutmusunuz?</p>

        {currentState === "Daxil olun" ? (

          <p onClick={() => setCurrentState("Qeydiyyatdan keçin")} className="cursor-pointer">Yeni hesab yaradın.</p>
        ) : (
          <p onClick={() => setCurrentState("Daxil olun")} className="cursor-pointer">Daxil olun</p>
        )}
      </div>


      <button
        type="submit"
        className="px-8 py-2 mt-4 font-light text-white bg-black rounded"
        disabled={loading}
        onClick={currentState === "Daxil olun" ? () => getHomePage() : null}
      >
        {loading ? "Yüklənir..." : currentState === "Daxil olun" ? "Daxil ol" : "Qeydiyyatdan keçin"}
      </button>
    </form>
  );
};

export default Login