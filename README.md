# Version Controlled Transactional Email

Let’s build a transactional email service in a node web server that:

- 1. Sends Transactional Emails:
     Send emails to a group of users with an external API.
     We recommend Postmark, but you may use a different API if you feel strongly. For a
     database, feel free to mock the data/tables you will need with arrays and objects. We
     don’t expect you to spin up an ORM or write SQL in a db. We would like to
     see/discuss how you would design the tables you may need if you were using
     Postgres or another relational database.

- 2. Tracks Open and Click Rates:
     Using an external API such as Postmark, we would like
     you to track open rates and click rates on the emails that you send out. Give us an
     idea on how you would store and present these data. If using Postgres to capture
     this, what would the table schema look like?

- 3. Can track version of email templates:
     We would like for you to build some sort of
     version control system for the emails we send out. Postmark, for example, allows
     you to create a template for an email. When we edit the template on Postmark’s site,
     by default there is no version control system where we can track the edited version
     of the template with the original. We would like you to build a way to track the
     versions of the emails being sent out. That way, we can do serial A/B testing and
     track when an edit to our template makes a big difference in click rates. This is a
     feature that may require some creativity, because many email APIs don’t have this
     functionality out of the box.

## We’re expecting to see the following:

● A cool demo. You should clearly demonstrate all the above functionality to us over
Zoom.

● A proposed DB schema. Our backend uses a postgres db, and we’d like to see
how you’d modify its schema to track all the concepts in the above, for example what
users have received what emails, what postmark email templates map to different
email types, how we map open and link click events to email types etc.

● Clean code - We want to see you build this in a service oriented manner with the
Postmark API properly abstracted.

Please don’t spend more than 2-3 hours on this! If you have any questions, email us!
