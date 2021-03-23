# Publish-Package

## Description

Sometimes we need to share multiple pages and components in a microservices based architecture. One approach can be copy paste and another subtle and clean way is to share your components accross github organization. This project is aimed to ease the basic setup of a package publishing project in your organization.

This project uses 2 important libraries:

1. Microbundle CRL [Link](https://www.npmjs.com/package/microbundle-crl)
2. Storybook [What is storybook](https://storybook.js.org/)

## Setup

To get started with the setup visit these following files, comments are added in the respective files.

1. .github/workflows - nodejs.yml

2. .npmrc - You have to generate your personal access token [Personal Access Token Generation](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
3. package.json - update your publish config and repository details

## GETTING STARTED

1. Install all the dependencies

```
npm i

```

2. Run the project

```
npm run start

```

This should bring the storybook up.

![Storybook Image](https://i.ibb.co/Y3dJXBG/Screenshot-2021-03-23-at-8-49-33-AM.png)

## HOW TO DEVELOP

1. Develop your bulletproof UI Pages and Components inside Storybook [What is Storybook?](https://storybook.js.org/)
2. Export your components at index.js which is at /src folder.

That's it.
Once your push changes to master branch Github Actions should trigger the workflow.

You can now import your component in other project making the following changes

1. Add a new .npmrc file and fill-up the following details

```
registry=https://npm.pkg.github.com/your-organization
//npm.pkg.github.com/:_authToken=your_authToken
```

2. Add the package as a dependency in your project
   ![Package JSON](https://i.ibb.co/3MhKzSw/Screenshot-2021-03-23-at-8-38-36-AM.png)

3. Use the components of your package inside your main project
   ![Code Example](https://i.ibb.co/W2qJDGH/Screenshot-2021-03-23-at-8-36-04-AM.png)

4. Rendered like this in your main project
   ![Output](https://i.ibb.co/3TZZ7H4/Screenshot-2021-03-23-at-8-45-53-AM.png)
