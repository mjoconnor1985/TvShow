import React, { Component } from 'react';
import EpisodeList from './Episodes/EpisodeListComponent/EpisodeListComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  apiHostName = "http://api.tvmaze.com";

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadData();
  }

  render() {
    let content;
    if (this.state.isLoading) {
      content = <p className="loading">Loading...</p>
    } else {
      let summary = this.state.tvShow.summary.replaceAll('<p>', '').replaceAll('</p>', '');
      content =
        <div>
          <header className="app-header">
            <a href={this.state.tvShow.officialSite} target="_blank">
              <img className="logo" src={this.state.tvShow.image.medium} />
            </a>
          </header>

          <div className="background-image" style={{ backgroundImage: `url(${this.state.tvShow.image.original})` }}>
            <section className="container">
              <article>
                <p className="summary">{summary}</p>
              </article>
              <EpisodeList episodes={this.state.episodes} />
            </section>
          </div>
        </div>;
    }
    return (
      <div>
        {content}
      </div>
    );
  }


  loadData = async () => {
    this.setState({ isLoading: true });
    await this.getTvShowAsync();
    await this.getEpisodesAsync(this.state.tvShow.id)
    this.setState({ isLoading: false });
  }

  getTvShowAsync = async () => {
    const tvShowRes = await fetch(`${this.apiHostName}/singlesearch/shows?q=battlestar`);
    const tvShow = await tvShowRes.json();
    this.setState({ tvShow });
  }

  getEpisodesAsync = async (id) => {
    const episodeRes = await fetch(`${this.apiHostName}/shows/${id}/episodes`);
    const episodes = await episodeRes.json();
    this.setState({ episodes });
  }
}

export default App;
