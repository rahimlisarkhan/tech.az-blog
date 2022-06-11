import { useRouter } from "next/router";
import Typography from "ui/Typograph";
import { ErrorContent, ErrorButton } from "./NotFoundContainer.styled";

type Props = {
  serverError?: boolean;
};

export const NotFoundContainer = ({ serverError }: Props) => {
  let { back } = useRouter();

  return (
    <ErrorContent>
      <Typography font="150" bold color="green">
        {serverError ? "500" : "404"}
      </Typography>
      <Typography font="40" color="white" text="true">
        {serverError
          ? "Serverdə xəta baş verdi.Yenidən cəhd edin"
          : "Səhifə tapılmadı!"}
      </Typography>
      <ErrorButton onClick={() => back()}>Geriyə qayıt</ErrorButton>
    </ErrorContent>
  );
};
