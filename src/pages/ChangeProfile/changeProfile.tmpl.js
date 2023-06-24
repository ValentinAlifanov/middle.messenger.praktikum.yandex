import "./style.sass"

export const changeProfile = `
 <div class='changeProfilePageWrapper'>
  <div class=inputPhotoBox>
    {{{buttonChagePhoto}}}
  </div>
  
  <div class="changeDataBox">
    <div class="dataRow">
      <div><h3>Имя</h3></div>
      <div>
        <input type="text" value={{first_name}}>
      </div>
    </div>
    <div class="dataRow">
      <div><h3>Фамилия</h3></div>
      <div>
        <input type="text" value={{second_name}}>
      </div>
    </div>
    <div class="dataRow">
      <div><h3>Логин</h3></div>
      <div>
        <input type="text" value={{login}}>
      </div>
    </div>
    <div class="dataRow">
      <div><h3>Почта</h3></div>
      <div>
        <input type="text" value={{email}}>
      </div>
    </div>
    <div class="dataRow">
      <div><h3>Телефон</h3></div>
      <div>
        <input type="text" value={{phone}}>
      </div>
    </div>
  </div>

  <div class="changeProfileButtonsBox">
    {{{buttonSaveChanges}}}
    {{{buttonCancelChanges}}}
  <div>
 </div>
`;
