document.addEventListener('DOMContentLoaded', function() {
  const textArea = document.getElementById('question');
  const button = document.getElementById('button');

  button.addEventListener('click', function() {
    //declare variable to hold query text input by user using trim to remove any preceding or ending white space
    const query = textArea.value.trim();
    //if there's a query, then send object with action and query propteries to background
    if(query) {
      chrome.runtime.sendMessage({ action: 'openChatGPT', query: query });
      //chrome.runtime.sendMessage({ action: 'openUrl', url: 'https://chatgpt.com/' });
    }  
  });
});


// document.addEventListener('DOMContentLoaded', function() {
//   const button = document.getElementById('button');
//   button.addEventListener('click', function(e) {
//   chrome.runtime.sendMessage({ action: 'openUrl', url: 'https://chatgpt.com/' });
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {  
//     const button = document.getElementById('button');
//     button.addEventListener('click', function(e) {
//     chrome.tabs.create({ url: 'https://chatgpt.com/' });
//   });
// });
