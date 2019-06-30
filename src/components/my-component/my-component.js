import facebookLogoPng from './facebook-logo.png';

function createMyComponent() {
  const container = document.createElement('div');
  const htmlTextOne = '<p>This is the demonstrated element to show that, to implenet modulization developer can put all related files into single folder, such as css, js, png..files.</p>';
  const htmlTextTwo = '<p>You can put all global stuff into global-assets folder.</p>'

  container.innerHTML = `${htmlTextOne}${htmlTextTwo}`;
  return container;
}


export default createMyComponent;
