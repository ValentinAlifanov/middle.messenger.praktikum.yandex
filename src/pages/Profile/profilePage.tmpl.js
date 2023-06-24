import "./style.sass"
import "../../../assets/images/Union.svg"


export const profilePage = `
 <div class='profilePageWrapper'>
    <div>
      <img src={{photo}} alt="Упс..."/>
    </div>

    <div><h1>{{first_name}} {{second_name}}</h1></div>

    <div class='profileUserDataBox'>

      <div class='dataRow'>
        <div><h3>Почта</h3></div>
        <div><h3>{{email}}</h3></div>
      </div>

      <div class='dataRow'>
        <div><h3>Логин</h3></div>
        <div><h3>{{login}}</h3></div>
      </div>

      <div class='dataRow'>
        <div><h3>Телефон</h3></div>
        <div><h3>{{phone}}</h3></div>
      </div>

    </div>

  <div class='buttonsBox'>
      {{{buttonChangeData}}}
      {{{buttonChangePassword}}}
      {{{buttonExitUser}}}
  </div>
 </div>
`;
