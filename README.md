# Auth0 Universal Login customization using Netlify

This repo is a proof-of-concept using Netlify to customize the Auth0 Universal Login page. This will push CSS and JS asset files to Netlify for hosting, then push a new template to your Auth0 tenant. This method works with any hosted asset file, whether that's Netlify, S3, or your own CDN.

## Getting it Working

### 1. Set the new Universal Login form

Set your tenant to use the [New Universal Login experience](https://auth0.com/docs/authenticate/login/auth0-universal-login/new-experience).

### 2. Sign up with Netlify

Sign up for a free [Netlify account here](https://app.netlify.com/signup).

### 3. Install the Netlify CLI and Authenticate

Use [the Netlify documentation](https://docs.netlify.com/cli/get-started/) to get `netlify-cli` installed. You should be able to run the following command and get a response:

```bash
$ which netlify
/path/to/node/bin/netlify
```

Follow the entire getting started guide to get authenticated.

### 4. Deploy to Netlify

The `netlify deploy --prod` command is what we'll use to get our files live on a URL. The first time you run that you will get a prompt to create a new site or deploy to an existing site. When the deployment completes, you'll see a URL for your site:

```bash
$ netlify deploy --prod
... stuff
✔ Finished hashing 4 files
✔ CDN requesting 0 files
✔ Finished uploading 0 assets
✔ Deploy is live!

Logs:              https://app.netlify.com/sites/elated-hawking-b7264a/deploys/620551f6df7a4031caab411f
Unique Deploy URL: https://620551f6df7a4031caab411f--elated-hawking-b7264a.netlify.app
Website URL:       https://elated-hawking-b7264a.netlify.app
```

That last URL, the **Website URL**, is the base URL for the assets we need to use. You should be able to load the following URLs:

- [elated-hawking-b7264a.netlify.app/ulp.css](https://elated-hawking-b7264a.netlify.app/ulp.css)
- [elated-hawking-b7264a.netlify.app/ulp.js](https://elated-hawking-b7264a.netlify.app/ulp.js)

### 5. Adjust the template

The `index.html` file here is fairly useless when deployed to Netlify but it's what we'll use as the template for our Universal Login page. Change that template to use the URLs output during the deloyment process. Note that single quotes are used in the HTML so it can be sent more easily as valid JSON.

### 6. Upload the template via the Management API

We're going to setup a connection to the Management API of your tenant by using a temporary access token.

1. [Follow the steps here](https://auth0.com/docs/secure/tokens/access-tokens/get-management-api-access-tokens-for-testing) to get an access token. You can adjust the scopes of the **API Explorer** app to just have `update:branding` permissions for a more secure call.
2. Create an `.env` file from `exmaple.env` and replace the values there with the ones from your tenant.
3. Run `sh bin/deploy_template.sh` and look for an output of 204 if the request completed properly.

### 7. Test it out

Go to **Authentication** > **Authentication Profile** in the [dashboard](https://manage.auth0.com/select-tenant?path=/authentication-profiles) for the tenant you're using here and click the **Try** button. You should see your changes live!

## References

- [Netlify documentation for the CLI](https://docs.netlify.com/cli/get-started/)
- [Netlify CLI deploy command](https://cli.netlify.com/commands/deploy)
- [Update the Universal Login template via the Management API](https://auth0.com/docs/api/management/v2#!/Branding/put_universal_login)
- [Generate an access token for the Management API](https://auth0.com/docs/secure/tokens/access-tokens/get-management-api-access-tokens-for-testing)
