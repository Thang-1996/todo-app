import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
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
  return (
    <div className={classes.login}>
      <div className={classes.loginForm}>
        <TextField
          className={classes.inputField}
          label="User Name"
          color="secondary"
          autoComplete="off"
        />
        <TextField
          label="Password"
          type="password"
          color="secondary"
          autoComplete="off"
        />
        <Button className={classes.button} variant="contained">
          Sign In
        </Button>
      </div>
    </div>
  );
}
export default Login;
