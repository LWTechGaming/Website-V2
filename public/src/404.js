const html = require('./html.js')
const l = require('../lang.json')

function generateErrorPage (lang) {
  // Create elements
  let section = html.get('error')
  let header = document.createElement('header')
  let h1 = document.createElement('h1')

  // Prepare header
  header.setAttribute('class', 'major')
  h1.innerHTML = l.error[404].header[lang]
  // Apparently I have to use the brackets with numbers because... JS

  // Append elements
  section.appendChild(header)
  header.appendChild(h1)

  // Add paragraphs
  for (let i = 0; i < l.error[404].texts.length; i++) {
    let p = document.createElement('p')
    p.innerHTML = l.error[404].texts[i][lang]
    section.appendChild(p)
  }

  // Add button
  let actions = html.get('error-actions')
  let li = document.createElement('li')
  let a = document.createElement('a')

  // Prepare elements
  a.setAttribute('href', l.error[404].button[lang].href)
  a.setAttribute('class', 'button special')
  a.innerHTML = l.error[404].button[lang].text

  // Append element
  actions.appendChild(li)
  li.appendChild(a)
}

// Run
generateErrorPage(localStorage.getItem('lang'))
