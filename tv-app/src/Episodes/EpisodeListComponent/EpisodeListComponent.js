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
            episodeComponents.push(<Episode key={eps.id} episode={eps} />);
        }

        return (
            <section className=".episode-list-container">
                {episodeComponents}
            </section>
        );
    }
}

export default EpisodeList;