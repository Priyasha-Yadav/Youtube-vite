import './Top.css'

function Top() {
    const categories = [
        { title: 'All' },
        { title: 'Cook Studio' },
        { title: 'UX' },
        { title: 'Case Study' },
        { title: 'Music' },
        { title: 'Bangla Lofi' },
        { title: 'Tour' },
        { title: 'Saintmartin' },
        { title: 'Tech' },
        { title: 'iPhone 13' },
        { title: 'User Interface Design' },
        { title: 'Comput' }
    ];

    return (
        <>
        <div>
            <div className="top">
                <div className="search">
                    <input type="text" placeholder='Search' />
                    <div className="search-icon">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="search icon" />
                    </div>
                    <div className="mic">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="mic icon" />
                    </div>  
                </div>
                <div className="user">
                    <a href="#"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="create icon" /></a>
                    <a href="#"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="more icon" /></a>
                    <a href="#"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="notification bell" /></a>
                    <a href="#"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true" alt="user profile" /></a>
                </div>
            </div>
            <hr />
            <div className="recommended">
                <div className="categories">
                    {categories.map((category, index) => (
                        <div key={index} className="category-item">
                            {category.title}
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            </div>
        </>
    )
}

export default Top;
