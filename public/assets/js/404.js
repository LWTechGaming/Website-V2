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

},{"../lang.json":1,"./html.js":3}],3:[function(require,module,exports){
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

},{}]},{},[2]);
