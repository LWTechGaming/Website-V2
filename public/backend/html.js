function get (identifier, type) {
  return new Promise((resolve) => {
    switch (type) {
      case 'id':
        resolve(document.getElementById(identifier))
        break
      case 'name':
        resolve(document.getElementsByName(identifier))
        break
      case 'class':
        resolve(document.getElementsByClassName(identifier))
        break
      case 'tag':
        resolve(document.getElementsByTagName(identifier))
        break
      default:
        resolve(document.getElementById(identifier))
        break
    }
  })
}

exports.get = get
