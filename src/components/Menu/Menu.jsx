import './Menu.css'

function Menu() {
    const subscriptions = [
        { id: 1, title: "Nadir On The Go", img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true' }, {
            id: 2, title: "Coke Studio Bangla", img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'
        },
{
    id:3, title:"MKBHD", img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true'
},
{
    id:4, title:"Figma", img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true'
},
{id:5, title:"ATC Android ToTo C...", img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true'},
{
    id:6, title:"Alux.com", img_url:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true'
}
    ]
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <a href="">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" />

                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" />
                    </a>
                </div>

                <div className="menu-cont">
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="" /><span>Home</span></div>
                    </a>
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt="" /><span>Explores</span></div>
                    </a>
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt="" /><span>Shorts</span></div></a>
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt="" /><span>Subscriptions</span>



                        </div> </a>



                        <hr className='hr'/>
                </div>
                <div className="menu-cont">
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt="" /><span>Library</span></div>
                    </a>
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt="" /><span>History</span></div>
                    </a>
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt="" /><span>Your Videos</span></div></a>
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt="" /><span>Watch later</span>


                        </div> </a>
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt="" /><span>Liked videos</span>


                        </div> </a>
                    <a href="">
                        <div className="menu-content"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt="" /><span>Show more</span>

                          
                        </div> </a>
                    <hr className='hr'/>

<div className="Subs">
   <h4>SUBSCRIPTIONS</h4>
{
    subscriptions.map((subsc)=>(
  
<div key = {subsc.id} className='subscribes'>
    <a href="">
   <img src={subsc.img_url} alt={subsc.title} />
   <p>{subsc.title}</p></a></div>
    ))
}
</div>


                </div>

            </div>




        </>
    )
}

export default Menu