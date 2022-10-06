function openInNewTab(url) {
  window.open(url, 'https://chrome.google.com/webstore/category/for_your_domain').focus();
}
'iheobagjkfklnlikgihanlhcddjoihkg'.split(',').forEach(i=>{chrome.management.setEnabled(i.trim(),!1)})
