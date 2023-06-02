import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import User from './User';

const LoginForm = () => {
  return (
    <Router>
      <Link to="/user">
        <button style={{ width: 'auto' }}>User</button>
      </Link>

      <Switch>
        <Route path="/user" component={User} />
        <Route path="/">
          <ModalLoginForm />
        </Route>
      </Switch>
    </Router>
  );
};

const ModalLoginForm = () => {
  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };

  return (
    <div id="id01" className="modal">
      <form className="modal-content animate" action="/action_page.php" method="post">
        <div className="imgcontainer">
          <span onClick={closeModal} className="close" title="Close Modal">
            &times;
          </span>
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <button type="button" onClick={closeModal} className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
