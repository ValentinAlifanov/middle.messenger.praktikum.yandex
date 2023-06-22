import {Error404, Error500} from "./Erors/index.js";
import {AuthorizationPage} from "./Authorization/index.js";
document.addEventListener('DOMContentLoaded', () => {

    const app = document.querySelector('#app');
    function getPage() {
        switch (window.location.pathname) {
            case '/':
                return Error500()
            case '/error500':
                return Error500()
            case '/error404':
                return Error404()
            case '/authorization':
                return AuthorizationPage()
            default:
                return Error404()
        }
    }

    app.innerHTML = getPage()
})

