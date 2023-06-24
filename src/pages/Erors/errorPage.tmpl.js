import "./style.sass"

export const errorPage = `
 <div class='errorPageWrapper'>
    <h1>{{errorNumber}}</h1>
    <h3>{{errorMessage}}</h3>
   <div>
       {{{button}}}
   </div>
 </div>
`;
