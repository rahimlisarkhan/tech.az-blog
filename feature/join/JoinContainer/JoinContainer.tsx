import TypographyText from "../../../shared/components/Typograph"
import { JoinContent, FormContent, Field } from "./JoinContainer.styled"
import ButtonOutlined from "../../../shared/components/ButtonOutlined"
import { useSelector } from "../../../shared/hooks/useSelector"
import { useFormik } from "formik"
import { addJoin } from "../../../shared/services/MixNews"
import { toast } from "react-toastify"


export const JoinContainer = () => {

    let mode = useSelector(state => state.home.appMode)
    let formik = useFormik({
        initialValues: { first_name: "", last_name: "", email: "" },
        // validate: (values) => {

        //     if (!values.first_name || !values.last_name || !values.email) {
        //         toast.error("Zəhmət olmasa xanaları düzgün doldurun...")
        //     }
        // },
        onSubmit: (value, actions) => {
            addJoin(value)
            actions.resetForm()
        }
    })

    return (
        <JoinContent>
            <FormContent mode={mode ? "true" : ""}>
                <TypographyText font="30" color={mode ? "dark" : "green"}>
                    Bizə qoşulun
                </TypographyText>
                <form onSubmit={formik.handleSubmit}>
                    <Field label="Ad" value={formik.values.first_name} name="first_name" onChange={formik.handleChange} />
                    <Field label="Soyad" error={false} value={formik.values.last_name} name="last_name" onChange={formik.handleChange} />
                    <Field label="Email" value={formik.values.email} name="email" onChange={formik.handleChange} />
                    <ButtonOutlined type="submit" mode={mode ? "true" : ""} >
                        Göndər
                    </ButtonOutlined>
                </form>
            </FormContent>
        </JoinContent>
    )
}