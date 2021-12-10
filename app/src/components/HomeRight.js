import React from 'react'

function HomeRight() {
    return (
        <div className="home_right">
            <div className="follow__card">
                <div className="follow__header">
                    <h3>Add to your feed</h3>
                    <img src="/img/feed-icon.svg" alt="" />
                </div>

                <ul className="follow__body">
                    <li>
                        <img src="/img/hastag.svg" alt="" />
                        <div className="follow__btn">
                            <span>#Linkedin</span>
                            <a>Follow</a>
                        </div>
                    </li>

                    <li>
                        <img src="/img/hastag.svg" alt="" />
                        <div className="follow__btn">
                            <span>#Linkedin</span>
                            <a>Follow</a>
                        </div>
                    </li>

                    <li><a>View all recommendations <img src="/img/right-icon.svg" /></a></li>
                </ul>
            </div>

                <div className="job__img">
                    <img src="/img/jobs.jpg" alt="" />
                </div>
        </div>
    )
}

export default HomeRight
