import Handlebars from 'handlebars'
import {changePassword} from "./changePassword.tmpl";
import '../../components/Button/style.sass'

export const ButtonChagePassword = () => {
    return (Handlebars.compile(`<button type="button" class='button' onclick={{saveNewPassword}}>Сохранить</button>`))
}

Handlebars.registerHelper("saveNewPassword", function(){
    const protocol = window.location.protocol
    const pathname = window.location.host
    return new Handlebars.SafeString(`window.location.href="${protocol}//${pathname}/profile"`)
});

export const ButtonCancelChanges = () => {
    return (Handlebars.compile(`<button type="button" class='secondaryButton' onclick={{cancelChanges}}>Назад</button>`))
}

Handlebars.registerHelper("cancelChanges", function(){
    const protocol = window.location.protocol
    const pathname = window.location.host
    return new Handlebars.SafeString(`window.location.href="${protocol}//${pathname}/profile"`)
});

export const ChangePasswordPage = () => Handlebars.compile(changePassword)({buttonChagePassword: ButtonChagePassword(), buttonCancelChanges: ButtonCancelChanges()});
