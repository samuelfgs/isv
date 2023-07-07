// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import GlobalContextsProvider from "../components/plasmic/isv/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/isv/PlasmicGlobalVariant__Screen";
import { PlasmicLogin } from "../components/plasmic/isv/PlasmicLogin";
import { useRouter } from "next/router";
import { state } from "../lib/state-management";

function Login() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isInvalid, setIsInvalid] = React.useState(false);

  const router = useRouter();
  return (
    <GlobalContextsProvider>
      <PlasmicLogin
        user={{
          value: user,
          onChange: (e) => setUser(e.target.value)
        }}
        password={{
          value: password,
          onChange: (e) => setPassword(e.target.value)
        }}
        signin={{
          onClick: () => {
            if (user === "admin" && password === "admin") {
              state.isAdmin = true;
              router.push("/");
            } else {
              setIsInvalid(true);
            }
          }
        }}
        invalidData={{
          render: (props, Component) => isInvalid ? <Component {...props} /> : null
        }}
      />
    </GlobalContextsProvider>
  );
}

export default Login;
