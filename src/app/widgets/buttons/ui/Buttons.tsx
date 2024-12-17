import { ButtonsProps } from "../model/types";
import style from "../../../index.module.css";

export const Buttons: React.FC<ButtonsProps> = (props) => {
  const { buttons } = { ...props };

  return (
    <div className={style.buttons}>
      {buttons.map((button) => (
        <div key={button.id} className={style.buttonItem}>
          {button.text}
        </div>
      ))}
    </div>
  );
};
