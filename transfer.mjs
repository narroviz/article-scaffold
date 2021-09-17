import { ARTICLE_TITLE, ARTICLE_DESCRIPTION, ARTICLE_NAME, ARTICLE_NAME_UNDERSCORE, ARTICLE_PUBLISH_TIME } from './config.mjs'

import * as fs from 'fs';

const reformatHtmlFile = (htmlFile) => {
	fs.readFile(htmlFile, 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }

	  var header = `
		<script src="./../js/woopra.js"></script>

		<title>${ARTICLE_TITLE}</title>
		<meta charset='utf-8'>
		<meta name='viewport' content='width=device-width, initial-scale=1'>
		<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
		<meta name='description' content='${ARTICLE_DESCRIPTION}' />
		<meta name='news_keywords' content='tk' />
		
		<meta property='og:title' content='${ARTICLE_TITLE}' />
		<meta property='og:site_name' content='Narro' />
		<meta property='og:url' content='https://narro.design/html/${ARTICLE_NAME}.html' />
		<meta property='og:description' content='${ARTICLE_DESCRIPTION}' />
		<meta property='og:type' content='article' />
		<meta property='og:locale' content='en_US' />
		
		<meta property='og:image' content='https://narro.design/assets/images/${ARTICLE_NAME_UNDERSCORE}.png' />
		<meta property='og:image:type' content='image/png' />
		<meta property="article:published_time" content="${ARTICLE_PUBLISH_TIME}">
		
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:site' content='https://narro.design/html/${ARTICLE_NAME}.html' />
		<meta name='twitter:creator' content='narroviz' />
		<meta name='twitter:title' content='${ARTICLE_TITLE}' />
		<meta name='twitter:description' content='${ARTICLE_DESCRIPTION}' />
		<meta name='twitter:image:src' content='https://narro.design/assets/images/${ARTICLE_NAME_UNDERSCORE}.png' />
		
		<link rel='canonical' href='https://narro.design/html/${ARTICLE_NAME}.html' />
		
		<link rel='icon' type='image/png' sizes='32x32' href='./../assets/images/favicon-inverse.png'>
		<link rel='icon' type='image/png' sizes='16x16' href='./../assets/images/favicon-inverse.png'>
		<meta name='msapplication-TileColor' content='#ffc40d'>
		<meta name='theme-color' content='#ffffff'>
	    <link rel='preload' href='https://narro.design/assets/fonts/avenir/Avenir-Light.woff' type='font/woff' as='font' crossorigin>
	    <link rel='preload' href='https://narro.design/assets/fonts/avenir/Avenir-Medium.woff' type='font/woff' as='font' crossorigin>
	    <link rel='preload' href='https://narro.design/assets/fonts/avenir/Avenir-Heavy.woff' type='font/woff' as='font' crossorigin>
	    <link rel='preload' href='https://narro.design/assets/fonts/raleway/Raleway-extralight.woff' type='font/woff' as='font' crossorigin>
	    <link rel='preload' href='https://narro.design/assets/fonts/raleway/Raleway-medium.woff' type='font/woff' as='font' crossorigin>
	    <link rel='preload' href='https://narro.design/assets/fonts/raleway/Raleway-heavy.woff' type='font/woff' as='font' crossorigin>

		<style>
			/*
			********************
				   Raleway
			********************
			*/
		
			@font-face {
			    font-family: 'Raleway';
			    src: url('https://narro.design/assets/fonts/raleway/Raleway-extralight.woff');
			    font-weight: 400;
			    font-style: normal;
			    font-stretch: normal;
			    font-display: swap;
			}
		
			@font-face {
			    font-family: 'Raleway';
			    src: url('https://narro.design/assets/fonts/raleway/Raleway-medium.woff');
			    font-weight: 500;
			    font-style: normal;
			    font-stretch: normal;
			    font-display: swap;
			}
		
			@font-face {
			    font-family: 'Raleway';
			    src: url('https://narro.design/assets/fonts/raleway/Raleway-heavy.woff');
			    font-weight: 700;
			    font-style: normal;
			    font-stretch: normal;
			    font-display: swap;
			}
		
			/*
			********************
			       Avenir
			********************
			*/
		
			@font-face {
			    font-family: 'Avenir';
			    src: url('https://narro.design/assets/fonts/avenir/Avenir-Light.woff');
			    font-weight: 400;
			    font-style: normal;
			    font-stretch: normal;
			    font-display: swap;
			}
		
			@font-face {
			    font-family: 'Avenir';
			    src: url('https://narro.design/assets/fonts/avenir/Avenir-Medium.woff');
			    font-weight: 500;
			    font-style: normal;
			    font-stretch: normal;
			    font-display: swap;
			}
		
			@font-face {
			    font-family: 'Avenir';
			    src: url('https://narro.design/assets/fonts/avenir/Avenir-Heavy.woff');
			    font-weight: 700;
			    font-style: normal;
			    font-stretch: normal;
			    font-display: swap;
			}
		</style>
	  `
	  var result = data
	  	.replace("/build/bundle.css", `./../css/${ARTICLE_NAME}.css`)
	  	.replace("/global.css", `./../css/${ARTICLE_NAME}-global.css`)
	  	.replace("/build/bundle.js", `./../js/${ARTICLE_NAME}.js`)
	  	.replace("/assets/images/favicon-inverse.png", `./../assets/images/favicon-inverse.png`)
	  	.replace("<title>Narro</title>", header);

	  fs.writeFile(htmlFile, result, 'utf8', function (err) {
	     if (err) return console.log(err);
	  });
	});
}

const reformatCssFile = (cssFile) => {
	fs.readFile(cssFile, 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var result = data.replace(/\/assets/g, "./../assets")

	  fs.writeFile(cssFile, result, 'utf8', function (err) {
	     if (err) return console.log(err);
	  });
	});
}

async function copyFile(oldPath, newPath) {
	if (fs.existsSync(oldPath)) {
		fs.copyFile(oldPath, newPath, function (err) {
			if (err) throw err
		})
	}
}

async function copyFiles() {
	await copyFile('public/build/bundle.js', `../narroviz.github.io/js/${ARTICLE_NAME}.js`);
	await copyFile('public/build/bundle.css', `../narroviz.github.io/css/${ARTICLE_NAME}.css`);
	await copyFile('public/global.css', `../narroviz.github.io/css/${ARTICLE_NAME}-global.css`);
	await copyFile('public/index.html', `../narroviz.github.io/html/${ARTICLE_NAME}.html`);
	reformatCssFile(`../narroviz.github.io/css/${ARTICLE_NAME}.css`)
	reformatHtmlFile(`../narroviz.github.io/html/${ARTICLE_NAME}.html`)
}

copyFiles()