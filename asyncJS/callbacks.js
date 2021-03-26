const posts = [
    {
        title: 'Post One', body: 'This is post one'
    },
    {
        title: 'Post Two', body: 'This is post two'
    }
];

const getPosts = () => {
    setTimeout(() => {
        let output = '';

        posts.forEach((post) =>{
            output +=  `<li>${post.title}</li><p>${post.body}</p>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}
getPosts();

const createPost = (post, callback) =>{
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000)
}

createPost({title:'Post Three', body: 'This is post three'},getPosts)
