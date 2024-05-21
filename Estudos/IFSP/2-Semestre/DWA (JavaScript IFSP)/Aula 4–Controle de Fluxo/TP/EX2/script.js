const cont = 6;
const tab = document.getElementById('tab')
for (let c=1; c<=cont; c++){
    let tab_row = document.createElement('tr');
    tab_row.innerHTML = `
    <td>${c}</td>
    <td>${10*c}</td>
    <td>${100*c}</td>
    <td>${1000*c}</td>
  </tr>`;
    tab.appendChild(tab_row);
}