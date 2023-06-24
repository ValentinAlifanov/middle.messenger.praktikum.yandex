import Handlebars from 'handlebars'
import {errorPage} from "./errorPage.tmpl.js";
import '../../components/Button/style.sass'

Handlebars.registerHelper("changeWindowsLocationHref", function(url){
    const protocol = window.location.protocol
    const pathname = window.location.host
    return new Handlebars.SafeString(`window.location.href="${protocol}//${pathname}/${url}"`)
});
export const Button = ({text}) => {
    return (Handlebars.compile(`<button type="button" class='button' onclick={{changeWindowsLocationHref ''}}>{{text}}</button>`)({text}))
}

export const Error500 = () => Handlebars.compile(errorPage)({
    errorNumber: '500',
    errorMessage: 'Мы уже фиксим',
    button: Button( {text:'Назад к чатам'})
});

export const Error404 = () => Handlebars.compile(errorPage)({
    errorNumber: '404',
    errorMessage: 'Не туда попали',
    button: Button( {text:'Назад к чатам'})
});