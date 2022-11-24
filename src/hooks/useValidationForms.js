import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../hooks/useAuth';

export default function useValidationForms() {
    const { login } = useAuth()

    const questionsRegister = [
        {
            text: "Email",
            type: "email"
        },
        {
            text: "Nombre",
            type: "firstName"
        },
        {
            text: "Apellido",
            type: "lastName"
        },
        {
            text: "Fecha de nacimiento",
            type: "dateBirth"
        },
        {
            text: "Edad",
            type: "age"
        },
        {
            text: "Contraseña",
            type: "password"
        }
    ]
    const questionsLogin = [
        {
            text: "Email",
            type: "email"
        },
        {
            text: "Contraseña",
            type: "password"
        }
    ]
    const validationSchemaRegister = () => {
        return {
            email: Yup.string().required('El email es obligatorio.').email("Es necesario un email valido"),
            password: Yup.string().required("La contraseña es obligatoria"),
            firstName: Yup.string().required("El nombre es obligatorio"),
            lastName: Yup.string().required("El apellido es obligatorio"),
            age: Yup.string().required("la edad es obligatoria"),
            dateBirth: Yup.string().required("La fecha de nacimiento es obligatoria"),

        }
    }
    const validationSchemaLogin = () => {
        return {
            email: Yup.string().required('El email es obligatorio.').email("Es necesario un email valido"),
            password: Yup.string().required("La contraseña es obligatoria"),
        }
    }
    const authLogin = useFormik({
        initialValues: {
            ...questionsLogin.type,
        },
        validationSchema: Yup.object(validationSchemaLogin()),
        validateOnChange: false,
        onSubmit: (userData) => {
            login(userData)
        }
    })
    const authRegister = useFormik({
        initialValues: {
            ...questionsRegister.type
        },
        validationSchema: Yup.object(validationSchemaRegister()),
        validateOnChange: false,
        onSubmit: (userData) => {
            // login(userData)
            console.log(userData);
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

