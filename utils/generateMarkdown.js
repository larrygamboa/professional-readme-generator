// function to generate markdown for README
function generateMarkdown(userResponse) {
  return `
  # ${userResponse.title}

  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions) 

  ## Description
  ${userResponse.desc}
  
  ## Installation
  ${userResponse.install}

  ## Usage
  ${userResponse.usage}

  ## Contributors
  ${userResponse.contributors}

  ## Tests
  ${userResponse.test}

  ## License
  ${userResponse.license}

  ## Got Questions?
  For any questions, please contact me with the information below:
  GitHub: ${userResponse.github}
  Email: ${userResponse.email}

  `;
}

module.exports = generateMarkdown;





// // generateReadme function populating the README.md
// function generateReadme(answers) {
//   return `
// <h1 align="center">${answers.projectTitle} 👋</h1>

// ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
// ## Description
// 🔍 ${answers.description}
// ## Table of Contents
// - [Description](#description)
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)
// ## Installation
// 💾 ${answers.installation}
// ## Usage
// 💻 ${answers.usage}
// ## License
// ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
// <br />
// This application is covered by the ${answers.license} license. 
// ## Contributing
// 👪 ${answers.contributing}
// ## Tests
// ✏️ ${answers.tests}
// ## Questions
// ✋ ${answers.questions}<br />
// <br />
// :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
// <br />
// ✉️ Email me with any questions: ${answers.email}<br /><br />
// _This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
//   `;
// }

// module.exports = generateReadme;
