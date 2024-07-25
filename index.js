class Formatter {
 static capitalize (string){
  return string.charAt(0).toUpperCase() + string.slice(1)
 }

 static sanitize(string){
  return string.replace(/[^A-Za-z0-9 '-]+/g, '');
 }

 
  static titleize(str) {
    const alwaysLowerCase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    return words.map((word, index) => {
      if (index === 0 || !alwaysLowerCase.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    }).join(' ');
  }
}
