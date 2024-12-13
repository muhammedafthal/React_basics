function Blog(props) {
    const Content = props.Post.map((post) => {
        return <Post key={post.id} post={post} />
    });
    return <div>{Content}</div>
}

function Post(props) {
    const {id, title, content } = props.post
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    );
};

export default Blog;