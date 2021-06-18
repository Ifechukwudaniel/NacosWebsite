import React, { Fragment } from 'react';
import HeaderLink from './HeaderLink';


const HeaderLinksList = () => {
    return (
        <Fragment>
            <HeaderLink href="/" text="Home" />
            <HeaderLink href="/profile" text="Profile" />
            <HeaderLink href="/payDues" text="Pay Dues" />
            <HeaderLink href="/store" text="Store" />
            <HeaderLink href="/election" text="Election"/>
            <HeaderLink  href="/event" text="Events" />
            <HeaderLink href="/blogs" text="Blogs" />
            <HeaderLink href="/gallery" text="Gallery" />
            <HeaderLink href="/login" text="Login" />
        </Fragment>
    );
}

export default HeaderLinksList;
