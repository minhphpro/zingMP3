import './Song.scss';
import FilterNavbar from './FilterNavbar';
import HeaderMedia from './HeaderMedia';
import SongItem from './SongItem';
import { Songs } from '~/data/DataMyMusic';
import { useEffect } from 'react';
function Song() {
    useEffect(() => {
        const checkboxs = document.querySelectorAll('.icon-checkbox input');
        const wrapperSong = document.querySelector('.wrapper-songitem');

        console.log(checkboxs);
    });

    return (
        <div className="wrapper-song">
            <FilterNavbar />
            <HeaderMedia />
            {Songs.map((song) => (
                <span>
                    <SongItem
                        key={song.id}
                        src={song.img}
                        songName={song.name}
                        name={song.author}
                        album={song.album}
                        mv={song.mv}
                        time={song.time}
                    />
                </span>
            ))}
        </div>
    );
}

export default Song;
