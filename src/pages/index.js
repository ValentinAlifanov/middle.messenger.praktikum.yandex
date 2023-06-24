import {Error404, Error500} from "./Erors/index.js";
import {AuthorizationPage} from "./Authorization/index.js";
import {RegistrationPage} from "./Registration/index.js"
import {MainPage} from "./Main//index.js"
import {ProfilePage} from "./Profile/index.js"
import {ChangeProfilePage} from "./ChangeProfile/index.js"
import {ChangePasswordPage} from "./ChangePassword/index.js"

document.addEventListener('DOMContentLoaded', () => {

    const app = document.querySelector('#app');
    function getPage() {
        switch (window.location.pathname) {
            case '/':
                return MainPage()
            case '/error500':
                return Error500()
            case '/error404':
                return Error404()
            case '/authorization':
                return AuthorizationPage()
            case '/registration':
                return RegistrationPage()
            case '/profile':
                return ProfilePage()
            case '/changeProfile':
                return ChangeProfilePage()
            case '/changePassword':
                return ChangePasswordPage()    

            default:
                return Error404()
        }
    }
    app.innerHTML = getPage()
})

