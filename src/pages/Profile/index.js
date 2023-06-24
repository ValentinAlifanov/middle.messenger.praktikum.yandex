import Handlebars from 'handlebars'
import {profilePage} from "./profilePage.tmpl";
import '../../components/Button/style.sass'


const protocol = window.location.protocol
const pathname = window.location.host

const user = {
    first_name: "Валентин",
    second_name: "Алифанов",
    email: "alifanov7@yandex.ru",
    login: "alifanov",
    phone: "+79885851934",
    photo: `${protocol}//${pathname}/images/Union.svg`
}


export const ButtonChangeData = () => {
    return (Handlebars.compile(`<button type="button" class='button' onclick={{changeDataHandler}}>Изменить данные</button>`))
}

Handlebars.registerHelper("changeDataHandler", function(){
    const protocol = window.location.protocol
    const pathname = window.location.host
    return new Handlebars.SafeString(`window.location.href="${protocol}//${pathname}/changeProfile"`)
});


export const ButtonChangePassword = () => {
    return (Handlebars.compile(`<button type="button" class='button' onclick={{changePasswordHandler}}>Изменить пароль</button>`))
}

Handlebars.registerHelper("changePasswordHandler", function(){
    const protocol = window.location.protocol
    const pathname = window.location.host
    return new Handlebars.SafeString(`window.location.href="${protocol}//${pathname}/cahangePassword"`)
});

export const ButtonExitUser = () => {
    return (Handlebars.compile(`<button type="button" class='secondaryButton' onclick={{exitUserHandler}}>Выйти</button>`))
}

Handlebars.registerHelper("exitUserHandler", function(){
    const protocol = window.location.protocol
    const pathname = window.location.host
    return new Handlebars.SafeString(`window.location.href="${protocol}//${pathname}/authorization"`)
});

export const ProfilePage = () => Handlebars.compile(profilePage)({...user, buttonChangeData: ButtonChangeData(),buttonChangePassword: ButtonChangePassword(),buttonExitUser:ButtonExitUser()});
