import { useState } from "react"
import { useEffect, useRef } from "react"


const WYSIWYGCKEditor = (props: {initialValue?:string,onChange?:Function}) => {
    const editorRef = useRef({CKEditor:null,ClassicEditor:null})
    const [ editorLoaded, setEditorLoaded ] = useState( false )
    const { CKEditor, ClassicEditor} = editorRef.current || { 
        CKEditor:null,
        ClassicEditor:null
    }

    useEffect( () => {
        editorRef.current = {
            CKEditor: require( '@ckeditor/ckeditor5-react' ).CKEditor, //Added .CKEditor
            ClassicEditor: require( '@ckeditor/ckeditor5-build-classic' ),
        }
        setEditorLoaded( true )
    }, [] );
    
    const [data, setData] = useState(props.initialValue || '');

    return( 
        <div style={{marginBottom:40, marginTop:20}}>
            {editorLoaded ? <CKEditor
                editor={ ClassicEditor } data={data}
                onChange={ (event, editor ) => {setData(data); return props.onChange(editor.getData())}}
            /> : <p>Loading...</p>}
        </div>
        )
}

export default WYSIWYGCKEditor