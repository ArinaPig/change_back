import { TechListProps } from "../model/types";
import style from "../../../index_light.module.css";

export const TechList: React.FC<TechListProps> = (props) => {
  const { techs } = { ...props };

  return (
    <div>
      <p className={style.p}>Prerequisite to get started react.js:</p>
      <ul className={style.ul}>
        {techs.map((tech) => (
          <li key={tech.id} className={style.li}>
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
