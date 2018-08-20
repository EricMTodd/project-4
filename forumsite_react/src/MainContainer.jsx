import React, { Component } from 'react';
import Posts from "./components/Posts/posts.jsx"
import CreatePost from "./components/CreatePost/createPost.jsx"
import EditPost from "./components/EditPost/edit.jsx"
import CreateThread from "./components/CreateThread/createThread.jsx"
import Threads from "./components/Threads/threads.jsx"
import Nav from "./components/Nav/nav.jsx"
import { Route, Switch, Link } from "react-router-dom";


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
        this.getThreads().then((response)=>{
            this.setState({
                threads: response
            })
        }).catch((err)=>{
            console.log(err)
        }); 
    }
    getThreads = async() => {
        const threads = await fetch ("http://localhost:8000/threads/", {
            method: "GET"
        });
        const threadsJson = await threads.json();
        return threadsJson
    }
    addThread = async (thread, e) =>{
        console.log("this is thread", thread)
        e.preventDefault();
        try { 
            const createThread = await fetch("http://localhost:8000/threads/", {
            //TBD to change
                method: "POST",
                body: JSON.stringify(thread),
                headers:{
                    "Content-Type": "application/json"
                }
            });
            console.log("this is created thread", createThread)
            const parsedResponse = await createThread.json();
            console.log("this is parsed response", parsedResponse)
            this.setState({threads: [...this.state.threads, parsedResponse.data]})
        } catch(err){
            console.log(err)
        }
    }
    getPosts = async() => {
        const posts = await fetch ("http://localhost:8000/posts/", {
            method: "GET"
        });
        const postsJson = await posts.json();
        return postsJson
    }
    addPost = async (post, e) =>{
        e.preventDefault();
        try { 
            const createPost = await fetch("http://localhost:8000/posts/", {
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

            const deletePost = await fetch("http://localhost:8000/posts/" + id, {
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
            const editResponse = await fetch('http://localhost:8000/posts/' + this.state.editPostId,{
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
        
        return(
            <div>
                 <Nav history={this.history} addThread={this.addThread} />
                 
                 <div>
                    <Route exact path="/home/" render ={(props) => {
                        return(
                            <div>
                                <Threads {...props} posts = {this.state.posts} deletePost={this.deletePost} showModal={this.showModal} threads = {this.state.threads} 
                                 />
                            </div>
                        )
                    }}
                    />
                    <Route exact path ="/new/" 
                    render={(props) => {
                     return (
                         <div>
                            <CreateThread {...props}
                            addThread = {this.addThread}
                            />
                         </div>
                     )
                    }}
                    />    
                {/* <CreatePost addPost={this.addPost}/>
                {this.state.showEdit ? <EditPost closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} movieToEdit={this.state.movieToEdit}/> : null} */}
                </div>
            </div>
           
        );
    }
}

export default MainContainer;

