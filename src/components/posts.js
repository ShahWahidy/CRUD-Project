import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';



function UserPosts( { userId }) {
    
    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState([])

    const toggle = () => setModal(value => !value);

    const toggleModal = (e) => {
        e.preventDefault()
        toggle();
        fetchPosts()

    }
    const fetchPosts = () => {
        //console.log(userId);
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => {
            // console.log('after promise', res.data);
            setPosts(res.data);
            console.log('after setPosts', posts);
            })
            .catch(err => {
                console.log(err);
            })
    }
    


    return (
        <div>
            <Button color="primary" onClick={toggleModal}>
                Get Posts
            </Button>
            <Modal isOpen={modal} fade={false} toggle={toggle}>
                <ModalHeader toggle={toggle}>Posts</ModalHeader>
                <ModalBody>
                    {
                        posts.map((post, id) => {
                            return (<div>
                                <h5>{posts[id].title}</h5>
                                <h6>{posts[id].body}</h6>
                            </div>
                            )
                        })
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UserPosts;