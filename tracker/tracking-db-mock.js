const db = {
  tracking: {
    {
      // Changes to a template generate a new template with a new id.
      // This allows us to track every template version independently.
      // Or we can group them by template name if required.
      templateId: '8de7ca1d-084e-4e6f-aaf2-2c2045832fbf',
      name: 'password-change',
      groupId: '26e9de24-f088-4216-a0e5-21cc9e28c555',
      sent: {
        total: 100,
        byEmail: {
          'lavonne.jakubowski48@ethereal.email': 1,
          'codealchemist@gmail.com': 99
        }
      },
      open: {
        total: 80,
        byEmail: {
          'lavonne.jakubowski48@ethereal.email': 1,
          'codealchemist@gmail.com': 1,
        }
      },
      clicks: {
        total: 50,
        links: {
          // Clicks per link id.
          'acbcf317-3a4e-442c-b8a7-165eb917d473': 10,
          'e36ad11d-9f3a-432f-b9b6-9ff0d68dffe2': 10,
          '03d7ed61-9418-480b-9bbf-846a6661cab1': 30
        },
        byEmail: {
          'lavonne.jakubowski48@ethereal.email': {}
        }
      }
    }
  }
}
