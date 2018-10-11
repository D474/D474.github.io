class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('D474 Nightmare (Remastered) Jaime Orlando Cazares Valdez');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">

          <div className="col-md-6 offset-md-3">
            <center><br></br><Search
              handleSearchInputChange={this.getYouTubeVideos.bind(this)}
            /><br></br></center>
          </div>

        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div><center><br></br><a href="../../../redirect.html"><button className="btn hidden-sm-down" style={{background: 'red', color:'black', textShadow: '2px 2px 2px white , -2px -2px 2px white', fontWeight: 'bold'}}>• &#128076; • Fullscreen Application • &#9995; •</button></a></center><br></br>
          {/*<div className="col-md-5">
            * It's very important to bind the context of this callback.
            * Also acceptable is to pass a anonymous function expression with a fat
            * arrow that inherits the surrounding lexical `this` context:
            *
            *   handleVideoListEntryTitleClick={(video) => this.onVideoListEntryClick(video)}
            *                                  - or -
            *   handleVideoListEntryTitleClick={(currentVideo) => this.setState({currentVideo})}
            *
            <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            />
          </div>*/}
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
