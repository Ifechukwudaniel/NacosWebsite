import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class EditorConvertToHTML extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        const html = props.htmlData||'<p></p>';
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            this.state = { editorState };
        }
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