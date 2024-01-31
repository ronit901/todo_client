import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// עמוד התחברות

export default function Login() {

    // מה קורה כשלוחצים על כפתור שליחה
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.userName.value);
    
        axios.post(
          'https://jbh-mockserver.onrender.com/login',
          {
            userName: e.target.userName.value,
            password: e.target.password.value
          }
        )
        .then((response) => {
            nav('./')
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',JSON.stringify(response.data.user));
            setIsLogged(true)
          console.log(response);
    
          nav('/');
          console.log("save");
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
      };

    return (
        <div>
      <h1>Welcome!</h1>
      Few details & we can know who you are
      <br />
      <form onSubmit={onSubmit}>
        <label>
          User Name
          <input type="text" name="userName" className="input" placeholder="name@domain.com" />
        </label>
        <br />
        <label>
          Password
          <input type="password" name="password" className="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    )
}
