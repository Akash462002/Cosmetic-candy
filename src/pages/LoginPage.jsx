import React from "react";
import candy from "../assets/images/product-logo/candy.png";
const styles = {
  backgroundImage: "var(--texture-1)",
};

const LoginPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-5"
          style={{
            backgroundImage: `url('./assets/images/login/bg.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div
            className="img"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={candy}
              style={{ marginTop: "42%" }}
              height="200px"
              width="200px"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-7" style={styles}>
          <div className="container my-4">
            <i class="fa-solid fa-arrow-left-long fa-2x"></i>
          </div>
          <div
            className="container d-flex flex-column justify-content-between"
            style={{ width: "80%", height: "80vh" }}
          >
            <div
              className="container text-center d-flex flex-column justify-content-between"
              style={{ height: "60vh" }}
            >
              <div className="container">
                <h2
                  style={{
                    fontSize: "10rem",
                    opacity: "0.4",
                    fontWeight: "bold",
                  }}
                >
                  Hi!
                </h2>
                <h2>Login/Signup Using MobilePhone</h2>
              </div>
              <div className="container">
                <fieldset>
                  <legend for="Number">Enter the Number</legend>
                  <input
                    type=""
                    name="Number"
                    id=""
                    style={{ width: "50%", height: "40px" }}
                  />
                </fieldset>
              </div>
              <div className="container">
                <p>
                  Registering for this site allows you to access your order
                  status and history. Just fill in the above fields, and we'll
                  get a new account set up for you in no time. We will only ask
                  you for information necessary to make the purchase process
                  faster and easier.
                </p>
              </div>
              <div className="container">
                <button className="btn btn-dark opacity-50 h-100 p-2">
                  SEND ME OTP
                </button>
              </div>
            </div>
            <div className="container text-center">
              <input type="checkbox" id="CheckBox" name="CheckBox" />
              <label for="CheckBox">
                Get important updates on Whatsapp{" "}
                <span style={{ color: "red" }}>Terms and Conditions</span>
              </label>
              <br></br>
            </div>
            <div className="container text-center">
              <hr className="border dotted-border border-dark"></hr>
              <p>
                By Signing up or logging in, you agree to our Terms and
                Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
