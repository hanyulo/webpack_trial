import _ from 'lodash';
import styles from './style.scss';
import Icon from './webpack_icon.png';

function component() {
  const element = document.createElement('div');

 // Lodash, currently included via a script, is required for this line to work
 console.log(styles)
  element.innerHTML = _.join(['Hello', 'webpack', 'ggg'], ' ');
  element.classList.add(`${styles.hello}`);
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

  document.body.appendChild(component());
