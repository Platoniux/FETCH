const makeLayout = (box, userName, nick, imgSrc) => {
  let userNameBox = document.createElement('div');
  let nickBox = document.createElement('div');
  let imgBox = document.createElement('div');
  let img = document.createElement('img');

  userNameBox.className = 'container__name';
  userNameBox.textContent = userName;
  nickBox.className = 'container__name';
  nickBox.textContent = nick;

  img.src = imgSrc;
  imgBox.className = 'container__ava'
  imgBox.appendChild(img);

  box.appendChild(userNameBox);
  box.appendChild(nickBox);
  box.appendChild(imgBox);

};

export default makeLayout;