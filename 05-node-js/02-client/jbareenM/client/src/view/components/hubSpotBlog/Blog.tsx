import './Blog.scss';
import Header from './Header';
import BlogContent from './BlogContent';

function Blog(){
    return (
        <div className="container">
            <Header />
            <BlogContent />
        </div>
    );
}

export default Blog;