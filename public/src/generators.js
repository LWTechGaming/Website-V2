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
