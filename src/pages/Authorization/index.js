import Handlebars from 'handlebars'
import {Authorization} from "./authorization.tmpl.js";
import '../../components/Button/style.sass'


Handlebars.registerHelper("submitAuth", function(){
    console.log('===>submitAuth')
    // const protocol = window.location.protocol
    // const pathname = window.location.host
    // return new Handlebars.SafeString(`window.location.href="${protocol}//${pathname}/${url}"`)
});

export const ButtonAuthorization = ({text}) => {
    return (Handlebars.compile(`<button type="submit" class='button' onclick={{submitAuth}}>{{text}}</button>`)({text}))
}


export const AuthorizationPage = () => Handlebars.compile(Authorization)({
    button: ButtonAuthorization( {text:'Назад к чатам'})
});
