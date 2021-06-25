
import { useState } from 'react'
import { useRouter } from 'next/router'
import CustomHeader from '@components/Header/CustomHeader'
import ProtectedTab from '@components/protected/ProtectedTab'
import ModalOverlay from '@components/ModalOverlay'
import { motion } from 'framer-motion'
import BlogAdminItem from '@components/protected/AdminBlog/BlogAdminItem'
import BlogAdminForm from '@components/protected/AdminBlog/BlogAdminForm'

export default function BlogAdminPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleCreateBlog= (data)=>{
        console.log(data)
        setOpen(!open)
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
                        <h1 className="editadmintitle">Current Posts</h1>
                    </div>
                    <motion.a  onClick={(e)=>{e.preventDefault(), setOpen(!open)}} whileHover={{opacity:0.8}} whileTap={{scale:1.1}}  className="createitembutton addimagebutton w-button">Add Blog<br/></motion.a>
                </div>
                <div className="blogadminwrapper">
                    <BlogAdminItem htmlData="<p>sxssaxaxx</p>" title="Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar"  handleEditBlog={handleEditBlog} />
                    <BlogAdminItem htmlData="<p>sxssaxaxx</p>" title="Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar" handleEditBlog={handleEditBlog}/>
                </div>
            </div>
        </div>
    </div>    
    )
}
