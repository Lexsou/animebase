import React from 'react'

function Sidebar({topAnime}) {
  return (
    <div>
        <aside>
            <nav>
                <h3>
                    Top Anime
                    {topAnime.map(anime => (
                      <a href={anime.url} target='_blank' key={anime.mal_id}> {anime.title} </a>
                    ))}
                </h3>
            </nav>
        </aside>
    </div>
  )
}

export default Sidebar