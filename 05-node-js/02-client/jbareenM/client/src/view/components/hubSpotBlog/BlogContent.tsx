import './BlogContent.scss';

function BlogContent() {
    return (
        <div className="content">
            <div className="content__row1">
                <div className="content__box ">
                    <div className="title">
                        <h2>WEBSITE | 11 MIN READ</h2>
                        <h1>Website Footers: Best Design Practices & Examples</h1>
                        <h2>Written by Anna Fitzgerald</h2>
                    </div>
                </div>
                <div className="content__box ">
                    <img src="https://blog.hubspot.com/hubfs/marketing-plan-1.jpg" alt="" />
                </div>
            </div>
            <div className="content__row1">
                <div className="content__text">
                    <p>
                        Have you ever been unable to find what you're looking for in the main navigation of a website? Have you ever been considering a product on an e-commerce site but been unable to find the return policy? The frustration that this causes prompts some users to leave and find a site that is more transparent or intuitive.
                        This instance of user behavior is exactly why your site needs a well-designed website footer. Think of a footer as a safety net for users who haven’t been able to find the information they’re looking for in other sections of your site. By providing a link to your return policy or contact form, for example, you can prevent some visitors from leaving your ecommerce site and never returning.</p>
                </div>

            </div>
        </div>
    );
}

export default BlogContent;