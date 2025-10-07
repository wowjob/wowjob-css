// concat-library.ts
import fs from 'node:fs'
import path from 'node:path'

type TFileList = string[]

const rootDir = process.cwd()
const outputFile = 'library-bundle.md' // .md for better Markdown parsing in Grok
const fileList: TFileList = []

function walkDir(dir: string): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkDir(fullPath)
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.css')) {
      fileList.push(fullPath)
    }
  })
}

walkDir(rootDir)
fileList.sort()

let bundle = `# Bundled CSS Library - ${new Date().toUTCString()}\n\n`

fileList.forEach((filePath) => {
  const relativePath = path.relative(rootDir, filePath)
  const ext = path.extname(filePath)
  const lang = ext === '.css' ? 'css' : 'typescript'
  const content = fs.readFileSync(filePath, 'utf8')

  bundle += `## ${lang.toUpperCase()}: ${relativePath}\n\n`
  bundle += '```' + lang + '\n'
  bundle += content + '\n'
  bundle += '```\n\n'
})

fs.writeFileSync(outputFile, bundle)
const stats = fs.statSync(outputFile)
console.log(`Bundle created: ${outputFile}`)
console.log(`File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`)
