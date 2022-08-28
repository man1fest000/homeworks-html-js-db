//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const post = JSON.parse(new URL(location.href).searchParams.get("data"));

const info = document.createElement("div");
info.classList.add("info");
document.body.append(info);

for (const postKey in post) {
    const div = document.createElement("div");
    div.innerText = `${postKey}: ${post[postKey]}`;
    info.append(div);
}

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then((comments) => {
        const mainDivComments = document.createElement("div");
        mainDivComments.classList.add("container");
        document.body.append(mainDivComments);

        for (const comment of comments) {
            const divComment = document.createElement("div");
            for (const commentKey in comment) {
                const divParam = document.createElement("div");
                divParam.innerText = `${commentKey}: ${comment[commentKey]}`;
                divComment.append(divParam);
            }
            mainDivComments.append(divComment);
        }
    });
