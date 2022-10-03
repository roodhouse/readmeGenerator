
var mit       = 'MIT License';
var moz       = 'Mozilla Public License 2.0';
var creative  = 'Creative Commons Zero v1.0 Universal'
var unLicense = 'The Unlicense'
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  // Determine wich badge to show based on license selection
  if(license === mit) {
    return '![MIT badge](https://img.shields.io/badge/license-MIT-green)'
  } else if(license === moz) {
    return '![Mozilla badge](https://img.shields.io/badge/license-Mozilla-orange)'
  } else if(license === creative) {
    return '![Creative Commons badge](https://img.shields.io/badge/license-Creative%20Commons-blue)'
  } else if(license === unLicense) {
    return '![Creative Commons badge](https://img.shields.io/badge/license-The%20Unlicense-critical)'
  } else {
    return ''
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, install, usage, contribute, test, license, github, email}) {
  return `# ${title} ${renderLicenseBadge(license)}
  
  ## Table of Contents
   - [Description](#description)
   - [License](#lincense)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Tests](#tests)
   - [Contribute](#contribute)
   - [Questions](#questions)

  ## Description
  #### ${description}

  ## License
  #### ${license}

  ## Installation
  #### ${install}
  
  ## Usage
  #### ${usage}

  ## Tests
  #### ${test}

  ## Contribute
  #### ${contribute}

  ## Questions
  #### github: [${github}](https://github.com/${github})
  #### Direct any questions to **${email}**

`;
}

module.exports = generateMarkdown;
