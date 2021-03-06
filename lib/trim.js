import R from 'ramda';

const isOverflowing = () =>
  document.body.offsetHeight > window.innerHeight;

const isSpan = node =>
  node.tagName === 'SPAN';

function trim(node, done) {
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[0].offsetTop === node.childNodes[i].offsetTop) {
      node.removeChild(R.last(node.childNodes));
    } else break;
  };

  if (isOverflowing()) {
    trim(node, done)
  } else {
    if (done) {
      done(R.filter(isSpan, node.childNodes).length)
    };
  };
};

export default trim;
