(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "menu": {
    "en": "Menu",
    "fi": "Valikko",
    "sv": "Meny"
  },
  "lang": {
    "en": "In English",
    "fi": "Suomeksi",
    "sv": "På svenska"
  }
}
},{}],2:[function(require,module,exports){
module.exports={
  "en": [
    {
      "pageName": "Home",
      "pageFile": "index.html"
    },
    {
      "pageName": "Who?",
      "pageFile": "who.html"
    },
    {
      "pageName": "My story",
      "pageFile": "story.html"
    },
    {
      "pageName": "My skills",
      "pageFile": "skills.html"
    },
    {
      "pageName": "My projects",
      "pageFile": "projects.html"
    }
  ],
  "fi": [
    {
      "pageName": "Koti",
      "pageFile": "index.html"
    },
    {
      "pageName": "Kuka?",
      "pageFile": "who.html"
    },
    {
      "pageName": "Tarinani",
      "pageFile": "story.html"
    },
    {
      "pageName": "Taitoni",
      "pageFile": "skills.html"
    },
    {
      "pageName": "Projektini",
      "pageFile": "projects.html"
    }
  ],
  "sv": [
    {
      "pageName": "Hemsida",
      "pageFile": "index.html"
    },
    {
      "pageName": "Vem?",
      "pageFile": "who.html"
    },
    {
      "pageName": "Min historia",
      "pageFile": "story.html"
    },
    {
      "pageName": "Mina kunskaper",
      "pageFile": "skills.html"
    },
    {
      "pageName": "Mina projekt",
      "pageFile": "projects.html"
    }
  ]
}
},{}],3:[function(require,module,exports){
const html = require('./html.js')
const sitemap = require('../sitemap.json')
const bl = require('../buttons.json').lang

function generateMenu () {
  let lang = localStorage.getItem('lang')
  let menu = html.get('links')
  let actions = html.get('actions')

  // Populate links
  for (let i = 0; i < sitemap[lang].length; i++) {
    // Create elements
    let li = document.createElement('li')
    let a = document.createElement('a')
    // Prepare <a href></a> tag
    a.setAttribute('href', sitemap[lang][i].pageFile)
    a.innerHTML = sitemap[lang][i].pageName
    // Append elements
    menu.appendChild(li)
    li.appendChild(a)
  }
  // Populate actions
  switch (lang) {
    case 'en':
      // Fi/sv
      _generateLangButton(actions, '/fi', bl.fi)
      _generateLangButton(actions, '/sv', bl.sv)
      break
    case 'fi':
      // En/sv
      _generateLangButton(actions, '../', bl.en)
      _generateLangButton(actions, '../sv', bl.sv)
      break
    case 'sv':
      // En/fi
      _generateLangButton(actions, '../', bl.en)
      _generateLangButton(actions, '../fi', bl.fi)
      break
    default:
      console.error('Menu generation failed, unknown lang type: ' + lang)
  }
}

function detectLang () {
  let path = location.pathname
  if (path.includes('/fi/') === true) {
    localStorage.setItem('lang', 'fi')
  } else if (path.includes('/sv/') === true) {
    localStorage.setItem('lang', 'sv')
  } else {
    localStorage.setItem('lang', 'en')
  }
}

function _generateLangButton (menu, href, innerHTML) {
  // Create elements
  let li = document.createElement('li')
  let a = document.createElement('a')
  // Set attributes
  a.setAttribute('href', href)
  a.setAttribute('class', 'button special fit')
  a.innerHTML = innerHTML
  // Append
  menu.appendChild(li)
  li.appendChild(a)
}

// Run the func
detectLang()
generateMenu()

},{"../buttons.json":1,"../sitemap.json":2,"./html.js":4}],4:[function(require,module,exports){
function get (identifier, type) {
  switch (type) {
    case 'id':
      return document.getElementById(identifier)
    case 'name':
      return document.getElementsByName(identifier)
    case 'class':
      return document.getElementsByClassName(identifier)
    case 'tag':
      return document.getElementsByTagName(identifier)
    default:
      return document.getElementById(identifier)
  }
}

exports.get = get

},{}]},{},[3]);
