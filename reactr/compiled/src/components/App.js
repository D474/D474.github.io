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
      this.getYouTubeVideos('D474 Nightmare (Remastered) Data The Destroyer');
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
            React.createElement(
              "center",
              null,
              React.createElement("br", null),
              React.createElement(Search, {
                handleSearchInputChange: this.getYouTubeVideos.bind(this)
              }),
              React.createElement("br", null)
            )
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
            "center",
            null,
            React.createElement("br", null),
            React.createElement(
              "a",
              { href: "../../../redirect.html" },
              React.createElement(
                "button",
                { className: "btn hidden-sm-down", style: { background: 'red', color: 'black', textShadow: '2px 2px 2px white , -2px -2px 2px white', fontWeight: 'bold' } },
                "\u2022 \uD83D\uDC4C \u2022 Fullscreen Application \u2022 \u270B \u2022"
              )
            )
          ),
          React.createElement("br", null)
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImdldFlvdVR1YmVWaWRlb3MiLCJxdWVyeSIsIm9wdGlvbnMiLCJrZXkiLCJBUElfS0VZIiwic2VhcmNoWW91VHViZSIsInNldFN0YXRlIiwidmlkZW8iLCJiaW5kIiwiYmFja2dyb3VuZCIsImNvbG9yIiwidGV4dFNoYWRvdyIsImZvbnRXZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsb0JBQWM7QUFGSCxLQUFiO0FBSGlCO0FBT2xCOzs7O3dDQUVtQjtBQUNsQixXQUFLQyxnQkFBTCxDQUFzQiwwREFBdEI7QUFDRDs7O3FDQUVnQkMsSyxFQUFPO0FBQUE7O0FBQ3RCLFVBQUlDLFVBQVU7QUFDWkMsYUFBSyxLQUFLUCxLQUFMLENBQVdRLE9BREo7QUFFWkgsZUFBT0E7QUFGSyxPQUFkOztBQUtBLFdBQUtMLEtBQUwsQ0FBV1MsYUFBWCxDQUF5QkgsT0FBekIsRUFBa0MsVUFBQ0osTUFBRDtBQUFBLGVBQ2hDLE9BQUtRLFFBQUwsQ0FBYztBQUNaUixrQkFBUUEsTUFESTtBQUVaQyx3QkFBY0QsT0FBTyxDQUFQO0FBRkYsU0FBZCxDQURnQztBQUFBLE9BQWxDO0FBTUQ7OzttREFFOEJTLEssRUFBTztBQUNwQyxXQUFLRCxRQUFMLENBQWM7QUFDWlAsc0JBQWNRO0FBREYsT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBUSw2Q0FBUjtBQUFpQixrQ0FBQyxNQUFEO0FBQ2YseUNBQXlCLEtBQUtQLGdCQUFMLENBQXNCUSxJQUF0QixDQUEyQixJQUEzQjtBQURWLGdCQUFqQjtBQUVFO0FBRkY7QUFERjtBQUZGLFNBREY7QUFVRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRSxnQ0FBQyxXQUFELElBQWEsT0FBTyxLQUFLWCxLQUFMLENBQVdFLFlBQS9CO0FBREYsV0FERjtBQUdRO0FBQUE7QUFBQTtBQUFRLDJDQUFSO0FBQWlCO0FBQUE7QUFBQSxnQkFBRyxNQUFLLHdCQUFSO0FBQWlDO0FBQUE7QUFBQSxrQkFBUSxXQUFVLG9CQUFsQixFQUF1QyxPQUFPLEVBQUNVLFlBQVksS0FBYixFQUFvQkMsT0FBTSxPQUExQixFQUFtQ0MsWUFBWSx5Q0FBL0MsRUFBMEZDLFlBQVksTUFBdEcsRUFBOUM7QUFBQTtBQUFBO0FBQWpDO0FBQWpCLFdBSFI7QUFHNlI7QUFIN1I7QUFWRixPQURGO0FBZ0NEOzs7O0VBbkVlQyxNQUFNQyxTOztBQXNFeEI7QUFDQTs7O0FBQ0FDLE9BQU9wQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlkZW9zOiBbXSxcbiAgICAgIGN1cnJlbnRWaWRlbzogbnVsbFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFlvdVR1YmVWaWRlb3MoJ0Q0NzQgTmlnaHRtYXJlIChSZW1hc3RlcmVkKSBKYWltZSBPcmxhbmRvIENhemFyZXMgVmFsZGV6Jyk7XG4gIH1cblxuICBnZXRZb3VUdWJlVmlkZW9zKHF1ZXJ5KSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBrZXk6IHRoaXMucHJvcHMuQVBJX0tFWSxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICB0aGlzLnByb3BzLnNlYXJjaFlvdVR1YmUob3B0aW9ucywgKHZpZGVvcykgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aWRlb3M6IHZpZGVvcyxcbiAgICAgICAgY3VycmVudFZpZGVvOiB2aWRlb3NbMF1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljayh2aWRlbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFZpZGVvOiB2aWRlb1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgPGNlbnRlcj48YnI+PC9icj48U2VhcmNoXG4gICAgICAgICAgICAgIGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlPXt0aGlzLmdldFlvdVR1YmVWaWRlb3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIC8+PGJyPjwvYnI+PC9jZW50ZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgPFZpZGVvUGxheWVyIHZpZGVvPXt0aGlzLnN0YXRlLmN1cnJlbnRWaWRlb30vPlxuICAgICAgICAgIDwvZGl2PjxjZW50ZXI+PGJyPjwvYnI+PGEgaHJlZj1cIi4uLy4uLy4uL3JlZGlyZWN0Lmh0bWxcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiIHN0eWxlPXt7YmFja2dyb3VuZDogJ3JlZCcsIGNvbG9yOidibGFjaycsIHRleHRTaGFkb3c6ICcycHggMnB4IDJweCB3aGl0ZSAsIC0ycHggLTJweCAycHggd2hpdGUnLCBmb250V2VpZ2h0OiAnYm9sZCd9fT7igKIgJiMxMjgwNzY7IOKAoiBGdWxsc2NyZWVuIEFwcGxpY2F0aW9uIOKAoiAmIzk5OTU7IOKAojwvYnV0dG9uPjwvYT48L2NlbnRlcj48YnI+PC9icj5cbiAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAqIEl0J3MgdmVyeSBpbXBvcnRhbnQgdG8gYmluZCB0aGUgY29udGV4dCBvZiB0aGlzIGNhbGxiYWNrLlxuICAgICAgICAgICAgKiBBbHNvIGFjY2VwdGFibGUgaXMgdG8gcGFzcyBhIGFub255bW91cyBmdW5jdGlvbiBleHByZXNzaW9uIHdpdGggYSBmYXRcbiAgICAgICAgICAgICogYXJyb3cgdGhhdCBpbmhlcml0cyB0aGUgc3Vycm91bmRpbmcgbGV4aWNhbCBgdGhpc2AgY29udGV4dDpcbiAgICAgICAgICAgICpcbiAgICAgICAgICAgICogICBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2s9eyh2aWRlbykgPT4gdGhpcy5vblZpZGVvTGlzdEVudHJ5Q2xpY2sodmlkZW8pfVxuICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIG9yIC1cbiAgICAgICAgICAgICogICBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2s9eyhjdXJyZW50VmlkZW8pID0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRWaWRlb30pfVxuICAgICAgICAgICAgKlxuICAgICAgICAgICAgPFZpZGVvTGlzdFxuICAgICAgICAgICAgICBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2s9e3RoaXMuaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=
