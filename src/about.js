import _join from 'lodash/join';

const _ = {
  join: _join,
}

(function component() {
  const text = _.join(['this', 'is', 'abbout', 'with', 'lodash'], ' ');
  console.log(text);
})();
