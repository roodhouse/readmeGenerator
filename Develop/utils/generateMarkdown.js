// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, install, usage, contribute, test, license}) {
  return `# ${title} 
  
  ## Table of Contents

  ## Description
  ${description}

  ## Installation
  ${install}
  
  ## Usage
  ${usage}

  ## How to Contribute
  ${contribute}

  ## Tests
  ${test}

  ## License
  ${license}
`;
}

module.exports = generateMarkdown;
