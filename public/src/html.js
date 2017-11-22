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

exports.get = get
exports.detectLang = detectLang
