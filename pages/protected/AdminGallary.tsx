import { useState } from 'react'
import { useRouter } from 'next/router'
import CustomHeader from '@components/Header/CustomHeader'
import ProtectedTab from '@components/protected/ProtectedTab'
import { motion } from 'framer-motion'
import GalleryItemAdmin from '@components/protected/AdminGallary/GalleryItem'

export default function BlogAdminPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    
    

    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
            <div className="admincontentwrapper">
                <div className="emptylistnon"><img src="images/images.png" loading="lazy" alt="" className="calenderimage"/>
                    <div className="nulldatatext">Upload your images to<br/>the gallery<br/></div>
                    <motion.button whileHover={{background:'red'}} whileTap={{scale:1.2}}  className="createitembutton w-button">Upload Images</motion.button>
                </div>
                <div className="gallarycontent">
                    <div className="addimagewrapper">
                        <motion.button whileHover={{opacity:0.8}} whileTap={{scale:1.1}} className="createitembutton addimagebutton w-button">Add Images</motion.button>
                    </div>
                    <div className="imagelist">
                        <GalleryItemAdmin/>
                    </div>
                </div>
            </div>  
        </div>
        )
}
