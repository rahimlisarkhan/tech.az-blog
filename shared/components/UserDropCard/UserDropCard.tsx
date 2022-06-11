import ButtonOutlined from "ui/ButtonOutlined";
import { Dropdown } from "ui/Dropdown";
import { InfoCard } from "../InfoCard";
import { Content } from "./UserDropCard.styled";
import Typography from "ui/Typograph";
import { useEffect, useRef } from "react";

export const UserDropCard = ({ isShow, onLogout,onClose }) => {
  const dropRef = useRef<any>();
  let user = {
    name: "Sarkhan",
    surname: "Rahimli",
    email: "rahimlisarkhan@gmail.com",
  };

//   useEffect(() => {
    window.addEventListener("click", function (e: any) {
      if (dropRef && dropRef?.current?.contains(e.target)) {
        // Clicked in box
        console.log("click box");
      } else {
        // Clicked outside the box
        console.log("click out box");
        // dropRef.current && onClose()
      }
    });
//   }, []);

  return (
    <Content ref={dropRef} onBlur={() => console.log("kenar")}>
      <InfoCard {...user} size="lg" />
      <ButtonOutlined padding="3px 90px">kabinetim</ButtonOutlined>

      <div style={{ textAlign: "left" }}>
        <Typography
          font="18"
          color="whiteGray"
          cursor
          bold
          margin="20px 0 10px 0"
        >
          Hesabım
        </Typography>
        <Typography font="16" color="whiteGray" decaration="true" cursor margin="15px 0">
          profil
        </Typography>
        <Typography font="16" color="whiteGray" cursor margin="15px 0">
          bildiriş
        </Typography>
        <Typography font="16" color="whiteGray" cursor margin="15px 0">
          tənzimləmə
        </Typography>
        <Typography font="16" color="whiteGray" cursor margin="15px 0">
          bizə qoşul
        </Typography>
        <Typography font="16" color="whiteGray" cursor margin="15px 0">
          çıxış
        </Typography>
      </div>
    </Content>
  );
};
