import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passRepeat, setPassRepeat] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passRepeat) {
      setError("Sifreler eslesmiyor!");
      return;
    }
    var user=[email,password];
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("email", email);

    sessionStorage.setItem("password", password);

    setEmail("");
    setPassword("");
    setPassRepeat("");
    setSuccess("Kayit Olusturuldu. Giris yapabilirsiniz.");
    setError("");
  };

  return (
    <div className="register-container">
      <div className="container">
        <div className="row">
          <div className="col">
            
            <div className="register-form-container">
            <div className="register-heading">Kayıt Ol</div>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Mail adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Şifre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="6"
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Şifre Tekrar"
                  value={passRepeat}
                  onChange={(e) => setPassRepeat(e.target.value)}
                  minLength="6"
                  required
                />
                <br />
                <button type="submit">Kayıt Ol</button>
              </form>
              {error && <p style={{ color: "red" }}> {error} </p>}
              {success && <p style={{ color: "green" }}> {success} </p>}
              <p>
                Hesabınız var mı? <Link to="/">Giriş Yap</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

    
}

export default Register;

