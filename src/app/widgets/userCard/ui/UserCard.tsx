import { UserCardProps } from "../model/types";
import UserImage from "../../../shared/images/asabeneh.jpg";
import Image from "next/image";
import style from "../../../index.module.css";

export const UserCard: React.FC<UserCardProps> = (props) => {
  const { name } = { ...props };

  return (
    <div className={style.user_card}>
      <Image
        src={UserImage}
        alt={"user image"}
        className={style.user_card_img}
      />
      <h2 className={style.h2}>{name}</h2>
    </div>
  );
};
