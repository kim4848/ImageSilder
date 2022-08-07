import "./App.css";
import { Box, Slider } from "@mui/material";
import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import {
  IdentityModal,
  IdentityContextProvider,
  useIdentityContext,
} from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import "@reach/tabs/styles.css";
function App() {
  const [size, setSize] = useState(500);

  const [source] = useState(["1.jpeg", "2.jpeg", "3.jpeg"]);
  const [index, setIndex] = useState(0);

  const changeSize = (x: any) => {
    console.log(x.target.value);
    setSize(x.target.value);
  };

  useEffect(() => {
    startTime(5000);
  });

  const url = "https://superb-seahorse-97604e.netlify.app/"; // supply the url of your Netlify site instance. VERY IMPORTANT. no point putting in env var since this is public anyway
  const startTime = (timerValue: number) => {
    setTimeout(() => {
      let maxvalue = source.length - 1;

      if (index === maxvalue) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, timerValue);
  };

  return (
    <div className="App">
      <IdentityContextProvider url={url}>
        <body>
          <AuthStatus></AuthStatus>
          <Container maxWidth="sm">
            <Slider
              defaultValue={size}
              max={800}
              onChange={(e) => changeSize(e)}
              aria-label="Disabled slider"
            />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="50vh"
            >
              <img
                alt="Main view"
                style={{ height: "100vh" }}
                src={source[index]}
              ></img>
            </Box>
          </Container>
        </body>
      </IdentityContextProvider>
    </div>
  );
}

function AuthStatus() {
  const [dialog, setDialog] = useState(false);
  const identity = useIdentityContext();
  const UserLog = () => {
    console.log(identity.user);
    return <div>user:</div>;
  };
  return (
    <div>
      <button
        className="btn"
        style={{ maxWidth: 400, background: "darkgreen" }}
        onClick={() => setDialog(true)}
      >
        LOG IN
      </button>
      <UserLog></UserLog>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user: any) => console.log("hello ", user)}
        onSignup={(user: any) => console.log("welcome ", user)}
        onLogout={() => console.log("bye ", "test")}
      />
    </div>
  );
}

export default App;
