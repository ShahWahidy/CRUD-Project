import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

import postData from '../dumyPosts';

function UserPosts () {
    //console.log('userPosts', postData)
    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState(postData)

    useEffect(() => {
        const fetchPosts = () => {
          axios.get(`https://jsonplaceholder.typicode.com/posts?userId=1`)
          .then(res => {
            // console.log('after promise', res.data);
            setPosts(res.data);
            console.log('after setPosts', posts);
          })
          .catch(err => {
            console.log(err);
          })
        }
        fetchPosts();
    }, [])

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Get Posts
            </Button>
            <Modal isOpen={modal} fade={false} toggle={toggle}>
                <ModalHeader toggle={toggle}>Posts</ModalHeader>
                <ModalBody>
                    {
                        posts.map((post,  id) => {
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