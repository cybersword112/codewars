function printerError(s) {
    let tot = s.length
    let err = s.split('').filter(item=>item.charCodeAt(0) > 109).length
    return `${err}/${tot}`
}