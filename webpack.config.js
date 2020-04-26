const path = require('path');
const webpack = require('webpack');
//플러그인 설정을 위해 webpack 적용 

module.exports = {
    //////////////webpack 설정 부분/////////////////
    name : 'basic setting',
    mode: 'development', // 실 서비스 : production
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'], //확장자 설정
    },


    //////////////webpack Main 부분/////////////////
    entry: {
        app: './client',
    },
    module: {
        rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
            //plugin의 모음 설정 
            presets: [
            //브라우저 설정상태를 어디까지 지원할 것인가 
            ['@babel/preset-env', {
                //preset-env에 대해 구체적으로 작성 가능
                targets: {
                browsers: ['> 1% in KR'], // browserslist
                //browsers: ['last 2 chrome versions']
                },
                debug: true,
            }],
            '@babel/preset-react',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                'react-hot-loader/babel',
            ],
        },
        }],
    },
    //webpack 확장 프로그램, module_options의 plugins와 다름
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath : '/dist/',
    },
};