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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWN0ci9zcmMvbGliL3NlYXJjaFlvdVR1YmUuanMiXSwibmFtZXMiOlsic2VhcmNoWW91VHViZSIsImNhbGxiYWNrIiwia2V5IiwicXVlcnkiLCJtYXgiLCIkIiwiZ2V0IiwicGFydCIsInEiLCJtYXhSZXN1bHRzIiwidHlwZSIsInZpZGVvRW1iZWRkYWJsZSIsImRvbmUiLCJpdGVtcyIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJlcnJvciIsImVycm9ycyIsImZvckVhY2giLCJlcnIiLCJjb25zb2xlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUNBLElBQUlBLGdCQUFnQixTQUFoQkEsYUFBZ0IsT0FBd0JDLFFBQXhCLEVBQXFDO0FBQUEsTUFBbkNDLEdBQW1DLFFBQW5DQSxHQUFtQztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxzQkFBdkJDLEdBQXVCO0FBQUEsTUFBdkJBLEdBQXVCLDRCQUFqQixDQUFpQjs7QUFDdkRDLElBQUVDLEdBQUYsQ0FBTSw4Q0FBTixFQUFzRDtBQUNwREMsVUFBTSxTQUQ4QztBQUVwREwsU0FBS0EsR0FGK0M7QUFHcERNLE9BQUdMLEtBSGlEO0FBSXBETSxnQkFBWUwsR0FKd0M7QUFLcERNLFVBQU0sT0FMOEM7QUFNcERDLHFCQUFpQjtBQU5tQyxHQUF0RCxFQVFDQyxJQVJELENBUU0saUJBQWE7QUFBQSxRQUFYQyxLQUFXLFNBQVhBLEtBQVc7O0FBQ2pCLFFBQUlaLFFBQUosRUFBYztBQUNaQSxlQUFTWSxLQUFUO0FBQ0Q7QUFDRixHQVpELEVBYUNDLElBYkQsQ0FhTSxpQkFBb0I7QUFBQSxRQUFsQkMsWUFBa0IsU0FBbEJBLFlBQWtCOztBQUN4QkEsaUJBQWFDLEtBQWIsQ0FBbUJDLE1BQW5CLENBQTBCQyxPQUExQixDQUFrQyxVQUFDQyxHQUFEO0FBQUEsYUFDaENDLFFBQVFKLEtBQVIsQ0FBY0csR0FBZCxDQURnQztBQUFBLEtBQWxDO0FBR0QsR0FqQkQ7QUFrQkQsQ0FuQkQ7O0FBc0JBRSxPQUFPckIsYUFBUCxHQUF1QkEsYUFBdkIiLCJmaWxlIjoic2VhcmNoWW91VHViZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIHNlYXJjaFlvdVR1YmUgPSAoe2tleSwgcXVlcnksIG1heCA9IDV9LCBjYWxsYmFjaykgPT4ge1xuICAkLmdldCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnLCB7XG4gICAgcGFydDogJ3NuaXBwZXQnLFxuICAgIGtleToga2V5LFxuICAgIHE6IHF1ZXJ5LFxuICAgIG1heFJlc3VsdHM6IG1heCxcbiAgICB0eXBlOiAndmlkZW8nLFxuICAgIHZpZGVvRW1iZWRkYWJsZTogJ3RydWUnXG4gIH0pXG4gIC5kb25lKCh7aXRlbXN9KSA9PiB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhpdGVtcyk7XG4gICAgfVxuICB9KVxuICAuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pID0+IHtcbiAgICByZXNwb25zZUpTT04uZXJyb3IuZXJyb3JzLmZvckVhY2goKGVycikgPT5cbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICk7XG4gIH0pO1xufTtcblxuXG53aW5kb3cuc2VhcmNoWW91VHViZSA9IHNlYXJjaFlvdVR1YmU7XG4iXX0=