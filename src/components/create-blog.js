import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

class CreateBlog extends Component {
  constructor(props) {
    super(props);
    // initial html to be shown on the page
    // will be dynamic based on fetched from db or a new blog
    const html = "<p> <strong>Begin Writing you blog..</strong> </p>";
    const contentBlock = htmlToDraft(html);

    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState
      };
    }
  }
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  activateLasers = editorState => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());

    const hashtagConfig = {
      trigger: "#",
      separator: " "
    };
    const markup = draftToHtml(rawContentState, hashtagConfig);
    console.log("all the markup on save");
    console.log(markup);
    // will save in db
  };

  render() {
    const { editorState } = this.state;
    return (
      <div id="colorlib-main">
        <section
          className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
          id="about-section"
        >
          <div className="container-fluid px-0 editor-container">
            {/* toolbarOnFocus */}
            {/* toolbarHidden */}
            {/* <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            /> */}
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
          <button
            onClick={() => this.activateLasers(editorState)}
            class="btn btn-danger"
            type="default"
          >
            Submit
          </button>
        </section>
      </div>
    );
  }
}

export default CreateBlog;
