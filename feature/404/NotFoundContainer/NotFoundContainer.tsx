import { useRouter } from "next/router";
import TypographyText from "../../../shared/components/Typograph";
import { ErrorContent, ErrorButton } from "./NotFoundContainer.styled";

type Props = {
  serverError?: boolean;
};

export const NotFoundContainer = ({ serverError }: Props) => {
  let { back } = useRouter();

  return (
    <ErrorContent>
      <TypographyText font="150" bold="true" color="green">
        {serverError ? "500" : "404"}
      </TypographyText>
      <TypographyText font="40" color="white" bold="true">
        {serverError
          ? "Serverdə xəta baş verdi.Yenidən cəhd edin"
          : "Səhifə tapılmadı!"}
      </TypographyText>
      <ErrorButton onClick={() => back()}>Geriyə qayıt</ErrorButton>
    </ErrorContent>
  );
};
