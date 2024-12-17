import { Header } from "./widgets/header/ui/Header";
import { TechList } from "./widgets/techList/ui/TechList";
import { type Techs } from "./widgets/techList/model/types";
import { UserCard } from "./widgets/userCard/ui/UserCard";
import { Footer } from "./widgets/footer/ui/Footer";
import { type ButtonsType } from "./widgets/buttons/model/types";
import { Buttons } from "./widgets/buttons/ui/Buttons";

const Home = () => {
  const large = "Welcome to 30 Days Of React";
  const thick = "Getting Started React";
  const bold = "JavaScript Library";
  const normal = "Asabeneh Yetayeh";
  const small = "Oct 3, 2020";

  const techs: Array<Techs> = [
    {
      id: "1",
      name: "HTML",
    },
    {
      id: "2",
      name: "CSS",
    },
    {
      id: "3",
      name: "JavaScript",
    },
  ];

  const name = "Asabeneh Yetayeh";

  const footer_text = "Copyright 2020";

  const buttons: Array<ButtonsType> = [
    {
      id: "1",
      text: "Greet People",
    },
    {
      id: "2",
      text: "Show Time",
    },
    {
      id: "3",
      text: "Change Back",
    },
  ];

  return (
    <>
      <Header
        large={large}
        thick={thick}
        bold={bold}
        normal={normal}
        small={small}
      />
      <TechList techs={techs} />
      <UserCard name={name} />
      <Footer footer_text={footer_text} />
      <Buttons buttons={buttons} />
    </>
  );
};

export default Home;
