import React, { useCallback, useEffect, useState } from 'react'
import { Container,PostCard, } from '../components'
import AppWriteService  from '../appwrite/config'
function Home(){

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        AppWriteService.getPosts().then((posts)=> {
            if(posts){
                setPosts(posts.documents)
                console.log(posts)
            }
        })
    },[])

    if(posts.length ===0){
        return(
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                No  Posts Yet to Display
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return(
        <div className='w-full py-8'>

            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
            
        </div>
    )

}

export default Home