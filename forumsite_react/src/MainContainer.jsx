import React, { Component } from 'react';
import Posts from "./components/Posts/posts.jsx"
import CreatePost from "./components/CreatePost/createPost.jsx"
import EditPost from "./components/EditPost/edit.jsx"
import CreateThread from "./components/CreateThread/createThread.jsx"
import Threads from "./components/Threads/threads.jsx"


class MainContainer extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            threads: [],
            editPostId: null,
            postToEdit: {
                post_content: ''
            //to be changed
            }
        }
    }
    componentDidMount(){
        this.getPosts().then((response)=>{
            this.setState({
                posts: response
            })
        }).catch((err)=>{
            console.log(err)
        }); 
        console.log("this.state:", this.state)
        this.getThreads().then((response)=>{
            console.log("response:", response)
            this.setState({
                threads: response
            })
        }).catch((err)=>{
            console.log(err)
        }); 
        console.log("this.state:", this.state)
    }
    getThreads = async() => {
        const threads = await fetch ("http://localhost:8000/threads", {
            method: "GET"
        });
        console.log("threads:", threads)
        const threadsJson = await threads.json();
        console.log("threadsJson:", threadsJson)
        return threadsJson
    }
    addThread = async (thread, e) =>{
        console.log(thread, "this is thread")
        e.preventDefault();
        try { 
            const createThread = await fetch("http://localhost:8000/threads", {
            //TBD to change
                method: "POST",
                body: JSON.stringify(thread),
                headers:{
                    "Content-Type": "application/json"
                }
            });
            const parsedResponse = await createThread.json();
            this.setState({threads: [...this.state.threads, parsedResponse.data]})
        } catch(err){
            console.log(err)
        }
    }
    getPosts = async() => {
        const posts = await fetch ("http://localhost:8000/posts", {
            method: "GET"
        });
        const postsJson = await posts.json();
        console.log("postsJson:", postsJson)
        return postsJson
    }
    addPost = async (post, e) =>{
        console.log(post, "this is post")
        e.preventDefault();
        try { 
            const createPost = await fetch("http://localhost:8000/posts", {
            //TBD to change
                method: "POST",
                body: JSON.stringify(post),
                headers:{
                    "Content-Type": "application/json"
                }
            });
            const parsedResponse = await createPost.json();
            this.setState({posts: [...this.state.posts, parsedResponse.data]})
        } catch(err){
            console.log(err)
        }
    }
    deletePost = async (id, e) => {
        e.preventDefault();
        console.log(id, "this is deletPost id");
        
        try { 

            const deletePost = await fetch("http://localhost:8000/posts" + id, {
                //TBD to change
                method: 'DELETE'
            });

            const parsedResponse = await deletePost.json();

            if(parsedResponse.status === 200){
                this.setState({posts: this.state.posts.filter((posts,i) => posts.id !== id)});
            } else {
                console.log("There is a problem with delete")
            }
        } catch(err) {
            console.log(err)
        }
    }
    showModal =(id, e) => {
        const postToEdit = this.state.posts.find((post) => post.id === id);
        console.log(postToEdit, "postToEdit")
        this.setState({
            showEdit: true,
            editPostId: id,
            postToEdit: postToEdit
        }); 
    }
    closeAndEdit = async (e) => {
        e.preventDefault();
        try{
            const editResponse = await fetch('http://localhost:8000/posts' + this.state.editPostId,{
                //^^^^ to be changed
                method: "PUT",
                body: JSON.stringify(this.state.postToEdit),
                headers:{
                    "Content-Type":"application/json"
                }
            });

            const parsedResponse = await editResponse.json();

            const editedPostArray = this.state.posts.map((post) => {
                if(post.id === this.state.editPostId){
                    post.post_content = parsedResponse.data.description;
                    //^^^to be changed
                }
                return post
            });

            this.setState({
                posts: editedPostArray,
                showEdit: false
            });

        }catch(err){
            console.log(err);
        }   
    }
    handleFormChange = (e) => {
        this.setState({
          postToEdit: {
            ...this.state.postToEdit,
            [e.target.name]: e.target.value
          }
        });
    }
    render(){
        console.log("this.state:", this.state)
        return(
            <div>
                <Posts posts = {this.state.posts} deletePost={this.deletePost} showModal={this.showModal}/>
                <CreatePost addPost={this.addPost}/>
                {this.state.showEdit ? <EditPost closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} movieToEdit={this.state.movieToEdit}/> : null}
                <Threads threads = {this.state.threads}/>
                <CreateThread addThread={this.addThread}/>
            </div>
        );
    }
}

export default MainContainer;

