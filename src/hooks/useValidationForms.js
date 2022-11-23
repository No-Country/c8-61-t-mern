import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../hooks/useAuth';

export default function useValidationForms() {
    const { login } = useAuth()

    const questionsRegister = [
        {
            text: "email",
            type: "email"
        },
        {
            text: "nombre",
            type: "firstName"
        },
        {
            text: "apellido",
            type: "lastName"
        },
        {
            text: "edad",
            type: "age"
        },
        {
            text: "fecha de nacimiento",
            type: "dateBirth"
        },
        {
            text: "contraseña",
            type: "password"
        }
    ]
    const questionsLogin = [
        {
            text: "email",
            type: "email"
        },
        {
            text: "contraseña",
            type: "password"
        }
    ]
    const validationSchema = () => {
        return {
            email: Yup.string().required('El email es obligatorio.').email("Es necesario un email valido"),
            password: Yup.string().required("La contraseña es obligatoria")
        }
    }

    const authLogin = useFormik({
        initialValues: {
            ...questionsLogin.type,
        },
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (userData) => {
            login(userData)
        }
    })
    const authRegister = useFormik({
        initialValues: {
            ...questionsRegister.type
        },
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (userData) => {
            login(userData)
        }
    })


    return (
        {
            questionsRegister,
            questionsLogin,
            authLogin,
            authRegister,
        }
    )
}

