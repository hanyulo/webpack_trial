import _ from 'lodash';
import styles from './style.scss';
import Icon from './webpack_icon.png';
import SmallIcon from './icon_below_5k.png'

function component() {
  const element = document.createElement('div');

 // Lodash, currently included via a script, is required for this line to work
 console.log(styles)
  element.innerHTML = _.join(['Hello', 'webpack', 'ggg'], ' ');
  element.classList.add(`${styles.hello}`);

  const myIcon = new Image();
  myIcon.src = Icon;

  const mySmallIcon = new Image();
  mySmallIcon.src = SmallIcon;

  element.appendChild(myIcon);
  element.appendChild(mySmallIcon)
  return element;
}

  document.body.appendChild(component());
