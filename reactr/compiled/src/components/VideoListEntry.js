"use strict";

var VideoListEntry = function VideoListEntry(_ref) {
  var video = _ref.video,
      handleVideoListEntryTitleClick = _ref.handleVideoListEntryTitleClick;
  return React.createElement(
    "div",
    { className: "video-list-entry media" },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "media-object", src: video.snippet.thumbnails.default.url, alt: "" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        {
          className: "video-list-entry-title",
          onClick: function onClick() {
            return handleVideoListEntryTitleClick(video);
          }
        },
        video.snippet.title
      ),
      React.createElement(
        "div",
        { className: "video-list-entry-detail" },
        video.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInZpZGVvIiwiaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBU0MsOEJBQVQsUUFBU0EsOEJBQVQ7QUFBQSxTQUNuQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx5QkFBZjtBQUNFLG1DQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLRCxNQUFNRSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUFwRSxFQUF5RSxLQUFJLEVBQTdFO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFVLHdCQURaO0FBRUUsbUJBQVM7QUFBQSxtQkFBTUosK0JBQStCRCxLQUEvQixDQUFOO0FBQUE7QUFGWDtBQUlHQSxjQUFNRSxPQUFOLENBQWNJO0FBSmpCLE9BREY7QUFPRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFmO0FBQTBDTixjQUFNRSxPQUFOLENBQWNLO0FBQXhEO0FBUEY7QUFKRixHQURtQjtBQUFBLENBQXJCOztBQWlCQTtBQUNBO0FBQ0FSLGVBQWVTLFNBQWYsR0FBMkI7QUFDekJSLFNBQU9TLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT2QsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiVmlkZW9MaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBWaWRlb0xpc3RFbnRyeSA9ICh7dmlkZW8sIGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGlja30pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0IG1lZGlhLW1pZGRsZVwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIiBzcmM9e3ZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybH0gYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS10aXRsZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljayh2aWRlbyl9XG4gICAgICA+XG4gICAgICAgIHt2aWRlby5zbmlwcGV0LnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+e3ZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9MaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlZpZGVvTGlzdEVudHJ5ID0gVmlkZW9MaXN0RW50cnk7XG4iXX0=