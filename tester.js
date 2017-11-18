let user = 'Charles Babbage';

let friendCount = 3;

let message, messageColor;

if (user && friendCount) {
  message = `Hi ${user}! You have ${friendCount} ${friendCount === 1 ? 'friend' : 'friends'}!`;
} else {
  if (user) {
    message = 'Please sign in.';
  } else {
    message = 'Link up with your friends to get the most out of Flatbook!';
  }
}
// => "Hi Charles Babbage! You have 3 friends!"

if (message === 'Please sign in.' || message === 'Link up with your friends to get the most out of Flatbook!') {
  messageColor = 'red';
} else if (friendCount >= 1 && friendCount <= 10) {
  messageColor = 'blue';
} else if (friendCount >= 11 && friendCount <= 50) {
  messageColor = 'purple';
} else {
  messageColor = 'rainbow';
}
// => "blue"
console.log(message)
