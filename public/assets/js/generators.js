(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "contact": {
    "header": {
      "en": "Contact me",
      "fi": "Ota yhteyttä",
      "sv": "Kontakta mig"
    },
    "texts": [
      {
        "en": "If you want to get in touch with me formally, email is the best way to reach me. You can find my email from the bar on the right.",
        "fi": "Jos haluat ottaa minuun yhteyttä muodollisesti, sähköposti on paras tapa tavoittaa minut. Voit löytää sähköpostini oikealla olevasta palkista.",
        "sv": "Om du vill kontakta mig formellt, är e-post det bästa sättet att diskutera med mig. Du kan hitta min e-postaddress från balken till höger."
      },
      {
        "en": "For more informal conversation, my Direct Messages on Discord are open and I'm responsive on the platform! You can also find that from the bar on the right.",
        "fi": "Epämuodollisempaan keskusteluun suositelen Discordia, yksityisviestini ovat avoinna ja olen aktiivinen tällä alustalla! Voit löytää tämänkin oikealla olevasta palkista.",
        "sv": "För mer informellt diskuterande är mina direktmeddelanden på Discord öppna, och jag är responsiv på denna plattform! Du kan också hitta detta från balken till höger."
      },
      {
        "en": "Additionally, here are some of the social medias you can find me on.",
        "fi": "Lisäksi, tässä on muutama sosiaalinen media josta minut voi löytää.",
        "sv": "Här är dessutom några sociala medier som du kan hitta mig på."
      }
    ],
    "email": {
      "en": "E-mail",
      "fi": "Sähköposti",
      "sv": "E-post"
    }
  },
  "error": {
    "404": {
      "header": {
        "en": "Whoops!",
        "fi": "Hupsista!",
        "sv": "Hoppsan!"
      },
      "texts": [
        {
          "en": "Looks like you tried to access a resource that isn't present on this website!",
          "fi": "Näyttää siltä, että yritit päästä käsiksi resurssiin jota ei ole olemassa tällä verkkosivulla!",
          "sv": "Det verkar som att du försökte komma åt en resurs som inte finns på denna nätsida!"
        },
        {
          "en": "If you're lost, click the button below to get back to the homepage.",
          "fi": "Jos olet eksyksissä, klikkaa alla olevaa nappulaa päästäksesi takaisin kotisivulle.",
          "sv": "Om du har gått vilse, klicka på knappen nedan för att komma tillbaka till hemsidan."
        }
      ],
      "button": {
        "en": {
          "text": "Back",
          "href": "index.html"
        },
        "fi": {
          "text": "Takaisin",
          "href": "fi/index.html"
        },
        "sv": {
          "text": "Tillbaka",
          "href": "sv/index.html"
        }
      }
    }
  },
  "pageLang": {
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
  let email = html.get('contact-email')

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

  // Insert links after the text
  section.insertAdjacentHTML('beforeend', '<ul class="icons"><li><a href="https://github.com/LWTechGaming" class="icon alt fa-github"><span class="label">GitHub</span></a></li><li><a href="https://linkedin.com/in/linuswillner" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li><li><a href="https://twitter.com/LWTechGaming" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li><li><a href="https://instagram.com/LWTechGaming" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li></ul>')

  // Create email label
  email.innerHTML = l.contact.email[lang]
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
html.detectLang()
generateMenu(localStorage.getItem('lang'))
generateContact(localStorage.getItem('lang'))

},{"../lang.json":1,"../sitemap.json":2,"./html.js":4}],4:[function(require,module,exports){
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

},{}]},{},[3]);
