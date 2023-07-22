import { useState } from "react";

export function TwitterFollowCard(
        {
            name = "Twitter",
            userName = "Twitter",
            formatUserName = (userName: string) => userName,
            initialIsFollowing = false,
            children
        } : {
            name? : string ,
            userName?: string, 
            formatUserName?: (userName: string) => string,
            initialIsFollowing?: boolean,
            children?: React.ReactNode
        })    
    {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const followButtonText = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassname = isFollowing ? "md-twitter-card-followButton is-following" : "md-twitter-card-followButton";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    
    return (
        <article className="md-twitter-card">

        <header className="md-twitter-card-header">
            <img
                className="md-twitter-card-avatar"
                src={`https://unavatar.io/twitter/${userName}`}
                alt={`Avatar de ${name}`}
            />
            <div className="md-twitter-card-info">
            <strong>{name}{children}</strong>
            <span className="md-twitter-card-info-userName">{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button
                className={buttonClassname}
                onClick={handleClick}
            >
                <span className="md-twitter-card-info-followState">{followButtonText}</span>
                <span className="md-twitter-card-info-stopFollow">Dejar de Seguir</span>
            </button>
        </aside>

        </article>
    )
}