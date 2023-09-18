// To-do: do not post the error message
function home(posts) {
  const title = "All posts";
  const content = /*html*/ `
    <h2>New post</h2>
    <form method="POST">
      <p>
        <label for="nickname">Nickname</label>
        <input id="nickname" name="nickname">
      </p>
      <p>
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </p>
      <button>Send</button>
    </form>
    <h2>All posts</h2>
    <ul>
      ${posts.map(postItem).join("")}
    </ul>
  `;
  return layout(title, content);
}

function postItem(post) {
  const date = new Date(post.created);
  const prettyDate = date.toLocaleString("en-GB");



  if(post.nickname=="" && post.message==""){
    return `
    <li>
      <p>- please enter a message</p>
      <p>— please enter your nickname</p>
    </li>
  `;
  }

  if(post.message==""){
    return `
    <li>
      <p>- please enter a message</p>
      <p>${sanitize(post.nickname)}</p>
    </li>
  `;
  }

  if(post.nickname==""){
    return `
    <li>
      <p>— please enter your nickname</p>
      <p>${sanitize(post.message)}</p>
    </li>
  `;
  }

  return `
    <li>
      <p>${sanitize(post.message)}</p>
      <p>—${sanitize(post.nickname)} | ${prettyDate}</p>
    </li>
  `;
}

function layout(title, content) {
  return /*html*/ `
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}

function sanitize(string){
  return string.replace(/</g, '&lt;')
}

// function validate(nickname, message){
//   let error = {};
//   if(nickname==""){
//     error["nickname"] = "please enter a nickname"
//   }
//   if(message==""){
//     error["message"] = "please enter a message"
//   }
//   return error
// }

module.exports = { home };
