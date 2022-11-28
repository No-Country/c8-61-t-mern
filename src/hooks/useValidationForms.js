import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
export default function useValidationForms() {
    const navigation = useNavigation();

    // LOGIN
    const { login } = useAuth()
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


    // REGISTER
    const { register } = useAuth()
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
    const validationSchemaRegister = () => {
        return {
            email: Yup.string().required('El email es obligatorio.').email("Es necesario un email valido"),
            password: Yup.string().required("La contraseña es obligatoria"),
            firstName: Yup.string().required("El nombre es obligatorio"),
            lastName: Yup.string().required("El apellido es obligatorio"),
            age: Yup.string().required("La edad es obligatoria"),
            dateBirth: Yup.string().required("La fecha de nacimiento es obligatoria"),

        }
    }
    const authRegister = useFormik({
        initialValues: {
            ...questionsRegister.type
        },
        validationSchema: Yup.object(validationSchemaRegister()),
        validateOnChange: false,
        onSubmit: (userData) => {
            register(userData)
        }
    })



    // RECOVERY PASSWORD
    const questionsRecoverPassword = [
        {
            text: "Email",
            type: "email"
        }
    ]
    const validationSchemaRecoverPassword = () => {
        return {
            email: Yup.string().required('El email es obligatorio.').email("Es necesario un email valido")
        }
    }
    const authRecoverPassword = useFormik({
        initialValues: {
            ...questionsRecoverPassword.type,
        },
        validationSchema: Yup.object(validationSchemaRecoverPassword()),
        validateOnChange: false,
        onSubmit: (userData) => {
            // login(userData)
            console.log(userData);
            navigation.navigate("LoginScreen")
            alert(`Correo de recuperacion enviado a ${userData.email}`)

        }
    })



    return (
        {
            questionsRegister,
            questionsLogin,
            questionsRecoverPassword,

            authLogin,
            authRegister,
            authRecoverPassword
        }
    )
}

