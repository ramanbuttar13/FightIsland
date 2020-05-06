import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class CreateBlog extends Component {

    state = {
        editorState: 'yes'
    }
    onEditorStateChange = (event) => {
        console.log(event.target.value)
    }

    render() {
        return(
            <div id="colorlib-main">
                <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                    <div className="container-fluid px-0">
                    <Editor
                    />
                    </div>
                </section>
            </div>
            
        )
    }
}

export default CreateBlog;