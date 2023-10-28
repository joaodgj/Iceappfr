import { useState, useEffect } from "react"
import { View, Text } from "react-native"
import PostsStyle from "./style"

import { Post } from "../"

const Posts = (props) => {
    const { data } = props
    const { postsWrapper, postsButton, createPostsWrapper, buttonsWrapper } = PostsStyle

    const [posts, setPosts] = useState([])

    useEffect(() => {
      if (data) setPosts(data)
    }, [data])
    

    return (
        <View style={postsWrapper}>
            { posts.map((post, index) => {
                return (
                    <Post key={index} data={post} />
                )
            })}
        </View>
    )
};

export default Posts;
