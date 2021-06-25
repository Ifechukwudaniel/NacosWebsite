import getBase64 from '@utils/getBase64';
import React from 'react';
import { useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props) => {
    if (props.isDragAccept) return '#00e676';
    if (props.isDragReject) return '#ff1744';
    if (props.isDragActive) return '#2196f3';
    return '#eeeeee';
}

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
`;

const FileList = styled.div`
    border-width: 2px;
    border-radius: 1px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    transition: border .24s ease-in-out;
    margin-bottom:70px;
`



const Thumb = styled.div`
    display: inline-flex;
    borderRadius: 2;
    border: 1px solid #eaeaea;
    marginBottom: 8;
    marginRight: 8;
    width: 100;
    height: 100;
    padding: 4;
    boxSizing: border-box;
`;


const ThumbInner = styled.div`
    display: flex;
    minWidth: 0;
    overflow: hidden;
`;

const img = {
    display: 'block',
    height:200,
    width:200
};


export default function PreviewUpload(props:{onImageUpload:Function, nonImage?:boolean, file?:Boolean }) {
    const [files, setFiles] = useState([]);
    const {
    isDragAccept, getInputProps, getRootProps, isDragActive, isDragReject
    } = useDropzone({
        accept: !props.nonImage ? 'image/*' :"",
        onDrop: acceptedFiles => {

            setFiles(acceptedFiles.map(file => Object.assign(file, {preview: URL.createObjectURL(file)})));
            getBase64(acceptedFiles[0],(data)=>{
               props.file? props.onImageUpload(data,acceptedFiles[0]) : props.onImageUpload(data)
            })
        }
    });

    const thumbs = files.map(file => (
        <Thumb  key={file.name}>
            <ThumbInner>
            <img src={file.preview}style={img}/>
            </ThumbInner>
        </Thumb>
    ))

    const filesList = files.map(file => (
        <li key={file.path}>
        {file.path}
        </li>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className="container">
            {
                !props.nonImage&&(
                    <aside>
                        {thumbs}
                    </aside> 
                )
            }
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </Container>   
            {
                props.nonImage && (
                    <FileList>
                        <h4>Files</h4>
                        <ul>{filesList}</ul>
                    </FileList>
                )
            }    
        </div>
    );
}
