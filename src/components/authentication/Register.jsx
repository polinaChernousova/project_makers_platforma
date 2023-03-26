import {
  Button,
  TextField,
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Register = () => {
  const { authWithGoogle, register } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
    navigate("/");
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop="200px"
      >
        {error && <Alert severity="error">{error}</Alert>}
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "2px",
            fontSize: "32px",
          }}
        >
          Sign in to Store
        </Typography>
        <TextField
          sx={{
            marginTop: "30px",
            width: "40%",
          }}
          label="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{
            marginTop: "30px",
            width: "40%",
          }}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{
            marginTop: "30px",
            width: "40%",
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Button
          sx={{
            marginTop: "30px",
            width: "40%",
          }}
          variant="contained"
          onClick={() => authWithGoogle()}
        >
          Continue wuth Google
        </Button>
        <FormControl>
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ marginTop: "30px" }}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default Register;
