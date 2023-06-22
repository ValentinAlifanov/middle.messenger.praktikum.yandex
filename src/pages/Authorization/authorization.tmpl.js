import "./style.sass"
import "../../components/Input/style.sass"

export const Authorization = `
 <div class='authorizationWrapper'>
    <h1>Вход</h1>
    <div>
        <form action="" >
          <div>
            <input type="text" name="login" id="login" required placeholder="Логин" class="input">
          </div>
          <div>
            <input type="text" name="password" id="password" required placeholder="Пароль" class="input">
          </div>
          <div>
            <button type="submit" class='button' onclick={{submitAuth}}>{{text}}</button>
          </div>
        </form>
    </div>
 </div>
`;
