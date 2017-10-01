webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i);", ""]);

// module
exports.push([module.i, "/* Copyright 2017 Christopher Jáquez Prado */\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #3498db;\r\n}\r\n\r\na:hover {\r\n    color: #2980b9;\r\n}\r\n\r\na span {\r\n    color: #333;\r\n}\r\n\r\n.topbar, .toolbar, .sidebar {\r\n    position: fixed;\r\n    z-index: 1;\r\n}\r\n\r\n.topbar {\r\n    height: 48px;\r\n    background-color: #d0d0d0;    \r\n    width: 100%;\r\n    padding: 8px 16px;\r\n    color: #333;\r\n    top: 0;\r\n}\r\n\r\n.topbar > .brand a, .topbar > .title {\r\n    font-size: 22px;\r\n    float: left;\r\n    color: #fff;\r\n}\r\n\r\n.topbar > .brand {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.topbar > .title {\r\n    font-size: 20px;\r\n    margin: 2px 0 0 8px;\r\n    color: #333;\r\n}\r\n\r\n.workspace {\r\n    height: calc(100vh - 48px);\r\n    width: 100%;\r\n}\r\n\r\n.sidebar {\r\n    left: 0;\r\n    top: 88px;\r\n    height: calc(100% - 40px);\r\n    width: 200px;\r\n    background-color: #f0f0f0;\r\n    border-right: #d0d0d0 solid 1px;\r\n    float: left;\r\n}\r\n\r\n.sidebar .menu-item {\r\n    width: 100%;\r\n    min-height: 40px;\r\n    border-bottom: #bcbcbc solid 1px;\r\n    padding: 8px 16px;\r\n}\r\n\r\n.sidebar .menu-item.indent {\r\n    padding-left: 32px;\r\n}\r\n\r\n.sidebar .menu-item > span {    \r\n    -webkit-user-select: none;    \r\n       -moz-user-select: none;    \r\n        -ms-user-select: none;    \r\n            user-select: none;\r\n}\r\n\r\n.sidebar a.active .menu-item> span {\r\n    font-weight: 800;\r\n}\r\n\r\n.diagram-wrapper {\r\n    padding-left: 200px;\r\n    padding-top: 88px;\r\n    height: 100vh;\r\n    background-color: #fff;\r\n    overflow: hidden;\r\n}\r\n\r\n.toolbar {\r\n    background-color: #f0f0f0;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-bottom: #d0d0d0 solid 1px;\r\n    padding: 4px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    top: 48px;\r\n}\r\n\r\n.toolbar .contextual-tools, .toolbar .general-tools {\r\n    display: inline-block;\r\n}\r\n\r\n.toolbar .tool {\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    display: inline-block;\r\n    height: 32px;\r\n    width: 32px;\r\n    border: #d0d0d0 solid 1px;\r\n}\r\n\r\n.toolbar .tool:hover, .sidebar .menu-item:hover {\r\n    cursor: pointer;\r\n    background-color: #e0e0e0;\r\n}\r\n\r\n.toolbar .tool:active, .toolbar .tool.active {\r\n    background-color: #d0d0d0;\r\n}\r\n\r\n.contextual-wrapper:before {\r\n    content: \"\";\r\n}\r\n\r\n.toolbar .separator, .contextual-wrapper:before {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 1px;\r\n    height: 25px;\r\n    border-left: #d0d0d0 solid 1px;\r\n    margin: 0 8px;\r\n    top: -3px;\r\n}\r\n\r\n.toolbar:after {\r\n    content: \"\";\r\n    clear: both;\r\n}\r\n\r\n.tool.undo {\r\n    background-image: url(/assets/img/ic_undo.png);\r\n}\r\n\r\n.tool.redo {\r\n    background-image: url(/assets/img/ic_redo.png);\r\n}\r\n\r\n.tool.save {\r\n    background-image: url(/assets/img/ic_save.png);\r\n}\r\n\r\n.tool.new {\r\n    background-image: url(/assets/img/ic_new.png);    \r\n}\r\n\r\n.tool.open {\r\n    background-image: url(/assets/img/ic_open.png);    \r\n}\r\n\r\n.tool.delete {\r\n    background-image: url(/assets/img/ic_delete.png);    \r\n}\r\n\r\n.tool.newFiniteState {\r\n    background-image: url(/assets/img/ic_add_circle.png);        \r\n}\r\n\r\n.tool.newFiniteTransition {\r\n    background-image: url(/assets/img/ic_arrow.png);        \r\n}\r\n\r\n.canvas-wrapper, .text-wrapper {    \r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #fff;\r\n}\r\n\r\n.text-wrapper {\r\n    padding: 16px;\r\n}\r\n\r\n.text-wrapper h2 {\r\n    margin: 0 0 30px;\r\n}\r\n\r\n.text-wrapper label {\r\n    font-size: 18px;\r\n}\r\n\r\n.text-wrapper input:not([type=radio]) {\r\n    display: block;\r\n    height: 40px;\r\n    font-size: 18px;\r\n    margin-bottom: 20px;\r\n    width: 400px;\r\n    max-width: 100%;\r\n    padding: 0 8px;\r\n}\r\n\r\n.text-wrapper input[type=radio] {\r\n    height: initial;\r\n    widows: initial;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.radio-wrapper, .checkbox-wrapper {\r\n    margin: 10px 0 20px;\r\n}\r\n\r\n.radio-wrapper label, .checkbox-wrapper label {\r\n    font-size: 14px;\r\n}\r\n\r\n.radio-wrapper label:after, .checkbox-wrapper label:after {\r\n    content: \"\";\r\n    display: block;\r\n}\r\n\r\n.alphabet-symbols {\r\n    margin: 10px 0;\r\n    width: 400px;\r\n    max-width: 100%;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.alphabet-symbols > span {\r\n    color: #bcbcbc;\r\n}\r\n\r\n.alphabet-symbols .symbol-entry {\r\n    display: inline-block;\r\n    margin: 4px 4px 4px 0;\r\n    padding: 2px 3px;\r\n    background-color: #f0f0f0;\r\n    border: #bcbcbc solid 1px;\r\n}\r\n\r\n.alphabet-symbols .remove {\r\n    margin: 0 3px;\r\n    color: #e74c3c;\r\n    cursor: pointer;\r\n}\r\n\r\n.alphabet-symbols .remove:hover {\r\n    color: #c0392b;\r\n}\r\n\r\n.plus-adder {\r\n    width: 400px;\r\n    max-width: 100%;\r\n}\r\n\r\n.symbol-entry.start {\r\n    background-color: #a5f3e3;\r\n}\r\n\r\n.symbol-entry.nonterminal:hover {\r\n    cursor: pointer;\r\n    background-color: #d0d0d0;\r\n}\r\n\r\n.symbol-entry.start:hover {\r\n    background-color: #8AEFDB;\r\n}\r\n\r\n.text-wrapper .plus-adder > input {\r\n    width: 360px;\r\n    max-width: calc(100% - 40px);\r\n    float: left;\r\n}\r\n\r\n.plus-adder > button {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.alertify-logs {\r\n    z-index: 500 !important;\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map