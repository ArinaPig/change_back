import { HeaderProps } from "../model/types";
import style from "../../../index.module.css";

export const Header: React.FC<HeaderProps> = (props) => {
  const { large } = { ...props };
  const { thick } = { ...props };
  const { bold } = { ...props };
  const { normal } = { ...props };
  const { small } = { ...props };

  return (
    <header className={style.header}>
      <h1 className={style.h1}>{large}</h1>
      <h2 className={style.h2}>{thick}</h2>
      <h3 className={style.h3}>{bold}</h3>
      <p>{normal}</p>
      <p>{small}</p>
    </header>
  );
};
