const html = require('./html.js')
const sitemap = require('../sitemap.json')
const l = require('../lang.json')

function generateMenu (lang) {
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
      _generateLangButton(actions, '/fi', l.pageLang.fi)
      _generateLangButton(actions, '/sv', l.pageLang.sv)
      break
    case 'fi':
      // En/sv
      _generateLangButton(actions, '../', l.pageLang.en)
      _generateLangButton(actions, '../sv', l.pageLang.sv)
      break
    case 'sv':
      // En/fi
      _generateLangButton(actions, '../', l.pageLang.en)
      _generateLangButton(actions, '../fi', l.pageLang.fi)
      break
    default:
      console.error('Menu generation failed, unknown lang type: ' + lang)
  }
}

function generateContact (lang) {
  let section = html.get('contact-section')

  // Create form header
  let header = document.createElement('header')
  let h2 = document.createElement('h2')
  // Prepare header and h2 tags
  header.setAttribute('class', 'major')
  h2.innerHTML = l.contact.header[lang]
  // Append elements
  section.appendChild(header)
  header.appendChild(h2)

  // Create form contents
  for (let i = 0; i < l.contact.texts.length; i++) {
    // Create paragraph
    let p = document.createElement('p')
    p.innerHTML = l.contact.texts[i][lang]
    section.appendChild(p)
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

// Run
detectLang()
generateMenu(localStorage.getItem('lang'))
generateContact(localStorage.getItem('lang'))
