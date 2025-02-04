import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'

function New() {

    const [neew, setNeew] = useState([]);

    const slicenew = neew.slice(0, 8)

    useEffect(() => {
        axios(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQWRQRE5VOWRmTjhWcFcyMWYzVUhpb1U3eFBCNEViVlZAkSnJ2UURCNFd1YzhuLS11OE81RTBSYW9ZAQzFNNm1uWFd1WkdJV2NVdlVfT1pya0xtWFhXVHNUMWZAlaUpHdlU5ZA2c2YW9TVlZARbWxkYUJBZAHBxdGw0c2MZD`)
            .then(({ data }) => setNeew(data.data))
    }, [])

    const videos = slicenew.filter(element => element.media_type === 'VIDEO');
    return (
        <div className='new'>
            <div className="container">

                
            {/* <h1 className="new__title">Наш зал</h1> */}

            <div className="new__form">
                {videos.map((item, idx) => {
                    return (

                        <div className="new__form-videos">
                            <video src={item.media_url} className='new__form-videos-video' controls />
                        </div>
                    )
                })}
            </div>
            

            </div>
        </div>
    )
}

export default New
