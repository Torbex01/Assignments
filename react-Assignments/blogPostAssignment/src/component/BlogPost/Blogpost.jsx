const BlogPost = (Props) =>{
    return(
        <div className={`blogCard ${Props.blogClass}`}>
            <h1>{Props.title}</h1>
            <h2>Author: {Props.author}</h2>
            <main>
            <p>{Props.content}</p>
            </main>
            <h4>{Props.date}</h4>
        </div>
    )
}
export default BlogPost