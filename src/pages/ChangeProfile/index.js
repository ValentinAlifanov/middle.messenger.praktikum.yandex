import Handlebars from 'handlebars'
import {changeProfile} from "./changeProfile.tmpl";
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


export const ButtonSaveChanges = () => {
    return (Handlebars.compile(`<button type="button" class='button' onclick={{saveChanges}}>Сохранить</button>`))
}

Handlebars.registerHelper("saveChanges", function(){
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

export const ButtonChagePhoto = ({photo}) => {
    return (Handlebars.compile(`<button type="button" class="inputPhotoBox" onClick={{changePhoto}}><img align="middle" src=${photo} alt="Упс..."/></button>`)({photo}))
}

Handlebars.registerHelper("changePhoto", function(){
    return new Handlebars.SafeString(`console.log("changePhoto")`)
});

export const ChangeProfilePage = () => Handlebars.compile(changeProfile)({...user, buttonChagePhoto: ButtonChagePhoto({photo:user.photo}), buttonSaveChanges: ButtonSaveChanges(),buttonCancelChanges: ButtonCancelChanges()});
