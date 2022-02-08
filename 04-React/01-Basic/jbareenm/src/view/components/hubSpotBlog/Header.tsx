import './Header.scss';

function Header() {
    return (
        // <div className="headerConatiner">
        //     <div className="leftHeader">
        //         <img src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Logos/HubSpot%20Logo.svg" />
        //         <div className="headerMenu">
        //             <div className="menuItem">
        //                 asd
        //             </div>
        //             <div className="menuItem">
        //                 asd
        //             </div>
        //             <div className="menuItem">
        //                 asd
        //             </div>
        //             <div className="menuItem">
        //                 asd
        //             </div>
        //         </div>
        //     </div>
        //     <div className="rightHeader">

        //     </div>
        // </div>
        <div className="header">
            <div className="header__left">
                <div className="logo"></div>

                <div className="header__menu">
                    <div className="header__menu__item">
                        Blogs
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>Marketing</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                                <div className="hiddenBlock">
                                    <img src="./https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>Sales</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>Service</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>Website</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        Newsletter
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>The Hustle</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        Videos
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>HubSpot YouTube</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>HubSpot Marketing YouTube</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>My First Million YouTube</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        Podcasts
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>My First Million</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>The Shake Up</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png" />
                                    <label>Goal Digger</label>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        Resources
                        <div className="hidden">
                            <div className="blankHeader"></div>
                            <div className="hiddenData">
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png" />
                                    <label>Ebook, Guides & More</label>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                                <div className="hiddenBlock">
                                    <img src="https://blog.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Nav/Optimized/BlogMarketing_64x64.png?width=64&height=64&name=BlogMarketing_64x64.png"/>
                                        <label>Free Coursed & Certifications</label>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda, soluta iure doloremque distinctio eum nulla dolorum aliquid laboriosam maiores non ex ad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__right">
                <div className="search">
                    <img className="image" src="https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640" alt=""/>
                        <div className="hiddenSearch">
                            <div className="blankHeaderSearch"></div>
                            <div className="hiddenDataSearch">
                                <div className="hiddenBlockSearch">
                                    <input type="text" name="" id=""/>
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