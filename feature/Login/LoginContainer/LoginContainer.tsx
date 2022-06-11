import Container from "@mui/material/Container";
import {
  CenterBox,
  CenterBoxForm,
  Content,
  FormInfo,
  FormLogo,
} from "./LoginContainer.styled";

import { useRouter } from "next/router";

import { useSelector } from "shared/hooks/useSelector";
import { Image } from "ui/Image";
import { ROUTER } from "shared/constant/route";
import Typograph from "ui/Typograph";

import LoginImage from "public/image/loginnft.png";
import RegisterImage from "public/image/registernft.png";
import { Motion } from "ui/Motion";
import Form from "./container/Form/Form";
import { useRedirect } from "shared/hooks";

const LoginContainer = ({ title, initialValues, inputs }) => {
  let mode = useSelector((state) => state.home.appMode);
  let { push, asPath } = useRouter();
  // const { isAccessPage } :any = useRedirect();

  // if (isAccessPage) {
  //   return "";
  // }

  return (
    <Container>
      <Content>
        <FormInfo bg="true">
          <FormLogo>
            <Image
              onClick={() => push(ROUTER.MENU.HOME.href)}
              src={`/image/${mode ? "logo-black" : "logo"}.png`}
              width="92"
              cover
              isNotLoading
            />
          </FormLogo>
          <Motion>
            <CenterBox>
              <Image
                src={asPath === ROUTER.LOGIN.href ? LoginImage : RegisterImage}
                width="335"
                height="335"
                cover
              />
              <Typograph
                font="36"
                center
                color={!mode ? "white" : "black"}
              >
                hər şey tech.az ilə bağlıdır
              </Typograph>
            </CenterBox>
          </Motion>
        </FormInfo>
        <FormInfo>
          <CenterBoxForm>
            <Typograph font="30" space="3" color={!mode ? "white" : "black"}>
              {title}
            </Typograph>
            <Form initialValues={initialValues} inputs={inputs} />
          </CenterBoxForm>
        </FormInfo>
      </Content>
    </Container>
  );
};

export  default LoginContainer