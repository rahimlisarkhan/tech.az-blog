import { Fragment } from "react"
import { componaies } from "../../../utils/companies"
import AboutHeader from "../components/AboutHeader"
import CompaniesContent from "../components/CompaniesContent"
import TechContent from "../components/TechContent"
import Grow from '@mui/material/Grow';


export const AboutContainer = () => {
    return (
        <Fragment>
                <AboutHeader />
                <CompaniesContent data={componaies.brands} />
                <TechContent />
                <CompaniesContent data={componaies.global_partners} reverse="true" />
                <CompaniesContent data={componaies.local_partners} />
         
        </Fragment>
    )
}
