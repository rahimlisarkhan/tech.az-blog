import { Fragment } from "react";
import { componaies } from "../../../shared/constant/companies";
import AboutHeader from "../components/AboutHeader";
import CompaniesContent from "../components/CompaniesContent";
import TechContent from "../components/TechContent";

export const AboutContainer = () => {
//   const { ref, listener, moveStyle } = useMoveContent({});

//   const style: any = {
//     width: 200,
//     cursorPointer: "cursor",
//     height: 200,
//     backgroundColor: "red",
//   };

  return (
    <Fragment>
      {/* <div ref={ref} style={{ ...style, ...moveStyle }} {...listener}></div> */}
      <AboutHeader />
      <CompaniesContent data={componaies.brands} />
      <TechContent />
      <CompaniesContent data={componaies.global_partners} reverse="true" />
      <CompaniesContent data={componaies.local_partners} />
    </Fragment>
  );
};
