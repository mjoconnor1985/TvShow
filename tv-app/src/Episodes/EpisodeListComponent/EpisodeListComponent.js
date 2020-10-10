import React, { Component } from 'react';
import Episode from '../EpisodeComponent/EpisodeComponent';
import './EpisodeListComponent.css'

class EpisodeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const episodes = this.props.episodes.slice(0, 10);
        const episodeComponents = [];

        for (const eps of episodes) {
            episodeComponents.push(<Episode episode={eps} />);
        }
        
        return (
            <div class="episode-list-container">
                {episodeComponents}
            </div>
        );
    }
}

export default EpisodeList;