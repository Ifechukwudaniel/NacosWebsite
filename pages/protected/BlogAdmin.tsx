
import { useState } from 'react'
import { useRouter } from 'next/router'
import CustomHeader from '@components/Header/CustomHeader'
import ProtectedTab from '@components/protected/ProtectedTab'
import ModalOverlay from '@components/ModalOverlay'
import { motion } from 'framer-motion'
import BlogAdminItem from '@components/protected/AdminBlog/BlogAdminItem'
import BlogAdminForm from '@components/protected/AdminBlog/BlogAdminForm'
import { IBlog } from '@models/Blogs'
import axios from 'axios'
import {NotificationManager} from 'react-notifications';


export default function BlogAdminPage(props:{blogs:IBlog[]}) {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [pageBlogs, setPageBlogs] = useState<IBlog[]>(props.blogs||[])
    const [open, setOpen] = useState(false)
    const [loadingText, setLoadingText] =useState("")
    

    const router = useRouter()

    const handleCreateBlog =  async (data)=>{
        try {
            setLoadingText("Creating Event")
            setLoading(true)
            console.log(data)
            await axios.post(`http://localhost:3000/api/blog/createBlog`,{...data})
            setPageBlogs([...pageBlogs, data])
            NotificationManager.success("Created Event");
            return setOpen(!open)
        } catch (error) {
            setLoading(false)
        }
    }

    const handleEditBlog= (data)=>{
        console.log(data)
    }

    return (
    <div>
        <CustomHeader/>
        <ProtectedTab/>
        <ModalOverlay onClose = {()=>setOpen(!open)} active={open} title="Add Blogs">
            <BlogAdminForm  handleClose={()=>setOpen(!open)} handleSubmit={handleCreateBlog} />
        </ModalOverlay>
        <div className="admincontentwrapper">
            <div className="emptylistnon">
                    <img src="images/images.png" loading="lazy" alt="" className="calenderimage"/>
                    <div className="nulldatatext">Upload your images to<br/>the gallery<br/></div>
                    <a href="#" className="createitembutton w-button">Upload Images</a>
            </div>
            <div className="gallarycontent">
                <div className="addimagewrapper">
                    <div className="blogadmintitlewrapper">
                        <h1 className="editadmintitle">Current Blog</h1>
                    </div>
                    <motion.a  onClick={(e)=>{e.preventDefault(), setOpen(!open)}} whileHover={{opacity:0.8}} whileTap={{scale:1.1}}  className="createitembutton addimagebutton w-button">Add Blog<br/></motion.a>
                </div>
                <div className="blogadminwrapper">
                    {
                        pageBlogs.map((x,i)=>(
                            <BlogAdminItem blogImage={x.blogImage}  _id={x._id} htmlData={x.content} title={x.title}  handleEditBlog={handleEditBlog} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>    
    )
}


export async function getServerSideProps() {
    const blogs: IBlog[] = await (await axios.get(`${process.env.URL}/api/blog`)).data
    return {
        props: {blogs},
    };
}