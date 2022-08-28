// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const id = new URL(location.href).searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
        const divInfo = document.createElement("div");
        divInfo.classList.add("info");
        document.body.append(divInfo);

        recursionGetData(data);

        function recursionGetData(obg) {
            for (let prop in obg) {
                if (typeof obg[prop] === "object") {
                    recursionGetData(obg[prop]);
                } else {
                    const divParam = document.createElement("div");
                    divParam.innerText = `${prop}: ${obg[prop]}`;
                    divInfo.append(divParam);
                }
            }
        }

        const buttonViewPosts = document.createElement("button");
        buttonViewPosts.classList.add("button");
        buttonViewPosts.innerText = "Post of current user";
        document.body.append(buttonViewPosts);

        buttonViewPosts.addEventListener("click", () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then((response) => response.json())
                .then((posts) => {
                    const divForPosts = document.createElement("div");
                    divForPosts.classList.add("container");
                    document.body.append(divForPosts);

                    for (const post of posts) {
                        const postDiv = document.createElement("div");
                        postDiv.classList.add("post");
                        postDiv.innerHTML = `<div class="title">Title: ${post.title}</div> `;
                        divForPosts.append(postDiv);

                        const linkDiv = document.createElement("div");
                        linkDiv.classList.add("link");
                        linkDiv.innerHTML = `<div class="eff"></div>`;
                        postDiv.append(linkDiv);

                        const link = document.createElement("a");
                        link.href = `post-details.html?data=${JSON.stringify(post)}`;
                        link.innerText = "Post details";
                        linkDiv.append(link);
                    }
                });
            buttonViewPosts.disabled = true;
        });
    });
