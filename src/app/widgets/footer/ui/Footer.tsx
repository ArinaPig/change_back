import { FooterProps } from "../model/types";
import style from "../../../index.module.css";

export const Footer: React.FC<FooterProps> = (props) => {
  const { footer_text } = { ...props };

  return <footer className={style.footer}>{footer_text}</footer>;
};
