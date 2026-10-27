const fs = require('fs')

function readJestOutput () {
  try {
    const contents = fs.readFileSync('./jest-results.json', 'utf8')
    return JSON.parse(contents)
  } catch {
    return null
  }
}

function getFailures (result) {
  const failedTests = result.assertionResults
    .filter(assertion => assertion.status === 'failed')
    .map(assertion => ({
      name: assertion.fullName || assertion.title,
      path: result.name,
      details: null
    }))

  if (failedTests.length > 0) {
    return failedTests
  }
  if (result.status !== 'failed' || !result.message) {
    return []
  }

  return [{
    name: 'Test suite failed',
    path: result.name,
    details: result.message
  }]
}

const jestOutput = readJestOutput()

if (jestOutput == null) {
  console.error('Jest failed before producing a valid JSON report.')
} else {
  const failedTests = jestOutput.testResults
    .flatMap(result => getFailures(result))

  console.info('Failed Tests Summary:')
  console.info('=====================')
  failedTests.forEach((test, index) => {
    console.info(`${index + 1}. ${test.name}`)
    console.info(`   File: ${test.path}`)
    if (test.details != null) {
      console.info(test.details)
    }
    console.info('')
  })
}

process.exitCode = 1
