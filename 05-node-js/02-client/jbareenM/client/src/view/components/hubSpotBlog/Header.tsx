import './Header.scss';

interface headerItem {
    imgUrl: string;
    label: string;
    content: string;
}

const blogsValues: Array<headerItem> = [
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "Marketing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    },
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "Sales",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    },
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "Marketing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    },
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "Website",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    }
];
const newSletterValues: Array<headerItem> = [
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "Marketing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    }
];

const Videos: Array<headerItem> = [
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "HubSpot YouTube",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    },
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "HubSpot Marketing YouTube",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    },
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "My First Million YouTube",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    }
];

const Podcasts: Array<headerItem> = [
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "My First Million",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    },
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "The Shake Up",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    },
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "Goal Digger",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    }
];

const Resources: Array<headerItem> = [
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "Ebook, Guides & More",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    },
    {
        imgUrl: "https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png",
        label: "Free Coursed & Certifications",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe nemo consectetur laudantium accusamus quod fugiat, nihil provident ea repellendus, laborum quibusdam voluptates eos quo sit voluptatibus asperiores praesentium eum!"
    }
];

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="logo"></div>

                <div className="header__menu">
                    <div className="header__menu__item">
                        Blogs
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                {blogsValues.map((element, index) => {
                                    return (
                                        <div className="hiddenBlock">
                                            <img src={element.imgUrl} />
                                            <label>{element.label}</label>
                                            <p>{element.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        Newsletter
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                {newSletterValues.map((element, index) => {
                                    return (
                                        <div className="hiddenBlock">
                                            <img src={element.imgUrl} />
                                            <label>{element.label}</label>
                                            <p>{element.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        Videos
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                {Videos.map((element, index) => {
                                    return (
                                        <div className="hiddenBlock">
                                            <img src={element.imgUrl} />
                                            <label>{element.label}</label>
                                            <p>{element.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        Podcasts
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                {Podcasts.map((element, index) => {
                                    return (
                                        <div className="hiddenBlock">
                                            <img src={element.imgUrl} />
                                            <label>{element.label}</label>
                                            <p>{element.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        Resources
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                {Resources.map((element, index) => {
                                    return (
                                        <div className="hiddenBlock">
                                            <img src={element.imgUrl} />
                                            <label>{element.label}</label>
                                            <p>{element.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__right">
                <div className="search">
                    <img className="image" src="https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640" alt="" />
                    <div className="hiddenSearch">
                        <div className="blankHeaderSearch"></div>
                        <div className="hiddenDataSearch">
                            <div className="hiddenBlockSearch">
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__menu__item">
                    HubSpot Products
                    <div className="hidden">
                        <div className="blankHeader"></div>
                        <div className="hiddenData">
                            <div className="hiddenBlock">
                                <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png" />
                                <label>Ebook, Guides & More</label>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                            </div>
                            <div className="hiddenBlock">
                                <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png" />
                                <label>Free Coursed & Certifications</label>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;