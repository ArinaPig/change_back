import { ButtonsProps } from "../model/types";
import light_theme from "light_theme.css";
import dark_theme from "dark_theme.css";
import { useState } from "react";

export const Buttons: React.FC<ButtonsProps> = (props) => {
  const { buttons } = { ...props };
  const [theme, setState] = useState<"light_theme" | "dark_theme">(
    "light_theme",
  );

  const themeChange = () => {
    setState((theme) =>
      theme == "light_theme" ? "dark_theme" : "light_theme",
    );
  };

  return (
    <div className={theme}>
      {buttons.map((button) => (
        <div key={button.id} className={theme} onClick={themeChange}>
          {button.text}
        </div>
      ))}
    </div>
  );
};
