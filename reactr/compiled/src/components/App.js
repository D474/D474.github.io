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
      this.getYouTubeVideos('D474 Nightmare (Remastered) Jaime Orlando Cazares Valdez');
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
              React.createElement(Search, {
                handleSearchInputChange: this.getYouTubeVideos.bind(this)
              })
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
            React.createElement(
              "a",
              { style: { textShadow: '2px 2px 2px white , -2px -2px 2px white', textDecoration: 'none' }, href: "../../../redirect.html" },
              "\u2022 \uD83D\uDC4C \u2022 'FU115CR33N 4PP' \u2022 \u270B \u2022"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImdldFlvdVR1YmVWaWRlb3MiLCJxdWVyeSIsIm9wdGlvbnMiLCJrZXkiLCJBUElfS0VZIiwic2VhcmNoWW91VHViZSIsInNldFN0YXRlIiwidmlkZW8iLCJiaW5kIiwidGV4dFNoYWRvdyIsInRleHREZWNvcmF0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQURHO0FBRVhDLG9CQUFjO0FBRkgsS0FBYjtBQUhpQjtBQU9sQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsZ0JBQUwsQ0FBc0IsMERBQXRCO0FBQ0Q7OztxQ0FFZ0JDLEssRUFBTztBQUFBOztBQUN0QixVQUFJQyxVQUFVO0FBQ1pDLGFBQUssS0FBS1AsS0FBTCxDQUFXUSxPQURKO0FBRVpILGVBQU9BO0FBRkssT0FBZDs7QUFLQSxXQUFLTCxLQUFMLENBQVdTLGFBQVgsQ0FBeUJILE9BQXpCLEVBQWtDLFVBQUNKLE1BQUQ7QUFBQSxlQUNoQyxPQUFLUSxRQUFMLENBQWM7QUFDWlIsa0JBQVFBLE1BREk7QUFFWkMsd0JBQWNELE9BQU8sQ0FBUDtBQUZGLFNBQWQsQ0FEZ0M7QUFBQSxPQUFsQztBQU1EOzs7bURBRThCUyxLLEVBQU87QUFDcEMsV0FBS0QsUUFBTCxDQUFjO0FBQ1pQLHNCQUFjUTtBQURGLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQVEsa0NBQUMsTUFBRDtBQUNOLHlDQUF5QixLQUFLUCxnQkFBTCxDQUFzQlEsSUFBdEIsQ0FBMkIsSUFBM0I7QUFEbkI7QUFBUjtBQURGO0FBRkYsU0FERjtBQVVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFdBQUQsSUFBYSxPQUFPLEtBQUtYLEtBQUwsQ0FBV0UsWUFBL0I7QUFERixXQURGO0FBR1E7QUFBQTtBQUFBO0FBQVE7QUFBQTtBQUFBLGdCQUFHLE9BQU8sRUFBQ1UsWUFBWSx5Q0FBYixFQUF3REMsZ0JBQWdCLE1BQXhFLEVBQVYsRUFBMkYsTUFBSyx3QkFBaEc7QUFBQTtBQUFBO0FBQVIsV0FIUjtBQUdnTTtBQUhoTTtBQVZGLE9BREY7QUFnQ0Q7Ozs7RUFuRWVDLE1BQU1DLFM7O0FBc0V4QjtBQUNBOzs7QUFDQUMsT0FBT2xCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWRlb3M6IFtdLFxuICAgICAgY3VycmVudFZpZGVvOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0WW91VHViZVZpZGVvcygnRDQ3NCBOaWdodG1hcmUgKFJlbWFzdGVyZWQpIEphaW1lIE9ybGFuZG8gQ2F6YXJlcyBWYWxkZXonKTtcbiAgfVxuXG4gIGdldFlvdVR1YmVWaWRlb3MocXVlcnkpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIGtleTogdGhpcy5wcm9wcy5BUElfS0VZLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMuc2VhcmNoWW91VHViZShvcHRpb25zLCAodmlkZW9zKSA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpZGVvczogdmlkZW9zLFxuICAgICAgICBjdXJyZW50VmlkZW86IHZpZGVvc1swXVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrKHZpZGVvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50VmlkZW86IHZpZGVvXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8Y2VudGVyPjxTZWFyY2hcbiAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2U9e3RoaXMuZ2V0WW91VHViZVZpZGVvcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgLz48L2NlbnRlcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICA8VmlkZW9QbGF5ZXIgdmlkZW89e3RoaXMuc3RhdGUuY3VycmVudFZpZGVvfS8+XG4gICAgICAgICAgPC9kaXY+PGNlbnRlcj48YSBzdHlsZT17e3RleHRTaGFkb3c6ICcycHggMnB4IDJweCB3aGl0ZSAsIC0ycHggLTJweCAycHggd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0gaHJlZj1cIi4uLy4uLy4uL3JlZGlyZWN0Lmh0bWxcIj7igKIgJiMxMjgwNzY7IOKAoiAnRlUxMTVDUjMzTiA0UFAnIOKAoiAmIzk5OTU7IOKAojwvYT48L2NlbnRlcj48YnI+PC9icj5cbiAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAqIEl0J3MgdmVyeSBpbXBvcnRhbnQgdG8gYmluZCB0aGUgY29udGV4dCBvZiB0aGlzIGNhbGxiYWNrLlxuICAgICAgICAgICAgKiBBbHNvIGFjY2VwdGFibGUgaXMgdG8gcGFzcyBhIGFub255bW91cyBmdW5jdGlvbiBleHByZXNzaW9uIHdpdGggYSBmYXRcbiAgICAgICAgICAgICogYXJyb3cgdGhhdCBpbmhlcml0cyB0aGUgc3Vycm91bmRpbmcgbGV4aWNhbCBgdGhpc2AgY29udGV4dDpcbiAgICAgICAgICAgICpcbiAgICAgICAgICAgICogICBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2s9eyh2aWRlbykgPT4gdGhpcy5vblZpZGVvTGlzdEVudHJ5Q2xpY2sodmlkZW8pfVxuICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIG9yIC1cbiAgICAgICAgICAgICogICBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2s9eyhjdXJyZW50VmlkZW8pID0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRWaWRlb30pfVxuICAgICAgICAgICAgKlxuICAgICAgICAgICAgPFZpZGVvTGlzdFxuICAgICAgICAgICAgICBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2s9e3RoaXMuaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=