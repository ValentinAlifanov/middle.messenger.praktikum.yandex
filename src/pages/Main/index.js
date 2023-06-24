import Handlebars from 'handlebars'
import {main} from "./main.tmpl";
import '../../components/Button/style.sass'

const protocol = window.location.protocol
const pathname = window.location.host

export const ButtonOpenProfilePage = () => {
    return (Handlebars.compile(`<button type="button" class='secondaryButton profileButton' onclick={{openProfilePage}}>Профиль</button>`))
}

Handlebars.registerHelper("openProfilePage", function(){
    return new Handlebars.SafeString(`window.location.href="${protocol}//${pathname}/profile"`)
});

export const MainPage = () => Handlebars.compile(main)({buttonOpenProfilePage: ButtonOpenProfilePage(),});
