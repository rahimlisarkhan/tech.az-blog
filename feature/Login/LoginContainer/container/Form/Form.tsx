import Typograph from "shared/components/Typograph";
import { InputType } from "shared/constant/form";
import { InputField } from "../../components/InputField";
import { Motion } from "shared/components/Motion";
import { useSelector } from "shared/hooks/useSelector";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { SubmitButton } from "./Form.styled";
import { ROUTER } from "shared/constant/route";
import { useRequest } from "shared/hooks/useRequest";
import { apiLogin } from "api/login";

export const Form = ({ initialValues, inputs }) => {
  let mode = useSelector((state) => state.home.appMode);

  const { exc } = useRequest((data) => apiLogin(data), {
    onSuccess: (data) => {
      console.log(data, "data");
    },
    onError: (data) => {
      console.log(data, "error");
    },
  });

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
      exc(value);
      // actions.resetForm();
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
  );
};
