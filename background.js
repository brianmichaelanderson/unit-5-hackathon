//The object sent from popup.js is paired with the message parameter of this listener function
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    //if action recieved wih openChatGPT message is recieved from popup.js then...
    if (message.action === 'openChatGPT') {
        //properly encode value of the query property in the message object and assign it to variable
        const query = encodeURIComponent(message.query);
        //add the properly encoded/formated url query variable as a template literal appended to url and assigned to vairable 
        const url = `https://chatgpt.com/?query=${query}`;
        //create new tab with new URL.  Doesn't work.  Try fetch/POST to chatGPT's API.
        chrome.tabs.create({ url: url });
    //  if (message.action === 'openUrl') {
    //  chrome.tabs.create({ url: message.url });
    }
  });
  


// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === 'openUrl') {
//       chrome.tabs.create({ url: message.url });
//     }
//   });