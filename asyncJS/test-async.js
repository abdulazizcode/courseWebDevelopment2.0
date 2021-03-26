const posts = [
    {title: 'Zero One', body: 'First Zero'},
    {title: 'Title One', body: 'First Post'},
    {title: 'Title Second', body: 'Second Post'}
];

const getPosts  = () =>{
    let outputs = '';
    setTimeout(() => {
        posts.forEach(el => {
            outputs += `
            <li>${el.title}</li>
            <p>${el.body}</p>
            `
        });

        document.body.innerHTML = outputs;
    },1000)
};
getPosts();


const createPost = (post, callback) =>{
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
};

createPost({title:'Title Third', body: 'Third Body'},getPosts);
