'use strict';

var searchYouTube = function searchYouTube(_ref, callback) {
  var key = _ref.key,
      query = _ref.query,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 5 : _ref$max;

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(function (_ref2) {
    var items = _ref2.items;

    if (callback) {
      callback(items);
    }
  }).fail(function (_ref3) {
    var responseJSON = _ref3.responseJSON;

    responseJSON.error.errors.forEach(function (err) {
      return console.error(err);
    });
  });
};

window.searchYouTube = searchYouTube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VhcmNoWW91VHViZS5qcyJdLCJuYW1lcyI6WyJzZWFyY2hZb3VUdWJlIiwiY2FsbGJhY2siLCJrZXkiLCJxdWVyeSIsIm1heCIsIiQiLCJnZXQiLCJwYXJ0IiwicSIsIm1heFJlc3VsdHMiLCJ0eXBlIiwidmlkZW9FbWJlZGRhYmxlIiwiZG9uZSIsIml0ZW1zIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsImVycm9yIiwiZXJyb3JzIiwiZm9yRWFjaCIsImVyciIsImNvbnNvbGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixPQUF3QkMsUUFBeEIsRUFBcUM7QUFBQSxNQUFuQ0MsR0FBbUMsUUFBbkNBLEdBQW1DO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLHNCQUF2QkMsR0FBdUI7QUFBQSxNQUF2QkEsR0FBdUIsNEJBQWpCLENBQWlCOztBQUN2REMsSUFBRUMsR0FBRixDQUFNLDhDQUFOLEVBQXNEO0FBQ3BEQyxVQUFNLFNBRDhDO0FBRXBETCxTQUFLQSxHQUYrQztBQUdwRE0sT0FBR0wsS0FIaUQ7QUFJcERNLGdCQUFZTCxHQUp3QztBQUtwRE0sVUFBTSxPQUw4QztBQU1wREMscUJBQWlCO0FBTm1DLEdBQXRELEVBUUNDLElBUkQsQ0FRTSxpQkFBYTtBQUFBLFFBQVhDLEtBQVcsU0FBWEEsS0FBVzs7QUFDakIsUUFBSVosUUFBSixFQUFjO0FBQ1pBLGVBQVNZLEtBQVQ7QUFDRDtBQUNGLEdBWkQsRUFhQ0MsSUFiRCxDQWFNLGlCQUFvQjtBQUFBLFFBQWxCQyxZQUFrQixTQUFsQkEsWUFBa0I7O0FBQ3hCQSxpQkFBYUMsS0FBYixDQUFtQkMsTUFBbkIsQ0FBMEJDLE9BQTFCLENBQWtDLFVBQUNDLEdBQUQ7QUFBQSxhQUNoQ0MsUUFBUUosS0FBUixDQUFjRyxHQUFkLENBRGdDO0FBQUEsS0FBbEM7QUFHRCxHQWpCRDtBQWtCRCxDQW5CRDs7QUFzQkFFLE9BQU9yQixhQUFQLEdBQXVCQSxhQUF2QiIsImZpbGUiOiJzZWFyY2hZb3VUdWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgc2VhcmNoWW91VHViZSA9ICh7a2V5LCBxdWVyeSwgbWF4ID0gNX0sIGNhbGxiYWNrKSA9PiB7XG4gICQuZ2V0KCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCcsIHtcbiAgICBwYXJ0OiAnc25pcHBldCcsXG4gICAga2V5OiBrZXksXG4gICAgcTogcXVlcnksXG4gICAgbWF4UmVzdWx0czogbWF4LFxuICAgIHR5cGU6ICd2aWRlbycsXG4gICAgdmlkZW9FbWJlZGRhYmxlOiAndHJ1ZSdcbiAgfSlcbiAgLmRvbmUoKHtpdGVtc30pID0+IHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGl0ZW1zKTtcbiAgICB9XG4gIH0pXG4gIC5mYWlsKCh7cmVzcG9uc2VKU09OfSkgPT4ge1xuICAgIHJlc3BvbnNlSlNPTi5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PlxuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgKTtcbiAgfSk7XG59O1xuXG5cbndpbmRvdy5zZWFyY2hZb3VUdWJlID0gc2VhcmNoWW91VHViZTtcbiJdfQ==