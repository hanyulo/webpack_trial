import _join from 'lodash/join';

const _ = {
  join: _join,
}

function component() {
  const element = document.createElement('div');

  element.innerHtml = _.join(['Hello', 'webpack'], ' ');

  document.body.append(element);
}
