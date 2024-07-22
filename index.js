const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentence => {
    return sentence.split(' ').map((word, index) => {
      // Special cases
      if (word.toLowerCase() === 'oo') return 'OO';
      if (word.toLowerCase() === 'api') return 'API';
      if (word.toLowerCase() === 'nan') return 'NaN';
      if (word.toLowerCase() === 'jsonp') return 'JSONP';
      
      // Handle StopPropagation and PreventDefault
      if (word.toLowerCase() === 'stoppropagation') return 'StopPropagation';
      if (word.toLowerCase() === 'preventdefault') return 'preventDefault';
      
      // Capitalize first letter of each word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
};
