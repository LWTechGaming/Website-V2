const html = require('./html.js')
const sitemap = require('../sitemap.json')
const bl = require('../buttons.json').lang

function generateMenu () {
  let lang = detectLang()
  // Populate links
  html.get('links').then((menu) => {
    for (let i = 0; i <= sitemap[lang].length; i++) {
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
  })
  // Populate actions
  html.get('actions').then((menu) => {
    switch (lang) {
      case 'en':
        // Fi/sv
        _generateLangButton(menu, '/fi', bl.fi)
        _generateLangButton(menu, '/sv', bl.sv)
        break
      case 'fi':
        // En/sv
        _generateLangButton(menu, '../', bl.en)
        _generateLangButton(menu, '../sv', bl.sv)
        break
      case 'sv':
        // En/fi
        _generateLangButton(menu, '../', bl.en)
        _generateLangButton(menu, '../fi', bl.fi)
        break
      default:
        console.error('Menu generation failed, unknown lang type: ' + lang)
    }
  })
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

function detectLang () {
  let path = location.pathname
  if (localStorage.getItem('lang') === null) {
    if (path.includes === 'fi') {
      localStorage.setItem('lang', 'fi')
      return 'fi'
    } else if (path.includes === 'sv') {
      localStorage.setItem('lang', 'sv')
      return 'sv'
    } else {
      localStorage.setItem('lang', 'en')
      return 'en'
    }
  } else {
    console.log('Loaded language from local storage.')
  }
}

exports.generateMenu = generateMenu
exports.detectLang = detectLang
