import { useContext } from "react";
import { MyContext } from "../context/context"

export default function Button({ switchTheme }) {
  const theme = useContext(MyContext);

  return <button onClick={switchTheme}>{theme}</button>;
}
