import Container from "@mui/material/Container";
import {
  CenterBox,
  CenterBoxForm,
  Content,
  FormInfo,
  FormLogo,
  Input,
  InputGroup,
  SubmitButton,
  InputIcon,
} from "./LoginContainer.styled";

import { useRouter } from "next/router";
import { useFormik } from "formik";

import { useSelector } from "shared/hooks/useSelector";
import { Image } from "shared/components/Image";
import { ROUTER } from "shared/constant/route";
import Typograph from "shared/components/Typograph";

import LoginImage from "public/image/loginnft.png";
import RegisterImage from "public/image/registernft.png";
import { InputType } from "shared/constant/form";
import { Grow } from "@mui/material";
import { Motion } from "shared/components/Motion";

export const LoginContainer = ({ title, initialValues, inputs }) => {
  let mode = useSelector((state) => state.home.appMode);
  let { push, asPath } = useRouter();

  let formik = useFormik({
    initialValues,
    // validate: (values) => {
    //     console.log(values,"error");

    //     if (!values.first_name || !values.last_name || !values.email) {
    //         toast.error("Zəhmət olmasa xanaları düzgün doldurun...")
    //     }
    // },
    onSubmit: (value, actions) => {
      //   addJoin(value);
      console.log("value", value);

      actions.resetForm();
    },
  });

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
                center="true"
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
            <form onSubmit={formik.handleSubmit}>
              {inputs?.map((input: InputType) => {
                let Icon = input.icon;
                switch (input.type) {
                  case "text":
                    return (
                      <Motion>
                        <InputGroup>
                          <InputIcon>
                            <Icon />
                          </InputIcon>
                          <Input
                            value={formik.values[input.name]}
                            name={input.name}
                            onChange={formik.handleChange}
                            type="text"
                            placeholder={input.label}
                          />
                        </InputGroup>
                      </Motion>
                    );
                  case "email":
                    return (
                      <Motion>
                        <InputGroup>
                          <InputIcon>
                            <Icon />
                          </InputIcon>
                          <Input
                            value={formik.values[input.name]}
                            name={input.name}
                            onChange={formik.handleChange}
                            type="email"
                            placeholder={input.label}
                          />
                        </InputGroup>
                      </Motion>
                    );
                  case "password":
                    return (
                      <Motion>
                        <InputGroup>
                          <InputIcon>
                            <Icon />
                          </InputIcon>
                          <Input
                            value={formik.values[input.name]}
                            name={input.name}
                            onChange={formik.handleChange}
                            type="password"
                            placeholder={input.label}
                          />
                        </InputGroup>
                      </Motion>
                    );
                  default:
                    return;
                }
              })}
              <Motion>
                <SubmitButton>
                  {asPath === ROUTER.LOGIN.href ? "daxil ol" : "qeydiyyat"}
                </SubmitButton>
              </Motion>
              <Motion>
                <div
                  onClick={() =>
                    push(
                      asPath === ROUTER.LOGIN.href
                        ? ROUTER.REGISTER.href
                        : ROUTER.LOGIN.href
                    )
                  }
                >
                  <Typograph
                    font="18"
                    decaration="underline"
                    cursor="true"
                    color={!mode ? "white" : "black"}
                  >
                    {asPath === ROUTER.LOGIN.href
                      ? "Hesabın yoxdur? Buradan qeydiyyat et"
                      : "Hesabın var? Buradan daxil ol"}
                  </Typograph>
                </div>
              </Motion>
            </form>
          </CenterBoxForm>
        </FormInfo>
        {/* <TypographyText font="30" color={mode ? "dark" : "green"}>
                    Bizə qoşulun
                </TypographyText>
                <form onSubmit={formik.handleSubmit}>
                    <Field label="Ad" value={formik.values.first_name} name="first_name" onChange={formik.handleChange} />
                    <Field label="Soyad" error={false} value={formik.values.last_name} name="last_name" onChange={formik.handleChange} />
                    <Field label="Email" value={formik.values.email} name="email" onChange={formik.handleChange} />
                    <ButtonOutlined type="submit" mode={mode ? "true" : ""} >
                        Göndər
                    </ButtonOutlined>
                </form> */}
      </Content>
    </Container>
  );
};
