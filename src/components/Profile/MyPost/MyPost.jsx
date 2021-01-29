import React from 'react'
import s from './MyPost.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Element} from "../../common/FormControl/FormControl";

const MyPost = React.memo(props => {
    console.log("render")
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let OnAddPost = (values) => {
        props.addPost(values.addNewPostForm);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={OnAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);
const Textarea = Element("textarea")
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="addNewPostForm" component={Textarea} validate={[required, maxLength10]}
                   placeholder={"Add new post"}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "AddNewPostForm"})(AddNewPostForm);

export default MyPost;