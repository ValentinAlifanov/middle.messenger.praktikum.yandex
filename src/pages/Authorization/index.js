import './style.sass'
import '../../components/Input/style.sass'

export const AuthorizationPage = () => {

    window.addEventListener("DOMContentLoaded", () => {
        const authorizationButton = document.getElementById('authorizationButton')
        authorizationButton.addEventListener('click', (e) => {
            e.preventDefault
        })

        const toRegistrationButton = document.getElementById('toRegistrationButton')
        toRegistrationButton.addEventListener('click', (e) => {
            e.preventDefault
            const protocol = window.location.protocol
            const pathname = window.location.host
            window.location.href=`${protocol}//${pathname}/registration`

        })
    })
   

    return (`<div class='authorizationWrapper'>
                <div>
                    <h1>Вход</h1>
                </div>

                <form action="/" class='authorizationFormBox' submit='false'>
                    <input type="text" name="login" id="login" required placeholder="Логин" class="input">
                    <input type="text" name="password" id="password" required placeholder="Пароль" class="input">
                    <button type="button" class='button' id="authorizationButton">Авторизоваться</button>
                    <button type="button" class='secondaryButton toRegistrationButton' id="toRegistrationButton">Нет акаунта</button>
                </form>
            </div>`
            )
}
