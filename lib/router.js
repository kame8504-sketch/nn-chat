"use strict";
const postsHandler = require("./posts-handler");
const util = require("./handler-util");


function route(req, res) {
  switch (req.url) {
    case "/posts":
      postsHandler.handle(req, res)
      break;
    case "/posts/delete":
      postsHandler.handleDelete(req, res);
      break;
    case "/logout":
      util.handleLogout(req, res);
      break;
    case "/changeTheme":
      util.handleChangeTheme(req, res);
      break;
    case "/favicon.ico":
      util.handleFavicon(req, res);
      break;
    case "/style.css":
      util.handleStyleCssFile(req, res);
      break;
    case "/nn-chat.js":
      util.handleNnChatJsFile(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};

/*
"use strict";
const postsHandler = require("./posts-handler");
const util = require("./handler-util");

function route(req, res) {

  console.log('🚀 サーバーがリクエストを受信しました！ URL:', req.url);
  // URLからパラメーター（?以降）を無視して、純粋なパス部分だけを取り出す
  const pathname = new URL(req.url, `http://${req.headers.host}`).pathname;

  switch (pathname) { // 👈 req.url から pathname に変更
    case "/posts":
      postsHandler.handle(req, res);
      break;
    case "/posts/delete":
      postsHandler.handleDelete(req, res);
      break;
    case "/logout":
      util.handleLogout(req, res);
      break;
    default: // 👈 dafault から default に修正
      util.handleNotFound(req, res);
      break;
  }
}
*/

module.exports = {
  route
};
