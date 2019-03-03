import makeLayout from './makeLayout';

const containerForUsers = document.querySelector('.js-container');

fetch('https://tanuhaua.github.io/datas-file-json/github_users.json')
    .then(response => {
      response.json()
          .then(users => {
            users.forEach(item => {
              let fullName = item['fullName'];
              fetch(`https://api.github.com/users/${item['githubName']}`)
                  .then(response => response.json()
                      .then(gitHubInfoUser => {
                        makeLayout(containerForUsers, fullName, gitHubInfoUser['login'], gitHubInfoUser['avatar_url']);
                      }));
            });
          });
    });