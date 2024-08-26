# Email-send-express-typescript

Email send express typescript is a basic email sending process using rest endpoint.
- Express
- Typescript
- NodeMailer
- API

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage
1. Create a new file called `.env` and insert the following:
```bash
EMAIL_HOST="<INSERT SMTP HOST e.g. smtp.gmail.com>"
EMAIL_PORT=<INSERT SMTP PORT e.g. 587>
EMAIL_USERNAME="<INSERT EMAIL>"
EMAIL_PASSWORD="<INSERT APP PASSWORD>"
PORT=3000
```
Note: For gmail smtp, make sure to create and set app password. See reference:
- [How to create app password](https://knowledge.workspace.google.com/kb/how-to-create-app-passwords-000009237)
- [Support app password in nodemailer](https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer)
2. Run `npm run start` and it will open a port (e.g. 3000)
3. Open postman application and paste the provided curl request:
```bash
curl --location 'http://{{baseUrl}}:{{port}}/email/send' \
--header 'Content-Type: application/json' \
--data-raw '{
    "to": "jhonlance.37@gmail.com",
    "from": "test@mail.com",
    "subject": "Test email 002",
    
    "html": "<div>Hi This is a html content</div>",
    "name": "John Doe"
}'
````

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Owner
**John Michael Ong**
- [Portfolio](https://jmong143.github.io/github-portfolio/)
- [Linkedin profile](www.linkedin.com/in/john-michael-ong-3b2428b5)
