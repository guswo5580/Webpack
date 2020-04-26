const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const App = require('./App');
const Hot = hot(App);
//webpack-dev-server과 react-hot-loader를 이용

ReactDOM.render(<Hot/> , document.querySelector('#root'));

//App.jsx 코드를 작성
//Webpack dev를 통해 빌드 후, dist 의 App.js 를 가지고 index.html 을 작성