// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yello.svg)](https://opensource.org/license/mit/)',
    apache: '[![License: APACHE 2.0](https://img.shields.io/crates/l/ap)](https://opensource.org/license/apache-2-0/)',
    agplv3: '[![License: AGPL-v3](https://img.shields.io/eclipse-marketplace/l/notepad4e)](https://opensource.org/license/agpl-v3/)',
    bsd: '[![License: BSD](https://img.shields.io/pypi/l/so)](https://opensource.org/license/bsd-3-clause/)'
  }
  return badges[license]
}
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    mit: '[MIT](https://opensource.org/license/mit/)',
    apache: '[APACHE 2.0](https://opensource.org/license/apache-2-0/)',
    agplv3: '[AGPL-v3](https://opensource.org/license/agpl-v3/)',
    bsd: '[BSD](https://opensource.org/license/bsd-3-clause/)'
  }
  return licenseLinks[license]
}


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLinks = {
          mit: '[MIT](https://opensource.org/license/mit/)',
          apache: '[APACHE 2.0](https://opensource.org/license/apache-2-0/)',
          agplv3: '[AGPL-v3](https://opensource.org/license/agpl-v3/)',
          bsd: '[BSD](https://opensource.org/license/bsd-3-clause/)'
        }
        return licenseLinks[license]
}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
#${data.project}

 ##Table of Contents
 - [Project Description](#Description)
 - [Usage](#Usage)
 - [Installation](#Installation)
 - [Contribution](#Contribution)
 - [GitHub] (#GitHub)
 - [Email](#Email)
 - [License](#License)
  
## Description
${data.description}
## Usage
${data.usage}
## Installation
${data.installation}
## Contribution
${data.contribute}
## GitHub
${data.github}
## Email
${data.email}
##License
${data.license}
 `
}

module.exports = generateMarkdown;











// class MarkDown {

//   static renderLicenseBadge(license) {
//     const badges = {
//       mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yello.svg)](https://opensource.org/license/mit/)',
//       apache: '[![License: APACHE 2.0](https://img.shields.io/crates/l/ap)](https://opensource.org/license/apache-2-0/)',
//       agplv3: '[![License: AGPL-v3](https://img.shields.io/eclipse-marketplace/l/notepad4e)](https://opensource.org/license/agpl-v3/)',
//       bsd: '[![License: BSD](https://img.shields.io/pypi/l/so)](https://opensource.org/license/bsd-3-clause/)'
//     }
//     return badges[license]
//   }

//   static renderLicenseLink(license) {
//     const licenseLinks = {
//       mit: '[MIT](https://opensource.org/license/mit/)',
//       apache: '[APACHE 2.0](https://opensource.org/license/apache-2-0/)',
//       agplv3: '[AGPL-v3](https://opensource.org/license/agpl-v3/)',
//       bsd: '[BSD](https://opensource.org/license/bsd-3-clause/)'
//     }
//     return licenseLinks[license]
//   }

//   static generateMarkdown(answers) {
//     return `
// # ${answers.title}

// ${this.renderLicenseBadge(answers.license)}
// ##Table of Contents
// - [Project Description](#Description)
// - [Usage](#Usage)
// - [Installation](#Installation)
// - [Contribution](#Contribution)
// - [Contact](#Contact)
// - [License](#License)

// ## Description
// ${answers.description}
// ## Usage
// ${answers.usage}
// ## Installation
// ${answers.install}
// ## Contribution
// ${answers.contribute}
// ## Contact
// ${answers.contact}
// ##License
// ${this.renderLicenseLink(answers.license)}
// `
//   }
// }

// module.exports = MarkDown;
