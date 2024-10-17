import  { React,useState,useEffect } from 'react'
import { Container,PostCard } from '../components'

import  appWriteService from '../appwrite/config'

function AllPost(){
    const [posts,setPosts] = useState([])

    useEffect(()=> {
        appWriteService.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])

   

    return(
        <div className='w-full py-8'>
            <Container >
                    <div className='flex flex-wrap'>
                    {posts? posts.map((post)=> (
                        <div className='p-2 w-1/4' key={post.id}>
                            <PostCard  {...post} />
                        </div>
                    )) : <div>No Post </div>}
                </div>
            </Container>
        </div>
    )

}

export default  AllPost 