import Typograph from "shared/components/Typograph";
import { InputType } from "shared/constant/form";
import { InputField } from "../../components/InputField";
import { Motion } from "shared/components/Motion";
import { useSelector } from "shared/hooks/useSelector";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { SubmitButton } from "./Form.styled";
import { ROUTER } from "shared/constant/route";
import { useAccount } from "shared/hooks/useAccount";
import { Image } from "shared/components/Image";
import GoogleLogo from "public/image/google-logo.png";

 const Form = ({ initialValues, inputs }) => {
  let mode = useSelector((state) => state.home.appMode);

  let { push, asPath } = useRouter();

  let isLogin = asPath === ROUTER.LOGIN.href;

  const { defaultSignIn, googleSignIn } = useAccount();

  let formik = useFormik({
    initialValues,

    onSubmit: (value, { resetForm }) => {
      defaultSignIn(value);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {inputs?.map((input: InputType, index) => {
        switch (input.type) {
          case "text":
            return (
              <InputField
                key={`form-input-${index}`}
                value={formik.values[input.name]}
                name={input.name}
                icon={input.icon}
                onChange={formik.handleChange}
                type="text"
                placeholder={input.label}
              />
            );
          case "email":
            return (
              <InputField
                key={`form-input-${index}`}
                value={formik.values[input.name]}
                name={input.name}
                icon={input.icon}
                onChange={formik.handleChange}
                type="email"
                placeholder={input.label}
              />
            );
          case "password":
            return (
              <InputField
                key={`form-input-${index}`}
                value={formik.values[input.name]}
                name={input.name}
                icon={input.icon}
                onChange={formik.handleChange}
                type="password"
                placeholder={input.label}
              />
            );
          case "date":
            return (
              <InputField
                value={formik.values[input.name]}
                name={input.name}
                icon={input.icon}
                onChange={formik.handleChange}
                type="text"
                placeholder={input.label}
              />
            );
          default:
            return;
        }
      })}

      <Motion>
        <SubmitButton color="green" hover="bgGreen">
          {isLogin ? "daxil ol" : "qeydiyyat"}
        </SubmitButton>
      </Motion>
      <Motion>
        <SubmitButton
          color="whiteGray-50"
          hover="white"
          type="button"
          onClick={() => googleSignIn()}
        >
          <Image width="30" src={GoogleLogo} />
           google ilə daxil ol
        </SubmitButton>
      </Motion>

      <Motion>
        <div
          onClick={() =>
            push(isLogin ? ROUTER.REGISTER.href : ROUTER.LOGIN.href)
          }
        >
          <Typograph
            font="18"
            decaration="underline"
            cursor="true"
            color={!mode ? "white" : "black"}
          >
            {isLogin
              ? "Hesabın yoxdur? Buradan qeydiyyat et"
              : "Hesabın var? Buradan daxil ol"}
          </Typograph>
        </div>
      </Motion>
    </form>
  );
};

export default Form