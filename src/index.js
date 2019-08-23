// import _join from 'lodash/join';
import styles from './style.scss';
import Icon from './assets/imgs/webpack_icon.png';
import SmallIcon from './assets/imgs/icon_below_5k.png';
// import xmlData from './assets/data/data.xml';
// import createMyComponent from './components/my-component/my-component.js';
import printMe from './components/print.js';

// const _ = {
//   join: _join,
// };


function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'ggg'], ' ');
    element.classList.add(`${styles.hello}`);

    const myIcon = new Image();
    myIcon.src = Icon;

    const mySmallIcon = new Image();
    mySmallIcon.src = SmallIcon;

    element.appendChild(myIcon);
    element.appendChild(mySmallIcon)
    return element;
  })
}

// function getComponentOriginal() {
//   const element = document.createElement('div');
//
//   element.innerHTML = _.join(['Hello', 'webpack', 'ggg'], ' ');
//   element.classList.add(`${styles.hello}`);
//
//   const myIcon = new Image();
//   myIcon.src = Icon;
//
//   const mySmallIcon = new Image();
//   mySmallIcon.src = SmallIcon;
//
//   element.appendChild(myIcon);
//   element.appendChild(mySmallIcon)
//   return element;
// }

// function awsomeFontComponent() {
//   const element = document.createElement('div');
//   element.classList.add(`${styles.fab}`, `${styles['fa-accessible-icon']}`);
//
//   return element;
// }

// (function checkXMLData() {
//   console.log(xmlData);
// })();

function createButton() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  return btn;
}



(function main() {
  console.log('!----------run main function in index----------!');

  let hotModuleReplacementBtn = createButton();
  // document.body.appendChild(getComponentOriginal());
  // document.body.appendChild(awsomeFontComponent());
  // document.body.appendChild(createMyComponent());
  // document.body.appendChild(hotModuleReplacementBtn);

  setTimeout(() => {
    getComponent().then(component => {
       document.body.appendChild(component);
    })
  }, 3000);

  if (module.hot) {
    module.hot.accept('./components/print.js', () => {
      document.body.removeChild(hotModuleReplacementBtn);
      hotModuleReplacementBtn = createButton();
      document.body.appendChild(hotModuleReplacementBtn);
    })
  }
})();
