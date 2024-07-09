console.log('Project 5');
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div id="color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' '?'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table></div>`;
});

//'click' will take mouse pad tap also but keydown only take keys.
//taking all these inside div is a good practice.