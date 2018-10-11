"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      videos: [],
      currentVideo: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getYouTubeVideos('D474 Jaime Orlando Cazares Valdez (Remastered)');
    }
  }, {
    key: "getYouTubeVideos",
    value: function getYouTubeVideos(query) {
      var _this2 = this;

      var options = {
        key: this.props.API_KEY,
        query: query
      };

      this.props.searchYouTube(options, function (videos) {
        return _this2.setState({
          videos: videos,
          currentVideo: videos[0]
        });
      });
    }
  }, {
    key: "handleVideoListEntryTitleClick",
    value: function handleVideoListEntryTitleClick(video) {
      this.setState({
        currentVideo: video
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar" },
          React.createElement(
            "div",
            { className: "col-md-6 offset-md-3" },
            React.createElement(Search, {
              handleSearchInputChange: this.getYouTubeVideos.bind(this)
            })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-7" },
            React.createElement(VideoPlayer, { video: this.state.currentVideo })
          ),
          React.createElement(
            "div",
            { className: "col-md-5" },
            React.createElement(VideoList, {
              handleVideoListEntryTitleClick: this.handleVideoListEntryTitleClick.bind(this),
              videos: this.state.videos
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImdldFlvdVR1YmVWaWRlb3MiLCJxdWVyeSIsIm9wdGlvbnMiLCJrZXkiLCJBUElfS0VZIiwic2VhcmNoWW91VHViZSIsInNldFN0YXRlIiwidmlkZW8iLCJiaW5kIiwiaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQURHO0FBRVhDLG9CQUFjO0FBRkgsS0FBYjtBQUhpQjtBQU9sQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsZ0JBQUwsQ0FBc0IsZ0RBQXRCO0FBQ0Q7OztxQ0FFZ0JDLEssRUFBTztBQUFBOztBQUN0QixVQUFJQyxVQUFVO0FBQ1pDLGFBQUssS0FBS1AsS0FBTCxDQUFXUSxPQURKO0FBRVpILGVBQU9BO0FBRkssT0FBZDs7QUFLQSxXQUFLTCxLQUFMLENBQVdTLGFBQVgsQ0FBeUJILE9BQXpCLEVBQWtDLFVBQUNKLE1BQUQ7QUFBQSxlQUNoQyxPQUFLUSxRQUFMLENBQWM7QUFDWlIsa0JBQVFBLE1BREk7QUFFWkMsd0JBQWNELE9BQU8sQ0FBUDtBQUZGLFNBQWQsQ0FEZ0M7QUFBQSxPQUFsQztBQU1EOzs7bURBRThCUyxLLEVBQU87QUFDcEMsV0FBS0QsUUFBTCxDQUFjO0FBQ1pQLHNCQUFjUTtBQURGLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0UsZ0NBQUMsTUFBRDtBQUNFLHVDQUF5QixLQUFLUCxnQkFBTCxDQUFzQlEsSUFBdEIsQ0FBMkIsSUFBM0I7QUFEM0I7QUFERjtBQUZGLFNBREY7QUFVRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRSxnQ0FBQyxXQUFELElBQWEsT0FBTyxLQUFLWCxLQUFMLENBQVdFLFlBQS9CO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQVdFLGdDQUFDLFNBQUQ7QUFDRSw4Q0FBZ0MsS0FBS1UsOEJBQUwsQ0FBb0NELElBQXBDLENBQXlDLElBQXpDLENBRGxDO0FBRUUsc0JBQVEsS0FBS1gsS0FBTCxDQUFXQztBQUZyQjtBQVhGO0FBSkY7QUFWRixPQURGO0FBa0NEOzs7O0VBckVlWSxNQUFNQyxTOztBQXdFeEI7QUFDQTs7O0FBQ0FDLE9BQU9qQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlkZW9zOiBbXSxcbiAgICAgIGN1cnJlbnRWaWRlbzogbnVsbFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFlvdVR1YmVWaWRlb3MoJ0Q0NzQgSmFpbWUgT3JsYW5kbyBDYXphcmVzIFZhbGRleiAoUmVtYXN0ZXJlZCknKTtcbiAgfVxuXG4gIGdldFlvdVR1YmVWaWRlb3MocXVlcnkpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIGtleTogdGhpcy5wcm9wcy5BUElfS0VZLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMuc2VhcmNoWW91VHViZShvcHRpb25zLCAodmlkZW9zKSA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpZGVvczogdmlkZW9zLFxuICAgICAgICBjdXJyZW50VmlkZW86IHZpZGVvc1swXVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrKHZpZGVvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50VmlkZW86IHZpZGVvXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICAgIGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlPXt0aGlzLmdldFlvdVR1YmVWaWRlb3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgPFZpZGVvUGxheWVyIHZpZGVvPXt0aGlzLnN0YXRlLmN1cnJlbnRWaWRlb30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICB7LypcbiAgICAgICAgICAgICogSXQncyB2ZXJ5IGltcG9ydGFudCB0byBiaW5kIHRoZSBjb250ZXh0IG9mIHRoaXMgY2FsbGJhY2suXG4gICAgICAgICAgICAqIEFsc28gYWNjZXB0YWJsZSBpcyB0byBwYXNzIGEgYW5vbnltb3VzIGZ1bmN0aW9uIGV4cHJlc3Npb24gd2l0aCBhIGZhdFxuICAgICAgICAgICAgKiBhcnJvdyB0aGF0IGluaGVyaXRzIHRoZSBzdXJyb3VuZGluZyBsZXhpY2FsIGB0aGlzYCBjb250ZXh0OlxuICAgICAgICAgICAgKlxuICAgICAgICAgICAgKiAgIGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljaz17KHZpZGVvKSA9PiB0aGlzLm9uVmlkZW9MaXN0RW50cnlDbGljayh2aWRlbyl9XG4gICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gb3IgLVxuICAgICAgICAgICAgKiAgIGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljaz17KGN1cnJlbnRWaWRlbykgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFZpZGVvfSl9XG4gICAgICAgICAgICAqXG4gICAgICAgICAgICAqL31cbiAgICAgICAgICAgIDxWaWRlb0xpc3RcbiAgICAgICAgICAgICAgaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrPXt0aGlzLmhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuQXBwID0gQXBwO1xuIl19