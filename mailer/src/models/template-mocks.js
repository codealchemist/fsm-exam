export default {
  '8de7ca1d-084e-4e6f-aaf2-2c2045832fbf': {
    name: 'welcome',
    subject: 'Welcome {{name}}!',
    text:
      'Hi {{name}}!\nWelcome onboard! Best wishes from our {{role}} {{roleName}} 👋',
    html:
      '<h1>Hi {{name}}!</h1>\n<p>Welcome onboard!</p>\n<br />\n<br />\n<p>Best wishes from our {{role}} <em>{{roleName}}</em> 👋</p>'
  },
  // Another version of the 'welcome' template.
  // Note it has a different guid.
  // Template grouping for comparisons can be done by 'name'.
  // Tracking is done by guid.
  '5417a875-64f5-4f46-b299-08339a815a1d': {
    name: 'welcome',
    subject: 'Welcome onboard!',
    text: 'Hello {{name}}!\nBest wishes from our team 👋',
    html:
      '<h1>Hello {{name}}!</h1>\n<br />\n<br />\n<p>Best wishes from our team 👋</p>'
  },
  'c7ac00ce-55f3-4e77-9eb8-96080c4773ab': {
    name: 'account-action',
    subject: 'Account {{action}}',
    text:
      'Hi {{name}}!\nYou account #{{accountId}} was {{action}} successfully.',
    html:
      '<h1>Hi {{name}}!</h1>\n<p>You account #{{accountId}} was {{action}} successfully.</p>'
  }
}
