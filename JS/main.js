let elList = document.querySelector('.list');

const  renderPost = (post) => {
  let elItem = document.createElement('li');

    let card  = ` 
    <div class="card mb-3 justify-content-center text-bg-primary">

    <div class="row g-0 ps-3 py-3">
        <div class="col-md-auto" >
          <img src="https://picsum.photos/id/9/70" class="img-fluid" style="border-radius: 50%; ;" alt="user photo">
      </div>
      <div class="col-md-auto">
        <div class="card-body py-0 pt-2">
          <h5 class="card-title">${post.name}</h5>
          <p class="card-text">${'@' + post.username}</p>
          <p class="card-text">${post.email}</p>
          <p class="card-text">${post.phone}</p>
          <p class="card-text">${post.website}</p>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title ">${post.title}</h5>
      <p class="card-text mb-2">${post.body}</p>
      <div>
      <p class="mb-0">
      <button 
        class="btn btn-primary btn-success"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${post.id}"
        aria-expanded="false"
        aria-controls="collapseExample"
        id=""
        >
        Comments
      </button>
      </p>
      <div class="collapse" id="${post.id}">
        <div class="card-body card-title comments">
          </div>
        </div>
      </div>
    </div>
    </div>
  `
  elItem.innerHTML = card;
  elList.appendChild(elItem);
}
  
  const main = (posts, limit = posts.length) => {
    for (let i = 0; i < limit; i++) {
      let elComment = document.createElement('div');
      let postObj = {
        "id": posts[i].id,
        "name": posts[i].user.name,
        "username": posts[i].user.username,
        "email": posts[i].user.email,
        "phone": posts[i].user.phone,
        "website": posts[i].user.website,
        "title": posts[i].title,
        "body": posts[i].body,
        "comments": posts[i].comments,
      }
      let comment = posts[i].comments;
      let sumComment = '';
      for (let j = 0; j < comment.length; j++) {
          let objName = {
            "commentName": comment[j].name,
          }
          let ObjBody = {
            "commentBody": comment[j].body
          }
          sumComment += `<h5 class="title">` + objName.commentName + `</h5><hr class="m-0"><p class="mb-0">` + ObjBody.commentBody + `</p><br>`;
        }
        renderPost(postObj);
        elComment.innerHTML = sumComment;
        elList.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.appendChild(elComment);


        }
      }

      main (posts, 5)