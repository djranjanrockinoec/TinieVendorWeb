import css from 'styled-jsx/css'

export default css.global`
    .App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #34EBEB;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
                
                p {
  color:#555555;
}

h2 {
  color:#065987;
  font-size:24px;
  padding:0 10px;
  margin-top:10px;
  font-weight:700;
}


input {
  width:590px;
  border: 1px solid #555555;
  border-radius:8px !important;
  padding:0 10px;
}

input::placeholder {
  font-size:12px;
}

input[type="text"]:focus,
input[type="email"]:focus {
  border-color: #34EBEB !important;
  box-shadow: 0 0px 3px 2px #888888 !important;
  border:none !important;
  outline: 0 none;
}

input[type="checkbox"] {
  width:40px;
  height:44px;
  margin:3px 10px 3px 0;
}

.submit {
  background-color: #34EBEB;
  border:none;
  border-radius: 50px;
  width:422px;
  heith:73px;
  padding:12px 60px;
  margin:30px 0;
  color:#222222 !important;
  font-weight:500;
}

.otp {
  background-color: #34EBEB;
  border:none;
  border-radius: 50px;
  padding:13px 12px;
  margin:30px 0;
  color:#222222 !important;
  font-weight:500;
}

.otp:hover, .submit:hover,
.otp:focus, .submit:focus
 {
  background-color:#34EBEB !important;
}

.hr {
  height:1px;
  background-color:#ADADAD;
  width:250px;
}
.navbar {
  border-radius: 0;
  background-color:#065987;
  border-color:#065987;
  min-height:100px;
}

.navbar-brand, .navbar li a  {
  padding: 0 15px;
  height: 100px;
  line-height:100px;
  font-size:18px;
}

.navbar-brand {
  padding:15px;
  margin 0 auto;
}

.navbar a {
  color:#ffffff !important;
}

.navbar li:active {
  background-color:#065987 !important;
}

`;