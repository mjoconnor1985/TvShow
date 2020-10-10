import React, { Component } from 'react';
import './EpisodeComponent.css';

class Episode extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const episode = this.props.episode;
        return (
            <div class="episode">
                <a title="More Info" href={episode.url} target="_blank"><img class="episode-image" src={episode.image.medium} /></a>
                <p>Season {episode.season}</p> 
                <p>Episode - {episode.number} {episode.name}</p>
            </div>
        );
    }
}

export default Episode;