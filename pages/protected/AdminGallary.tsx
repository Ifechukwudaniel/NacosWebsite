import { useState } from 'react'
import { useRouter } from 'next/router'
import CustomHeader from '@components/Header/CustomHeader'
import ProtectedTab from '@components/protected/ProtectedTab'
import { motion } from 'framer-motion'
import GalleryItemAdmin from '@components/protected/AdminGallary/GalleryItem'
import ModalOverlay from '@components/ModalOverlay'
import GalleryForm from '@components/protected/AdminGallary/GalleryForm'

export default function BlogAdminPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleSubmit =()=>{
        setOpen(!open)
    }

    const handleDelete =()=>{
    
    }

    const handleEdit =()=>{
    
    }
    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
            <ModalOverlay onClose = {()=>setOpen(!open)} active={open} title="Upload image">
                <GalleryForm handleSubmit={handleSubmit}/>
            </ModalOverlay>
            <div className="admincontentwrapper">
                <div className="emptylistnon"><img src="images/images.png" loading="lazy" alt="" className="calenderimage"/>
                    <div className="nulldatatext">Upload your images to<br/>the gallery<br/></div>
                    <motion.button  whileTap={{scale:1.2}}  className="createitembutton w-button">Upload Images</motion.button>
                </div>
                <div className="gallarycontent">
                    <div className="addimagewrapper">
                        <motion.button onClick={()=>setOpen(!open)} whileHover={{opacity:0.8}} whileTap={{scale:1.1}} className="createitembutton addimagebutton w-button">Add Images</motion.button>
                    </div>
                    <div className="imagelist">
                        <GalleryItemAdmin title="Getting Scholarship Abroad" onDelete={handleDelete} onEdit={handleEdit}/>
                    </div>
                </div>
            </div>  
        </div>
        )
}
