import { authApi } from "../../modules/auth/api/authApi";
import { checkingCredentials, login, logout, setErrorMessage } from "./authSlice";


export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}


export const startLoginWithEmailPassword = ({ email, password }) => {
    
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        try {

            const { token, errors } = await authApi('auth/login', 'POST', {email, password});

            if (!token) {
                console.log(errors);
                dispatch( setErrorMessage(errors[0].e) );
                return;
            }

            const userResponse = await authApi('auth/user', 'GET', null, token);
            const { email: emailApi, name: nameApi } = userResponse.data;


            const user = {
                status: 'authenticated',
                token: token,
                email: emailApi,
                displayName: nameApi,
                photoURL: '',
                errorMessage: null,
            }

            dispatch(login(user));

        } catch (error) {
            console.log(error);
            dispatch( setErrorMessage(error) );
        }
        
    }

}



export const startLogout = () => {
    return async( dispatch ) => {
        dispatch( logout() );
    }
}



export const startRestoreSession = () => {
    return async(dispatch) => {
        
        dispatch(checkingCredentials());

        const token = localStorage.getItem("token_portuarios");

        if (!token) {
            dispatch(logout());
            return;
        }


        try {

            const userResponse = await authApi('auth/user', 'GET', null, token);


            const { email: emailApi, name: nameApi } = userResponse.data;


            const user = {
                status: 'authenticated',
                token: token,
                email: emailApi,
                displayName: nameApi,
                photoURL: '',
                errorMessage: null,
            }

            dispatch(login(user));

            //console.log(userResponse.data);



        } catch (error) {
            console.error("Error al restaurar sesión:", error);
            dispatch(logout());
        }



    }
}
