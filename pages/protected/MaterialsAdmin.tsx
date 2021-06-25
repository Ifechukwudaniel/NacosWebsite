import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/router'
import CustomHeader from '@components/Header/CustomHeader'
import ProtectedTab from '@components/protected/ProtectedTab'
import AdminMaterialItem from '@components/protected/AdminMaterial/AdminMaterialItem'
import { Material, IMaterial } from '@models/Material'
import axios from 'axios'
import ModalOverlay from '@components/ModalOverlay'
import MaterialForm from '@components/protected/AdminMaterial/MaterialForm'
import {NotificationManager} from 'react-notifications';

export default function MaterialAdminPage(props:{materials: IMaterial[]}) {
    const [pageMaterial,setPageMaterial] = useState(props.materials)
    const [ loadingText, setLoadingText] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleCreate =  async (data)=>{
        try {
            setLoadingText("Creating Material")
            setLoading(true)
            data.fileLink ="nsnx"
            await axios.post(`http://localhost:3000/api/material/createMaterial`,{
                title:data.title, base64File:data.file,fileLink:"jjj"
            })
            setPageMaterial([...pageMaterial, data])
            NotificationManager.success("Created Event");
            return setOpen(!open)
        } catch (error) {
            setLoading(false)
        }
    }

    const handleDelete = async (id)=>{
        try {
            setLoadingText("Deleting Material"), setLoading(true)
            await axios.post(`http://localhost:3000/api/material/delete`,{id})
            setPageMaterial(pageMaterial.filter(x=>x._id!==id))
            return NotificationManager.success("Deleted Material");
        } catch (error) {
            setLoading(false)
        }
    }
    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
            <ModalOverlay onClose = {()=>setOpen(!open)} active={open} title="Add Materials">
                <MaterialForm handleSubmit={handleCreate} />
            </ModalOverlay>
            <div className="duescontent">
                <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="serchduesform">
                        <input type="text" className="searchrecods w-input"  name="records" data-name="records" placeholder="Search records" id="records"/>
                        <motion.div   whileTap={{scale:0.9}} className="searchrecods icon"><img src="/images/search.png" loading="lazy" width="16" alt="" className="searchiocn"/></motion.div>
                    </form>
                </div>
                <div style={{width:'80%', margin:"auto"}} className="addimagewrapper">
                    <div className="blogadmintitlewrapper">
                        <h1 className="editadmintitle">Current Materials</h1>
                    </div>
                    <motion.a  onClick={(e)=>{e.preventDefault(), setOpen(!open)}} whileHover={{opacity:0.8}} whileTap={{scale:1.1}}  className="createitembutton addimagebutton w-button">Add Material's<br/></motion.a>
                </div>
            </div>
            <div className="materiallistwrapper">
                <div className="materiallist">
                    {
                        pageMaterial.map((x,i)=>(
                            <AdminMaterialItem onDelete={handleDelete} key={i} _id={x._id}  {...x}/>
                        ))
                    }
                </div>
            </div>
        </div> 
    )
}

export async function getStaticProps() {
        const materials: IMaterial[] = await (await axios(`${process.env.URL}/api/material`)).data
        return {
            props: {materials},
        };
}
