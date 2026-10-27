import { resolve } from 'node:path'

function formatLocation (props) {
  const absolutePath = resolve(props.filePath)
  if (props.issue.line == null) {
    return absolutePath
  }
  if (props.issue.col == null) {
    return `${absolutePath}:${props.issue.line}`
  }
  return `${absolutePath}:${props.issue.line}:${props.issue.col}`
}

function formatDetails (props) {
  const details = []
  if (props.issue.line == null && props.issue.col != null) {
    details.push(`column: ${props.issue.col}`)
  }
  if (
    props.issue.line == null &&
    props.issue.col == null &&
    props.issue.pos != null
  ) {
    details.push(`position: ${props.issue.pos}`)
  }
  if (props.issue.kind != null) {
    details.push(`kind: ${props.issue.kind}`)
  }
  if (props.issue.specifier != null) {
    details.push(`specifier: ${props.issue.specifier}`)
  }
  if (props.issue.parentSymbol != null) {
    details.push(`parent: ${props.issue.parentSymbol}`)
  }
  if (props.issue.symbolType != null) {
    details.push(`symbol type: ${props.issue.symbolType}`)
  }
  if (details.length === 0) {
    return ''
  }
  return ` [${details.join(', ')}]`
}

function reportIssue (props) {
  const location = formatLocation({
    filePath: props.filePath,
    issue: props.issue
  })
  const details = formatDetails({ issue: props.issue })
  console.info(`${location}: ${props.issue.symbol}${details}`)

  if (props.issue.symbols == null) {
    return
  }
  for (const symbol of props.issue.symbols) {
    const symbolLocation = formatLocation({
      filePath: props.filePath,
      issue: symbol
    })
    const symbolDetails = formatDetails({ issue: symbol })
    console.info(`  ${symbolLocation}: ${symbol.symbol}${symbolDetails}`)
  }
}

const reporter = function (options) {
  const { issues } = options

  for (const entry of Object.entries(issues)) {
    const [category, records] = entry
    const _private = category.startsWith('_')
    if (_private) continue
    if (records instanceof Set) {
      if (records.size === 0) continue
      const files = [...records]
      const message = `knip ${category}: ${files.length} files`
      console.error(message)
      for (const file of files) {
        if (typeof file === 'string') {
          console.info(resolve(file))
        } else {
          console.info(resolve(file.filePath))
        }
      }
    } else {
      const recordEntries = Object.entries(records)
      const issueCount = recordEntries.reduce((acc, [file, fileIssues]) => acc + Object.values(fileIssues).length, 0)
      if (issueCount === 0) continue
      const message = `knip ${category}: ${recordEntries.length} files, ${issueCount} issues`
      console.error(message)
      for (const [file, fileIssues] of recordEntries) {
        for (const issue of Object.values(fileIssues)) {
          reportIssue({ filePath: file, issue })
        }
      }
    }
  }
}

export default reporter
