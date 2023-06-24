import './style.sass'
import '../../components/Input/style.sass'

export const RegistrationPage = () => {

    window.addEventListener("DOMContentLoaded", () => {
        const registrationButton = document.getElementById('registrationButton')
        registrationButton.addEventListener('click', (e) => {
            e.preventDefault
        })

        const toAuthButton = document.getElementById('toAuthButton')
        toAuthButton.addEventListener('click', (e) => {
            e.preventDefault
            const protocol = window.location.protocol
            const pathname = window.location.host
            window.location.href=`${protocol}//${pathname}/authorization`

        })
    })

    return (`<div class='registrationWrapper'>
                <div>
                    <h1>Регистрация</h1>
                </div>
                <form action="/" class='registrationFormBox' submit='false'>
                    <input type="text" name="first_name" id="first_name" required placeholder="Имя" class="input">
                    <input type="text" name="second_name" id="second_name" required placeholder="Фамилия" class="input">
                    <input type="text" name="login" id="login" required placeholder="Логин" class="input">
                    <input type="email" name="email" id="email" required placeholder="Почта" class="input">
                    <input type="text" name="password" id="password" required placeholder="Пароль" class="input">
                    <input type="tel" name="phone" id="phone" required placeholder="Телефон" class="input">
                    <button type="button" class='button' id="registrationButton">Зарегистрироваться</button>
                    <button type="button" class='secondaryButton toAuthButton' id="toAuthButton">Войти</button>
                </form>
            </div>`
            )
}
