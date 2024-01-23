const fs = require('fs');

let br = '<br>'; // #
let p = '<p>'; // *
let fp = '</p>'; // ^
let y_q = '<div class="y-q">'; // $
let m_q = '<div class="m-q">'; // @
let a_q = '<div class="a-q">'; // %
let end = '</div>'; // &
let uTag = '<u>'; // \
let u_end = '</u>'; // +

fs.readFile('../word/input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  let i = 0;
  while (i < data.length) {
    if (data[i] === '#') {
      data = changeThisFor(data, i, br);
    } else if (data[i] === '$') {
      data = changeThisFor(data, i, y_q);
    } else if (data[i] === '*') {
      data = changeThisFor(data, i, p);
    } else if (data[i] === '^') {
      data = changeThisFor(data, i, fp);
    } else if (data[i] === '@') {
      data = changeThisFor(data, i, m_q);
    } else if (data[i] === '%') {
      data = changeThisFor(data, i, a_q);
    } else if (data[i] === '\\') {
      data = changeThisFor(data, i, uTag);
    } else if (data[i] === '+') {
      data = changeThisFor(data, i, u_end);
    } else if (data[i] === '&') {
      data = changeThisFor(data, i, end);
    }
    i++;
  }
  fs.writeFile('../word/output.txt', data, (err) => {
    if (err) throw err;
    console.log('Done!');
  });
});

function changeThisFor(data, i, that) {
  let slice1 = data.slice(0, i);
  let slice2 = data.slice(i + 1, data.length);
  data = slice1 + that + slice2;
  return data;
}
