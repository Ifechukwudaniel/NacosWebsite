import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



interface IEditorConvertToHTML {
    htmlData?: string;
    handleChange?: Function;
    img?: string;
    instructions?: string;
}

interface IRecipeState {
}
class EditorConvertToHTML extends Component <IEditorConvertToHTML> {
    state:{
        editorState:any,
        editor:false
    }

    onEditorStateChange: Function = (editorState) => {
        this.setState({editorState});
        this.props.handleChange(editorState);
    };

    render() {
        const { editorState } = this.state;
        return (
        <div  style={{background:"#fff", marginBottom:30}}>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
            />
        </div>
        );
    }
}

export default EditorConvertToHTML;