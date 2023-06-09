// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'APACHE 2.0') {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPL 3.0') {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'BSD 3') {
    badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    badge = '';
  }
  return badge;
}
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink = '';
if (license === 'MIT') {
  licenseLink = `https://opensource.org/license/mit/`;
} else if (license === 'APACHE 2.0') {
  licenseLink = ``;
} else if (license === 'GPL 3.0') {
  licenseLink = ``;
} else if (license === 'BSD 3') {
  licenseLink = ``;
} else {
  licenseLink = ``;
}
return licenseLink;
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
    licenseSection = ``;
  } else {
    licenseSection = `${license}`
  }

  return licenseSection;
}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
## ${data.project}
${renderLicenseBadge(data.license)}

 ## Table of Contents
 - [Project Description](#Description)
 - [Usage](#Usage)
 - [Installation](#Installation)
 - [Contribution](#Contribution)
 - [GitHub](#GitHub)
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
## License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
${data.license}
 `
}

module.exports = generateMarkdown;
