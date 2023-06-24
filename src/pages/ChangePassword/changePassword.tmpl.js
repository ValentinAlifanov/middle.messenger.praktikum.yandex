import "./style.sass"

export const changePassword = `
 <form class='changePasswordPageWrapper'>  
  <div class="changeDataBox">
    <div class="dataRow">
      <div><h3>Старый пароль</h3></div>
      <div>
        <input type="text" required>
      </div>
    </div>
    <div class="dataRow">
      <div><h3>Новый пароль</h3></div>
      <div>
        <input type="text" required>
      </div>
    </div>
    <div class="dataRow">
      <div><h3>Повторите новый пароль</h3></div>
      <div>
        <input type="text" required}>
      </div>
    </div>
  </div>
  <div class="changeProfileButtonsBox">
    {{{buttonChagePassword}}}
    {{{buttonCancelChanges}}}
  <div>
 </form>
`;
