import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import services from "../../apis/api";
const useStyles = makeStyles({
  login: {
    width: "100%",
    height: "100vh",
    backgroundImage: "url('background.jpg')",
  },
  loginForm: {
    display: "flex",
    width: "500px",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px 40px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  inputField: {
    paddingBottom: "15px",
    borderColor: "#EB7FBD",
    outlineColor: "#EB7FBD",
  },
  button: {
    marginTop: "30px",
    backgroundColor: "#EB7FBD",
    color: "#fff",
    border: "none",
  },
});
function Login() {
  const classes = useStyles();
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    returnSecureToken: true,
  });
  const handleRegister = async () => {
    const result = await services.login(registerInfo);
    console.log(result);
  };
  return (
    <div className={classes.login}>
      <div className={classes.loginForm}>
        <TextField
          className={classes.inputField}
          label="Email Address"
          type="email"
          color="secondary"
          autoComplete="off"
          value={registerInfo.email}
          onChange={(e) =>
            setRegisterInfo({ ...registerInfo, email: e.target.value })
          }
        />
        <TextField
          label="Password"
          type="password"
          color="secondary"
          autoComplete="off"
          onChange={(e) =>
            setRegisterInfo({ ...registerInfo, password: e.target.value })
          }
        />
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleRegister}
        >
          Register
        </Button>
      </div>
    </div>
  );
}
export default Login;
