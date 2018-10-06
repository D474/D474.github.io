"use strict";

var VideoPlayer = function VideoPlayer(_ref) {
  var video = _ref.video;
  return !video ? React.createElement(
    "div",
    { className: "video-player" },
    "Please wait..."
  ) : React.createElement(
    "div",
    { className: "video-player" },
    React.createElement(
      "div",
      { className: "embed-responsive embed-responsive-16by9" },
      React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/" + video.id.videoId, allowFullScreen: true })
    ),
    React.createElement(
      "div",
      { className: "video-player-details" },
      React.createElement(
        "h3",
        null,
        video.snippet.title
      ),
      React.createElement(
        "div",
        null,
        video.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInZpZGVvIiwiaWQiLCJ2aWRlb0lkIiwic25pcHBldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsU0FDaEIsQ0FBQ0EsS0FBRCxHQUFTO0FBQUE7QUFBQSxNQUFLLFdBQVUsY0FBZjtBQUFBO0FBQUEsR0FBVCxHQUNBO0FBQUE7QUFBQSxNQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUseUNBQWY7QUFDRSxzQ0FBUSxXQUFVLHVCQUFsQixFQUEwQyx3Q0FBc0NBLE1BQU1DLEVBQU4sQ0FBU0MsT0FBekYsRUFBb0cscUJBQXBHO0FBREYsS0FERjtBQUlJO0FBQUE7QUFBQSxRQUFLLFdBQVUsc0JBQWY7QUFDQTtBQUFBO0FBQUE7QUFBS0YsY0FBTUcsT0FBTixDQUFjQztBQUFuQixPQURBO0FBRUE7QUFBQTtBQUFBO0FBQU1KLGNBQU1HLE9BQU4sQ0FBY0U7QUFBcEI7QUFGQTtBQUpKLEdBRmdCO0FBQUEsQ0FBbEI7O0FBYUE7QUFDQTtBQUNBTixZQUFZTyxTQUFaLEdBQXdCO0FBQ3RCTixTQUFPTyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEUixDQUF4Qjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9aLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlZpZGVvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgVmlkZW9QbGF5ZXIgPSAoe3ZpZGVvfSkgPT4gKFxuICAhdmlkZW8gPyA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXBsYXllclwiPlBsZWFzZSB3YWl0Li4uPC9kaXY+IDpcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvLmlkLnZpZGVvSWR9YH0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXItZGV0YWlsc1wiPlxuICAgICAgPGgzPnt2aWRlby5zbmlwcGV0LnRpdGxlfTwvaDM+XG4gICAgICA8ZGl2Pnt2aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvUGxheWVyLnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5WaWRlb1BsYXllciA9IFZpZGVvUGxheWVyO1xuIl19