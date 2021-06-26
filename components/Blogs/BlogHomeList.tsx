import { Blog , IBlog} from '@models/Blogs';
import React from 'react';
import BlogItem from './BlogHomeItem';
const BlogHomeList = (props:{blogs:IBlog[]}) => {
    return (
        <div className="blogwrapper">
            {
                props.blogs.map((x, i)=>(
                    <BlogItem title={x.title} blogImage={x.blogImage} slug={x.slug} date={x.date} />
                ))
            }
        </div>
    );
}

export default BlogHomeList;