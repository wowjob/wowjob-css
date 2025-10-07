# Bundled CSS Library - Mon, 06 Oct 2025 21:19:50 GMT

## TYPESCRIPT: concat-library.ts

```typescript
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

```

## CSS: src/all.css

```css
/* WOWJOB UI CSS
Yet Another CSS UI library, which provides zero build time, best debugging DX, very flexible, reposniveness for RWD at core, and works with React, NextJS, Astro and more
Author: Marian Zburlea
Organization: Wow Job
GitHub: https://github.com/wowjob
Website: https://wowjob.blog
Website: https://wowjob.dev
Website: https://wowjob.ai
*/
/* CSS theme */
#wowjob-ui .theme-brand {
  --tch: 259;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-primary {
  --tch: 225;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-secondary {
  --tch: 318;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-tertiary {
  --tch: 245;
  --tcs: 86%;
  --tcl: 15%;
  --bgcl: 80%;
  --bdcl: 60%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-default {
  --tch: 221;
  --tcs: 13%;
  --tcl: 15%;
  --bgcl: 95%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-error {
  --tch: 4;
  --tcs: 86%;
  --tcl: 95%;
  --bgcl: 20%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-warning {
  --tch: 34;
  --tcs: 94%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-success {
  --tch: 152;
  --tcs: 77%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-info {
  --tch: 200;
  --tcs: 77%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-light {
  --tch: 0;
  --tcs: 0%;
  --tcl: 15%;
  --bgcl: 98%;
  --bdcl: 70%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-dark {
  --tch: 240;
  --tcs: 15%;
  --tcl: 95%;
  --bgcl: 15%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-accent {
  --tch: 50;
  --tcs: 94%;
  --tcl: 15%;
  --bgcl: 70%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-muted {
  --tch: 210;
  --tcs: 10%;
  --tcl: 50%;
  --bgcl: 90%;
  --bdcl: 70%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-highlight {
  --tch: 280;
  --tcs: 80%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}

/* CSS Properties */
#wowjob-ui .accent-color {
  --accent-color: auto;
  accent-color: var(--accent-color);
}
#wowjob-ui .align-content {
  --align-content: normal;
  align-content: var(--align-content);
}
#wowjob-ui .align-items {
  --align-items: normal;
  align-items: var(--align-items);
}
#wowjob-ui .align-self {
  --align-self: auto;
  align-self: var(--align-self);
}
#wowjob-ui .animation {
  --animation: none;
  animation: var(--animation);
}
#wowjob-ui .appearance {
  --appearance: none;
  appearance: var(--appearance);
}
#wowjob-ui .aspect-ratio {
  --aspect-ratio: auto;
  aspect-ratio: var(--aspect-ratio);
}
#wowjob-ui .backdrop-filter {
  --backdrop-filter: none;
  backdrop-filter: var(--backdrop-filter);
}
#wowjob-ui .backface-visibility {
  --backface-visibility: visible;
  backface-visibility: var(--backface-visibility);
}
#wowjob-ui .background {
  --background: transparent;
  background: var(--background);
}
#wowjob-ui .background-blend-mode {
  --background-blend-mode: normal;
  background-blend-mode: var(--background-blend-mode);
}
#wowjob-ui .background-clip {
  --background-clip: border-box;
  background-clip: var(--background-clip);
}
#wowjob-ui .background-origin {
  --background-origin: padding-box;
  background-origin: var(--background-origin);
}
#wowjob-ui .block-size {
  --block-size: auto;
  block-size: var(--block-size);
}
#wowjob-ui .margin {
  --margin: 0;
  margin: var(--margin);
}
#wowjob-ui .padding {
  --padding: 0;
  padding: var(--padding);
}
#wowjob-ui .border {
  --border: medium none currentcolor;
  border: var(--border);
}
#wowjob-ui .border-block {
  --border-block: undefined;
  border-block: var(--border-block);
}
#wowjob-ui .border-block-start {
  --border-block-start: none;
  border-block-start: var(--border-block-start);
}
#wowjob-ui .border-bottom {
  --border-bottom: undefined;
  border-bottom: var(--border-bottom);
}
#wowjob-ui .border-bottom-left-radius {
  --border-bottom-left-radius: 0;
  border-bottom-left-radius: var(--border-bottom-left-radius);
}
#wowjob-ui .border-bottom-right-radius {
  --border-bottom-right-radius: 0;
  border-bottom-right-radius: var(--border-bottom-right-radius);
}
#wowjob-ui .border-block-end {
  --border-block-end: none;
  border-block-end: var(--border-block-end);
}
#wowjob-ui .border-collapse {
  --border-collapse: separate;
  border-collapse: var(--border-collapse);
}
#wowjob-ui .border-end-end-radius {
  --border-end-end-radius: 0;
  border-end-end-radius: var(--border-end-end-radius);
}
#wowjob-ui .border-end-start-radius {
  --border-end-start-radius: 0;
  border-end-start-radius: var(--border-end-start-radius);
}
#wowjob-ui .border-image {
  --border-image: undefined;
  border-image: var(--border-image);
}
#wowjob-ui .border-inline {
  --border-inline: undefined;
  border-inline: var(--border-inline);
}
#wowjob-ui .border-left {
  --border-left: undefined;
  border-left: var(--border-left);
}
#wowjob-ui .border-inline-start {
  --border-inline-start: undefined;
  border-inline-start: var(--border-inline-start);
}
#wowjob-ui .border-inline-end {
  --border-inline-end: undefined;
  border-inline-end: var(--border-inline-end);
}
#wowjob-ui .border-radius {
  --border-radius: undefined;
  border-radius: var(--border-radius);
}
#wowjob-ui .border-right {
  --border-right: undefined;
  border-right: var(--border-right);
}
#wowjob-ui .border-width {
  --border-width: 0;
  border-width: var(--border-width);
}
#wowjob-ui .border-style {
  --border-style: none;
  border-style: var(--border-style);
}
#wowjob-ui .border-start-end-radius {
  --border-start-end-radius: 0;
  border-start-end-radius: var(--border-start-end-radius);
}
#wowjob-ui .border-start-start-radius {
  --border-start-start-radius: 0;
  border-start-start-radius: var(--border-start-start-radius);
}
#wowjob-ui .border-top {
  --border-top: undefined;
  border-top: var(--border-top);
}
#wowjob-ui .border-top-left-radius {
  --border-top-left-radius: 0;
  border-top-left-radius: var(--border-top-left-radius);
}
#wowjob-ui .border-top-right-radius {
  --border-top-right-radius: 0;
  border-top-right-radius: var(--border-top-right-radius);
}
#wowjob-ui .bottom {
  --bottom: auto;
  bottom: var(--bottom);
}
#wowjob-ui .box-shadow {
  --box-shadow: none;
  box-shadow: var(--box-shadow);
}
#wowjob-ui .box-sizing {
  --box-sizing: content-box;
  box-sizing: var(--box-sizing);
}
#wowjob-ui .break-after {
  --break-after: auto;
  break-after: var(--break-after);
}
#wowjob-ui .break-before {
  --break-before: auto;
  break-before: var(--break-before);
}
#wowjob-ui .break-inside {
  --break-inside: auto;
  break-inside: var(--break-inside);
}
#wowjob-ui .caption-side {
  --caption-side: top;
  caption-side: var(--caption-side);
}
#wowjob-ui .caret-color {
  --caret-color: auto;
  caret-color: var(--caret-color);
}
#wowjob-ui .clear {
  --clear: none;
  clear: var(--clear);
}
#wowjob-ui .clip {
  --clip: auto;
  clip: var(--clip);
}
#wowjob-ui .clip-path {
  --clip-path: none;
  clip-path: var(--clip-path);
}
#wowjob-ui .color {
  --color: currentcolor;
  color: var(--color);
}
#wowjob-ui .color-interpolation {
  --color-interpolation: srgb;
  color-interpolation: var(--color-interpolation);
}
#wowjob-ui .color-interpolation-filters {
  --color-interpolation-filters: linearrgb;
  color-interpolation-filters: var(--color-interpolation-filters);
}
#wowjob-ui .color-scheme {
  --color-scheme: normal;
  color-scheme: var(--color-scheme);
}
#wowjob-ui .column-count {
  --column-count: auto;
  column-count: var(--column-count);
}
#wowjob-ui .column-fill {
  --column-fill: balance;
  column-fill: var(--column-fill);
}
#wowjob-ui .column-gap {
  --column-gap: normal;
  column-gap: var(--column-gap);
}
#wowjob-ui .column-rule {
  --column-rule: undefined;
  column-rule: var(--column-rule);
}
#wowjob-ui .column-span {
  --column-span: none;
  column-span: var(--column-span);
}
#wowjob-ui .column-width {
  --column-width: auto;
  column-width: var(--column-width);
}
#wowjob-ui .contain {
  --contain: none;
  contain: var(--contain);
}
#wowjob-ui .contain-intrinsic-block-size {
  --contain-intrinsic-block-size: auto;
  contain-intrinsic-block-size: var(--contain-intrinsic-block-size);
}
#wowjob-ui .contain-intrinsic-height {
  --contain-intrinsic-height: auto;
  contain-intrinsic-height: var(--contain-intrinsic-height);
}
#wowjob-ui .contain-intrinsic-inline-size {
  --contain-intrinsic-inline-size: auto;
  contain-intrinsic-inline-size: var(--contain-intrinsic-inline-size);
}
#wowjob-ui .contain-intrinsic-size {
  --contain-intrinsic-size: undefined;
  contain-intrinsic-size: var(--contain-intrinsic-size);
}
#wowjob-ui .contain-intrinsic-width {
  --contain-intrinsic-width: auto;
  contain-intrinsic-width: var(--contain-intrinsic-width);
}
#wowjob-ui .container {
  --container: undefined;
  container: var(--container);
}
#wowjob-ui .content {
  --content: normal;
  content: var(--content);
}
#wowjob-ui .content-visibility {
  --content-visibility: visible;
  content-visibility: var(--content-visibility);
}
#wowjob-ui .counter-increment {
  --counter-increment: none;
  counter-increment: var(--counter-increment);
}
#wowjob-ui .counter-reset {
  --counter-reset: none;
  counter-reset: var(--counter-reset);
}
#wowjob-ui .counter-set {
  --counter-set: none;
  counter-set: var(--counter-set);
}
#wowjob-ui .cursor {
  --cursor: auto;
  cursor: var(--cursor);
}
#wowjob-ui .cx {
  --cx: undefined;
  cx: var(--cx);
}
#wowjob-ui .cy {
  --cy: undefined;
  cy: var(--cy);
}
#wowjob-ui .d {
  --d: undefined;
  d: var(--d);
}
#wowjob-ui .direction {
  --direction: ltr;
  direction: var(--direction);
}
#wowjob-ui .dominant-baseline {
  --dominant-baseline: auto;
  dominant-baseline: var(--dominant-baseline);
}
#wowjob-ui .empty-cells {
  --empty-cells: show;
  empty-cells: var(--empty-cells);
}
#wowjob-ui .display {
  --display: inline;
  display: var(--display);
}
#wowjob-ui .flex {
  --flex: 0 1 auto;
  flex: var(--flex);
}
#wowjob-ui .flex-basis {
  --flex-basis: auto;
  flex-basis: var(--flex-basis);
}
#wowjob-ui .flex-direction {
  --flex-direction: row;
  flex-direction: var(--flex-direction);
}
#wowjob-ui .flex-grow {
  --flex-grow: 0;
  flex-grow: var(--flex-grow);
}
#wowjob-ui .flex-shrink {
  --flex-shrink: 1;
  flex-shrink: var(--flex-shrink);
}
#wowjob-ui .font-variant {
  --font-variant: undefined;
  font-variant: var(--font-variant);
}
#wowjob-ui .font-weight {
  --font-weight: 400;
  font-weight: var(--font-weight);
}
#wowjob-ui .flex-wrap {
  --flex-wrap: nowrap;
  flex-wrap: var(--flex-wrap);
}
#wowjob-ui .field-sizing {
  --field-sizing: undefined;
  field-sizing: var(--field-sizing);
}
#wowjob-ui .fill {
  --fill: black;
  fill: var(--fill);
}
#wowjob-ui .fill-opacity {
  --fill-opacity: 1;
  fill-opacity: var(--fill-opacity);
}
#wowjob-ui .fill-rule {
  --fill-rule: nonzero;
  fill-rule: var(--fill-rule);
}
#wowjob-ui .filter {
  --filter: none;
  filter: var(--filter);
}
#wowjob-ui .float {
  --float: none;
  float: var(--float);
}
#wowjob-ui .flood-color {
  --flood-color: black;
  flood-color: var(--flood-color);
}
#wowjob-ui .flood-opacity {
  --flood-opacity: 1;
  flood-opacity: var(--flood-opacity);
}
#wowjob-ui .font {
  --font: 1rem sans-serif;
  font: var(--font);
}
#wowjob-ui .font-family {
  --font-family: serif;
  font-family: var(--font-family);
}
#wowjob-ui .font-size {
  --font-size: 16;
  font-size: var(--font-size);
}
#wowjob-ui .font-stretch {
  --font-stretch: normal;
  font-stretch: var(--font-stretch);
}
#wowjob-ui .font-style {
  --font-style: normal;
  font-style: var(--font-style);
}
#wowjob-ui .font-feature-settings {
  --font-feature-settings: normal;
  font-feature-settings: var(--font-feature-settings);
}
#wowjob-ui .font-kerning {
  --font-kerning: auto;
  font-kerning: var(--font-kerning);
}
#wowjob-ui .font-language-override {
  --font-language-override: undefined;
  font-language-override: var(--font-language-override);
}
#wowjob-ui .font-optical-sizing {
  --font-optical-sizing: auto;
  font-optical-sizing: var(--font-optical-sizing);
}
#wowjob-ui .font-palette {
  --font-palette: normal;
  font-palette: var(--font-palette);
}
#wowjob-ui .font-size-adjust {
  --font-size-adjust: none;
  font-size-adjust: var(--font-size-adjust);
}
#wowjob-ui .font-synthesis-small-caps {
  --font-synthesis-small-caps: auto;
  font-synthesis-small-caps: var(--font-synthesis-small-caps);
}
#wowjob-ui .font-synthesis-style {
  --font-synthesis-style: auto;
  font-synthesis-style: var(--font-synthesis-style);
}
#wowjob-ui .font-synthesis-weight {
  --font-synthesis-weight: auto;
  font-synthesis-weight: var(--font-synthesis-weight);
}
#wowjob-ui .font-variant-alternates {
  --font-variant-alternates: normal;
  font-variant-alternates: var(--font-variant-alternates);
}
#wowjob-ui .font-variant-caps {
  --font-variant-caps: normal;
  font-variant-caps: var(--font-variant-caps);
}
#wowjob-ui .font-variant-east-asian {
  --font-variant-east-asian: normal;
  font-variant-east-asian: var(--font-variant-east-asian);
}
#wowjob-ui .font-variant-ligatures {
  --font-variant-ligatures: normal;
  font-variant-ligatures: var(--font-variant-ligatures);
}
#wowjob-ui .font-variant-numeric {
  --font-variant-numeric: normal;
  font-variant-numeric: var(--font-variant-numeric);
}
#wowjob-ui .font-variant-position {
  --font-variant-position: normal;
  font-variant-position: var(--font-variant-position);
}
#wowjob-ui .font-variation-settings {
  --font-variation-settings: normal;
  font-variation-settings: var(--font-variation-settings);
}
#wowjob-ui .forced-color-adjust {
  --forced-color-adjust: undefined;
  forced-color-adjust: var(--forced-color-adjust);
}
#wowjob-ui .gap {
  --gap: normal;
  gap: var(--gap);
}
#wowjob-ui .grid-auto-columns {
  --grid-auto-columns: auto;
  grid-auto-columns: var(--grid-auto-columns);
}
#wowjob-ui .grid-auto-flow {
  --grid-auto-flow: row;
  grid-auto-flow: var(--grid-auto-flow);
}
#wowjob-ui .grid-auto-rows {
  --grid-auto-rows: auto;
  grid-auto-rows: var(--grid-auto-rows);
}
#wowjob-ui .grid-column {
  --grid-column: undefined;
  grid-column: var(--grid-column);
}
#wowjob-ui .grid-row {
  --grid-row: undefined;
  grid-row: var(--grid-row);
}
#wowjob-ui .grid-template {
  --grid-template: undefined;
  grid-template: var(--grid-template);
}
#wowjob-ui .grid-template-columns {
  --grid-template-columns: none;
  grid-template-columns: var(--grid-template-columns);
}
#wowjob-ui .grid-template-rows {
  --grid-template-rows: none;
  grid-template-rows: var(--grid-template-rows);
}
#wowjob-ui .grid-template-areas {
  --grid-template-areas: none;
  grid-template-areas: var(--grid-template-areas);
}
#wowjob-ui .height {
  --height: auto;
  height: var(--height);
}
#wowjob-ui .hyphenate-character {
  --hyphenate-character: auto;
  hyphenate-character: var(--hyphenate-character);
}
#wowjob-ui .hyphens {
  --hyphens: manual;
  hyphens: var(--hyphens);
}
#wowjob-ui .image-orientation {
  --image-orientation: from-image;
  image-orientation: var(--image-orientation);
}
#wowjob-ui .image-rendering {
  --image-rendering: auto;
  image-rendering: var(--image-rendering);
}
#wowjob-ui .inline-size {
  --inline-size: auto;
  inline-size: var(--inline-size);
}
#wowjob-ui .inset {
  --inset: auto;
  inset: var(--inset);
}
#wowjob-ui .inset-block {
  --inset-block: undefined;
  inset-block: var(--inset-block);
}
#wowjob-ui .inset-inline {
  --inset-inline: undefined;
  inset-inline: var(--inset-inline);
}
#wowjob-ui .isolation {
  --isolation: auto;
  isolation: var(--isolation);
}
#wowjob-ui .justify-content {
  --justify-content: normal;
  justify-content: var(--justify-content);
}
#wowjob-ui .justify-items {
  --justify-items: legacy;
  justify-items: var(--justify-items);
}
#wowjob-ui .justify-self {
  --justify-self: auto;
  justify-self: var(--justify-self);
}
#wowjob-ui .left {
  --left: auto;
  left: var(--left);
}
#wowjob-ui .right {
  --right: auto;
  right: var(--right);
}
#wowjob-ui .top {
  --top: auto;
  top: var(--top);
}
#wowjob-ui .letter-spacing {
  --letter-spacing: normal;
  letter-spacing: var(--letter-spacing);
}
#wowjob-ui .lighting-color {
  --lighting-color: white;
  lighting-color: var(--lighting-color);
}
#wowjob-ui .line-break {
  --line-break: auto;
  line-break: var(--line-break);
}
#wowjob-ui .line-height {
  --line-height: normal;
  line-height: var(--line-height);
}
#wowjob-ui .list-style {
  --list-style: undefined;
  list-style: var(--list-style);
}
#wowjob-ui .margin-block {
  --margin-block: undefined;
  margin-block: var(--margin-block);
}
#wowjob-ui .margin-inline {
  --margin-inline: undefined;
  margin-inline: var(--margin-inline);
}
#wowjob-ui .mask {
  --mask: none;
  mask: var(--mask);
}
#wowjob-ui .mask-clip {
  --mask-clip: border-box;
  mask-clip: var(--mask-clip);
}
#wowjob-ui .math-style {
  --math-style: normal;
  math-style: var(--math-style);
}
#wowjob-ui .max-block-size {
  --max-block-size: none;
  max-block-size: var(--max-block-size);
}
#wowjob-ui .max-height {
  --max-height: none;
  max-height: var(--max-height);
}
#wowjob-ui .max-inline-size {
  --max-inline-size: none;
  max-inline-size: var(--max-inline-size);
}
#wowjob-ui .max-width {
  --max-width: none;
  max-width: var(--max-width);
}
#wowjob-ui .min-block-size {
  --min-block-size: auto;
  min-block-size: var(--min-block-size);
}
#wowjob-ui .min-height {
  --min-height: auto;
  min-height: var(--min-height);
}
#wowjob-ui .min-inline-size {
  --min-inline-size: auto;
  min-inline-size: var(--min-inline-size);
}
#wowjob-ui .min-width {
  --min-width: auto;
  min-width: var(--min-width);
}
#wowjob-ui .mix-blend-mode {
  --mix-blend-mode: normal;
  mix-blend-mode: var(--mix-blend-mode);
}
#wowjob-ui .object-fit {
  --object-fit: fill;
  object-fit: var(--object-fit);
}
#wowjob-ui .object-position {
  --object-position: 50% 50%;
  object-position: var(--object-position);
}
#wowjob-ui .offset-anchor {
  --offset-anchor: auto;
  offset-anchor: var(--offset-anchor);
}
#wowjob-ui .offset {
  --offset: undefined;
  offset: var(--offset);
}
#wowjob-ui .opacity {
  --opacity: 1;
  opacity: var(--opacity);
}
#wowjob-ui .order {
  --order: 0;
  order: var(--order);
}
#wowjob-ui .outline {
  --outline: invert;
  outline: var(--outline);
}
#wowjob-ui .outline-offset {
  --outline-offset: 0;
  outline-offset: var(--outline-offset);
}
#wowjob-ui .overflow {
  --overflow: visible;
  overflow: var(--overflow);
}
#wowjob-ui .overscroll-behavior {
  --overscroll-behavior: undefined;
  overscroll-behavior: var(--overscroll-behavior);
}
#wowjob-ui .overscroll-behavior-block {
  --overscroll-behavior-block: auto;
  overscroll-behavior-block: var(--overscroll-behavior-block);
}
#wowjob-ui .overscroll-behavior-inline {
  --overscroll-behavior-inline: auto;
  overscroll-behavior-inline: var(--overscroll-behavior-inline);
}
#wowjob-ui .perspective {
  --perspective: none;
  perspective: var(--perspective);
}
#wowjob-ui .perspective-origin {
  --perspective-origin: 50% 50%;
  perspective-origin: var(--perspective-origin);
}
#wowjob-ui .place-content {
  --place-content: normal;
  place-content: var(--place-content);
}
#wowjob-ui .place-items {
  --place-items: normal;
  place-items: var(--place-items);
}
#wowjob-ui .place-self {
  --place-self: auto;
  place-self: var(--place-self);
}
#wowjob-ui .pointer-events {
  --pointer-events: auto;
  pointer-events: var(--pointer-events);
}
#wowjob-ui .position {
  --position: static;
  position: var(--position);
}
#wowjob-ui .quotes {
  --quotes: auto;
  quotes: var(--quotes);
}
#wowjob-ui .resize {
  --resize: none;
  resize: var(--resize);
}
#wowjob-ui .rotate {
  --rotate: none;
  rotate: var(--rotate);
}
#wowjob-ui .ruby-align {
  --ruby-align: space-around;
  ruby-align: var(--ruby-align);
}
#wowjob-ui .ruby-position {
  --ruby-position: over;
  ruby-position: var(--ruby-position);
}
#wowjob-ui .scale {
  --scale: 1;
  scale: var(--scale);
}
#wowjob-ui .scroll-behavior {
  --scroll-behavior: auto;
  scroll-behavior: var(--scroll-behavior);
}
#wowjob-ui .scroll-margin {
  --scroll-margin: 0;
  scroll-margin: var(--scroll-margin);
}
#wowjob-ui .scroll-padding {
  --scroll-padding: 0;
  scroll-padding: var(--scroll-padding);
}
#wowjob-ui .scroll-snap-align {
  --scroll-snap-align: none;
  scroll-snap-align: var(--scroll-snap-align);
}
#wowjob-ui .scroll-snap-stop {
  --scroll-snap-stop: normal;
  scroll-snap-stop: var(--scroll-snap-stop);
}
#wowjob-ui .scroll-snap-type {
  --scroll-snap-type: none;
  scroll-snap-type: var(--scroll-snap-type);
}
#wowjob-ui .scroll-timeline {
  --scroll-timeline: undefined;
  scroll-timeline: var(--scroll-timeline);
}
#wowjob-ui .scroll-timeline-axis {
  --scroll-timeline-axis: undefined;
  scroll-timeline-axis: var(--scroll-timeline-axis);
}
#wowjob-ui .scroll-timeline-name {
  --scroll-timeline-name: undefined;
  scroll-timeline-name: var(--scroll-timeline-name);
}
#wowjob-ui .scrollbar-color {
  --scrollbar-color: undefined;
  scrollbar-color: var(--scrollbar-color);
}
#wowjob-ui .scrollbar-gutter {
  --scrollbar-gutter: auto;
  scrollbar-gutter: var(--scrollbar-gutter);
}
#wowjob-ui .scrollbar-width {
  --scrollbar-width: auto;
  scrollbar-width: var(--scrollbar-width);
}
#wowjob-ui .shape-image-threshold {
  --shape-image-threshold: 0;
  shape-image-threshold: var(--shape-image-threshold);
}
#wowjob-ui .shape-margin {
  --shape-margin: 0;
  shape-margin: var(--shape-margin);
}
#wowjob-ui .shape-outside {
  --shape-outside: none;
  shape-outside: var(--shape-outside);
}
#wowjob-ui .shape-rendering {
  --shape-rendering: auto;
  shape-rendering: var(--shape-rendering);
}
#wowjob-ui .stop-color {
  --stop-color: black;
  stop-color: var(--stop-color);
}
#wowjob-ui .stop-opacity {
  --stop-opacity: 1;
  stop-opacity: var(--stop-opacity);
}
#wowjob-ui .stroke {
  --stroke: none;
  stroke: var(--stroke);
}
#wowjob-ui .stroke-dasharray {
  --stroke-dasharray: none;
  stroke-dasharray: var(--stroke-dasharray);
}
#wowjob-ui .stroke-dashoffset {
  --stroke-dashoffset: 0;
  stroke-dashoffset: var(--stroke-dashoffset);
}
#wowjob-ui .stroke-linecap {
  --stroke-linecap: butt;
  stroke-linecap: var(--stroke-linecap);
}
#wowjob-ui .stroke-linejoin {
  --stroke-linejoin: miter;
  stroke-linejoin: var(--stroke-linejoin);
}
#wowjob-ui .stroke-miterlimit {
  --stroke-miterlimit: 4;
  stroke-miterlimit: var(--stroke-miterlimit);
}
#wowjob-ui .stroke-opacity {
  --stroke-opacity: 1;
  stroke-opacity: var(--stroke-opacity);
}
#wowjob-ui .stroke-width {
  --stroke-width: 1;
  stroke-width: var(--stroke-width);
}
#wowjob-ui .tab-size {
  --tab-size: 8;
  tab-size: var(--tab-size);
}
#wowjob-ui .table-layout {
  --table-layout: auto;
  table-layout: var(--table-layout);
}
#wowjob-ui .text-align {
  --text-align: start;
  text-align: var(--text-align);
}
#wowjob-ui .text-align-last {
  --text-align-last: auto;
  text-align-last: var(--text-align-last);
}
#wowjob-ui .text-anchor {
  --text-anchor: start;
  text-anchor: var(--text-anchor);
}
#wowjob-ui .text-combine-upright {
  --text-combine-upright: none;
  text-combine-upright: var(--text-combine-upright);
}
#wowjob-ui .text-decoration {
  --text-decoration: undefined;
  text-decoration: var(--text-decoration);
}
#wowjob-ui .text-emphasis {
  --text-emphasis: undefined;
  text-emphasis: var(--text-emphasis);
}
#wowjob-ui .text-indent {
  --text-indent: 0;
  text-indent: var(--text-indent);
}
#wowjob-ui .text-justify {
  --text-justify: undefined;
  text-justify: var(--text-justify);
}
#wowjob-ui .text-orientation {
  --text-orientation: mixed;
  text-orientation: var(--text-orientation);
}
#wowjob-ui .text-overflow {
  --text-overflow: clip;
  text-overflow: var(--text-overflow);
}
#wowjob-ui .text-rendering {
  --text-rendering: auto;
  text-rendering: var(--text-rendering);
}
#wowjob-ui .text-shadow {
  --text-shadow: none;
  text-shadow: var(--text-shadow);
}
#wowjob-ui .text-transform {
  --text-transform: none;
  text-transform: var(--text-transform);
}
#wowjob-ui .text-underline-offset {
  --text-underline-offset: auto;
  text-underline-offset: var(--text-underline-offset);
}
#wowjob-ui .text-underline-position {
  --text-underline-position: auto;
  text-underline-position: var(--text-underline-position);
}
#wowjob-ui .text-wrap {
  --text-wrap: undefined;
  text-wrap: var(--text-wrap);
}
#wowjob-ui .text-wrap-style {
  --text-wrap-style: normal;
  text-wrap-style: var(--text-wrap-style);
}
#wowjob-ui .touch-action {
  --touch-action: auto;
  touch-action: var(--touch-action);
}
#wowjob-ui .transform {
  --transform: none;
  transform: var(--transform);
}
#wowjob-ui .transform-box {
  --transform-box: border-box;
  transform-box: var(--transform-box);
}
#wowjob-ui .transform-origin {
  --transform-origin: 50% 50% 0;
  transform-origin: var(--transform-origin);
}
#wowjob-ui .transform-style {
  --transform-style: flat;
  transform-style: var(--transform-style);
}
#wowjob-ui .transition {
  --transition: all 0s ease 0s;
  transition: var(--transition);
}
#wowjob-ui .transition-behavior {
  --transition-behavior: auto;
  transition-behavior: var(--transition-behavior);
}
#wowjob-ui .translate {
  --translate: none;
  translate: var(--translate);
}
#wowjob-ui .user-select {
  --user-select: auto;
  user-select: var(--user-select);
}
#wowjob-ui .vector-effect {
  --vector-effect: none;
  vector-effect: var(--vector-effect);
}
#wowjob-ui .vertical-align {
  --vertical-align: baseline;
  vertical-align: var(--vertical-align);
}
#wowjob-ui .view-transition-name {
  --view-transition-name: undefined;
  view-transition-name: var(--view-transition-name);
}
#wowjob-ui .visibility {
  --visibility: visible;
  visibility: var(--visibility);
}
#wowjob-ui .white-space {
  --white-space: undefined;
  white-space: var(--white-space);
}
#wowjob-ui .width {
  --width: auto;
  width: var(--width);
}
#wowjob-ui .will-change {
  --will-change: auto;
  will-change: var(--will-change);
}
#wowjob-ui .word-break {
  --word-break: normal;
  word-break: var(--word-break);
}
#wowjob-ui .word-spacing {
  --word-spacing: 0;
  word-spacing: var(--word-spacing);
}
#wowjob-ui .writing-mode {
  --writing-mode: horizontal-tb;
  writing-mode: var(--writing-mode);
}
#wowjob-ui .z-index {
  --z-index: auto;
  z-index: var(--z-index);
}
#wowjob-ui .zoom {
  --zoom: auto;
  zoom: var(--zoom);
}


@media screen and (min-width: 48rem) {
#wowjob-ui .tablet.accent-color {
  --t-accent-color: var(--accent-color);
  accent-color: var(--t-accent-color);
}
#wowjob-ui .tablet.align-content {
  --t-align-content: var(--align-content);
  align-content: var(--t-align-content);
}
#wowjob-ui .tablet.align-items {
  --t-align-items: var(--align-items);
  align-items: var(--t-align-items);
}
#wowjob-ui .tablet.align-self {
  --t-align-self: var(--align-self);
  align-self: var(--t-align-self);
}
#wowjob-ui .tablet.animation {
  --t-animation: var(--animation);
  animation: var(--t-animation);
}
#wowjob-ui .tablet.appearance {
  --t-appearance: var(--appearance);
  appearance: var(--t-appearance);
}
#wowjob-ui .tablet.aspect-ratio {
  --t-aspect-ratio: var(--aspect-ratio);
  aspect-ratio: var(--t-aspect-ratio);
}
#wowjob-ui .tablet.backdrop-filter {
  --t-backdrop-filter: var(--backdrop-filter);
  backdrop-filter: var(--t-backdrop-filter);
}
#wowjob-ui .tablet.backface-visibility {
  --t-backface-visibility: var(--backface-visibility);
  backface-visibility: var(--t-backface-visibility);
}
#wowjob-ui .tablet.background {
  --t-background: var(--background);
  background: var(--t-background);
}
#wowjob-ui .tablet.background-blend-mode {
  --t-background-blend-mode: var(--background-blend-mode);
  background-blend-mode: var(--t-background-blend-mode);
}
#wowjob-ui .tablet.background-clip {
  --t-background-clip: var(--background-clip);
  background-clip: var(--t-background-clip);
}
#wowjob-ui .tablet.background-origin {
  --t-background-origin: var(--background-origin);
  background-origin: var(--t-background-origin);
}
#wowjob-ui .tablet.block-size {
  --t-block-size: var(--block-size);
  block-size: var(--t-block-size);
}
#wowjob-ui .tablet.margin {
  --t-margin: var(--margin);
  margin: var(--t-margin);
}
#wowjob-ui .tablet.padding {
  --t-padding: var(--padding);
  padding: var(--t-padding);
}
#wowjob-ui .tablet.border {
  --t-border: var(--border);
  border: var(--t-border);
}
#wowjob-ui .tablet.border-block {
  --t-border-block: var(--border-block);
  border-block: var(--t-border-block);
}
#wowjob-ui .tablet.border-block-start {
  --t-border-block-start: var(--border-block-start);
  border-block-start: var(--t-border-block-start);
}
#wowjob-ui .tablet.border-bottom {
  --t-border-bottom: var(--border-bottom);
  border-bottom: var(--t-border-bottom);
}
#wowjob-ui .tablet.border-bottom-left-radius {
  --t-border-bottom-left-radius: var(--border-bottom-left-radius);
  border-bottom-left-radius: var(--t-border-bottom-left-radius);
}
#wowjob-ui .tablet.border-bottom-right-radius {
  --t-border-bottom-right-radius: var(--border-bottom-right-radius);
  border-bottom-right-radius: var(--t-border-bottom-right-radius);
}
#wowjob-ui .tablet.border-block-end {
  --t-border-block-end: var(--border-block-end);
  border-block-end: var(--t-border-block-end);
}
#wowjob-ui .tablet.border-collapse {
  --t-border-collapse: var(--border-collapse);
  border-collapse: var(--t-border-collapse);
}
#wowjob-ui .tablet.border-end-end-radius {
  --t-border-end-end-radius: var(--border-end-end-radius);
  border-end-end-radius: var(--t-border-end-end-radius);
}
#wowjob-ui .tablet.border-end-start-radius {
  --t-border-end-start-radius: var(--border-end-start-radius);
  border-end-start-radius: var(--t-border-end-start-radius);
}
#wowjob-ui .tablet.border-image {
  --t-border-image: var(--border-image);
  border-image: var(--t-border-image);
}
#wowjob-ui .tablet.border-inline {
  --t-border-inline: var(--border-inline);
  border-inline: var(--t-border-inline);
}
#wowjob-ui .tablet.border-left {
  --t-border-left: var(--border-left);
  border-left: var(--t-border-left);
}
#wowjob-ui .tablet.border-inline-start {
  --t-border-inline-start: var(--border-inline-start);
  border-inline-start: var(--t-border-inline-start);
}
#wowjob-ui .tablet.border-inline-end {
  --t-border-inline-end: var(--border-inline-end);
  border-inline-end: var(--t-border-inline-end);
}
#wowjob-ui .tablet.border-radius {
  --t-border-radius: var(--border-radius);
  border-radius: var(--t-border-radius);
}
#wowjob-ui .tablet.border-right {
  --t-border-right: var(--border-right);
  border-right: var(--t-border-right);
}
#wowjob-ui .tablet.border-width {
  --t-border-width: var(--border-width);
  border-width: var(--t-border-width);
}
#wowjob-ui .tablet.border-style {
  --t-border-style: var(--border-style);
  border-style: var(--t-border-style);
}
#wowjob-ui .tablet.border-start-end-radius {
  --t-border-start-end-radius: var(--border-start-end-radius);
  border-start-end-radius: var(--t-border-start-end-radius);
}
#wowjob-ui .tablet.border-start-start-radius {
  --t-border-start-start-radius: var(--border-start-start-radius);
  border-start-start-radius: var(--t-border-start-start-radius);
}
#wowjob-ui .tablet.border-top {
  --t-border-top: var(--border-top);
  border-top: var(--t-border-top);
}
#wowjob-ui .tablet.border-top-left-radius {
  --t-border-top-left-radius: var(--border-top-left-radius);
  border-top-left-radius: var(--t-border-top-left-radius);
}
#wowjob-ui .tablet.border-top-right-radius {
  --t-border-top-right-radius: var(--border-top-right-radius);
  border-top-right-radius: var(--t-border-top-right-radius);
}
#wowjob-ui .tablet.bottom {
  --t-bottom: var(--bottom);
  bottom: var(--t-bottom);
}
#wowjob-ui .tablet.box-shadow {
  --t-box-shadow: var(--box-shadow);
  box-shadow: var(--t-box-shadow);
}
#wowjob-ui .tablet.box-sizing {
  --t-box-sizing: var(--box-sizing);
  box-sizing: var(--t-box-sizing);
}
#wowjob-ui .tablet.break-after {
  --t-break-after: var(--break-after);
  break-after: var(--t-break-after);
}
#wowjob-ui .tablet.break-before {
  --t-break-before: var(--break-before);
  break-before: var(--t-break-before);
}
#wowjob-ui .tablet.break-inside {
  --t-break-inside: var(--break-inside);
  break-inside: var(--t-break-inside);
}
#wowjob-ui .tablet.caption-side {
  --t-caption-side: var(--caption-side);
  caption-side: var(--t-caption-side);
}
#wowjob-ui .tablet.caret-color {
  --t-caret-color: var(--caret-color);
  caret-color: var(--t-caret-color);
}
#wowjob-ui .tablet.clear {
  --t-clear: var(--clear);
  clear: var(--t-clear);
}
#wowjob-ui .tablet.clip {
  --t-clip: var(--clip);
  clip: var(--t-clip);
}
#wowjob-ui .tablet.clip-path {
  --t-clip-path: var(--clip-path);
  clip-path: var(--t-clip-path);
}
#wowjob-ui .tablet.color {
  --t-color: var(--color);
  color: var(--t-color);
}
#wowjob-ui .tablet.color-interpolation {
  --t-color-interpolation: var(--color-interpolation);
  color-interpolation: var(--t-color-interpolation);
}
#wowjob-ui .tablet.color-interpolation-filters {
  --t-color-interpolation-filters: var(--color-interpolation-filters);
  color-interpolation-filters: var(--t-color-interpolation-filters);
}
#wowjob-ui .tablet.color-scheme {
  --t-color-scheme: var(--color-scheme);
  color-scheme: var(--t-color-scheme);
}
#wowjob-ui .tablet.column-count {
  --t-column-count: var(--column-count);
  column-count: var(--t-column-count);
}
#wowjob-ui .tablet.column-fill {
  --t-column-fill: var(--column-fill);
  column-fill: var(--t-column-fill);
}
#wowjob-ui .tablet.column-gap {
  --t-column-gap: var(--column-gap);
  column-gap: var(--t-column-gap);
}
#wowjob-ui .tablet.column-rule {
  --t-column-rule: var(--column-rule);
  column-rule: var(--t-column-rule);
}
#wowjob-ui .tablet.column-span {
  --t-column-span: var(--column-span);
  column-span: var(--t-column-span);
}
#wowjob-ui .tablet.column-width {
  --t-column-width: var(--column-width);
  column-width: var(--t-column-width);
}
#wowjob-ui .tablet.contain {
  --t-contain: var(--contain);
  contain: var(--t-contain);
}
#wowjob-ui .tablet.contain-intrinsic-block-size {
  --t-contain-intrinsic-block-size: var(--contain-intrinsic-block-size);
  contain-intrinsic-block-size: var(--t-contain-intrinsic-block-size);
}
#wowjob-ui .tablet.contain-intrinsic-height {
  --t-contain-intrinsic-height: var(--contain-intrinsic-height);
  contain-intrinsic-height: var(--t-contain-intrinsic-height);
}
#wowjob-ui .tablet.contain-intrinsic-inline-size {
  --t-contain-intrinsic-inline-size: var(--contain-intrinsic-inline-size);
  contain-intrinsic-inline-size: var(--t-contain-intrinsic-inline-size);
}
#wowjob-ui .tablet.contain-intrinsic-size {
  --t-contain-intrinsic-size: var(--contain-intrinsic-size);
  contain-intrinsic-size: var(--t-contain-intrinsic-size);
}
#wowjob-ui .tablet.contain-intrinsic-width {
  --t-contain-intrinsic-width: var(--contain-intrinsic-width);
  contain-intrinsic-width: var(--t-contain-intrinsic-width);
}
#wowjob-ui .tablet.container {
  --t-container: var(--container);
  container: var(--t-container);
}
#wowjob-ui .tablet.content {
  --t-content: var(--content);
  content: var(--t-content);
}
#wowjob-ui .tablet.content-visibility {
  --t-content-visibility: var(--content-visibility);
  content-visibility: var(--t-content-visibility);
}
#wowjob-ui .tablet.counter-increment {
  --t-counter-increment: var(--counter-increment);
  counter-increment: var(--t-counter-increment);
}
#wowjob-ui .tablet.counter-reset {
  --t-counter-reset: var(--counter-reset);
  counter-reset: var(--t-counter-reset);
}
#wowjob-ui .tablet.counter-set {
  --t-counter-set: var(--counter-set);
  counter-set: var(--t-counter-set);
}
#wowjob-ui .tablet.cursor {
  --t-cursor: var(--cursor);
  cursor: var(--t-cursor);
}
#wowjob-ui .tablet.cx {
  --t-cx: var(--cx);
  cx: var(--t-cx);
}
#wowjob-ui .tablet.cy {
  --t-cy: var(--cy);
  cy: var(--t-cy);
}
#wowjob-ui .tablet.d {
  --t-d: var(--d);
  d: var(--t-d);
}
#wowjob-ui .tablet.direction {
  --t-direction: var(--direction);
  direction: var(--t-direction);
}
#wowjob-ui .tablet.dominant-baseline {
  --t-dominant-baseline: var(--dominant-baseline);
  dominant-baseline: var(--t-dominant-baseline);
}
#wowjob-ui .tablet.empty-cells {
  --t-empty-cells: var(--empty-cells);
  empty-cells: var(--t-empty-cells);
}
#wowjob-ui .tablet.display {
  --t-display: var(--display);
  display: var(--t-display);
}
#wowjob-ui .tablet.flex {
  --t-flex: var(--flex);
  flex: var(--t-flex);
}
#wowjob-ui .tablet.flex-basis {
  --t-flex-basis: var(--flex-basis);
  flex-basis: var(--t-flex-basis);
}
#wowjob-ui .tablet.flex-direction {
  --t-flex-direction: var(--flex-direction);
  flex-direction: var(--t-flex-direction);
}
#wowjob-ui .tablet.flex-grow {
  --t-flex-grow: var(--flex-grow);
  flex-grow: var(--t-flex-grow);
}
#wowjob-ui .tablet.flex-shrink {
  --t-flex-shrink: var(--flex-shrink);
  flex-shrink: var(--t-flex-shrink);
}
#wowjob-ui .tablet.font-variant {
  --t-font-variant: var(--font-variant);
  font-variant: var(--t-font-variant);
}
#wowjob-ui .tablet.font-weight {
  --t-font-weight: var(--font-weight);
  font-weight: var(--t-font-weight);
}
#wowjob-ui .tablet.flex-wrap {
  --t-flex-wrap: var(--flex-wrap);
  flex-wrap: var(--t-flex-wrap);
}
#wowjob-ui .tablet.field-sizing {
  --t-field-sizing: var(--field-sizing);
  field-sizing: var(--t-field-sizing);
}
#wowjob-ui .tablet.fill {
  --t-fill: var(--fill);
  fill: var(--t-fill);
}
#wowjob-ui .tablet.fill-opacity {
  --t-fill-opacity: var(--fill-opacity);
  fill-opacity: var(--t-fill-opacity);
}
#wowjob-ui .tablet.fill-rule {
  --t-fill-rule: var(--fill-rule);
  fill-rule: var(--t-fill-rule);
}
#wowjob-ui .tablet.filter {
  --t-filter: var(--filter);
  filter: var(--t-filter);
}
#wowjob-ui .tablet.float {
  --t-float: var(--float);
  float: var(--t-float);
}
#wowjob-ui .tablet.flood-color {
  --t-flood-color: var(--flood-color);
  flood-color: var(--t-flood-color);
}
#wowjob-ui .tablet.flood-opacity {
  --t-flood-opacity: var(--flood-opacity);
  flood-opacity: var(--t-flood-opacity);
}
#wowjob-ui .tablet.font {
  --t-font: var(--font);
  font: var(--t-font);
}
#wowjob-ui .tablet.font-family {
  --t-font-family: var(--font-family);
  font-family: var(--t-font-family);
}
#wowjob-ui .tablet.font-size {
  --t-font-size: var(--font-size);
  font-size: var(--t-font-size);
}
#wowjob-ui .tablet.font-stretch {
  --t-font-stretch: var(--font-stretch);
  font-stretch: var(--t-font-stretch);
}
#wowjob-ui .tablet.font-style {
  --t-font-style: var(--font-style);
  font-style: var(--t-font-style);
}
#wowjob-ui .tablet.font-feature-settings {
  --t-font-feature-settings: var(--font-feature-settings);
  font-feature-settings: var(--t-font-feature-settings);
}
#wowjob-ui .tablet.font-kerning {
  --t-font-kerning: var(--font-kerning);
  font-kerning: var(--t-font-kerning);
}
#wowjob-ui .tablet.font-language-override {
  --t-font-language-override: var(--font-language-override);
  font-language-override: var(--t-font-language-override);
}
#wowjob-ui .tablet.font-optical-sizing {
  --t-font-optical-sizing: var(--font-optical-sizing);
  font-optical-sizing: var(--t-font-optical-sizing);
}
#wowjob-ui .tablet.font-palette {
  --t-font-palette: var(--font-palette);
  font-palette: var(--t-font-palette);
}
#wowjob-ui .tablet.font-size-adjust {
  --t-font-size-adjust: var(--font-size-adjust);
  font-size-adjust: var(--t-font-size-adjust);
}
#wowjob-ui .tablet.font-synthesis-small-caps {
  --t-font-synthesis-small-caps: var(--font-synthesis-small-caps);
  font-synthesis-small-caps: var(--t-font-synthesis-small-caps);
}
#wowjob-ui .tablet.font-synthesis-style {
  --t-font-synthesis-style: var(--font-synthesis-style);
  font-synthesis-style: var(--t-font-synthesis-style);
}
#wowjob-ui .tablet.font-synthesis-weight {
  --t-font-synthesis-weight: var(--font-synthesis-weight);
  font-synthesis-weight: var(--t-font-synthesis-weight);
}
#wowjob-ui .tablet.font-variant-alternates {
  --t-font-variant-alternates: var(--font-variant-alternates);
  font-variant-alternates: var(--t-font-variant-alternates);
}
#wowjob-ui .tablet.font-variant-caps {
  --t-font-variant-caps: var(--font-variant-caps);
  font-variant-caps: var(--t-font-variant-caps);
}
#wowjob-ui .tablet.font-variant-east-asian {
  --t-font-variant-east-asian: var(--font-variant-east-asian);
  font-variant-east-asian: var(--t-font-variant-east-asian);
}
#wowjob-ui .tablet.font-variant-ligatures {
  --t-font-variant-ligatures: var(--font-variant-ligatures);
  font-variant-ligatures: var(--t-font-variant-ligatures);
}
#wowjob-ui .tablet.font-variant-numeric {
  --t-font-variant-numeric: var(--font-variant-numeric);
  font-variant-numeric: var(--t-font-variant-numeric);
}
#wowjob-ui .tablet.font-variant-position {
  --t-font-variant-position: var(--font-variant-position);
  font-variant-position: var(--t-font-variant-position);
}
#wowjob-ui .tablet.font-variation-settings {
  --t-font-variation-settings: var(--font-variation-settings);
  font-variation-settings: var(--t-font-variation-settings);
}
#wowjob-ui .tablet.forced-color-adjust {
  --t-forced-color-adjust: var(--forced-color-adjust);
  forced-color-adjust: var(--t-forced-color-adjust);
}
#wowjob-ui .tablet.gap {
  --t-gap: var(--gap);
  gap: var(--t-gap);
}
#wowjob-ui .tablet.grid-auto-columns {
  --t-grid-auto-columns: var(--grid-auto-columns);
  grid-auto-columns: var(--t-grid-auto-columns);
}
#wowjob-ui .tablet.grid-auto-flow {
  --t-grid-auto-flow: var(--grid-auto-flow);
  grid-auto-flow: var(--t-grid-auto-flow);
}
#wowjob-ui .tablet.grid-auto-rows {
  --t-grid-auto-rows: var(--grid-auto-rows);
  grid-auto-rows: var(--t-grid-auto-rows);
}
#wowjob-ui .tablet.grid-column {
  --t-grid-column: var(--grid-column);
  grid-column: var(--t-grid-column);
}
#wowjob-ui .tablet.grid-row {
  --t-grid-row: var(--grid-row);
  grid-row: var(--t-grid-row);
}
#wowjob-ui .tablet.grid-template {
  --t-grid-template: var(--grid-template);
  grid-template: var(--t-grid-template);
}
#wowjob-ui .tablet.grid-template-columns {
  --t-grid-template-columns: var(--grid-template-columns);
  grid-template-columns: var(--t-grid-template-columns);
}
#wowjob-ui .tablet.grid-template-rows {
  --t-grid-template-rows: var(--grid-template-rows);
  grid-template-rows: var(--t-grid-template-rows);
}
#wowjob-ui .tablet.grid-template-areas {
  --t-grid-template-areas: var(--grid-template-areas);
  grid-template-areas: var(--t-grid-template-areas);
}
#wowjob-ui .tablet.height {
  --t-height: var(--height);
  height: var(--t-height);
}
#wowjob-ui .tablet.hyphenate-character {
  --t-hyphenate-character: var(--hyphenate-character);
  hyphenate-character: var(--t-hyphenate-character);
}
#wowjob-ui .tablet.hyphens {
  --t-hyphens: var(--hyphens);
  hyphens: var(--t-hyphens);
}
#wowjob-ui .tablet.image-orientation {
  --t-image-orientation: var(--image-orientation);
  image-orientation: var(--t-image-orientation);
}
#wowjob-ui .tablet.image-rendering {
  --t-image-rendering: var(--image-rendering);
  image-rendering: var(--t-image-rendering);
}
#wowjob-ui .tablet.inline-size {
  --t-inline-size: var(--inline-size);
  inline-size: var(--t-inline-size);
}
#wowjob-ui .tablet.inset {
  --t-inset: var(--inset);
  inset: var(--t-inset);
}
#wowjob-ui .tablet.inset-block {
  --t-inset-block: var(--inset-block);
  inset-block: var(--t-inset-block);
}
#wowjob-ui .tablet.inset-inline {
  --t-inset-inline: var(--inset-inline);
  inset-inline: var(--t-inset-inline);
}
#wowjob-ui .tablet.isolation {
  --t-isolation: var(--isolation);
  isolation: var(--t-isolation);
}
#wowjob-ui .tablet.justify-content {
  --t-justify-content: var(--justify-content);
  justify-content: var(--t-justify-content);
}
#wowjob-ui .tablet.justify-items {
  --t-justify-items: var(--justify-items);
  justify-items: var(--t-justify-items);
}
#wowjob-ui .tablet.justify-self {
  --t-justify-self: var(--justify-self);
  justify-self: var(--t-justify-self);
}
#wowjob-ui .tablet.left {
  --t-left: var(--left);
  left: var(--t-left);
}
#wowjob-ui .tablet.right {
  --t-right: var(--right);
  right: var(--t-right);
}
#wowjob-ui .tablet.top {
  --t-top: var(--top);
  top: var(--t-top);
}
#wowjob-ui .tablet.letter-spacing {
  --t-letter-spacing: var(--letter-spacing);
  letter-spacing: var(--t-letter-spacing);
}
#wowjob-ui .tablet.lighting-color {
  --t-lighting-color: var(--lighting-color);
  lighting-color: var(--t-lighting-color);
}
#wowjob-ui .tablet.line-break {
  --t-line-break: var(--line-break);
  line-break: var(--t-line-break);
}
#wowjob-ui .tablet.line-height {
  --t-line-height: var(--line-height);
  line-height: var(--t-line-height);
}
#wowjob-ui .tablet.list-style {
  --t-list-style: var(--list-style);
  list-style: var(--t-list-style);
}
#wowjob-ui .tablet.margin-block {
  --t-margin-block: var(--margin-block);
  margin-block: var(--t-margin-block);
}
#wowjob-ui .tablet.margin-inline {
  --t-margin-inline: var(--margin-inline);
  margin-inline: var(--t-margin-inline);
}
#wowjob-ui .tablet.mask {
  --t-mask: var(--mask);
  mask: var(--t-mask);
}
#wowjob-ui .tablet.mask-clip {
  --t-mask-clip: var(--mask-clip);
  mask-clip: var(--t-mask-clip);
}
#wowjob-ui .tablet.math-style {
  --t-math-style: var(--math-style);
  math-style: var(--t-math-style);
}
#wowjob-ui .tablet.max-block-size {
  --t-max-block-size: var(--max-block-size);
  max-block-size: var(--t-max-block-size);
}
#wowjob-ui .tablet.max-height {
  --t-max-height: var(--max-height);
  max-height: var(--t-max-height);
}
#wowjob-ui .tablet.max-inline-size {
  --t-max-inline-size: var(--max-inline-size);
  max-inline-size: var(--t-max-inline-size);
}
#wowjob-ui .tablet.max-width {
  --t-max-width: var(--max-width);
  max-width: var(--t-max-width);
}
#wowjob-ui .tablet.min-block-size {
  --t-min-block-size: var(--min-block-size);
  min-block-size: var(--t-min-block-size);
}
#wowjob-ui .tablet.min-height {
  --t-min-height: var(--min-height);
  min-height: var(--t-min-height);
}
#wowjob-ui .tablet.min-inline-size {
  --t-min-inline-size: var(--min-inline-size);
  min-inline-size: var(--t-min-inline-size);
}
#wowjob-ui .tablet.min-width {
  --t-min-width: var(--min-width);
  min-width: var(--t-min-width);
}
#wowjob-ui .tablet.mix-blend-mode {
  --t-mix-blend-mode: var(--mix-blend-mode);
  mix-blend-mode: var(--t-mix-blend-mode);
}
#wowjob-ui .tablet.object-fit {
  --t-object-fit: var(--object-fit);
  object-fit: var(--t-object-fit);
}
#wowjob-ui .tablet.object-position {
  --t-object-position: var(--object-position);
  object-position: var(--t-object-position);
}
#wowjob-ui .tablet.offset-anchor {
  --t-offset-anchor: var(--offset-anchor);
  offset-anchor: var(--t-offset-anchor);
}
#wowjob-ui .tablet.offset {
  --t-offset: var(--offset);
  offset: var(--t-offset);
}
#wowjob-ui .tablet.opacity {
  --t-opacity: var(--opacity);
  opacity: var(--t-opacity);
}
#wowjob-ui .tablet.order {
  --t-order: var(--order);
  order: var(--t-order);
}
#wowjob-ui .tablet.outline {
  --t-outline: var(--outline);
  outline: var(--t-outline);
}
#wowjob-ui .tablet.outline-offset {
  --t-outline-offset: var(--outline-offset);
  outline-offset: var(--t-outline-offset);
}
#wowjob-ui .tablet.overflow {
  --t-overflow: var(--overflow);
  overflow: var(--t-overflow);
}
#wowjob-ui .tablet.overscroll-behavior {
  --t-overscroll-behavior: var(--overscroll-behavior);
  overscroll-behavior: var(--t-overscroll-behavior);
}
#wowjob-ui .tablet.overscroll-behavior-block {
  --t-overscroll-behavior-block: var(--overscroll-behavior-block);
  overscroll-behavior-block: var(--t-overscroll-behavior-block);
}
#wowjob-ui .tablet.overscroll-behavior-inline {
  --t-overscroll-behavior-inline: var(--overscroll-behavior-inline);
  overscroll-behavior-inline: var(--t-overscroll-behavior-inline);
}
#wowjob-ui .tablet.perspective {
  --t-perspective: var(--perspective);
  perspective: var(--t-perspective);
}
#wowjob-ui .tablet.perspective-origin {
  --t-perspective-origin: var(--perspective-origin);
  perspective-origin: var(--t-perspective-origin);
}
#wowjob-ui .tablet.place-content {
  --t-place-content: var(--place-content);
  place-content: var(--t-place-content);
}
#wowjob-ui .tablet.place-items {
  --t-place-items: var(--place-items);
  place-items: var(--t-place-items);
}
#wowjob-ui .tablet.place-self {
  --t-place-self: var(--place-self);
  place-self: var(--t-place-self);
}
#wowjob-ui .tablet.pointer-events {
  --t-pointer-events: var(--pointer-events);
  pointer-events: var(--t-pointer-events);
}
#wowjob-ui .tablet.position {
  --t-position: var(--position);
  position: var(--t-position);
}
#wowjob-ui .tablet.quotes {
  --t-quotes: var(--quotes);
  quotes: var(--t-quotes);
}
#wowjob-ui .tablet.resize {
  --t-resize: var(--resize);
  resize: var(--t-resize);
}
#wowjob-ui .tablet.rotate {
  --t-rotate: var(--rotate);
  rotate: var(--t-rotate);
}
#wowjob-ui .tablet.ruby-align {
  --t-ruby-align: var(--ruby-align);
  ruby-align: var(--t-ruby-align);
}
#wowjob-ui .tablet.ruby-position {
  --t-ruby-position: var(--ruby-position);
  ruby-position: var(--t-ruby-position);
}
#wowjob-ui .tablet.scale {
  --t-scale: var(--scale);
  scale: var(--t-scale);
}
#wowjob-ui .tablet.scroll-behavior {
  --t-scroll-behavior: var(--scroll-behavior);
  scroll-behavior: var(--t-scroll-behavior);
}
#wowjob-ui .tablet.scroll-margin {
  --t-scroll-margin: var(--scroll-margin);
  scroll-margin: var(--t-scroll-margin);
}
#wowjob-ui .tablet.scroll-padding {
  --t-scroll-padding: var(--scroll-padding);
  scroll-padding: var(--t-scroll-padding);
}
#wowjob-ui .tablet.scroll-snap-align {
  --t-scroll-snap-align: var(--scroll-snap-align);
  scroll-snap-align: var(--t-scroll-snap-align);
}
#wowjob-ui .tablet.scroll-snap-stop {
  --t-scroll-snap-stop: var(--scroll-snap-stop);
  scroll-snap-stop: var(--t-scroll-snap-stop);
}
#wowjob-ui .tablet.scroll-snap-type {
  --t-scroll-snap-type: var(--scroll-snap-type);
  scroll-snap-type: var(--t-scroll-snap-type);
}
#wowjob-ui .tablet.scroll-timeline {
  --t-scroll-timeline: var(--scroll-timeline);
  scroll-timeline: var(--t-scroll-timeline);
}
#wowjob-ui .tablet.scroll-timeline-axis {
  --t-scroll-timeline-axis: var(--scroll-timeline-axis);
  scroll-timeline-axis: var(--t-scroll-timeline-axis);
}
#wowjob-ui .tablet.scroll-timeline-name {
  --t-scroll-timeline-name: var(--scroll-timeline-name);
  scroll-timeline-name: var(--t-scroll-timeline-name);
}
#wowjob-ui .tablet.scrollbar-color {
  --t-scrollbar-color: var(--scrollbar-color);
  scrollbar-color: var(--t-scrollbar-color);
}
#wowjob-ui .tablet.scrollbar-gutter {
  --t-scrollbar-gutter: var(--scrollbar-gutter);
  scrollbar-gutter: var(--t-scrollbar-gutter);
}
#wowjob-ui .tablet.scrollbar-width {
  --t-scrollbar-width: var(--scrollbar-width);
  scrollbar-width: var(--t-scrollbar-width);
}
#wowjob-ui .tablet.shape-image-threshold {
  --t-shape-image-threshold: var(--shape-image-threshold);
  shape-image-threshold: var(--t-shape-image-threshold);
}
#wowjob-ui .tablet.shape-margin {
  --t-shape-margin: var(--shape-margin);
  shape-margin: var(--t-shape-margin);
}
#wowjob-ui .tablet.shape-outside {
  --t-shape-outside: var(--shape-outside);
  shape-outside: var(--t-shape-outside);
}
#wowjob-ui .tablet.shape-rendering {
  --t-shape-rendering: var(--shape-rendering);
  shape-rendering: var(--t-shape-rendering);
}
#wowjob-ui .tablet.stop-color {
  --t-stop-color: var(--stop-color);
  stop-color: var(--t-stop-color);
}
#wowjob-ui .tablet.stop-opacity {
  --t-stop-opacity: var(--stop-opacity);
  stop-opacity: var(--t-stop-opacity);
}
#wowjob-ui .tablet.stroke {
  --t-stroke: var(--stroke);
  stroke: var(--t-stroke);
}
#wowjob-ui .tablet.stroke-dasharray {
  --t-stroke-dasharray: var(--stroke-dasharray);
  stroke-dasharray: var(--t-stroke-dasharray);
}
#wowjob-ui .tablet.stroke-dashoffset {
  --t-stroke-dashoffset: var(--stroke-dashoffset);
  stroke-dashoffset: var(--t-stroke-dashoffset);
}
#wowjob-ui .tablet.stroke-linecap {
  --t-stroke-linecap: var(--stroke-linecap);
  stroke-linecap: var(--t-stroke-linecap);
}
#wowjob-ui .tablet.stroke-linejoin {
  --t-stroke-linejoin: var(--stroke-linejoin);
  stroke-linejoin: var(--t-stroke-linejoin);
}
#wowjob-ui .tablet.stroke-miterlimit {
  --t-stroke-miterlimit: var(--stroke-miterlimit);
  stroke-miterlimit: var(--t-stroke-miterlimit);
}
#wowjob-ui .tablet.stroke-opacity {
  --t-stroke-opacity: var(--stroke-opacity);
  stroke-opacity: var(--t-stroke-opacity);
}
#wowjob-ui .tablet.stroke-width {
  --t-stroke-width: var(--stroke-width);
  stroke-width: var(--t-stroke-width);
}
#wowjob-ui .tablet.tab-size {
  --t-tab-size: var(--tab-size);
  tab-size: var(--t-tab-size);
}
#wowjob-ui .tablet.table-layout {
  --t-table-layout: var(--table-layout);
  table-layout: var(--t-table-layout);
}
#wowjob-ui .tablet.text-align {
  --t-text-align: var(--text-align);
  text-align: var(--t-text-align);
}
#wowjob-ui .tablet.text-align-last {
  --t-text-align-last: var(--text-align-last);
  text-align-last: var(--t-text-align-last);
}
#wowjob-ui .tablet.text-anchor {
  --t-text-anchor: var(--text-anchor);
  text-anchor: var(--t-text-anchor);
}
#wowjob-ui .tablet.text-combine-upright {
  --t-text-combine-upright: var(--text-combine-upright);
  text-combine-upright: var(--t-text-combine-upright);
}
#wowjob-ui .tablet.text-decoration {
  --t-text-decoration: var(--text-decoration);
  text-decoration: var(--t-text-decoration);
}
#wowjob-ui .tablet.text-emphasis {
  --t-text-emphasis: var(--text-emphasis);
  text-emphasis: var(--t-text-emphasis);
}
#wowjob-ui .tablet.text-indent {
  --t-text-indent: var(--text-indent);
  text-indent: var(--t-text-indent);
}
#wowjob-ui .tablet.text-justify {
  --t-text-justify: var(--text-justify);
  text-justify: var(--t-text-justify);
}
#wowjob-ui .tablet.text-orientation {
  --t-text-orientation: var(--text-orientation);
  text-orientation: var(--t-text-orientation);
}
#wowjob-ui .tablet.text-overflow {
  --t-text-overflow: var(--text-overflow);
  text-overflow: var(--t-text-overflow);
}
#wowjob-ui .tablet.text-rendering {
  --t-text-rendering: var(--text-rendering);
  text-rendering: var(--t-text-rendering);
}
#wowjob-ui .tablet.text-shadow {
  --t-text-shadow: var(--text-shadow);
  text-shadow: var(--t-text-shadow);
}
#wowjob-ui .tablet.text-transform {
  --t-text-transform: var(--text-transform);
  text-transform: var(--t-text-transform);
}
#wowjob-ui .tablet.text-underline-offset {
  --t-text-underline-offset: var(--text-underline-offset);
  text-underline-offset: var(--t-text-underline-offset);
}
#wowjob-ui .tablet.text-underline-position {
  --t-text-underline-position: var(--text-underline-position);
  text-underline-position: var(--t-text-underline-position);
}
#wowjob-ui .tablet.text-wrap {
  --t-text-wrap: var(--text-wrap);
  text-wrap: var(--t-text-wrap);
}
#wowjob-ui .tablet.text-wrap-style {
  --t-text-wrap-style: var(--text-wrap-style);
  text-wrap-style: var(--t-text-wrap-style);
}
#wowjob-ui .tablet.touch-action {
  --t-touch-action: var(--touch-action);
  touch-action: var(--t-touch-action);
}
#wowjob-ui .tablet.transform {
  --t-transform: var(--transform);
  transform: var(--t-transform);
}
#wowjob-ui .tablet.transform-box {
  --t-transform-box: var(--transform-box);
  transform-box: var(--t-transform-box);
}
#wowjob-ui .tablet.transform-origin {
  --t-transform-origin: var(--transform-origin);
  transform-origin: var(--t-transform-origin);
}
#wowjob-ui .tablet.transform-style {
  --t-transform-style: var(--transform-style);
  transform-style: var(--t-transform-style);
}
#wowjob-ui .tablet.transition {
  --t-transition: var(--transition);
  transition: var(--t-transition);
}
#wowjob-ui .tablet.transition-behavior {
  --t-transition-behavior: var(--transition-behavior);
  transition-behavior: var(--t-transition-behavior);
}
#wowjob-ui .tablet.translate {
  --t-translate: var(--translate);
  translate: var(--t-translate);
}
#wowjob-ui .tablet.user-select {
  --t-user-select: var(--user-select);
  user-select: var(--t-user-select);
}
#wowjob-ui .tablet.vector-effect {
  --t-vector-effect: var(--vector-effect);
  vector-effect: var(--t-vector-effect);
}
#wowjob-ui .tablet.vertical-align {
  --t-vertical-align: var(--vertical-align);
  vertical-align: var(--t-vertical-align);
}
#wowjob-ui .tablet.view-transition-name {
  --t-view-transition-name: var(--view-transition-name);
  view-transition-name: var(--t-view-transition-name);
}
#wowjob-ui .tablet.visibility {
  --t-visibility: var(--visibility);
  visibility: var(--t-visibility);
}
#wowjob-ui .tablet.white-space {
  --t-white-space: var(--white-space);
  white-space: var(--t-white-space);
}
#wowjob-ui .tablet.width {
  --t-width: var(--width);
  width: var(--t-width);
}
#wowjob-ui .tablet.will-change {
  --t-will-change: var(--will-change);
  will-change: var(--t-will-change);
}
#wowjob-ui .tablet.word-break {
  --t-word-break: var(--word-break);
  word-break: var(--t-word-break);
}
#wowjob-ui .tablet.word-spacing {
  --t-word-spacing: var(--word-spacing);
  word-spacing: var(--t-word-spacing);
}
#wowjob-ui .tablet.writing-mode {
  --t-writing-mode: var(--writing-mode);
  writing-mode: var(--t-writing-mode);
}
#wowjob-ui .tablet.z-index {
  --t-z-index: var(--z-index);
  z-index: var(--t-z-index);
}
#wowjob-ui .tablet.zoom {
  --t-zoom: var(--zoom);
  zoom: var(--t-zoom);
}

}

@media screen and (min-width: 80rem) {
#wowjob-ui .desktop.accent-color {
  --d-accent-color: var(--t-accent-color);
  accent-color: var(--d-accent-color);
}
#wowjob-ui .desktop.align-content {
  --d-align-content: var(--t-align-content);
  align-content: var(--d-align-content);
}
#wowjob-ui .desktop.align-items {
  --d-align-items: var(--t-align-items);
  align-items: var(--d-align-items);
}
#wowjob-ui .desktop.align-self {
  --d-align-self: var(--t-align-self);
  align-self: var(--d-align-self);
}
#wowjob-ui .desktop.animation {
  --d-animation: var(--t-animation);
  animation: var(--d-animation);
}
#wowjob-ui .desktop.appearance {
  --d-appearance: var(--t-appearance);
  appearance: var(--d-appearance);
}
#wowjob-ui .desktop.aspect-ratio {
  --d-aspect-ratio: var(--t-aspect-ratio);
  aspect-ratio: var(--d-aspect-ratio);
}
#wowjob-ui .desktop.backdrop-filter {
  --d-backdrop-filter: var(--t-backdrop-filter);
  backdrop-filter: var(--d-backdrop-filter);
}
#wowjob-ui .desktop.backface-visibility {
  --d-backface-visibility: var(--t-backface-visibility);
  backface-visibility: var(--d-backface-visibility);
}
#wowjob-ui .desktop.background {
  --d-background: var(--t-background);
  background: var(--d-background);
}
#wowjob-ui .desktop.background-blend-mode {
  --d-background-blend-mode: var(--t-background-blend-mode);
  background-blend-mode: var(--d-background-blend-mode);
}
#wowjob-ui .desktop.background-clip {
  --d-background-clip: var(--t-background-clip);
  background-clip: var(--d-background-clip);
}
#wowjob-ui .desktop.background-origin {
  --d-background-origin: var(--t-background-origin);
  background-origin: var(--d-background-origin);
}
#wowjob-ui .desktop.block-size {
  --d-block-size: var(--t-block-size);
  block-size: var(--d-block-size);
}
#wowjob-ui .desktop.margin {
  --d-margin: var(--t-margin);
  margin: var(--d-margin);
}
#wowjob-ui .desktop.padding {
  --d-padding: var(--t-padding);
  padding: var(--d-padding);
}
#wowjob-ui .desktop.border {
  --d-border: var(--t-border);
  border: var(--d-border);
}
#wowjob-ui .desktop.border-block {
  --d-border-block: var(--t-border-block);
  border-block: var(--d-border-block);
}
#wowjob-ui .desktop.border-block-start {
  --d-border-block-start: var(--t-border-block-start);
  border-block-start: var(--d-border-block-start);
}
#wowjob-ui .desktop.border-bottom {
  --d-border-bottom: var(--t-border-bottom);
  border-bottom: var(--d-border-bottom);
}
#wowjob-ui .desktop.border-bottom-left-radius {
  --d-border-bottom-left-radius: var(--t-border-bottom-left-radius);
  border-bottom-left-radius: var(--d-border-bottom-left-radius);
}
#wowjob-ui .desktop.border-bottom-right-radius {
  --d-border-bottom-right-radius: var(--t-border-bottom-right-radius);
  border-bottom-right-radius: var(--d-border-bottom-right-radius);
}
#wowjob-ui .desktop.border-block-end {
  --d-border-block-end: var(--t-border-block-end);
  border-block-end: var(--d-border-block-end);
}
#wowjob-ui .desktop.border-collapse {
  --d-border-collapse: var(--t-border-collapse);
  border-collapse: var(--d-border-collapse);
}
#wowjob-ui .desktop.border-end-end-radius {
  --d-border-end-end-radius: var(--t-border-end-end-radius);
  border-end-end-radius: var(--d-border-end-end-radius);
}
#wowjob-ui .desktop.border-end-start-radius {
  --d-border-end-start-radius: var(--t-border-end-start-radius);
  border-end-start-radius: var(--d-border-end-start-radius);
}
#wowjob-ui .desktop.border-image {
  --d-border-image: var(--t-border-image);
  border-image: var(--d-border-image);
}
#wowjob-ui .desktop.border-inline {
  --d-border-inline: var(--t-border-inline);
  border-inline: var(--d-border-inline);
}
#wowjob-ui .desktop.border-left {
  --d-border-left: var(--t-border-left);
  border-left: var(--d-border-left);
}
#wowjob-ui .desktop.border-inline-start {
  --d-border-inline-start: var(--t-border-inline-start);
  border-inline-start: var(--d-border-inline-start);
}
#wowjob-ui .desktop.border-inline-end {
  --d-border-inline-end: var(--t-border-inline-end);
  border-inline-end: var(--d-border-inline-end);
}
#wowjob-ui .desktop.border-radius {
  --d-border-radius: var(--t-border-radius);
  border-radius: var(--d-border-radius);
}
#wowjob-ui .desktop.border-right {
  --d-border-right: var(--t-border-right);
  border-right: var(--d-border-right);
}
#wowjob-ui .desktop.border-width {
  --d-border-width: var(--t-border-width);
  border-width: var(--d-border-width);
}
#wowjob-ui .desktop.border-style {
  --d-border-style: var(--t-border-style);
  border-style: var(--d-border-style);
}
#wowjob-ui .desktop.border-start-end-radius {
  --d-border-start-end-radius: var(--t-border-start-end-radius);
  border-start-end-radius: var(--d-border-start-end-radius);
}
#wowjob-ui .desktop.border-start-start-radius {
  --d-border-start-start-radius: var(--t-border-start-start-radius);
  border-start-start-radius: var(--d-border-start-start-radius);
}
#wowjob-ui .desktop.border-top {
  --d-border-top: var(--t-border-top);
  border-top: var(--d-border-top);
}
#wowjob-ui .desktop.border-top-left-radius {
  --d-border-top-left-radius: var(--t-border-top-left-radius);
  border-top-left-radius: var(--d-border-top-left-radius);
}
#wowjob-ui .desktop.border-top-right-radius {
  --d-border-top-right-radius: var(--t-border-top-right-radius);
  border-top-right-radius: var(--d-border-top-right-radius);
}
#wowjob-ui .desktop.bottom {
  --d-bottom: var(--t-bottom);
  bottom: var(--d-bottom);
}
#wowjob-ui .desktop.box-shadow {
  --d-box-shadow: var(--t-box-shadow);
  box-shadow: var(--d-box-shadow);
}
#wowjob-ui .desktop.box-sizing {
  --d-box-sizing: var(--t-box-sizing);
  box-sizing: var(--d-box-sizing);
}
#wowjob-ui .desktop.break-after {
  --d-break-after: var(--t-break-after);
  break-after: var(--d-break-after);
}
#wowjob-ui .desktop.break-before {
  --d-break-before: var(--t-break-before);
  break-before: var(--d-break-before);
}
#wowjob-ui .desktop.break-inside {
  --d-break-inside: var(--t-break-inside);
  break-inside: var(--d-break-inside);
}
#wowjob-ui .desktop.caption-side {
  --d-caption-side: var(--t-caption-side);
  caption-side: var(--d-caption-side);
}
#wowjob-ui .desktop.caret-color {
  --d-caret-color: var(--t-caret-color);
  caret-color: var(--d-caret-color);
}
#wowjob-ui .desktop.clear {
  --d-clear: var(--t-clear);
  clear: var(--d-clear);
}
#wowjob-ui .desktop.clip {
  --d-clip: var(--t-clip);
  clip: var(--d-clip);
}
#wowjob-ui .desktop.clip-path {
  --d-clip-path: var(--t-clip-path);
  clip-path: var(--d-clip-path);
}
#wowjob-ui .desktop.color {
  --d-color: var(--t-color);
  color: var(--d-color);
}
#wowjob-ui .desktop.color-interpolation {
  --d-color-interpolation: var(--t-color-interpolation);
  color-interpolation: var(--d-color-interpolation);
}
#wowjob-ui .desktop.color-interpolation-filters {
  --d-color-interpolation-filters: var(--t-color-interpolation-filters);
  color-interpolation-filters: var(--d-color-interpolation-filters);
}
#wowjob-ui .desktop.color-scheme {
  --d-color-scheme: var(--t-color-scheme);
  color-scheme: var(--d-color-scheme);
}
#wowjob-ui .desktop.column-count {
  --d-column-count: var(--t-column-count);
  column-count: var(--d-column-count);
}
#wowjob-ui .desktop.column-fill {
  --d-column-fill: var(--t-column-fill);
  column-fill: var(--d-column-fill);
}
#wowjob-ui .desktop.column-gap {
  --d-column-gap: var(--t-column-gap);
  column-gap: var(--d-column-gap);
}
#wowjob-ui .desktop.column-rule {
  --d-column-rule: var(--t-column-rule);
  column-rule: var(--d-column-rule);
}
#wowjob-ui .desktop.column-span {
  --d-column-span: var(--t-column-span);
  column-span: var(--d-column-span);
}
#wowjob-ui .desktop.column-width {
  --d-column-width: var(--t-column-width);
  column-width: var(--d-column-width);
}
#wowjob-ui .desktop.contain {
  --d-contain: var(--t-contain);
  contain: var(--d-contain);
}
#wowjob-ui .desktop.contain-intrinsic-block-size {
  --d-contain-intrinsic-block-size: var(--t-contain-intrinsic-block-size);
  contain-intrinsic-block-size: var(--d-contain-intrinsic-block-size);
}
#wowjob-ui .desktop.contain-intrinsic-height {
  --d-contain-intrinsic-height: var(--t-contain-intrinsic-height);
  contain-intrinsic-height: var(--d-contain-intrinsic-height);
}
#wowjob-ui .desktop.contain-intrinsic-inline-size {
  --d-contain-intrinsic-inline-size: var(--t-contain-intrinsic-inline-size);
  contain-intrinsic-inline-size: var(--d-contain-intrinsic-inline-size);
}
#wowjob-ui .desktop.contain-intrinsic-size {
  --d-contain-intrinsic-size: var(--t-contain-intrinsic-size);
  contain-intrinsic-size: var(--d-contain-intrinsic-size);
}
#wowjob-ui .desktop.contain-intrinsic-width {
  --d-contain-intrinsic-width: var(--t-contain-intrinsic-width);
  contain-intrinsic-width: var(--d-contain-intrinsic-width);
}
#wowjob-ui .desktop.container {
  --d-container: var(--t-container);
  container: var(--d-container);
}
#wowjob-ui .desktop.content {
  --d-content: var(--t-content);
  content: var(--d-content);
}
#wowjob-ui .desktop.content-visibility {
  --d-content-visibility: var(--t-content-visibility);
  content-visibility: var(--d-content-visibility);
}
#wowjob-ui .desktop.counter-increment {
  --d-counter-increment: var(--t-counter-increment);
  counter-increment: var(--d-counter-increment);
}
#wowjob-ui .desktop.counter-reset {
  --d-counter-reset: var(--t-counter-reset);
  counter-reset: var(--d-counter-reset);
}
#wowjob-ui .desktop.counter-set {
  --d-counter-set: var(--t-counter-set);
  counter-set: var(--d-counter-set);
}
#wowjob-ui .desktop.cursor {
  --d-cursor: var(--t-cursor);
  cursor: var(--d-cursor);
}
#wowjob-ui .desktop.cx {
  --d-cx: var(--t-cx);
  cx: var(--d-cx);
}
#wowjob-ui .desktop.cy {
  --d-cy: var(--t-cy);
  cy: var(--d-cy);
}
#wowjob-ui .desktop.d {
  --d-d: var(--t-d);
  d: var(--d-d);
}
#wowjob-ui .desktop.direction {
  --d-direction: var(--t-direction);
  direction: var(--d-direction);
}
#wowjob-ui .desktop.dominant-baseline {
  --d-dominant-baseline: var(--t-dominant-baseline);
  dominant-baseline: var(--d-dominant-baseline);
}
#wowjob-ui .desktop.empty-cells {
  --d-empty-cells: var(--t-empty-cells);
  empty-cells: var(--d-empty-cells);
}
#wowjob-ui .desktop.display {
  --d-display: var(--t-display);
  display: var(--d-display);
}
#wowjob-ui .desktop.flex {
  --d-flex: var(--t-flex);
  flex: var(--d-flex);
}
#wowjob-ui .desktop.flex-basis {
  --d-flex-basis: var(--t-flex-basis);
  flex-basis: var(--d-flex-basis);
}
#wowjob-ui .desktop.flex-direction {
  --d-flex-direction: var(--t-flex-direction);
  flex-direction: var(--d-flex-direction);
}
#wowjob-ui .desktop.flex-grow {
  --d-flex-grow: var(--t-flex-grow);
  flex-grow: var(--d-flex-grow);
}
#wowjob-ui .desktop.flex-shrink {
  --d-flex-shrink: var(--t-flex-shrink);
  flex-shrink: var(--d-flex-shrink);
}
#wowjob-ui .desktop.font-variant {
  --d-font-variant: var(--t-font-variant);
  font-variant: var(--d-font-variant);
}
#wowjob-ui .desktop.font-weight {
  --d-font-weight: var(--t-font-weight);
  font-weight: var(--d-font-weight);
}
#wowjob-ui .desktop.flex-wrap {
  --d-flex-wrap: var(--t-flex-wrap);
  flex-wrap: var(--d-flex-wrap);
}
#wowjob-ui .desktop.field-sizing {
  --d-field-sizing: var(--t-field-sizing);
  field-sizing: var(--d-field-sizing);
}
#wowjob-ui .desktop.fill {
  --d-fill: var(--t-fill);
  fill: var(--d-fill);
}
#wowjob-ui .desktop.fill-opacity {
  --d-fill-opacity: var(--t-fill-opacity);
  fill-opacity: var(--d-fill-opacity);
}
#wowjob-ui .desktop.fill-rule {
  --d-fill-rule: var(--t-fill-rule);
  fill-rule: var(--d-fill-rule);
}
#wowjob-ui .desktop.filter {
  --d-filter: var(--t-filter);
  filter: var(--d-filter);
}
#wowjob-ui .desktop.float {
  --d-float: var(--t-float);
  float: var(--d-float);
}
#wowjob-ui .desktop.flood-color {
  --d-flood-color: var(--t-flood-color);
  flood-color: var(--d-flood-color);
}
#wowjob-ui .desktop.flood-opacity {
  --d-flood-opacity: var(--t-flood-opacity);
  flood-opacity: var(--d-flood-opacity);
}
#wowjob-ui .desktop.font {
  --d-font: var(--t-font);
  font: var(--d-font);
}
#wowjob-ui .desktop.font-family {
  --d-font-family: var(--t-font-family);
  font-family: var(--d-font-family);
}
#wowjob-ui .desktop.font-size {
  --d-font-size: var(--t-font-size);
  font-size: var(--d-font-size);
}
#wowjob-ui .desktop.font-stretch {
  --d-font-stretch: var(--t-font-stretch);
  font-stretch: var(--d-font-stretch);
}
#wowjob-ui .desktop.font-style {
  --d-font-style: var(--t-font-style);
  font-style: var(--d-font-style);
}
#wowjob-ui .desktop.font-feature-settings {
  --d-font-feature-settings: var(--t-font-feature-settings);
  font-feature-settings: var(--d-font-feature-settings);
}
#wowjob-ui .desktop.font-kerning {
  --d-font-kerning: var(--t-font-kerning);
  font-kerning: var(--d-font-kerning);
}
#wowjob-ui .desktop.font-language-override {
  --d-font-language-override: var(--t-font-language-override);
  font-language-override: var(--d-font-language-override);
}
#wowjob-ui .desktop.font-optical-sizing {
  --d-font-optical-sizing: var(--t-font-optical-sizing);
  font-optical-sizing: var(--d-font-optical-sizing);
}
#wowjob-ui .desktop.font-palette {
  --d-font-palette: var(--t-font-palette);
  font-palette: var(--d-font-palette);
}
#wowjob-ui .desktop.font-size-adjust {
  --d-font-size-adjust: var(--t-font-size-adjust);
  font-size-adjust: var(--d-font-size-adjust);
}
#wowjob-ui .desktop.font-synthesis-small-caps {
  --d-font-synthesis-small-caps: var(--t-font-synthesis-small-caps);
  font-synthesis-small-caps: var(--d-font-synthesis-small-caps);
}
#wowjob-ui .desktop.font-synthesis-style {
  --d-font-synthesis-style: var(--t-font-synthesis-style);
  font-synthesis-style: var(--d-font-synthesis-style);
}
#wowjob-ui .desktop.font-synthesis-weight {
  --d-font-synthesis-weight: var(--t-font-synthesis-weight);
  font-synthesis-weight: var(--d-font-synthesis-weight);
}
#wowjob-ui .desktop.font-variant-alternates {
  --d-font-variant-alternates: var(--t-font-variant-alternates);
  font-variant-alternates: var(--d-font-variant-alternates);
}
#wowjob-ui .desktop.font-variant-caps {
  --d-font-variant-caps: var(--t-font-variant-caps);
  font-variant-caps: var(--d-font-variant-caps);
}
#wowjob-ui .desktop.font-variant-east-asian {
  --d-font-variant-east-asian: var(--t-font-variant-east-asian);
  font-variant-east-asian: var(--d-font-variant-east-asian);
}
#wowjob-ui .desktop.font-variant-ligatures {
  --d-font-variant-ligatures: var(--t-font-variant-ligatures);
  font-variant-ligatures: var(--d-font-variant-ligatures);
}
#wowjob-ui .desktop.font-variant-numeric {
  --d-font-variant-numeric: var(--t-font-variant-numeric);
  font-variant-numeric: var(--d-font-variant-numeric);
}
#wowjob-ui .desktop.font-variant-position {
  --d-font-variant-position: var(--t-font-variant-position);
  font-variant-position: var(--d-font-variant-position);
}
#wowjob-ui .desktop.font-variation-settings {
  --d-font-variation-settings: var(--t-font-variation-settings);
  font-variation-settings: var(--d-font-variation-settings);
}
#wowjob-ui .desktop.forced-color-adjust {
  --d-forced-color-adjust: var(--t-forced-color-adjust);
  forced-color-adjust: var(--d-forced-color-adjust);
}
#wowjob-ui .desktop.gap {
  --d-gap: var(--t-gap);
  gap: var(--d-gap);
}
#wowjob-ui .desktop.grid-auto-columns {
  --d-grid-auto-columns: var(--t-grid-auto-columns);
  grid-auto-columns: var(--d-grid-auto-columns);
}
#wowjob-ui .desktop.grid-auto-flow {
  --d-grid-auto-flow: var(--t-grid-auto-flow);
  grid-auto-flow: var(--d-grid-auto-flow);
}
#wowjob-ui .desktop.grid-auto-rows {
  --d-grid-auto-rows: var(--t-grid-auto-rows);
  grid-auto-rows: var(--d-grid-auto-rows);
}
#wowjob-ui .desktop.grid-column {
  --d-grid-column: var(--t-grid-column);
  grid-column: var(--d-grid-column);
}
#wowjob-ui .desktop.grid-row {
  --d-grid-row: var(--t-grid-row);
  grid-row: var(--d-grid-row);
}
#wowjob-ui .desktop.grid-template {
  --d-grid-template: var(--t-grid-template);
  grid-template: var(--d-grid-template);
}
#wowjob-ui .desktop.grid-template-columns {
  --d-grid-template-columns: var(--t-grid-template-columns);
  grid-template-columns: var(--d-grid-template-columns);
}
#wowjob-ui .desktop.grid-template-rows {
  --d-grid-template-rows: var(--t-grid-template-rows);
  grid-template-rows: var(--d-grid-template-rows);
}
#wowjob-ui .desktop.grid-template-areas {
  --d-grid-template-areas: var(--t-grid-template-areas);
  grid-template-areas: var(--d-grid-template-areas);
}
#wowjob-ui .desktop.height {
  --d-height: var(--t-height);
  height: var(--d-height);
}
#wowjob-ui .desktop.hyphenate-character {
  --d-hyphenate-character: var(--t-hyphenate-character);
  hyphenate-character: var(--d-hyphenate-character);
}
#wowjob-ui .desktop.hyphens {
  --d-hyphens: var(--t-hyphens);
  hyphens: var(--d-hyphens);
}
#wowjob-ui .desktop.image-orientation {
  --d-image-orientation: var(--t-image-orientation);
  image-orientation: var(--d-image-orientation);
}
#wowjob-ui .desktop.image-rendering {
  --d-image-rendering: var(--t-image-rendering);
  image-rendering: var(--d-image-rendering);
}
#wowjob-ui .desktop.inline-size {
  --d-inline-size: var(--t-inline-size);
  inline-size: var(--d-inline-size);
}
#wowjob-ui .desktop.inset {
  --d-inset: var(--t-inset);
  inset: var(--d-inset);
}
#wowjob-ui .desktop.inset-block {
  --d-inset-block: var(--t-inset-block);
  inset-block: var(--d-inset-block);
}
#wowjob-ui .desktop.inset-inline {
  --d-inset-inline: var(--t-inset-inline);
  inset-inline: var(--d-inset-inline);
}
#wowjob-ui .desktop.isolation {
  --d-isolation: var(--t-isolation);
  isolation: var(--d-isolation);
}
#wowjob-ui .desktop.justify-content {
  --d-justify-content: var(--t-justify-content);
  justify-content: var(--d-justify-content);
}
#wowjob-ui .desktop.justify-items {
  --d-justify-items: var(--t-justify-items);
  justify-items: var(--d-justify-items);
}
#wowjob-ui .desktop.justify-self {
  --d-justify-self: var(--t-justify-self);
  justify-self: var(--d-justify-self);
}
#wowjob-ui .desktop.left {
  --d-left: var(--t-left);
  left: var(--d-left);
}
#wowjob-ui .desktop.right {
  --d-right: var(--t-right);
  right: var(--d-right);
}
#wowjob-ui .desktop.top {
  --d-top: var(--t-top);
  top: var(--d-top);
}
#wowjob-ui .desktop.letter-spacing {
  --d-letter-spacing: var(--t-letter-spacing);
  letter-spacing: var(--d-letter-spacing);
}
#wowjob-ui .desktop.lighting-color {
  --d-lighting-color: var(--t-lighting-color);
  lighting-color: var(--d-lighting-color);
}
#wowjob-ui .desktop.line-break {
  --d-line-break: var(--t-line-break);
  line-break: var(--d-line-break);
}
#wowjob-ui .desktop.line-height {
  --d-line-height: var(--t-line-height);
  line-height: var(--d-line-height);
}
#wowjob-ui .desktop.list-style {
  --d-list-style: var(--t-list-style);
  list-style: var(--d-list-style);
}
#wowjob-ui .desktop.margin-block {
  --d-margin-block: var(--t-margin-block);
  margin-block: var(--d-margin-block);
}
#wowjob-ui .desktop.margin-inline {
  --d-margin-inline: var(--t-margin-inline);
  margin-inline: var(--d-margin-inline);
}
#wowjob-ui .desktop.mask {
  --d-mask: var(--t-mask);
  mask: var(--d-mask);
}
#wowjob-ui .desktop.mask-clip {
  --d-mask-clip: var(--t-mask-clip);
  mask-clip: var(--d-mask-clip);
}
#wowjob-ui .desktop.math-style {
  --d-math-style: var(--t-math-style);
  math-style: var(--d-math-style);
}
#wowjob-ui .desktop.max-block-size {
  --d-max-block-size: var(--t-max-block-size);
  max-block-size: var(--d-max-block-size);
}
#wowjob-ui .desktop.max-height {
  --d-max-height: var(--t-max-height);
  max-height: var(--d-max-height);
}
#wowjob-ui .desktop.max-inline-size {
  --d-max-inline-size: var(--t-max-inline-size);
  max-inline-size: var(--d-max-inline-size);
}
#wowjob-ui .desktop.max-width {
  --d-max-width: var(--t-max-width);
  max-width: var(--d-max-width);
}
#wowjob-ui .desktop.min-block-size {
  --d-min-block-size: var(--t-min-block-size);
  min-block-size: var(--d-min-block-size);
}
#wowjob-ui .desktop.min-height {
  --d-min-height: var(--t-min-height);
  min-height: var(--d-min-height);
}
#wowjob-ui .desktop.min-inline-size {
  --d-min-inline-size: var(--t-min-inline-size);
  min-inline-size: var(--d-min-inline-size);
}
#wowjob-ui .desktop.min-width {
  --d-min-width: var(--t-min-width);
  min-width: var(--d-min-width);
}
#wowjob-ui .desktop.mix-blend-mode {
  --d-mix-blend-mode: var(--t-mix-blend-mode);
  mix-blend-mode: var(--d-mix-blend-mode);
}
#wowjob-ui .desktop.object-fit {
  --d-object-fit: var(--t-object-fit);
  object-fit: var(--d-object-fit);
}
#wowjob-ui .desktop.object-position {
  --d-object-position: var(--t-object-position);
  object-position: var(--d-object-position);
}
#wowjob-ui .desktop.offset-anchor {
  --d-offset-anchor: var(--t-offset-anchor);
  offset-anchor: var(--d-offset-anchor);
}
#wowjob-ui .desktop.offset {
  --d-offset: var(--t-offset);
  offset: var(--d-offset);
}
#wowjob-ui .desktop.opacity {
  --d-opacity: var(--t-opacity);
  opacity: var(--d-opacity);
}
#wowjob-ui .desktop.order {
  --d-order: var(--t-order);
  order: var(--d-order);
}
#wowjob-ui .desktop.outline {
  --d-outline: var(--t-outline);
  outline: var(--d-outline);
}
#wowjob-ui .desktop.outline-offset {
  --d-outline-offset: var(--t-outline-offset);
  outline-offset: var(--d-outline-offset);
}
#wowjob-ui .desktop.overflow {
  --d-overflow: var(--t-overflow);
  overflow: var(--d-overflow);
}
#wowjob-ui .desktop.overscroll-behavior {
  --d-overscroll-behavior: var(--t-overscroll-behavior);
  overscroll-behavior: var(--d-overscroll-behavior);
}
#wowjob-ui .desktop.overscroll-behavior-block {
  --d-overscroll-behavior-block: var(--t-overscroll-behavior-block);
  overscroll-behavior-block: var(--d-overscroll-behavior-block);
}
#wowjob-ui .desktop.overscroll-behavior-inline {
  --d-overscroll-behavior-inline: var(--t-overscroll-behavior-inline);
  overscroll-behavior-inline: var(--d-overscroll-behavior-inline);
}
#wowjob-ui .desktop.perspective {
  --d-perspective: var(--t-perspective);
  perspective: var(--d-perspective);
}
#wowjob-ui .desktop.perspective-origin {
  --d-perspective-origin: var(--t-perspective-origin);
  perspective-origin: var(--d-perspective-origin);
}
#wowjob-ui .desktop.place-content {
  --d-place-content: var(--t-place-content);
  place-content: var(--d-place-content);
}
#wowjob-ui .desktop.place-items {
  --d-place-items: var(--t-place-items);
  place-items: var(--d-place-items);
}
#wowjob-ui .desktop.place-self {
  --d-place-self: var(--t-place-self);
  place-self: var(--d-place-self);
}
#wowjob-ui .desktop.pointer-events {
  --d-pointer-events: var(--t-pointer-events);
  pointer-events: var(--d-pointer-events);
}
#wowjob-ui .desktop.position {
  --d-position: var(--t-position);
  position: var(--d-position);
}
#wowjob-ui .desktop.quotes {
  --d-quotes: var(--t-quotes);
  quotes: var(--d-quotes);
}
#wowjob-ui .desktop.resize {
  --d-resize: var(--t-resize);
  resize: var(--d-resize);
}
#wowjob-ui .desktop.rotate {
  --d-rotate: var(--t-rotate);
  rotate: var(--d-rotate);
}
#wowjob-ui .desktop.ruby-align {
  --d-ruby-align: var(--t-ruby-align);
  ruby-align: var(--d-ruby-align);
}
#wowjob-ui .desktop.ruby-position {
  --d-ruby-position: var(--t-ruby-position);
  ruby-position: var(--d-ruby-position);
}
#wowjob-ui .desktop.scale {
  --d-scale: var(--t-scale);
  scale: var(--d-scale);
}
#wowjob-ui .desktop.scroll-behavior {
  --d-scroll-behavior: var(--t-scroll-behavior);
  scroll-behavior: var(--d-scroll-behavior);
}
#wowjob-ui .desktop.scroll-margin {
  --d-scroll-margin: var(--t-scroll-margin);
  scroll-margin: var(--d-scroll-margin);
}
#wowjob-ui .desktop.scroll-padding {
  --d-scroll-padding: var(--t-scroll-padding);
  scroll-padding: var(--d-scroll-padding);
}
#wowjob-ui .desktop.scroll-snap-align {
  --d-scroll-snap-align: var(--t-scroll-snap-align);
  scroll-snap-align: var(--d-scroll-snap-align);
}
#wowjob-ui .desktop.scroll-snap-stop {
  --d-scroll-snap-stop: var(--t-scroll-snap-stop);
  scroll-snap-stop: var(--d-scroll-snap-stop);
}
#wowjob-ui .desktop.scroll-snap-type {
  --d-scroll-snap-type: var(--t-scroll-snap-type);
  scroll-snap-type: var(--d-scroll-snap-type);
}
#wowjob-ui .desktop.scroll-timeline {
  --d-scroll-timeline: var(--t-scroll-timeline);
  scroll-timeline: var(--d-scroll-timeline);
}
#wowjob-ui .desktop.scroll-timeline-axis {
  --d-scroll-timeline-axis: var(--t-scroll-timeline-axis);
  scroll-timeline-axis: var(--d-scroll-timeline-axis);
}
#wowjob-ui .desktop.scroll-timeline-name {
  --d-scroll-timeline-name: var(--t-scroll-timeline-name);
  scroll-timeline-name: var(--d-scroll-timeline-name);
}
#wowjob-ui .desktop.scrollbar-color {
  --d-scrollbar-color: var(--t-scrollbar-color);
  scrollbar-color: var(--d-scrollbar-color);
}
#wowjob-ui .desktop.scrollbar-gutter {
  --d-scrollbar-gutter: var(--t-scrollbar-gutter);
  scrollbar-gutter: var(--d-scrollbar-gutter);
}
#wowjob-ui .desktop.scrollbar-width {
  --d-scrollbar-width: var(--t-scrollbar-width);
  scrollbar-width: var(--d-scrollbar-width);
}
#wowjob-ui .desktop.shape-image-threshold {
  --d-shape-image-threshold: var(--t-shape-image-threshold);
  shape-image-threshold: var(--d-shape-image-threshold);
}
#wowjob-ui .desktop.shape-margin {
  --d-shape-margin: var(--t-shape-margin);
  shape-margin: var(--d-shape-margin);
}
#wowjob-ui .desktop.shape-outside {
  --d-shape-outside: var(--t-shape-outside);
  shape-outside: var(--d-shape-outside);
}
#wowjob-ui .desktop.shape-rendering {
  --d-shape-rendering: var(--t-shape-rendering);
  shape-rendering: var(--d-shape-rendering);
}
#wowjob-ui .desktop.stop-color {
  --d-stop-color: var(--t-stop-color);
  stop-color: var(--d-stop-color);
}
#wowjob-ui .desktop.stop-opacity {
  --d-stop-opacity: var(--t-stop-opacity);
  stop-opacity: var(--d-stop-opacity);
}
#wowjob-ui .desktop.stroke {
  --d-stroke: var(--t-stroke);
  stroke: var(--d-stroke);
}
#wowjob-ui .desktop.stroke-dasharray {
  --d-stroke-dasharray: var(--t-stroke-dasharray);
  stroke-dasharray: var(--d-stroke-dasharray);
}
#wowjob-ui .desktop.stroke-dashoffset {
  --d-stroke-dashoffset: var(--t-stroke-dashoffset);
  stroke-dashoffset: var(--d-stroke-dashoffset);
}
#wowjob-ui .desktop.stroke-linecap {
  --d-stroke-linecap: var(--t-stroke-linecap);
  stroke-linecap: var(--d-stroke-linecap);
}
#wowjob-ui .desktop.stroke-linejoin {
  --d-stroke-linejoin: var(--t-stroke-linejoin);
  stroke-linejoin: var(--d-stroke-linejoin);
}
#wowjob-ui .desktop.stroke-miterlimit {
  --d-stroke-miterlimit: var(--t-stroke-miterlimit);
  stroke-miterlimit: var(--d-stroke-miterlimit);
}
#wowjob-ui .desktop.stroke-opacity {
  --d-stroke-opacity: var(--t-stroke-opacity);
  stroke-opacity: var(--d-stroke-opacity);
}
#wowjob-ui .desktop.stroke-width {
  --d-stroke-width: var(--t-stroke-width);
  stroke-width: var(--d-stroke-width);
}
#wowjob-ui .desktop.tab-size {
  --d-tab-size: var(--t-tab-size);
  tab-size: var(--d-tab-size);
}
#wowjob-ui .desktop.table-layout {
  --d-table-layout: var(--t-table-layout);
  table-layout: var(--d-table-layout);
}
#wowjob-ui .desktop.text-align {
  --d-text-align: var(--t-text-align);
  text-align: var(--d-text-align);
}
#wowjob-ui .desktop.text-align-last {
  --d-text-align-last: var(--t-text-align-last);
  text-align-last: var(--d-text-align-last);
}
#wowjob-ui .desktop.text-anchor {
  --d-text-anchor: var(--t-text-anchor);
  text-anchor: var(--d-text-anchor);
}
#wowjob-ui .desktop.text-combine-upright {
  --d-text-combine-upright: var(--t-text-combine-upright);
  text-combine-upright: var(--d-text-combine-upright);
}
#wowjob-ui .desktop.text-decoration {
  --d-text-decoration: var(--t-text-decoration);
  text-decoration: var(--d-text-decoration);
}
#wowjob-ui .desktop.text-emphasis {
  --d-text-emphasis: var(--t-text-emphasis);
  text-emphasis: var(--d-text-emphasis);
}
#wowjob-ui .desktop.text-indent {
  --d-text-indent: var(--t-text-indent);
  text-indent: var(--d-text-indent);
}
#wowjob-ui .desktop.text-justify {
  --d-text-justify: var(--t-text-justify);
  text-justify: var(--d-text-justify);
}
#wowjob-ui .desktop.text-orientation {
  --d-text-orientation: var(--t-text-orientation);
  text-orientation: var(--d-text-orientation);
}
#wowjob-ui .desktop.text-overflow {
  --d-text-overflow: var(--t-text-overflow);
  text-overflow: var(--d-text-overflow);
}
#wowjob-ui .desktop.text-rendering {
  --d-text-rendering: var(--t-text-rendering);
  text-rendering: var(--d-text-rendering);
}
#wowjob-ui .desktop.text-shadow {
  --d-text-shadow: var(--t-text-shadow);
  text-shadow: var(--d-text-shadow);
}
#wowjob-ui .desktop.text-transform {
  --d-text-transform: var(--t-text-transform);
  text-transform: var(--d-text-transform);
}
#wowjob-ui .desktop.text-underline-offset {
  --d-text-underline-offset: var(--t-text-underline-offset);
  text-underline-offset: var(--d-text-underline-offset);
}
#wowjob-ui .desktop.text-underline-position {
  --d-text-underline-position: var(--t-text-underline-position);
  text-underline-position: var(--d-text-underline-position);
}
#wowjob-ui .desktop.text-wrap {
  --d-text-wrap: var(--t-text-wrap);
  text-wrap: var(--d-text-wrap);
}
#wowjob-ui .desktop.text-wrap-style {
  --d-text-wrap-style: var(--t-text-wrap-style);
  text-wrap-style: var(--d-text-wrap-style);
}
#wowjob-ui .desktop.touch-action {
  --d-touch-action: var(--t-touch-action);
  touch-action: var(--d-touch-action);
}
#wowjob-ui .desktop.transform {
  --d-transform: var(--t-transform);
  transform: var(--d-transform);
}
#wowjob-ui .desktop.transform-box {
  --d-transform-box: var(--t-transform-box);
  transform-box: var(--d-transform-box);
}
#wowjob-ui .desktop.transform-origin {
  --d-transform-origin: var(--t-transform-origin);
  transform-origin: var(--d-transform-origin);
}
#wowjob-ui .desktop.transform-style {
  --d-transform-style: var(--t-transform-style);
  transform-style: var(--d-transform-style);
}
#wowjob-ui .desktop.transition {
  --d-transition: var(--t-transition);
  transition: var(--d-transition);
}
#wowjob-ui .desktop.transition-behavior {
  --d-transition-behavior: var(--t-transition-behavior);
  transition-behavior: var(--d-transition-behavior);
}
#wowjob-ui .desktop.translate {
  --d-translate: var(--t-translate);
  translate: var(--d-translate);
}
#wowjob-ui .desktop.user-select {
  --d-user-select: var(--t-user-select);
  user-select: var(--d-user-select);
}
#wowjob-ui .desktop.vector-effect {
  --d-vector-effect: var(--t-vector-effect);
  vector-effect: var(--d-vector-effect);
}
#wowjob-ui .desktop.vertical-align {
  --d-vertical-align: var(--t-vertical-align);
  vertical-align: var(--d-vertical-align);
}
#wowjob-ui .desktop.view-transition-name {
  --d-view-transition-name: var(--t-view-transition-name);
  view-transition-name: var(--d-view-transition-name);
}
#wowjob-ui .desktop.visibility {
  --d-visibility: var(--t-visibility);
  visibility: var(--d-visibility);
}
#wowjob-ui .desktop.white-space {
  --d-white-space: var(--t-white-space);
  white-space: var(--d-white-space);
}
#wowjob-ui .desktop.width {
  --d-width: var(--t-width);
  width: var(--d-width);
}
#wowjob-ui .desktop.will-change {
  --d-will-change: var(--t-will-change);
  will-change: var(--d-will-change);
}
#wowjob-ui .desktop.word-break {
  --d-word-break: var(--t-word-break);
  word-break: var(--d-word-break);
}
#wowjob-ui .desktop.word-spacing {
  --d-word-spacing: var(--t-word-spacing);
  word-spacing: var(--d-word-spacing);
}
#wowjob-ui .desktop.writing-mode {
  --d-writing-mode: var(--t-writing-mode);
  writing-mode: var(--d-writing-mode);
}
#wowjob-ui .desktop.z-index {
  --d-z-index: var(--t-z-index);
  z-index: var(--d-z-index);
}
#wowjob-ui .desktop.zoom {
  --d-zoom: var(--t-zoom);
  zoom: var(--d-zoom);
}

}
```

## CSS: src/all.min.css

```css
/* WOWJOB UI CSS
Yet Another CSS UI library, which provides zero build time, best debugging DX, very flexible, reposniveness for RWD at core, and works with React, NextJS, Astro and more
Author: Marian Zburlea
Organization: Wow Job
GitHub: https://github.com/wowjob
Website: https://wowjob.blog
Website: https://wowjob.dev
Website: https://wowjob.ai
*/
/* CSS theme */
#wowjob-ui .theme-brand {
  --tch: 259;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-primary {
  --tch: 225;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-secondary {
  --tch: 318;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-tertiary {
  --tch: 245;
  --tcs: 86%;
  --tcl: 15%;
  --bgcl: 80%;
  --bdcl: 60%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-default {
  --tch: 221;
  --tcs: 13%;
  --tcl: 15%;
  --bgcl: 95%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-error {
  --tch: 4;
  --tcs: 86%;
  --tcl: 95%;
  --bgcl: 20%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-warning {
  --tch: 34;
  --tcs: 94%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-success {
  --tch: 152;
  --tcs: 77%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-info {
  --tch: 200;
  --tcs: 77%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-light {
  --tch: 0;
  --tcs: 0%;
  --tcl: 15%;
  --bgcl: 98%;
  --bdcl: 70%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-dark {
  --tch: 240;
  --tcs: 15%;
  --tcl: 95%;
  --bgcl: 15%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-accent {
  --tch: 50;
  --tcs: 94%;
  --tcl: 15%;
  --bgcl: 70%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-muted {
  --tch: 210;
  --tcs: 10%;
  --tcl: 50%;
  --bgcl: 90%;
  --bdcl: 70%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-highlight {
  --tch: 280;
  --tcs: 80%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}

/* CSS Properties */
#wowjob-ui .acc{--acc:auto;accent-color:var(--acc);}#wowjob-ui .ac{--ac:normal;align-content:var(--ac);}#wowjob-ui .ai{--ai:normal;align-items:var(--ai);}#wowjob-ui .as{--as:auto;align-self:var(--as);}#wowjob-ui .a{--a:none;animation:var(--a);}#wowjob-ui .ap{--ap:none;appearance:var(--ap);}#wowjob-ui .ar{--ar:auto;aspect-ratio:var(--ar);}#wowjob-ui .bf{--bf:none;backdrop-filter:var(--bf);}#wowjob-ui .bv{--bv:visible;backface-visibility:var(--bv);}#wowjob-ui .bg{--bg:transparent;background:var(--bg);}#wowjob-ui .bbm{--bbm:normal;background-blend-mode:var(--bbm);}#wowjob-ui .bc{--bc:border-box;background-clip:var(--bc);}#wowjob-ui .bo{--bo:padding-box;background-origin:var(--bo);}#wowjob-ui .bz{--bz:auto;block-size:var(--bz);}#wowjob-ui .m{--m:0;margin:var(--m);}#wowjob-ui .p{--p:0;padding:var(--p);}#wowjob-ui .b{--b:medium none currentcolor;border:var(--b);}#wowjob-ui .bb{--bb:undefined;border-block:var(--bb);}#wowjob-ui .bbs{--bbs:none;border-block-start:var(--bbs);}#wowjob-ui .bbt{--bbt:undefined;border-bottom:var(--bbt);}#wowjob-ui .bblr{--bblr:0;border-bottom-left-radius:var(--bblr);}#wowjob-ui .bbrr{--bbrr:0;border-bottom-right-radius:var(--bbrr);}#wowjob-ui .bbe{--bbe:none;border-block-end:var(--bbe);}#wowjob-ui .bdc{--bdc:separate;border-collapse:var(--bdc);}#wowjob-ui .beer{--beer:0;border-end-end-radius:var(--beer);}#wowjob-ui .besr{--besr:0;border-end-start-radius:var(--besr);}#wowjob-ui .bim{--bim:undefined;border-image:var(--bim);}#wowjob-ui .bi{--bi:undefined;border-inline:var(--bi);}#wowjob-ui .bl{--bl:undefined;border-left:var(--bl);}#wowjob-ui .bis{--bis:undefined;border-inline-start:var(--bis);}#wowjob-ui .bie{--bie:undefined;border-inline-end:var(--bie);}#wowjob-ui .bra{--bra:undefined;border-radius:var(--bra);}#wowjob-ui .br{--br:undefined;border-right:var(--br);}#wowjob-ui .bw{--bw:0;border-width:var(--bw);}#wowjob-ui .bds{--bds:none;border-style:var(--bds);}#wowjob-ui .bser{--bser:0;border-start-end-radius:var(--bser);}#wowjob-ui .bssr{--bssr:0;border-start-start-radius:var(--bssr);}#wowjob-ui .bdt{--bdt:undefined;border-top:var(--bdt);}#wowjob-ui .btlr{--btlr:0;border-top-left-radius:var(--btlr);}#wowjob-ui .btrr{--btrr:0;border-top-right-radius:var(--btrr);}#wowjob-ui .bt{--bt:auto;bottom:var(--bt);}#wowjob-ui .bs{--bs:none;box-shadow:var(--bs);}#wowjob-ui .bsz{--bsz:content-box;box-sizing:var(--bsz);}#wowjob-ui .ba{--ba:auto;break-after:var(--ba);}#wowjob-ui .bbf{--bbf:auto;break-before:var(--bbf);}#wowjob-ui .bbi{--bbi:auto;break-inside:var(--bbi);}#wowjob-ui .cps{--cps:top;caption-side:var(--cps);}#wowjob-ui .crc{--crc:auto;caret-color:var(--crc);}#wowjob-ui .clr{--clr:none;clear:var(--clr);}#wowjob-ui .cl{--cl:auto;clip:var(--cl);}#wowjob-ui .clp{--clp:none;clip-path:var(--clp);}#wowjob-ui .c{--c:currentcolor;color:var(--c);}#wowjob-ui .ci{--ci:srgb;color-interpolation:var(--ci);}#wowjob-ui .cif{--cif:linearrgb;color-interpolation-filters:var(--cif);}#wowjob-ui .cs{--cs:normal;color-scheme:var(--cs);}#wowjob-ui .cc{--cc:auto;column-count:var(--cc);}#wowjob-ui .cf{--cf:balance;column-fill:var(--cf);}#wowjob-ui .cg{--cg:normal;column-gap:var(--cg);}#wowjob-ui .cr{--cr:undefined;column-rule:var(--cr);}#wowjob-ui .csp{--csp:none;column-span:var(--csp);}#wowjob-ui .cw{--cw:auto;column-width:var(--cw);}#wowjob-ui .ctn{--ctn:none;contain:var(--ctn);}#wowjob-ui .cib{--cib:auto;contain-intrinsic-block-size:var(--cib);}#wowjob-ui .cih{--cih:auto;contain-intrinsic-height:var(--cih);}#wowjob-ui .ciis{--ciis:auto;contain-intrinsic-inline-size:var(--ciis);}#wowjob-ui .cis{--cis:undefined;contain-intrinsic-size:var(--cis);}#wowjob-ui .ciw{--ciw:auto;contain-intrinsic-width:var(--ciw);}#wowjob-ui .cn{--cn:undefined;container:var(--cn);}#wowjob-ui .cnt{--cnt:normal;content:var(--cnt);}#wowjob-ui .cv{--cv:visible;content-visibility:var(--cv);}#wowjob-ui .cin{--cin:none;counter-increment:var(--cin);}#wowjob-ui .cre{--cre:none;counter-reset:var(--cre);}#wowjob-ui .cse{--cse:none;counter-set:var(--cse);}#wowjob-ui .cur{--cur:auto;cursor:var(--cur);}#wowjob-ui .cx{--cx:undefined;cx:var(--cx);}#wowjob-ui .cy{--cy:undefined;cy:var(--cy);}#wowjob-ui .d{--d:undefined;d:var(--d);}#wowjob-ui .dir{--dir:ltr;direction:var(--dir);}#wowjob-ui .db{--db:auto;dominant-baseline:var(--db);}#wowjob-ui .ec{--ec:show;empty-cells:var(--ec);}#wowjob-ui .ds{--ds:inline;display:var(--ds);}#wowjob-ui .fx{--fx:0 1 auto;flex:var(--fx);}#wowjob-ui .fb{--fb:auto;flex-basis:var(--fb);}#wowjob-ui .fd{--fd:row;flex-direction:var(--fd);}#wowjob-ui .fg{--fg:0;flex-grow:var(--fg);}#wowjob-ui .fsh{--fsh:1;flex-shrink:var(--fsh);}#wowjob-ui .fv{--fv:undefined;font-variant:var(--fv);}#wowjob-ui .fw{--fw:400;font-weight:var(--fw);}#wowjob-ui .fwr{--fwr:nowrap;flex-wrap:var(--fwr);}#wowjob-ui .fiz{--fiz:undefined;field-sizing:var(--fiz);}#wowjob-ui .fl{--fl:black;fill:var(--fl);}#wowjob-ui .fop{--fop:1;fill-opacity:var(--fop);}#wowjob-ui .fr{--fr:nonzero;fill-rule:var(--fr);}#wowjob-ui .fil{--fil:none;filter:var(--fil);}#wowjob-ui .flo{--flo:none;float:var(--flo);}#wowjob-ui .fc{--fc:black;flood-color:var(--fc);}#wowjob-ui .fo{--fo:1;flood-opacity:var(--fo);}#wowjob-ui .fnt{--fnt:1rem sans-serif;font:var(--fnt);}#wowjob-ui .ff{--ff:serif;font-family:var(--ff);}#wowjob-ui .fz{--fz:16;font-size:var(--fz);}#wowjob-ui .fst{--fst:normal;font-stretch:var(--fst);}#wowjob-ui .fs{--fs:normal;font-style:var(--fs);}#wowjob-ui .ffs{--ffs:normal;font-feature-settings:var(--ffs);}#wowjob-ui .fk{--fk:auto;font-kerning:var(--fk);}#wowjob-ui .flov{--flov:undefined;font-language-override:var(--flov);}#wowjob-ui .fos{--fos:auto;font-optical-sizing:var(--fos);}#wowjob-ui .fp{--fp:normal;font-palette:var(--fp);}#wowjob-ui .fsa{--fsa:none;font-size-adjust:var(--fsa);}#wowjob-ui .fssc{--fssc:auto;font-synthesis-small-caps:var(--fssc);}#wowjob-ui .fss{--fss:auto;font-synthesis-style:var(--fss);}#wowjob-ui .fsw{--fsw:auto;font-synthesis-weight:var(--fsw);}#wowjob-ui .fva{--fva:normal;font-variant-alternates:var(--fva);}#wowjob-ui .fvc{--fvc:normal;font-variant-caps:var(--fvc);}#wowjob-ui .fvea{--fvea:normal;font-variant-east-asian:var(--fvea);}#wowjob-ui .fvl{--fvl:normal;font-variant-ligatures:var(--fvl);}#wowjob-ui .fvn{--fvn:normal;font-variant-numeric:var(--fvn);}#wowjob-ui .fvp{--fvp:normal;font-variant-position:var(--fvp);}#wowjob-ui .fvs{--fvs:normal;font-variation-settings:var(--fvs);}#wowjob-ui .fca{--fca:undefined;forced-color-adjust:var(--fca);}#wowjob-ui .gp{--gp:normal;gap:var(--gp);}#wowjob-ui .gac{--gac:auto;grid-auto-columns:var(--gac);}#wowjob-ui .gaf{--gaf:row;grid-auto-flow:var(--gaf);}#wowjob-ui .gar{--gar:auto;grid-auto-rows:var(--gar);}#wowjob-ui .gc{--gc:undefined;grid-column:var(--gc);}#wowjob-ui .gr{--gr:undefined;grid-row:var(--gr);}#wowjob-ui .gt{--gt:undefined;grid-template:var(--gt);}#wowjob-ui .gtc{--gtc:none;grid-template-columns:var(--gtc);}#wowjob-ui .gtr{--gtr:none;grid-template-rows:var(--gtr);}#wowjob-ui .gta{--gta:none;grid-template-areas:var(--gta);}#wowjob-ui .h{--h:auto;height:var(--h);}#wowjob-ui .hc{--hc:auto;hyphenate-character:var(--hc);}#wowjob-ui .hy{--hy:manual;hyphens:var(--hy);}#wowjob-ui .io{--io:from-image;image-orientation:var(--io);}#wowjob-ui .ir{--ir:auto;image-rendering:var(--ir);}#wowjob-ui .is{--is:auto;inline-size:var(--is);}#wowjob-ui .i{--i:auto;inset:var(--i);}#wowjob-ui .ib{--ib:undefined;inset-block:var(--ib);}#wowjob-ui .ii{--ii:undefined;inset-inline:var(--ii);}#wowjob-ui .iso{--iso:auto;isolation:var(--iso);}#wowjob-ui .jc{--jc:normal;justify-content:var(--jc);}#wowjob-ui .ji{--ji:legacy;justify-items:var(--ji);}#wowjob-ui .js{--js:auto;justify-self:var(--js);}#wowjob-ui .lf{--lf:auto;left:var(--lf);}#wowjob-ui .r{--r:auto;right:var(--r);}#wowjob-ui .tp{--tp:auto;top:var(--tp);}#wowjob-ui .ls{--ls:normal;letter-spacing:var(--ls);}#wowjob-ui .lc{--lc:white;lighting-color:var(--lc);}#wowjob-ui .lb{--lb:auto;line-break:var(--lb);}#wowjob-ui .lh{--lh:normal;line-height:var(--lh);}#wowjob-ui .lst{--lst:undefined;list-style:var(--lst);}#wowjob-ui .mb{--mb:undefined;margin-block:var(--mb);}#wowjob-ui .mi{--mi:undefined;margin-inline:var(--mi);}#wowjob-ui .mk{--mk:none;mask:var(--mk);}#wowjob-ui .mc{--mc:border-box;mask-clip:var(--mc);}#wowjob-ui .ms{--ms:normal;math-style:var(--ms);}#wowjob-ui .mxbs{--mxbs:none;max-block-size:var(--mxbs);}#wowjob-ui .mxh{--mxh:none;max-height:var(--mxh);}#wowjob-ui .mxis{--mxis:none;max-inline-size:var(--mxis);}#wowjob-ui .mxw{--mxw:none;max-width:var(--mxw);}#wowjob-ui .mibs{--mibs:auto;min-block-size:var(--mibs);}#wowjob-ui .mih{--mih:auto;min-height:var(--mih);}#wowjob-ui .miis{--miis:auto;min-inline-size:var(--miis);}#wowjob-ui .miw{--miw:auto;min-width:var(--miw);}#wowjob-ui .mbm{--mbm:normal;mix-blend-mode:var(--mbm);}#wowjob-ui .of{--of:fill;object-fit:var(--of);}#wowjob-ui .op{--op:50% 50%;object-position:var(--op);}#wowjob-ui .oa{--oa:auto;offset-anchor:var(--oa);}#wowjob-ui .ofst{--ofst:undefined;offset:var(--ofst);}#wowjob-ui .o{--o:1;opacity:var(--o);}#wowjob-ui .or{--or:0;order:var(--or);}#wowjob-ui .ol{--ol:invert;outline:var(--ol);}#wowjob-ui .oo{--oo:0;outline-offset:var(--oo);}#wowjob-ui .ov{--ov:visible;overflow:var(--ov);}#wowjob-ui .osb{--osb:undefined;overscroll-behavior:var(--osb);}#wowjob-ui .osbb{--osbb:auto;overscroll-behavior-block:var(--osbb);}#wowjob-ui .osbi{--osbi:auto;overscroll-behavior-inline:var(--osbi);}#wowjob-ui .pp{--pp:none;perspective:var(--pp);}#wowjob-ui .po{--po:50% 50%;perspective-origin:var(--po);}#wowjob-ui .pc{--pc:normal;place-content:var(--pc);}#wowjob-ui .pi{--pi:normal;place-items:var(--pi);}#wowjob-ui .ps{--ps:auto;place-self:var(--ps);}#wowjob-ui .pe{--pe:auto;pointer-events:var(--pe);}#wowjob-ui .pos{--pos:static;position:var(--pos);}#wowjob-ui .q{--q:auto;quotes:var(--q);}#wowjob-ui .rs{--rs:none;resize:var(--rs);}#wowjob-ui .rt{--rt:none;rotate:var(--rt);}#wowjob-ui .ra{--ra:space-around;ruby-align:var(--ra);}#wowjob-ui .rp{--rp:over;ruby-position:var(--rp);}#wowjob-ui .s{--s:1;scale:var(--s);}#wowjob-ui .sb{--sb:auto;scroll-behavior:var(--sb);}#wowjob-ui .sm{--sm:0;scroll-margin:var(--sm);}#wowjob-ui .sp{--sp:0;scroll-padding:var(--sp);}#wowjob-ui .ssa{--ssa:none;scroll-snap-align:var(--ssa);}#wowjob-ui .sss{--sss:normal;scroll-snap-stop:var(--sss);}#wowjob-ui .sst{--sst:none;scroll-snap-type:var(--sst);}#wowjob-ui .st{--st:undefined;scroll-timeline:var(--st);}#wowjob-ui .sta{--sta:undefined;scroll-timeline-axis:var(--sta);}#wowjob-ui .stn{--stn:undefined;scroll-timeline-name:var(--stn);}#wowjob-ui .sc{--sc:undefined;scrollbar-color:var(--sc);}#wowjob-ui .sg{--sg:auto;scrollbar-gutter:var(--sg);}#wowjob-ui .sw{--sw:auto;scrollbar-width:var(--sw);}#wowjob-ui .sit{--sit:0;shape-image-threshold:var(--sit);}#wowjob-ui .smg{--smg:0;shape-margin:var(--smg);}#wowjob-ui .so{--so:none;shape-outside:var(--so);}#wowjob-ui .sr{--sr:auto;shape-rendering:var(--sr);}#wowjob-ui .stc{--stc:black;stop-color:var(--stc);}#wowjob-ui .sto{--sto:1;stop-opacity:var(--sto);}#wowjob-ui .str{--str:none;stroke:var(--str);}#wowjob-ui .sda{--sda:none;stroke-dasharray:var(--sda);}#wowjob-ui .sdo{--sdo:0;stroke-dashoffset:var(--sdo);}#wowjob-ui .slc{--slc:butt;stroke-linecap:var(--slc);}#wowjob-ui .slj{--slj:miter;stroke-linejoin:var(--slj);}#wowjob-ui .sml{--sml:4;stroke-miterlimit:var(--sml);}#wowjob-ui .sop{--sop:1;stroke-opacity:var(--sop);}#wowjob-ui .swi{--swi:1;stroke-width:var(--swi);}#wowjob-ui .txs{--txs:8;tab-size:var(--txs);}#wowjob-ui .tl{--tl:auto;table-layout:var(--tl);}#wowjob-ui .ta{--ta:start;text-align:var(--ta);}#wowjob-ui .tal{--tal:auto;text-align-last:var(--tal);}#wowjob-ui .tan{--tan:start;text-anchor:var(--tan);}#wowjob-ui .tcu{--tcu:none;text-combine-upright:var(--tcu);}#wowjob-ui .td{--td:undefined;text-decoration:var(--td);}#wowjob-ui .te{--te:undefined;text-emphasis:var(--te);}#wowjob-ui .ti{--ti:0;text-indent:var(--ti);}#wowjob-ui .tj{--tj:undefined;text-justify:var(--tj);}#wowjob-ui .to{--to:mixed;text-orientation:var(--to);}#wowjob-ui .tof{--tof:clip;text-overflow:var(--tof);}#wowjob-ui .tr{--tr:auto;text-rendering:var(--tr);}#wowjob-ui .tsh{--tsh:none;text-shadow:var(--tsh);}#wowjob-ui .tt{--tt:none;text-transform:var(--tt);}#wowjob-ui .tuo{--tuo:auto;text-underline-offset:var(--tuo);}#wowjob-ui .tup{--tup:auto;text-underline-position:var(--tup);}#wowjob-ui .tw{--tw:undefined;text-wrap:var(--tw);}#wowjob-ui .tws{--tws:normal;text-wrap-style:var(--tws);}#wowjob-ui .toa{--toa:auto;touch-action:var(--toa);}#wowjob-ui .tf{--tf:none;transform:var(--tf);}#wowjob-ui .tb{--tb:border-box;transform-box:var(--tb);}#wowjob-ui .tro{--tro:50% 50% 0;transform-origin:var(--tro);}#wowjob-ui .ts{--ts:flat;transform-style:var(--ts);}#wowjob-ui .tra{--tra:all 0s ease 0s;transition:var(--tra);}#wowjob-ui .tbe{--tbe:auto;transition-behavior:var(--tbe);}#wowjob-ui .t{--t:none;translate:var(--t);}#wowjob-ui .us{--us:auto;user-select:var(--us);}#wowjob-ui .ve{--ve:none;vector-effect:var(--ve);}#wowjob-ui .va{--va:baseline;vertical-align:var(--va);}#wowjob-ui .vtn{--vtn:undefined;view-transition-name:var(--vtn);}#wowjob-ui .vs{--vs:visible;visibility:var(--vs);}#wowjob-ui .ws{--ws:undefined;white-space:var(--ws);}#wowjob-ui .w{--w:auto;width:var(--w);}#wowjob-ui .wc{--wc:auto;will-change:var(--wc);}#wowjob-ui .wb{--wb:normal;word-break:var(--wb);}#wowjob-ui .wsp{--wsp:0;word-spacing:var(--wsp);}#wowjob-ui .wm{--wm:horizontal-tb;writing-mode:var(--wm);}#wowjob-ui .zi{--zi:auto;z-index:var(--zi);}#wowjob-ui .zm{--zm:auto;zoom:var(--zm);}@media screen and (min-width: 48rem) {#wowjob-ui .acc{--t-acc:var(--acc);accent-color:var(--t-acc);}#wowjob-ui .ac{--t-ac:var(--ac);align-content:var(--t-ac);}#wowjob-ui .ai{--t-ai:var(--ai);align-items:var(--t-ai);}#wowjob-ui .as{--t-as:var(--as);align-self:var(--t-as);}#wowjob-ui .a{--t-a:var(--a);animation:var(--t-a);}#wowjob-ui .ap{--t-ap:var(--ap);appearance:var(--t-ap);}#wowjob-ui .ar{--t-ar:var(--ar);aspect-ratio:var(--t-ar);}#wowjob-ui .bf{--t-bf:var(--bf);backdrop-filter:var(--t-bf);}#wowjob-ui .bv{--t-bv:var(--bv);backface-visibility:var(--t-bv);}#wowjob-ui .bg{--t-bg:var(--bg);background:var(--t-bg);}#wowjob-ui .bbm{--t-bbm:var(--bbm);background-blend-mode:var(--t-bbm);}#wowjob-ui .bc{--t-bc:var(--bc);background-clip:var(--t-bc);}#wowjob-ui .bo{--t-bo:var(--bo);background-origin:var(--t-bo);}#wowjob-ui .bz{--t-bz:var(--bz);block-size:var(--t-bz);}#wowjob-ui .m{--t-m:var(--m);margin:var(--t-m);}#wowjob-ui .p{--t-p:var(--p);padding:var(--t-p);}#wowjob-ui .b{--t-b:var(--b);border:var(--t-b);}#wowjob-ui .bb{--t-bb:var(--bb);border-block:var(--t-bb);}#wowjob-ui .bbs{--t-bbs:var(--bbs);border-block-start:var(--t-bbs);}#wowjob-ui .bbt{--t-bbt:var(--bbt);border-bottom:var(--t-bbt);}#wowjob-ui .bblr{--t-bblr:var(--bblr);border-bottom-left-radius:var(--t-bblr);}#wowjob-ui .bbrr{--t-bbrr:var(--bbrr);border-bottom-right-radius:var(--t-bbrr);}#wowjob-ui .bbe{--t-bbe:var(--bbe);border-block-end:var(--t-bbe);}#wowjob-ui .bdc{--t-bdc:var(--bdc);border-collapse:var(--t-bdc);}#wowjob-ui .beer{--t-beer:var(--beer);border-end-end-radius:var(--t-beer);}#wowjob-ui .besr{--t-besr:var(--besr);border-end-start-radius:var(--t-besr);}#wowjob-ui .bim{--t-bim:var(--bim);border-image:var(--t-bim);}#wowjob-ui .bi{--t-bi:var(--bi);border-inline:var(--t-bi);}#wowjob-ui .bl{--t-bl:var(--bl);border-left:var(--t-bl);}#wowjob-ui .bis{--t-bis:var(--bis);border-inline-start:var(--t-bis);}#wowjob-ui .bie{--t-bie:var(--bie);border-inline-end:var(--t-bie);}#wowjob-ui .bra{--t-bra:var(--bra);border-radius:var(--t-bra);}#wowjob-ui .br{--t-br:var(--br);border-right:var(--t-br);}#wowjob-ui .bw{--t-bw:var(--bw);border-width:var(--t-bw);}#wowjob-ui .bds{--t-bds:var(--bds);border-style:var(--t-bds);}#wowjob-ui .bser{--t-bser:var(--bser);border-start-end-radius:var(--t-bser);}#wowjob-ui .bssr{--t-bssr:var(--bssr);border-start-start-radius:var(--t-bssr);}#wowjob-ui .bdt{--t-bdt:var(--bdt);border-top:var(--t-bdt);}#wowjob-ui .btlr{--t-btlr:var(--btlr);border-top-left-radius:var(--t-btlr);}#wowjob-ui .btrr{--t-btrr:var(--btrr);border-top-right-radius:var(--t-btrr);}#wowjob-ui .bt{--t-bt:var(--bt);bottom:var(--t-bt);}#wowjob-ui .bs{--t-bs:var(--bs);box-shadow:var(--t-bs);}#wowjob-ui .bsz{--t-bsz:var(--bsz);box-sizing:var(--t-bsz);}#wowjob-ui .ba{--t-ba:var(--ba);break-after:var(--t-ba);}#wowjob-ui .bbf{--t-bbf:var(--bbf);break-before:var(--t-bbf);}#wowjob-ui .bbi{--t-bbi:var(--bbi);break-inside:var(--t-bbi);}#wowjob-ui .cps{--t-cps:var(--cps);caption-side:var(--t-cps);}#wowjob-ui .crc{--t-crc:var(--crc);caret-color:var(--t-crc);}#wowjob-ui .clr{--t-clr:var(--clr);clear:var(--t-clr);}#wowjob-ui .cl{--t-cl:var(--cl);clip:var(--t-cl);}#wowjob-ui .clp{--t-clp:var(--clp);clip-path:var(--t-clp);}#wowjob-ui .c{--t-c:var(--c);color:var(--t-c);}#wowjob-ui .ci{--t-ci:var(--ci);color-interpolation:var(--t-ci);}#wowjob-ui .cif{--t-cif:var(--cif);color-interpolation-filters:var(--t-cif);}#wowjob-ui .cs{--t-cs:var(--cs);color-scheme:var(--t-cs);}#wowjob-ui .cc{--t-cc:var(--cc);column-count:var(--t-cc);}#wowjob-ui .cf{--t-cf:var(--cf);column-fill:var(--t-cf);}#wowjob-ui .cg{--t-cg:var(--cg);column-gap:var(--t-cg);}#wowjob-ui .cr{--t-cr:var(--cr);column-rule:var(--t-cr);}#wowjob-ui .csp{--t-csp:var(--csp);column-span:var(--t-csp);}#wowjob-ui .cw{--t-cw:var(--cw);column-width:var(--t-cw);}#wowjob-ui .ctn{--t-ctn:var(--ctn);contain:var(--t-ctn);}#wowjob-ui .cib{--t-cib:var(--cib);contain-intrinsic-block-size:var(--t-cib);}#wowjob-ui .cih{--t-cih:var(--cih);contain-intrinsic-height:var(--t-cih);}#wowjob-ui .ciis{--t-ciis:var(--ciis);contain-intrinsic-inline-size:var(--t-ciis);}#wowjob-ui .cis{--t-cis:var(--cis);contain-intrinsic-size:var(--t-cis);}#wowjob-ui .ciw{--t-ciw:var(--ciw);contain-intrinsic-width:var(--t-ciw);}#wowjob-ui .cn{--t-cn:var(--cn);container:var(--t-cn);}#wowjob-ui .cnt{--t-cnt:var(--cnt);content:var(--t-cnt);}#wowjob-ui .cv{--t-cv:var(--cv);content-visibility:var(--t-cv);}#wowjob-ui .cin{--t-cin:var(--cin);counter-increment:var(--t-cin);}#wowjob-ui .cre{--t-cre:var(--cre);counter-reset:var(--t-cre);}#wowjob-ui .cse{--t-cse:var(--cse);counter-set:var(--t-cse);}#wowjob-ui .cur{--t-cur:var(--cur);cursor:var(--t-cur);}#wowjob-ui .cx{--t-cx:var(--cx);cx:var(--t-cx);}#wowjob-ui .cy{--t-cy:var(--cy);cy:var(--t-cy);}#wowjob-ui .d{--t-d:var(--d);d:var(--t-d);}#wowjob-ui .dir{--t-dir:var(--dir);direction:var(--t-dir);}#wowjob-ui .db{--t-db:var(--db);dominant-baseline:var(--t-db);}#wowjob-ui .ec{--t-ec:var(--ec);empty-cells:var(--t-ec);}#wowjob-ui .ds{--t-ds:var(--ds);display:var(--t-ds);}#wowjob-ui .fx{--t-fx:var(--fx);flex:var(--t-fx);}#wowjob-ui .fb{--t-fb:var(--fb);flex-basis:var(--t-fb);}#wowjob-ui .fd{--t-fd:var(--fd);flex-direction:var(--t-fd);}#wowjob-ui .fg{--t-fg:var(--fg);flex-grow:var(--t-fg);}#wowjob-ui .fsh{--t-fsh:var(--fsh);flex-shrink:var(--t-fsh);}#wowjob-ui .fv{--t-fv:var(--fv);font-variant:var(--t-fv);}#wowjob-ui .fw{--t-fw:var(--fw);font-weight:var(--t-fw);}#wowjob-ui .fwr{--t-fwr:var(--fwr);flex-wrap:var(--t-fwr);}#wowjob-ui .fiz{--t-fiz:var(--fiz);field-sizing:var(--t-fiz);}#wowjob-ui .fl{--t-fl:var(--fl);fill:var(--t-fl);}#wowjob-ui .fop{--t-fop:var(--fop);fill-opacity:var(--t-fop);}#wowjob-ui .fr{--t-fr:var(--fr);fill-rule:var(--t-fr);}#wowjob-ui .fil{--t-fil:var(--fil);filter:var(--t-fil);}#wowjob-ui .flo{--t-flo:var(--flo);float:var(--t-flo);}#wowjob-ui .fc{--t-fc:var(--fc);flood-color:var(--t-fc);}#wowjob-ui .fo{--t-fo:var(--fo);flood-opacity:var(--t-fo);}#wowjob-ui .fnt{--t-fnt:var(--fnt);font:var(--t-fnt);}#wowjob-ui .ff{--t-ff:var(--ff);font-family:var(--t-ff);}#wowjob-ui .fz{--t-fz:var(--fz);font-size:var(--t-fz);}#wowjob-ui .fst{--t-fst:var(--fst);font-stretch:var(--t-fst);}#wowjob-ui .fs{--t-fs:var(--fs);font-style:var(--t-fs);}#wowjob-ui .ffs{--t-ffs:var(--ffs);font-feature-settings:var(--t-ffs);}#wowjob-ui .fk{--t-fk:var(--fk);font-kerning:var(--t-fk);}#wowjob-ui .flov{--t-flov:var(--flov);font-language-override:var(--t-flov);}#wowjob-ui .fos{--t-fos:var(--fos);font-optical-sizing:var(--t-fos);}#wowjob-ui .fp{--t-fp:var(--fp);font-palette:var(--t-fp);}#wowjob-ui .fsa{--t-fsa:var(--fsa);font-size-adjust:var(--t-fsa);}#wowjob-ui .fssc{--t-fssc:var(--fssc);font-synthesis-small-caps:var(--t-fssc);}#wowjob-ui .fss{--t-fss:var(--fss);font-synthesis-style:var(--t-fss);}#wowjob-ui .fsw{--t-fsw:var(--fsw);font-synthesis-weight:var(--t-fsw);}#wowjob-ui .fva{--t-fva:var(--fva);font-variant-alternates:var(--t-fva);}#wowjob-ui .fvc{--t-fvc:var(--fvc);font-variant-caps:var(--t-fvc);}#wowjob-ui .fvea{--t-fvea:var(--fvea);font-variant-east-asian:var(--t-fvea);}#wowjob-ui .fvl{--t-fvl:var(--fvl);font-variant-ligatures:var(--t-fvl);}#wowjob-ui .fvn{--t-fvn:var(--fvn);font-variant-numeric:var(--t-fvn);}#wowjob-ui .fvp{--t-fvp:var(--fvp);font-variant-position:var(--t-fvp);}#wowjob-ui .fvs{--t-fvs:var(--fvs);font-variation-settings:var(--t-fvs);}#wowjob-ui .fca{--t-fca:var(--fca);forced-color-adjust:var(--t-fca);}#wowjob-ui .gp{--t-gp:var(--gp);gap:var(--t-gp);}#wowjob-ui .gac{--t-gac:var(--gac);grid-auto-columns:var(--t-gac);}#wowjob-ui .gaf{--t-gaf:var(--gaf);grid-auto-flow:var(--t-gaf);}#wowjob-ui .gar{--t-gar:var(--gar);grid-auto-rows:var(--t-gar);}#wowjob-ui .gc{--t-gc:var(--gc);grid-column:var(--t-gc);}#wowjob-ui .gr{--t-gr:var(--gr);grid-row:var(--t-gr);}#wowjob-ui .gt{--t-gt:var(--gt);grid-template:var(--t-gt);}#wowjob-ui .gtc{--t-gtc:var(--gtc);grid-template-columns:var(--t-gtc);}#wowjob-ui .gtr{--t-gtr:var(--gtr);grid-template-rows:var(--t-gtr);}#wowjob-ui .gta{--t-gta:var(--gta);grid-template-areas:var(--t-gta);}#wowjob-ui .h{--t-h:var(--h);height:var(--t-h);}#wowjob-ui .hc{--t-hc:var(--hc);hyphenate-character:var(--t-hc);}#wowjob-ui .hy{--t-hy:var(--hy);hyphens:var(--t-hy);}#wowjob-ui .io{--t-io:var(--io);image-orientation:var(--t-io);}#wowjob-ui .ir{--t-ir:var(--ir);image-rendering:var(--t-ir);}#wowjob-ui .is{--t-is:var(--is);inline-size:var(--t-is);}#wowjob-ui .i{--t-i:var(--i);inset:var(--t-i);}#wowjob-ui .ib{--t-ib:var(--ib);inset-block:var(--t-ib);}#wowjob-ui .ii{--t-ii:var(--ii);inset-inline:var(--t-ii);}#wowjob-ui .iso{--t-iso:var(--iso);isolation:var(--t-iso);}#wowjob-ui .jc{--t-jc:var(--jc);justify-content:var(--t-jc);}#wowjob-ui .ji{--t-ji:var(--ji);justify-items:var(--t-ji);}#wowjob-ui .js{--t-js:var(--js);justify-self:var(--t-js);}#wowjob-ui .lf{--t-lf:var(--lf);left:var(--t-lf);}#wowjob-ui .r{--t-r:var(--r);right:var(--t-r);}#wowjob-ui .tp{--t-tp:var(--tp);top:var(--t-tp);}#wowjob-ui .ls{--t-ls:var(--ls);letter-spacing:var(--t-ls);}#wowjob-ui .lc{--t-lc:var(--lc);lighting-color:var(--t-lc);}#wowjob-ui .lb{--t-lb:var(--lb);line-break:var(--t-lb);}#wowjob-ui .lh{--t-lh:var(--lh);line-height:var(--t-lh);}#wowjob-ui .lst{--t-lst:var(--lst);list-style:var(--t-lst);}#wowjob-ui .mb{--t-mb:var(--mb);margin-block:var(--t-mb);}#wowjob-ui .mi{--t-mi:var(--mi);margin-inline:var(--t-mi);}#wowjob-ui .mk{--t-mk:var(--mk);mask:var(--t-mk);}#wowjob-ui .mc{--t-mc:var(--mc);mask-clip:var(--t-mc);}#wowjob-ui .ms{--t-ms:var(--ms);math-style:var(--t-ms);}#wowjob-ui .mxbs{--t-mxbs:var(--mxbs);max-block-size:var(--t-mxbs);}#wowjob-ui .mxh{--t-mxh:var(--mxh);max-height:var(--t-mxh);}#wowjob-ui .mxis{--t-mxis:var(--mxis);max-inline-size:var(--t-mxis);}#wowjob-ui .mxw{--t-mxw:var(--mxw);max-width:var(--t-mxw);}#wowjob-ui .mibs{--t-mibs:var(--mibs);min-block-size:var(--t-mibs);}#wowjob-ui .mih{--t-mih:var(--mih);min-height:var(--t-mih);}#wowjob-ui .miis{--t-miis:var(--miis);min-inline-size:var(--t-miis);}#wowjob-ui .miw{--t-miw:var(--miw);min-width:var(--t-miw);}#wowjob-ui .mbm{--t-mbm:var(--mbm);mix-blend-mode:var(--t-mbm);}#wowjob-ui .of{--t-of:var(--of);object-fit:var(--t-of);}#wowjob-ui .op{--t-op:var(--op);object-position:var(--t-op);}#wowjob-ui .oa{--t-oa:var(--oa);offset-anchor:var(--t-oa);}#wowjob-ui .ofst{--t-ofst:var(--ofst);offset:var(--t-ofst);}#wowjob-ui .o{--t-o:var(--o);opacity:var(--t-o);}#wowjob-ui .or{--t-or:var(--or);order:var(--t-or);}#wowjob-ui .ol{--t-ol:var(--ol);outline:var(--t-ol);}#wowjob-ui .oo{--t-oo:var(--oo);outline-offset:var(--t-oo);}#wowjob-ui .ov{--t-ov:var(--ov);overflow:var(--t-ov);}#wowjob-ui .osb{--t-osb:var(--osb);overscroll-behavior:var(--t-osb);}#wowjob-ui .osbb{--t-osbb:var(--osbb);overscroll-behavior-block:var(--t-osbb);}#wowjob-ui .osbi{--t-osbi:var(--osbi);overscroll-behavior-inline:var(--t-osbi);}#wowjob-ui .pp{--t-pp:var(--pp);perspective:var(--t-pp);}#wowjob-ui .po{--t-po:var(--po);perspective-origin:var(--t-po);}#wowjob-ui .pc{--t-pc:var(--pc);place-content:var(--t-pc);}#wowjob-ui .pi{--t-pi:var(--pi);place-items:var(--t-pi);}#wowjob-ui .ps{--t-ps:var(--ps);place-self:var(--t-ps);}#wowjob-ui .pe{--t-pe:var(--pe);pointer-events:var(--t-pe);}#wowjob-ui .pos{--t-pos:var(--pos);position:var(--t-pos);}#wowjob-ui .q{--t-q:var(--q);quotes:var(--t-q);}#wowjob-ui .rs{--t-rs:var(--rs);resize:var(--t-rs);}#wowjob-ui .rt{--t-rt:var(--rt);rotate:var(--t-rt);}#wowjob-ui .ra{--t-ra:var(--ra);ruby-align:var(--t-ra);}#wowjob-ui .rp{--t-rp:var(--rp);ruby-position:var(--t-rp);}#wowjob-ui .s{--t-s:var(--s);scale:var(--t-s);}#wowjob-ui .sb{--t-sb:var(--sb);scroll-behavior:var(--t-sb);}#wowjob-ui .sm{--t-sm:var(--sm);scroll-margin:var(--t-sm);}#wowjob-ui .sp{--t-sp:var(--sp);scroll-padding:var(--t-sp);}#wowjob-ui .ssa{--t-ssa:var(--ssa);scroll-snap-align:var(--t-ssa);}#wowjob-ui .sss{--t-sss:var(--sss);scroll-snap-stop:var(--t-sss);}#wowjob-ui .sst{--t-sst:var(--sst);scroll-snap-type:var(--t-sst);}#wowjob-ui .st{--t-st:var(--st);scroll-timeline:var(--t-st);}#wowjob-ui .sta{--t-sta:var(--sta);scroll-timeline-axis:var(--t-sta);}#wowjob-ui .stn{--t-stn:var(--stn);scroll-timeline-name:var(--t-stn);}#wowjob-ui .sc{--t-sc:var(--sc);scrollbar-color:var(--t-sc);}#wowjob-ui .sg{--t-sg:var(--sg);scrollbar-gutter:var(--t-sg);}#wowjob-ui .sw{--t-sw:var(--sw);scrollbar-width:var(--t-sw);}#wowjob-ui .sit{--t-sit:var(--sit);shape-image-threshold:var(--t-sit);}#wowjob-ui .smg{--t-smg:var(--smg);shape-margin:var(--t-smg);}#wowjob-ui .so{--t-so:var(--so);shape-outside:var(--t-so);}#wowjob-ui .sr{--t-sr:var(--sr);shape-rendering:var(--t-sr);}#wowjob-ui .stc{--t-stc:var(--stc);stop-color:var(--t-stc);}#wowjob-ui .sto{--t-sto:var(--sto);stop-opacity:var(--t-sto);}#wowjob-ui .str{--t-str:var(--str);stroke:var(--t-str);}#wowjob-ui .sda{--t-sda:var(--sda);stroke-dasharray:var(--t-sda);}#wowjob-ui .sdo{--t-sdo:var(--sdo);stroke-dashoffset:var(--t-sdo);}#wowjob-ui .slc{--t-slc:var(--slc);stroke-linecap:var(--t-slc);}#wowjob-ui .slj{--t-slj:var(--slj);stroke-linejoin:var(--t-slj);}#wowjob-ui .sml{--t-sml:var(--sml);stroke-miterlimit:var(--t-sml);}#wowjob-ui .sop{--t-sop:var(--sop);stroke-opacity:var(--t-sop);}#wowjob-ui .swi{--t-swi:var(--swi);stroke-width:var(--t-swi);}#wowjob-ui .txs{--t-txs:var(--txs);tab-size:var(--t-txs);}#wowjob-ui .tl{--t-tl:var(--tl);table-layout:var(--t-tl);}#wowjob-ui .ta{--t-ta:var(--ta);text-align:var(--t-ta);}#wowjob-ui .tal{--t-tal:var(--tal);text-align-last:var(--t-tal);}#wowjob-ui .tan{--t-tan:var(--tan);text-anchor:var(--t-tan);}#wowjob-ui .tcu{--t-tcu:var(--tcu);text-combine-upright:var(--t-tcu);}#wowjob-ui .td{--t-td:var(--td);text-decoration:var(--t-td);}#wowjob-ui .te{--t-te:var(--te);text-emphasis:var(--t-te);}#wowjob-ui .ti{--t-ti:var(--ti);text-indent:var(--t-ti);}#wowjob-ui .tj{--t-tj:var(--tj);text-justify:var(--t-tj);}#wowjob-ui .to{--t-to:var(--to);text-orientation:var(--t-to);}#wowjob-ui .tof{--t-tof:var(--tof);text-overflow:var(--t-tof);}#wowjob-ui .tr{--t-tr:var(--tr);text-rendering:var(--t-tr);}#wowjob-ui .tsh{--t-tsh:var(--tsh);text-shadow:var(--t-tsh);}#wowjob-ui .tt{--t-tt:var(--tt);text-transform:var(--t-tt);}#wowjob-ui .tuo{--t-tuo:var(--tuo);text-underline-offset:var(--t-tuo);}#wowjob-ui .tup{--t-tup:var(--tup);text-underline-position:var(--t-tup);}#wowjob-ui .tw{--t-tw:var(--tw);text-wrap:var(--t-tw);}#wowjob-ui .tws{--t-tws:var(--tws);text-wrap-style:var(--t-tws);}#wowjob-ui .toa{--t-toa:var(--toa);touch-action:var(--t-toa);}#wowjob-ui .tf{--t-tf:var(--tf);transform:var(--t-tf);}#wowjob-ui .tb{--t-tb:var(--tb);transform-box:var(--t-tb);}#wowjob-ui .tro{--t-tro:var(--tro);transform-origin:var(--t-tro);}#wowjob-ui .ts{--t-ts:var(--ts);transform-style:var(--t-ts);}#wowjob-ui .tra{--t-tra:var(--tra);transition:var(--t-tra);}#wowjob-ui .tbe{--t-tbe:var(--tbe);transition-behavior:var(--t-tbe);}#wowjob-ui .t{--t-t:var(--t);translate:var(--t-t);}#wowjob-ui .us{--t-us:var(--us);user-select:var(--t-us);}#wowjob-ui .ve{--t-ve:var(--ve);vector-effect:var(--t-ve);}#wowjob-ui .va{--t-va:var(--va);vertical-align:var(--t-va);}#wowjob-ui .vtn{--t-vtn:var(--vtn);view-transition-name:var(--t-vtn);}#wowjob-ui .vs{--t-vs:var(--vs);visibility:var(--t-vs);}#wowjob-ui .ws{--t-ws:var(--ws);white-space:var(--t-ws);}#wowjob-ui .w{--t-w:var(--w);width:var(--t-w);}#wowjob-ui .wc{--t-wc:var(--wc);will-change:var(--t-wc);}#wowjob-ui .wb{--t-wb:var(--wb);word-break:var(--t-wb);}#wowjob-ui .wsp{--t-wsp:var(--wsp);word-spacing:var(--t-wsp);}#wowjob-ui .wm{--t-wm:var(--wm);writing-mode:var(--t-wm);}#wowjob-ui .zi{--t-zi:var(--zi);z-index:var(--t-zi);}#wowjob-ui .zm{--t-zm:var(--zm);zoom:var(--t-zm);}}@media screen and (min-width: 80rem) {#wowjob-ui .acc{--d-acc:var(--t-acc);accent-color:var(--d-acc);}#wowjob-ui .ac{--d-ac:var(--t-ac);align-content:var(--d-ac);}#wowjob-ui .ai{--d-ai:var(--t-ai);align-items:var(--d-ai);}#wowjob-ui .as{--d-as:var(--t-as);align-self:var(--d-as);}#wowjob-ui .a{--d-a:var(--t-a);animation:var(--d-a);}#wowjob-ui .ap{--d-ap:var(--t-ap);appearance:var(--d-ap);}#wowjob-ui .ar{--d-ar:var(--t-ar);aspect-ratio:var(--d-ar);}#wowjob-ui .bf{--d-bf:var(--t-bf);backdrop-filter:var(--d-bf);}#wowjob-ui .bv{--d-bv:var(--t-bv);backface-visibility:var(--d-bv);}#wowjob-ui .bg{--d-bg:var(--t-bg);background:var(--d-bg);}#wowjob-ui .bbm{--d-bbm:var(--t-bbm);background-blend-mode:var(--d-bbm);}#wowjob-ui .bc{--d-bc:var(--t-bc);background-clip:var(--d-bc);}#wowjob-ui .bo{--d-bo:var(--t-bo);background-origin:var(--d-bo);}#wowjob-ui .bz{--d-bz:var(--t-bz);block-size:var(--d-bz);}#wowjob-ui .m{--d-m:var(--t-m);margin:var(--d-m);}#wowjob-ui .p{--d-p:var(--t-p);padding:var(--d-p);}#wowjob-ui .b{--d-b:var(--t-b);border:var(--d-b);}#wowjob-ui .bb{--d-bb:var(--t-bb);border-block:var(--d-bb);}#wowjob-ui .bbs{--d-bbs:var(--t-bbs);border-block-start:var(--d-bbs);}#wowjob-ui .bbt{--d-bbt:var(--t-bbt);border-bottom:var(--d-bbt);}#wowjob-ui .bblr{--d-bblr:var(--t-bblr);border-bottom-left-radius:var(--d-bblr);}#wowjob-ui .bbrr{--d-bbrr:var(--t-bbrr);border-bottom-right-radius:var(--d-bbrr);}#wowjob-ui .bbe{--d-bbe:var(--t-bbe);border-block-end:var(--d-bbe);}#wowjob-ui .bdc{--d-bdc:var(--t-bdc);border-collapse:var(--d-bdc);}#wowjob-ui .beer{--d-beer:var(--t-beer);border-end-end-radius:var(--d-beer);}#wowjob-ui .besr{--d-besr:var(--t-besr);border-end-start-radius:var(--d-besr);}#wowjob-ui .bim{--d-bim:var(--t-bim);border-image:var(--d-bim);}#wowjob-ui .bi{--d-bi:var(--t-bi);border-inline:var(--d-bi);}#wowjob-ui .bl{--d-bl:var(--t-bl);border-left:var(--d-bl);}#wowjob-ui .bis{--d-bis:var(--t-bis);border-inline-start:var(--d-bis);}#wowjob-ui .bie{--d-bie:var(--t-bie);border-inline-end:var(--d-bie);}#wowjob-ui .bra{--d-bra:var(--t-bra);border-radius:var(--d-bra);}#wowjob-ui .br{--d-br:var(--t-br);border-right:var(--d-br);}#wowjob-ui .bw{--d-bw:var(--t-bw);border-width:var(--d-bw);}#wowjob-ui .bds{--d-bds:var(--t-bds);border-style:var(--d-bds);}#wowjob-ui .bser{--d-bser:var(--t-bser);border-start-end-radius:var(--d-bser);}#wowjob-ui .bssr{--d-bssr:var(--t-bssr);border-start-start-radius:var(--d-bssr);}#wowjob-ui .bdt{--d-bdt:var(--t-bdt);border-top:var(--d-bdt);}#wowjob-ui .btlr{--d-btlr:var(--t-btlr);border-top-left-radius:var(--d-btlr);}#wowjob-ui .btrr{--d-btrr:var(--t-btrr);border-top-right-radius:var(--d-btrr);}#wowjob-ui .bt{--d-bt:var(--t-bt);bottom:var(--d-bt);}#wowjob-ui .bs{--d-bs:var(--t-bs);box-shadow:var(--d-bs);}#wowjob-ui .bsz{--d-bsz:var(--t-bsz);box-sizing:var(--d-bsz);}#wowjob-ui .ba{--d-ba:var(--t-ba);break-after:var(--d-ba);}#wowjob-ui .bbf{--d-bbf:var(--t-bbf);break-before:var(--d-bbf);}#wowjob-ui .bbi{--d-bbi:var(--t-bbi);break-inside:var(--d-bbi);}#wowjob-ui .cps{--d-cps:var(--t-cps);caption-side:var(--d-cps);}#wowjob-ui .crc{--d-crc:var(--t-crc);caret-color:var(--d-crc);}#wowjob-ui .clr{--d-clr:var(--t-clr);clear:var(--d-clr);}#wowjob-ui .cl{--d-cl:var(--t-cl);clip:var(--d-cl);}#wowjob-ui .clp{--d-clp:var(--t-clp);clip-path:var(--d-clp);}#wowjob-ui .c{--d-c:var(--t-c);color:var(--d-c);}#wowjob-ui .ci{--d-ci:var(--t-ci);color-interpolation:var(--d-ci);}#wowjob-ui .cif{--d-cif:var(--t-cif);color-interpolation-filters:var(--d-cif);}#wowjob-ui .cs{--d-cs:var(--t-cs);color-scheme:var(--d-cs);}#wowjob-ui .cc{--d-cc:var(--t-cc);column-count:var(--d-cc);}#wowjob-ui .cf{--d-cf:var(--t-cf);column-fill:var(--d-cf);}#wowjob-ui .cg{--d-cg:var(--t-cg);column-gap:var(--d-cg);}#wowjob-ui .cr{--d-cr:var(--t-cr);column-rule:var(--d-cr);}#wowjob-ui .csp{--d-csp:var(--t-csp);column-span:var(--d-csp);}#wowjob-ui .cw{--d-cw:var(--t-cw);column-width:var(--d-cw);}#wowjob-ui .ctn{--d-ctn:var(--t-ctn);contain:var(--d-ctn);}#wowjob-ui .cib{--d-cib:var(--t-cib);contain-intrinsic-block-size:var(--d-cib);}#wowjob-ui .cih{--d-cih:var(--t-cih);contain-intrinsic-height:var(--d-cih);}#wowjob-ui .ciis{--d-ciis:var(--t-ciis);contain-intrinsic-inline-size:var(--d-ciis);}#wowjob-ui .cis{--d-cis:var(--t-cis);contain-intrinsic-size:var(--d-cis);}#wowjob-ui .ciw{--d-ciw:var(--t-ciw);contain-intrinsic-width:var(--d-ciw);}#wowjob-ui .cn{--d-cn:var(--t-cn);container:var(--d-cn);}#wowjob-ui .cnt{--d-cnt:var(--t-cnt);content:var(--d-cnt);}#wowjob-ui .cv{--d-cv:var(--t-cv);content-visibility:var(--d-cv);}#wowjob-ui .cin{--d-cin:var(--t-cin);counter-increment:var(--d-cin);}#wowjob-ui .cre{--d-cre:var(--t-cre);counter-reset:var(--d-cre);}#wowjob-ui .cse{--d-cse:var(--t-cse);counter-set:var(--d-cse);}#wowjob-ui .cur{--d-cur:var(--t-cur);cursor:var(--d-cur);}#wowjob-ui .cx{--d-cx:var(--t-cx);cx:var(--d-cx);}#wowjob-ui .cy{--d-cy:var(--t-cy);cy:var(--d-cy);}#wowjob-ui .d{--d-d:var(--t-d);d:var(--d-d);}#wowjob-ui .dir{--d-dir:var(--t-dir);direction:var(--d-dir);}#wowjob-ui .db{--d-db:var(--t-db);dominant-baseline:var(--d-db);}#wowjob-ui .ec{--d-ec:var(--t-ec);empty-cells:var(--d-ec);}#wowjob-ui .ds{--d-ds:var(--t-ds);display:var(--d-ds);}#wowjob-ui .fx{--d-fx:var(--t-fx);flex:var(--d-fx);}#wowjob-ui .fb{--d-fb:var(--t-fb);flex-basis:var(--d-fb);}#wowjob-ui .fd{--d-fd:var(--t-fd);flex-direction:var(--d-fd);}#wowjob-ui .fg{--d-fg:var(--t-fg);flex-grow:var(--d-fg);}#wowjob-ui .fsh{--d-fsh:var(--t-fsh);flex-shrink:var(--d-fsh);}#wowjob-ui .fv{--d-fv:var(--t-fv);font-variant:var(--d-fv);}#wowjob-ui .fw{--d-fw:var(--t-fw);font-weight:var(--d-fw);}#wowjob-ui .fwr{--d-fwr:var(--t-fwr);flex-wrap:var(--d-fwr);}#wowjob-ui .fiz{--d-fiz:var(--t-fiz);field-sizing:var(--d-fiz);}#wowjob-ui .fl{--d-fl:var(--t-fl);fill:var(--d-fl);}#wowjob-ui .fop{--d-fop:var(--t-fop);fill-opacity:var(--d-fop);}#wowjob-ui .fr{--d-fr:var(--t-fr);fill-rule:var(--d-fr);}#wowjob-ui .fil{--d-fil:var(--t-fil);filter:var(--d-fil);}#wowjob-ui .flo{--d-flo:var(--t-flo);float:var(--d-flo);}#wowjob-ui .fc{--d-fc:var(--t-fc);flood-color:var(--d-fc);}#wowjob-ui .fo{--d-fo:var(--t-fo);flood-opacity:var(--d-fo);}#wowjob-ui .fnt{--d-fnt:var(--t-fnt);font:var(--d-fnt);}#wowjob-ui .ff{--d-ff:var(--t-ff);font-family:var(--d-ff);}#wowjob-ui .fz{--d-fz:var(--t-fz);font-size:var(--d-fz);}#wowjob-ui .fst{--d-fst:var(--t-fst);font-stretch:var(--d-fst);}#wowjob-ui .fs{--d-fs:var(--t-fs);font-style:var(--d-fs);}#wowjob-ui .ffs{--d-ffs:var(--t-ffs);font-feature-settings:var(--d-ffs);}#wowjob-ui .fk{--d-fk:var(--t-fk);font-kerning:var(--d-fk);}#wowjob-ui .flov{--d-flov:var(--t-flov);font-language-override:var(--d-flov);}#wowjob-ui .fos{--d-fos:var(--t-fos);font-optical-sizing:var(--d-fos);}#wowjob-ui .fp{--d-fp:var(--t-fp);font-palette:var(--d-fp);}#wowjob-ui .fsa{--d-fsa:var(--t-fsa);font-size-adjust:var(--d-fsa);}#wowjob-ui .fssc{--d-fssc:var(--t-fssc);font-synthesis-small-caps:var(--d-fssc);}#wowjob-ui .fss{--d-fss:var(--t-fss);font-synthesis-style:var(--d-fss);}#wowjob-ui .fsw{--d-fsw:var(--t-fsw);font-synthesis-weight:var(--d-fsw);}#wowjob-ui .fva{--d-fva:var(--t-fva);font-variant-alternates:var(--d-fva);}#wowjob-ui .fvc{--d-fvc:var(--t-fvc);font-variant-caps:var(--d-fvc);}#wowjob-ui .fvea{--d-fvea:var(--t-fvea);font-variant-east-asian:var(--d-fvea);}#wowjob-ui .fvl{--d-fvl:var(--t-fvl);font-variant-ligatures:var(--d-fvl);}#wowjob-ui .fvn{--d-fvn:var(--t-fvn);font-variant-numeric:var(--d-fvn);}#wowjob-ui .fvp{--d-fvp:var(--t-fvp);font-variant-position:var(--d-fvp);}#wowjob-ui .fvs{--d-fvs:var(--t-fvs);font-variation-settings:var(--d-fvs);}#wowjob-ui .fca{--d-fca:var(--t-fca);forced-color-adjust:var(--d-fca);}#wowjob-ui .gp{--d-gp:var(--t-gp);gap:var(--d-gp);}#wowjob-ui .gac{--d-gac:var(--t-gac);grid-auto-columns:var(--d-gac);}#wowjob-ui .gaf{--d-gaf:var(--t-gaf);grid-auto-flow:var(--d-gaf);}#wowjob-ui .gar{--d-gar:var(--t-gar);grid-auto-rows:var(--d-gar);}#wowjob-ui .gc{--d-gc:var(--t-gc);grid-column:var(--d-gc);}#wowjob-ui .gr{--d-gr:var(--t-gr);grid-row:var(--d-gr);}#wowjob-ui .gt{--d-gt:var(--t-gt);grid-template:var(--d-gt);}#wowjob-ui .gtc{--d-gtc:var(--t-gtc);grid-template-columns:var(--d-gtc);}#wowjob-ui .gtr{--d-gtr:var(--t-gtr);grid-template-rows:var(--d-gtr);}#wowjob-ui .gta{--d-gta:var(--t-gta);grid-template-areas:var(--d-gta);}#wowjob-ui .h{--d-h:var(--t-h);height:var(--d-h);}#wowjob-ui .hc{--d-hc:var(--t-hc);hyphenate-character:var(--d-hc);}#wowjob-ui .hy{--d-hy:var(--t-hy);hyphens:var(--d-hy);}#wowjob-ui .io{--d-io:var(--t-io);image-orientation:var(--d-io);}#wowjob-ui .ir{--d-ir:var(--t-ir);image-rendering:var(--d-ir);}#wowjob-ui .is{--d-is:var(--t-is);inline-size:var(--d-is);}#wowjob-ui .i{--d-i:var(--t-i);inset:var(--d-i);}#wowjob-ui .ib{--d-ib:var(--t-ib);inset-block:var(--d-ib);}#wowjob-ui .ii{--d-ii:var(--t-ii);inset-inline:var(--d-ii);}#wowjob-ui .iso{--d-iso:var(--t-iso);isolation:var(--d-iso);}#wowjob-ui .jc{--d-jc:var(--t-jc);justify-content:var(--d-jc);}#wowjob-ui .ji{--d-ji:var(--t-ji);justify-items:var(--d-ji);}#wowjob-ui .js{--d-js:var(--t-js);justify-self:var(--d-js);}#wowjob-ui .lf{--d-lf:var(--t-lf);left:var(--d-lf);}#wowjob-ui .r{--d-r:var(--t-r);right:var(--d-r);}#wowjob-ui .tp{--d-tp:var(--t-tp);top:var(--d-tp);}#wowjob-ui .ls{--d-ls:var(--t-ls);letter-spacing:var(--d-ls);}#wowjob-ui .lc{--d-lc:var(--t-lc);lighting-color:var(--d-lc);}#wowjob-ui .lb{--d-lb:var(--t-lb);line-break:var(--d-lb);}#wowjob-ui .lh{--d-lh:var(--t-lh);line-height:var(--d-lh);}#wowjob-ui .lst{--d-lst:var(--t-lst);list-style:var(--d-lst);}#wowjob-ui .mb{--d-mb:var(--t-mb);margin-block:var(--d-mb);}#wowjob-ui .mi{--d-mi:var(--t-mi);margin-inline:var(--d-mi);}#wowjob-ui .mk{--d-mk:var(--t-mk);mask:var(--d-mk);}#wowjob-ui .mc{--d-mc:var(--t-mc);mask-clip:var(--d-mc);}#wowjob-ui .ms{--d-ms:var(--t-ms);math-style:var(--d-ms);}#wowjob-ui .mxbs{--d-mxbs:var(--t-mxbs);max-block-size:var(--d-mxbs);}#wowjob-ui .mxh{--d-mxh:var(--t-mxh);max-height:var(--d-mxh);}#wowjob-ui .mxis{--d-mxis:var(--t-mxis);max-inline-size:var(--d-mxis);}#wowjob-ui .mxw{--d-mxw:var(--t-mxw);max-width:var(--d-mxw);}#wowjob-ui .mibs{--d-mibs:var(--t-mibs);min-block-size:var(--d-mibs);}#wowjob-ui .mih{--d-mih:var(--t-mih);min-height:var(--d-mih);}#wowjob-ui .miis{--d-miis:var(--t-miis);min-inline-size:var(--d-miis);}#wowjob-ui .miw{--d-miw:var(--t-miw);min-width:var(--d-miw);}#wowjob-ui .mbm{--d-mbm:var(--t-mbm);mix-blend-mode:var(--d-mbm);}#wowjob-ui .of{--d-of:var(--t-of);object-fit:var(--d-of);}#wowjob-ui .op{--d-op:var(--t-op);object-position:var(--d-op);}#wowjob-ui .oa{--d-oa:var(--t-oa);offset-anchor:var(--d-oa);}#wowjob-ui .ofst{--d-ofst:var(--t-ofst);offset:var(--d-ofst);}#wowjob-ui .o{--d-o:var(--t-o);opacity:var(--d-o);}#wowjob-ui .or{--d-or:var(--t-or);order:var(--d-or);}#wowjob-ui .ol{--d-ol:var(--t-ol);outline:var(--d-ol);}#wowjob-ui .oo{--d-oo:var(--t-oo);outline-offset:var(--d-oo);}#wowjob-ui .ov{--d-ov:var(--t-ov);overflow:var(--d-ov);}#wowjob-ui .osb{--d-osb:var(--t-osb);overscroll-behavior:var(--d-osb);}#wowjob-ui .osbb{--d-osbb:var(--t-osbb);overscroll-behavior-block:var(--d-osbb);}#wowjob-ui .osbi{--d-osbi:var(--t-osbi);overscroll-behavior-inline:var(--d-osbi);}#wowjob-ui .pp{--d-pp:var(--t-pp);perspective:var(--d-pp);}#wowjob-ui .po{--d-po:var(--t-po);perspective-origin:var(--d-po);}#wowjob-ui .pc{--d-pc:var(--t-pc);place-content:var(--d-pc);}#wowjob-ui .pi{--d-pi:var(--t-pi);place-items:var(--d-pi);}#wowjob-ui .ps{--d-ps:var(--t-ps);place-self:var(--d-ps);}#wowjob-ui .pe{--d-pe:var(--t-pe);pointer-events:var(--d-pe);}#wowjob-ui .pos{--d-pos:var(--t-pos);position:var(--d-pos);}#wowjob-ui .q{--d-q:var(--t-q);quotes:var(--d-q);}#wowjob-ui .rs{--d-rs:var(--t-rs);resize:var(--d-rs);}#wowjob-ui .rt{--d-rt:var(--t-rt);rotate:var(--d-rt);}#wowjob-ui .ra{--d-ra:var(--t-ra);ruby-align:var(--d-ra);}#wowjob-ui .rp{--d-rp:var(--t-rp);ruby-position:var(--d-rp);}#wowjob-ui .s{--d-s:var(--t-s);scale:var(--d-s);}#wowjob-ui .sb{--d-sb:var(--t-sb);scroll-behavior:var(--d-sb);}#wowjob-ui .sm{--d-sm:var(--t-sm);scroll-margin:var(--d-sm);}#wowjob-ui .sp{--d-sp:var(--t-sp);scroll-padding:var(--d-sp);}#wowjob-ui .ssa{--d-ssa:var(--t-ssa);scroll-snap-align:var(--d-ssa);}#wowjob-ui .sss{--d-sss:var(--t-sss);scroll-snap-stop:var(--d-sss);}#wowjob-ui .sst{--d-sst:var(--t-sst);scroll-snap-type:var(--d-sst);}#wowjob-ui .st{--d-st:var(--t-st);scroll-timeline:var(--d-st);}#wowjob-ui .sta{--d-sta:var(--t-sta);scroll-timeline-axis:var(--d-sta);}#wowjob-ui .stn{--d-stn:var(--t-stn);scroll-timeline-name:var(--d-stn);}#wowjob-ui .sc{--d-sc:var(--t-sc);scrollbar-color:var(--d-sc);}#wowjob-ui .sg{--d-sg:var(--t-sg);scrollbar-gutter:var(--d-sg);}#wowjob-ui .sw{--d-sw:var(--t-sw);scrollbar-width:var(--d-sw);}#wowjob-ui .sit{--d-sit:var(--t-sit);shape-image-threshold:var(--d-sit);}#wowjob-ui .smg{--d-smg:var(--t-smg);shape-margin:var(--d-smg);}#wowjob-ui .so{--d-so:var(--t-so);shape-outside:var(--d-so);}#wowjob-ui .sr{--d-sr:var(--t-sr);shape-rendering:var(--d-sr);}#wowjob-ui .stc{--d-stc:var(--t-stc);stop-color:var(--d-stc);}#wowjob-ui .sto{--d-sto:var(--t-sto);stop-opacity:var(--d-sto);}#wowjob-ui .str{--d-str:var(--t-str);stroke:var(--d-str);}#wowjob-ui .sda{--d-sda:var(--t-sda);stroke-dasharray:var(--d-sda);}#wowjob-ui .sdo{--d-sdo:var(--t-sdo);stroke-dashoffset:var(--d-sdo);}#wowjob-ui .slc{--d-slc:var(--t-slc);stroke-linecap:var(--d-slc);}#wowjob-ui .slj{--d-slj:var(--t-slj);stroke-linejoin:var(--d-slj);}#wowjob-ui .sml{--d-sml:var(--t-sml);stroke-miterlimit:var(--d-sml);}#wowjob-ui .sop{--d-sop:var(--t-sop);stroke-opacity:var(--d-sop);}#wowjob-ui .swi{--d-swi:var(--t-swi);stroke-width:var(--d-swi);}#wowjob-ui .txs{--d-txs:var(--t-txs);tab-size:var(--d-txs);}#wowjob-ui .tl{--d-tl:var(--t-tl);table-layout:var(--d-tl);}#wowjob-ui .ta{--d-ta:var(--t-ta);text-align:var(--d-ta);}#wowjob-ui .tal{--d-tal:var(--t-tal);text-align-last:var(--d-tal);}#wowjob-ui .tan{--d-tan:var(--t-tan);text-anchor:var(--d-tan);}#wowjob-ui .tcu{--d-tcu:var(--t-tcu);text-combine-upright:var(--d-tcu);}#wowjob-ui .td{--d-td:var(--t-td);text-decoration:var(--d-td);}#wowjob-ui .te{--d-te:var(--t-te);text-emphasis:var(--d-te);}#wowjob-ui .ti{--d-ti:var(--t-ti);text-indent:var(--d-ti);}#wowjob-ui .tj{--d-tj:var(--t-tj);text-justify:var(--d-tj);}#wowjob-ui .to{--d-to:var(--t-to);text-orientation:var(--d-to);}#wowjob-ui .tof{--d-tof:var(--t-tof);text-overflow:var(--d-tof);}#wowjob-ui .tr{--d-tr:var(--t-tr);text-rendering:var(--d-tr);}#wowjob-ui .tsh{--d-tsh:var(--t-tsh);text-shadow:var(--d-tsh);}#wowjob-ui .tt{--d-tt:var(--t-tt);text-transform:var(--d-tt);}#wowjob-ui .tuo{--d-tuo:var(--t-tuo);text-underline-offset:var(--d-tuo);}#wowjob-ui .tup{--d-tup:var(--t-tup);text-underline-position:var(--d-tup);}#wowjob-ui .tw{--d-tw:var(--t-tw);text-wrap:var(--d-tw);}#wowjob-ui .tws{--d-tws:var(--t-tws);text-wrap-style:var(--d-tws);}#wowjob-ui .toa{--d-toa:var(--t-toa);touch-action:var(--d-toa);}#wowjob-ui .tf{--d-tf:var(--t-tf);transform:var(--d-tf);}#wowjob-ui .tb{--d-tb:var(--t-tb);transform-box:var(--d-tb);}#wowjob-ui .tro{--d-tro:var(--t-tro);transform-origin:var(--d-tro);}#wowjob-ui .ts{--d-ts:var(--t-ts);transform-style:var(--d-ts);}#wowjob-ui .tra{--d-tra:var(--t-tra);transition:var(--d-tra);}#wowjob-ui .tbe{--d-tbe:var(--t-tbe);transition-behavior:var(--d-tbe);}#wowjob-ui .t{--d-t:var(--t-t);translate:var(--d-t);}#wowjob-ui .us{--d-us:var(--t-us);user-select:var(--d-us);}#wowjob-ui .ve{--d-ve:var(--t-ve);vector-effect:var(--d-ve);}#wowjob-ui .va{--d-va:var(--t-va);vertical-align:var(--d-va);}#wowjob-ui .vtn{--d-vtn:var(--t-vtn);view-transition-name:var(--d-vtn);}#wowjob-ui .vs{--d-vs:var(--t-vs);visibility:var(--d-vs);}#wowjob-ui .ws{--d-ws:var(--t-ws);white-space:var(--d-ws);}#wowjob-ui .w{--d-w:var(--t-w);width:var(--d-w);}#wowjob-ui .wc{--d-wc:var(--t-wc);will-change:var(--d-wc);}#wowjob-ui .wb{--d-wb:var(--t-wb);word-break:var(--d-wb);}#wowjob-ui .wsp{--d-wsp:var(--t-wsp);word-spacing:var(--d-wsp);}#wowjob-ui .wm{--d-wm:var(--t-wm);writing-mode:var(--d-wm);}#wowjob-ui .zi{--d-zi:var(--t-zi);z-index:var(--d-zi);}#wowjob-ui .zm{--d-zm:var(--t-zm);zoom:var(--d-zm);}}
```

## CSS: src/css/all.css

```css
/* WOWJOB UI CSS
Yet Another CSS UI library, which provides zero build time, best debugging DX, very flexible, reposniveness for RWD at core, and works with React, NextJS, Astro and more
Author: Marian Zburlea
Organization: Wow Job
GitHub: https://github.com/wowjob
Website: https://wowjob.blog
Website: https://wowjob.dev
Website: https://wowjob.ai
*/
/* CSS theme */
#wowjob-ui .theme-brand {
  --tch: 259;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-primary {
  --tch: 225;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-secondary {
  --tch: 318;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-tertiary {
  --tch: 245;
  --tcs: 86%;
  --tcl: 15%;
  --bgcl: 80%;
  --bdcl: 60%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-default {
  --tch: 221;
  --tcs: 13%;
  --tcl: 15%;
  --bgcl: 95%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-error {
  --tch: 4;
  --tcs: 86%;
  --tcl: 95%;
  --bgcl: 20%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-warning {
  --tch: 34;
  --tcs: 94%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-success {
  --tch: 152;
  --tcs: 77%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-info {
  --tch: 200;
  --tcs: 77%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-light {
  --tch: 0;
  --tcs: 0%;
  --tcl: 15%;
  --bgcl: 98%;
  --bdcl: 70%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-dark {
  --tch: 240;
  --tcs: 15%;
  --tcl: 95%;
  --bgcl: 15%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-accent {
  --tch: 50;
  --tcs: 94%;
  --tcl: 15%;
  --bgcl: 70%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-muted {
  --tch: 210;
  --tcs: 10%;
  --tcl: 50%;
  --bgcl: 90%;
  --bdcl: 70%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-highlight {
  --tch: 280;
  --tcs: 80%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}

/* CSS Properties */
#wowjob-ui .accent-color {
  --accent-color: auto;
  accent-color: var(--accent-color);
}
#wowjob-ui .align-content {
  --align-content: normal;
  align-content: var(--align-content);
}
#wowjob-ui .align-items {
  --align-items: normal;
  align-items: var(--align-items);
}
#wowjob-ui .align-self {
  --align-self: auto;
  align-self: var(--align-self);
}
#wowjob-ui .animation {
  --animation: none;
  animation: var(--animation);
}
#wowjob-ui .appearance {
  --appearance: none;
  appearance: var(--appearance);
}
#wowjob-ui .aspect-ratio {
  --aspect-ratio: auto;
  aspect-ratio: var(--aspect-ratio);
}
#wowjob-ui .backdrop-filter {
  --backdrop-filter: none;
  backdrop-filter: var(--backdrop-filter);
}
#wowjob-ui .backface-visibility {
  --backface-visibility: visible;
  backface-visibility: var(--backface-visibility);
}
#wowjob-ui .background {
  --background: transparent;
  background: var(--background);
}
#wowjob-ui .background-blend-mode {
  --background-blend-mode: normal;
  background-blend-mode: var(--background-blend-mode);
}
#wowjob-ui .background-clip {
  --background-clip: border-box;
  background-clip: var(--background-clip);
}
#wowjob-ui .background-origin {
  --background-origin: padding-box;
  background-origin: var(--background-origin);
}
#wowjob-ui .block-size {
  --block-size: auto;
  block-size: var(--block-size);
}
#wowjob-ui .margin {
  --margin: 0;
  margin: var(--margin);
}
#wowjob-ui .padding {
  --padding: 0;
  padding: var(--padding);
}
#wowjob-ui .border {
  --border: medium none currentcolor;
  border: var(--border);
}
#wowjob-ui .border-block {
  --border-block: undefined;
  border-block: var(--border-block);
}
#wowjob-ui .border-block-start {
  --border-block-start: none;
  border-block-start: var(--border-block-start);
}
#wowjob-ui .border-bottom {
  --border-bottom: undefined;
  border-bottom: var(--border-bottom);
}
#wowjob-ui .border-bottom-left-radius {
  --border-bottom-left-radius: 0;
  border-bottom-left-radius: var(--border-bottom-left-radius);
}
#wowjob-ui .border-bottom-right-radius {
  --border-bottom-right-radius: 0;
  border-bottom-right-radius: var(--border-bottom-right-radius);
}
#wowjob-ui .border-block-end {
  --border-block-end: none;
  border-block-end: var(--border-block-end);
}
#wowjob-ui .border-collapse {
  --border-collapse: separate;
  border-collapse: var(--border-collapse);
}
#wowjob-ui .border-end-end-radius {
  --border-end-end-radius: 0;
  border-end-end-radius: var(--border-end-end-radius);
}
#wowjob-ui .border-end-start-radius {
  --border-end-start-radius: 0;
  border-end-start-radius: var(--border-end-start-radius);
}
#wowjob-ui .border-image {
  --border-image: undefined;
  border-image: var(--border-image);
}
#wowjob-ui .border-inline {
  --border-inline: undefined;
  border-inline: var(--border-inline);
}
#wowjob-ui .border-left {
  --border-left: undefined;
  border-left: var(--border-left);
}
#wowjob-ui .border-inline-start {
  --border-inline-start: undefined;
  border-inline-start: var(--border-inline-start);
}
#wowjob-ui .border-inline-end {
  --border-inline-end: undefined;
  border-inline-end: var(--border-inline-end);
}
#wowjob-ui .border-radius {
  --border-radius: undefined;
  border-radius: var(--border-radius);
}
#wowjob-ui .border-right {
  --border-right: undefined;
  border-right: var(--border-right);
}
#wowjob-ui .border-width {
  --border-width: 0;
  border-width: var(--border-width);
}
#wowjob-ui .border-style {
  --border-style: none;
  border-style: var(--border-style);
}
#wowjob-ui .border-start-end-radius {
  --border-start-end-radius: 0;
  border-start-end-radius: var(--border-start-end-radius);
}
#wowjob-ui .border-start-start-radius {
  --border-start-start-radius: 0;
  border-start-start-radius: var(--border-start-start-radius);
}
#wowjob-ui .border-top {
  --border-top: undefined;
  border-top: var(--border-top);
}
#wowjob-ui .border-top-left-radius {
  --border-top-left-radius: 0;
  border-top-left-radius: var(--border-top-left-radius);
}
#wowjob-ui .border-top-right-radius {
  --border-top-right-radius: 0;
  border-top-right-radius: var(--border-top-right-radius);
}
#wowjob-ui .bottom {
  --bottom: auto;
  bottom: var(--bottom);
}
#wowjob-ui .box-shadow {
  --box-shadow: none;
  box-shadow: var(--box-shadow);
}
#wowjob-ui .box-sizing {
  --box-sizing: content-box;
  box-sizing: var(--box-sizing);
}
#wowjob-ui .break-after {
  --break-after: auto;
  break-after: var(--break-after);
}
#wowjob-ui .break-before {
  --break-before: auto;
  break-before: var(--break-before);
}
#wowjob-ui .break-inside {
  --break-inside: auto;
  break-inside: var(--break-inside);
}
#wowjob-ui .caption-side {
  --caption-side: top;
  caption-side: var(--caption-side);
}
#wowjob-ui .caret-color {
  --caret-color: auto;
  caret-color: var(--caret-color);
}
#wowjob-ui .clear {
  --clear: none;
  clear: var(--clear);
}
#wowjob-ui .clip {
  --clip: auto;
  clip: var(--clip);
}
#wowjob-ui .clip-path {
  --clip-path: none;
  clip-path: var(--clip-path);
}
#wowjob-ui .color {
  --color: currentcolor;
  color: var(--color);
}
#wowjob-ui .color-interpolation {
  --color-interpolation: srgb;
  color-interpolation: var(--color-interpolation);
}
#wowjob-ui .color-interpolation-filters {
  --color-interpolation-filters: linearrgb;
  color-interpolation-filters: var(--color-interpolation-filters);
}
#wowjob-ui .color-scheme {
  --color-scheme: normal;
  color-scheme: var(--color-scheme);
}
#wowjob-ui .column-count {
  --column-count: auto;
  column-count: var(--column-count);
}
#wowjob-ui .column-fill {
  --column-fill: balance;
  column-fill: var(--column-fill);
}
#wowjob-ui .column-gap {
  --column-gap: normal;
  column-gap: var(--column-gap);
}
#wowjob-ui .column-rule {
  --column-rule: undefined;
  column-rule: var(--column-rule);
}
#wowjob-ui .column-span {
  --column-span: none;
  column-span: var(--column-span);
}
#wowjob-ui .column-width {
  --column-width: auto;
  column-width: var(--column-width);
}
#wowjob-ui .contain {
  --contain: none;
  contain: var(--contain);
}
#wowjob-ui .contain-intrinsic-block-size {
  --contain-intrinsic-block-size: auto;
  contain-intrinsic-block-size: var(--contain-intrinsic-block-size);
}
#wowjob-ui .contain-intrinsic-height {
  --contain-intrinsic-height: auto;
  contain-intrinsic-height: var(--contain-intrinsic-height);
}
#wowjob-ui .contain-intrinsic-inline-size {
  --contain-intrinsic-inline-size: auto;
  contain-intrinsic-inline-size: var(--contain-intrinsic-inline-size);
}
#wowjob-ui .contain-intrinsic-size {
  --contain-intrinsic-size: undefined;
  contain-intrinsic-size: var(--contain-intrinsic-size);
}
#wowjob-ui .contain-intrinsic-width {
  --contain-intrinsic-width: auto;
  contain-intrinsic-width: var(--contain-intrinsic-width);
}
#wowjob-ui .container {
  --container: undefined;
  container: var(--container);
}
#wowjob-ui .content {
  --content: normal;
  content: var(--content);
}
#wowjob-ui .content-visibility {
  --content-visibility: visible;
  content-visibility: var(--content-visibility);
}
#wowjob-ui .counter-increment {
  --counter-increment: none;
  counter-increment: var(--counter-increment);
}
#wowjob-ui .counter-reset {
  --counter-reset: none;
  counter-reset: var(--counter-reset);
}
#wowjob-ui .counter-set {
  --counter-set: none;
  counter-set: var(--counter-set);
}
#wowjob-ui .cursor {
  --cursor: auto;
  cursor: var(--cursor);
}
#wowjob-ui .cx {
  --cx: undefined;
  cx: var(--cx);
}
#wowjob-ui .cy {
  --cy: undefined;
  cy: var(--cy);
}
#wowjob-ui .d {
  --d: undefined;
  d: var(--d);
}
#wowjob-ui .direction {
  --direction: ltr;
  direction: var(--direction);
}
#wowjob-ui .dominant-baseline {
  --dominant-baseline: auto;
  dominant-baseline: var(--dominant-baseline);
}
#wowjob-ui .empty-cells {
  --empty-cells: show;
  empty-cells: var(--empty-cells);
}
#wowjob-ui .display {
  --display: inline;
  display: var(--display);
}
#wowjob-ui .flex {
  --flex: 0 1 auto;
  flex: var(--flex);
}
#wowjob-ui .flex-basis {
  --flex-basis: auto;
  flex-basis: var(--flex-basis);
}
#wowjob-ui .flex-direction {
  --flex-direction: row;
  flex-direction: var(--flex-direction);
}
#wowjob-ui .flex-grow {
  --flex-grow: 0;
  flex-grow: var(--flex-grow);
}
#wowjob-ui .flex-shrink {
  --flex-shrink: 1;
  flex-shrink: var(--flex-shrink);
}
#wowjob-ui .font-variant {
  --font-variant: undefined;
  font-variant: var(--font-variant);
}
#wowjob-ui .font-weight {
  --font-weight: 400;
  font-weight: var(--font-weight);
}
#wowjob-ui .flex-wrap {
  --flex-wrap: nowrap;
  flex-wrap: var(--flex-wrap);
}
#wowjob-ui .field-sizing {
  --field-sizing: undefined;
  field-sizing: var(--field-sizing);
}
#wowjob-ui .fill {
  --fill: black;
  fill: var(--fill);
}
#wowjob-ui .fill-opacity {
  --fill-opacity: 1;
  fill-opacity: var(--fill-opacity);
}
#wowjob-ui .fill-rule {
  --fill-rule: nonzero;
  fill-rule: var(--fill-rule);
}
#wowjob-ui .filter {
  --filter: none;
  filter: var(--filter);
}
#wowjob-ui .float {
  --float: none;
  float: var(--float);
}
#wowjob-ui .flood-color {
  --flood-color: black;
  flood-color: var(--flood-color);
}
#wowjob-ui .flood-opacity {
  --flood-opacity: 1;
  flood-opacity: var(--flood-opacity);
}
#wowjob-ui .font {
  --font: 1rem sans-serif;
  font: var(--font);
}
#wowjob-ui .font-family {
  --font-family: serif;
  font-family: var(--font-family);
}
#wowjob-ui .font-size {
  --font-size: 16;
  font-size: var(--font-size);
}
#wowjob-ui .font-stretch {
  --font-stretch: normal;
  font-stretch: var(--font-stretch);
}
#wowjob-ui .font-style {
  --font-style: normal;
  font-style: var(--font-style);
}
#wowjob-ui .font-feature-settings {
  --font-feature-settings: normal;
  font-feature-settings: var(--font-feature-settings);
}
#wowjob-ui .font-kerning {
  --font-kerning: auto;
  font-kerning: var(--font-kerning);
}
#wowjob-ui .font-language-override {
  --font-language-override: undefined;
  font-language-override: var(--font-language-override);
}
#wowjob-ui .font-optical-sizing {
  --font-optical-sizing: auto;
  font-optical-sizing: var(--font-optical-sizing);
}
#wowjob-ui .font-palette {
  --font-palette: normal;
  font-palette: var(--font-palette);
}
#wowjob-ui .font-size-adjust {
  --font-size-adjust: none;
  font-size-adjust: var(--font-size-adjust);
}
#wowjob-ui .font-synthesis-small-caps {
  --font-synthesis-small-caps: auto;
  font-synthesis-small-caps: var(--font-synthesis-small-caps);
}
#wowjob-ui .font-synthesis-style {
  --font-synthesis-style: auto;
  font-synthesis-style: var(--font-synthesis-style);
}
#wowjob-ui .font-synthesis-weight {
  --font-synthesis-weight: auto;
  font-synthesis-weight: var(--font-synthesis-weight);
}
#wowjob-ui .font-variant-alternates {
  --font-variant-alternates: normal;
  font-variant-alternates: var(--font-variant-alternates);
}
#wowjob-ui .font-variant-caps {
  --font-variant-caps: normal;
  font-variant-caps: var(--font-variant-caps);
}
#wowjob-ui .font-variant-east-asian {
  --font-variant-east-asian: normal;
  font-variant-east-asian: var(--font-variant-east-asian);
}
#wowjob-ui .font-variant-ligatures {
  --font-variant-ligatures: normal;
  font-variant-ligatures: var(--font-variant-ligatures);
}
#wowjob-ui .font-variant-numeric {
  --font-variant-numeric: normal;
  font-variant-numeric: var(--font-variant-numeric);
}
#wowjob-ui .font-variant-position {
  --font-variant-position: normal;
  font-variant-position: var(--font-variant-position);
}
#wowjob-ui .font-variation-settings {
  --font-variation-settings: normal;
  font-variation-settings: var(--font-variation-settings);
}
#wowjob-ui .forced-color-adjust {
  --forced-color-adjust: undefined;
  forced-color-adjust: var(--forced-color-adjust);
}
#wowjob-ui .gap {
  --gap: normal;
  gap: var(--gap);
}
#wowjob-ui .grid-auto-columns {
  --grid-auto-columns: auto;
  grid-auto-columns: var(--grid-auto-columns);
}
#wowjob-ui .grid-auto-flow {
  --grid-auto-flow: row;
  grid-auto-flow: var(--grid-auto-flow);
}
#wowjob-ui .grid-auto-rows {
  --grid-auto-rows: auto;
  grid-auto-rows: var(--grid-auto-rows);
}
#wowjob-ui .grid-column {
  --grid-column: undefined;
  grid-column: var(--grid-column);
}
#wowjob-ui .grid-row {
  --grid-row: undefined;
  grid-row: var(--grid-row);
}
#wowjob-ui .grid-template {
  --grid-template: undefined;
  grid-template: var(--grid-template);
}
#wowjob-ui .grid-template-columns {
  --grid-template-columns: none;
  grid-template-columns: var(--grid-template-columns);
}
#wowjob-ui .grid-template-rows {
  --grid-template-rows: none;
  grid-template-rows: var(--grid-template-rows);
}
#wowjob-ui .grid-template-areas {
  --grid-template-areas: none;
  grid-template-areas: var(--grid-template-areas);
}
#wowjob-ui .height {
  --height: auto;
  height: var(--height);
}
#wowjob-ui .hyphenate-character {
  --hyphenate-character: auto;
  hyphenate-character: var(--hyphenate-character);
}
#wowjob-ui .hyphens {
  --hyphens: manual;
  hyphens: var(--hyphens);
}
#wowjob-ui .image-orientation {
  --image-orientation: from-image;
  image-orientation: var(--image-orientation);
}
#wowjob-ui .image-rendering {
  --image-rendering: auto;
  image-rendering: var(--image-rendering);
}
#wowjob-ui .inline-size {
  --inline-size: auto;
  inline-size: var(--inline-size);
}
#wowjob-ui .inset {
  --inset: auto;
  inset: var(--inset);
}
#wowjob-ui .inset-block {
  --inset-block: undefined;
  inset-block: var(--inset-block);
}
#wowjob-ui .inset-inline {
  --inset-inline: undefined;
  inset-inline: var(--inset-inline);
}
#wowjob-ui .isolation {
  --isolation: auto;
  isolation: var(--isolation);
}
#wowjob-ui .justify-content {
  --justify-content: normal;
  justify-content: var(--justify-content);
}
#wowjob-ui .justify-items {
  --justify-items: legacy;
  justify-items: var(--justify-items);
}
#wowjob-ui .justify-self {
  --justify-self: auto;
  justify-self: var(--justify-self);
}
#wowjob-ui .left {
  --left: auto;
  left: var(--left);
}
#wowjob-ui .right {
  --right: auto;
  right: var(--right);
}
#wowjob-ui .top {
  --top: auto;
  top: var(--top);
}
#wowjob-ui .letter-spacing {
  --letter-spacing: normal;
  letter-spacing: var(--letter-spacing);
}
#wowjob-ui .lighting-color {
  --lighting-color: white;
  lighting-color: var(--lighting-color);
}
#wowjob-ui .line-break {
  --line-break: auto;
  line-break: var(--line-break);
}
#wowjob-ui .line-height {
  --line-height: normal;
  line-height: var(--line-height);
}
#wowjob-ui .list-style {
  --list-style: undefined;
  list-style: var(--list-style);
}
#wowjob-ui .margin-block {
  --margin-block: undefined;
  margin-block: var(--margin-block);
}
#wowjob-ui .margin-inline {
  --margin-inline: undefined;
  margin-inline: var(--margin-inline);
}
#wowjob-ui .mask {
  --mask: none;
  mask: var(--mask);
}
#wowjob-ui .mask-clip {
  --mask-clip: border-box;
  mask-clip: var(--mask-clip);
}
#wowjob-ui .math-style {
  --math-style: normal;
  math-style: var(--math-style);
}
#wowjob-ui .max-block-size {
  --max-block-size: none;
  max-block-size: var(--max-block-size);
}
#wowjob-ui .max-height {
  --max-height: none;
  max-height: var(--max-height);
}
#wowjob-ui .max-inline-size {
  --max-inline-size: none;
  max-inline-size: var(--max-inline-size);
}
#wowjob-ui .max-width {
  --max-width: none;
  max-width: var(--max-width);
}
#wowjob-ui .min-block-size {
  --min-block-size: auto;
  min-block-size: var(--min-block-size);
}
#wowjob-ui .min-height {
  --min-height: auto;
  min-height: var(--min-height);
}
#wowjob-ui .min-inline-size {
  --min-inline-size: auto;
  min-inline-size: var(--min-inline-size);
}
#wowjob-ui .min-width {
  --min-width: auto;
  min-width: var(--min-width);
}
#wowjob-ui .mix-blend-mode {
  --mix-blend-mode: normal;
  mix-blend-mode: var(--mix-blend-mode);
}
#wowjob-ui .object-fit {
  --object-fit: fill;
  object-fit: var(--object-fit);
}
#wowjob-ui .object-position {
  --object-position: 50% 50%;
  object-position: var(--object-position);
}
#wowjob-ui .offset-anchor {
  --offset-anchor: auto;
  offset-anchor: var(--offset-anchor);
}
#wowjob-ui .offset {
  --offset: undefined;
  offset: var(--offset);
}
#wowjob-ui .opacity {
  --opacity: 1;
  opacity: var(--opacity);
}
#wowjob-ui .order {
  --order: 0;
  order: var(--order);
}
#wowjob-ui .outline {
  --outline: invert;
  outline: var(--outline);
}
#wowjob-ui .outline-offset {
  --outline-offset: 0;
  outline-offset: var(--outline-offset);
}
#wowjob-ui .overflow {
  --overflow: visible;
  overflow: var(--overflow);
}
#wowjob-ui .overscroll-behavior {
  --overscroll-behavior: undefined;
  overscroll-behavior: var(--overscroll-behavior);
}
#wowjob-ui .overscroll-behavior-block {
  --overscroll-behavior-block: auto;
  overscroll-behavior-block: var(--overscroll-behavior-block);
}
#wowjob-ui .overscroll-behavior-inline {
  --overscroll-behavior-inline: auto;
  overscroll-behavior-inline: var(--overscroll-behavior-inline);
}
#wowjob-ui .perspective {
  --perspective: none;
  perspective: var(--perspective);
}
#wowjob-ui .perspective-origin {
  --perspective-origin: 50% 50%;
  perspective-origin: var(--perspective-origin);
}
#wowjob-ui .place-content {
  --place-content: normal;
  place-content: var(--place-content);
}
#wowjob-ui .place-items {
  --place-items: normal;
  place-items: var(--place-items);
}
#wowjob-ui .place-self {
  --place-self: auto;
  place-self: var(--place-self);
}
#wowjob-ui .pointer-events {
  --pointer-events: auto;
  pointer-events: var(--pointer-events);
}
#wowjob-ui .position {
  --position: static;
  position: var(--position);
}
#wowjob-ui .quotes {
  --quotes: auto;
  quotes: var(--quotes);
}
#wowjob-ui .resize {
  --resize: none;
  resize: var(--resize);
}
#wowjob-ui .rotate {
  --rotate: none;
  rotate: var(--rotate);
}
#wowjob-ui .ruby-align {
  --ruby-align: space-around;
  ruby-align: var(--ruby-align);
}
#wowjob-ui .ruby-position {
  --ruby-position: over;
  ruby-position: var(--ruby-position);
}
#wowjob-ui .scale {
  --scale: 1;
  scale: var(--scale);
}
#wowjob-ui .scroll-behavior {
  --scroll-behavior: auto;
  scroll-behavior: var(--scroll-behavior);
}
#wowjob-ui .scroll-margin {
  --scroll-margin: 0;
  scroll-margin: var(--scroll-margin);
}
#wowjob-ui .scroll-padding {
  --scroll-padding: 0;
  scroll-padding: var(--scroll-padding);
}
#wowjob-ui .scroll-snap-align {
  --scroll-snap-align: none;
  scroll-snap-align: var(--scroll-snap-align);
}
#wowjob-ui .scroll-snap-stop {
  --scroll-snap-stop: normal;
  scroll-snap-stop: var(--scroll-snap-stop);
}
#wowjob-ui .scroll-snap-type {
  --scroll-snap-type: none;
  scroll-snap-type: var(--scroll-snap-type);
}
#wowjob-ui .scroll-timeline {
  --scroll-timeline: undefined;
  scroll-timeline: var(--scroll-timeline);
}
#wowjob-ui .scroll-timeline-axis {
  --scroll-timeline-axis: undefined;
  scroll-timeline-axis: var(--scroll-timeline-axis);
}
#wowjob-ui .scroll-timeline-name {
  --scroll-timeline-name: undefined;
  scroll-timeline-name: var(--scroll-timeline-name);
}
#wowjob-ui .scrollbar-color {
  --scrollbar-color: undefined;
  scrollbar-color: var(--scrollbar-color);
}
#wowjob-ui .scrollbar-gutter {
  --scrollbar-gutter: auto;
  scrollbar-gutter: var(--scrollbar-gutter);
}
#wowjob-ui .scrollbar-width {
  --scrollbar-width: auto;
  scrollbar-width: var(--scrollbar-width);
}
#wowjob-ui .shape-image-threshold {
  --shape-image-threshold: 0;
  shape-image-threshold: var(--shape-image-threshold);
}
#wowjob-ui .shape-margin {
  --shape-margin: 0;
  shape-margin: var(--shape-margin);
}
#wowjob-ui .shape-outside {
  --shape-outside: none;
  shape-outside: var(--shape-outside);
}
#wowjob-ui .shape-rendering {
  --shape-rendering: auto;
  shape-rendering: var(--shape-rendering);
}
#wowjob-ui .stop-color {
  --stop-color: black;
  stop-color: var(--stop-color);
}
#wowjob-ui .stop-opacity {
  --stop-opacity: 1;
  stop-opacity: var(--stop-opacity);
}
#wowjob-ui .stroke {
  --stroke: none;
  stroke: var(--stroke);
}
#wowjob-ui .stroke-dasharray {
  --stroke-dasharray: none;
  stroke-dasharray: var(--stroke-dasharray);
}
#wowjob-ui .stroke-dashoffset {
  --stroke-dashoffset: 0;
  stroke-dashoffset: var(--stroke-dashoffset);
}
#wowjob-ui .stroke-linecap {
  --stroke-linecap: butt;
  stroke-linecap: var(--stroke-linecap);
}
#wowjob-ui .stroke-linejoin {
  --stroke-linejoin: miter;
  stroke-linejoin: var(--stroke-linejoin);
}
#wowjob-ui .stroke-miterlimit {
  --stroke-miterlimit: 4;
  stroke-miterlimit: var(--stroke-miterlimit);
}
#wowjob-ui .stroke-opacity {
  --stroke-opacity: 1;
  stroke-opacity: var(--stroke-opacity);
}
#wowjob-ui .stroke-width {
  --stroke-width: 1;
  stroke-width: var(--stroke-width);
}
#wowjob-ui .tab-size {
  --tab-size: 8;
  tab-size: var(--tab-size);
}
#wowjob-ui .table-layout {
  --table-layout: auto;
  table-layout: var(--table-layout);
}
#wowjob-ui .text-align {
  --text-align: start;
  text-align: var(--text-align);
}
#wowjob-ui .text-align-last {
  --text-align-last: auto;
  text-align-last: var(--text-align-last);
}
#wowjob-ui .text-anchor {
  --text-anchor: start;
  text-anchor: var(--text-anchor);
}
#wowjob-ui .text-combine-upright {
  --text-combine-upright: none;
  text-combine-upright: var(--text-combine-upright);
}
#wowjob-ui .text-decoration {
  --text-decoration: undefined;
  text-decoration: var(--text-decoration);
}
#wowjob-ui .text-emphasis {
  --text-emphasis: undefined;
  text-emphasis: var(--text-emphasis);
}
#wowjob-ui .text-indent {
  --text-indent: 0;
  text-indent: var(--text-indent);
}
#wowjob-ui .text-justify {
  --text-justify: undefined;
  text-justify: var(--text-justify);
}
#wowjob-ui .text-orientation {
  --text-orientation: mixed;
  text-orientation: var(--text-orientation);
}
#wowjob-ui .text-overflow {
  --text-overflow: clip;
  text-overflow: var(--text-overflow);
}
#wowjob-ui .text-rendering {
  --text-rendering: auto;
  text-rendering: var(--text-rendering);
}
#wowjob-ui .text-shadow {
  --text-shadow: none;
  text-shadow: var(--text-shadow);
}
#wowjob-ui .text-transform {
  --text-transform: none;
  text-transform: var(--text-transform);
}
#wowjob-ui .text-underline-offset {
  --text-underline-offset: auto;
  text-underline-offset: var(--text-underline-offset);
}
#wowjob-ui .text-underline-position {
  --text-underline-position: auto;
  text-underline-position: var(--text-underline-position);
}
#wowjob-ui .text-wrap {
  --text-wrap: undefined;
  text-wrap: var(--text-wrap);
}
#wowjob-ui .text-wrap-style {
  --text-wrap-style: normal;
  text-wrap-style: var(--text-wrap-style);
}
#wowjob-ui .touch-action {
  --touch-action: auto;
  touch-action: var(--touch-action);
}
#wowjob-ui .transform {
  --transform: none;
  transform: var(--transform);
}
#wowjob-ui .transform-box {
  --transform-box: border-box;
  transform-box: var(--transform-box);
}
#wowjob-ui .transform-origin {
  --transform-origin: 50% 50% 0;
  transform-origin: var(--transform-origin);
}
#wowjob-ui .transform-style {
  --transform-style: flat;
  transform-style: var(--transform-style);
}
#wowjob-ui .transition {
  --transition: all 0s ease 0s;
  transition: var(--transition);
}
#wowjob-ui .transition-behavior {
  --transition-behavior: auto;
  transition-behavior: var(--transition-behavior);
}
#wowjob-ui .translate {
  --translate: none;
  translate: var(--translate);
}
#wowjob-ui .user-select {
  --user-select: auto;
  user-select: var(--user-select);
}
#wowjob-ui .vector-effect {
  --vector-effect: none;
  vector-effect: var(--vector-effect);
}
#wowjob-ui .vertical-align {
  --vertical-align: baseline;
  vertical-align: var(--vertical-align);
}
#wowjob-ui .view-transition-name {
  --view-transition-name: undefined;
  view-transition-name: var(--view-transition-name);
}
#wowjob-ui .visibility {
  --visibility: visible;
  visibility: var(--visibility);
}
#wowjob-ui .white-space {
  --white-space: undefined;
  white-space: var(--white-space);
}
#wowjob-ui .width {
  --width: auto;
  width: var(--width);
}
#wowjob-ui .will-change {
  --will-change: auto;
  will-change: var(--will-change);
}
#wowjob-ui .word-break {
  --word-break: normal;
  word-break: var(--word-break);
}
#wowjob-ui .word-spacing {
  --word-spacing: 0;
  word-spacing: var(--word-spacing);
}
#wowjob-ui .writing-mode {
  --writing-mode: horizontal-tb;
  writing-mode: var(--writing-mode);
}
#wowjob-ui .z-index {
  --z-index: auto;
  z-index: var(--z-index);
}
#wowjob-ui .zoom {
  --zoom: auto;
  zoom: var(--zoom);
}


@media screen and (min-width: 48rem) {
#wowjob-ui .tablet.accent-color {
  --t-accent-color: var(--accent-color);
  accent-color: var(--t-accent-color);
}
#wowjob-ui .tablet.align-content {
  --t-align-content: var(--align-content);
  align-content: var(--t-align-content);
}
#wowjob-ui .tablet.align-items {
  --t-align-items: var(--align-items);
  align-items: var(--t-align-items);
}
#wowjob-ui .tablet.align-self {
  --t-align-self: var(--align-self);
  align-self: var(--t-align-self);
}
#wowjob-ui .tablet.animation {
  --t-animation: var(--animation);
  animation: var(--t-animation);
}
#wowjob-ui .tablet.appearance {
  --t-appearance: var(--appearance);
  appearance: var(--t-appearance);
}
#wowjob-ui .tablet.aspect-ratio {
  --t-aspect-ratio: var(--aspect-ratio);
  aspect-ratio: var(--t-aspect-ratio);
}
#wowjob-ui .tablet.backdrop-filter {
  --t-backdrop-filter: var(--backdrop-filter);
  backdrop-filter: var(--t-backdrop-filter);
}
#wowjob-ui .tablet.backface-visibility {
  --t-backface-visibility: var(--backface-visibility);
  backface-visibility: var(--t-backface-visibility);
}
#wowjob-ui .tablet.background {
  --t-background: var(--background);
  background: var(--t-background);
}
#wowjob-ui .tablet.background-blend-mode {
  --t-background-blend-mode: var(--background-blend-mode);
  background-blend-mode: var(--t-background-blend-mode);
}
#wowjob-ui .tablet.background-clip {
  --t-background-clip: var(--background-clip);
  background-clip: var(--t-background-clip);
}
#wowjob-ui .tablet.background-origin {
  --t-background-origin: var(--background-origin);
  background-origin: var(--t-background-origin);
}
#wowjob-ui .tablet.block-size {
  --t-block-size: var(--block-size);
  block-size: var(--t-block-size);
}
#wowjob-ui .tablet.margin {
  --t-margin: var(--margin);
  margin: var(--t-margin);
}
#wowjob-ui .tablet.padding {
  --t-padding: var(--padding);
  padding: var(--t-padding);
}
#wowjob-ui .tablet.border {
  --t-border: var(--border);
  border: var(--t-border);
}
#wowjob-ui .tablet.border-block {
  --t-border-block: var(--border-block);
  border-block: var(--t-border-block);
}
#wowjob-ui .tablet.border-block-start {
  --t-border-block-start: var(--border-block-start);
  border-block-start: var(--t-border-block-start);
}
#wowjob-ui .tablet.border-bottom {
  --t-border-bottom: var(--border-bottom);
  border-bottom: var(--t-border-bottom);
}
#wowjob-ui .tablet.border-bottom-left-radius {
  --t-border-bottom-left-radius: var(--border-bottom-left-radius);
  border-bottom-left-radius: var(--t-border-bottom-left-radius);
}
#wowjob-ui .tablet.border-bottom-right-radius {
  --t-border-bottom-right-radius: var(--border-bottom-right-radius);
  border-bottom-right-radius: var(--t-border-bottom-right-radius);
}
#wowjob-ui .tablet.border-block-end {
  --t-border-block-end: var(--border-block-end);
  border-block-end: var(--t-border-block-end);
}
#wowjob-ui .tablet.border-collapse {
  --t-border-collapse: var(--border-collapse);
  border-collapse: var(--t-border-collapse);
}
#wowjob-ui .tablet.border-end-end-radius {
  --t-border-end-end-radius: var(--border-end-end-radius);
  border-end-end-radius: var(--t-border-end-end-radius);
}
#wowjob-ui .tablet.border-end-start-radius {
  --t-border-end-start-radius: var(--border-end-start-radius);
  border-end-start-radius: var(--t-border-end-start-radius);
}
#wowjob-ui .tablet.border-image {
  --t-border-image: var(--border-image);
  border-image: var(--t-border-image);
}
#wowjob-ui .tablet.border-inline {
  --t-border-inline: var(--border-inline);
  border-inline: var(--t-border-inline);
}
#wowjob-ui .tablet.border-left {
  --t-border-left: var(--border-left);
  border-left: var(--t-border-left);
}
#wowjob-ui .tablet.border-inline-start {
  --t-border-inline-start: var(--border-inline-start);
  border-inline-start: var(--t-border-inline-start);
}
#wowjob-ui .tablet.border-inline-end {
  --t-border-inline-end: var(--border-inline-end);
  border-inline-end: var(--t-border-inline-end);
}
#wowjob-ui .tablet.border-radius {
  --t-border-radius: var(--border-radius);
  border-radius: var(--t-border-radius);
}
#wowjob-ui .tablet.border-right {
  --t-border-right: var(--border-right);
  border-right: var(--t-border-right);
}
#wowjob-ui .tablet.border-width {
  --t-border-width: var(--border-width);
  border-width: var(--t-border-width);
}
#wowjob-ui .tablet.border-style {
  --t-border-style: var(--border-style);
  border-style: var(--t-border-style);
}
#wowjob-ui .tablet.border-start-end-radius {
  --t-border-start-end-radius: var(--border-start-end-radius);
  border-start-end-radius: var(--t-border-start-end-radius);
}
#wowjob-ui .tablet.border-start-start-radius {
  --t-border-start-start-radius: var(--border-start-start-radius);
  border-start-start-radius: var(--t-border-start-start-radius);
}
#wowjob-ui .tablet.border-top {
  --t-border-top: var(--border-top);
  border-top: var(--t-border-top);
}
#wowjob-ui .tablet.border-top-left-radius {
  --t-border-top-left-radius: var(--border-top-left-radius);
  border-top-left-radius: var(--t-border-top-left-radius);
}
#wowjob-ui .tablet.border-top-right-radius {
  --t-border-top-right-radius: var(--border-top-right-radius);
  border-top-right-radius: var(--t-border-top-right-radius);
}
#wowjob-ui .tablet.bottom {
  --t-bottom: var(--bottom);
  bottom: var(--t-bottom);
}
#wowjob-ui .tablet.box-shadow {
  --t-box-shadow: var(--box-shadow);
  box-shadow: var(--t-box-shadow);
}
#wowjob-ui .tablet.box-sizing {
  --t-box-sizing: var(--box-sizing);
  box-sizing: var(--t-box-sizing);
}
#wowjob-ui .tablet.break-after {
  --t-break-after: var(--break-after);
  break-after: var(--t-break-after);
}
#wowjob-ui .tablet.break-before {
  --t-break-before: var(--break-before);
  break-before: var(--t-break-before);
}
#wowjob-ui .tablet.break-inside {
  --t-break-inside: var(--break-inside);
  break-inside: var(--t-break-inside);
}
#wowjob-ui .tablet.caption-side {
  --t-caption-side: var(--caption-side);
  caption-side: var(--t-caption-side);
}
#wowjob-ui .tablet.caret-color {
  --t-caret-color: var(--caret-color);
  caret-color: var(--t-caret-color);
}
#wowjob-ui .tablet.clear {
  --t-clear: var(--clear);
  clear: var(--t-clear);
}
#wowjob-ui .tablet.clip {
  --t-clip: var(--clip);
  clip: var(--t-clip);
}
#wowjob-ui .tablet.clip-path {
  --t-clip-path: var(--clip-path);
  clip-path: var(--t-clip-path);
}
#wowjob-ui .tablet.color {
  --t-color: var(--color);
  color: var(--t-color);
}
#wowjob-ui .tablet.color-interpolation {
  --t-color-interpolation: var(--color-interpolation);
  color-interpolation: var(--t-color-interpolation);
}
#wowjob-ui .tablet.color-interpolation-filters {
  --t-color-interpolation-filters: var(--color-interpolation-filters);
  color-interpolation-filters: var(--t-color-interpolation-filters);
}
#wowjob-ui .tablet.color-scheme {
  --t-color-scheme: var(--color-scheme);
  color-scheme: var(--t-color-scheme);
}
#wowjob-ui .tablet.column-count {
  --t-column-count: var(--column-count);
  column-count: var(--t-column-count);
}
#wowjob-ui .tablet.column-fill {
  --t-column-fill: var(--column-fill);
  column-fill: var(--t-column-fill);
}
#wowjob-ui .tablet.column-gap {
  --t-column-gap: var(--column-gap);
  column-gap: var(--t-column-gap);
}
#wowjob-ui .tablet.column-rule {
  --t-column-rule: var(--column-rule);
  column-rule: var(--t-column-rule);
}
#wowjob-ui .tablet.column-span {
  --t-column-span: var(--column-span);
  column-span: var(--t-column-span);
}
#wowjob-ui .tablet.column-width {
  --t-column-width: var(--column-width);
  column-width: var(--t-column-width);
}
#wowjob-ui .tablet.contain {
  --t-contain: var(--contain);
  contain: var(--t-contain);
}
#wowjob-ui .tablet.contain-intrinsic-block-size {
  --t-contain-intrinsic-block-size: var(--contain-intrinsic-block-size);
  contain-intrinsic-block-size: var(--t-contain-intrinsic-block-size);
}
#wowjob-ui .tablet.contain-intrinsic-height {
  --t-contain-intrinsic-height: var(--contain-intrinsic-height);
  contain-intrinsic-height: var(--t-contain-intrinsic-height);
}
#wowjob-ui .tablet.contain-intrinsic-inline-size {
  --t-contain-intrinsic-inline-size: var(--contain-intrinsic-inline-size);
  contain-intrinsic-inline-size: var(--t-contain-intrinsic-inline-size);
}
#wowjob-ui .tablet.contain-intrinsic-size {
  --t-contain-intrinsic-size: var(--contain-intrinsic-size);
  contain-intrinsic-size: var(--t-contain-intrinsic-size);
}
#wowjob-ui .tablet.contain-intrinsic-width {
  --t-contain-intrinsic-width: var(--contain-intrinsic-width);
  contain-intrinsic-width: var(--t-contain-intrinsic-width);
}
#wowjob-ui .tablet.container {
  --t-container: var(--container);
  container: var(--t-container);
}
#wowjob-ui .tablet.content {
  --t-content: var(--content);
  content: var(--t-content);
}
#wowjob-ui .tablet.content-visibility {
  --t-content-visibility: var(--content-visibility);
  content-visibility: var(--t-content-visibility);
}
#wowjob-ui .tablet.counter-increment {
  --t-counter-increment: var(--counter-increment);
  counter-increment: var(--t-counter-increment);
}
#wowjob-ui .tablet.counter-reset {
  --t-counter-reset: var(--counter-reset);
  counter-reset: var(--t-counter-reset);
}
#wowjob-ui .tablet.counter-set {
  --t-counter-set: var(--counter-set);
  counter-set: var(--t-counter-set);
}
#wowjob-ui .tablet.cursor {
  --t-cursor: var(--cursor);
  cursor: var(--t-cursor);
}
#wowjob-ui .tablet.cx {
  --t-cx: var(--cx);
  cx: var(--t-cx);
}
#wowjob-ui .tablet.cy {
  --t-cy: var(--cy);
  cy: var(--t-cy);
}
#wowjob-ui .tablet.d {
  --t-d: var(--d);
  d: var(--t-d);
}
#wowjob-ui .tablet.direction {
  --t-direction: var(--direction);
  direction: var(--t-direction);
}
#wowjob-ui .tablet.dominant-baseline {
  --t-dominant-baseline: var(--dominant-baseline);
  dominant-baseline: var(--t-dominant-baseline);
}
#wowjob-ui .tablet.empty-cells {
  --t-empty-cells: var(--empty-cells);
  empty-cells: var(--t-empty-cells);
}
#wowjob-ui .tablet.display {
  --t-display: var(--display);
  display: var(--t-display);
}
#wowjob-ui .tablet.flex {
  --t-flex: var(--flex);
  flex: var(--t-flex);
}
#wowjob-ui .tablet.flex-basis {
  --t-flex-basis: var(--flex-basis);
  flex-basis: var(--t-flex-basis);
}
#wowjob-ui .tablet.flex-direction {
  --t-flex-direction: var(--flex-direction);
  flex-direction: var(--t-flex-direction);
}
#wowjob-ui .tablet.flex-grow {
  --t-flex-grow: var(--flex-grow);
  flex-grow: var(--t-flex-grow);
}
#wowjob-ui .tablet.flex-shrink {
  --t-flex-shrink: var(--flex-shrink);
  flex-shrink: var(--t-flex-shrink);
}
#wowjob-ui .tablet.font-variant {
  --t-font-variant: var(--font-variant);
  font-variant: var(--t-font-variant);
}
#wowjob-ui .tablet.font-weight {
  --t-font-weight: var(--font-weight);
  font-weight: var(--t-font-weight);
}
#wowjob-ui .tablet.flex-wrap {
  --t-flex-wrap: var(--flex-wrap);
  flex-wrap: var(--t-flex-wrap);
}
#wowjob-ui .tablet.field-sizing {
  --t-field-sizing: var(--field-sizing);
  field-sizing: var(--t-field-sizing);
}
#wowjob-ui .tablet.fill {
  --t-fill: var(--fill);
  fill: var(--t-fill);
}
#wowjob-ui .tablet.fill-opacity {
  --t-fill-opacity: var(--fill-opacity);
  fill-opacity: var(--t-fill-opacity);
}
#wowjob-ui .tablet.fill-rule {
  --t-fill-rule: var(--fill-rule);
  fill-rule: var(--t-fill-rule);
}
#wowjob-ui .tablet.filter {
  --t-filter: var(--filter);
  filter: var(--t-filter);
}
#wowjob-ui .tablet.float {
  --t-float: var(--float);
  float: var(--t-float);
}
#wowjob-ui .tablet.flood-color {
  --t-flood-color: var(--flood-color);
  flood-color: var(--t-flood-color);
}
#wowjob-ui .tablet.flood-opacity {
  --t-flood-opacity: var(--flood-opacity);
  flood-opacity: var(--t-flood-opacity);
}
#wowjob-ui .tablet.font {
  --t-font: var(--font);
  font: var(--t-font);
}
#wowjob-ui .tablet.font-family {
  --t-font-family: var(--font-family);
  font-family: var(--t-font-family);
}
#wowjob-ui .tablet.font-size {
  --t-font-size: var(--font-size);
  font-size: var(--t-font-size);
}
#wowjob-ui .tablet.font-stretch {
  --t-font-stretch: var(--font-stretch);
  font-stretch: var(--t-font-stretch);
}
#wowjob-ui .tablet.font-style {
  --t-font-style: var(--font-style);
  font-style: var(--t-font-style);
}
#wowjob-ui .tablet.font-feature-settings {
  --t-font-feature-settings: var(--font-feature-settings);
  font-feature-settings: var(--t-font-feature-settings);
}
#wowjob-ui .tablet.font-kerning {
  --t-font-kerning: var(--font-kerning);
  font-kerning: var(--t-font-kerning);
}
#wowjob-ui .tablet.font-language-override {
  --t-font-language-override: var(--font-language-override);
  font-language-override: var(--t-font-language-override);
}
#wowjob-ui .tablet.font-optical-sizing {
  --t-font-optical-sizing: var(--font-optical-sizing);
  font-optical-sizing: var(--t-font-optical-sizing);
}
#wowjob-ui .tablet.font-palette {
  --t-font-palette: var(--font-palette);
  font-palette: var(--t-font-palette);
}
#wowjob-ui .tablet.font-size-adjust {
  --t-font-size-adjust: var(--font-size-adjust);
  font-size-adjust: var(--t-font-size-adjust);
}
#wowjob-ui .tablet.font-synthesis-small-caps {
  --t-font-synthesis-small-caps: var(--font-synthesis-small-caps);
  font-synthesis-small-caps: var(--t-font-synthesis-small-caps);
}
#wowjob-ui .tablet.font-synthesis-style {
  --t-font-synthesis-style: var(--font-synthesis-style);
  font-synthesis-style: var(--t-font-synthesis-style);
}
#wowjob-ui .tablet.font-synthesis-weight {
  --t-font-synthesis-weight: var(--font-synthesis-weight);
  font-synthesis-weight: var(--t-font-synthesis-weight);
}
#wowjob-ui .tablet.font-variant-alternates {
  --t-font-variant-alternates: var(--font-variant-alternates);
  font-variant-alternates: var(--t-font-variant-alternates);
}
#wowjob-ui .tablet.font-variant-caps {
  --t-font-variant-caps: var(--font-variant-caps);
  font-variant-caps: var(--t-font-variant-caps);
}
#wowjob-ui .tablet.font-variant-east-asian {
  --t-font-variant-east-asian: var(--font-variant-east-asian);
  font-variant-east-asian: var(--t-font-variant-east-asian);
}
#wowjob-ui .tablet.font-variant-ligatures {
  --t-font-variant-ligatures: var(--font-variant-ligatures);
  font-variant-ligatures: var(--t-font-variant-ligatures);
}
#wowjob-ui .tablet.font-variant-numeric {
  --t-font-variant-numeric: var(--font-variant-numeric);
  font-variant-numeric: var(--t-font-variant-numeric);
}
#wowjob-ui .tablet.font-variant-position {
  --t-font-variant-position: var(--font-variant-position);
  font-variant-position: var(--t-font-variant-position);
}
#wowjob-ui .tablet.font-variation-settings {
  --t-font-variation-settings: var(--font-variation-settings);
  font-variation-settings: var(--t-font-variation-settings);
}
#wowjob-ui .tablet.forced-color-adjust {
  --t-forced-color-adjust: var(--forced-color-adjust);
  forced-color-adjust: var(--t-forced-color-adjust);
}
#wowjob-ui .tablet.gap {
  --t-gap: var(--gap);
  gap: var(--t-gap);
}
#wowjob-ui .tablet.grid-auto-columns {
  --t-grid-auto-columns: var(--grid-auto-columns);
  grid-auto-columns: var(--t-grid-auto-columns);
}
#wowjob-ui .tablet.grid-auto-flow {
  --t-grid-auto-flow: var(--grid-auto-flow);
  grid-auto-flow: var(--t-grid-auto-flow);
}
#wowjob-ui .tablet.grid-auto-rows {
  --t-grid-auto-rows: var(--grid-auto-rows);
  grid-auto-rows: var(--t-grid-auto-rows);
}
#wowjob-ui .tablet.grid-column {
  --t-grid-column: var(--grid-column);
  grid-column: var(--t-grid-column);
}
#wowjob-ui .tablet.grid-row {
  --t-grid-row: var(--grid-row);
  grid-row: var(--t-grid-row);
}
#wowjob-ui .tablet.grid-template {
  --t-grid-template: var(--grid-template);
  grid-template: var(--t-grid-template);
}
#wowjob-ui .tablet.grid-template-columns {
  --t-grid-template-columns: var(--grid-template-columns);
  grid-template-columns: var(--t-grid-template-columns);
}
#wowjob-ui .tablet.grid-template-rows {
  --t-grid-template-rows: var(--grid-template-rows);
  grid-template-rows: var(--t-grid-template-rows);
}
#wowjob-ui .tablet.grid-template-areas {
  --t-grid-template-areas: var(--grid-template-areas);
  grid-template-areas: var(--t-grid-template-areas);
}
#wowjob-ui .tablet.height {
  --t-height: var(--height);
  height: var(--t-height);
}
#wowjob-ui .tablet.hyphenate-character {
  --t-hyphenate-character: var(--hyphenate-character);
  hyphenate-character: var(--t-hyphenate-character);
}
#wowjob-ui .tablet.hyphens {
  --t-hyphens: var(--hyphens);
  hyphens: var(--t-hyphens);
}
#wowjob-ui .tablet.image-orientation {
  --t-image-orientation: var(--image-orientation);
  image-orientation: var(--t-image-orientation);
}
#wowjob-ui .tablet.image-rendering {
  --t-image-rendering: var(--image-rendering);
  image-rendering: var(--t-image-rendering);
}
#wowjob-ui .tablet.inline-size {
  --t-inline-size: var(--inline-size);
  inline-size: var(--t-inline-size);
}
#wowjob-ui .tablet.inset {
  --t-inset: var(--inset);
  inset: var(--t-inset);
}
#wowjob-ui .tablet.inset-block {
  --t-inset-block: var(--inset-block);
  inset-block: var(--t-inset-block);
}
#wowjob-ui .tablet.inset-inline {
  --t-inset-inline: var(--inset-inline);
  inset-inline: var(--t-inset-inline);
}
#wowjob-ui .tablet.isolation {
  --t-isolation: var(--isolation);
  isolation: var(--t-isolation);
}
#wowjob-ui .tablet.justify-content {
  --t-justify-content: var(--justify-content);
  justify-content: var(--t-justify-content);
}
#wowjob-ui .tablet.justify-items {
  --t-justify-items: var(--justify-items);
  justify-items: var(--t-justify-items);
}
#wowjob-ui .tablet.justify-self {
  --t-justify-self: var(--justify-self);
  justify-self: var(--t-justify-self);
}
#wowjob-ui .tablet.left {
  --t-left: var(--left);
  left: var(--t-left);
}
#wowjob-ui .tablet.right {
  --t-right: var(--right);
  right: var(--t-right);
}
#wowjob-ui .tablet.top {
  --t-top: var(--top);
  top: var(--t-top);
}
#wowjob-ui .tablet.letter-spacing {
  --t-letter-spacing: var(--letter-spacing);
  letter-spacing: var(--t-letter-spacing);
}
#wowjob-ui .tablet.lighting-color {
  --t-lighting-color: var(--lighting-color);
  lighting-color: var(--t-lighting-color);
}
#wowjob-ui .tablet.line-break {
  --t-line-break: var(--line-break);
  line-break: var(--t-line-break);
}
#wowjob-ui .tablet.line-height {
  --t-line-height: var(--line-height);
  line-height: var(--t-line-height);
}
#wowjob-ui .tablet.list-style {
  --t-list-style: var(--list-style);
  list-style: var(--t-list-style);
}
#wowjob-ui .tablet.margin-block {
  --t-margin-block: var(--margin-block);
  margin-block: var(--t-margin-block);
}
#wowjob-ui .tablet.margin-inline {
  --t-margin-inline: var(--margin-inline);
  margin-inline: var(--t-margin-inline);
}
#wowjob-ui .tablet.mask {
  --t-mask: var(--mask);
  mask: var(--t-mask);
}
#wowjob-ui .tablet.mask-clip {
  --t-mask-clip: var(--mask-clip);
  mask-clip: var(--t-mask-clip);
}
#wowjob-ui .tablet.math-style {
  --t-math-style: var(--math-style);
  math-style: var(--t-math-style);
}
#wowjob-ui .tablet.max-block-size {
  --t-max-block-size: var(--max-block-size);
  max-block-size: var(--t-max-block-size);
}
#wowjob-ui .tablet.max-height {
  --t-max-height: var(--max-height);
  max-height: var(--t-max-height);
}
#wowjob-ui .tablet.max-inline-size {
  --t-max-inline-size: var(--max-inline-size);
  max-inline-size: var(--t-max-inline-size);
}
#wowjob-ui .tablet.max-width {
  --t-max-width: var(--max-width);
  max-width: var(--t-max-width);
}
#wowjob-ui .tablet.min-block-size {
  --t-min-block-size: var(--min-block-size);
  min-block-size: var(--t-min-block-size);
}
#wowjob-ui .tablet.min-height {
  --t-min-height: var(--min-height);
  min-height: var(--t-min-height);
}
#wowjob-ui .tablet.min-inline-size {
  --t-min-inline-size: var(--min-inline-size);
  min-inline-size: var(--t-min-inline-size);
}
#wowjob-ui .tablet.min-width {
  --t-min-width: var(--min-width);
  min-width: var(--t-min-width);
}
#wowjob-ui .tablet.mix-blend-mode {
  --t-mix-blend-mode: var(--mix-blend-mode);
  mix-blend-mode: var(--t-mix-blend-mode);
}
#wowjob-ui .tablet.object-fit {
  --t-object-fit: var(--object-fit);
  object-fit: var(--t-object-fit);
}
#wowjob-ui .tablet.object-position {
  --t-object-position: var(--object-position);
  object-position: var(--t-object-position);
}
#wowjob-ui .tablet.offset-anchor {
  --t-offset-anchor: var(--offset-anchor);
  offset-anchor: var(--t-offset-anchor);
}
#wowjob-ui .tablet.offset {
  --t-offset: var(--offset);
  offset: var(--t-offset);
}
#wowjob-ui .tablet.opacity {
  --t-opacity: var(--opacity);
  opacity: var(--t-opacity);
}
#wowjob-ui .tablet.order {
  --t-order: var(--order);
  order: var(--t-order);
}
#wowjob-ui .tablet.outline {
  --t-outline: var(--outline);
  outline: var(--t-outline);
}
#wowjob-ui .tablet.outline-offset {
  --t-outline-offset: var(--outline-offset);
  outline-offset: var(--t-outline-offset);
}
#wowjob-ui .tablet.overflow {
  --t-overflow: var(--overflow);
  overflow: var(--t-overflow);
}
#wowjob-ui .tablet.overscroll-behavior {
  --t-overscroll-behavior: var(--overscroll-behavior);
  overscroll-behavior: var(--t-overscroll-behavior);
}
#wowjob-ui .tablet.overscroll-behavior-block {
  --t-overscroll-behavior-block: var(--overscroll-behavior-block);
  overscroll-behavior-block: var(--t-overscroll-behavior-block);
}
#wowjob-ui .tablet.overscroll-behavior-inline {
  --t-overscroll-behavior-inline: var(--overscroll-behavior-inline);
  overscroll-behavior-inline: var(--t-overscroll-behavior-inline);
}
#wowjob-ui .tablet.perspective {
  --t-perspective: var(--perspective);
  perspective: var(--t-perspective);
}
#wowjob-ui .tablet.perspective-origin {
  --t-perspective-origin: var(--perspective-origin);
  perspective-origin: var(--t-perspective-origin);
}
#wowjob-ui .tablet.place-content {
  --t-place-content: var(--place-content);
  place-content: var(--t-place-content);
}
#wowjob-ui .tablet.place-items {
  --t-place-items: var(--place-items);
  place-items: var(--t-place-items);
}
#wowjob-ui .tablet.place-self {
  --t-place-self: var(--place-self);
  place-self: var(--t-place-self);
}
#wowjob-ui .tablet.pointer-events {
  --t-pointer-events: var(--pointer-events);
  pointer-events: var(--t-pointer-events);
}
#wowjob-ui .tablet.position {
  --t-position: var(--position);
  position: var(--t-position);
}
#wowjob-ui .tablet.quotes {
  --t-quotes: var(--quotes);
  quotes: var(--t-quotes);
}
#wowjob-ui .tablet.resize {
  --t-resize: var(--resize);
  resize: var(--t-resize);
}
#wowjob-ui .tablet.rotate {
  --t-rotate: var(--rotate);
  rotate: var(--t-rotate);
}
#wowjob-ui .tablet.ruby-align {
  --t-ruby-align: var(--ruby-align);
  ruby-align: var(--t-ruby-align);
}
#wowjob-ui .tablet.ruby-position {
  --t-ruby-position: var(--ruby-position);
  ruby-position: var(--t-ruby-position);
}
#wowjob-ui .tablet.scale {
  --t-scale: var(--scale);
  scale: var(--t-scale);
}
#wowjob-ui .tablet.scroll-behavior {
  --t-scroll-behavior: var(--scroll-behavior);
  scroll-behavior: var(--t-scroll-behavior);
}
#wowjob-ui .tablet.scroll-margin {
  --t-scroll-margin: var(--scroll-margin);
  scroll-margin: var(--t-scroll-margin);
}
#wowjob-ui .tablet.scroll-padding {
  --t-scroll-padding: var(--scroll-padding);
  scroll-padding: var(--t-scroll-padding);
}
#wowjob-ui .tablet.scroll-snap-align {
  --t-scroll-snap-align: var(--scroll-snap-align);
  scroll-snap-align: var(--t-scroll-snap-align);
}
#wowjob-ui .tablet.scroll-snap-stop {
  --t-scroll-snap-stop: var(--scroll-snap-stop);
  scroll-snap-stop: var(--t-scroll-snap-stop);
}
#wowjob-ui .tablet.scroll-snap-type {
  --t-scroll-snap-type: var(--scroll-snap-type);
  scroll-snap-type: var(--t-scroll-snap-type);
}
#wowjob-ui .tablet.scroll-timeline {
  --t-scroll-timeline: var(--scroll-timeline);
  scroll-timeline: var(--t-scroll-timeline);
}
#wowjob-ui .tablet.scroll-timeline-axis {
  --t-scroll-timeline-axis: var(--scroll-timeline-axis);
  scroll-timeline-axis: var(--t-scroll-timeline-axis);
}
#wowjob-ui .tablet.scroll-timeline-name {
  --t-scroll-timeline-name: var(--scroll-timeline-name);
  scroll-timeline-name: var(--t-scroll-timeline-name);
}
#wowjob-ui .tablet.scrollbar-color {
  --t-scrollbar-color: var(--scrollbar-color);
  scrollbar-color: var(--t-scrollbar-color);
}
#wowjob-ui .tablet.scrollbar-gutter {
  --t-scrollbar-gutter: var(--scrollbar-gutter);
  scrollbar-gutter: var(--t-scrollbar-gutter);
}
#wowjob-ui .tablet.scrollbar-width {
  --t-scrollbar-width: var(--scrollbar-width);
  scrollbar-width: var(--t-scrollbar-width);
}
#wowjob-ui .tablet.shape-image-threshold {
  --t-shape-image-threshold: var(--shape-image-threshold);
  shape-image-threshold: var(--t-shape-image-threshold);
}
#wowjob-ui .tablet.shape-margin {
  --t-shape-margin: var(--shape-margin);
  shape-margin: var(--t-shape-margin);
}
#wowjob-ui .tablet.shape-outside {
  --t-shape-outside: var(--shape-outside);
  shape-outside: var(--t-shape-outside);
}
#wowjob-ui .tablet.shape-rendering {
  --t-shape-rendering: var(--shape-rendering);
  shape-rendering: var(--t-shape-rendering);
}
#wowjob-ui .tablet.stop-color {
  --t-stop-color: var(--stop-color);
  stop-color: var(--t-stop-color);
}
#wowjob-ui .tablet.stop-opacity {
  --t-stop-opacity: var(--stop-opacity);
  stop-opacity: var(--t-stop-opacity);
}
#wowjob-ui .tablet.stroke {
  --t-stroke: var(--stroke);
  stroke: var(--t-stroke);
}
#wowjob-ui .tablet.stroke-dasharray {
  --t-stroke-dasharray: var(--stroke-dasharray);
  stroke-dasharray: var(--t-stroke-dasharray);
}
#wowjob-ui .tablet.stroke-dashoffset {
  --t-stroke-dashoffset: var(--stroke-dashoffset);
  stroke-dashoffset: var(--t-stroke-dashoffset);
}
#wowjob-ui .tablet.stroke-linecap {
  --t-stroke-linecap: var(--stroke-linecap);
  stroke-linecap: var(--t-stroke-linecap);
}
#wowjob-ui .tablet.stroke-linejoin {
  --t-stroke-linejoin: var(--stroke-linejoin);
  stroke-linejoin: var(--t-stroke-linejoin);
}
#wowjob-ui .tablet.stroke-miterlimit {
  --t-stroke-miterlimit: var(--stroke-miterlimit);
  stroke-miterlimit: var(--t-stroke-miterlimit);
}
#wowjob-ui .tablet.stroke-opacity {
  --t-stroke-opacity: var(--stroke-opacity);
  stroke-opacity: var(--t-stroke-opacity);
}
#wowjob-ui .tablet.stroke-width {
  --t-stroke-width: var(--stroke-width);
  stroke-width: var(--t-stroke-width);
}
#wowjob-ui .tablet.tab-size {
  --t-tab-size: var(--tab-size);
  tab-size: var(--t-tab-size);
}
#wowjob-ui .tablet.table-layout {
  --t-table-layout: var(--table-layout);
  table-layout: var(--t-table-layout);
}
#wowjob-ui .tablet.text-align {
  --t-text-align: var(--text-align);
  text-align: var(--t-text-align);
}
#wowjob-ui .tablet.text-align-last {
  --t-text-align-last: var(--text-align-last);
  text-align-last: var(--t-text-align-last);
}
#wowjob-ui .tablet.text-anchor {
  --t-text-anchor: var(--text-anchor);
  text-anchor: var(--t-text-anchor);
}
#wowjob-ui .tablet.text-combine-upright {
  --t-text-combine-upright: var(--text-combine-upright);
  text-combine-upright: var(--t-text-combine-upright);
}
#wowjob-ui .tablet.text-decoration {
  --t-text-decoration: var(--text-decoration);
  text-decoration: var(--t-text-decoration);
}
#wowjob-ui .tablet.text-emphasis {
  --t-text-emphasis: var(--text-emphasis);
  text-emphasis: var(--t-text-emphasis);
}
#wowjob-ui .tablet.text-indent {
  --t-text-indent: var(--text-indent);
  text-indent: var(--t-text-indent);
}
#wowjob-ui .tablet.text-justify {
  --t-text-justify: var(--text-justify);
  text-justify: var(--t-text-justify);
}
#wowjob-ui .tablet.text-orientation {
  --t-text-orientation: var(--text-orientation);
  text-orientation: var(--t-text-orientation);
}
#wowjob-ui .tablet.text-overflow {
  --t-text-overflow: var(--text-overflow);
  text-overflow: var(--t-text-overflow);
}
#wowjob-ui .tablet.text-rendering {
  --t-text-rendering: var(--text-rendering);
  text-rendering: var(--t-text-rendering);
}
#wowjob-ui .tablet.text-shadow {
  --t-text-shadow: var(--text-shadow);
  text-shadow: var(--t-text-shadow);
}
#wowjob-ui .tablet.text-transform {
  --t-text-transform: var(--text-transform);
  text-transform: var(--t-text-transform);
}
#wowjob-ui .tablet.text-underline-offset {
  --t-text-underline-offset: var(--text-underline-offset);
  text-underline-offset: var(--t-text-underline-offset);
}
#wowjob-ui .tablet.text-underline-position {
  --t-text-underline-position: var(--text-underline-position);
  text-underline-position: var(--t-text-underline-position);
}
#wowjob-ui .tablet.text-wrap {
  --t-text-wrap: var(--text-wrap);
  text-wrap: var(--t-text-wrap);
}
#wowjob-ui .tablet.text-wrap-style {
  --t-text-wrap-style: var(--text-wrap-style);
  text-wrap-style: var(--t-text-wrap-style);
}
#wowjob-ui .tablet.touch-action {
  --t-touch-action: var(--touch-action);
  touch-action: var(--t-touch-action);
}
#wowjob-ui .tablet.transform {
  --t-transform: var(--transform);
  transform: var(--t-transform);
}
#wowjob-ui .tablet.transform-box {
  --t-transform-box: var(--transform-box);
  transform-box: var(--t-transform-box);
}
#wowjob-ui .tablet.transform-origin {
  --t-transform-origin: var(--transform-origin);
  transform-origin: var(--t-transform-origin);
}
#wowjob-ui .tablet.transform-style {
  --t-transform-style: var(--transform-style);
  transform-style: var(--t-transform-style);
}
#wowjob-ui .tablet.transition {
  --t-transition: var(--transition);
  transition: var(--t-transition);
}
#wowjob-ui .tablet.transition-behavior {
  --t-transition-behavior: var(--transition-behavior);
  transition-behavior: var(--t-transition-behavior);
}
#wowjob-ui .tablet.translate {
  --t-translate: var(--translate);
  translate: var(--t-translate);
}
#wowjob-ui .tablet.user-select {
  --t-user-select: var(--user-select);
  user-select: var(--t-user-select);
}
#wowjob-ui .tablet.vector-effect {
  --t-vector-effect: var(--vector-effect);
  vector-effect: var(--t-vector-effect);
}
#wowjob-ui .tablet.vertical-align {
  --t-vertical-align: var(--vertical-align);
  vertical-align: var(--t-vertical-align);
}
#wowjob-ui .tablet.view-transition-name {
  --t-view-transition-name: var(--view-transition-name);
  view-transition-name: var(--t-view-transition-name);
}
#wowjob-ui .tablet.visibility {
  --t-visibility: var(--visibility);
  visibility: var(--t-visibility);
}
#wowjob-ui .tablet.white-space {
  --t-white-space: var(--white-space);
  white-space: var(--t-white-space);
}
#wowjob-ui .tablet.width {
  --t-width: var(--width);
  width: var(--t-width);
}
#wowjob-ui .tablet.will-change {
  --t-will-change: var(--will-change);
  will-change: var(--t-will-change);
}
#wowjob-ui .tablet.word-break {
  --t-word-break: var(--word-break);
  word-break: var(--t-word-break);
}
#wowjob-ui .tablet.word-spacing {
  --t-word-spacing: var(--word-spacing);
  word-spacing: var(--t-word-spacing);
}
#wowjob-ui .tablet.writing-mode {
  --t-writing-mode: var(--writing-mode);
  writing-mode: var(--t-writing-mode);
}
#wowjob-ui .tablet.z-index {
  --t-z-index: var(--z-index);
  z-index: var(--t-z-index);
}
#wowjob-ui .tablet.zoom {
  --t-zoom: var(--zoom);
  zoom: var(--t-zoom);
}

}

@media screen and (min-width: 80rem) {
#wowjob-ui .desktop.accent-color {
  --d-accent-color: var(--t-accent-color);
  accent-color: var(--d-accent-color);
}
#wowjob-ui .desktop.align-content {
  --d-align-content: var(--t-align-content);
  align-content: var(--d-align-content);
}
#wowjob-ui .desktop.align-items {
  --d-align-items: var(--t-align-items);
  align-items: var(--d-align-items);
}
#wowjob-ui .desktop.align-self {
  --d-align-self: var(--t-align-self);
  align-self: var(--d-align-self);
}
#wowjob-ui .desktop.animation {
  --d-animation: var(--t-animation);
  animation: var(--d-animation);
}
#wowjob-ui .desktop.appearance {
  --d-appearance: var(--t-appearance);
  appearance: var(--d-appearance);
}
#wowjob-ui .desktop.aspect-ratio {
  --d-aspect-ratio: var(--t-aspect-ratio);
  aspect-ratio: var(--d-aspect-ratio);
}
#wowjob-ui .desktop.backdrop-filter {
  --d-backdrop-filter: var(--t-backdrop-filter);
  backdrop-filter: var(--d-backdrop-filter);
}
#wowjob-ui .desktop.backface-visibility {
  --d-backface-visibility: var(--t-backface-visibility);
  backface-visibility: var(--d-backface-visibility);
}
#wowjob-ui .desktop.background {
  --d-background: var(--t-background);
  background: var(--d-background);
}
#wowjob-ui .desktop.background-blend-mode {
  --d-background-blend-mode: var(--t-background-blend-mode);
  background-blend-mode: var(--d-background-blend-mode);
}
#wowjob-ui .desktop.background-clip {
  --d-background-clip: var(--t-background-clip);
  background-clip: var(--d-background-clip);
}
#wowjob-ui .desktop.background-origin {
  --d-background-origin: var(--t-background-origin);
  background-origin: var(--d-background-origin);
}
#wowjob-ui .desktop.block-size {
  --d-block-size: var(--t-block-size);
  block-size: var(--d-block-size);
}
#wowjob-ui .desktop.margin {
  --d-margin: var(--t-margin);
  margin: var(--d-margin);
}
#wowjob-ui .desktop.padding {
  --d-padding: var(--t-padding);
  padding: var(--d-padding);
}
#wowjob-ui .desktop.border {
  --d-border: var(--t-border);
  border: var(--d-border);
}
#wowjob-ui .desktop.border-block {
  --d-border-block: var(--t-border-block);
  border-block: var(--d-border-block);
}
#wowjob-ui .desktop.border-block-start {
  --d-border-block-start: var(--t-border-block-start);
  border-block-start: var(--d-border-block-start);
}
#wowjob-ui .desktop.border-bottom {
  --d-border-bottom: var(--t-border-bottom);
  border-bottom: var(--d-border-bottom);
}
#wowjob-ui .desktop.border-bottom-left-radius {
  --d-border-bottom-left-radius: var(--t-border-bottom-left-radius);
  border-bottom-left-radius: var(--d-border-bottom-left-radius);
}
#wowjob-ui .desktop.border-bottom-right-radius {
  --d-border-bottom-right-radius: var(--t-border-bottom-right-radius);
  border-bottom-right-radius: var(--d-border-bottom-right-radius);
}
#wowjob-ui .desktop.border-block-end {
  --d-border-block-end: var(--t-border-block-end);
  border-block-end: var(--d-border-block-end);
}
#wowjob-ui .desktop.border-collapse {
  --d-border-collapse: var(--t-border-collapse);
  border-collapse: var(--d-border-collapse);
}
#wowjob-ui .desktop.border-end-end-radius {
  --d-border-end-end-radius: var(--t-border-end-end-radius);
  border-end-end-radius: var(--d-border-end-end-radius);
}
#wowjob-ui .desktop.border-end-start-radius {
  --d-border-end-start-radius: var(--t-border-end-start-radius);
  border-end-start-radius: var(--d-border-end-start-radius);
}
#wowjob-ui .desktop.border-image {
  --d-border-image: var(--t-border-image);
  border-image: var(--d-border-image);
}
#wowjob-ui .desktop.border-inline {
  --d-border-inline: var(--t-border-inline);
  border-inline: var(--d-border-inline);
}
#wowjob-ui .desktop.border-left {
  --d-border-left: var(--t-border-left);
  border-left: var(--d-border-left);
}
#wowjob-ui .desktop.border-inline-start {
  --d-border-inline-start: var(--t-border-inline-start);
  border-inline-start: var(--d-border-inline-start);
}
#wowjob-ui .desktop.border-inline-end {
  --d-border-inline-end: var(--t-border-inline-end);
  border-inline-end: var(--d-border-inline-end);
}
#wowjob-ui .desktop.border-radius {
  --d-border-radius: var(--t-border-radius);
  border-radius: var(--d-border-radius);
}
#wowjob-ui .desktop.border-right {
  --d-border-right: var(--t-border-right);
  border-right: var(--d-border-right);
}
#wowjob-ui .desktop.border-width {
  --d-border-width: var(--t-border-width);
  border-width: var(--d-border-width);
}
#wowjob-ui .desktop.border-style {
  --d-border-style: var(--t-border-style);
  border-style: var(--d-border-style);
}
#wowjob-ui .desktop.border-start-end-radius {
  --d-border-start-end-radius: var(--t-border-start-end-radius);
  border-start-end-radius: var(--d-border-start-end-radius);
}
#wowjob-ui .desktop.border-start-start-radius {
  --d-border-start-start-radius: var(--t-border-start-start-radius);
  border-start-start-radius: var(--d-border-start-start-radius);
}
#wowjob-ui .desktop.border-top {
  --d-border-top: var(--t-border-top);
  border-top: var(--d-border-top);
}
#wowjob-ui .desktop.border-top-left-radius {
  --d-border-top-left-radius: var(--t-border-top-left-radius);
  border-top-left-radius: var(--d-border-top-left-radius);
}
#wowjob-ui .desktop.border-top-right-radius {
  --d-border-top-right-radius: var(--t-border-top-right-radius);
  border-top-right-radius: var(--d-border-top-right-radius);
}
#wowjob-ui .desktop.bottom {
  --d-bottom: var(--t-bottom);
  bottom: var(--d-bottom);
}
#wowjob-ui .desktop.box-shadow {
  --d-box-shadow: var(--t-box-shadow);
  box-shadow: var(--d-box-shadow);
}
#wowjob-ui .desktop.box-sizing {
  --d-box-sizing: var(--t-box-sizing);
  box-sizing: var(--d-box-sizing);
}
#wowjob-ui .desktop.break-after {
  --d-break-after: var(--t-break-after);
  break-after: var(--d-break-after);
}
#wowjob-ui .desktop.break-before {
  --d-break-before: var(--t-break-before);
  break-before: var(--d-break-before);
}
#wowjob-ui .desktop.break-inside {
  --d-break-inside: var(--t-break-inside);
  break-inside: var(--d-break-inside);
}
#wowjob-ui .desktop.caption-side {
  --d-caption-side: var(--t-caption-side);
  caption-side: var(--d-caption-side);
}
#wowjob-ui .desktop.caret-color {
  --d-caret-color: var(--t-caret-color);
  caret-color: var(--d-caret-color);
}
#wowjob-ui .desktop.clear {
  --d-clear: var(--t-clear);
  clear: var(--d-clear);
}
#wowjob-ui .desktop.clip {
  --d-clip: var(--t-clip);
  clip: var(--d-clip);
}
#wowjob-ui .desktop.clip-path {
  --d-clip-path: var(--t-clip-path);
  clip-path: var(--d-clip-path);
}
#wowjob-ui .desktop.color {
  --d-color: var(--t-color);
  color: var(--d-color);
}
#wowjob-ui .desktop.color-interpolation {
  --d-color-interpolation: var(--t-color-interpolation);
  color-interpolation: var(--d-color-interpolation);
}
#wowjob-ui .desktop.color-interpolation-filters {
  --d-color-interpolation-filters: var(--t-color-interpolation-filters);
  color-interpolation-filters: var(--d-color-interpolation-filters);
}
#wowjob-ui .desktop.color-scheme {
  --d-color-scheme: var(--t-color-scheme);
  color-scheme: var(--d-color-scheme);
}
#wowjob-ui .desktop.column-count {
  --d-column-count: var(--t-column-count);
  column-count: var(--d-column-count);
}
#wowjob-ui .desktop.column-fill {
  --d-column-fill: var(--t-column-fill);
  column-fill: var(--d-column-fill);
}
#wowjob-ui .desktop.column-gap {
  --d-column-gap: var(--t-column-gap);
  column-gap: var(--d-column-gap);
}
#wowjob-ui .desktop.column-rule {
  --d-column-rule: var(--t-column-rule);
  column-rule: var(--d-column-rule);
}
#wowjob-ui .desktop.column-span {
  --d-column-span: var(--t-column-span);
  column-span: var(--d-column-span);
}
#wowjob-ui .desktop.column-width {
  --d-column-width: var(--t-column-width);
  column-width: var(--d-column-width);
}
#wowjob-ui .desktop.contain {
  --d-contain: var(--t-contain);
  contain: var(--d-contain);
}
#wowjob-ui .desktop.contain-intrinsic-block-size {
  --d-contain-intrinsic-block-size: var(--t-contain-intrinsic-block-size);
  contain-intrinsic-block-size: var(--d-contain-intrinsic-block-size);
}
#wowjob-ui .desktop.contain-intrinsic-height {
  --d-contain-intrinsic-height: var(--t-contain-intrinsic-height);
  contain-intrinsic-height: var(--d-contain-intrinsic-height);
}
#wowjob-ui .desktop.contain-intrinsic-inline-size {
  --d-contain-intrinsic-inline-size: var(--t-contain-intrinsic-inline-size);
  contain-intrinsic-inline-size: var(--d-contain-intrinsic-inline-size);
}
#wowjob-ui .desktop.contain-intrinsic-size {
  --d-contain-intrinsic-size: var(--t-contain-intrinsic-size);
  contain-intrinsic-size: var(--d-contain-intrinsic-size);
}
#wowjob-ui .desktop.contain-intrinsic-width {
  --d-contain-intrinsic-width: var(--t-contain-intrinsic-width);
  contain-intrinsic-width: var(--d-contain-intrinsic-width);
}
#wowjob-ui .desktop.container {
  --d-container: var(--t-container);
  container: var(--d-container);
}
#wowjob-ui .desktop.content {
  --d-content: var(--t-content);
  content: var(--d-content);
}
#wowjob-ui .desktop.content-visibility {
  --d-content-visibility: var(--t-content-visibility);
  content-visibility: var(--d-content-visibility);
}
#wowjob-ui .desktop.counter-increment {
  --d-counter-increment: var(--t-counter-increment);
  counter-increment: var(--d-counter-increment);
}
#wowjob-ui .desktop.counter-reset {
  --d-counter-reset: var(--t-counter-reset);
  counter-reset: var(--d-counter-reset);
}
#wowjob-ui .desktop.counter-set {
  --d-counter-set: var(--t-counter-set);
  counter-set: var(--d-counter-set);
}
#wowjob-ui .desktop.cursor {
  --d-cursor: var(--t-cursor);
  cursor: var(--d-cursor);
}
#wowjob-ui .desktop.cx {
  --d-cx: var(--t-cx);
  cx: var(--d-cx);
}
#wowjob-ui .desktop.cy {
  --d-cy: var(--t-cy);
  cy: var(--d-cy);
}
#wowjob-ui .desktop.d {
  --d-d: var(--t-d);
  d: var(--d-d);
}
#wowjob-ui .desktop.direction {
  --d-direction: var(--t-direction);
  direction: var(--d-direction);
}
#wowjob-ui .desktop.dominant-baseline {
  --d-dominant-baseline: var(--t-dominant-baseline);
  dominant-baseline: var(--d-dominant-baseline);
}
#wowjob-ui .desktop.empty-cells {
  --d-empty-cells: var(--t-empty-cells);
  empty-cells: var(--d-empty-cells);
}
#wowjob-ui .desktop.display {
  --d-display: var(--t-display);
  display: var(--d-display);
}
#wowjob-ui .desktop.flex {
  --d-flex: var(--t-flex);
  flex: var(--d-flex);
}
#wowjob-ui .desktop.flex-basis {
  --d-flex-basis: var(--t-flex-basis);
  flex-basis: var(--d-flex-basis);
}
#wowjob-ui .desktop.flex-direction {
  --d-flex-direction: var(--t-flex-direction);
  flex-direction: var(--d-flex-direction);
}
#wowjob-ui .desktop.flex-grow {
  --d-flex-grow: var(--t-flex-grow);
  flex-grow: var(--d-flex-grow);
}
#wowjob-ui .desktop.flex-shrink {
  --d-flex-shrink: var(--t-flex-shrink);
  flex-shrink: var(--d-flex-shrink);
}
#wowjob-ui .desktop.font-variant {
  --d-font-variant: var(--t-font-variant);
  font-variant: var(--d-font-variant);
}
#wowjob-ui .desktop.font-weight {
  --d-font-weight: var(--t-font-weight);
  font-weight: var(--d-font-weight);
}
#wowjob-ui .desktop.flex-wrap {
  --d-flex-wrap: var(--t-flex-wrap);
  flex-wrap: var(--d-flex-wrap);
}
#wowjob-ui .desktop.field-sizing {
  --d-field-sizing: var(--t-field-sizing);
  field-sizing: var(--d-field-sizing);
}
#wowjob-ui .desktop.fill {
  --d-fill: var(--t-fill);
  fill: var(--d-fill);
}
#wowjob-ui .desktop.fill-opacity {
  --d-fill-opacity: var(--t-fill-opacity);
  fill-opacity: var(--d-fill-opacity);
}
#wowjob-ui .desktop.fill-rule {
  --d-fill-rule: var(--t-fill-rule);
  fill-rule: var(--d-fill-rule);
}
#wowjob-ui .desktop.filter {
  --d-filter: var(--t-filter);
  filter: var(--d-filter);
}
#wowjob-ui .desktop.float {
  --d-float: var(--t-float);
  float: var(--d-float);
}
#wowjob-ui .desktop.flood-color {
  --d-flood-color: var(--t-flood-color);
  flood-color: var(--d-flood-color);
}
#wowjob-ui .desktop.flood-opacity {
  --d-flood-opacity: var(--t-flood-opacity);
  flood-opacity: var(--d-flood-opacity);
}
#wowjob-ui .desktop.font {
  --d-font: var(--t-font);
  font: var(--d-font);
}
#wowjob-ui .desktop.font-family {
  --d-font-family: var(--t-font-family);
  font-family: var(--d-font-family);
}
#wowjob-ui .desktop.font-size {
  --d-font-size: var(--t-font-size);
  font-size: var(--d-font-size);
}
#wowjob-ui .desktop.font-stretch {
  --d-font-stretch: var(--t-font-stretch);
  font-stretch: var(--d-font-stretch);
}
#wowjob-ui .desktop.font-style {
  --d-font-style: var(--t-font-style);
  font-style: var(--d-font-style);
}
#wowjob-ui .desktop.font-feature-settings {
  --d-font-feature-settings: var(--t-font-feature-settings);
  font-feature-settings: var(--d-font-feature-settings);
}
#wowjob-ui .desktop.font-kerning {
  --d-font-kerning: var(--t-font-kerning);
  font-kerning: var(--d-font-kerning);
}
#wowjob-ui .desktop.font-language-override {
  --d-font-language-override: var(--t-font-language-override);
  font-language-override: var(--d-font-language-override);
}
#wowjob-ui .desktop.font-optical-sizing {
  --d-font-optical-sizing: var(--t-font-optical-sizing);
  font-optical-sizing: var(--d-font-optical-sizing);
}
#wowjob-ui .desktop.font-palette {
  --d-font-palette: var(--t-font-palette);
  font-palette: var(--d-font-palette);
}
#wowjob-ui .desktop.font-size-adjust {
  --d-font-size-adjust: var(--t-font-size-adjust);
  font-size-adjust: var(--d-font-size-adjust);
}
#wowjob-ui .desktop.font-synthesis-small-caps {
  --d-font-synthesis-small-caps: var(--t-font-synthesis-small-caps);
  font-synthesis-small-caps: var(--d-font-synthesis-small-caps);
}
#wowjob-ui .desktop.font-synthesis-style {
  --d-font-synthesis-style: var(--t-font-synthesis-style);
  font-synthesis-style: var(--d-font-synthesis-style);
}
#wowjob-ui .desktop.font-synthesis-weight {
  --d-font-synthesis-weight: var(--t-font-synthesis-weight);
  font-synthesis-weight: var(--d-font-synthesis-weight);
}
#wowjob-ui .desktop.font-variant-alternates {
  --d-font-variant-alternates: var(--t-font-variant-alternates);
  font-variant-alternates: var(--d-font-variant-alternates);
}
#wowjob-ui .desktop.font-variant-caps {
  --d-font-variant-caps: var(--t-font-variant-caps);
  font-variant-caps: var(--d-font-variant-caps);
}
#wowjob-ui .desktop.font-variant-east-asian {
  --d-font-variant-east-asian: var(--t-font-variant-east-asian);
  font-variant-east-asian: var(--d-font-variant-east-asian);
}
#wowjob-ui .desktop.font-variant-ligatures {
  --d-font-variant-ligatures: var(--t-font-variant-ligatures);
  font-variant-ligatures: var(--d-font-variant-ligatures);
}
#wowjob-ui .desktop.font-variant-numeric {
  --d-font-variant-numeric: var(--t-font-variant-numeric);
  font-variant-numeric: var(--d-font-variant-numeric);
}
#wowjob-ui .desktop.font-variant-position {
  --d-font-variant-position: var(--t-font-variant-position);
  font-variant-position: var(--d-font-variant-position);
}
#wowjob-ui .desktop.font-variation-settings {
  --d-font-variation-settings: var(--t-font-variation-settings);
  font-variation-settings: var(--d-font-variation-settings);
}
#wowjob-ui .desktop.forced-color-adjust {
  --d-forced-color-adjust: var(--t-forced-color-adjust);
  forced-color-adjust: var(--d-forced-color-adjust);
}
#wowjob-ui .desktop.gap {
  --d-gap: var(--t-gap);
  gap: var(--d-gap);
}
#wowjob-ui .desktop.grid-auto-columns {
  --d-grid-auto-columns: var(--t-grid-auto-columns);
  grid-auto-columns: var(--d-grid-auto-columns);
}
#wowjob-ui .desktop.grid-auto-flow {
  --d-grid-auto-flow: var(--t-grid-auto-flow);
  grid-auto-flow: var(--d-grid-auto-flow);
}
#wowjob-ui .desktop.grid-auto-rows {
  --d-grid-auto-rows: var(--t-grid-auto-rows);
  grid-auto-rows: var(--d-grid-auto-rows);
}
#wowjob-ui .desktop.grid-column {
  --d-grid-column: var(--t-grid-column);
  grid-column: var(--d-grid-column);
}
#wowjob-ui .desktop.grid-row {
  --d-grid-row: var(--t-grid-row);
  grid-row: var(--d-grid-row);
}
#wowjob-ui .desktop.grid-template {
  --d-grid-template: var(--t-grid-template);
  grid-template: var(--d-grid-template);
}
#wowjob-ui .desktop.grid-template-columns {
  --d-grid-template-columns: var(--t-grid-template-columns);
  grid-template-columns: var(--d-grid-template-columns);
}
#wowjob-ui .desktop.grid-template-rows {
  --d-grid-template-rows: var(--t-grid-template-rows);
  grid-template-rows: var(--d-grid-template-rows);
}
#wowjob-ui .desktop.grid-template-areas {
  --d-grid-template-areas: var(--t-grid-template-areas);
  grid-template-areas: var(--d-grid-template-areas);
}
#wowjob-ui .desktop.height {
  --d-height: var(--t-height);
  height: var(--d-height);
}
#wowjob-ui .desktop.hyphenate-character {
  --d-hyphenate-character: var(--t-hyphenate-character);
  hyphenate-character: var(--d-hyphenate-character);
}
#wowjob-ui .desktop.hyphens {
  --d-hyphens: var(--t-hyphens);
  hyphens: var(--d-hyphens);
}
#wowjob-ui .desktop.image-orientation {
  --d-image-orientation: var(--t-image-orientation);
  image-orientation: var(--d-image-orientation);
}
#wowjob-ui .desktop.image-rendering {
  --d-image-rendering: var(--t-image-rendering);
  image-rendering: var(--d-image-rendering);
}
#wowjob-ui .desktop.inline-size {
  --d-inline-size: var(--t-inline-size);
  inline-size: var(--d-inline-size);
}
#wowjob-ui .desktop.inset {
  --d-inset: var(--t-inset);
  inset: var(--d-inset);
}
#wowjob-ui .desktop.inset-block {
  --d-inset-block: var(--t-inset-block);
  inset-block: var(--d-inset-block);
}
#wowjob-ui .desktop.inset-inline {
  --d-inset-inline: var(--t-inset-inline);
  inset-inline: var(--d-inset-inline);
}
#wowjob-ui .desktop.isolation {
  --d-isolation: var(--t-isolation);
  isolation: var(--d-isolation);
}
#wowjob-ui .desktop.justify-content {
  --d-justify-content: var(--t-justify-content);
  justify-content: var(--d-justify-content);
}
#wowjob-ui .desktop.justify-items {
  --d-justify-items: var(--t-justify-items);
  justify-items: var(--d-justify-items);
}
#wowjob-ui .desktop.justify-self {
  --d-justify-self: var(--t-justify-self);
  justify-self: var(--d-justify-self);
}
#wowjob-ui .desktop.left {
  --d-left: var(--t-left);
  left: var(--d-left);
}
#wowjob-ui .desktop.right {
  --d-right: var(--t-right);
  right: var(--d-right);
}
#wowjob-ui .desktop.top {
  --d-top: var(--t-top);
  top: var(--d-top);
}
#wowjob-ui .desktop.letter-spacing {
  --d-letter-spacing: var(--t-letter-spacing);
  letter-spacing: var(--d-letter-spacing);
}
#wowjob-ui .desktop.lighting-color {
  --d-lighting-color: var(--t-lighting-color);
  lighting-color: var(--d-lighting-color);
}
#wowjob-ui .desktop.line-break {
  --d-line-break: var(--t-line-break);
  line-break: var(--d-line-break);
}
#wowjob-ui .desktop.line-height {
  --d-line-height: var(--t-line-height);
  line-height: var(--d-line-height);
}
#wowjob-ui .desktop.list-style {
  --d-list-style: var(--t-list-style);
  list-style: var(--d-list-style);
}
#wowjob-ui .desktop.margin-block {
  --d-margin-block: var(--t-margin-block);
  margin-block: var(--d-margin-block);
}
#wowjob-ui .desktop.margin-inline {
  --d-margin-inline: var(--t-margin-inline);
  margin-inline: var(--d-margin-inline);
}
#wowjob-ui .desktop.mask {
  --d-mask: var(--t-mask);
  mask: var(--d-mask);
}
#wowjob-ui .desktop.mask-clip {
  --d-mask-clip: var(--t-mask-clip);
  mask-clip: var(--d-mask-clip);
}
#wowjob-ui .desktop.math-style {
  --d-math-style: var(--t-math-style);
  math-style: var(--d-math-style);
}
#wowjob-ui .desktop.max-block-size {
  --d-max-block-size: var(--t-max-block-size);
  max-block-size: var(--d-max-block-size);
}
#wowjob-ui .desktop.max-height {
  --d-max-height: var(--t-max-height);
  max-height: var(--d-max-height);
}
#wowjob-ui .desktop.max-inline-size {
  --d-max-inline-size: var(--t-max-inline-size);
  max-inline-size: var(--d-max-inline-size);
}
#wowjob-ui .desktop.max-width {
  --d-max-width: var(--t-max-width);
  max-width: var(--d-max-width);
}
#wowjob-ui .desktop.min-block-size {
  --d-min-block-size: var(--t-min-block-size);
  min-block-size: var(--d-min-block-size);
}
#wowjob-ui .desktop.min-height {
  --d-min-height: var(--t-min-height);
  min-height: var(--d-min-height);
}
#wowjob-ui .desktop.min-inline-size {
  --d-min-inline-size: var(--t-min-inline-size);
  min-inline-size: var(--d-min-inline-size);
}
#wowjob-ui .desktop.min-width {
  --d-min-width: var(--t-min-width);
  min-width: var(--d-min-width);
}
#wowjob-ui .desktop.mix-blend-mode {
  --d-mix-blend-mode: var(--t-mix-blend-mode);
  mix-blend-mode: var(--d-mix-blend-mode);
}
#wowjob-ui .desktop.object-fit {
  --d-object-fit: var(--t-object-fit);
  object-fit: var(--d-object-fit);
}
#wowjob-ui .desktop.object-position {
  --d-object-position: var(--t-object-position);
  object-position: var(--d-object-position);
}
#wowjob-ui .desktop.offset-anchor {
  --d-offset-anchor: var(--t-offset-anchor);
  offset-anchor: var(--d-offset-anchor);
}
#wowjob-ui .desktop.offset {
  --d-offset: var(--t-offset);
  offset: var(--d-offset);
}
#wowjob-ui .desktop.opacity {
  --d-opacity: var(--t-opacity);
  opacity: var(--d-opacity);
}
#wowjob-ui .desktop.order {
  --d-order: var(--t-order);
  order: var(--d-order);
}
#wowjob-ui .desktop.outline {
  --d-outline: var(--t-outline);
  outline: var(--d-outline);
}
#wowjob-ui .desktop.outline-offset {
  --d-outline-offset: var(--t-outline-offset);
  outline-offset: var(--d-outline-offset);
}
#wowjob-ui .desktop.overflow {
  --d-overflow: var(--t-overflow);
  overflow: var(--d-overflow);
}
#wowjob-ui .desktop.overscroll-behavior {
  --d-overscroll-behavior: var(--t-overscroll-behavior);
  overscroll-behavior: var(--d-overscroll-behavior);
}
#wowjob-ui .desktop.overscroll-behavior-block {
  --d-overscroll-behavior-block: var(--t-overscroll-behavior-block);
  overscroll-behavior-block: var(--d-overscroll-behavior-block);
}
#wowjob-ui .desktop.overscroll-behavior-inline {
  --d-overscroll-behavior-inline: var(--t-overscroll-behavior-inline);
  overscroll-behavior-inline: var(--d-overscroll-behavior-inline);
}
#wowjob-ui .desktop.perspective {
  --d-perspective: var(--t-perspective);
  perspective: var(--d-perspective);
}
#wowjob-ui .desktop.perspective-origin {
  --d-perspective-origin: var(--t-perspective-origin);
  perspective-origin: var(--d-perspective-origin);
}
#wowjob-ui .desktop.place-content {
  --d-place-content: var(--t-place-content);
  place-content: var(--d-place-content);
}
#wowjob-ui .desktop.place-items {
  --d-place-items: var(--t-place-items);
  place-items: var(--d-place-items);
}
#wowjob-ui .desktop.place-self {
  --d-place-self: var(--t-place-self);
  place-self: var(--d-place-self);
}
#wowjob-ui .desktop.pointer-events {
  --d-pointer-events: var(--t-pointer-events);
  pointer-events: var(--d-pointer-events);
}
#wowjob-ui .desktop.position {
  --d-position: var(--t-position);
  position: var(--d-position);
}
#wowjob-ui .desktop.quotes {
  --d-quotes: var(--t-quotes);
  quotes: var(--d-quotes);
}
#wowjob-ui .desktop.resize {
  --d-resize: var(--t-resize);
  resize: var(--d-resize);
}
#wowjob-ui .desktop.rotate {
  --d-rotate: var(--t-rotate);
  rotate: var(--d-rotate);
}
#wowjob-ui .desktop.ruby-align {
  --d-ruby-align: var(--t-ruby-align);
  ruby-align: var(--d-ruby-align);
}
#wowjob-ui .desktop.ruby-position {
  --d-ruby-position: var(--t-ruby-position);
  ruby-position: var(--d-ruby-position);
}
#wowjob-ui .desktop.scale {
  --d-scale: var(--t-scale);
  scale: var(--d-scale);
}
#wowjob-ui .desktop.scroll-behavior {
  --d-scroll-behavior: var(--t-scroll-behavior);
  scroll-behavior: var(--d-scroll-behavior);
}
#wowjob-ui .desktop.scroll-margin {
  --d-scroll-margin: var(--t-scroll-margin);
  scroll-margin: var(--d-scroll-margin);
}
#wowjob-ui .desktop.scroll-padding {
  --d-scroll-padding: var(--t-scroll-padding);
  scroll-padding: var(--d-scroll-padding);
}
#wowjob-ui .desktop.scroll-snap-align {
  --d-scroll-snap-align: var(--t-scroll-snap-align);
  scroll-snap-align: var(--d-scroll-snap-align);
}
#wowjob-ui .desktop.scroll-snap-stop {
  --d-scroll-snap-stop: var(--t-scroll-snap-stop);
  scroll-snap-stop: var(--d-scroll-snap-stop);
}
#wowjob-ui .desktop.scroll-snap-type {
  --d-scroll-snap-type: var(--t-scroll-snap-type);
  scroll-snap-type: var(--d-scroll-snap-type);
}
#wowjob-ui .desktop.scroll-timeline {
  --d-scroll-timeline: var(--t-scroll-timeline);
  scroll-timeline: var(--d-scroll-timeline);
}
#wowjob-ui .desktop.scroll-timeline-axis {
  --d-scroll-timeline-axis: var(--t-scroll-timeline-axis);
  scroll-timeline-axis: var(--d-scroll-timeline-axis);
}
#wowjob-ui .desktop.scroll-timeline-name {
  --d-scroll-timeline-name: var(--t-scroll-timeline-name);
  scroll-timeline-name: var(--d-scroll-timeline-name);
}
#wowjob-ui .desktop.scrollbar-color {
  --d-scrollbar-color: var(--t-scrollbar-color);
  scrollbar-color: var(--d-scrollbar-color);
}
#wowjob-ui .desktop.scrollbar-gutter {
  --d-scrollbar-gutter: var(--t-scrollbar-gutter);
  scrollbar-gutter: var(--d-scrollbar-gutter);
}
#wowjob-ui .desktop.scrollbar-width {
  --d-scrollbar-width: var(--t-scrollbar-width);
  scrollbar-width: var(--d-scrollbar-width);
}
#wowjob-ui .desktop.shape-image-threshold {
  --d-shape-image-threshold: var(--t-shape-image-threshold);
  shape-image-threshold: var(--d-shape-image-threshold);
}
#wowjob-ui .desktop.shape-margin {
  --d-shape-margin: var(--t-shape-margin);
  shape-margin: var(--d-shape-margin);
}
#wowjob-ui .desktop.shape-outside {
  --d-shape-outside: var(--t-shape-outside);
  shape-outside: var(--d-shape-outside);
}
#wowjob-ui .desktop.shape-rendering {
  --d-shape-rendering: var(--t-shape-rendering);
  shape-rendering: var(--d-shape-rendering);
}
#wowjob-ui .desktop.stop-color {
  --d-stop-color: var(--t-stop-color);
  stop-color: var(--d-stop-color);
}
#wowjob-ui .desktop.stop-opacity {
  --d-stop-opacity: var(--t-stop-opacity);
  stop-opacity: var(--d-stop-opacity);
}
#wowjob-ui .desktop.stroke {
  --d-stroke: var(--t-stroke);
  stroke: var(--d-stroke);
}
#wowjob-ui .desktop.stroke-dasharray {
  --d-stroke-dasharray: var(--t-stroke-dasharray);
  stroke-dasharray: var(--d-stroke-dasharray);
}
#wowjob-ui .desktop.stroke-dashoffset {
  --d-stroke-dashoffset: var(--t-stroke-dashoffset);
  stroke-dashoffset: var(--d-stroke-dashoffset);
}
#wowjob-ui .desktop.stroke-linecap {
  --d-stroke-linecap: var(--t-stroke-linecap);
  stroke-linecap: var(--d-stroke-linecap);
}
#wowjob-ui .desktop.stroke-linejoin {
  --d-stroke-linejoin: var(--t-stroke-linejoin);
  stroke-linejoin: var(--d-stroke-linejoin);
}
#wowjob-ui .desktop.stroke-miterlimit {
  --d-stroke-miterlimit: var(--t-stroke-miterlimit);
  stroke-miterlimit: var(--d-stroke-miterlimit);
}
#wowjob-ui .desktop.stroke-opacity {
  --d-stroke-opacity: var(--t-stroke-opacity);
  stroke-opacity: var(--d-stroke-opacity);
}
#wowjob-ui .desktop.stroke-width {
  --d-stroke-width: var(--t-stroke-width);
  stroke-width: var(--d-stroke-width);
}
#wowjob-ui .desktop.tab-size {
  --d-tab-size: var(--t-tab-size);
  tab-size: var(--d-tab-size);
}
#wowjob-ui .desktop.table-layout {
  --d-table-layout: var(--t-table-layout);
  table-layout: var(--d-table-layout);
}
#wowjob-ui .desktop.text-align {
  --d-text-align: var(--t-text-align);
  text-align: var(--d-text-align);
}
#wowjob-ui .desktop.text-align-last {
  --d-text-align-last: var(--t-text-align-last);
  text-align-last: var(--d-text-align-last);
}
#wowjob-ui .desktop.text-anchor {
  --d-text-anchor: var(--t-text-anchor);
  text-anchor: var(--d-text-anchor);
}
#wowjob-ui .desktop.text-combine-upright {
  --d-text-combine-upright: var(--t-text-combine-upright);
  text-combine-upright: var(--d-text-combine-upright);
}
#wowjob-ui .desktop.text-decoration {
  --d-text-decoration: var(--t-text-decoration);
  text-decoration: var(--d-text-decoration);
}
#wowjob-ui .desktop.text-emphasis {
  --d-text-emphasis: var(--t-text-emphasis);
  text-emphasis: var(--d-text-emphasis);
}
#wowjob-ui .desktop.text-indent {
  --d-text-indent: var(--t-text-indent);
  text-indent: var(--d-text-indent);
}
#wowjob-ui .desktop.text-justify {
  --d-text-justify: var(--t-text-justify);
  text-justify: var(--d-text-justify);
}
#wowjob-ui .desktop.text-orientation {
  --d-text-orientation: var(--t-text-orientation);
  text-orientation: var(--d-text-orientation);
}
#wowjob-ui .desktop.text-overflow {
  --d-text-overflow: var(--t-text-overflow);
  text-overflow: var(--d-text-overflow);
}
#wowjob-ui .desktop.text-rendering {
  --d-text-rendering: var(--t-text-rendering);
  text-rendering: var(--d-text-rendering);
}
#wowjob-ui .desktop.text-shadow {
  --d-text-shadow: var(--t-text-shadow);
  text-shadow: var(--d-text-shadow);
}
#wowjob-ui .desktop.text-transform {
  --d-text-transform: var(--t-text-transform);
  text-transform: var(--d-text-transform);
}
#wowjob-ui .desktop.text-underline-offset {
  --d-text-underline-offset: var(--t-text-underline-offset);
  text-underline-offset: var(--d-text-underline-offset);
}
#wowjob-ui .desktop.text-underline-position {
  --d-text-underline-position: var(--t-text-underline-position);
  text-underline-position: var(--d-text-underline-position);
}
#wowjob-ui .desktop.text-wrap {
  --d-text-wrap: var(--t-text-wrap);
  text-wrap: var(--d-text-wrap);
}
#wowjob-ui .desktop.text-wrap-style {
  --d-text-wrap-style: var(--t-text-wrap-style);
  text-wrap-style: var(--d-text-wrap-style);
}
#wowjob-ui .desktop.touch-action {
  --d-touch-action: var(--t-touch-action);
  touch-action: var(--d-touch-action);
}
#wowjob-ui .desktop.transform {
  --d-transform: var(--t-transform);
  transform: var(--d-transform);
}
#wowjob-ui .desktop.transform-box {
  --d-transform-box: var(--t-transform-box);
  transform-box: var(--d-transform-box);
}
#wowjob-ui .desktop.transform-origin {
  --d-transform-origin: var(--t-transform-origin);
  transform-origin: var(--d-transform-origin);
}
#wowjob-ui .desktop.transform-style {
  --d-transform-style: var(--t-transform-style);
  transform-style: var(--d-transform-style);
}
#wowjob-ui .desktop.transition {
  --d-transition: var(--t-transition);
  transition: var(--d-transition);
}
#wowjob-ui .desktop.transition-behavior {
  --d-transition-behavior: var(--t-transition-behavior);
  transition-behavior: var(--d-transition-behavior);
}
#wowjob-ui .desktop.translate {
  --d-translate: var(--t-translate);
  translate: var(--d-translate);
}
#wowjob-ui .desktop.user-select {
  --d-user-select: var(--t-user-select);
  user-select: var(--d-user-select);
}
#wowjob-ui .desktop.vector-effect {
  --d-vector-effect: var(--t-vector-effect);
  vector-effect: var(--d-vector-effect);
}
#wowjob-ui .desktop.vertical-align {
  --d-vertical-align: var(--t-vertical-align);
  vertical-align: var(--d-vertical-align);
}
#wowjob-ui .desktop.view-transition-name {
  --d-view-transition-name: var(--t-view-transition-name);
  view-transition-name: var(--d-view-transition-name);
}
#wowjob-ui .desktop.visibility {
  --d-visibility: var(--t-visibility);
  visibility: var(--d-visibility);
}
#wowjob-ui .desktop.white-space {
  --d-white-space: var(--t-white-space);
  white-space: var(--d-white-space);
}
#wowjob-ui .desktop.width {
  --d-width: var(--t-width);
  width: var(--d-width);
}
#wowjob-ui .desktop.will-change {
  --d-will-change: var(--t-will-change);
  will-change: var(--d-will-change);
}
#wowjob-ui .desktop.word-break {
  --d-word-break: var(--t-word-break);
  word-break: var(--d-word-break);
}
#wowjob-ui .desktop.word-spacing {
  --d-word-spacing: var(--t-word-spacing);
  word-spacing: var(--d-word-spacing);
}
#wowjob-ui .desktop.writing-mode {
  --d-writing-mode: var(--t-writing-mode);
  writing-mode: var(--d-writing-mode);
}
#wowjob-ui .desktop.z-index {
  --d-z-index: var(--t-z-index);
  z-index: var(--d-z-index);
}
#wowjob-ui .desktop.zoom {
  --d-zoom: var(--t-zoom);
  zoom: var(--d-zoom);
}

}
```

## CSS: src/css/all.min.css

```css
/* WOWJOB UI CSS
Yet Another CSS UI library, which provides zero build time, best debugging DX, very flexible, reposniveness for RWD at core, and works with React, NextJS, Astro and more
Author: Marian Zburlea
Organization: Wow Job
GitHub: https://github.com/wowjob
Website: https://wowjob.blog
Website: https://wowjob.dev
Website: https://wowjob.ai
*/
/* CSS theme */
#wowjob-ui .theme-brand {
  --tch: 259;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-primary {
  --tch: 225;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-secondary {
  --tch: 318;
  --tcs: 77%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-tertiary {
  --tch: 245;
  --tcs: 86%;
  --tcl: 15%;
  --bgcl: 80%;
  --bdcl: 60%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-default {
  --tch: 221;
  --tcs: 13%;
  --tcl: 15%;
  --bgcl: 95%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-error {
  --tch: 4;
  --tcs: 86%;
  --tcl: 95%;
  --bgcl: 20%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-warning {
  --tch: 34;
  --tcs: 94%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-success {
  --tch: 152;
  --tcs: 77%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-info {
  --tch: 200;
  --tcs: 77%;
  --tcl: 15%;
  --bgcl: 85%;
  --bdcl: 65%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-light {
  --tch: 0;
  --tcs: 0%;
  --tcl: 15%;
  --bgcl: 98%;
  --bdcl: 70%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-dark {
  --tch: 240;
  --tcs: 15%;
  --tcl: 95%;
  --bgcl: 15%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-accent {
  --tch: 50;
  --tcs: 94%;
  --tcl: 15%;
  --bgcl: 70%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-muted {
  --tch: 210;
  --tcs: 10%;
  --tcl: 50%;
  --bgcl: 90%;
  --bdcl: 70%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}
#wowjob-ui .theme-highlight {
  --tch: 280;
  --tcs: 80%;
  --tcl: 95%;
  --bgcl: 25%;
  --bdcl: 50%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}

/* CSS Properties */
#wowjob-ui .acc{--acc:auto;accent-color:var(--acc);}#wowjob-ui .ac{--ac:normal;align-content:var(--ac);}#wowjob-ui .ai{--ai:normal;align-items:var(--ai);}#wowjob-ui .as{--as:auto;align-self:var(--as);}#wowjob-ui .a{--a:none;animation:var(--a);}#wowjob-ui .ap{--ap:none;appearance:var(--ap);}#wowjob-ui .ar{--ar:auto;aspect-ratio:var(--ar);}#wowjob-ui .bf{--bf:none;backdrop-filter:var(--bf);}#wowjob-ui .bv{--bv:visible;backface-visibility:var(--bv);}#wowjob-ui .bg{--bg:transparent;background:var(--bg);}#wowjob-ui .bbm{--bbm:normal;background-blend-mode:var(--bbm);}#wowjob-ui .bc{--bc:border-box;background-clip:var(--bc);}#wowjob-ui .bo{--bo:padding-box;background-origin:var(--bo);}#wowjob-ui .bz{--bz:auto;block-size:var(--bz);}#wowjob-ui .m{--m:0;margin:var(--m);}#wowjob-ui .p{--p:0;padding:var(--p);}#wowjob-ui .b{--b:medium none currentcolor;border:var(--b);}#wowjob-ui .bb{--bb:undefined;border-block:var(--bb);}#wowjob-ui .bbs{--bbs:none;border-block-start:var(--bbs);}#wowjob-ui .bbt{--bbt:undefined;border-bottom:var(--bbt);}#wowjob-ui .bblr{--bblr:0;border-bottom-left-radius:var(--bblr);}#wowjob-ui .bbrr{--bbrr:0;border-bottom-right-radius:var(--bbrr);}#wowjob-ui .bbe{--bbe:none;border-block-end:var(--bbe);}#wowjob-ui .bdc{--bdc:separate;border-collapse:var(--bdc);}#wowjob-ui .beer{--beer:0;border-end-end-radius:var(--beer);}#wowjob-ui .besr{--besr:0;border-end-start-radius:var(--besr);}#wowjob-ui .bim{--bim:undefined;border-image:var(--bim);}#wowjob-ui .bi{--bi:undefined;border-inline:var(--bi);}#wowjob-ui .bl{--bl:undefined;border-left:var(--bl);}#wowjob-ui .bis{--bis:undefined;border-inline-start:var(--bis);}#wowjob-ui .bie{--bie:undefined;border-inline-end:var(--bie);}#wowjob-ui .bra{--bra:undefined;border-radius:var(--bra);}#wowjob-ui .br{--br:undefined;border-right:var(--br);}#wowjob-ui .bw{--bw:0;border-width:var(--bw);}#wowjob-ui .bds{--bds:none;border-style:var(--bds);}#wowjob-ui .bser{--bser:0;border-start-end-radius:var(--bser);}#wowjob-ui .bssr{--bssr:0;border-start-start-radius:var(--bssr);}#wowjob-ui .bdt{--bdt:undefined;border-top:var(--bdt);}#wowjob-ui .btlr{--btlr:0;border-top-left-radius:var(--btlr);}#wowjob-ui .btrr{--btrr:0;border-top-right-radius:var(--btrr);}#wowjob-ui .bt{--bt:auto;bottom:var(--bt);}#wowjob-ui .bs{--bs:none;box-shadow:var(--bs);}#wowjob-ui .bsz{--bsz:content-box;box-sizing:var(--bsz);}#wowjob-ui .ba{--ba:auto;break-after:var(--ba);}#wowjob-ui .bbf{--bbf:auto;break-before:var(--bbf);}#wowjob-ui .bbi{--bbi:auto;break-inside:var(--bbi);}#wowjob-ui .cps{--cps:top;caption-side:var(--cps);}#wowjob-ui .crc{--crc:auto;caret-color:var(--crc);}#wowjob-ui .clr{--clr:none;clear:var(--clr);}#wowjob-ui .cl{--cl:auto;clip:var(--cl);}#wowjob-ui .clp{--clp:none;clip-path:var(--clp);}#wowjob-ui .c{--c:currentcolor;color:var(--c);}#wowjob-ui .ci{--ci:srgb;color-interpolation:var(--ci);}#wowjob-ui .cif{--cif:linearrgb;color-interpolation-filters:var(--cif);}#wowjob-ui .cs{--cs:normal;color-scheme:var(--cs);}#wowjob-ui .cc{--cc:auto;column-count:var(--cc);}#wowjob-ui .cf{--cf:balance;column-fill:var(--cf);}#wowjob-ui .cg{--cg:normal;column-gap:var(--cg);}#wowjob-ui .cr{--cr:undefined;column-rule:var(--cr);}#wowjob-ui .csp{--csp:none;column-span:var(--csp);}#wowjob-ui .cw{--cw:auto;column-width:var(--cw);}#wowjob-ui .ctn{--ctn:none;contain:var(--ctn);}#wowjob-ui .cib{--cib:auto;contain-intrinsic-block-size:var(--cib);}#wowjob-ui .cih{--cih:auto;contain-intrinsic-height:var(--cih);}#wowjob-ui .ciis{--ciis:auto;contain-intrinsic-inline-size:var(--ciis);}#wowjob-ui .cis{--cis:undefined;contain-intrinsic-size:var(--cis);}#wowjob-ui .ciw{--ciw:auto;contain-intrinsic-width:var(--ciw);}#wowjob-ui .cn{--cn:undefined;container:var(--cn);}#wowjob-ui .cnt{--cnt:normal;content:var(--cnt);}#wowjob-ui .cv{--cv:visible;content-visibility:var(--cv);}#wowjob-ui .cin{--cin:none;counter-increment:var(--cin);}#wowjob-ui .cre{--cre:none;counter-reset:var(--cre);}#wowjob-ui .cse{--cse:none;counter-set:var(--cse);}#wowjob-ui .cur{--cur:auto;cursor:var(--cur);}#wowjob-ui .cx{--cx:undefined;cx:var(--cx);}#wowjob-ui .cy{--cy:undefined;cy:var(--cy);}#wowjob-ui .d{--d:undefined;d:var(--d);}#wowjob-ui .dir{--dir:ltr;direction:var(--dir);}#wowjob-ui .db{--db:auto;dominant-baseline:var(--db);}#wowjob-ui .ec{--ec:show;empty-cells:var(--ec);}#wowjob-ui .ds{--ds:inline;display:var(--ds);}#wowjob-ui .fx{--fx:0 1 auto;flex:var(--fx);}#wowjob-ui .fb{--fb:auto;flex-basis:var(--fb);}#wowjob-ui .fd{--fd:row;flex-direction:var(--fd);}#wowjob-ui .fg{--fg:0;flex-grow:var(--fg);}#wowjob-ui .fsh{--fsh:1;flex-shrink:var(--fsh);}#wowjob-ui .fv{--fv:undefined;font-variant:var(--fv);}#wowjob-ui .fw{--fw:400;font-weight:var(--fw);}#wowjob-ui .fwr{--fwr:nowrap;flex-wrap:var(--fwr);}#wowjob-ui .fiz{--fiz:undefined;field-sizing:var(--fiz);}#wowjob-ui .fl{--fl:black;fill:var(--fl);}#wowjob-ui .fop{--fop:1;fill-opacity:var(--fop);}#wowjob-ui .fr{--fr:nonzero;fill-rule:var(--fr);}#wowjob-ui .fil{--fil:none;filter:var(--fil);}#wowjob-ui .flo{--flo:none;float:var(--flo);}#wowjob-ui .fc{--fc:black;flood-color:var(--fc);}#wowjob-ui .fo{--fo:1;flood-opacity:var(--fo);}#wowjob-ui .fnt{--fnt:1rem sans-serif;font:var(--fnt);}#wowjob-ui .ff{--ff:serif;font-family:var(--ff);}#wowjob-ui .fz{--fz:16;font-size:var(--fz);}#wowjob-ui .fst{--fst:normal;font-stretch:var(--fst);}#wowjob-ui .fs{--fs:normal;font-style:var(--fs);}#wowjob-ui .ffs{--ffs:normal;font-feature-settings:var(--ffs);}#wowjob-ui .fk{--fk:auto;font-kerning:var(--fk);}#wowjob-ui .flov{--flov:undefined;font-language-override:var(--flov);}#wowjob-ui .fos{--fos:auto;font-optical-sizing:var(--fos);}#wowjob-ui .fp{--fp:normal;font-palette:var(--fp);}#wowjob-ui .fsa{--fsa:none;font-size-adjust:var(--fsa);}#wowjob-ui .fssc{--fssc:auto;font-synthesis-small-caps:var(--fssc);}#wowjob-ui .fss{--fss:auto;font-synthesis-style:var(--fss);}#wowjob-ui .fsw{--fsw:auto;font-synthesis-weight:var(--fsw);}#wowjob-ui .fva{--fva:normal;font-variant-alternates:var(--fva);}#wowjob-ui .fvc{--fvc:normal;font-variant-caps:var(--fvc);}#wowjob-ui .fvea{--fvea:normal;font-variant-east-asian:var(--fvea);}#wowjob-ui .fvl{--fvl:normal;font-variant-ligatures:var(--fvl);}#wowjob-ui .fvn{--fvn:normal;font-variant-numeric:var(--fvn);}#wowjob-ui .fvp{--fvp:normal;font-variant-position:var(--fvp);}#wowjob-ui .fvs{--fvs:normal;font-variation-settings:var(--fvs);}#wowjob-ui .fca{--fca:undefined;forced-color-adjust:var(--fca);}#wowjob-ui .gp{--gp:normal;gap:var(--gp);}#wowjob-ui .gac{--gac:auto;grid-auto-columns:var(--gac);}#wowjob-ui .gaf{--gaf:row;grid-auto-flow:var(--gaf);}#wowjob-ui .gar{--gar:auto;grid-auto-rows:var(--gar);}#wowjob-ui .gc{--gc:undefined;grid-column:var(--gc);}#wowjob-ui .gr{--gr:undefined;grid-row:var(--gr);}#wowjob-ui .gt{--gt:undefined;grid-template:var(--gt);}#wowjob-ui .gtc{--gtc:none;grid-template-columns:var(--gtc);}#wowjob-ui .gtr{--gtr:none;grid-template-rows:var(--gtr);}#wowjob-ui .gta{--gta:none;grid-template-areas:var(--gta);}#wowjob-ui .h{--h:auto;height:var(--h);}#wowjob-ui .hc{--hc:auto;hyphenate-character:var(--hc);}#wowjob-ui .hy{--hy:manual;hyphens:var(--hy);}#wowjob-ui .io{--io:from-image;image-orientation:var(--io);}#wowjob-ui .ir{--ir:auto;image-rendering:var(--ir);}#wowjob-ui .is{--is:auto;inline-size:var(--is);}#wowjob-ui .i{--i:auto;inset:var(--i);}#wowjob-ui .ib{--ib:undefined;inset-block:var(--ib);}#wowjob-ui .ii{--ii:undefined;inset-inline:var(--ii);}#wowjob-ui .iso{--iso:auto;isolation:var(--iso);}#wowjob-ui .jc{--jc:normal;justify-content:var(--jc);}#wowjob-ui .ji{--ji:legacy;justify-items:var(--ji);}#wowjob-ui .js{--js:auto;justify-self:var(--js);}#wowjob-ui .lf{--lf:auto;left:var(--lf);}#wowjob-ui .r{--r:auto;right:var(--r);}#wowjob-ui .tp{--tp:auto;top:var(--tp);}#wowjob-ui .ls{--ls:normal;letter-spacing:var(--ls);}#wowjob-ui .lc{--lc:white;lighting-color:var(--lc);}#wowjob-ui .lb{--lb:auto;line-break:var(--lb);}#wowjob-ui .lh{--lh:normal;line-height:var(--lh);}#wowjob-ui .lst{--lst:undefined;list-style:var(--lst);}#wowjob-ui .mb{--mb:undefined;margin-block:var(--mb);}#wowjob-ui .mi{--mi:undefined;margin-inline:var(--mi);}#wowjob-ui .mk{--mk:none;mask:var(--mk);}#wowjob-ui .mc{--mc:border-box;mask-clip:var(--mc);}#wowjob-ui .ms{--ms:normal;math-style:var(--ms);}#wowjob-ui .mxbs{--mxbs:none;max-block-size:var(--mxbs);}#wowjob-ui .mxh{--mxh:none;max-height:var(--mxh);}#wowjob-ui .mxis{--mxis:none;max-inline-size:var(--mxis);}#wowjob-ui .mxw{--mxw:none;max-width:var(--mxw);}#wowjob-ui .mibs{--mibs:auto;min-block-size:var(--mibs);}#wowjob-ui .mih{--mih:auto;min-height:var(--mih);}#wowjob-ui .miis{--miis:auto;min-inline-size:var(--miis);}#wowjob-ui .miw{--miw:auto;min-width:var(--miw);}#wowjob-ui .mbm{--mbm:normal;mix-blend-mode:var(--mbm);}#wowjob-ui .of{--of:fill;object-fit:var(--of);}#wowjob-ui .op{--op:50% 50%;object-position:var(--op);}#wowjob-ui .oa{--oa:auto;offset-anchor:var(--oa);}#wowjob-ui .ofst{--ofst:undefined;offset:var(--ofst);}#wowjob-ui .o{--o:1;opacity:var(--o);}#wowjob-ui .or{--or:0;order:var(--or);}#wowjob-ui .ol{--ol:invert;outline:var(--ol);}#wowjob-ui .oo{--oo:0;outline-offset:var(--oo);}#wowjob-ui .ov{--ov:visible;overflow:var(--ov);}#wowjob-ui .osb{--osb:undefined;overscroll-behavior:var(--osb);}#wowjob-ui .osbb{--osbb:auto;overscroll-behavior-block:var(--osbb);}#wowjob-ui .osbi{--osbi:auto;overscroll-behavior-inline:var(--osbi);}#wowjob-ui .pp{--pp:none;perspective:var(--pp);}#wowjob-ui .po{--po:50% 50%;perspective-origin:var(--po);}#wowjob-ui .pc{--pc:normal;place-content:var(--pc);}#wowjob-ui .pi{--pi:normal;place-items:var(--pi);}#wowjob-ui .ps{--ps:auto;place-self:var(--ps);}#wowjob-ui .pe{--pe:auto;pointer-events:var(--pe);}#wowjob-ui .pos{--pos:static;position:var(--pos);}#wowjob-ui .q{--q:auto;quotes:var(--q);}#wowjob-ui .rs{--rs:none;resize:var(--rs);}#wowjob-ui .rt{--rt:none;rotate:var(--rt);}#wowjob-ui .ra{--ra:space-around;ruby-align:var(--ra);}#wowjob-ui .rp{--rp:over;ruby-position:var(--rp);}#wowjob-ui .s{--s:1;scale:var(--s);}#wowjob-ui .sb{--sb:auto;scroll-behavior:var(--sb);}#wowjob-ui .sm{--sm:0;scroll-margin:var(--sm);}#wowjob-ui .sp{--sp:0;scroll-padding:var(--sp);}#wowjob-ui .ssa{--ssa:none;scroll-snap-align:var(--ssa);}#wowjob-ui .sss{--sss:normal;scroll-snap-stop:var(--sss);}#wowjob-ui .sst{--sst:none;scroll-snap-type:var(--sst);}#wowjob-ui .st{--st:undefined;scroll-timeline:var(--st);}#wowjob-ui .sta{--sta:undefined;scroll-timeline-axis:var(--sta);}#wowjob-ui .stn{--stn:undefined;scroll-timeline-name:var(--stn);}#wowjob-ui .sc{--sc:undefined;scrollbar-color:var(--sc);}#wowjob-ui .sg{--sg:auto;scrollbar-gutter:var(--sg);}#wowjob-ui .sw{--sw:auto;scrollbar-width:var(--sw);}#wowjob-ui .sit{--sit:0;shape-image-threshold:var(--sit);}#wowjob-ui .smg{--smg:0;shape-margin:var(--smg);}#wowjob-ui .so{--so:none;shape-outside:var(--so);}#wowjob-ui .sr{--sr:auto;shape-rendering:var(--sr);}#wowjob-ui .stc{--stc:black;stop-color:var(--stc);}#wowjob-ui .sto{--sto:1;stop-opacity:var(--sto);}#wowjob-ui .str{--str:none;stroke:var(--str);}#wowjob-ui .sda{--sda:none;stroke-dasharray:var(--sda);}#wowjob-ui .sdo{--sdo:0;stroke-dashoffset:var(--sdo);}#wowjob-ui .slc{--slc:butt;stroke-linecap:var(--slc);}#wowjob-ui .slj{--slj:miter;stroke-linejoin:var(--slj);}#wowjob-ui .sml{--sml:4;stroke-miterlimit:var(--sml);}#wowjob-ui .sop{--sop:1;stroke-opacity:var(--sop);}#wowjob-ui .swi{--swi:1;stroke-width:var(--swi);}#wowjob-ui .txs{--txs:8;tab-size:var(--txs);}#wowjob-ui .tl{--tl:auto;table-layout:var(--tl);}#wowjob-ui .ta{--ta:start;text-align:var(--ta);}#wowjob-ui .tal{--tal:auto;text-align-last:var(--tal);}#wowjob-ui .tan{--tan:start;text-anchor:var(--tan);}#wowjob-ui .tcu{--tcu:none;text-combine-upright:var(--tcu);}#wowjob-ui .td{--td:undefined;text-decoration:var(--td);}#wowjob-ui .te{--te:undefined;text-emphasis:var(--te);}#wowjob-ui .ti{--ti:0;text-indent:var(--ti);}#wowjob-ui .tj{--tj:undefined;text-justify:var(--tj);}#wowjob-ui .to{--to:mixed;text-orientation:var(--to);}#wowjob-ui .tof{--tof:clip;text-overflow:var(--tof);}#wowjob-ui .tr{--tr:auto;text-rendering:var(--tr);}#wowjob-ui .tsh{--tsh:none;text-shadow:var(--tsh);}#wowjob-ui .tt{--tt:none;text-transform:var(--tt);}#wowjob-ui .tuo{--tuo:auto;text-underline-offset:var(--tuo);}#wowjob-ui .tup{--tup:auto;text-underline-position:var(--tup);}#wowjob-ui .tw{--tw:undefined;text-wrap:var(--tw);}#wowjob-ui .tws{--tws:normal;text-wrap-style:var(--tws);}#wowjob-ui .toa{--toa:auto;touch-action:var(--toa);}#wowjob-ui .tf{--tf:none;transform:var(--tf);}#wowjob-ui .tb{--tb:border-box;transform-box:var(--tb);}#wowjob-ui .tro{--tro:50% 50% 0;transform-origin:var(--tro);}#wowjob-ui .ts{--ts:flat;transform-style:var(--ts);}#wowjob-ui .tra{--tra:all 0s ease 0s;transition:var(--tra);}#wowjob-ui .tbe{--tbe:auto;transition-behavior:var(--tbe);}#wowjob-ui .t{--t:none;translate:var(--t);}#wowjob-ui .us{--us:auto;user-select:var(--us);}#wowjob-ui .ve{--ve:none;vector-effect:var(--ve);}#wowjob-ui .va{--va:baseline;vertical-align:var(--va);}#wowjob-ui .vtn{--vtn:undefined;view-transition-name:var(--vtn);}#wowjob-ui .vs{--vs:visible;visibility:var(--vs);}#wowjob-ui .ws{--ws:undefined;white-space:var(--ws);}#wowjob-ui .w{--w:auto;width:var(--w);}#wowjob-ui .wc{--wc:auto;will-change:var(--wc);}#wowjob-ui .wb{--wb:normal;word-break:var(--wb);}#wowjob-ui .wsp{--wsp:0;word-spacing:var(--wsp);}#wowjob-ui .wm{--wm:horizontal-tb;writing-mode:var(--wm);}#wowjob-ui .zi{--zi:auto;z-index:var(--zi);}#wowjob-ui .zm{--zm:auto;zoom:var(--zm);}@media screen and (min-width: 48rem) {#wowjob-ui .acc{--t-acc:var(--acc);accent-color:var(--t-acc);}#wowjob-ui .ac{--t-ac:var(--ac);align-content:var(--t-ac);}#wowjob-ui .ai{--t-ai:var(--ai);align-items:var(--t-ai);}#wowjob-ui .as{--t-as:var(--as);align-self:var(--t-as);}#wowjob-ui .a{--t-a:var(--a);animation:var(--t-a);}#wowjob-ui .ap{--t-ap:var(--ap);appearance:var(--t-ap);}#wowjob-ui .ar{--t-ar:var(--ar);aspect-ratio:var(--t-ar);}#wowjob-ui .bf{--t-bf:var(--bf);backdrop-filter:var(--t-bf);}#wowjob-ui .bv{--t-bv:var(--bv);backface-visibility:var(--t-bv);}#wowjob-ui .bg{--t-bg:var(--bg);background:var(--t-bg);}#wowjob-ui .bbm{--t-bbm:var(--bbm);background-blend-mode:var(--t-bbm);}#wowjob-ui .bc{--t-bc:var(--bc);background-clip:var(--t-bc);}#wowjob-ui .bo{--t-bo:var(--bo);background-origin:var(--t-bo);}#wowjob-ui .bz{--t-bz:var(--bz);block-size:var(--t-bz);}#wowjob-ui .m{--t-m:var(--m);margin:var(--t-m);}#wowjob-ui .p{--t-p:var(--p);padding:var(--t-p);}#wowjob-ui .b{--t-b:var(--b);border:var(--t-b);}#wowjob-ui .bb{--t-bb:var(--bb);border-block:var(--t-bb);}#wowjob-ui .bbs{--t-bbs:var(--bbs);border-block-start:var(--t-bbs);}#wowjob-ui .bbt{--t-bbt:var(--bbt);border-bottom:var(--t-bbt);}#wowjob-ui .bblr{--t-bblr:var(--bblr);border-bottom-left-radius:var(--t-bblr);}#wowjob-ui .bbrr{--t-bbrr:var(--bbrr);border-bottom-right-radius:var(--t-bbrr);}#wowjob-ui .bbe{--t-bbe:var(--bbe);border-block-end:var(--t-bbe);}#wowjob-ui .bdc{--t-bdc:var(--bdc);border-collapse:var(--t-bdc);}#wowjob-ui .beer{--t-beer:var(--beer);border-end-end-radius:var(--t-beer);}#wowjob-ui .besr{--t-besr:var(--besr);border-end-start-radius:var(--t-besr);}#wowjob-ui .bim{--t-bim:var(--bim);border-image:var(--t-bim);}#wowjob-ui .bi{--t-bi:var(--bi);border-inline:var(--t-bi);}#wowjob-ui .bl{--t-bl:var(--bl);border-left:var(--t-bl);}#wowjob-ui .bis{--t-bis:var(--bis);border-inline-start:var(--t-bis);}#wowjob-ui .bie{--t-bie:var(--bie);border-inline-end:var(--t-bie);}#wowjob-ui .bra{--t-bra:var(--bra);border-radius:var(--t-bra);}#wowjob-ui .br{--t-br:var(--br);border-right:var(--t-br);}#wowjob-ui .bw{--t-bw:var(--bw);border-width:var(--t-bw);}#wowjob-ui .bds{--t-bds:var(--bds);border-style:var(--t-bds);}#wowjob-ui .bser{--t-bser:var(--bser);border-start-end-radius:var(--t-bser);}#wowjob-ui .bssr{--t-bssr:var(--bssr);border-start-start-radius:var(--t-bssr);}#wowjob-ui .bdt{--t-bdt:var(--bdt);border-top:var(--t-bdt);}#wowjob-ui .btlr{--t-btlr:var(--btlr);border-top-left-radius:var(--t-btlr);}#wowjob-ui .btrr{--t-btrr:var(--btrr);border-top-right-radius:var(--t-btrr);}#wowjob-ui .bt{--t-bt:var(--bt);bottom:var(--t-bt);}#wowjob-ui .bs{--t-bs:var(--bs);box-shadow:var(--t-bs);}#wowjob-ui .bsz{--t-bsz:var(--bsz);box-sizing:var(--t-bsz);}#wowjob-ui .ba{--t-ba:var(--ba);break-after:var(--t-ba);}#wowjob-ui .bbf{--t-bbf:var(--bbf);break-before:var(--t-bbf);}#wowjob-ui .bbi{--t-bbi:var(--bbi);break-inside:var(--t-bbi);}#wowjob-ui .cps{--t-cps:var(--cps);caption-side:var(--t-cps);}#wowjob-ui .crc{--t-crc:var(--crc);caret-color:var(--t-crc);}#wowjob-ui .clr{--t-clr:var(--clr);clear:var(--t-clr);}#wowjob-ui .cl{--t-cl:var(--cl);clip:var(--t-cl);}#wowjob-ui .clp{--t-clp:var(--clp);clip-path:var(--t-clp);}#wowjob-ui .c{--t-c:var(--c);color:var(--t-c);}#wowjob-ui .ci{--t-ci:var(--ci);color-interpolation:var(--t-ci);}#wowjob-ui .cif{--t-cif:var(--cif);color-interpolation-filters:var(--t-cif);}#wowjob-ui .cs{--t-cs:var(--cs);color-scheme:var(--t-cs);}#wowjob-ui .cc{--t-cc:var(--cc);column-count:var(--t-cc);}#wowjob-ui .cf{--t-cf:var(--cf);column-fill:var(--t-cf);}#wowjob-ui .cg{--t-cg:var(--cg);column-gap:var(--t-cg);}#wowjob-ui .cr{--t-cr:var(--cr);column-rule:var(--t-cr);}#wowjob-ui .csp{--t-csp:var(--csp);column-span:var(--t-csp);}#wowjob-ui .cw{--t-cw:var(--cw);column-width:var(--t-cw);}#wowjob-ui .ctn{--t-ctn:var(--ctn);contain:var(--t-ctn);}#wowjob-ui .cib{--t-cib:var(--cib);contain-intrinsic-block-size:var(--t-cib);}#wowjob-ui .cih{--t-cih:var(--cih);contain-intrinsic-height:var(--t-cih);}#wowjob-ui .ciis{--t-ciis:var(--ciis);contain-intrinsic-inline-size:var(--t-ciis);}#wowjob-ui .cis{--t-cis:var(--cis);contain-intrinsic-size:var(--t-cis);}#wowjob-ui .ciw{--t-ciw:var(--ciw);contain-intrinsic-width:var(--t-ciw);}#wowjob-ui .cn{--t-cn:var(--cn);container:var(--t-cn);}#wowjob-ui .cnt{--t-cnt:var(--cnt);content:var(--t-cnt);}#wowjob-ui .cv{--t-cv:var(--cv);content-visibility:var(--t-cv);}#wowjob-ui .cin{--t-cin:var(--cin);counter-increment:var(--t-cin);}#wowjob-ui .cre{--t-cre:var(--cre);counter-reset:var(--t-cre);}#wowjob-ui .cse{--t-cse:var(--cse);counter-set:var(--t-cse);}#wowjob-ui .cur{--t-cur:var(--cur);cursor:var(--t-cur);}#wowjob-ui .cx{--t-cx:var(--cx);cx:var(--t-cx);}#wowjob-ui .cy{--t-cy:var(--cy);cy:var(--t-cy);}#wowjob-ui .d{--t-d:var(--d);d:var(--t-d);}#wowjob-ui .dir{--t-dir:var(--dir);direction:var(--t-dir);}#wowjob-ui .db{--t-db:var(--db);dominant-baseline:var(--t-db);}#wowjob-ui .ec{--t-ec:var(--ec);empty-cells:var(--t-ec);}#wowjob-ui .ds{--t-ds:var(--ds);display:var(--t-ds);}#wowjob-ui .fx{--t-fx:var(--fx);flex:var(--t-fx);}#wowjob-ui .fb{--t-fb:var(--fb);flex-basis:var(--t-fb);}#wowjob-ui .fd{--t-fd:var(--fd);flex-direction:var(--t-fd);}#wowjob-ui .fg{--t-fg:var(--fg);flex-grow:var(--t-fg);}#wowjob-ui .fsh{--t-fsh:var(--fsh);flex-shrink:var(--t-fsh);}#wowjob-ui .fv{--t-fv:var(--fv);font-variant:var(--t-fv);}#wowjob-ui .fw{--t-fw:var(--fw);font-weight:var(--t-fw);}#wowjob-ui .fwr{--t-fwr:var(--fwr);flex-wrap:var(--t-fwr);}#wowjob-ui .fiz{--t-fiz:var(--fiz);field-sizing:var(--t-fiz);}#wowjob-ui .fl{--t-fl:var(--fl);fill:var(--t-fl);}#wowjob-ui .fop{--t-fop:var(--fop);fill-opacity:var(--t-fop);}#wowjob-ui .fr{--t-fr:var(--fr);fill-rule:var(--t-fr);}#wowjob-ui .fil{--t-fil:var(--fil);filter:var(--t-fil);}#wowjob-ui .flo{--t-flo:var(--flo);float:var(--t-flo);}#wowjob-ui .fc{--t-fc:var(--fc);flood-color:var(--t-fc);}#wowjob-ui .fo{--t-fo:var(--fo);flood-opacity:var(--t-fo);}#wowjob-ui .fnt{--t-fnt:var(--fnt);font:var(--t-fnt);}#wowjob-ui .ff{--t-ff:var(--ff);font-family:var(--t-ff);}#wowjob-ui .fz{--t-fz:var(--fz);font-size:var(--t-fz);}#wowjob-ui .fst{--t-fst:var(--fst);font-stretch:var(--t-fst);}#wowjob-ui .fs{--t-fs:var(--fs);font-style:var(--t-fs);}#wowjob-ui .ffs{--t-ffs:var(--ffs);font-feature-settings:var(--t-ffs);}#wowjob-ui .fk{--t-fk:var(--fk);font-kerning:var(--t-fk);}#wowjob-ui .flov{--t-flov:var(--flov);font-language-override:var(--t-flov);}#wowjob-ui .fos{--t-fos:var(--fos);font-optical-sizing:var(--t-fos);}#wowjob-ui .fp{--t-fp:var(--fp);font-palette:var(--t-fp);}#wowjob-ui .fsa{--t-fsa:var(--fsa);font-size-adjust:var(--t-fsa);}#wowjob-ui .fssc{--t-fssc:var(--fssc);font-synthesis-small-caps:var(--t-fssc);}#wowjob-ui .fss{--t-fss:var(--fss);font-synthesis-style:var(--t-fss);}#wowjob-ui .fsw{--t-fsw:var(--fsw);font-synthesis-weight:var(--t-fsw);}#wowjob-ui .fva{--t-fva:var(--fva);font-variant-alternates:var(--t-fva);}#wowjob-ui .fvc{--t-fvc:var(--fvc);font-variant-caps:var(--t-fvc);}#wowjob-ui .fvea{--t-fvea:var(--fvea);font-variant-east-asian:var(--t-fvea);}#wowjob-ui .fvl{--t-fvl:var(--fvl);font-variant-ligatures:var(--t-fvl);}#wowjob-ui .fvn{--t-fvn:var(--fvn);font-variant-numeric:var(--t-fvn);}#wowjob-ui .fvp{--t-fvp:var(--fvp);font-variant-position:var(--t-fvp);}#wowjob-ui .fvs{--t-fvs:var(--fvs);font-variation-settings:var(--t-fvs);}#wowjob-ui .fca{--t-fca:var(--fca);forced-color-adjust:var(--t-fca);}#wowjob-ui .gp{--t-gp:var(--gp);gap:var(--t-gp);}#wowjob-ui .gac{--t-gac:var(--gac);grid-auto-columns:var(--t-gac);}#wowjob-ui .gaf{--t-gaf:var(--gaf);grid-auto-flow:var(--t-gaf);}#wowjob-ui .gar{--t-gar:var(--gar);grid-auto-rows:var(--t-gar);}#wowjob-ui .gc{--t-gc:var(--gc);grid-column:var(--t-gc);}#wowjob-ui .gr{--t-gr:var(--gr);grid-row:var(--t-gr);}#wowjob-ui .gt{--t-gt:var(--gt);grid-template:var(--t-gt);}#wowjob-ui .gtc{--t-gtc:var(--gtc);grid-template-columns:var(--t-gtc);}#wowjob-ui .gtr{--t-gtr:var(--gtr);grid-template-rows:var(--t-gtr);}#wowjob-ui .gta{--t-gta:var(--gta);grid-template-areas:var(--t-gta);}#wowjob-ui .h{--t-h:var(--h);height:var(--t-h);}#wowjob-ui .hc{--t-hc:var(--hc);hyphenate-character:var(--t-hc);}#wowjob-ui .hy{--t-hy:var(--hy);hyphens:var(--t-hy);}#wowjob-ui .io{--t-io:var(--io);image-orientation:var(--t-io);}#wowjob-ui .ir{--t-ir:var(--ir);image-rendering:var(--t-ir);}#wowjob-ui .is{--t-is:var(--is);inline-size:var(--t-is);}#wowjob-ui .i{--t-i:var(--i);inset:var(--t-i);}#wowjob-ui .ib{--t-ib:var(--ib);inset-block:var(--t-ib);}#wowjob-ui .ii{--t-ii:var(--ii);inset-inline:var(--t-ii);}#wowjob-ui .iso{--t-iso:var(--iso);isolation:var(--t-iso);}#wowjob-ui .jc{--t-jc:var(--jc);justify-content:var(--t-jc);}#wowjob-ui .ji{--t-ji:var(--ji);justify-items:var(--t-ji);}#wowjob-ui .js{--t-js:var(--js);justify-self:var(--t-js);}#wowjob-ui .lf{--t-lf:var(--lf);left:var(--t-lf);}#wowjob-ui .r{--t-r:var(--r);right:var(--t-r);}#wowjob-ui .tp{--t-tp:var(--tp);top:var(--t-tp);}#wowjob-ui .ls{--t-ls:var(--ls);letter-spacing:var(--t-ls);}#wowjob-ui .lc{--t-lc:var(--lc);lighting-color:var(--t-lc);}#wowjob-ui .lb{--t-lb:var(--lb);line-break:var(--t-lb);}#wowjob-ui .lh{--t-lh:var(--lh);line-height:var(--t-lh);}#wowjob-ui .lst{--t-lst:var(--lst);list-style:var(--t-lst);}#wowjob-ui .mb{--t-mb:var(--mb);margin-block:var(--t-mb);}#wowjob-ui .mi{--t-mi:var(--mi);margin-inline:var(--t-mi);}#wowjob-ui .mk{--t-mk:var(--mk);mask:var(--t-mk);}#wowjob-ui .mc{--t-mc:var(--mc);mask-clip:var(--t-mc);}#wowjob-ui .ms{--t-ms:var(--ms);math-style:var(--t-ms);}#wowjob-ui .mxbs{--t-mxbs:var(--mxbs);max-block-size:var(--t-mxbs);}#wowjob-ui .mxh{--t-mxh:var(--mxh);max-height:var(--t-mxh);}#wowjob-ui .mxis{--t-mxis:var(--mxis);max-inline-size:var(--t-mxis);}#wowjob-ui .mxw{--t-mxw:var(--mxw);max-width:var(--t-mxw);}#wowjob-ui .mibs{--t-mibs:var(--mibs);min-block-size:var(--t-mibs);}#wowjob-ui .mih{--t-mih:var(--mih);min-height:var(--t-mih);}#wowjob-ui .miis{--t-miis:var(--miis);min-inline-size:var(--t-miis);}#wowjob-ui .miw{--t-miw:var(--miw);min-width:var(--t-miw);}#wowjob-ui .mbm{--t-mbm:var(--mbm);mix-blend-mode:var(--t-mbm);}#wowjob-ui .of{--t-of:var(--of);object-fit:var(--t-of);}#wowjob-ui .op{--t-op:var(--op);object-position:var(--t-op);}#wowjob-ui .oa{--t-oa:var(--oa);offset-anchor:var(--t-oa);}#wowjob-ui .ofst{--t-ofst:var(--ofst);offset:var(--t-ofst);}#wowjob-ui .o{--t-o:var(--o);opacity:var(--t-o);}#wowjob-ui .or{--t-or:var(--or);order:var(--t-or);}#wowjob-ui .ol{--t-ol:var(--ol);outline:var(--t-ol);}#wowjob-ui .oo{--t-oo:var(--oo);outline-offset:var(--t-oo);}#wowjob-ui .ov{--t-ov:var(--ov);overflow:var(--t-ov);}#wowjob-ui .osb{--t-osb:var(--osb);overscroll-behavior:var(--t-osb);}#wowjob-ui .osbb{--t-osbb:var(--osbb);overscroll-behavior-block:var(--t-osbb);}#wowjob-ui .osbi{--t-osbi:var(--osbi);overscroll-behavior-inline:var(--t-osbi);}#wowjob-ui .pp{--t-pp:var(--pp);perspective:var(--t-pp);}#wowjob-ui .po{--t-po:var(--po);perspective-origin:var(--t-po);}#wowjob-ui .pc{--t-pc:var(--pc);place-content:var(--t-pc);}#wowjob-ui .pi{--t-pi:var(--pi);place-items:var(--t-pi);}#wowjob-ui .ps{--t-ps:var(--ps);place-self:var(--t-ps);}#wowjob-ui .pe{--t-pe:var(--pe);pointer-events:var(--t-pe);}#wowjob-ui .pos{--t-pos:var(--pos);position:var(--t-pos);}#wowjob-ui .q{--t-q:var(--q);quotes:var(--t-q);}#wowjob-ui .rs{--t-rs:var(--rs);resize:var(--t-rs);}#wowjob-ui .rt{--t-rt:var(--rt);rotate:var(--t-rt);}#wowjob-ui .ra{--t-ra:var(--ra);ruby-align:var(--t-ra);}#wowjob-ui .rp{--t-rp:var(--rp);ruby-position:var(--t-rp);}#wowjob-ui .s{--t-s:var(--s);scale:var(--t-s);}#wowjob-ui .sb{--t-sb:var(--sb);scroll-behavior:var(--t-sb);}#wowjob-ui .sm{--t-sm:var(--sm);scroll-margin:var(--t-sm);}#wowjob-ui .sp{--t-sp:var(--sp);scroll-padding:var(--t-sp);}#wowjob-ui .ssa{--t-ssa:var(--ssa);scroll-snap-align:var(--t-ssa);}#wowjob-ui .sss{--t-sss:var(--sss);scroll-snap-stop:var(--t-sss);}#wowjob-ui .sst{--t-sst:var(--sst);scroll-snap-type:var(--t-sst);}#wowjob-ui .st{--t-st:var(--st);scroll-timeline:var(--t-st);}#wowjob-ui .sta{--t-sta:var(--sta);scroll-timeline-axis:var(--t-sta);}#wowjob-ui .stn{--t-stn:var(--stn);scroll-timeline-name:var(--t-stn);}#wowjob-ui .sc{--t-sc:var(--sc);scrollbar-color:var(--t-sc);}#wowjob-ui .sg{--t-sg:var(--sg);scrollbar-gutter:var(--t-sg);}#wowjob-ui .sw{--t-sw:var(--sw);scrollbar-width:var(--t-sw);}#wowjob-ui .sit{--t-sit:var(--sit);shape-image-threshold:var(--t-sit);}#wowjob-ui .smg{--t-smg:var(--smg);shape-margin:var(--t-smg);}#wowjob-ui .so{--t-so:var(--so);shape-outside:var(--t-so);}#wowjob-ui .sr{--t-sr:var(--sr);shape-rendering:var(--t-sr);}#wowjob-ui .stc{--t-stc:var(--stc);stop-color:var(--t-stc);}#wowjob-ui .sto{--t-sto:var(--sto);stop-opacity:var(--t-sto);}#wowjob-ui .str{--t-str:var(--str);stroke:var(--t-str);}#wowjob-ui .sda{--t-sda:var(--sda);stroke-dasharray:var(--t-sda);}#wowjob-ui .sdo{--t-sdo:var(--sdo);stroke-dashoffset:var(--t-sdo);}#wowjob-ui .slc{--t-slc:var(--slc);stroke-linecap:var(--t-slc);}#wowjob-ui .slj{--t-slj:var(--slj);stroke-linejoin:var(--t-slj);}#wowjob-ui .sml{--t-sml:var(--sml);stroke-miterlimit:var(--t-sml);}#wowjob-ui .sop{--t-sop:var(--sop);stroke-opacity:var(--t-sop);}#wowjob-ui .swi{--t-swi:var(--swi);stroke-width:var(--t-swi);}#wowjob-ui .txs{--t-txs:var(--txs);tab-size:var(--t-txs);}#wowjob-ui .tl{--t-tl:var(--tl);table-layout:var(--t-tl);}#wowjob-ui .ta{--t-ta:var(--ta);text-align:var(--t-ta);}#wowjob-ui .tal{--t-tal:var(--tal);text-align-last:var(--t-tal);}#wowjob-ui .tan{--t-tan:var(--tan);text-anchor:var(--t-tan);}#wowjob-ui .tcu{--t-tcu:var(--tcu);text-combine-upright:var(--t-tcu);}#wowjob-ui .td{--t-td:var(--td);text-decoration:var(--t-td);}#wowjob-ui .te{--t-te:var(--te);text-emphasis:var(--t-te);}#wowjob-ui .ti{--t-ti:var(--ti);text-indent:var(--t-ti);}#wowjob-ui .tj{--t-tj:var(--tj);text-justify:var(--t-tj);}#wowjob-ui .to{--t-to:var(--to);text-orientation:var(--t-to);}#wowjob-ui .tof{--t-tof:var(--tof);text-overflow:var(--t-tof);}#wowjob-ui .tr{--t-tr:var(--tr);text-rendering:var(--t-tr);}#wowjob-ui .tsh{--t-tsh:var(--tsh);text-shadow:var(--t-tsh);}#wowjob-ui .tt{--t-tt:var(--tt);text-transform:var(--t-tt);}#wowjob-ui .tuo{--t-tuo:var(--tuo);text-underline-offset:var(--t-tuo);}#wowjob-ui .tup{--t-tup:var(--tup);text-underline-position:var(--t-tup);}#wowjob-ui .tw{--t-tw:var(--tw);text-wrap:var(--t-tw);}#wowjob-ui .tws{--t-tws:var(--tws);text-wrap-style:var(--t-tws);}#wowjob-ui .toa{--t-toa:var(--toa);touch-action:var(--t-toa);}#wowjob-ui .tf{--t-tf:var(--tf);transform:var(--t-tf);}#wowjob-ui .tb{--t-tb:var(--tb);transform-box:var(--t-tb);}#wowjob-ui .tro{--t-tro:var(--tro);transform-origin:var(--t-tro);}#wowjob-ui .ts{--t-ts:var(--ts);transform-style:var(--t-ts);}#wowjob-ui .tra{--t-tra:var(--tra);transition:var(--t-tra);}#wowjob-ui .tbe{--t-tbe:var(--tbe);transition-behavior:var(--t-tbe);}#wowjob-ui .t{--t-t:var(--t);translate:var(--t-t);}#wowjob-ui .us{--t-us:var(--us);user-select:var(--t-us);}#wowjob-ui .ve{--t-ve:var(--ve);vector-effect:var(--t-ve);}#wowjob-ui .va{--t-va:var(--va);vertical-align:var(--t-va);}#wowjob-ui .vtn{--t-vtn:var(--vtn);view-transition-name:var(--t-vtn);}#wowjob-ui .vs{--t-vs:var(--vs);visibility:var(--t-vs);}#wowjob-ui .ws{--t-ws:var(--ws);white-space:var(--t-ws);}#wowjob-ui .w{--t-w:var(--w);width:var(--t-w);}#wowjob-ui .wc{--t-wc:var(--wc);will-change:var(--t-wc);}#wowjob-ui .wb{--t-wb:var(--wb);word-break:var(--t-wb);}#wowjob-ui .wsp{--t-wsp:var(--wsp);word-spacing:var(--t-wsp);}#wowjob-ui .wm{--t-wm:var(--wm);writing-mode:var(--t-wm);}#wowjob-ui .zi{--t-zi:var(--zi);z-index:var(--t-zi);}#wowjob-ui .zm{--t-zm:var(--zm);zoom:var(--t-zm);}}@media screen and (min-width: 80rem) {#wowjob-ui .acc{--d-acc:var(--t-acc);accent-color:var(--d-acc);}#wowjob-ui .ac{--d-ac:var(--t-ac);align-content:var(--d-ac);}#wowjob-ui .ai{--d-ai:var(--t-ai);align-items:var(--d-ai);}#wowjob-ui .as{--d-as:var(--t-as);align-self:var(--d-as);}#wowjob-ui .a{--d-a:var(--t-a);animation:var(--d-a);}#wowjob-ui .ap{--d-ap:var(--t-ap);appearance:var(--d-ap);}#wowjob-ui .ar{--d-ar:var(--t-ar);aspect-ratio:var(--d-ar);}#wowjob-ui .bf{--d-bf:var(--t-bf);backdrop-filter:var(--d-bf);}#wowjob-ui .bv{--d-bv:var(--t-bv);backface-visibility:var(--d-bv);}#wowjob-ui .bg{--d-bg:var(--t-bg);background:var(--d-bg);}#wowjob-ui .bbm{--d-bbm:var(--t-bbm);background-blend-mode:var(--d-bbm);}#wowjob-ui .bc{--d-bc:var(--t-bc);background-clip:var(--d-bc);}#wowjob-ui .bo{--d-bo:var(--t-bo);background-origin:var(--d-bo);}#wowjob-ui .bz{--d-bz:var(--t-bz);block-size:var(--d-bz);}#wowjob-ui .m{--d-m:var(--t-m);margin:var(--d-m);}#wowjob-ui .p{--d-p:var(--t-p);padding:var(--d-p);}#wowjob-ui .b{--d-b:var(--t-b);border:var(--d-b);}#wowjob-ui .bb{--d-bb:var(--t-bb);border-block:var(--d-bb);}#wowjob-ui .bbs{--d-bbs:var(--t-bbs);border-block-start:var(--d-bbs);}#wowjob-ui .bbt{--d-bbt:var(--t-bbt);border-bottom:var(--d-bbt);}#wowjob-ui .bblr{--d-bblr:var(--t-bblr);border-bottom-left-radius:var(--d-bblr);}#wowjob-ui .bbrr{--d-bbrr:var(--t-bbrr);border-bottom-right-radius:var(--d-bbrr);}#wowjob-ui .bbe{--d-bbe:var(--t-bbe);border-block-end:var(--d-bbe);}#wowjob-ui .bdc{--d-bdc:var(--t-bdc);border-collapse:var(--d-bdc);}#wowjob-ui .beer{--d-beer:var(--t-beer);border-end-end-radius:var(--d-beer);}#wowjob-ui .besr{--d-besr:var(--t-besr);border-end-start-radius:var(--d-besr);}#wowjob-ui .bim{--d-bim:var(--t-bim);border-image:var(--d-bim);}#wowjob-ui .bi{--d-bi:var(--t-bi);border-inline:var(--d-bi);}#wowjob-ui .bl{--d-bl:var(--t-bl);border-left:var(--d-bl);}#wowjob-ui .bis{--d-bis:var(--t-bis);border-inline-start:var(--d-bis);}#wowjob-ui .bie{--d-bie:var(--t-bie);border-inline-end:var(--d-bie);}#wowjob-ui .bra{--d-bra:var(--t-bra);border-radius:var(--d-bra);}#wowjob-ui .br{--d-br:var(--t-br);border-right:var(--d-br);}#wowjob-ui .bw{--d-bw:var(--t-bw);border-width:var(--d-bw);}#wowjob-ui .bds{--d-bds:var(--t-bds);border-style:var(--d-bds);}#wowjob-ui .bser{--d-bser:var(--t-bser);border-start-end-radius:var(--d-bser);}#wowjob-ui .bssr{--d-bssr:var(--t-bssr);border-start-start-radius:var(--d-bssr);}#wowjob-ui .bdt{--d-bdt:var(--t-bdt);border-top:var(--d-bdt);}#wowjob-ui .btlr{--d-btlr:var(--t-btlr);border-top-left-radius:var(--d-btlr);}#wowjob-ui .btrr{--d-btrr:var(--t-btrr);border-top-right-radius:var(--d-btrr);}#wowjob-ui .bt{--d-bt:var(--t-bt);bottom:var(--d-bt);}#wowjob-ui .bs{--d-bs:var(--t-bs);box-shadow:var(--d-bs);}#wowjob-ui .bsz{--d-bsz:var(--t-bsz);box-sizing:var(--d-bsz);}#wowjob-ui .ba{--d-ba:var(--t-ba);break-after:var(--d-ba);}#wowjob-ui .bbf{--d-bbf:var(--t-bbf);break-before:var(--d-bbf);}#wowjob-ui .bbi{--d-bbi:var(--t-bbi);break-inside:var(--d-bbi);}#wowjob-ui .cps{--d-cps:var(--t-cps);caption-side:var(--d-cps);}#wowjob-ui .crc{--d-crc:var(--t-crc);caret-color:var(--d-crc);}#wowjob-ui .clr{--d-clr:var(--t-clr);clear:var(--d-clr);}#wowjob-ui .cl{--d-cl:var(--t-cl);clip:var(--d-cl);}#wowjob-ui .clp{--d-clp:var(--t-clp);clip-path:var(--d-clp);}#wowjob-ui .c{--d-c:var(--t-c);color:var(--d-c);}#wowjob-ui .ci{--d-ci:var(--t-ci);color-interpolation:var(--d-ci);}#wowjob-ui .cif{--d-cif:var(--t-cif);color-interpolation-filters:var(--d-cif);}#wowjob-ui .cs{--d-cs:var(--t-cs);color-scheme:var(--d-cs);}#wowjob-ui .cc{--d-cc:var(--t-cc);column-count:var(--d-cc);}#wowjob-ui .cf{--d-cf:var(--t-cf);column-fill:var(--d-cf);}#wowjob-ui .cg{--d-cg:var(--t-cg);column-gap:var(--d-cg);}#wowjob-ui .cr{--d-cr:var(--t-cr);column-rule:var(--d-cr);}#wowjob-ui .csp{--d-csp:var(--t-csp);column-span:var(--d-csp);}#wowjob-ui .cw{--d-cw:var(--t-cw);column-width:var(--d-cw);}#wowjob-ui .ctn{--d-ctn:var(--t-ctn);contain:var(--d-ctn);}#wowjob-ui .cib{--d-cib:var(--t-cib);contain-intrinsic-block-size:var(--d-cib);}#wowjob-ui .cih{--d-cih:var(--t-cih);contain-intrinsic-height:var(--d-cih);}#wowjob-ui .ciis{--d-ciis:var(--t-ciis);contain-intrinsic-inline-size:var(--d-ciis);}#wowjob-ui .cis{--d-cis:var(--t-cis);contain-intrinsic-size:var(--d-cis);}#wowjob-ui .ciw{--d-ciw:var(--t-ciw);contain-intrinsic-width:var(--d-ciw);}#wowjob-ui .cn{--d-cn:var(--t-cn);container:var(--d-cn);}#wowjob-ui .cnt{--d-cnt:var(--t-cnt);content:var(--d-cnt);}#wowjob-ui .cv{--d-cv:var(--t-cv);content-visibility:var(--d-cv);}#wowjob-ui .cin{--d-cin:var(--t-cin);counter-increment:var(--d-cin);}#wowjob-ui .cre{--d-cre:var(--t-cre);counter-reset:var(--d-cre);}#wowjob-ui .cse{--d-cse:var(--t-cse);counter-set:var(--d-cse);}#wowjob-ui .cur{--d-cur:var(--t-cur);cursor:var(--d-cur);}#wowjob-ui .cx{--d-cx:var(--t-cx);cx:var(--d-cx);}#wowjob-ui .cy{--d-cy:var(--t-cy);cy:var(--d-cy);}#wowjob-ui .d{--d-d:var(--t-d);d:var(--d-d);}#wowjob-ui .dir{--d-dir:var(--t-dir);direction:var(--d-dir);}#wowjob-ui .db{--d-db:var(--t-db);dominant-baseline:var(--d-db);}#wowjob-ui .ec{--d-ec:var(--t-ec);empty-cells:var(--d-ec);}#wowjob-ui .ds{--d-ds:var(--t-ds);display:var(--d-ds);}#wowjob-ui .fx{--d-fx:var(--t-fx);flex:var(--d-fx);}#wowjob-ui .fb{--d-fb:var(--t-fb);flex-basis:var(--d-fb);}#wowjob-ui .fd{--d-fd:var(--t-fd);flex-direction:var(--d-fd);}#wowjob-ui .fg{--d-fg:var(--t-fg);flex-grow:var(--d-fg);}#wowjob-ui .fsh{--d-fsh:var(--t-fsh);flex-shrink:var(--d-fsh);}#wowjob-ui .fv{--d-fv:var(--t-fv);font-variant:var(--d-fv);}#wowjob-ui .fw{--d-fw:var(--t-fw);font-weight:var(--d-fw);}#wowjob-ui .fwr{--d-fwr:var(--t-fwr);flex-wrap:var(--d-fwr);}#wowjob-ui .fiz{--d-fiz:var(--t-fiz);field-sizing:var(--d-fiz);}#wowjob-ui .fl{--d-fl:var(--t-fl);fill:var(--d-fl);}#wowjob-ui .fop{--d-fop:var(--t-fop);fill-opacity:var(--d-fop);}#wowjob-ui .fr{--d-fr:var(--t-fr);fill-rule:var(--d-fr);}#wowjob-ui .fil{--d-fil:var(--t-fil);filter:var(--d-fil);}#wowjob-ui .flo{--d-flo:var(--t-flo);float:var(--d-flo);}#wowjob-ui .fc{--d-fc:var(--t-fc);flood-color:var(--d-fc);}#wowjob-ui .fo{--d-fo:var(--t-fo);flood-opacity:var(--d-fo);}#wowjob-ui .fnt{--d-fnt:var(--t-fnt);font:var(--d-fnt);}#wowjob-ui .ff{--d-ff:var(--t-ff);font-family:var(--d-ff);}#wowjob-ui .fz{--d-fz:var(--t-fz);font-size:var(--d-fz);}#wowjob-ui .fst{--d-fst:var(--t-fst);font-stretch:var(--d-fst);}#wowjob-ui .fs{--d-fs:var(--t-fs);font-style:var(--d-fs);}#wowjob-ui .ffs{--d-ffs:var(--t-ffs);font-feature-settings:var(--d-ffs);}#wowjob-ui .fk{--d-fk:var(--t-fk);font-kerning:var(--d-fk);}#wowjob-ui .flov{--d-flov:var(--t-flov);font-language-override:var(--d-flov);}#wowjob-ui .fos{--d-fos:var(--t-fos);font-optical-sizing:var(--d-fos);}#wowjob-ui .fp{--d-fp:var(--t-fp);font-palette:var(--d-fp);}#wowjob-ui .fsa{--d-fsa:var(--t-fsa);font-size-adjust:var(--d-fsa);}#wowjob-ui .fssc{--d-fssc:var(--t-fssc);font-synthesis-small-caps:var(--d-fssc);}#wowjob-ui .fss{--d-fss:var(--t-fss);font-synthesis-style:var(--d-fss);}#wowjob-ui .fsw{--d-fsw:var(--t-fsw);font-synthesis-weight:var(--d-fsw);}#wowjob-ui .fva{--d-fva:var(--t-fva);font-variant-alternates:var(--d-fva);}#wowjob-ui .fvc{--d-fvc:var(--t-fvc);font-variant-caps:var(--d-fvc);}#wowjob-ui .fvea{--d-fvea:var(--t-fvea);font-variant-east-asian:var(--d-fvea);}#wowjob-ui .fvl{--d-fvl:var(--t-fvl);font-variant-ligatures:var(--d-fvl);}#wowjob-ui .fvn{--d-fvn:var(--t-fvn);font-variant-numeric:var(--d-fvn);}#wowjob-ui .fvp{--d-fvp:var(--t-fvp);font-variant-position:var(--d-fvp);}#wowjob-ui .fvs{--d-fvs:var(--t-fvs);font-variation-settings:var(--d-fvs);}#wowjob-ui .fca{--d-fca:var(--t-fca);forced-color-adjust:var(--d-fca);}#wowjob-ui .gp{--d-gp:var(--t-gp);gap:var(--d-gp);}#wowjob-ui .gac{--d-gac:var(--t-gac);grid-auto-columns:var(--d-gac);}#wowjob-ui .gaf{--d-gaf:var(--t-gaf);grid-auto-flow:var(--d-gaf);}#wowjob-ui .gar{--d-gar:var(--t-gar);grid-auto-rows:var(--d-gar);}#wowjob-ui .gc{--d-gc:var(--t-gc);grid-column:var(--d-gc);}#wowjob-ui .gr{--d-gr:var(--t-gr);grid-row:var(--d-gr);}#wowjob-ui .gt{--d-gt:var(--t-gt);grid-template:var(--d-gt);}#wowjob-ui .gtc{--d-gtc:var(--t-gtc);grid-template-columns:var(--d-gtc);}#wowjob-ui .gtr{--d-gtr:var(--t-gtr);grid-template-rows:var(--d-gtr);}#wowjob-ui .gta{--d-gta:var(--t-gta);grid-template-areas:var(--d-gta);}#wowjob-ui .h{--d-h:var(--t-h);height:var(--d-h);}#wowjob-ui .hc{--d-hc:var(--t-hc);hyphenate-character:var(--d-hc);}#wowjob-ui .hy{--d-hy:var(--t-hy);hyphens:var(--d-hy);}#wowjob-ui .io{--d-io:var(--t-io);image-orientation:var(--d-io);}#wowjob-ui .ir{--d-ir:var(--t-ir);image-rendering:var(--d-ir);}#wowjob-ui .is{--d-is:var(--t-is);inline-size:var(--d-is);}#wowjob-ui .i{--d-i:var(--t-i);inset:var(--d-i);}#wowjob-ui .ib{--d-ib:var(--t-ib);inset-block:var(--d-ib);}#wowjob-ui .ii{--d-ii:var(--t-ii);inset-inline:var(--d-ii);}#wowjob-ui .iso{--d-iso:var(--t-iso);isolation:var(--d-iso);}#wowjob-ui .jc{--d-jc:var(--t-jc);justify-content:var(--d-jc);}#wowjob-ui .ji{--d-ji:var(--t-ji);justify-items:var(--d-ji);}#wowjob-ui .js{--d-js:var(--t-js);justify-self:var(--d-js);}#wowjob-ui .lf{--d-lf:var(--t-lf);left:var(--d-lf);}#wowjob-ui .r{--d-r:var(--t-r);right:var(--d-r);}#wowjob-ui .tp{--d-tp:var(--t-tp);top:var(--d-tp);}#wowjob-ui .ls{--d-ls:var(--t-ls);letter-spacing:var(--d-ls);}#wowjob-ui .lc{--d-lc:var(--t-lc);lighting-color:var(--d-lc);}#wowjob-ui .lb{--d-lb:var(--t-lb);line-break:var(--d-lb);}#wowjob-ui .lh{--d-lh:var(--t-lh);line-height:var(--d-lh);}#wowjob-ui .lst{--d-lst:var(--t-lst);list-style:var(--d-lst);}#wowjob-ui .mb{--d-mb:var(--t-mb);margin-block:var(--d-mb);}#wowjob-ui .mi{--d-mi:var(--t-mi);margin-inline:var(--d-mi);}#wowjob-ui .mk{--d-mk:var(--t-mk);mask:var(--d-mk);}#wowjob-ui .mc{--d-mc:var(--t-mc);mask-clip:var(--d-mc);}#wowjob-ui .ms{--d-ms:var(--t-ms);math-style:var(--d-ms);}#wowjob-ui .mxbs{--d-mxbs:var(--t-mxbs);max-block-size:var(--d-mxbs);}#wowjob-ui .mxh{--d-mxh:var(--t-mxh);max-height:var(--d-mxh);}#wowjob-ui .mxis{--d-mxis:var(--t-mxis);max-inline-size:var(--d-mxis);}#wowjob-ui .mxw{--d-mxw:var(--t-mxw);max-width:var(--d-mxw);}#wowjob-ui .mibs{--d-mibs:var(--t-mibs);min-block-size:var(--d-mibs);}#wowjob-ui .mih{--d-mih:var(--t-mih);min-height:var(--d-mih);}#wowjob-ui .miis{--d-miis:var(--t-miis);min-inline-size:var(--d-miis);}#wowjob-ui .miw{--d-miw:var(--t-miw);min-width:var(--d-miw);}#wowjob-ui .mbm{--d-mbm:var(--t-mbm);mix-blend-mode:var(--d-mbm);}#wowjob-ui .of{--d-of:var(--t-of);object-fit:var(--d-of);}#wowjob-ui .op{--d-op:var(--t-op);object-position:var(--d-op);}#wowjob-ui .oa{--d-oa:var(--t-oa);offset-anchor:var(--d-oa);}#wowjob-ui .ofst{--d-ofst:var(--t-ofst);offset:var(--d-ofst);}#wowjob-ui .o{--d-o:var(--t-o);opacity:var(--d-o);}#wowjob-ui .or{--d-or:var(--t-or);order:var(--d-or);}#wowjob-ui .ol{--d-ol:var(--t-ol);outline:var(--d-ol);}#wowjob-ui .oo{--d-oo:var(--t-oo);outline-offset:var(--d-oo);}#wowjob-ui .ov{--d-ov:var(--t-ov);overflow:var(--d-ov);}#wowjob-ui .osb{--d-osb:var(--t-osb);overscroll-behavior:var(--d-osb);}#wowjob-ui .osbb{--d-osbb:var(--t-osbb);overscroll-behavior-block:var(--d-osbb);}#wowjob-ui .osbi{--d-osbi:var(--t-osbi);overscroll-behavior-inline:var(--d-osbi);}#wowjob-ui .pp{--d-pp:var(--t-pp);perspective:var(--d-pp);}#wowjob-ui .po{--d-po:var(--t-po);perspective-origin:var(--d-po);}#wowjob-ui .pc{--d-pc:var(--t-pc);place-content:var(--d-pc);}#wowjob-ui .pi{--d-pi:var(--t-pi);place-items:var(--d-pi);}#wowjob-ui .ps{--d-ps:var(--t-ps);place-self:var(--d-ps);}#wowjob-ui .pe{--d-pe:var(--t-pe);pointer-events:var(--d-pe);}#wowjob-ui .pos{--d-pos:var(--t-pos);position:var(--d-pos);}#wowjob-ui .q{--d-q:var(--t-q);quotes:var(--d-q);}#wowjob-ui .rs{--d-rs:var(--t-rs);resize:var(--d-rs);}#wowjob-ui .rt{--d-rt:var(--t-rt);rotate:var(--d-rt);}#wowjob-ui .ra{--d-ra:var(--t-ra);ruby-align:var(--d-ra);}#wowjob-ui .rp{--d-rp:var(--t-rp);ruby-position:var(--d-rp);}#wowjob-ui .s{--d-s:var(--t-s);scale:var(--d-s);}#wowjob-ui .sb{--d-sb:var(--t-sb);scroll-behavior:var(--d-sb);}#wowjob-ui .sm{--d-sm:var(--t-sm);scroll-margin:var(--d-sm);}#wowjob-ui .sp{--d-sp:var(--t-sp);scroll-padding:var(--d-sp);}#wowjob-ui .ssa{--d-ssa:var(--t-ssa);scroll-snap-align:var(--d-ssa);}#wowjob-ui .sss{--d-sss:var(--t-sss);scroll-snap-stop:var(--d-sss);}#wowjob-ui .sst{--d-sst:var(--t-sst);scroll-snap-type:var(--d-sst);}#wowjob-ui .st{--d-st:var(--t-st);scroll-timeline:var(--d-st);}#wowjob-ui .sta{--d-sta:var(--t-sta);scroll-timeline-axis:var(--d-sta);}#wowjob-ui .stn{--d-stn:var(--t-stn);scroll-timeline-name:var(--d-stn);}#wowjob-ui .sc{--d-sc:var(--t-sc);scrollbar-color:var(--d-sc);}#wowjob-ui .sg{--d-sg:var(--t-sg);scrollbar-gutter:var(--d-sg);}#wowjob-ui .sw{--d-sw:var(--t-sw);scrollbar-width:var(--d-sw);}#wowjob-ui .sit{--d-sit:var(--t-sit);shape-image-threshold:var(--d-sit);}#wowjob-ui .smg{--d-smg:var(--t-smg);shape-margin:var(--d-smg);}#wowjob-ui .so{--d-so:var(--t-so);shape-outside:var(--d-so);}#wowjob-ui .sr{--d-sr:var(--t-sr);shape-rendering:var(--d-sr);}#wowjob-ui .stc{--d-stc:var(--t-stc);stop-color:var(--d-stc);}#wowjob-ui .sto{--d-sto:var(--t-sto);stop-opacity:var(--d-sto);}#wowjob-ui .str{--d-str:var(--t-str);stroke:var(--d-str);}#wowjob-ui .sda{--d-sda:var(--t-sda);stroke-dasharray:var(--d-sda);}#wowjob-ui .sdo{--d-sdo:var(--t-sdo);stroke-dashoffset:var(--d-sdo);}#wowjob-ui .slc{--d-slc:var(--t-slc);stroke-linecap:var(--d-slc);}#wowjob-ui .slj{--d-slj:var(--t-slj);stroke-linejoin:var(--d-slj);}#wowjob-ui .sml{--d-sml:var(--t-sml);stroke-miterlimit:var(--d-sml);}#wowjob-ui .sop{--d-sop:var(--t-sop);stroke-opacity:var(--d-sop);}#wowjob-ui .swi{--d-swi:var(--t-swi);stroke-width:var(--d-swi);}#wowjob-ui .txs{--d-txs:var(--t-txs);tab-size:var(--d-txs);}#wowjob-ui .tl{--d-tl:var(--t-tl);table-layout:var(--d-tl);}#wowjob-ui .ta{--d-ta:var(--t-ta);text-align:var(--d-ta);}#wowjob-ui .tal{--d-tal:var(--t-tal);text-align-last:var(--d-tal);}#wowjob-ui .tan{--d-tan:var(--t-tan);text-anchor:var(--d-tan);}#wowjob-ui .tcu{--d-tcu:var(--t-tcu);text-combine-upright:var(--d-tcu);}#wowjob-ui .td{--d-td:var(--t-td);text-decoration:var(--d-td);}#wowjob-ui .te{--d-te:var(--t-te);text-emphasis:var(--d-te);}#wowjob-ui .ti{--d-ti:var(--t-ti);text-indent:var(--d-ti);}#wowjob-ui .tj{--d-tj:var(--t-tj);text-justify:var(--d-tj);}#wowjob-ui .to{--d-to:var(--t-to);text-orientation:var(--d-to);}#wowjob-ui .tof{--d-tof:var(--t-tof);text-overflow:var(--d-tof);}#wowjob-ui .tr{--d-tr:var(--t-tr);text-rendering:var(--d-tr);}#wowjob-ui .tsh{--d-tsh:var(--t-tsh);text-shadow:var(--d-tsh);}#wowjob-ui .tt{--d-tt:var(--t-tt);text-transform:var(--d-tt);}#wowjob-ui .tuo{--d-tuo:var(--t-tuo);text-underline-offset:var(--d-tuo);}#wowjob-ui .tup{--d-tup:var(--t-tup);text-underline-position:var(--d-tup);}#wowjob-ui .tw{--d-tw:var(--t-tw);text-wrap:var(--d-tw);}#wowjob-ui .tws{--d-tws:var(--t-tws);text-wrap-style:var(--d-tws);}#wowjob-ui .toa{--d-toa:var(--t-toa);touch-action:var(--d-toa);}#wowjob-ui .tf{--d-tf:var(--t-tf);transform:var(--d-tf);}#wowjob-ui .tb{--d-tb:var(--t-tb);transform-box:var(--d-tb);}#wowjob-ui .tro{--d-tro:var(--t-tro);transform-origin:var(--d-tro);}#wowjob-ui .ts{--d-ts:var(--t-ts);transform-style:var(--d-ts);}#wowjob-ui .tra{--d-tra:var(--t-tra);transition:var(--d-tra);}#wowjob-ui .tbe{--d-tbe:var(--t-tbe);transition-behavior:var(--d-tbe);}#wowjob-ui .t{--d-t:var(--t-t);translate:var(--d-t);}#wowjob-ui .us{--d-us:var(--t-us);user-select:var(--d-us);}#wowjob-ui .ve{--d-ve:var(--t-ve);vector-effect:var(--d-ve);}#wowjob-ui .va{--d-va:var(--t-va);vertical-align:var(--d-va);}#wowjob-ui .vtn{--d-vtn:var(--t-vtn);view-transition-name:var(--d-vtn);}#wowjob-ui .vs{--d-vs:var(--t-vs);visibility:var(--d-vs);}#wowjob-ui .ws{--d-ws:var(--t-ws);white-space:var(--d-ws);}#wowjob-ui .w{--d-w:var(--t-w);width:var(--d-w);}#wowjob-ui .wc{--d-wc:var(--t-wc);will-change:var(--d-wc);}#wowjob-ui .wb{--d-wb:var(--t-wb);word-break:var(--d-wb);}#wowjob-ui .wsp{--d-wsp:var(--t-wsp);word-spacing:var(--d-wsp);}#wowjob-ui .wm{--d-wm:var(--t-wm);writing-mode:var(--d-wm);}#wowjob-ui .zi{--d-zi:var(--t-zi);z-index:var(--d-zi);}#wowjob-ui .zm{--d-zm:var(--t-zm);zoom:var(--d-zm);}}
```

## CSS: src/css/reset.css

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    'Montserrat',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen-Sans,
    Ubuntu,
    Cantarell,
    'Helvetica Neue',
    sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-display: swap;
  font-synthesis: weight style;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
  text-rendering: optimizeLegibility; /* Improves rendering for legibility */
  -webkit-font-smoothing: antialiased; /* For macOS and iOS - makes fonts look smoother */
  -moz-osx-font-smoothing: grayscale; /* For Firefox on macOS - can improve font rendering */
  line-height: 1.5;
}

h1 {
  font-size: 2rem; /* ~32px, common for largest heading */
}
h2 {
  font-size: 1.5rem; /* ~24px, standard step down */
}
h3 {
  font-size: 1.25rem; /* ~20px, slightly smaller */
}
h4 {
  font-size: 1rem; /* ~16px, matches body text */
}
h5 {
  font-size: 0.875rem; /* ~14px, smaller for subheadings */
}
h6 {
  font-size: 0.75rem; /* ~12px, smallest heading */
}

ul,
ol {
  padding-left: 2.5rem;
}

html,
input,
textarea {
  font-size: 16px; /* Base font size */
}

button {
  background-color: transparent;
}

img {
  display: block;
}

pre:not(.toastui-editor pre) {
  --tch: 240;
  --tcs: 15%;
  --tcl: 95%;
  --bgcl: 15%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));

  padding: 1rem;
  border-width: 0.125rem;
  border-style: solid;
  width: fit-content;
  border-radius: 1rem;
  font-family: monospace;
  white-space: pre;
  overflow-y: hidden;
  overflow-x: scroll;
  max-width: calc(100vw - 1rem);
}

/* Visually hidden labels for accessibility, if not displayed visually */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

blockquote {
  border-left: 8px solid;
  padding-left: 1rem;
}
/* @media (min-width: 48rem) {} */

/* @media (min-width: 80rem) {} */

```

## TYPESCRIPT: src/index.ts

```typescript
// export utilities
export { getStyle } from './style'
export { convertToRem, isPx } from './util'

// type
export type { TCSSPropValue, TEnv, TStyle } from './style/property-map'

```

## CSS: src/reset.css

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    'Montserrat',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen-Sans,
    Ubuntu,
    Cantarell,
    'Helvetica Neue',
    sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-display: swap;
  font-synthesis: weight style;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
  text-rendering: optimizeLegibility; /* Improves rendering for legibility */
  -webkit-font-smoothing: antialiased; /* For macOS and iOS - makes fonts look smoother */
  -moz-osx-font-smoothing: grayscale; /* For Firefox on macOS - can improve font rendering */
  line-height: 1.5;
}

h1 {
  font-size: 2rem; /* ~32px, common for largest heading */
}
h2 {
  font-size: 1.5rem; /* ~24px, standard step down */
}
h3 {
  font-size: 1.25rem; /* ~20px, slightly smaller */
}
h4 {
  font-size: 1rem; /* ~16px, matches body text */
}
h5 {
  font-size: 0.875rem; /* ~14px, smaller for subheadings */
}
h6 {
  font-size: 0.75rem; /* ~12px, smallest heading */
}

ul,
ol {
  padding-left: 2.5rem;
}

html,
input,
textarea {
  font-size: 16px; /* Base font size */
}

button {
  background-color: transparent;
}

img {
  display: block;
}

pre:not(.toastui-editor pre) {
  --tch: 240;
  --tcs: 15%;
  --tcl: 95%;
  --bgcl: 15%;
  --bdcl: 40%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));

  padding: 1rem;
  border-width: 0.125rem;
  border-style: solid;
  width: fit-content;
  border-radius: 1rem;
  font-family: monospace;
  white-space: pre;
  overflow-y: hidden;
  overflow-x: scroll;
  max-width: calc(100vw - 1rem);
}

/* Visually hidden labels for accessibility, if not displayed visually */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

blockquote {
  border-left: 8px solid;
  padding-left: 1rem;
}
/* @media (min-width: 48rem) {} */

/* @media (min-width: 80rem) {} */

```

## TYPESCRIPT: src/style/default-value-map.ts

```typescript
export const cssDefaultPropertyValueMap = {
  accentColor: 'auto',
  alignContent: 'normal',
  alignItems: 'normal',
  alignSelf: 'auto',
  animation: 'none',
  animationComposition: 'replace',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationDuration: '0s',
  animationFillMode: 'none',
  animationIterationCount: 1,
  animationName: 'none',
  animationPlayState: 'running',
  animationTimingFunction: 'ease',
  appearance: 'none',
  aspectRatio: 'auto',
  backdropFilter: 'none',
  backfaceVisibility: 'visible',
  background: 'transparent',
  backgroundAttachment: 'scroll',
  backgroundBlendMode: 'normal',
  backgroundClip: 'border-box',
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  backgroundOrigin: 'padding-box',
  backgroundPositionX: 0,
  backgroundPositionY: 0,
  backgroundRepeat: 'repeat',
  backgroundSize: 'auto',
  blockSize: 'auto',
  border: 'medium none currentcolor',
  borderBlockEnd: 'none',
  borderBlockEndColor: 'currentcolor',
  borderBlockEndStyle: 'none',
  borderBlockEndWidth: 'medium',
  borderBlockStart: 'none',
  borderBlockStartColor: 'currentcolor',
  borderBlockStartStyle: 'none',
  borderBlockStartWidth: 'medium',
  borderBottomColor: 'currentcolor',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottomStyle: 'none',
  borderBottomWidth: 'medium',
  borderCollapse: 'separate',
  borderEndEndRadius: 0,
  borderEndStartRadius: 0,
  borderImageOutset: 0,
  borderImageRepeat: 'stretch',
  borderImageSlice: '100%',
  borderImageSource: 'none',
  borderImageWidth: 1,
  borderInlineEndColor: 'currentcolor',
  borderInlineEndStyle: 'none',
  borderInlineEndWidth: 'medium',
  borderInlineStartColor: 'currentcolor',
  borderInlineStartStyle: 'none',
  borderInlineStartWidth: 'medium',
  borderLeftColor: 'currentcolor',
  borderLeftStyle: 'none',
  borderLeftWidth: 'medium',
  borderRightColor: 'currentcolor',
  borderRightStyle: 'none',
  borderRightWidth: 'medium',
  borderStartEndRadius: 0,
  borderStartStartRadius: 0,
  borderStyle: 'none',
  borderTopColor: 'currentcolor',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderTopStyle: 'none',
  borderTopWidth: 'medium',
  borderWidth: 0,
  bottom: 'auto',
  boxShadow: 'none',
  boxSizing: 'content-box',
  breakAfter: 'auto',
  breakBefore: 'auto',
  breakInside: 'auto',
  captionSide: 'top',
  caretColor: 'auto',
  clear: 'none',
  clip: 'auto',
  clipPath: 'none',
  clipRule: 'nonzero',
  color: 'currentcolor',
  colorInterpolation: 'srgb',
  colorInterpolationFilters: 'linearrgb',
  colorScheme: 'normal',
  columnCount: 'auto',
  columnFill: 'balance',
  columnGap: 'normal',
  columnRuleColor: 'currentcolor',
  columnRuleStyle: 'none',
  columnRuleWidth: 'medium',
  columnSpan: 'none',
  columnWidth: 'auto',
  contain: 'none',
  containIntrinsicBlockSize: 'auto',
  containIntrinsicHeight: 'auto',
  containIntrinsicInlineSize: 'auto',
  containIntrinsicWidth: 'auto',
  containerName: 'none',
  containerType: 'none',
  content: 'normal',
  contentVisibility: 'visible',
  counterIncrement: 'none',
  counterReset: 'none',
  counterSet: 'none',
  cursor: 'auto',
  direction: 'ltr',
  display: 'inline',
  dominantBaseline: 'auto',
  emptyCells: 'show',
  fill: 'black',
  fillOpacity: 1,
  fillRule: 'nonzero',
  filter: 'none',
  flex: '0 1 auto',
  flexBasis: 'auto',
  flexDirection: 'row',
  flexGrow: 0,
  flexShrink: 1,
  flexWrap: 'nowrap',
  float: 'none',
  floodColor: 'black',
  floodOpacity: 1,
  font: '1rem sans-serif',
  fontFamily: 'serif',
  fontFeatureSettings: 'normal',
  fontKerning: 'auto',
  fontOpticalSizing: 'auto',
  fontPalette: 'normal',
  fontSize: 16,
  fontSizeAdjust: 'none',
  fontStretch: 'normal',
  fontStyle: 'normal',
  fontSynthesisSmallCaps: 'auto',
  fontSynthesisStyle: 'auto',
  fontSynthesisWeight: 'auto',
  fontVariantAlternates: 'normal',
  fontVariantCaps: 'normal',
  fontVariantEastAsian: 'normal',
  fontVariantLigatures: 'normal',
  fontVariantNumeric: 'normal',
  fontVariantPosition: 'normal',
  fontVariationSettings: 'normal',
  fontWeight: 400,
  gap: 'normal',
  gridAutoColumns: 'auto',
  gridAutoFlow: 'row',
  gridAutoRows: 'auto',
  gridColumnEnd: 'auto',
  gridColumnStart: 'auto',
  gridRowEnd: 'auto',
  gridRowStart: 'auto',
  gridTemplateAreas: 'none',
  gridTemplateColumns: 'none',
  gridTemplateRows: 'none',
  height: 'auto',
  hyphenateCharacter: 'auto',
  hyphens: 'manual',
  imageOrientation: 'from-image',
  imageRendering: 'auto',
  inlineSize: 'auto',
  inset: 'auto',
  insetBlockEnd: 'auto',
  insetBlockStart: 'auto',
  insetInlineEnd: 'auto',
  insetInlineStart: 'auto',
  isolation: 'auto',
  justifyContent: 'normal',
  justifyItems: 'legacy',
  justifySelf: 'auto',
  left: 'auto',
  letterSpacing: 'normal',
  lightingColor: 'white',
  lineBreak: 'auto',
  lineHeight: 'normal',
  listStyleImage: 'none',
  listStylePosition: 'outside',
  listStyleType: 'disc',
  margin: 0,
  marginBlockEnd: 0,
  marginBlockStart: 0,
  marginBottom: 0,
  marginInlineEnd: 0,
  marginInlineStart: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  markerEnd: 'none',
  markerMid: 'none',
  markerStart: 'none',
  mask: 'none',
  maskClip: 'border-box',
  maskComposite: 'add',
  maskImage: 'none',
  maskMode: 'match-source',
  maskOrigin: 'border-box',
  maskRepeat: 'no-repeat',
  maskSize: 'auto',
  maskType: 'luminance',
  mathStyle: 'normal',
  maxBlockSize: 'none',
  maxHeight: 'none',
  maxInlineSize: 'none',
  maxWidth: 'none',
  minBlockSize: 'auto',
  minHeight: 'auto',
  minInlineSize: 'auto',
  minWidth: 'auto',
  mixBlendMode: 'normal',
  objectFit: 'fill',
  objectPosition: '50% 50%',
  offsetAnchor: 'auto',
  offsetDistance: 0,
  offsetPath: 'none',
  offsetPosition: 'auto',
  offsetRotate: 'auto',
  opacity: 1,
  order: 0,
  outline: 'invert',
  outlineColor: 'invert',
  outlineOffset: 0,
  outlineStyle: 'none',
  outlineWidth: 'medium',
  overflow: 'visible',
  overflowWrap: 'normal',
  overflowX: 'visible',
  overflowY: 'visible',
  overscrollBehaviorBlock: 'auto',
  overscrollBehaviorInline: 'auto',
  overscrollBehaviorX: 'auto',
  overscrollBehaviorY: 'auto',
  padding: 0,
  paddingBlockEnd: 0,
  paddingBlockStart: 0,
  paddingBottom: 0,
  paddingInlineEnd: 0,
  paddingInlineStart: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  pageBreakAfter: 'auto',
  pageBreakBefore: 'auto',
  pageBreakInside: 'auto',
  paintOrder: 'normal',
  perspective: 'none',
  perspectiveOrigin: '50% 50%',
  placeItems: 'normal',
  placeContent: 'normal',
  placeSelf: 'auto',
  pointerEvents: 'auto',
  position: 'static',
  quotes: 'auto',
  resize: 'none',
  right: 'auto',
  rotate: 'none',
  rowGap: 'normal',
  rubyAlign: 'space-around',
  rubyPosition: 'over',
  scale: 1,
  scrollBehavior: 'auto',
  scrollMargin: 0,
  scrollMarginBlockEnd: 0,
  scrollMarginBlockStart: 0,
  scrollMarginBottom: 0,
  scrollMarginInlineEnd: 0,
  scrollMarginInlineStart: 0,
  scrollMarginLeft: 0,
  scrollMarginRight: 0,
  scrollMarginTop: 0,
  scrollPadding: 0,
  scrollPaddingBlockEnd: 0,
  scrollPaddingBlockStart: 0,
  scrollPaddingBottom: 0,
  scrollPaddingInlineEnd: 0,
  scrollPaddingInlineStart: 0,
  scrollPaddingLeft: 0,
  scrollPaddingRight: 0,
  scrollPaddingTop: 0,
  scrollSnapAlign: 'none',
  scrollSnapStop: 'normal',
  scrollSnapType: 'none',
  scrollbarGutter: 'auto',
  scrollbarWidth: 'auto',
  shapeImageThreshold: 0,
  shapeMargin: 0,
  shapeOutside: 'none',
  shapeRendering: 'auto',
  size: 'auto',
  stopColor: 'black',
  stopOpacity: 1,
  stroke: 'none',
  strokeDasharray: 'none',
  strokeDashoffset: 0,
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
  strokeMiterlimit: 4,
  strokeOpacity: 1,
  strokeWidth: 1,
  tabSize: 8,
  tableLayout: 'auto',
  textAlign: 'start',
  textAlignLast: 'auto',
  textAnchor: 'start',
  textCombineUpright: 'none',
  textDecorationColor: 'currentcolor',
  textDecorationLine: 'none',
  textDecorationSkipInk: 'auto',
  textDecorationStyle: 'solid',
  textDecorationThickness: 'auto',
  textEmphasisColor: 'currentcolor',
  textEmphasisPosition: 'over right',
  textEmphasisStyle: 'none',
  textIndent: 0,
  textOrientation: 'mixed',
  textOverflow: 'clip',
  textRendering: 'auto',
  textShadow: 'none',
  textTransform: 'none',
  textUnderlineOffset: 'auto',
  textUnderlinePosition: 'auto',
  textWrapMode: 'normal',
  textWrapStyle: 'normal',
  top: 'auto',
  touchAction: 'auto',
  transform: 'none',
  transformBox: 'border-box',
  transformOrigin: '50% 50% 0',
  transformStyle: 'flat',
  transition: 'all 0s ease 0s',
  transitionBehavior: 'auto',
  transitionDelay: '0s',
  transitionDuration: '0s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
  translate: 'none',
  unicodeBidi: 'normal',
  userSelect: 'auto',
  vectorEffect: 'none',
  verticalAlign: 'baseline',
  visibility: 'visible',
  whiteSpaceCollapse: 'preserve',
  width: 'auto',
  willChange: 'auto',
  wordBreak: 'normal',
  wordSpacing: 0,
  writingMode: 'horizontal-tb',
  zIndex: 'auto',
  zoom: 'auto',
}

```

## TYPESCRIPT: src/style/get-style.ts

```typescript
import { propertyMap } from './property-map'
import type { TCSSPropValue, TStyle } from './property-map'

export const getStyle = ({
  desktop,
  mobile,
  tablet,
  className = '',
  env = 'development',
  theme,
  styleAsString = false,
}: TStyle) => {
  const classSet = new Set(className.split(' '))

  const rowMap = new Map()
  const styleMap = new Map(Object.entries({ mobile, tablet, desktop }))

  // theme
  if (theme) {
    classSet.add(`theme-${theme}`)
  }

  for (const [key, styleData] of styleMap) {
    const responsivePrefix = key === 'mobile' ? '' : `${key[0]}-`

    if (!styleData) {
      continue
    }

    if (key !== 'mobile') {
      classSet.add(key)
    }

    for (const cssProperty in styleData) {
      if (cssProperty in propertyMap) {
        const cssKey = cssProperty as keyof TCSSPropValue
        const className = propertyMap[cssKey].className[env]
        const propertyValue = propertyMap[cssKey].normalize(styleData[cssKey])

        classSet.add(className)
        rowMap.set(`--${responsivePrefix}${className}`, propertyValue)
      }
    }
  }

  return {
    className: Array.from(classSet).join(' ').trim(),
    style: styleAsString
      ? Array.from(rowMap)
          .map(([prop, value]) => `${prop}:${value}`)
          .join(';')
      : Object.fromEntries(rowMap),
  }
}

```

## TYPESCRIPT: src/style/index.ts

```typescript
export { getStyle } from './get-style'

```

## TYPESCRIPT: src/style/property-map.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { propertyMap } from './property-map'

describe('propertyMap', () => {
  test('should have unique prod values in className', () => {
    const prodValues = Object.values(propertyMap).map(
      (entry) => entry.className.production
    )

    const uniqueProdValues = new Set(prodValues)

    if (prodValues.length !== uniqueProdValues.size) {
      // Find duplicates
      const duplicates = prodValues.filter(
        (value, index, self) => self.indexOf(value) !== index
      )

      console.error('Duplicate prod values found:', [...new Set(duplicates)])
    }

    expect(prodValues.length).toBe(uniqueProdValues.size)
  })
})

```

## TYPESCRIPT: src/style/property-map.ts

```typescript
import {
  normalizeAccentColor,
  normalizeAlignContent,
  normalizeAlignItems,
  normalizeAlignSelf,
  normalizeAnimation,
  normalizeAppearance,
  normalizeAspectRatio,
  normalizeBackdropFilter,
  normalizeBackfaceVisibility,
  normalizeBackground,
  normalizeBackgroundBlendMode,
  normalizeBackgroundClip,
  normalizeBackgroundOrigin,
  normalizeBlockSize,
  normalizeBorder,
  normalizeBorderBlock,
  normalizeBorderBlockEnd,
  normalizeBorderBlockStart,
  normalizeBorderBottom,
  normalizeBorderBottomLeftRadius,
  normalizeBorderBottomRightRadius,
  normalizeBorderCollapse,
  normalizeBorderEndEndRadius,
  normalizeBorderEndStartRadius,
  normalizeBorderImage,
  normalizeBorderInlineEnd,
  normalizeBorderInlineStart,
  normalizeBorderLeft,
  normalizeBorderRadius,
  normalizeBorderRight,
  normalizeBorderStartEndRadius,
  normalizeBorderStartStartRadius,
  normalizeBorderStyle,
  normalizeBorderTop,
  normalizeBorderTopLeftRadius,
  normalizeBorderTopRightRadius,
  normalizeBorderWidth,
  normalizeBottom,
  normalizeBoxShadow,
  normalizeBoxSizing,
  normalizeBreakAfter,
  normalizeBreakBefore,
  normalizeBreakInside,
  normalizeCaptionSide,
  normalizeCaretColor,
  normalizeClear,
  normalizeClip,
  normalizeClipPath,
  normalizeColor,
  normalizeColorInterpolation,
  normalizeColorInterpolationFilters,
  normalizeColorScheme,
  normalizeColumnCount,
  normalizeColumnFill,
  normalizeColumnGap,
  normalizeColumnRule,
  normalizeColumnSpan,
  normalizeColumnWidth,
  normalizeContain,
  normalizeContainer,
  normalizeContainIntrinsicBlockSize,
  normalizeContainIntrinsicHeight,
  normalizeContainIntrinsicInlineSize,
  normalizeContainIntrinsicSize,
  normalizeContainIntrinsicWidth,
  normalizeContent,
  normalizeContentVisibility,
  normalizeCounterIncrement,
  normalizeCounterReset,
  normalizeCounterSet,
  normalizeCursor,
  normalizeCx,
  normalizeCy,
  normalizeD,
  normalizeDirection,
  normalizeDisplay,
  normalizeDominantBaseline,
  normalizeEmptyCells,
  normalizeFieldSizing,
  normalizeFill,
  normalizeFillOpacity,
  normalizeFillRule,
  normalizeFilter,
  normalizeFlex,
  normalizeFlexBasis,
  normalizeFlexDirection,
  normalizeFlexGrow,
  normalizeFlexShrink,
  normalizeFlexWrap,
  normalizeFloat,
  normalizeFloodColor,
  normalizeFloodOpacity,
  normalizeFont,
  normalizeFontFeatureSettings,
  normalizeFontKerning,
  normalizeFontLanguageOverride,
  normalizeFontOpticalSizing,
  normalizeFontPalette,
  normalizeFontSizeAdjust,
  normalizeFontSynthesisSmallCaps,
  normalizeFontSynthesisStyle,
  normalizeFontSynthesisWeight,
  normalizeFontVariantAlternates,
  normalizeFontVariantCaps,
  normalizeFontVariantEastAsian,
  normalizeFontVariantLigatures,
  normalizeFontVariantNumeric,
  normalizeFontVariantPosition,
  normalizeFontVariationSettings,
  normalizeForcedColorAdjust,
  normalizeGap,
  normalizeGridAutoColumns,
  normalizeGridAutoFlow,
  normalizeGridAutoRows,
  normalizeGridColumn,
  normalizeGridRow,
  normalizeGridTemplate,
  normalizeGridTemplateColumns,
  normalizeGridTemplateAreas,
  normalizeHeight,
  normalizeHyphenateCharacter,
  normalizeHyphens,
  normalizeImageOrientation,
  normalizeImageRendering,
  normalizeInlineSize,
  normalizeInset,
  normalizeInsetBlock,
  normalizeInsetInline,
  normalizeIsolation,
  normalizeJustifyContent,
  normalizeJustifyItems,
  normalizeJustifySelf,
  normalizeLeft,
  normalizeLetterSpacing,
  normalizeLightingColor,
  normalizeLineBreak,
  normalizeLineHeight,
  normalizeListStyle,
  normalizeMargin,
  normalizeMarginBlock,
  normalizeMarginInline,
  normalizeMask,
  normalizeMaskClip,
  normalizeMathStyle,
  normalizeMaxBlockSize,
  normalizeMaxHeight,
  normalizeMaxInlineSize,
  normalizeMaxWidth,
  normalizeMinBlockSize,
  normalizeMinHeight,
  normalizeMinInlineSize,
  normalizeMinWidth,
  normalizeMixBlendMode,
  normalizeObjectFit,
  normalizeObjectPosition,
  normalizeOffset,
  normalizeOffsetAnchor,
  normalizeOpacity,
  normalizeOrder,
  normalizeOutline,
  normalizeOutlineOffset,
  normalizeOverflow,
  normalizeOverscrollBehavior,
  normalizeOverscrollBehaviorBlock,
  normalizeOverscrollBehaviorInline,
  normalizePadding,
  normalizePerspective,
  normalizePerspectiveOrigin,
  normalizePlaceContent,
  normalizePlaceItems,
  normalizePlaceSelf,
  normalizePointerEvents,
  normalizePosition,
  normalizeQuotes,
  normalizeResize,
  normalizeRight,
  normalizeRotate,
  normalizeRubyAlign,
  normalizeRubyPosition,
  normalizeScale,
  normalizeScrollbarColor,
  normalizeScrollbarGutter,
  normalizeScrollbarWidth,
  normalizeScrollBehavior,
  normalizeScrollMargin,
  normalizeScrollPadding,
  normalizeScrollSnapAlign,
  normalizeScrollSnapStop,
  normalizeScrollSnapType,
  normalizeScrollTimeline,
  normalizeScrollTimelineAxis,
  normalizeScrollTimelineName,
  normalizeShapeImageThreshold,
  normalizeShapeMargin,
  normalizeShapeOutside,
  normalizeShapeRendering,
  normalizeStopColor,
  normalizeStopOpacity,
  normalizeStroke,
  normalizeStrokeDasharray,
  normalizeStrokeDashoffset,
  normalizeStrokeLinecap,
  normalizeStrokeLinejoin,
  normalizeStrokeMiterlimit,
  normalizeStrokeOpacity,
  normalizeStrokeWidth,
  normalizeTableLayout,
  normalizeTabSize,
  normalizeTextAlign,
  normalizeTextAlignLast,
  normalizeTextAnchor,
  normalizeTextCombineUpright,
  normalizeTextDecoration,
  normalizeTextEmphasis,
  normalizeTextIndent,
  normalizeTextJustify,
  normalizeTextOrientation,
  normalizeTextOverflow,
  normalizeTextRendering,
  normalizeTextShadow,
  normalizeTextTransform,
  normalizeTextUnderlineOffset,
  normalizeTextUnderlinePosition,
  normalizeTextWrap,
  normalizeTextWrapStyle,
  normalizeTop,
  normalizeTouchAction,
  normalizeTransform,
  normalizeTransformBox,
  normalizeTransformOrigin,
  normalizeTransformStyle,
  normalizeTransition,
  normalizeTransitionBehavior,
  normalizeTranslate,
  normalizeUserSelect,
  normalizeVectorEffect,
  normalizeVerticalAlign,
  normalizeViewTransitionName,
  normalizeVisibility,
  normalizeWhiteSpace,
  normalizeWidth,
  normalizeWillChange,
  normalizeWordBreak,
  normalizeWordSpacing,
  normalizeWritingMode,
  normalizeZIndex,
  normalizeZoom,
  normalizeGridTemplateRows,
  normalizeFontFamily,
  normalizeFontSize,
  normalizeFontStretch,
  normalizeFontStyle,
  normalizeFontVariant,
  normalizeFontWeight,
} from '../util'

import type {
  TBorder,
  TBorderWidth,
  TDisplay,
  TFlex,
  TFlexDirection,
  TMargin,
  TPadding,
  TBorderStyle,
  TFlexBasis,
  TFlexGrow,
  TFlexShrink,
  TFlexWrap,
  TAnimation,
  TBackground,
  TBorderImage,
  TBorderBlockStart,
  TBorderBlockEnd,
  TBorderBlock,
  TBorderInlineStart,
  TBorderInlineEnd,
  TBorderInline,
  TBorderRadius,
  TBorderBottom,
  TBorderBottomLeftRadius,
  TBorderBottomRightRadius,
  TBorderCollapse,
  TBorderEndEndRadius,
  TBorderEndStartRadius,
  TBorderTop,
  TBorderTopLeftRadius,
  TBorderTopRightRadius,
  TBorderLeft,
  TBorderRight,
  TBorderStartEndRadius,
  TBorderStartStartRadius,
  TBlockSize,
  TAspectRatio,
  TAppearance,
  TAccentColor,
  TAlignContent,
  TAlignItems,
  TAlignSelf,
  TBackdropFilter,
  TBackfaceVisibility,
  TBackgroundBlendMode,
  TBackgroundClip,
  TBackgroundOrigin,
  TBoxShadow,
  TBoxSizing,
  TBreakAfter,
  TBreakBefore,
  TBreakInside,
  TCaptionSide,
  TCaretColor,
  TClear,
  TClip,
  TClipPath,
  TColor,
  TColorInterpolation,
  TColorInterpolationFilters,
  TColorScheme,
  TColumnCount,
  TColumnFill,
  TColumnGap,
  TColumnRule,
  TColumnSpan,
  TColumnWidth,
  TContain,
  TContainIntrinsicBlockSize,
  TContainIntrinsicHeight,
  TContainIntrinsicInlineSize,
  TContainIntrinsicSize,
  TContainIntrinsicWidth,
  TContainer,
  TContent,
  TContentVisibility,
  TCounterIncrement,
  TCounterReset,
  TCounterSet,
  TCursor,
  TCx,
  TCy,
  TD,
  TDirection,
  TDominantBaseline,
  TEmptyCells,
  TFieldSizing,
  TFill,
  TFillOpacity,
  TFillRule,
  TFilter,
  TFloat,
  TFloodColor,
  TFloodOpacity,
  TFont,
  TFontFeatureSettings,
  TFontKerning,
  TFontLanguageOverride,
  TFontOpticalSizing,
  TFontPalette,
  TFontSizeAdjust,
  TFontSynthesisSmallCaps,
  TFontSynthesisStyle,
  TFontSynthesisWeight,
  TFontVariantAlternates,
  TFontVariantCaps,
  TFontVariantEastAsian,
  TFontVariantLigatures,
  TFontVariantNumeric,
  TFontVariantPosition,
  TFontVariationSettings,
  TForcedColorAdjust,
  TGap,
  TGridAutoColumns,
  TGridAutoFlow,
  TGridAutoRows,
  TGridColumn,
  TGridRow,
  TGridTemplate,
  TGridTemplateColumns,
  TGridTemplateAreas,
  THeight,
  THyphenateCharacter,
  THyphens,
  TImageOrientation,
  TImageRendering,
  TInlineSize,
  TInset,
  TInsetBlock,
  TInsetInline,
  TIsolation,
  TJustifyContent,
  TJustifyItems,
  TJustifySelf,
  TBottom,
  TLeft,
  TRight,
  TTop,
  TLetterSpacing,
  TLightingColor,
  TLineBreak,
  TLineHeight,
  TListStyle,
  TMarginBlock,
  TMarginInline,
  TMaskClip,
  TMask,
  TMathStyle,
  TMaxBlockSize,
  TMaxHeight,
  TMaxInlineSize,
  TMaxWidth,
  TMinBlockSize,
  TMinHeight,
  TMinInlineSize,
  TMinWidth,
  TMixBlendMode,
  TObjectFit,
  TObjectPosition,
  TOffsetAnchor,
  TOffset,
  TOpacity,
  TOrder,
  TOutlineOffset,
  TOutline,
  TOverflow,
  TOverscrollBehavior,
  TOverscrollBehaviorBlock,
  TOverscrollBehaviorInline,
  TPerspective,
  TPerspectiveOrigin,
  TPlaceContent,
  TPlaceItems,
  TPlaceSelf,
  TPointerEvents,
  TPosition,
  TQuotes,
  TResize,
  TRotate,
  TRubyAlign,
  TRubyPosition,
  TScale,
  TScrollMargin,
  TScrollPadding,
  TScrollBehavior,
  TScrollSnapAlign,
  TScrollSnapStop,
  TScrollSnapType,
  TScrollTimeline,
  TScrollTimelineAxis,
  TScrollTimelineName,
  TScrollbarColor,
  TScrollbarGutter,
  TScrollbarWidth,
  TShapeImageThreshold,
  TShapeMargin,
  TShapeOutside,
  TShapeRendering,
  TStopColor,
  TStopOpacity,
  TStroke,
  TStrokeDasharray,
  TStrokeDashoffset,
  TStrokeLinecap,
  TStrokeLinejoin,
  TStrokeMiterlimit,
  TStrokeOpacity,
  TStrokeWidth,
  TTabSize,
  TTableLayout,
  TTextDecoration,
  TTextEmphasis,
  TTextAlign,
  TTextAlignLast,
  TTextAnchor,
  TTextCombineUpright,
  TTextIndent,
  TTextJustify,
  TTextOrientation,
  TTextOverflow,
  TTextRendering,
  TTextShadow,
  TTextTransform,
  TTextUnderlineOffset,
  TTextUnderlinePosition,
  TTextWrap,
  TTextWrapStyle,
  TTouchAction,
  TTransform,
  TTransformBox,
  TTransformOrigin,
  TTransformStyle,
  TTransition,
  TTransitionBehavior,
  TTranslate,
  TUserSelect,
  TVectorEffect,
  TVerticalAlign,
  TViewTransitionName,
  TVisibility,
  TWhiteSpace,
  TWidth,
  TWillChange,
  TWordBreak,
  TWordSpacing,
  TWritingMode,
  TZIndex,
  TZoom,
  TGridTemplateRows,
  TFontFamily,
  TFontSize,
  TFontStretch,
  TFontStyle,
  TFontVariant,
  TFontWeight,
} from '../type'
import type { TThemeColor } from './theme'

export type TEnv = 'development' | 'production' | 'test'
export type TCSSPropValue = Partial<{
  accentColor: TAccentColor
  alignContent: TAlignContent
  alignItems: TAlignItems
  alignSelf: TAlignSelf
  animation: TAnimation
  appearance: TAppearance
  aspectRatio: TAspectRatio
  backdropFilter: TBackdropFilter
  backfaceVisibility: TBackfaceVisibility
  background: TBackground
  backgroundBlendMode: TBackgroundBlendMode
  backgroundClip: TBackgroundClip
  backgroundOrigin: TBackgroundOrigin
  blockSize: TBlockSize
  border: TBorder
  borderBlock: TBorderBlock
  borderBlockStart: TBorderBlockStart
  borderBlockEnd: TBorderBlockEnd
  borderBottom: TBorderBottom
  borderBottomLeftRadius: TBorderBottomLeftRadius
  borderBottomRightRadius: TBorderBottomRightRadius
  borderCollapse: TBorderCollapse
  borderEndEndRadius: TBorderEndEndRadius
  borderEndStartRadius: TBorderEndStartRadius
  borderImage: TBorderImage
  borderInline: TBorderInline
  borderInlineStart: TBorderInlineStart
  borderInlineEnd: TBorderInlineEnd
  borderLeft: TBorderLeft
  borderRadius: TBorderRadius
  borderRight: TBorderRight
  borderWidth: TBorderWidth
  borderStyle: TBorderStyle | TBorderStyle[]
  borderStartEndRadius: TBorderStartEndRadius
  borderStartStartRadius: TBorderStartStartRadius
  borderTop: TBorderTop
  borderTopLeftRadius: TBorderTopLeftRadius
  borderTopRightRadius: TBorderTopRightRadius
  bottom: TBottom
  display: TDisplay
  boxShadow: TBoxShadow
  boxSizing: TBoxSizing
  breakAfter: TBreakAfter
  breakBefore: TBreakBefore
  breakInside: TBreakInside
  captionSide: TCaptionSide
  caretColor: TCaretColor
  clear: TClear
  clip: TClip
  clipPath: TClipPath
  color: TColor
  colorInterpolation: TColorInterpolation
  colorInterpolationFilters: TColorInterpolationFilters
  colorScheme: TColorScheme
  columnCount: TColumnCount
  columnFill: TColumnFill
  columnGap: TColumnGap
  columnRule: TColumnRule
  columnSpan: TColumnSpan
  columnWidth: TColumnWidth
  contain: TContain
  containIntrinsicBlockSize: TContainIntrinsicBlockSize
  containIntrinsicHeight: TContainIntrinsicHeight
  containIntrinsicInlineSize: TContainIntrinsicInlineSize
  containIntrinsicSize: TContainIntrinsicSize
  containIntrinsicWidth: TContainIntrinsicWidth
  container: TContainer
  content: TContent
  contentVisibility: TContentVisibility
  counterIncrement: TCounterIncrement
  counterReset: TCounterReset
  counterSet: TCounterSet
  cursor: TCursor
  cx: TCx
  cy: TCy
  d: TD
  direction: TDirection
  dominantBaseline: TDominantBaseline
  emptyCells: TEmptyCells
  flex: TFlex
  flexBasis: TFlexBasis
  flexDirection: TFlexDirection
  flexGrow: TFlexGrow
  flexShrink: TFlexShrink
  fontVariant: TFontVariant
  fontWeight: TFontWeight
  flexWrap: TFlexWrap
  fieldSizing: TFieldSizing
  fill: TFill
  fillOpacity: TFillOpacity
  fillRule: TFillRule
  filter: TFilter
  float: TFloat
  floodColor: TFloodColor
  floodOpacity: TFloodOpacity
  font: TFont
  fontFamily: TFontFamily
  fontSize: TFontSize
  fontStretch: TFontStretch
  fontStyle: TFontStyle
  fontFeatureSettings: TFontFeatureSettings
  fontKerning: TFontKerning
  fontLanguageOverride: TFontLanguageOverride
  fontOpticalSizing: TFontOpticalSizing
  fontPalette: TFontPalette
  fontSizeAdjust: TFontSizeAdjust
  fontSynthesisSmallCaps: TFontSynthesisSmallCaps
  fontSynthesisStyle: TFontSynthesisStyle
  fontSynthesisWeight: TFontSynthesisWeight
  fontVariantAlternates: TFontVariantAlternates
  fontVariantCaps: TFontVariantCaps
  fontVariantEastAsian: TFontVariantEastAsian
  fontVariantLigatures: TFontVariantLigatures
  fontVariantNumeric: TFontVariantNumeric
  fontVariantPosition: TFontVariantPosition
  fontVariationSettings: TFontVariationSettings
  forcedColorAdjust: TForcedColorAdjust
  gap: TGap
  gridAutoColumns: TGridAutoColumns
  gridAutoFlow: TGridAutoFlow
  gridAutoRows: TGridAutoRows
  gridColumn: TGridColumn
  gridRow: TGridRow
  gridTemplate: TGridTemplate
  gridTemplateColumns: TGridTemplateColumns
  gridTemplateRows: TGridTemplateRows
  gridTemplateAreas: TGridTemplateAreas
  height: THeight
  hyphenateCharacter: THyphenateCharacter
  hyphens: THyphens
  imageOrientation: TImageOrientation
  imageRendering: TImageRendering
  inlineSize: TInlineSize
  inset: TInset
  insetBlock: TInsetBlock
  insetInline: TInsetInline
  isolation: TIsolation
  justifyContent: TJustifyContent
  justifyItems: TJustifyItems
  justifySelf: TJustifySelf
  left: TLeft
  right: TRight
  top: TTop
  letterSpacing: TLetterSpacing
  lightingColor: TLightingColor
  lineBreak: TLineBreak
  lineHeight: TLineHeight
  listStyle: TListStyle
  margin: TMargin
  marginBlock: TMarginBlock
  marginInline: TMarginInline
  mask: TMask
  maskClip: TMaskClip
  mathStyle: TMathStyle
  maxBlockSize: TMaxBlockSize
  maxHeight: TMaxHeight
  maxInlineSize: TMaxInlineSize
  maxWidth: TMaxWidth
  minBlockSize: TMinBlockSize
  minHeight: TMinHeight
  minInlineSize: TMinInlineSize
  minWidth: TMinWidth
  mixBlendMode: TMixBlendMode
  objectFit: TObjectFit
  objectPosition: TObjectPosition
  offset: TOffset
  offsetAnchor: TOffsetAnchor
  opacity: TOpacity
  order: TOrder
  outline: TOutline
  outlineOffset: TOutlineOffset
  overflow: TOverflow
  overscrollBehavior: TOverscrollBehavior
  overscrollBehaviorBlock: TOverscrollBehaviorBlock
  overscrollBehaviorInline: TOverscrollBehaviorInline
  padding: TPadding
  perspective: TPerspective
  perspectiveOrigin: TPerspectiveOrigin
  placeContent: TPlaceContent
  placeItems: TPlaceItems
  placeSelf: TPlaceSelf
  pointerEvents: TPointerEvents
  position: TPosition
  quotes: TQuotes
  resize: TResize
  rotate: TRotate
  rubyAlign: TRubyAlign
  rubyPosition: TRubyPosition
  scale: TScale
  scrollBehavior: TScrollBehavior
  scrollMargin: TScrollMargin
  scrollPadding: TScrollPadding
  scrollSnapAlign: TScrollSnapAlign
  scrollSnapStop: TScrollSnapStop
  scrollSnapType: TScrollSnapType
  scrollTimeline: TScrollTimeline
  scrollTimelineAxis: TScrollTimelineAxis
  scrollTimelineName: TScrollTimelineName
  scrollbarColor: TScrollbarColor
  scrollbarGutter: TScrollbarGutter
  scrollbarWidth: TScrollbarWidth
  shapeImageThreshold: TShapeImageThreshold
  shapeMargin: TShapeMargin
  shapeOutside: TShapeOutside
  shapeRendering: TShapeRendering
  stopColor: TStopColor
  stopOpacity: TStopOpacity
  stroke: TStroke
  strokeDasharray: TStrokeDasharray
  strokeDashoffset: TStrokeDashoffset
  strokeLinecap: TStrokeLinecap
  strokeLinejoin: TStrokeLinejoin
  strokeMiterlimit: TStrokeMiterlimit
  strokeOpacity: TStrokeOpacity
  strokeWidth: TStrokeWidth
  tabSize: TTabSize
  tableLayout: TTableLayout
  textAlign: TTextAlign
  textAlignLast: TTextAlignLast
  textAnchor: TTextAnchor
  textCombineUpright: TTextCombineUpright
  textDecoration: TTextDecoration
  textEmphasis: TTextEmphasis
  textIndent: TTextIndent
  textJustify: TTextJustify
  textOrientation: TTextOrientation
  textOverflow: TTextOverflow
  textRendering: TTextRendering
  textShadow: TTextShadow
  textTransform: TTextTransform
  textUnderlineOffset: TTextUnderlineOffset
  textUnderlinePosition: TTextUnderlinePosition
  textWrap: TTextWrap
  textWrapStyle: TTextWrapStyle
  touchAction: TTouchAction
  transform: TTransform
  transformBox: TTransformBox
  transformOrigin: TTransformOrigin
  transformStyle: TTransformStyle
  transition: TTransition
  transitionBehavior: TTransitionBehavior
  translate: TTranslate
  userSelect: TUserSelect
  vectorEffect: TVectorEffect
  verticalAlign: TVerticalAlign
  viewTransitionName: TViewTransitionName
  visibility: TVisibility
  whiteSpace: TWhiteSpace
  width: TWidth
  willChange: TWillChange
  wordBreak: TWordBreak
  wordSpacing: TWordSpacing
  writingMode: TWritingMode
  zIndex: TZIndex
  zoom: TZoom
}>

type TResponsive = {
  mobile?: TCSSPropValue
  tablet?: TCSSPropValue
  desktop?: TCSSPropValue
  className?: string
}

export type TStyle = {
  className?: string
  env?: TEnv
  theme?: TThemeColor
  styleAsString?: boolean
} & TResponsive

// Define a mapping of keys to their respective normalizer functions
export const propertyMap: Record<
  keyof TCSSPropValue,
  {
    className: Record<TEnv, string>
    normalize: (value: any) => string | number
  }
> = {
  accentColor: {
    className: {
      development: 'accent-color',
      test: 'acc',
      production: 'acc',
    },
    normalize: normalizeAccentColor,
  },
  alignContent: {
    className: {
      development: 'align-content',
      test: 'ac',
      production: 'ac',
    },
    normalize: normalizeAlignContent,
  },
  alignItems: {
    className: {
      development: 'align-items',
      test: 'ai',
      production: 'ai',
    },
    normalize: normalizeAlignItems,
  },
  alignSelf: {
    className: {
      development: 'align-self',
      test: 'as',
      production: 'as',
    },
    normalize: normalizeAlignSelf,
  },
  animation: {
    className: {
      development: 'animation',
      test: 'a',
      production: 'a',
    },
    normalize: normalizeAnimation,
  },
  appearance: {
    className: {
      development: 'appearance',
      test: 'ap',
      production: 'ap',
    },
    normalize: normalizeAppearance,
  },
  aspectRatio: {
    className: {
      development: 'aspect-ratio',
      test: 'ar',
      production: 'ar',
    },
    normalize: normalizeAspectRatio,
  },
  backdropFilter: {
    className: {
      development: 'backdrop-filter',
      test: 'bf',
      production: 'bf',
    },
    normalize: normalizeBackdropFilter,
  },
  backfaceVisibility: {
    className: {
      development: 'backface-visibility',
      test: 'bv',
      production: 'bv',
    },
    normalize: normalizeBackfaceVisibility,
  },
  background: {
    className: {
      development: 'background',
      test: 'bg',
      production: 'bg',
    },
    normalize: normalizeBackground,
  },
  backgroundBlendMode: {
    className: {
      development: 'background-blend-mode',
      test: 'bbm',
      production: 'bbm',
    },
    normalize: normalizeBackgroundBlendMode,
  },
  backgroundClip: {
    className: {
      development: 'background-clip',
      test: 'bc',
      production: 'bc',
    },
    normalize: normalizeBackgroundClip,
  },
  backgroundOrigin: {
    className: {
      development: 'background-origin',
      test: 'bo',
      production: 'bo',
    },
    normalize: normalizeBackgroundOrigin,
  },
  blockSize: {
    className: {
      development: 'block-size',
      test: 'bz',
      production: 'bz',
    },
    normalize: normalizeBlockSize,
  },
  margin: {
    className: {
      development: 'margin',
      test: 'm',
      production: 'm',
    },
    normalize: normalizeMargin,
  },
  padding: {
    className: {
      development: 'padding',
      test: 'p',
      production: 'p',
    },
    normalize: normalizePadding,
  },
  border: {
    className: {
      development: 'border',
      test: 'b',
      production: 'b',
    },
    normalize: normalizeBorder,
  },
  borderBlock: {
    className: {
      development: 'border-block',
      test: 'bb',
      production: 'bb',
    },
    normalize: normalizeBorderBlock,
  },
  borderBlockStart: {
    className: {
      development: 'border-block-start',
      test: 'bbs',
      production: 'bbs',
    },
    normalize: normalizeBorderBlockStart,
  },
  borderBottom: {
    className: {
      development: 'border-bottom',
      test: 'bbt',
      production: 'bbt',
    },
    normalize: normalizeBorderBottom,
  },
  borderBottomLeftRadius: {
    className: {
      development: 'border-bottom-left-radius',
      test: 'bblr',
      production: 'bblr',
    },
    normalize: normalizeBorderBottomLeftRadius,
  },
  borderBottomRightRadius: {
    className: {
      development: 'border-bottom-right-radius',
      test: 'bbrr',
      production: 'bbrr',
    },
    normalize: normalizeBorderBottomRightRadius,
  },
  borderBlockEnd: {
    className: {
      development: 'border-block-end',
      test: 'bbe',
      production: 'bbe',
    },
    normalize: normalizeBorderBlockEnd,
  },
  borderCollapse: {
    className: {
      development: 'border-collapse',
      test: 'bdc',
      production: 'bdc',
    },
    normalize: normalizeBorderCollapse,
  },
  borderEndEndRadius: {
    className: {
      development: 'border-end-end-radius',
      test: 'beer',
      production: 'beer',
    },
    normalize: normalizeBorderEndEndRadius,
  },
  borderEndStartRadius: {
    className: {
      development: 'border-end-start-radius',
      test: 'besr',
      production: 'besr',
    },
    normalize: normalizeBorderEndStartRadius,
  },
  borderImage: {
    className: {
      development: 'border-image',
      test: 'bim',
      production: 'bim',
    },
    normalize: normalizeBorderImage,
  },
  borderInline: {
    className: {
      development: 'border-inline',
      test: 'bi',
      production: 'bi',
    },
    normalize: normalizeBorderInlineEnd,
  },
  borderLeft: {
    className: {
      development: 'border-left',
      test: 'bl',
      production: 'bl',
    },
    normalize: normalizeBorderLeft,
  },
  borderInlineStart: {
    className: {
      development: 'border-inline-start',
      test: 'bis',
      production: 'bis',
    },
    normalize: normalizeBorderInlineStart,
  },
  borderInlineEnd: {
    className: {
      development: 'border-inline-end',
      test: 'bie',
      production: 'bie',
    },
    normalize: normalizeBorderInlineEnd,
  },
  borderRadius: {
    className: {
      development: 'border-radius',
      test: 'bra',
      production: 'bra',
    },
    normalize: normalizeBorderRadius,
  },
  borderRight: {
    className: {
      development: 'border-right',
      test: 'br',
      production: 'br',
    },
    normalize: normalizeBorderRight,
  },
  borderWidth: {
    className: {
      development: 'border-width',
      test: 'bw',
      production: 'bw',
    },
    normalize: normalizeBorderWidth,
  },
  borderStyle: {
    className: {
      development: 'border-style',
      test: 'bds',
      production: 'bds',
    },
    normalize: normalizeBorderStyle,
  },
  borderStartEndRadius: {
    className: {
      development: 'border-start-end-radius',
      test: 'bser',
      production: 'bser',
    },
    normalize: normalizeBorderStartEndRadius,
  },
  borderStartStartRadius: {
    className: {
      development: 'border-start-start-radius',
      test: 'bssr',
      production: 'bssr',
    },
    normalize: normalizeBorderStartStartRadius,
  },
  borderTop: {
    className: {
      development: 'border-top',
      test: 'bdt',
      production: 'bdt',
    },
    normalize: normalizeBorderTop,
  },
  borderTopLeftRadius: {
    className: {
      development: 'border-top-left-radius',
      test: 'btlr',
      production: 'btlr',
    },
    normalize: normalizeBorderTopLeftRadius,
  },
  borderTopRightRadius: {
    className: {
      development: 'border-top-right-radius',
      test: 'btrr',
      production: 'btrr',
    },
    normalize: normalizeBorderTopRightRadius,
  },
  bottom: {
    className: {
      development: 'bottom',
      test: 'bt',
      production: 'bt',
    },
    normalize: normalizeBottom,
  },
  boxShadow: {
    className: {
      development: 'box-shadow',
      test: 'bs',
      production: 'bs',
    },
    normalize: normalizeBoxShadow,
  },
  boxSizing: {
    className: {
      development: 'box-sizing',
      test: 'bsz',
      production: 'bsz',
    },
    normalize: normalizeBoxSizing,
  },
  breakAfter: {
    className: {
      development: 'break-after',
      test: 'ba',
      production: 'ba',
    },
    normalize: normalizeBreakAfter,
  },
  breakBefore: {
    className: {
      development: 'break-before',
      test: 'bbf',
      production: 'bbf',
    },
    normalize: normalizeBreakBefore,
  },
  breakInside: {
    className: {
      development: 'break-inside',
      test: 'bbi',
      production: 'bbi',
    },
    normalize: normalizeBreakInside,
  },

  captionSide: {
    className: {
      development: 'caption-side',
      test: 'cps',
      production: 'cps',
    },
    normalize: normalizeCaptionSide,
  },
  caretColor: {
    className: {
      development: 'caret-color',
      test: 'crc',
      production: 'crc',
    },
    normalize: normalizeCaretColor,
  },
  clear: {
    className: {
      development: 'clear',
      test: 'clr',
      production: 'clr',
    },
    normalize: normalizeClear,
  },
  clip: {
    className: {
      development: 'clip',
      test: 'cl',
      production: 'cl',
    },
    normalize: normalizeClip,
  },
  clipPath: {
    className: {
      development: 'clip-path',
      test: 'clp',
      production: 'clp',
    },
    normalize: normalizeClipPath,
  },
  color: {
    className: {
      development: 'color',
      test: 'c',
      production: 'c',
    },
    normalize: normalizeColor,
  },
  colorInterpolation: {
    className: {
      development: 'color-interpolation',
      test: 'ci',
      production: 'ci',
    },
    normalize: normalizeColorInterpolation,
  },
  colorInterpolationFilters: {
    className: {
      development: 'color-interpolation-filters',
      test: 'cif',
      production: 'cif',
    },
    normalize: normalizeColorInterpolationFilters,
  },
  colorScheme: {
    className: {
      development: 'color-scheme',
      test: 'cs',
      production: 'cs',
    },
    normalize: normalizeColorScheme,
  },
  columnCount: {
    className: {
      development: 'column-count',
      test: 'cc',
      production: 'cc',
    },
    normalize: normalizeColumnCount,
  },
  columnFill: {
    className: {
      development: 'column-fill',
      test: 'cf',
      production: 'cf',
    },
    normalize: normalizeColumnFill,
  },
  columnGap: {
    className: {
      development: 'column-gap',
      test: 'cg',
      production: 'cg',
    },
    normalize: normalizeColumnGap,
  },
  columnRule: {
    className: {
      development: 'column-rule',
      test: 'cr',
      production: 'cr',
    },
    normalize: normalizeColumnRule,
  },
  columnSpan: {
    className: {
      development: 'column-span',
      test: 'csp',
      production: 'csp',
    },
    normalize: normalizeColumnSpan,
  },
  columnWidth: {
    className: {
      development: 'column-width',
      test: 'cw',
      production: 'cw',
    },
    normalize: normalizeColumnWidth,
  },
  contain: {
    className: {
      development: 'contain',
      test: 'ctn',
      production: 'ctn',
    },
    normalize: normalizeContain,
  },
  containIntrinsicBlockSize: {
    className: {
      development: 'contain-intrinsic-block-size',
      test: 'cib',
      production: 'cib',
    },
    normalize: normalizeContainIntrinsicBlockSize,
  },
  containIntrinsicHeight: {
    className: {
      development: 'contain-intrinsic-height',
      test: 'cih',
      production: 'cih',
    },
    normalize: normalizeContainIntrinsicHeight,
  },
  containIntrinsicInlineSize: {
    className: {
      development: 'contain-intrinsic-inline-size',
      test: 'ciis',
      production: 'ciis',
    },
    normalize: normalizeContainIntrinsicInlineSize,
  },
  containIntrinsicSize: {
    className: {
      development: 'contain-intrinsic-size',
      test: 'cis',
      production: 'cis',
    },
    normalize: normalizeContainIntrinsicSize,
  },
  containIntrinsicWidth: {
    className: {
      development: 'contain-intrinsic-width',
      test: 'ciw',
      production: 'ciw',
    },
    normalize: normalizeContainIntrinsicWidth,
  },
  container: {
    className: {
      development: 'container',
      test: 'cn',
      production: 'cn',
    },
    normalize: normalizeContainer,
  },
  content: {
    className: {
      development: 'content',
      test: 'cnt',
      production: 'cnt',
    },
    normalize: normalizeContent,
  },
  contentVisibility: {
    className: {
      development: 'content-visibility',
      test: 'cv',
      production: 'cv',
    },
    normalize: normalizeContentVisibility,
  },
  counterIncrement: {
    className: {
      development: 'counter-increment',
      test: 'cin',
      production: 'cin',
    },
    normalize: normalizeCounterIncrement,
  },
  counterReset: {
    className: {
      development: 'counter-reset',
      test: 'cre',
      production: 'cre',
    },
    normalize: normalizeCounterReset,
  },
  counterSet: {
    className: {
      development: 'counter-set',
      test: 'cse',
      production: 'cse',
    },
    normalize: normalizeCounterSet,
  },
  cursor: {
    className: {
      development: 'cursor',
      test: 'cur',
      production: 'cur',
    },
    normalize: normalizeCursor,
  },
  cx: {
    className: {
      development: 'cx',
      test: 'cx',
      production: 'cx',
    },
    normalize: normalizeCx,
  },
  cy: {
    className: {
      development: 'cy',
      test: 'cy',
      production: 'cy',
    },
    normalize: normalizeCy,
  },
  d: {
    className: {
      development: 'd',
      test: 'd',
      production: 'd',
    },
    normalize: normalizeD,
  },
  direction: {
    className: {
      development: 'direction',
      test: 'dir',
      production: 'dir',
    },
    normalize: normalizeDirection,
  },
  dominantBaseline: {
    className: {
      development: 'dominant-baseline',
      test: 'db',
      production: 'db',
    },
    normalize: normalizeDominantBaseline,
  },
  emptyCells: {
    className: {
      development: 'empty-cells',
      test: 'ec',
      production: 'ec',
    },
    normalize: normalizeEmptyCells,
  },
  display: {
    className: {
      development: 'display',
      test: 'ds',
      production: 'ds',
    },
    normalize: normalizeDisplay,
  },
  flex: {
    className: {
      development: 'flex',
      test: 'fx',
      production: 'fx',
    },
    normalize: normalizeFlex,
  },
  flexBasis: {
    className: {
      development: 'flex-basis',
      test: 'fb',
      production: 'fb',
    },
    normalize: normalizeFlexBasis,
  },
  flexDirection: {
    className: {
      development: 'flex-direction',
      test: 'fd',
      production: 'fd',
    },
    normalize: normalizeFlexDirection,
  },
  flexGrow: {
    className: {
      development: 'flex-grow',
      test: 'fg',
      production: 'fg',
    },
    normalize: normalizeFlexGrow,
  },
  flexShrink: {
    className: {
      development: 'flex-shrink',
      test: 'fsh',
      production: 'fsh',
    },
    normalize: normalizeFlexShrink,
  },
  fontVariant: {
    className: {
      development: 'font-variant',
      test: 'fv',
      production: 'fv',
    },
    normalize: normalizeFontVariant,
  },
  fontWeight: {
    className: {
      development: 'font-weight',
      test: 'fw',
      production: 'fw',
    },
    normalize: normalizeFontWeight,
  },
  flexWrap: {
    className: {
      development: 'flex-wrap',
      test: 'fwr',
      production: 'fwr',
    },
    normalize: normalizeFlexWrap,
  },
  fieldSizing: {
    className: {
      development: 'field-sizing',
      test: 'fiz',
      production: 'fiz',
    },
    normalize: normalizeFieldSizing,
  },
  fill: {
    className: {
      development: 'fill',
      test: 'fl',
      production: 'fl',
    },
    normalize: normalizeFill,
  },
  fillOpacity: {
    className: {
      development: 'fill-opacity',
      test: 'fop',
      production: 'fop',
    },
    normalize: normalizeFillOpacity,
  },
  fillRule: {
    className: {
      development: 'fill-rule',
      test: 'fr',
      production: 'fr',
    },
    normalize: normalizeFillRule,
  },
  filter: {
    className: {
      development: 'filter',
      test: 'fil',
      production: 'fil',
    },
    normalize: normalizeFilter,
  },
  float: {
    className: {
      development: 'float',
      test: 'flo',
      production: 'flo',
    },
    normalize: normalizeFloat,
  },
  floodColor: {
    className: {
      development: 'flood-color',
      test: 'fc',
      production: 'fc',
    },
    normalize: normalizeFloodColor,
  },
  floodOpacity: {
    className: {
      development: 'flood-opacity',
      test: 'fo',
      production: 'fo',
    },
    normalize: normalizeFloodOpacity,
  },
  font: {
    className: {
      development: 'font',
      test: 'fnt',
      production: 'fnt',
    },
    normalize: normalizeFont,
  },
  fontFamily: {
    className: {
      development: 'font-family',
      test: 'ff',
      production: 'ff',
    },
    normalize: normalizeFontFamily,
  },
  fontSize: {
    className: {
      development: 'font-size',
      test: 'fz',
      production: 'fz',
    },
    normalize: normalizeFontSize,
  },
  fontStretch: {
    className: {
      development: 'font-stretch',
      test: 'fst',
      production: 'fst',
    },
    normalize: normalizeFontStretch,
  },
  fontStyle: {
    className: {
      development: 'font-style',
      test: 'fs',
      production: 'fs',
    },
    normalize: normalizeFontStyle,
  },
  fontFeatureSettings: {
    className: {
      development: 'font-feature-settings',
      test: 'ffs',
      production: 'ffs',
    },
    normalize: normalizeFontFeatureSettings,
  },
  fontKerning: {
    className: {
      development: 'font-kerning',
      test: 'fk',
      production: 'fk',
    },
    normalize: normalizeFontKerning,
  },
  fontLanguageOverride: {
    className: {
      development: 'font-language-override',
      test: 'flov',
      production: 'flov',
    },
    normalize: normalizeFontLanguageOverride,
  },
  fontOpticalSizing: {
    className: {
      development: 'font-optical-sizing',
      test: 'fos',
      production: 'fos',
    },
    normalize: normalizeFontOpticalSizing,
  },
  fontPalette: {
    className: {
      development: 'font-palette',
      test: 'fp',
      production: 'fp',
    },
    normalize: normalizeFontPalette,
  },
  fontSizeAdjust: {
    className: {
      development: 'font-size-adjust',
      test: 'fsa',
      production: 'fsa',
    },
    normalize: normalizeFontSizeAdjust,
  },
  fontSynthesisSmallCaps: {
    className: {
      development: 'font-synthesis-small-caps',
      test: 'fssc',
      production: 'fssc',
    },
    normalize: normalizeFontSynthesisSmallCaps,
  },
  fontSynthesisStyle: {
    className: {
      development: 'font-synthesis-style',
      test: 'fss',
      production: 'fss',
    },
    normalize: normalizeFontSynthesisStyle,
  },
  fontSynthesisWeight: {
    className: {
      development: 'font-synthesis-weight',
      test: 'fsw',
      production: 'fsw',
    },
    normalize: normalizeFontSynthesisWeight,
  },
  fontVariantAlternates: {
    className: {
      development: 'font-variant-alternates',
      test: 'fva',
      production: 'fva',
    },
    normalize: normalizeFontVariantAlternates,
  },
  fontVariantCaps: {
    className: {
      development: 'font-variant-caps',
      test: 'fvc',
      production: 'fvc',
    },
    normalize: normalizeFontVariantCaps,
  },
  fontVariantEastAsian: {
    className: {
      development: 'font-variant-east-asian',
      test: 'fvea',
      production: 'fvea',
    },
    normalize: normalizeFontVariantEastAsian,
  },
  fontVariantLigatures: {
    className: {
      development: 'font-variant-ligatures',
      test: 'fvl',
      production: 'fvl',
    },
    normalize: normalizeFontVariantLigatures,
  },
  fontVariantNumeric: {
    className: {
      development: 'font-variant-numeric',
      test: 'fvn',
      production: 'fvn',
    },
    normalize: normalizeFontVariantNumeric,
  },
  fontVariantPosition: {
    className: {
      development: 'font-variant-position',
      test: 'fvp',
      production: 'fvp',
    },
    normalize: normalizeFontVariantPosition,
  },
  fontVariationSettings: {
    className: {
      development: 'font-variation-settings',
      test: 'fvs',
      production: 'fvs',
    },
    normalize: normalizeFontVariationSettings,
  },
  forcedColorAdjust: {
    className: {
      development: 'forced-color-adjust',
      test: 'fca',
      production: 'fca',
    },
    normalize: normalizeForcedColorAdjust,
  },
  gap: {
    className: {
      development: 'gap',
      test: 'gp',
      production: 'gp',
    },
    normalize: normalizeGap,
  },
  gridAutoColumns: {
    className: {
      development: 'grid-auto-columns',
      test: 'gac',
      production: 'gac',
    },
    normalize: normalizeGridAutoColumns,
  },
  gridAutoFlow: {
    className: {
      development: 'grid-auto-flow',
      test: 'gaf',
      production: 'gaf',
    },
    normalize: normalizeGridAutoFlow,
  },
  gridAutoRows: {
    className: {
      development: 'grid-auto-rows',
      test: 'gar',
      production: 'gar',
    },
    normalize: normalizeGridAutoRows,
  },
  gridColumn: {
    className: {
      development: 'grid-column',
      test: 'gc',
      production: 'gc',
    },
    normalize: normalizeGridColumn,
  },
  gridRow: {
    className: {
      development: 'grid-row',
      test: 'gr',
      production: 'gr',
    },
    normalize: normalizeGridRow,
  },
  gridTemplate: {
    className: {
      development: 'grid-template',
      test: 'gt',
      production: 'gt',
    },
    normalize: normalizeGridTemplate,
  },
  gridTemplateColumns: {
    className: {
      development: 'grid-template-columns',
      test: 'gtc',
      production: 'gtc',
    },
    normalize: normalizeGridTemplateColumns,
  },
  gridTemplateRows: {
    className: {
      development: 'grid-template-rows',
      test: 'gtr',
      production: 'gtr',
    },
    normalize: normalizeGridTemplateRows,
  },
  gridTemplateAreas: {
    className: {
      development: 'grid-template-areas',
      test: 'gta',
      production: 'gta',
    },
    normalize: normalizeGridTemplateAreas,
  },
  height: {
    className: {
      development: 'height',
      test: 'h',
      production: 'h',
    },
    normalize: normalizeHeight,
  },
  hyphenateCharacter: {
    className: {
      development: 'hyphenate-character',
      test: 'hc',
      production: 'hc',
    },
    normalize: normalizeHyphenateCharacter,
  },
  hyphens: {
    className: {
      development: 'hyphens',
      test: 'hy',
      production: 'hy',
    },
    normalize: normalizeHyphens,
  },
  imageOrientation: {
    className: {
      development: 'image-orientation',
      test: 'io',
      production: 'io',
    },
    normalize: normalizeImageOrientation,
  },
  imageRendering: {
    className: {
      development: 'image-rendering',
      test: 'ir',
      production: 'ir',
    },
    normalize: normalizeImageRendering,
  },
  inlineSize: {
    className: {
      development: 'inline-size',
      test: 'is',
      production: 'is',
    },
    normalize: normalizeInlineSize,
  },
  inset: {
    className: {
      development: 'inset',
      test: 'i',
      production: 'i',
    },
    normalize: normalizeInset,
  },
  insetBlock: {
    className: {
      development: 'inset-block',
      test: 'ib',
      production: 'ib',
    },
    normalize: normalizeInsetBlock,
  },
  insetInline: {
    className: {
      development: 'inset-inline',
      test: 'ii',
      production: 'ii',
    },
    normalize: normalizeInsetInline,
  },
  isolation: {
    className: {
      development: 'isolation',
      test: 'iso',
      production: 'iso',
    },
    normalize: normalizeIsolation,
  },
  justifyContent: {
    className: {
      development: 'justify-content',
      test: 'jc',
      production: 'jc',
    },
    normalize: normalizeJustifyContent,
  },
  justifyItems: {
    className: {
      development: 'justify-items',
      test: 'ji',
      production: 'ji',
    },
    normalize: normalizeJustifyItems,
  },
  justifySelf: {
    className: {
      development: 'justify-self',
      test: 'js',
      production: 'js',
    },
    normalize: normalizeJustifySelf,
  },
  left: {
    className: {
      development: 'left',
      test: 'lf',
      production: 'lf',
    },
    normalize: normalizeLeft,
  },
  right: {
    className: {
      development: 'right',
      test: 'r',
      production: 'r',
    },
    normalize: normalizeRight,
  },
  top: {
    className: {
      development: 'top',
      test: 'tp',
      production: 'tp',
    },
    normalize: normalizeTop,
  },
  letterSpacing: {
    className: {
      development: 'letter-spacing',
      test: 'ls',
      production: 'ls',
    },
    normalize: normalizeLetterSpacing,
  },
  lightingColor: {
    className: {
      development: 'lighting-color',
      test: 'lc',
      production: 'lc',
    },
    normalize: normalizeLightingColor,
  },
  lineBreak: {
    className: {
      development: 'line-break',
      test: 'lb',
      production: 'lb',
    },
    normalize: normalizeLineBreak,
  },
  lineHeight: {
    className: {
      development: 'line-height',
      test: 'lh',
      production: 'lh',
    },
    normalize: normalizeLineHeight,
  },
  listStyle: {
    className: {
      development: 'list-style',
      test: 'lst',
      production: 'lst',
    },
    normalize: normalizeListStyle,
  },
  marginBlock: {
    className: {
      development: 'margin-block',
      test: 'mb',
      production: 'mb',
    },
    normalize: normalizeMarginBlock,
  },
  marginInline: {
    className: {
      development: 'margin-inline',
      test: 'mi',
      production: 'mi',
    },
    normalize: normalizeMarginInline,
  },
  mask: {
    className: {
      development: 'mask',
      test: 'mk',
      production: 'mk',
    },
    normalize: normalizeMask,
  },
  maskClip: {
    className: {
      development: 'mask-clip',
      test: 'mc',
      production: 'mc',
    },
    normalize: normalizeMaskClip,
  },
  mathStyle: {
    className: {
      development: 'math-style',
      test: 'ms',
      production: 'ms',
    },
    normalize: normalizeMathStyle,
  },
  maxBlockSize: {
    className: {
      development: 'max-block-size',
      test: 'mxbs',
      production: 'mxbs',
    },
    normalize: normalizeMaxBlockSize,
  },
  maxHeight: {
    className: {
      development: 'max-height',
      test: 'mxh',
      production: 'mxh',
    },
    normalize: normalizeMaxHeight,
  },
  maxInlineSize: {
    className: {
      development: 'max-inline-size',
      test: 'mxis',
      production: 'mxis',
    },
    normalize: normalizeMaxInlineSize,
  },
  maxWidth: {
    className: {
      development: 'max-width',
      test: 'mxw',
      production: 'mxw',
    },
    normalize: normalizeMaxWidth,
  },
  minBlockSize: {
    className: {
      development: 'min-block-size',
      test: 'mibs',
      production: 'mibs',
    },
    normalize: normalizeMinBlockSize,
  },
  minHeight: {
    className: {
      development: 'min-height',
      test: 'mih',
      production: 'mih',
    },
    normalize: normalizeMinHeight,
  },
  minInlineSize: {
    className: {
      development: 'min-inline-size',
      test: 'miis',
      production: 'miis',
    },
    normalize: normalizeMinInlineSize,
  },
  minWidth: {
    className: {
      development: 'min-width',
      test: 'miw',
      production: 'miw',
    },
    normalize: normalizeMinWidth,
  },
  mixBlendMode: {
    className: {
      development: 'mix-blend-mode',
      test: 'mbm',
      production: 'mbm',
    },
    normalize: normalizeMixBlendMode,
  },
  objectFit: {
    className: {
      development: 'object-fit',
      test: 'of',
      production: 'of',
    },
    normalize: normalizeObjectFit,
  },
  objectPosition: {
    className: {
      development: 'object-position',
      test: 'op',
      production: 'op',
    },
    normalize: normalizeObjectPosition,
  },
  offsetAnchor: {
    className: {
      development: 'offset-anchor',
      test: 'oa',
      production: 'oa',
    },
    normalize: normalizeOffsetAnchor,
  },
  offset: {
    className: {
      development: 'offset',
      test: 'ofst',
      production: 'ofst',
    },
    normalize: normalizeOffset,
  },
  opacity: {
    className: {
      development: 'opacity',
      test: 'o',
      production: 'o',
    },
    normalize: normalizeOpacity,
  },
  order: {
    className: {
      development: 'order',
      test: 'or',
      production: 'or',
    },
    normalize: normalizeOrder,
  },
  outline: {
    className: {
      development: 'outline',
      test: 'ol',
      production: 'ol',
    },
    normalize: normalizeOutline,
  },
  outlineOffset: {
    className: {
      development: 'outline-offset',
      test: 'oo',
      production: 'oo',
    },
    normalize: normalizeOutlineOffset,
  },
  overflow: {
    className: {
      development: 'overflow',
      test: 'ov',
      production: 'ov',
    },
    normalize: normalizeOverflow,
  },
  overscrollBehavior: {
    className: {
      development: 'overscroll-behavior',
      test: 'osb',
      production: 'osb',
    },
    normalize: normalizeOverscrollBehavior,
  },
  overscrollBehaviorBlock: {
    className: {
      development: 'overscroll-behavior-block',
      test: 'osbb',
      production: 'osbb',
    },
    normalize: normalizeOverscrollBehaviorBlock,
  },
  overscrollBehaviorInline: {
    className: {
      development: 'overscroll-behavior-inline',
      test: 'osbi',
      production: 'osbi',
    },
    normalize: normalizeOverscrollBehaviorInline,
  },
  perspective: {
    className: {
      development: 'perspective',
      test: 'pp',
      production: 'pp',
    },
    normalize: normalizePerspective,
  },
  perspectiveOrigin: {
    className: {
      development: 'perspective-origin',
      test: 'po',
      production: 'po',
    },
    normalize: normalizePerspectiveOrigin,
  },
  placeContent: {
    className: {
      development: 'place-content',
      test: 'pc',
      production: 'pc',
    },
    normalize: normalizePlaceContent,
  },
  placeItems: {
    className: {
      development: 'place-items',
      test: 'pi',
      production: 'pi',
    },
    normalize: normalizePlaceItems,
  },
  placeSelf: {
    className: {
      development: 'place-self',
      test: 'ps',
      production: 'ps',
    },
    normalize: normalizePlaceSelf,
  },
  pointerEvents: {
    className: {
      development: 'pointer-events',
      test: 'pe',
      production: 'pe',
    },
    normalize: normalizePointerEvents,
  },
  position: {
    className: {
      development: 'position',
      test: 'pos',
      production: 'pos',
    },
    normalize: normalizePosition,
  },
  quotes: {
    className: {
      development: 'quotes',
      test: 'q',
      production: 'q',
    },
    normalize: normalizeQuotes,
  },
  resize: {
    className: {
      development: 'resize',
      test: 'rs',
      production: 'rs',
    },
    normalize: normalizeResize,
  },
  rotate: {
    className: {
      development: 'rotate',
      test: 'rt',
      production: 'rt',
    },
    normalize: normalizeRotate,
  },
  rubyAlign: {
    className: {
      development: 'ruby-align',
      test: 'ra',
      production: 'ra',
    },
    normalize: normalizeRubyAlign,
  },
  rubyPosition: {
    className: {
      development: 'ruby-position',
      test: 'rp',
      production: 'rp',
    },
    normalize: normalizeRubyPosition,
  },
  scale: {
    className: {
      development: 'scale',
      test: 's',
      production: 's',
    },
    normalize: normalizeScale,
  },
  scrollBehavior: {
    className: {
      development: 'scroll-behavior',
      test: 'sb',
      production: 'sb',
    },
    normalize: normalizeScrollBehavior,
  },
  scrollMargin: {
    className: {
      development: 'scroll-margin',
      test: 'sm',
      production: 'sm',
    },
    normalize: normalizeScrollMargin,
  },
  scrollPadding: {
    className: {
      development: 'scroll-padding',
      test: 'sp',
      production: 'sp',
    },
    normalize: normalizeScrollPadding,
  },
  scrollSnapAlign: {
    className: {
      development: 'scroll-snap-align',
      test: 'ssa',
      production: 'ssa',
    },
    normalize: normalizeScrollSnapAlign,
  },
  scrollSnapStop: {
    className: {
      development: 'scroll-snap-stop',
      test: 'sss',
      production: 'sss',
    },
    normalize: normalizeScrollSnapStop,
  },
  scrollSnapType: {
    className: {
      development: 'scroll-snap-type',
      test: 'sst',
      production: 'sst',
    },
    normalize: normalizeScrollSnapType,
  },
  scrollTimeline: {
    className: {
      development: 'scroll-timeline',
      test: 'st',
      production: 'st',
    },
    normalize: normalizeScrollTimeline,
  },
  scrollTimelineAxis: {
    className: {
      development: 'scroll-timeline-axis',
      test: 'sta',
      production: 'sta',
    },
    normalize: normalizeScrollTimelineAxis,
  },
  scrollTimelineName: {
    className: {
      development: 'scroll-timeline-name',
      test: 'stn',
      production: 'stn',
    },
    normalize: normalizeScrollTimelineName,
  },
  scrollbarColor: {
    className: {
      development: 'scrollbar-color',
      test: 'sc',
      production: 'sc',
    },
    normalize: normalizeScrollbarColor,
  },
  scrollbarGutter: {
    className: {
      development: 'scrollbar-gutter',
      test: 'sg',
      production: 'sg',
    },
    normalize: normalizeScrollbarGutter,
  },
  scrollbarWidth: {
    className: {
      development: 'scrollbar-width',
      test: 'sw',
      production: 'sw',
    },
    normalize: normalizeScrollbarWidth,
  },
  shapeImageThreshold: {
    className: {
      development: 'shape-image-threshold',
      test: 'sit',
      production: 'sit',
    },
    normalize: normalizeShapeImageThreshold,
  },
  shapeMargin: {
    className: {
      development: 'shape-margin',
      test: 'smg',
      production: 'smg',
    },
    normalize: normalizeShapeMargin,
  },
  shapeOutside: {
    className: {
      development: 'shape-outside',
      test: 'so',
      production: 'so',
    },
    normalize: normalizeShapeOutside,
  },
  shapeRendering: {
    className: {
      development: 'shape-rendering',
      test: 'sr',
      production: 'sr',
    },
    normalize: normalizeShapeRendering,
  },
  stopColor: {
    className: {
      development: 'stop-color',
      test: 'stc',
      production: 'stc',
    },
    normalize: normalizeStopColor,
  },
  stopOpacity: {
    className: {
      development: 'stop-opacity',
      test: 'sto',
      production: 'sto',
    },
    normalize: normalizeStopOpacity,
  },
  stroke: {
    className: {
      development: 'stroke',
      test: 'str',
      production: 'str',
    },
    normalize: normalizeStroke,
  },
  strokeDasharray: {
    className: {
      development: 'stroke-dasharray',
      test: 'sda',
      production: 'sda',
    },
    normalize: normalizeStrokeDasharray,
  },
  strokeDashoffset: {
    className: {
      development: 'stroke-dashoffset',
      test: 'sdo',
      production: 'sdo',
    },
    normalize: normalizeStrokeDashoffset,
  },
  strokeLinecap: {
    className: {
      development: 'stroke-linecap',
      test: 'slc',
      production: 'slc',
    },
    normalize: normalizeStrokeLinecap,
  },
  strokeLinejoin: {
    className: {
      development: 'stroke-linejoin',
      test: 'slj',
      production: 'slj',
    },
    normalize: normalizeStrokeLinejoin,
  },
  strokeMiterlimit: {
    className: {
      development: 'stroke-miterlimit',
      test: 'sml',
      production: 'sml',
    },
    normalize: normalizeStrokeMiterlimit,
  },
  strokeOpacity: {
    className: {
      development: 'stroke-opacity',
      test: 'sop',
      production: 'sop',
    },
    normalize: normalizeStrokeOpacity,
  },
  strokeWidth: {
    className: {
      development: 'stroke-width',
      test: 'swi',
      production: 'swi',
    },
    normalize: normalizeStrokeWidth,
  },
  tabSize: {
    className: {
      development: 'tab-size',
      test: 'txs',
      production: 'txs',
    },
    normalize: normalizeTabSize,
  },
  tableLayout: {
    className: {
      development: 'table-layout',
      test: 'tl',
      production: 'tl',
    },
    normalize: normalizeTableLayout,
  },
  textAlign: {
    className: {
      development: 'text-align',
      test: 'ta',
      production: 'ta',
    },
    normalize: normalizeTextAlign,
  },
  textAlignLast: {
    className: {
      development: 'text-align-last',
      test: 'tal',
      production: 'tal',
    },
    normalize: normalizeTextAlignLast,
  },
  textAnchor: {
    className: {
      development: 'text-anchor',
      test: 'tan',
      production: 'tan',
    },
    normalize: normalizeTextAnchor,
  },
  textCombineUpright: {
    className: {
      development: 'text-combine-upright',
      test: 'tcu',
      production: 'tcu',
    },
    normalize: normalizeTextCombineUpright,
  },
  textDecoration: {
    className: {
      development: 'text-decoration',
      test: 'td',
      production: 'td',
    },
    normalize: normalizeTextDecoration,
  },
  textEmphasis: {
    className: {
      development: 'text-emphasis',
      test: 'te',
      production: 'te',
    },
    normalize: normalizeTextEmphasis,
  },
  textIndent: {
    className: {
      development: 'text-indent',
      test: 'ti',
      production: 'ti',
    },
    normalize: normalizeTextIndent,
  },
  textJustify: {
    className: {
      development: 'text-justify',
      test: 'tj',
      production: 'tj',
    },
    normalize: normalizeTextJustify,
  },
  textOrientation: {
    className: {
      development: 'text-orientation',
      test: 'to',
      production: 'to',
    },
    normalize: normalizeTextOrientation,
  },
  textOverflow: {
    className: {
      development: 'text-overflow',
      test: 'tof',
      production: 'tof',
    },
    normalize: normalizeTextOverflow,
  },
  textRendering: {
    className: {
      development: 'text-rendering',
      test: 'tr',
      production: 'tr',
    },
    normalize: normalizeTextRendering,
  },
  textShadow: {
    className: {
      development: 'text-shadow',
      test: 'tsh',
      production: 'tsh',
    },
    normalize: normalizeTextShadow,
  },
  textTransform: {
    className: {
      development: 'text-transform',
      test: 'tt',
      production: 'tt',
    },
    normalize: normalizeTextTransform,
  },
  textUnderlineOffset: {
    className: {
      development: 'text-underline-offset',
      test: 'tuo',
      production: 'tuo',
    },
    normalize: normalizeTextUnderlineOffset,
  },
  textUnderlinePosition: {
    className: {
      development: 'text-underline-position',
      test: 'tup',
      production: 'tup',
    },
    normalize: normalizeTextUnderlinePosition,
  },
  textWrap: {
    className: {
      development: 'text-wrap',
      test: 'tw',
      production: 'tw',
    },
    normalize: normalizeTextWrap,
  },
  textWrapStyle: {
    className: {
      development: 'text-wrap-style',
      test: 'tws',
      production: 'tws',
    },
    normalize: normalizeTextWrapStyle,
  },
  touchAction: {
    className: {
      development: 'touch-action',
      test: 'toa',
      production: 'toa',
    },
    normalize: normalizeTouchAction,
  },
  transform: {
    className: {
      development: 'transform',
      test: 'tf',
      production: 'tf',
    },
    normalize: normalizeTransform,
  },
  transformBox: {
    className: {
      development: 'transform-box',
      test: 'tb',
      production: 'tb',
    },
    normalize: normalizeTransformBox,
  },
  transformOrigin: {
    className: {
      development: 'transform-origin',
      test: 'tro',
      production: 'tro',
    },
    normalize: normalizeTransformOrigin,
  },
  transformStyle: {
    className: {
      development: 'transform-style',
      test: 'ts',
      production: 'ts',
    },
    normalize: normalizeTransformStyle,
  },
  transition: {
    className: {
      development: 'transition',
      test: 'tra',
      production: 'tra',
    },
    normalize: normalizeTransition,
  },
  transitionBehavior: {
    className: {
      development: 'transition-behavior',
      test: 'tbe',
      production: 'tbe',
    },
    normalize: normalizeTransitionBehavior,
  },
  translate: {
    className: {
      development: 'translate',
      test: 't',
      production: 't',
    },
    normalize: normalizeTranslate,
  },
  userSelect: {
    className: {
      development: 'user-select',
      test: 'us',
      production: 'us',
    },
    normalize: normalizeUserSelect,
  },
  vectorEffect: {
    className: {
      development: 'vector-effect',
      test: 've',
      production: 've',
    },
    normalize: normalizeVectorEffect,
  },
  verticalAlign: {
    className: {
      development: 'vertical-align',
      test: 'va',
      production: 'va',
    },
    normalize: normalizeVerticalAlign,
  },
  viewTransitionName: {
    className: {
      development: 'view-transition-name',
      test: 'vtn',
      production: 'vtn',
    },
    normalize: normalizeViewTransitionName,
  },
  visibility: {
    className: {
      development: 'visibility',
      test: 'vs',
      production: 'vs',
    },
    normalize: normalizeVisibility,
  },
  whiteSpace: {
    className: {
      development: 'white-space',
      test: 'ws',
      production: 'ws',
    },
    normalize: normalizeWhiteSpace,
  },
  width: {
    className: {
      development: 'width',
      test: 'w',
      production: 'w',
    },
    normalize: normalizeWidth,
  },
  willChange: {
    className: {
      development: 'will-change',
      test: 'wc',
      production: 'wc',
    },
    normalize: normalizeWillChange,
  },
  wordBreak: {
    className: {
      development: 'word-break',
      test: 'wb',
      production: 'wb',
    },
    normalize: normalizeWordBreak,
  },
  wordSpacing: {
    className: {
      development: 'word-spacing',
      test: 'wsp',
      production: 'wsp',
    },
    normalize: normalizeWordSpacing,
  },
  writingMode: {
    className: {
      development: 'writing-mode',
      test: 'wm',
      production: 'wm',
    },
    normalize: normalizeWritingMode,
  },
  zIndex: {
    className: {
      development: 'z-index',
      test: 'zi',
      production: 'zi',
    },
    normalize: normalizeZIndex,
  },
  zoom: {
    className: {
      development: 'zoom',
      test: 'zm',
      production: 'zm',
    },
    normalize: normalizeZoom,
  },
} as const

```

## TYPESCRIPT: src/style/test.ts

```typescript
import { getStyle } from './get-style'
import { themeHueSaturation, themeLightnessAlpha } from './theme'

console.log(
  getStyle({
    mobile: {
      zoom: '200%',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 2fr)',
      fontFamily: 'wowjob, sans-serif',
      fontSize: 'large',
      fontStretch: 'condensed',
      fontStyle: 'italic',
      fontVariant: 'all-petite-caps',
      fontWeight: 'bold',
    },
    className: 'yes-no',
    // styleAsString: true,
    theme: 'accent',
  }),
)

```

## TYPESCRIPT: src/style/theme.ts

```typescript
export const ThemeColorMap = {
  // Represents the core identity of the brand. Used prominently in branding-related elements to create a recognizable identity.
  // **Common UI Usage**:
  // - Logo
  // - Navbar background or highlights
  // - Key call-to-action buttons (e.g., "Get Started")
  // - Brand-themed components like cards or headers
  brand: {
    hue: 259,
    saturation: 77,
    lightness: { text: 95, background: 25, border: 50 },
  }, // Vibrant purple

  // The primary action color, used to drive user attention and encourage interaction.
  // **Common UI Usage**:
  // - Primary buttons (e.g., "Submit", "Continue")
  // - Active links or tabs
  // - Progress bars
  primary: {
    hue: 225,
    saturation: 77,
    lightness: { text: 95, background: 25, border: 50 },
  }, // Bright blue

  // A secondary color that complements the primary, often used to highlight additional, less critical actions.
  // **Common UI Usage**:
  // - Secondary buttons (e.g., "Cancel")
  // - Notifications or badges (e.g., "New")
  // - Backgrounds for secondary cards or hover effects
  secondary: {
    hue: 318,
    saturation: 77,
    lightness: { text: 95, background: 25, border: 50 },
  }, // Vibrant pink

  // Used as a supporting color to create depth and add variety, often for subtle yet appealing highlights.
  // **Common UI Usage**:
  // - Link hover states
  // - Borders or shadows
  // - Infographic details (e.g., charts, diagrams)
  tertiary: {
    hue: 245,
    saturation: 86,
    lightness: { text: 15, background: 80, border: 60 },
  }, // Soft violet

  // The neutral base color, ideal for unobtrusive elements that form the structure of the UI.
  // **Common UI Usage**:
  // - Text on light backgrounds
  // - Divider lines
  // - Inactive tabs or buttons
  default: {
    hue: 221,
    saturation: 13,
    lightness: { text: 15, background: 95, border: 50 },
  }, // Neutral gray

  // Represents errors, warnings, or negative outcomes, capturing user attention with urgency.
  // **Common UI Usage**:
  // - Error alerts (e.g., "Invalid input")
  // - Validation error messages
  // - Critical notifications or icons
  error: {
    hue: 4,
    saturation: 86,
    lightness: { text: 95, background: 20, border: 40 },
  }, // Bright red

  // Represents cautionary states or important warnings without the urgency of errors.
  // **Common UI Usage**:
  // - Warning alerts (e.g., "Unsaved changes")
  // - Notifications about time-sensitive actions
  // - Status indicators (e.g., "Pending")
  warning: {
    hue: 34,
    saturation: 94,
    lightness: { text: 15, background: 85, border: 65 },
  }, // Vivid orange

  // Signifies success, positive feedback, or a completed action, instilling confidence in the user.
  // **Common UI Usage**:
  // - Success alerts (e.g., "Action completed")
  // - Success badges (e.g., "Verified", "Completed")
  // - Indicators for progress completion
  success: {
    hue: 152,
    saturation: 77,
    lightness: { text: 15, background: 85, border: 65 },
  }, // Lush green

  // Used for neutral informational messages, promoting clarity without alarming the user.
  // **Common UI Usage**:
  // - Info alerts (e.g., "FYI: Updates applied")
  // - Helper text or tooltips
  // - Notifications (e.g., "You have 2 unread messages")
  info: {
    hue: 200,
    saturation: 77,
    lightness: { text: 15, background: 85, border: 65 },
  }, // Calm cyan

  // Represents light backgrounds or areas requiring contrast for other elements, providing a clean and minimalistic base.
  // **Common UI Usage**:
  // - Backgrounds for cards, modals, or sections
  // - Placeholder text
  // - Borders or dividers in high-contrast themes
  light: {
    hue: 0,
    saturation: 0,
    lightness: { text: 15, background: 98, border: 70 },
  }, // Pure white

  // A complementary dark shade for creating contrast or grounding lighter UI elements.
  // **Common UI Usage**:
  // - Text on light backgrounds
  // - Dark-themed cards or sections
  // - Toolbars or footers
  dark: {
    hue: 240,
    saturation: 15,
    lightness: { text: 95, background: 15, border: 40 },
  }, // Soft dark gray

  // An attention-grabbing accent color to highlight important elements or encourage engagement.
  // **Common UI Usage**:
  // - Call-to-action highlights (e.g., "Limited Offer")
  // - Highlighted text or icons
  // - Badges (e.g., "Sale", "Promo")
  accent: {
    hue: 50,
    saturation: 94,
    lightness: { text: 15, background: 70, border: 50 },
  }, // Bright yellow

  // Represents less prominent or de-emphasized elements, helping create a balanced and readable design.
  // **Common UI Usage**:
  // - Placeholder text (e.g., "Search...")
  // - Muted button states (e.g., "Disabled")
  // - Backgrounds for less critical components (e.g., tooltips, dropdowns)
  muted: {
    hue: 210,
    saturation: 10,
    lightness: { text: 50, background: 90, border: 70 },
  }, // Subdued gray-blue

  // A vibrant and energetic highlight color used sparingly to add a sense of dynamism and fun.
  // **Common UI Usage**:
  // - Special emphasis on action buttons (e.g., "Upgrade Plan")
  // - Highlights in graphs, charts, or statistics
  // - Special promotional banners or text
  highlight: {
    hue: 280,
    saturation: 80,
    lightness: { text: 95, background: 25, border: 50 },
  }, // Electric purple
} as const

export type TThemeColor = keyof typeof ThemeColorMap

const keyValueMap = Object.entries(ThemeColorMap)
export const themeHueSaturation = keyValueMap
  .map(
    ([key, { hue, saturation, lightness }]) => `#wowjob-ui .theme-${key} {
  --tch: ${hue};
  --tcs: ${saturation}%;
  --tcl: ${lightness.text}%;
  --bgcl: ${lightness.background}%;
  --bdcl: ${lightness.border}%;
  --tca: 1;
  color: hsla(var(--tch), var(--tcs), var(--tcl), var(--tca));
  background-color: hsla(var(--tch), var(--tcs), var(--bgcl), var(--tca));
  border-color: hsla(var(--tch), var(--tcs), var(--bdcl), var(--tca));
}`
  )
  .join('\n')
export const themeLightnessAlpha = ''
// color: white;

```

## TYPESCRIPT: src/type/accent-color.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TAccentColor = 'auto' | TGlobalKeyword | (string & {})

```

## TYPESCRIPT: src/type/align-content.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TAlignContent =
  | 'normal'
  | 'start'
  | 'center'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | `safe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | `unsafe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/align-items.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TAlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | `safe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | `unsafe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/align-self.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TAlignSelf =
  | 'auto'
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | `safe ${'center' | 'start' | 'end' | 'flex-start' | 'flex-end'}`
  | `unsafe ${'center' | 'start' | 'end' | 'flex-start' | 'flex-end'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/animation.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TAnimation =
  | {
      name?: string
      duration?: string | number
      timingFunction?: string
      delay?: string | number
      iterationCount?: number | 'infinite'
      direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
      fillMode?: 'none' | 'forwards' | 'backwards' | 'both'
      playState?: 'running' | 'paused'
      composition?: 'replace' | 'add' | 'accumulate'
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/appearance.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TAppearance =
  | 'none'
  | 'auto'
  | 'menulist-button'
  | 'textfield'
  | 'button'
  | 'checkbox'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/aspect-ratio.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TAspectRatio =
  | 'auto'
  | `${number}`
  | `${number} / ${number}`
  | `${number} auto`
  | `${number} / ${number} auto`
  | `auto ${number} / ${number}`
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/backdrop-filter.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

type TFilterFunction =
  | `url(${string})`
  | `blur(${number | string})`
  | `brightness(${number | string})`
  | `contrast(${number | string})`
  | `drop-shadow(${string})`
  | `grayscale(${number | string})`
  | `hue-rotate(${number | string})`
  | `invert(${number | string})`
  | `opacity(${number | string})`
  | `sepia(${number | string})`
  | `saturate(${number | string})`

export type TBackdropFilter =
  | 'none'
  | TFilterFunction
  | `${TFilterFunction} ${string}` // For multiple filters
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/backface-visibility.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBackfaceVisibility = 'visible' | 'hidden' | TGlobalKeyword

```

## TYPESCRIPT: src/type/background-blend-mode.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBackgroundBlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'
  | `${
      | 'normal'
      | 'multiply'
      | 'screen'
      | 'overlay'
      | 'darken'
      | 'lighten'
      | 'color-dodge'
      | 'color-burn'
      | 'hard-light'
      | 'soft-light'
      | 'difference'
      | 'exclusion'
      | 'hue'
      | 'saturation'
      | 'color'
      | 'luminosity'}, ${string}` // Comma-separated blend modes for multiple backgrounds
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/background-clip.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBackgroundClip =
  | 'border-box'
  | 'padding-box'
  | 'content-box'
  | 'text'
  | 'border-area'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/background-origin.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBackgroundOrigin =
  | 'border-box'
  | 'padding-box'
  | 'content-box'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/background.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBackground =
  | {
      color?: string
      image?: string
      positionX?: string | number
      positionY?: string | number
      size?: string
      repeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
      attachment?: 'scroll' | 'fixed' | 'local'
      origin?: 'border-box' | 'padding-box' | 'content-box'
      clip?: 'border-box' | 'padding-box' | 'content-box' | 'text'
      blendMode?: string
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/block-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBlockSize =
  | number
  | TDirectionalUnit
  | 'auto'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string})`
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-block-end.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderBlockEnd =
  | {
      width?: string | number
      style?: TBorderStyle
      color?: string
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-block-start.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderBlockStart =
  | {
      width?: string | number
      style?: TBorderStyle
      color?: string
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-block.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderBlock =
  | {
      width?: string | number
      style?: TBorderStyle
      color?: string
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-bottom-left-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderBottomLeftRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-bottom-right-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderBottomRightRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-bottom.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderBottom =
  | {
      color?: string
      style?: TBorderStyle
      width?: string | number | TDirectionalUnit
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-collapse.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBorderCollapse = 'collapse' | 'separate' | TGlobalKeyword

```

## TYPESCRIPT: src/type/border-end-end-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderEndEndRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-end-start-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderEndStartRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-image.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBorderImage =
  | {
      source?: string
      slice?: string | number
      width?: string | number
      outset?: string | number
      repeat?: 'stretch' | 'repeat' | 'round' | 'space'
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-inline-end.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderInlineEnd =
  | {
      width?: string | number
      style?: TBorderStyle
      color?: string
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-inline-start.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderInlineStart =
  | {
      width?: string | number
      style?: TBorderStyle
      color?: string
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-inline.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderInline =
  | {
      width?: string | number
      style?: TBorderStyle
      color?: string
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-left.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderLeft =
  | {
      color?: string
      style?: TBorderStyle
      width?: string | number | TDirectionalUnit
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderRadius =
  | number
  | TGlobalKeyword
  | TDirectionalUnit
  | [
      (number | TDirectionalUnit | (string & {}))?,
      (number | TDirectionalUnit | (string & {}))?,
      (number | TDirectionalUnit | (string & {}))?,
      (number | TDirectionalUnit | (string & {}))?
    ]
  | {
      topLeft?: number | TDirectionalUnit | (string & {})

      topRight?: number | TDirectionalUnit | (string & {})

      bottomRight?: number | TDirectionalUnit | (string & {})

      bottomLeft?: number | TDirectionalUnit | (string & {})
    }
  | (string & {})

```

## TYPESCRIPT: src/type/border-right.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderRight =
  | {
      color?: string
      style?: TBorderStyle
      width?: number | TDirectionalUnit | (string & {})
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-start-end-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderStartEndRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-start-start-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderStartStartRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-top-left-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderTopLeftRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-top-right-radius.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderTopRightRadius =
  | number
  | TDirectionalUnit
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-top.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderTop =
  | {
      color?: string
      style?: TBorderStyle
      width?: number | TDirectionalUnit | (string & {})
    }
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/border-width.ts

```typescript
import type { TDirectional } from './directional'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderWidth =
  | TDirectional<TGlobalKeyword | string>
  | number
  | (string & {})

```

## TYPESCRIPT: src/type/border.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBorderKeyword = 'none' | TGlobalKeyword

export type TBorderWidthUnit =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`

export type TBorderStyle =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'hidden'
  | 'none'
  | null
  | undefined

export type TBorder =
  | {
      width?: TBorderWidthUnit | number
      style?: TBorderStyle
      color?: string
    }
  | TBorderKeyword
  | boolean
  | string

```

## TYPESCRIPT: src/type/bottom.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBottom =
  | number
  | (string & {})
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/box-shadow.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBoxShadow =
  | 'none'
  | string // Represents a single or multiple box-shadow values as a string
  | string[] // Represents an array of box-shadow values
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/box-sizing.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBoxSizing = 'border-box' | 'content-box' | TGlobalKeyword

```

## TYPESCRIPT: src/type/break-after.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBreakAfter =
  | 'auto'
  | 'avoid'
  | 'always'
  | 'all'
  | 'avoid-page'
  | 'page'
  | 'left'
  | 'right'
  | 'recto'
  | 'verso'
  | 'avoid-column'
  | 'column'
  | 'avoid-region'
  | 'region'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/break-before.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBreakBefore =
  | 'auto'
  | 'avoid'
  | 'always'
  | 'all'
  | 'avoid-page'
  | 'page'
  | 'left'
  | 'right'
  | 'recto'
  | 'verso'
  | 'avoid-column'
  | 'column'
  | 'avoid-region'
  | 'region'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/break-inside.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TBreakInside =
  | 'auto'
  | 'avoid'
  | 'avoid-page'
  | 'avoid-column'
  | 'avoid-region'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/caption-side.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TCaptionSide = 'top' | 'bottom' | TGlobalKeyword

```

## TYPESCRIPT: src/type/caret-color.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TCaretColor =
  | 'auto'
  | 'transparent'
  | 'currentcolor'
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/clear.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TClear =
  | 'none'
  | 'left'
  | 'right'
  | 'both'
  | 'inline-start'
  | 'inline-end'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/clip-path.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TClipPath =
  | 'none'
  | `url(${string})` // <clip-source> values
  | 'margin-box'
  | 'border-box'
  | 'padding-box'
  | 'content-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
  | `inset(${string})` // <basic-shape> inset
  | `circle(${string})` // <basic-shape> circle
  | `ellipse(${string})` // <basic-shape> ellipse
  | `polygon(${string})` // <basic-shape> polygon
  | `path(${string})` // <basic-shape> path
  | `rect(${string})` // <basic-shape> rect
  | `xywh(${string})` // Custom <basic-shape>
  | `${string} ${string}` // Box and shape values combined
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/clip.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TClip = 'auto' | `rect(${string})` | TGlobalKeyword

```

## TYPESCRIPT: src/type/color-interpolation-filters.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColorInterpolationFilters =
  | 'auto'
  | 'sRGB'
  | 'linearRGB'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/color-interpolation.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColorInterpolation = 'auto' | 'sRGB' | 'linearRGB' | TGlobalKeyword

```

## TYPESCRIPT: src/type/color-scheme.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColorScheme =
  | 'normal'
  | 'light'
  | 'dark'
  | 'light dark'
  | 'only light'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/color.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColor = 'currentcolor' | string | TGlobalKeyword

```

## TYPESCRIPT: src/type/column-count.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColumnCount =
  | 'auto'
  | number // Represents <integer> value
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/column-fill.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColumnFill = 'auto' | 'balance' | TGlobalKeyword

```

## TYPESCRIPT: src/type/column-gap.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColumnGap =
  | 'normal'
  | number
  | `${number}px`
  | `${number}em`
  | `${number}%`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/column-rule.ts

```typescript
import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TColumnRule =
  | string // Represents shorthand values like 'solid blue' or 'thick inset blue'
  | {
      color?: string // Color value (e.g., 'blue', '#000')
      style?: TBorderStyle
      width?: string | number // Width in px, em, rem, or as a number
    }
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/column-span.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColumnSpan = 'none' | 'all' | TGlobalKeyword

```

## TYPESCRIPT: src/type/column-width.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TColumnWidth =
  | 'auto'
  | `${number}px`
  | `${number}em`
  | `${number}vw`
  | number // Represents a numeric value to be converted to rem
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/contain-intrinsic-block-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContainIntrinsicBlockSize =
  | 'none'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${'auto'} ${number}px` // Represents auto <length> combination
  | number
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/contain-intrinsic-height.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContainIntrinsicHeight =
  | 'none'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${'auto'} ${number}px` // Represents auto <length> combination
  | number
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/contain-intrinsic-inline-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContainIntrinsicInlineSize =
  | 'none'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${'auto'} ${number}px` // Represents auto <length> combination
  | number
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/contain-intrinsic-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContainIntrinsicSize =
  | 'none'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${number}px ${number}${'px' | 'em' | 'rem' | 'vw' | 'vh'}` // width | height
  | `${'auto'} ${number}px`
  | `${'auto'} ${'none'}`
  | `${'auto'} ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'vw'
      | 'vh'} ${'auto'} ${number}${'px' | 'em' | 'rem' | 'vw' | 'vh'}` // auto width | auto height
  | number
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/contain-intrinsic-width.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContainIntrinsicWidth =
  | 'none'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${'auto'} ${number}px` // Represents auto <length> combination
  | number
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/contain.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContain =
  | 'none'
  | 'strict'
  | 'content'
  | 'size'
  | 'inline-size'
  | 'layout'
  | 'style'
  | 'paint'
  | `${'size' | 'inline-size'} ${'layout' | 'paint' | 'style' | ''}`
  | `${'size'} ${'layout'} ${'paint'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/container.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContainer =
  | string // Represents <container-name>
  | `${string} / size` // Represents <container-name> / <container-type>
  | `${string} / inline-size` // Optional <container-type>
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/content-visibility.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContentVisibility = 'visible' | 'hidden' | 'auto' | TGlobalKeyword

```

## TYPESCRIPT: src/type/content.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TContent =
  | 'normal'
  | 'none'
  | `url(${string})`
  | `linear-gradient(${string})`
  | `image-set(${string})`
  | `${'url'}(${string}) / ${string}` // Speech output alternative text
  | `"${string}"` // String value
  | `counter(${string})`
  | `counter(${string}, ${string})` // With list-style-type
  | `counters(${string}, ${string})`
  | `counters(${string}, ${string}, ${string})`
  | `attr(${string})` // HTML attribute value
  | 'open-quote'
  | 'close-quote'
  | 'no-open-quote'
  | 'no-close-quote'
  | `${string} ${string}` // Content list values
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/counter-increment.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TCounterIncrement =
  | 'none'
  | string // Represents a list of counters and their increments/decrements
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/counter-reset.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TCounterReset =
  | 'none'
  | string // Represents a list of counters and their initial values, including reversed
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/counter-set.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TCounterSet =
  | 'none'
  | string // Represents a list of counters and their values
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/cursor.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TCursor =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'zoom-in'
  | 'zoom-out'
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/cx.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TCx =
  | `${number}px`
  | `${number}%`
  | number // Allows raw numbers for conversion to rem
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/cy.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TCy =
  | `${number}px`
  | `${number}%`
  | number // Allows raw numbers for conversion to rem
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/d.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TD =
  | 'none'
  | `path(${string})` // Represents a path string for basic usage
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/direction.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TDirection = 'ltr' | 'rtl' | TGlobalKeyword

```

## TYPESCRIPT: src/type/directional-unit.ts

```typescript
export type TDirectionalUnit =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `${number}vw`
  | `${number}vh`
  | `calc${string}`
  | `var(${string})`
  | `clamp(${string})`

```

## TYPESCRIPT: src/type/directional.ts

```typescript
import type { TDirectionalUnit } from './directional-unit'

export type TDirectionalBase<T> =
  | T
  | number
  | TDirectionalUnit
  | [
      (T | number | TDirectionalUnit | (string & {}))?,
      (T | number | TDirectionalUnit | (string & {}))?,
      (T | number | TDirectionalUnit | (string & {}))?,
      (T | number | TDirectionalUnit | (string & {}))?
    ]

export type TDirectionalSimple<T> = TDirectionalBase<T> | (string & {})

export type TDirectional<T> =
  | TDirectionalBase<T>
  | {
      top?: T | number | TDirectionalUnit
      right?: T | number | TDirectionalUnit
      bottom?: T | number | TDirectionalUnit
      left?: T | number | TDirectionalUnit
    }
  | (string & {})

```

## TYPESCRIPT: src/type/display.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TDisplay =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'flow-root'
  | 'none'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/dominant-baseline.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TDominantBaseline =
  | 'auto'
  | 'alphabetic'
  | 'central'
  | 'hanging'
  | 'ideographic'
  | 'mathematical'
  | 'middle'
  | 'text-bottom'
  | 'text-top'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/empty-cells.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TEmptyCells = 'show' | 'hide' | TGlobalKeyword

```

## TYPESCRIPT: src/type/field-sizing.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFieldSizing = 'content' | 'fixed' | TGlobalKeyword

```

## TYPESCRIPT: src/type/fill-opacity.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFillOpacity =
  | number // Numeric value
  | `${number}%` // Percentage value
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/fill-rule.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFillRule = 'evenodd' | 'nonzero' | TGlobalKeyword

```

## TYPESCRIPT: src/type/fill.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFill =
  | 'none'
  | 'context-fill'
  | 'context-stroke'
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/filter.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFilter =
  | 'none'
  | `blur(${string})`
  | `brightness(${string})`
  | `contrast(${string})`
  | `drop-shadow(${string})`
  | `grayscale(${string})`
  | `hue-rotate(${string})`
  | `invert(${string})`
  | `opacity(${string})`
  | `saturate(${string})`
  | `sepia(${string})`
  | `url(${string})`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/flex-basis.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TFlexBasis =
  | 'auto'
  | TGlobalKeyword
  | TDirectionalUnit
  | (string & {})

```

## TYPESCRIPT: src/type/flex-direction.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/flex-grow.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFlexGrow = number | TGlobalKeyword | (string & {})

```

## TYPESCRIPT: src/type/flex-shrink.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFlexShrink = number | TGlobalKeyword | (string & {})

```

## TYPESCRIPT: src/type/flex-wrap.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFlexWrap =
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/flex.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFlex =
  | 'none'
  | 'auto'
  | TGlobalKeyword
  | [number | string, number | string, number | string]
  | (string & {})

```

## TYPESCRIPT: src/type/float.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFloat =
  | 'left'
  | 'right'
  | 'none'
  | 'inline-start'
  | 'inline-end'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/flood-color.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFloodColor = 'currentcolor' | TGlobalKeyword | (string & {})

```

## TYPESCRIPT: src/type/flood-opacity.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFloodOpacity =
  | number // Numeric value
  | `${number}%` // Percentage value
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-family.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontFamily = TGlobalKeyword | string // Covers font family names and generic family names

```

## TYPESCRIPT: src/type/font-feature-settings.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontFeatureSettings = 'normal' | TGlobalKeyword | (string & {})

```

## TYPESCRIPT: src/type/font-kerning.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontKerning = 'auto' | 'normal' | 'none' | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-language-override.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontLanguageOverride =
  | 'normal'
  | `"${string}"` // Represents language tag strings like "ENG" or "TRK"
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-optical-sizing.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontOpticalSizing = 'none' | 'auto' | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-palette.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontPalette =
  | 'normal' // Using font-defined palette
  | `--${string}` // User-defined palette
  | `palette-mix(${string})` // Creating a new palette
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-size-adjust.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontSizeAdjust =
  | 'none'
  | 'from-font'
  | number // Single numeric value
  | `${'ex-height' | 'ch-width'} ${number | 'from-font'}` // Two values
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'
  | 'smaller'
  | 'larger'
  | 'math'
  | TGlobalKeyword
  | number // Covers length and percentage values
  | (string & {})

```

## TYPESCRIPT: src/type/font-stretch.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontStretch =
  | TGlobalKeyword
  | 'normal'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded'
  | (string & {}) // Covers percentage values

```

## TYPESCRIPT: src/type/font-style.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontStyle =
  | TGlobalKeyword
  | 'normal'
  | 'italic'
  | 'oblique'
  | `oblique ${string | number}` // Covers angle values for oblique

```

## TYPESCRIPT: src/type/font-synthesis-small-caps.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontSynthesisSmallCaps = 'auto' | 'none' | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-synthesis-style.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontSynthesisStyle = 'auto' | 'none' | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-synthesis-weight.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontSynthesisWeight = 'auto' | 'none' | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-variant-alternates.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantAlternates =
  | 'normal'
  | 'historical-forms'
  | `stylistic(${string})`
  | `styleset(${string})`
  | `character-variant(${string})`
  | `swash(${string})`
  | `ornaments(${string})`
  | `annotation(${string})`
  | `${string} ${string}` // Combination of multiple functional notations
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-variant-caps.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantCaps =
  | 'normal'
  | 'small-caps'
  | 'all-small-caps'
  | 'petite-caps'
  | 'all-petite-caps'
  | 'unicase'
  | 'titling-caps'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-variant-east-asian.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantEastAsian =
  | 'normal'
  | 'ruby'
  | 'jis78'
  | 'jis83'
  | 'jis90'
  | 'jis04'
  | 'simplified'
  | 'traditional'
  | 'full-width'
  | 'proportional-width'
  | `${string} ${string}` // Combinations like 'ruby full-width jis83'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-variant-ligatures.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantLigatures =
  | 'normal'
  | 'none'
  | 'common-ligatures'
  | 'no-common-ligatures'
  | 'discretionary-ligatures'
  | 'no-discretionary-ligatures'
  | 'historical-ligatures'
  | 'no-historical-ligatures'
  | 'contextual'
  | 'no-contextual'
  | `${string} ${string}` // Combinations like 'no-contextual common-ligatures'
  | `${string} ${string} ${string} ${string}` // Four values like 'common-ligatures no-discretionary-ligatures historical-ligatures contextual'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-variant-numeric.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantNumeric =
  | 'normal'
  | 'ordinal'
  | 'slashed-zero'
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions'
  | `${string} ${string}` // Combinations like 'oldstyle-nums stacked-fractions'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-variant-position.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontVariantPosition = 'normal' | 'sub' | 'super' | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-variant.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

type TFontVariantLigatures =
  | 'common-ligatures'
  | 'no-common-ligatures'
  | 'discretionary-ligatures'
  | 'no-discretionary-ligatures'
  | 'historical-ligatures'
  | 'no-historical-ligatures'
  | 'contextual'
  | 'no-contextual'
  | (string & {}) // Covers functional values like stylistic(), historical-forms, etc.

type TFontVariantCaps =
  | 'small-caps'
  | 'all-small-caps'
  | 'petite-caps'
  | 'all-petite-caps'
  | 'unicase'
  | 'titling-caps'

type TFontVariantNumeric =
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions'
  | 'ordinal'
  | 'slashed-zero'

type TFontVariantEastAsian =
  | 'jis78'
  | 'jis83'
  | 'jis90'
  | 'jis04'
  | 'simplified'
  | 'traditional'
  | 'full-width'
  | 'proportional-width'
  | 'ruby'

type TFontVariantPosition = 'sub' | 'super'

type TFontVariantEmoji = 'text' | 'emoji' | 'unicode'

export type TFontVariant =
  | TGlobalKeyword
  | 'normal'
  | 'none'
  | TFontVariantLigatures
  | TFontVariantCaps
  | TFontVariantNumeric
  | TFontVariantEastAsian
  | TFontVariantPosition
  | TFontVariantEmoji
  | (string & {}) // Covers combinations or additional functional values

```

## TYPESCRIPT: src/type/font-variation-settings.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontVariationSettings =
  | 'normal'
  | `"${string}" ${number}` // Represents variable font axis settings like "xhgt" 0.7
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/font-weight.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontWeight =
  | TGlobalKeyword
  | 'normal'
  | 'bold'
  | 'lighter'
  | 'bolder'
  | number // Numeric values from 1 to 1000

```

## TYPESCRIPT: src/type/font.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TFontSize =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | number // Numeric values for conversion to rem
  | TGlobalKeyword

export type TFontStretch =
  | 'normal'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded'
  | `${number}%`
  | TGlobalKeyword

export type TFontStyle =
  | 'normal'
  | 'italic'
  | 'oblique'
  | `oblique ${number}deg`
  | TGlobalKeyword

export type TFontVariant =
  | 'small-caps'
  | `${string}` // Combinations like "common-ligatures small-caps"
  | TGlobalKeyword

export type TFontWeight =
  | 'normal'
  | 'bold'
  | 'lighter'
  | 'bolder'
  | `${number}` // Numeric values [1, 1000]
  | TGlobalKeyword

export type TLineHeight =
  | 'normal'
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | TGlobalKeyword
  | (string & {})

export type TFont =
  | {
      family?: string
      size?: TFontSize
      stretch?: TFontStretch
      style?: TFontStyle
      variant?: TFontVariant
      weight?: TFontWeight
      lineHeight?: TLineHeight
    }
  | TGlobalKeyword
  | string // Shorthand string representation

```

## TYPESCRIPT: src/type/forced-color-adjust.ts

```typescript
export type TForcedColorAdjust =
  | 'auto'
  | 'none'
  | 'preserve-parent-color'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

```

## TYPESCRIPT: src/type/gap.ts

```typescript
export type TGap =
  | string
  | number
  | [string | number, string | number]
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

```

## TYPESCRIPT: src/type/global-keyword.ts

```typescript
export type TGlobalKeyword =
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

```

## TYPESCRIPT: src/type/grid-auto-columns.ts

```typescript
export type TGridAutoColumns =
  | string
  | number
  | Array<string | number>
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

```

## TYPESCRIPT: src/type/grid-auto-flow.ts

```typescript
export type TGridAutoFlow =
  | 'row'
  | 'column'
  | 'dense'
  | 'row dense'
  | 'column dense'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

```

## TYPESCRIPT: src/type/grid-auto-rows.ts

```typescript
export type TGridAutoRows =
  | number
  | Array<string | number>
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
  | (string & {})

```

## TYPESCRIPT: src/type/grid-column.ts

```typescript
export type TGridColumn =
  | number
  | Array<string | number>
  | { start?: string | number; end?: string | number }
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
  | string

```

## TYPESCRIPT: src/type/grid-row.ts

```typescript
export type TGridRow =
  | number
  | Array<string | number>
  | { start?: string | number; end?: string | number }
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
  | string

```

## TYPESCRIPT: src/type/grid-template-areas.ts

```typescript
export type TGridTemplateAreas =
  | string
  | Array<string>
  | 'none'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

```

## TYPESCRIPT: src/type/grid-template-columns.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TGridTemplateColumns = TGlobalKeyword | 'none' | string // Covers track-list and auto-track-list values

```

## TYPESCRIPT: src/type/grid-template-rows.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TGridTemplateRows = TGlobalKeyword | 'none' | string // Covers track-list and auto-track-list values

```

## TYPESCRIPT: src/type/grid-template.ts

```typescript
export type TGridTemplate =
  | string
  | Array<string | number>
  | {
      rows?: string | number | Array<string | number>
      columns?: string | number | Array<string | number>
    }
  | 'none'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

```

## TYPESCRIPT: src/type/height.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type THeight =
  | number
  | 'auto'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `minmax(${string | number}, ${string | number})`
  | `clamp(${string | number}, ${string | number})`
  | `anchor-size(${string | number}, ${string | number})`
  | 'stretch'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vh`
  | `${number}vw`
  | `${number}vmin`
  | `${number}vmax`
  | `${number}cm`
  | `${number}mm`
  | `${number}in`
  | `${number}pt`
  | `${number}pc`
  | `${number}%`
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/hyphenate-character.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type THyphenateCharacter = (string & {}) | 'auto' | TGlobalKeyword

```

## TYPESCRIPT: src/type/hyphens.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type THyphens =
  | 'none'
  | 'manual'
  | 'auto'
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/image-orientation.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TImageOrientation = 'none' | 'from-image' | TGlobalKeyword

```

## TYPESCRIPT: src/type/image-rendering.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TImageRendering =
  | 'auto'
  | 'smooth'
  | 'crisp-edges'
  | 'pixelated'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/index.ts

```typescript
export type {
  TDirectional,
  TDirectionalBase,
  TDirectionalSimple,
} from './directional'
export type { TDirectionalUnit } from './directional-unit'
export type { TGlobalKeyword } from './global-keyword'

export type { TAccentColor } from './accent-color'
export type { TAlignContent } from './align-content'
export type { TAlignItems } from './align-items'
export type { TAlignSelf } from './align-self'
export type { TAnimation } from './animation'
export type { TAppearance } from './appearance'
export type { TAspectRatio } from './aspect-ratio'
export type { TBackdropFilter } from './backdrop-filter'
export type { TBackfaceVisibility } from './backface-visibility'
export type { TBackground } from './background'
export type { TBackgroundBlendMode } from './background-blend-mode'
export type { TBackgroundClip } from './background-clip'
export type { TBackgroundOrigin } from './background-origin'
export type { TBlockSize } from './block-size'
export type { TBorder, TBorderStyle } from './border'
export type { TBorderBlock } from './border-block'
export type { TBorderBlockStart } from './border-block-start'
export type { TBorderBlockEnd } from './border-block-end'
export type { TBorderBottom } from './border-bottom'
export type { TBorderBottomLeftRadius } from './border-bottom-left-radius'
export type { TBorderBottomRightRadius } from './border-bottom-right-radius'
export type { TBorderCollapse } from './border-collapse'
export type { TBorderEndEndRadius } from './border-end-end-radius'
export type { TBorderEndStartRadius } from './border-end-start-radius'
export type { TBorderImage } from './border-image'
export type { TBorderInline } from './border-inline'
export type { TBorderInlineStart } from './border-inline-start'
export type { TBorderInlineEnd } from './border-inline-end'
export type { TBorderLeft } from './border-left'
export type { TBorderRadius } from './border-radius'
export type { TBorderRight } from './border-right'
export type { TBorderStartEndRadius } from './border-start-end-radius'
export type { TBorderStartStartRadius } from './border-start-start-radius'
export type { TBorderTop } from './border-top'
export type { TBorderTopLeftRadius } from './border-top-left-radius'
export type { TBorderTopRightRadius } from './border-top-right-radius'
export type { TBorderWidth } from './border-width'
export type { TBottom } from './bottom'
export type { TBoxShadow } from './box-shadow'
export type { TBoxSizing } from './box-sizing'
export type { TBreakAfter } from './break-after'
export type { TBreakBefore } from './break-before'
export type { TBreakInside } from './break-inside'
export type { TCaptionSide } from './caption-side'
export type { TCaretColor } from './caret-color'
export type { TClear } from './clear'
export type { TClip } from './clip'
export type { TClipPath } from './clip-path'
export type { TColor } from './color'
export type { TColorInterpolation } from './color-interpolation'
export type { TColorInterpolationFilters } from './color-interpolation-filters'
export type { TColorScheme } from './color-scheme'
export type { TColumnCount } from './column-count'
export type { TColumnFill } from './column-fill'
export type { TColumnGap } from './column-gap'
export type { TColumnRule } from './column-rule'
export type { TColumnSpan } from './column-span'
export type { TColumnWidth } from './column-width'
export type { TContain } from './contain'
export type { TContainIntrinsicBlockSize } from './contain-intrinsic-block-size'
export type { TContainIntrinsicHeight } from './contain-intrinsic-height'
export type { TContainIntrinsicInlineSize } from './contain-intrinsic-inline-size'
export type { TContainIntrinsicSize } from './contain-intrinsic-size'
export type { TContainIntrinsicWidth } from './contain-intrinsic-width'
export type { TContainer } from './container'
export type { TContent } from './content'
export type { TContentVisibility } from './content-visibility'
export type { TCounterIncrement } from './counter-increment'
export type { TCounterReset } from './counter-reset'
export type { TCounterSet } from './counter-set'
export type { TCursor } from './cursor'
export type { TCx } from './cx'
export type { TCy } from './cy'
export type { TD } from './d'
export type { TDisplay } from './display'
export type { TDirection } from './direction'
export type { TDominantBaseline } from './dominant-baseline'
export type { TEmptyCells } from './empty-cells'
export type { TFlex } from './flex'
export type { TFlexBasis } from './flex-basis'
export type { TFlexDirection } from './flex-direction'
export type { TFlexGrow } from './flex-grow'
export type { TFlexShrink } from './flex-shrink'
export type { TFlexWrap } from './flex-wrap'
export type { TFieldSizing } from './field-sizing'
export type { TFill } from './fill'
export type { TFillOpacity } from './fill-opacity'
export type { TFillRule } from './fill-rule'
export type { TFilter } from './filter'
export type { TFloat } from './float'
export type { TFloodColor } from './flood-color'
export type { TFloodOpacity } from './flood-opacity'
export type { TFont } from './font'
export type { TFontFamily } from './font-family'
export type { TFontSize } from './font-size'
export type { TFontStretch } from './font-stretch'
export type { TFontStyle } from './font-style'
export type { TFontVariant } from './font-variant'
export type { TFontWeight } from './font-weight'
export type { TFontFeatureSettings } from './font-feature-settings'
export type { TFontKerning } from './font-kerning'
export type { TFontLanguageOverride } from './font-language-override'
export type { TFontOpticalSizing } from './font-optical-sizing'
export type { TFontPalette } from './font-palette'
export type { TFontSizeAdjust } from './font-size-adjust'
export type { TFontSynthesisSmallCaps } from './font-synthesis-small-caps'
export type { TFontSynthesisStyle } from './font-synthesis-style'
export type { TFontSynthesisWeight } from './font-synthesis-weight'
export type { TFontVariantAlternates } from './font-variant-alternates'
export type { TFontVariantCaps } from './font-variant-caps'
export type { TFontVariantEastAsian } from './font-variant-east-asian'
export type { TFontVariantLigatures } from './font-variant-ligatures'
export type { TFontVariantNumeric } from './font-variant-numeric'
export type { TFontVariantPosition } from './font-variant-position'
export type { TFontVariationSettings } from './font-variation-settings'
export type { TForcedColorAdjust } from './forced-color-adjust'
export type { TGap } from './gap'
export type { TGridAutoColumns } from './grid-auto-columns'
export type { TGridAutoFlow } from './grid-auto-flow'
export type { TGridAutoRows } from './grid-auto-rows'
export type { TGridColumn } from './grid-column'
export type { TGridRow } from './grid-row'
export type { TGridTemplate } from './grid-template'
export type { TGridTemplateAreas } from './grid-template-areas'
export type { TGridTemplateColumns } from './grid-template-columns'
export type { TGridTemplateRows } from './grid-template-rows'
export type { THeight } from './height'
export type { THyphenateCharacter } from './hyphenate-character'
export type { THyphens } from './hyphens'
export type { TImageOrientation } from './image-orientation'
export type { TImageRendering } from './image-rendering'
export type { TInlineSize } from './inline-size'
export type { TInset } from './inset'
export type { TInsetBlock } from './inset-block'
export type { TInsetInline } from './inset-inline'
export type { TIsolation } from './isolation'
export type { TJustifyContent } from './justify-content'
export type { TJustifyItems } from './justify-items'
export type { TJustifySelf } from './justify-self'
export type { TLeft } from './left'
export type { TLetterSpacing } from './letter-spacing'
export type { TLightingColor } from './lighting-color'
export type { TLineBreak } from './line-break'
export type { TLineHeight } from './line-height'
export type { TListStyle } from './list-style'
export type { TMargin } from './margin'
export type { TMarginBlock } from './margin-block'
export type { TMarginInline } from './margin-inline'
export type { TMask } from './mask'
export type { TMaskClip } from './mask-clip'
export type { TMathStyle } from './math-style'
export type { TMaxBlockSize } from './max-block-size'
export type { TMaxHeight } from './max-height'
export type { TMaxInlineSize } from './max-inline-size'
export type { TMaxWidth } from './max-width'
export type { TMinBlockSize } from './min-block-size'
export type { TMinHeight } from './min-height'
export type { TMinInlineSize } from './min-inline-size'
export type { TMinWidth } from './min-width'
export type { TMixBlendMode } from './mix-blend-mode'
export type { TObjectFit } from './object-fit'
export type { TObjectPosition } from './object-position'
export type { TOffsetAnchor } from './offset-anchor'
export type { TOffset } from './offset'
export type { TOpacity } from './opacity'
export type { TOrder } from './order'
export type { TOutline } from './outline'
export type { TOutlineOffset } from './outline-offset'
export type { TOverflow } from './overflow'
export type { TOverscrollBehavior } from './overscroll-behavior'
export type { TOverscrollBehaviorBlock } from './overscroll-behavior-block'
export type { TOverscrollBehaviorInline } from './overscroll-behavior-inline'
export type { TPadding } from './padding'
export type { TPerspective } from './perspective'
export type { TPerspectiveOrigin } from './perspective-origin'
export type { TPlaceContent } from './place-content'
export type { TPlaceItems } from './place-items'
export type { TPlaceSelf } from './place-self'
export type { TPointerEvents } from './pointer-events'
export type { TPosition } from './position'
export type { TQuotes } from './quotes'
export type { TResize } from './resize'
export type { TRight } from './right'
export type { TRotate } from './rotate'
export type { TRubyAlign } from './ruby-align'
export type { TRubyPosition } from './ruby-position'
export type { TScale } from './scale'
export type { TScrollBehavior } from './scroll-behavior'
export type { TScrollMargin } from './scroll-margin'
export type { TScrollPadding } from './scroll-padding'
export type { TScrollSnapAlign } from './scroll-snap-align'
export type { TScrollSnapStop } from './scroll-snap-stop'
export type { TScrollSnapType } from './scroll-snap-type'
export type { TScrollTimeline } from './scroll-timeline'
export type { TScrollTimelineAxis } from './scroll-timeline-axis'
export type { TScrollTimelineName } from './scroll-timeline-name'
export type { TScrollbarColor } from './scrollbar-color'
export type { TScrollbarGutter } from './scrollbar-gutter'
export type { TScrollbarWidth } from './scrollbar-width'
export type { TShapeImageThreshold } from './shape-image-threshold'
export type { TShapeMargin } from './shape-margin'
export type { TShapeOutside } from './shape-outside'
export type { TShapeRendering } from './shape-rendering'
export type { TStopColor } from './stop-color'
export type { TStopOpacity } from './stop-opacity'
export type { TStroke } from './stroke'
export type { TStrokeDasharray } from './stroke-dasharray'
export type { TStrokeDashoffset } from './stroke-dashoffset'
export type { TStrokeLinecap } from './stroke-linecap'
export type { TStrokeLinejoin } from './stroke-linejoin'
export type { TStrokeMiterlimit } from './stroke-miterlimit'
export type { TStrokeOpacity } from './stroke-opacity'
export type { TStrokeWidth } from './stroke-width'
export type { TTabSize } from './tab-size'
export type { TTableLayout } from './table-layout'
export type { TTextAlign } from './text-align'
export type { TTextAlignLast } from './text-align-last'
export type { TTextAnchor } from './text-anchor'
export type { TTextCombineUpright } from './text-combine-upright'
export type { TTextDecoration } from './text-decoration'
export type { TTextEmphasis } from './text-emphasis'
export type { TTextIndent } from './text-indent'
export type { TTextJustify } from './text-justify'
export type { TTextOrientation } from './text-orientation'
export type { TTextOverflow } from './text-overflow'
export type { TTextRendering } from './text-rendering'
export type { TTextShadow } from './text-shadow'
export type { TTextTransform } from './text-transform'
export type { TTextUnderlineOffset } from './text-underline-offset'
export type { TTextUnderlinePosition } from './text-underline-position'
export type { TTextWrap } from './text-wrap'
export type { TTextWrapStyle } from './text-wrap-style'
export type { TTouchAction } from './touch-action'
export type { TTop } from './top'
export type { TTransform } from './transform'
export type { TTransformBox } from './transform-box'
export type { TTransformOrigin } from './transform-origin'
export type { TTransformStyle } from './transform-style'
export type { TTransition } from './transition'
export type { TTransitionBehavior } from './transition-behavior'
export type { TTranslate } from './translate'
export type { TUserSelect } from './user-select'
export type { TViewTransitionName } from './view-transition-name'
export type { TVectorEffect } from './vector-effect'
export type { TVerticalAlign } from './vertical-align'
export type { TVisibility } from './visibility'
export type { TWhiteSpace } from './white-space'
export type { TWidth } from './width'
export type { TWillChange } from './will-change'
export type { TWordBreak } from './word-break'
export type { TWordSpacing } from './word-spacing'
export type { TWritingMode } from './writing-mode'
export type { TZIndex } from './z-index'
export type { TZoom } from './zoom'

```

## TYPESCRIPT: src/type/inline-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TInlineSize =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `${number}vh`
  | `${number}vw`
  | `${number}vmin`
  | `${number}vmax`
  | 'auto'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `anchor-size(${string})`
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/inset-block.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TInsetBlock =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | 'auto'
  | `anchor(${string})`
  | `anchor-size(${string}, ${string | number})`
  | [TInsetBlock, TInsetBlock?] // Supports shorthand formats for start and end
  | { start?: TInsetBlock; end?: TInsetBlock } // Object with start and end keys
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/inset-inline.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TInsetInline =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | 'auto'
  | `anchor(${string})`
  | `anchor-size(${string}, ${string | number})`
  | [TInsetInline, TInsetInline?] // Supports shorthand formats for start and end
  | { start?: TInsetInline; end?: TInsetInline } // Object with start and end keys
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/inset.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TInset =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `${number}vh`
  | `${number}vw`
  | `${number}vmin`
  | `${number}vmax`
  | 'auto'
  | [TInset, TInset?, TInset?, TInset?] // Supports shorthand formats
  | `calc(${string})`
  | `anchor(${string})`
  | `anchor-size(${string})`
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/isolation.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TIsolation = 'auto' | 'isolate' | TGlobalKeyword

```

## TYPESCRIPT: src/type/justify-content.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TJustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | `safe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | `unsafe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/justify-items.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TJustifyItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | `safe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | `unsafe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | `legacy ${'right' | 'left' | 'center'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/justify-self.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TJustifySelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | `safe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | `unsafe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/left.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TLeft =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/letter-spacing.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TLetterSpacing =
  | 'normal'
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/lighting-color.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TLightingColor =
  | 'currentcolor'
  | `#${string}` // Hex color
  | `rgb(${string})`
  | `rgba(${string})`
  | `hsl(${string})`
  | `hsla(${string})`
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/line-break.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TLineBreak =
  | 'auto'
  | 'loose'
  | 'normal'
  | 'strict'
  | 'anywhere'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/line-height.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TLineHeight =
  | 'normal'
  | number
  | (string & {})
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/list-style.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TListStyle =
  | 'none'
  | 'square'
  | 'circle'
  | 'disc'
  | 'decimal'
  | 'lower-roman'
  | 'upper-roman'
  | 'georgian'
  | `url(${string})`
  | 'inside'
  | 'outside'
  | `${string} ${string}` // Two values (e.g., `type position` or `image position`)
  | `${string} ${string} ${string}` // Three values (e.g., `type image position`)
  | {
      type?:
        | 'disc'
        | 'circle'
        | 'square'
        | 'decimal'
        | 'lower-roman'
        | 'upper-roman'
        | 'georgian'
        | 'trad-chinese-informal'
        | 'kannada'
        | '"-"'
        | 'custom-counter-style'
        | 'none'
      image?: 'none' | `url(${string})`
      position?: 'inside' | 'outside' | TGlobalKeyword
    } // Object format
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/margin-block.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMarginBlock =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | [TMarginBlock, TMarginBlock?] // Supports shorthand formats for start and end
  | { start?: TMarginBlock; end?: TMarginBlock } // Object with start and end keys
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/margin-inline.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMarginInline =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | [TMarginInline, TMarginInline?] // Supports shorthand formats for start and end
  | { start?: TMarginInline; end?: TMarginInline } // Object with start and end keys
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/margin.ts

```typescript
import type { TDirectional } from './directional'
import type { TGlobalKeyword } from './global-keyword'

type TMarginKeyword = 'auto' | TGlobalKeyword

export type TMargin = TDirectional<TMarginKeyword>

```

## TYPESCRIPT: src/type/mask-clip.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMaskClip =
  | 'content-box'
  | 'padding-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
  | 'no-clip'
  | '-webkit-mask-clip'
  | 'border'
  | 'padding'
  | 'content'
  | 'text'
  | TMaskClip[] // Multiple values
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/mask.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMaskMode = 'alpha' | 'luminance' | 'match-source' | TGlobalKeyword

export type TMaskImage =
  | 'none'
  | `url(${string})`
  | `linear-gradient(${string})`
  | `image(${string})`
  | TGlobalKeyword

export type TMaskOrigin =
  | 'content-box'
  | 'padding-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
  | '-webkit-mask-origin'
  | 'content'
  | 'padding'
  | 'border'
  | TGlobalKeyword

export type TMaskRepeat =
  | 'repeat-x'
  | 'repeat-y'
  | 'repeat'
  | 'space'
  | 'round'
  | 'no-repeat'
  | `${string} ${string}`
  | TGlobalKeyword

export type TMaskSize =
  | 'cover'
  | 'contain'
  | `${number}${'px' | 'em' | '%' | 'rem'}`
  | `${number}${'px' | 'em' | '%' | 'rem'} auto`
  | 'auto'
  | TGlobalKeyword

export type TMaskComposite =
  | 'add'
  | 'subtract'
  | 'intersect'
  | 'exclude'
  | TGlobalKeyword

export type TMaskType = 'luminance' | 'alpha' | TGlobalKeyword

export type TMask =
  | {
      mode?: TMaskMode
      image?: TMaskImage
      origin?: TMaskOrigin
      repeat?: TMaskRepeat
      size?: TMaskSize
      composite?: TMaskComposite
      type?: TMaskType
    }
  | TGlobalKeyword
  | string

```

## TYPESCRIPT: src/type/math-style.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMathStyle = 'normal' | 'compact' | TGlobalKeyword

```

## TYPESCRIPT: src/type/max-block-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMaxBlockSize =
  | 'none'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/max-height.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMaxHeight =
  | 'none'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | 'stretch'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/max-inline-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMaxInlineSize =
  | 'none'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/max-width.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMaxWidth =
  | 'none'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | 'stretch'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/min-block-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMinBlockSize =
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/min-height.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMinHeight =
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | 'stretch'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/min-inline-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMinInlineSize =
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/min-width.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMinWidth =
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | 'stretch'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `anchor-size(${string})`
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/mix-blend-mode.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TMixBlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'
  | 'plus-darker'
  | 'plus-lighter'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/object-fit.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TObjectFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/object-position.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TObjectPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | `0 0`
  | `${number}% ${number}%`
  | `${number}${'px' | 'em' | 'rem' | 'cm' | 'ch'} ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'
      | 'ch'}`
  | `bottom ${number}${'px' | 'em' | 'rem' | 'cm'} right ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | `right ${number}${'px' | 'em' | 'rem' | 'cm'} bottom ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | `top ${number}${'px' | 'em' | 'rem' | 'cm'} right ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/offset-anchor.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOffsetAnchor =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'auto'
  | `${number}% ${number}%`
  | `0 0`
  | `${number}${'px' | 'em' | 'rem' | 'cm' | 'ch'} ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'
      | 'ch'}`
  | `bottom ${number}${'px' | 'em' | 'rem' | 'cm'} right ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | `right ${number}${'px' | 'em' | 'rem' | 'cm'} bottom ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/offset.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOffsetPath =
  | 'none'
  | `url(${string})`
  | `ray(${string})`
  | `circle(${string})`
  | `ellipse(${string})`
  | `inset(${string})`
  | `polygon(${string})`
  | `path(${string})`
  | `rect(${string})`
  | `xywh(${string})`
  | 'content-box'
  | 'padding-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
  | TGlobalKeyword

export type TOffsetDistance =
  | `${number}${'px' | 'em' | 'rem' | '%'}`
  | TGlobalKeyword

export type TOffsetRotate =
  | 'auto'
  | `auto ${string}`
  | 'reverse'
  | `${number}${'deg' | 'turn' | 'rad' | 'grad'}`
  | TGlobalKeyword

export type TOffset =
  | string
  | Array<string>
  | {
      path?: TOffsetPath
      distance?: TOffsetDistance
      rotate?: TOffsetRotate
    }
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/opacity.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOpacity =
  | number // For values between 0 and 1 (e.g., `0.9`)
  | `${number}%` // Percentage values (e.g., `90%`)
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/order.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOrder = number | TGlobalKeyword

```

## TYPESCRIPT: src/type/outline-offset.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOutlineOffset =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/outline.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOutlineColor =
  | `#${string}` // Hex color
  | `rgb(${string})`
  | `rgba(${string})`
  | string // Named colors or other color formats
  | TGlobalKeyword

export type TOutlineStyle =
  | 'auto'
  | 'none'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | TGlobalKeyword

export type TOutlineWidth =
  | 'thin'
  | 'medium'
  | 'thick'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | number
  | TGlobalKeyword

export type TOutline =
  | Array<string>
  | {
      color?: TOutlineColor
      style?: TOutlineStyle
      width?: TOutlineWidth
    }
  | TGlobalKeyword
  | string

```

## TYPESCRIPT: src/type/overflow.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOverflow =
  | 'visible'
  | 'hidden'
  | 'clip'
  | 'scroll'
  | 'auto'
  | `${'hidden' | 'visible'} ${'hidden' | 'visible'}`
  | {
      x?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
      y?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
    }
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/overscroll-behavior-block.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOverscrollBehaviorBlock =
  | 'auto'
  | 'contain'
  | 'none'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/overscroll-behavior-inline.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOverscrollBehaviorInline =
  | 'auto'
  | 'contain'
  | 'none'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/overscroll-behavior.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TOverscrollBehavior =
  | 'auto'
  | 'contain'
  | 'none'
  | `${'auto' | 'contain' | 'none'} ${'auto' | 'contain' | 'none'}`
  | {
      x?: 'auto' | 'contain' | 'none'
      y?: 'auto' | 'contain' | 'none'
    }
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/padding.ts

```typescript
import type { TDirectional } from './directional'
import type { TGlobalKeyword } from './global-keyword'

export type TPadding = TDirectional<TGlobalKeyword>

```

## TYPESCRIPT: src/type/perspective-origin.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TPerspectiveOrigin =
  | `${number}%` // Percentages for x or y positions
  | `${number}${'px' | 'em' | 'rem'}` // Length values for x or y positions
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | `${'top' | 'bottom' | `${number}%`} ${'left' | 'right' | `${number}%`}`
  | `${'left' | 'right' | `${number}%`} ${'top' | 'bottom' | `${number}%`}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/perspective.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TPerspective =
  | 'none'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/place-content.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TPlaceContentBase =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'

export type TPlaceContent =
  | TPlaceContentBase
  | `${TPlaceContentBase} ${TPlaceContentBase}` // Two-value syntax
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/place-items.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TPlaceItemBase =
  | 'center'
  | 'normal'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'

export type TPlaceItems =
  | TPlaceItemBase
  | `${TPlaceItemBase} ${TPlaceItemBase}` // Two-value syntax
  | `${TPlaceItemBase} legacy`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/place-self.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TPlaceSelfBase =
  | 'auto'
  | 'center'
  | 'normal'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'

export type TPlaceSelf =
  | TPlaceSelfBase
  | `${TPlaceSelfBase} ${TPlaceSelfBase}` // Two-value syntax
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/pointer-events.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TPointerEvents =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'bounding-box'
  | 'all'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/position.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TPosition =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/quotes.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TQuotes =
  | 'none'
  | 'auto'
  | `${string} ${string}` // Single level of quotation marks
  | `${string} ${string} ${string} ${string}` // Two levels of quotation marks
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/resize.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TResize =
  | 'none'
  | 'both'
  | 'horizontal'
  | 'vertical'
  | 'block'
  | 'inline'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/right.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TRight =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | number
  | (string & {})
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/rotate.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TRotate =
  | 'none'
  | `${number}${'deg' | 'turn' | 'rad'}` // Angle value
  | `x ${number}${'deg' | 'turn' | 'rad'}` // Axis plus angle
  | `y ${number}${'deg' | 'turn' | 'rad'}`
  | `z ${number}${'deg' | 'turn' | 'rad'}`
  | `${number} ${number} ${number} ${number}${'deg' | 'turn' | 'rad'}` // Vector plus angle
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/ruby-align.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TRubyAlign =
  | 'start'
  | 'center'
  | 'space-between'
  | 'space-around'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/ruby-position.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TRubyPosition =
  | 'over'
  | 'under'
  | 'alternate'
  | 'alternate over'
  | 'alternate under'
  | 'inter-character'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/scale.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScale =
  | 'none'
  | number
  | `${number | string}%`
  | `${number | string} ${number | string}`
  | `${number | string} ${number | string} ${number | string}`
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/scroll-behavior.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollBehavior = TGlobalKeyword | 'auto' | 'smooth'

```

## TYPESCRIPT: src/type/scroll-margin.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollMargin =
  | TGlobalKeyword
  | string
  | number
  | [
      (string | number)?,
      (string | number)?,
      (string | number)?,
      (string | number)?
    ]
  | {
      top?: string | number
      right?: string | number
      bottom?: string | number
      left?: string | number
    }

```

## TYPESCRIPT: src/type/scroll-padding.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollPadding =
  | TGlobalKeyword
  | string
  | number
  | [
      string | number,
      (string | number)?,
      (string | number)?,
      (string | number)?
    ]
  | {
      top?: string | number
      right?: string | number
      bottom?: string | number
      left?: string | number
    }

```

## TYPESCRIPT: src/type/scroll-snap-align.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollSnapAlign =
  | TGlobalKeyword
  | 'none'
  | 'center'
  | 'start'
  | 'end'
  | `${'start' | 'end' | 'center'} ${'start' | 'end' | 'center'}`

```

## TYPESCRIPT: src/type/scroll-snap-stop.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollSnapStop = TGlobalKeyword | 'normal' | 'always'

```

## TYPESCRIPT: src/type/scroll-snap-type.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollSnapType =
  | TGlobalKeyword
  | 'none'
  | 'x'
  | 'y'
  | 'block'
  | 'inline'
  | 'both'
  | `${'x' | 'y' | 'block' | 'inline' | 'both'} ${'mandatory' | 'proximity'}`

```

## TYPESCRIPT: src/type/scroll-timeline-axis.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollTimelineAxis =
  | TGlobalKeyword
  | 'block'
  | 'inline'
  | 'x'
  | 'y'

```

## TYPESCRIPT: src/type/scroll-timeline-name.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollTimelineName = TGlobalKeyword | 'none' | string

```

## TYPESCRIPT: src/type/scroll-timeline.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollTimeline =
  | TGlobalKeyword
  | 'none'
  | string
  | `${string | 'none'} ${'block' | 'inline' | 'x' | 'y'}`

```

## TYPESCRIPT: src/type/scrollbar-color.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollbarColor = TGlobalKeyword | 'auto' | `${string} ${string}`

```

## TYPESCRIPT: src/type/scrollbar-gutter.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollbarGutter =
  | TGlobalKeyword
  | 'auto'
  | 'stable'
  | 'stable both-edges'

```

## TYPESCRIPT: src/type/scrollbar-width.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TScrollbarWidth = TGlobalKeyword | 'auto' | 'thin' | 'none'

```

## TYPESCRIPT: src/type/shape-image-threshold.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TShapeImageThreshold = TGlobalKeyword | number

```

## TYPESCRIPT: src/type/shape-margin.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TShapeMargin = TGlobalKeyword | string | number

```

## TYPESCRIPT: src/type/shape-outside.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TShapeOutside =
  | 'none'
  | 'margin-box'
  | 'content-box'
  | 'border-box'
  | 'padding-box'
  | TGlobalKeyword
  | (string & {})

```

## TYPESCRIPT: src/type/shape-rendering.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TShapeRendering =
  | TGlobalKeyword
  | 'auto'
  | 'crispEdges'
  | 'geometricPrecision'
  | 'optimizeSpeed'

```

## TYPESCRIPT: src/type/stop-color.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStopColor = TGlobalKeyword | string // Covers all <color> values

```

## TYPESCRIPT: src/type/stop-opacity.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStopOpacity = TGlobalKeyword | number | string // Covers numeric and percentage values

```

## TYPESCRIPT: src/type/stroke-dasharray.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStrokeDasharray =
  | TGlobalKeyword
  | 'none'
  | (string | number)[]
  | string
  | number

```

## TYPESCRIPT: src/type/stroke-dashoffset.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStrokeDashoffset = TGlobalKeyword | 'none' | string | number

```

## TYPESCRIPT: src/type/stroke-linecap.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStrokeLinecap = TGlobalKeyword | 'butt' | 'round' | 'square'

```

## TYPESCRIPT: src/type/stroke-linejoin.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStrokeLinejoin = TGlobalKeyword | 'bevel' | 'miter' | 'round'

```

## TYPESCRIPT: src/type/stroke-miterlimit.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStrokeMiterlimit = TGlobalKeyword | number

```

## TYPESCRIPT: src/type/stroke-opacity.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStrokeOpacity = TGlobalKeyword | number | string // Covers numeric and percentage values

```

## TYPESCRIPT: src/type/stroke-width.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStrokeWidth = TGlobalKeyword | string | number // Covers length and percentage values

```

## TYPESCRIPT: src/type/stroke.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TStroke =
  | TGlobalKeyword
  | 'context-stroke'
  | 'currentColor'
  | 'transparent'
  | string // Covers assorted color values

```

## TYPESCRIPT: src/type/tab-size.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTabSize = TGlobalKeyword | number | string // Covers numeric and length values

```

## TYPESCRIPT: src/type/table-layout.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTableLayout = TGlobalKeyword | 'auto' | 'fixed'

```

## TYPESCRIPT: src/type/text-align-last.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextAlignLast =
  | TGlobalKeyword
  | 'auto'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'

```

## TYPESCRIPT: src/type/text-align.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextAlign =
  | TGlobalKeyword
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent'
  | '-moz-center'
  | '-webkit-center'

```

## TYPESCRIPT: src/type/text-anchor.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextAnchor = TGlobalKeyword | 'start' | 'middle' | 'end'

```

## TYPESCRIPT: src/type/text-combine-upright.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextCombineUpright = TGlobalKeyword | 'none' | 'all'

```

## TYPESCRIPT: src/type/text-decoration.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextDecorationLine =
  | TGlobalKeyword
  | 'none'
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'blink'
  | `${'underline' | 'overline' | 'line-through' | 'blink'} ${string}`

export type TTextDecorationStyle =
  | TGlobalKeyword
  | 'solid'
  | 'double'
  | 'dotted'
  | 'dashed'
  | 'wavy'

export type TTextDecorationThickness =
  | TGlobalKeyword
  | 'auto'
  | 'from-font'
  | string
  | number

export type TTextDecorationColor = TGlobalKeyword | string

export type TTextDecoration =
  | string
  | Array<string | number>
  | {
      line?: TTextDecorationLine
      style?: TTextDecorationStyle
      color?: TTextDecorationColor
      thickness?: TTextDecorationThickness
    }

```

## TYPESCRIPT: src/type/text-emphasis.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextEmphasisStyle =
  | TGlobalKeyword
  | 'none'
  | 'filled'
  | 'open'
  | 'dot'
  | 'circle'
  | 'double-circle'
  | 'triangle'
  | `${'filled' | 'open'} sesame`
  | (string & {})

export type TTextEmphasisColor = TGlobalKeyword | string // Covers color values

export type TTextEmphasisPosition =
  | TGlobalKeyword
  | 'auto'
  | 'over'
  | 'under'
  | `${'over' | 'under'} ${'right' | 'left'}`
  | `${'right' | 'left'} ${'over' | 'under'}`

export type TTextEmphasis =
  | string
  | {
      style?: TTextEmphasisStyle
      color?: TTextEmphasisColor
      position?: TTextEmphasisPosition
    }

```

## TYPESCRIPT: src/type/text-indent.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextIndent =
  | TGlobalKeyword
  | string
  | number
  | `${number | string} ${'hanging' | 'each-line' | 'hanging each-line'}`

```

## TYPESCRIPT: src/type/text-justify.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextJustify =
  | TGlobalKeyword
  | 'none'
  | 'auto'
  | 'inter-word'
  | 'inter-character'
  | 'distribute' // Deprecated value

```

## TYPESCRIPT: src/type/text-orientation.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextOrientation =
  | TGlobalKeyword
  | 'mixed'
  | 'upright'
  | 'sideways-right'
  | 'sideways'
  | 'use-glyph-orientation'

```

## TYPESCRIPT: src/type/text-overflow.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextOverflow =
  | TGlobalKeyword
  | 'clip'
  | 'ellipsis'
  | `${'ellipsis' | string} ${'ellipsis' | string}`

```

## TYPESCRIPT: src/type/text-rendering.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextRendering =
  | TGlobalKeyword
  | 'auto'
  | 'optimizeSpeed'
  | 'optimizeLegibility'
  | 'geometricPrecision'

```

## TYPESCRIPT: src/type/text-shadow.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextShadow =
  | TGlobalKeyword
  | string
  | `${string | number} ${string | number} ${string | number | ''} ${
      | string
      | ''}`

```

## TYPESCRIPT: src/type/text-transform.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextTransform =
  | TGlobalKeyword
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana'
  | 'math-auto'

```

## TYPESCRIPT: src/type/text-underline-offset.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextUnderlineOffset =
  | TGlobalKeyword
  | 'auto'
  | (string & {})
  | number // Covers length and percentage values

```

## TYPESCRIPT: src/type/text-underline-position.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextUnderlinePosition =
  | TGlobalKeyword
  | 'auto'
  | 'under'
  | 'left'
  | 'right'
  | `${'under' | 'right'} ${'left' | 'under'}`

```

## TYPESCRIPT: src/type/text-wrap-style.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextWrapStyle =
  | TGlobalKeyword
  | 'auto'
  | 'balance'
  | 'pretty'
  | 'stable'

```

## TYPESCRIPT: src/type/text-wrap.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTextWrap =
  | TGlobalKeyword
  | 'wrap'
  | 'nowrap'
  | 'balance'
  | 'pretty'
  | 'stable'

```

## TYPESCRIPT: src/type/top.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTop =
  | number
  | (string & {})
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | TGlobalKeyword

```

## TYPESCRIPT: src/type/touch-action.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTouchAction =
  | TGlobalKeyword
  | 'auto'
  | 'none'
  | 'pan-x'
  | 'pan-left'
  | 'pan-right'
  | 'pan-y'
  | 'pan-up'
  | 'pan-down'
  | 'pinch-zoom'
  | 'manipulation'

```

## TYPESCRIPT: src/type/transform-box.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTransformBox =
  | TGlobalKeyword
  | 'content-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'

```

## TYPESCRIPT: src/type/transform-origin.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTransformOrigin =
  | TGlobalKeyword
  | string
  | `${string | number}`
  | `${string | number} ${string | number}`
  | `${string | number} ${string | number} ${string | number}`

```

## TYPESCRIPT: src/type/transform-style.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTransformStyle = TGlobalKeyword | 'flat' | 'preserve-3d'

```

## TYPESCRIPT: src/type/transform.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTransform = TGlobalKeyword | 'none' | string // Covers function values and multiple function combinations

```

## TYPESCRIPT: src/type/transition-behavior.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTransitionBehavior = TGlobalKeyword | 'allow-discrete' | 'normal'

```

## TYPESCRIPT: src/type/transition.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTransitionProperty = TGlobalKeyword | 'none' | 'all' | string // Covers custom-ident and multiple values

export type TTransitionDuration = TGlobalKeyword | string | number // Covers time values

export type TTransitionTimingFunction =
  | TGlobalKeyword
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | 'step-start'
  | 'step-end'
  | string // Covers function values and multiple easing functions

export type TTransitionDelay = TGlobalKeyword | string | number // Covers time values

export type TTransition =
  | string
  | Array<string | number>
  | {
      property?: TTransitionProperty
      duration?: TTransitionDuration
      timingFunction?: TTransitionTimingFunction
      delay?: TTransitionDelay
    }

```

## TYPESCRIPT: src/type/translate.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TTranslate =
  | TGlobalKeyword
  | 'none'
  | string
  | number
  | `${string | number} ${string | number}`
  | `${string | number} ${string | number} ${string | number}`

```

## TYPESCRIPT: src/type/user-select.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TUserSelect = TGlobalKeyword | 'none' | 'auto' | 'text' | 'all'

```

## TYPESCRIPT: src/type/vector-effect.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TVectorEffect =
  | TGlobalKeyword
  | 'none'
  | 'non-scaling-stroke'
  | 'non-scaling-size'
  | 'non-rotation'
  | 'fixed-position'

```

## TYPESCRIPT: src/type/vertical-align.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TVerticalAlign =
  | TGlobalKeyword
  | 'baseline'
  | 'sub'
  | 'super'
  | 'text-top'
  | 'text-bottom'
  | 'middle'
  | 'top'
  | 'bottom'
  | (string & {})
  | number // Covers length and percentage values

```

## TYPESCRIPT: src/type/view-transition-name.ts

```typescript
export type TViewTransitionName = string

```

## TYPESCRIPT: src/type/visibility.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TVisibility = TGlobalKeyword | 'visible' | 'hidden' | 'collapse'

```

## TYPESCRIPT: src/type/white-space.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TWhiteSpace =
  | TGlobalKeyword
  | 'normal'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'wrap'
  | 'collapse'
  | 'nowrap'
  | `${'preserve'} ${'nowrap' | 'wrap'}`

```

## TYPESCRIPT: src/type/width.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TWidth =
  | TGlobalKeyword
  | (string & {})
  | number
  | 'auto'
  | 'stretch'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `anchor-size(${string}, ${string | number})`
  | `minmax(${string | number}, ${string | number})`

```

## TYPESCRIPT: src/type/will-change.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TWillChange =
  | TGlobalKeyword
  | 'auto'
  | 'scroll-position'
  | 'contents'
  | (string & {})

```

## TYPESCRIPT: src/type/word-break.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TWordBreak =
  | TGlobalKeyword
  | 'normal'
  | 'break-all'
  | 'keep-all'
  | 'auto-phrase' // Experimental
  | 'break-word' // Deprecated

```

## TYPESCRIPT: src/type/word-spacing.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TWordSpacing = TGlobalKeyword | 'normal' | (string & {}) | number // Covers length values

```

## TYPESCRIPT: src/type/writing-mode.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TWritingMode =
  | TGlobalKeyword
  | 'horizontal-tb'
  | 'vertical-rl'
  | 'vertical-lr'

```

## TYPESCRIPT: src/type/z-index.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TZIndex = TGlobalKeyword | 'auto' | number // Covers integer values

```

## TYPESCRIPT: src/type/zoom.ts

```typescript
import type { TGlobalKeyword } from './global-keyword'

export type TZoom =
  | TGlobalKeyword
  | (string & {})
  | number // Covers numeric zoom values
  | 'normal'
  | 'reset' // Non-standard keyword values

```

## TYPESCRIPT: src/util/camel-to-kebab.ts

```typescript
export const camelToKebabCase = (str = '') => {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

```

## TYPESCRIPT: src/util/condensed/four.test.ts

```typescript
import { describe, test, expect } from 'bun:test'
import { condensedFour } from './four'

describe('condensedFour', () => {
  test('should return "0" for an empty array', () => {
    expect(condensedFour([])).toBe('0')
  })

  test('should return a single value when all four values are the same', () => {
    expect(condensedFour(['10px', '10px', '10px', '10px'])).toBe('10px')
    expect(condensedFour(['inherit', 'inherit', 'inherit', 'inherit'])).toBe(
      'inherit',
    )
  })

  test('should return a single value when top, bottom, and leftRight are the same', () => {
    expect(condensedFour(['10px', '10px', '10px'])).toBe('10px')
  })

  test('should return two values when top and bottom are the same, and left and right are the same', () => {
    expect(condensedFour(['10px', '20px', '10px', '20px'])).toBe('10px 20px')
    expect(condensedFour(['1rem', '2rem', '1rem', '2rem'])).toBe('1rem 2rem')
  })

  test('should return two values when topBottom === leftRight', () => {
    expect(condensedFour(['10px', '10px'])).toBe('10px')
  })

  test('should return three values when top is different, and left and right are the same', () => {
    expect(condensedFour(['10px', '20px', '30px', '20px'])).toBe(
      '10px 20px 30px',
    )
    expect(condensedFour(['5%', '10%', '15%', '10%'])).toBe('5% 10% 15%')
  })

  test('should return three values when top === bottom but leftRight is different', () => {
    expect(condensedFour(['10px', '20px', '10px'])).toBe('10px 20px')
  })

  test('should return four values when all values are different', () => {
    expect(condensedFour(['10px', '20px', '30px', '40px'])).toBe(
      '10px 20px 30px 40px',
    )
    expect(condensedFour(['1em', '2em', '3em', '4em'])).toBe('1em 2em 3em 4em')
  })

  test('should handle arrays with fewer than 4 values', () => {
    expect(condensedFour(['10px'])).toBe('10px')
    expect(condensedFour(['10px', '20px'])).toBe('10px 20px')
    expect(condensedFour(['10px', '20px', '30px'])).toBe('10px 20px 30px')
  })

  test('should handle arrays with special CSS values', () => {
    expect(condensedFour(['inherit', 'initial', 'unset', 'auto'])).toBe(
      'inherit initial unset auto',
    )
    expect(condensedFour(['revert', 'revert-layer'])).toBe(
      'revert revert-layer',
    )
  })

  test('should default missing values to "0"', () => {
    expect(condensedFour(['10px', '20px'])).toBe('10px 20px')
    expect(condensedFour(['10px'])).toBe('10px')
  })

  test('should truncate arrays with more than 4 values', () => {
    expect(condensedFour(['10px', '20px', '30px', '40px', '50px'])).toBe(
      '10px 20px 30px 40px',
    )
  })

  test('should handle empty strings as "0"', () => {
    expect(condensedFour(['', '', '', ''])).toBe('0')
  })

  test('should return "0" for a single zero value', () => {
    expect(condensedFour(['0'])).toBe('0')
  })

  test('should handle truncation with mixed values', () => {
    expect(
      condensedFour(['10px', '20px', '30px', '40px', '50px', '60px']),
    ).toBe('10px 20px 30px 40px')
    expect(condensedFour(['10px', 'auto', 'unset', 'inherit', '20px'])).toBe(
      '10px auto unset inherit',
    )
  })

  test('should handle mixed empty strings, null, and undefined as "0"', () => {
    expect(condensedFour(['', null, undefined, ''] as any)).toBe('0')
  })

  test('should handle null or undefined values as "0"', () => {
    expect(condensedFour([null, null, null, null] as any)).toBe('0')
    expect(
      condensedFour([undefined, undefined, undefined, undefined] as any),
    ).toBe('0')
  })

  test('should return single keyword value as-is', () => {
    expect(condensedFour(['inherit'])).toBe('inherit')
    expect(condensedFour(['auto'])).toBe('auto')
  })

  test('should handle partially missing values in length === 3', () => {
    expect(condensedFour(['10px', undefined, '10px'] as any)).toBe('10px 0')
    expect(condensedFour(['10px', null, '30px'] as any)).toBe('10px 0 30px')
  })
})

```

## TYPESCRIPT: src/util/condensed/four.ts

```typescript
import { getValue } from '../get-value'

export const condensedFour = (propList: string[]): string => {
  if (propList.length === 0) {
    return '0'
  }

  if (propList.length === 1) {
    return `${propList[0] || 0}`
  }

  if (propList.length === 2) {
    const [topBottom = 0, leftRight = 0] = propList.map(getValue)

    // If topBottom and leftRight are the same, condense to a single value
    if (topBottom === leftRight) {
      return `${topBottom}`
    }

    return `${topBottom} ${leftRight}`
  }

  if (propList.length === 3) {
    const [top, leftRight, bottom] = propList.map(getValue)

    // If all three are the same, condense to a single value
    if (top === bottom && top === leftRight) {
      return `${top}`
    }

    // If top and bottom are the same, condense to two values
    if (top === bottom) {
      return `${top} ${leftRight}`
    }

    // Otherwise, return three distinct values
    return `${top} ${leftRight} ${bottom}`
  }

  if (propList.length > 3) {
    const [top, right, bottom, left] = propList.slice(0, 4).map(getValue)

    if ([top, right, bottom, left].filter(Boolean).length === 0) {
      return '0'
    }

    // If all four are the same, condense to a single value
    if (top === right && right === bottom && bottom === left) {
      return `${top}`
    }

    // If top equals bottom and left equals right, condense to two values
    if (top === bottom && left === right) {
      return `${top} ${right}`
    }

    // If left equals right but top and bottom differ, condense to three values
    if (left === right) {
      return `${top} ${right} ${bottom}`
    }

    // Otherwise, return all four values
    return `${top} ${right} ${bottom} ${left}`
  }

  return '0'
}

```

## TYPESCRIPT: src/util/condensed/index.ts

```typescript
export { condensedFour } from './four'

```

## TYPESCRIPT: src/util/convert-to-rem/convert-to-rem.test.ts

```typescript
import { convertToRem } from './convert-to-rem'
import { describe, expect, test } from 'bun:test'

describe('convertToRem', () => {
  test('should convert numeric values to rem', () => {
    expect(convertToRem(16)).toBe('1rem')
    expect(convertToRem(0)).toBe('0')
    expect(convertToRem(32)).toBe('2rem')
    expect(convertToRem(8)).toBe('0.5rem')
  })

  test('should convert valid pixel string values to rem', () => {
    expect(convertToRem('16px')).toBe('1rem')
    expect(convertToRem('0px')).toBe('0')
    expect(convertToRem('32px')).toBe('2rem')
    expect(convertToRem('8px')).toBe('0.5rem')
    expect(convertToRem('24px')).toBe('1.5rem')
  })

  test('should return the value as-is for invalid pixel string values', () => {
    expect(convertToRem('16')).toBe('16')
    expect(convertToRem('px')).toBe('px')
    expect(convertToRem('abc')).toBe('abc')
    expect(convertToRem('16 px')).toBe('16 px')
  })

  test('should return the value as-is for non-pixel string values', () => {
    expect(convertToRem('1em')).toBe('1em')
    expect(convertToRem('50%')).toBe('50%')
    expect(convertToRem('auto')).toBe('auto')
  })
})

```

## TYPESCRIPT: src/util/convert-to-rem/convert-to-rem.ts

```typescript
import { isPx } from '../is-px'

export const convertToRem = (value: number | string): string => {
  if (!value) {
    return '0'
  }

  if (typeof value === 'number') {
    return value === 0 ? '0' : `${value / 16}rem`
  }

  if (isPx(value)) {
    const numberValue = parseFloat(value)
    return numberValue === 0 ? '0' : `${numberValue / 16}rem`
  }

  return value
}

```

## TYPESCRIPT: src/util/convert-to-rem/index.ts

```typescript
export { convertToRem } from './convert-to-rem'

```

## TYPESCRIPT: src/util/get-value.ts

```typescript
import type { TDirectionalUnit } from '../type'

export const getValue = (
  value: undefined | null | string | number | TDirectionalUnit,
): string | number | TDirectionalUnit =>
  value === undefined ||
  value === null ||
  (typeof value === 'string' && value.trim() === '') ||
  value === 0
    ? '0'
    : value

```

## TYPESCRIPT: src/util/index.ts

```typescript
export { convertToRem } from './convert-to-rem'
export { camelToKebabCase } from './camel-to-kebab'
export { isPx } from './is-px'
export {
  normalizeAccentColor,
  normalizeAlignContent,
  normalizeAlignItems,
  normalizeAlignSelf,
  normalizeAnimation,
  normalizeAppearance,
  normalizeAspectRatio,
  normalizeBackdropFilter,
  normalizeBackfaceVisibility,
  normalizeBackground,
  normalizeBackgroundBlendMode,
  normalizeBackgroundClip,
  normalizeBackgroundOrigin,
  normalizeBlockSize,
  normalizeBorder,
  normalizeBorderBlock,
  normalizeBorderBlockStart,
  normalizeBorderBlockEnd,
  normalizeBorderBottom,
  normalizeBorderBottomLeftRadius,
  normalizeBorderBottomRightRadius,
  normalizeBorderCollapse,
  normalizeBorderEndEndRadius,
  normalizeBorderEndStartRadius,
  normalizeBorderImage,
  normalizeBorderInlineStart,
  normalizeBorderInlineEnd,
  normalizeBorderLeft,
  normalizeBorderRadius,
  normalizeBorderRight,
  normalizeBorderWidth,
  normalizeBorderStyle,
  normalizeBorderStartEndRadius,
  normalizeBorderStartStartRadius,
  normalizeBorderTop,
  normalizeBorderTopLeftRadius,
  normalizeBorderTopRightRadius,
  normalizeBoxShadow,
  normalizeBoxSizing,
  normalizeBreakAfter,
  normalizeBreakBefore,
  normalizeBreakInside,
  normalizeBottom,
  normalizeCaptionSide,
  normalizeCaretColor,
  normalizeClear,
  normalizeClip,
  normalizeClipPath,
  normalizeColor,
  normalizeColorInterpolation,
  normalizeColorInterpolationFilters,
  normalizeColorScheme,
  normalizeColumnCount,
  normalizeColumnFill,
  normalizeColumnGap,
  normalizeColumnRule,
  normalizeColumnSpan,
  normalizeColumnWidth,
  normalizeContain,
  normalizeContainIntrinsicBlockSize,
  normalizeContainIntrinsicHeight,
  normalizeContainIntrinsicInlineSize,
  normalizeContainIntrinsicSize,
  normalizeContainIntrinsicWidth,
  normalizeContainer,
  normalizeContent,
  normalizeContentVisibility,
  normalizeCounterIncrement,
  normalizeCounterReset,
  normalizeCounterSet,
  normalizeCursor,
  normalizeCx,
  normalizeCy,
  normalizeD,
  normalizeDirection,
  normalizeDominantBaseline,
  normalizeEmptyCells,
  normalizeDisplay,
  normalizeFlex,
  normalizeFlexBasis,
  normalizeFlexDirection,
  normalizeFlexGrow,
  normalizeFlexShrink,
  normalizeFlexWrap,
  normalizeFieldSizing,
  normalizeFill,
  normalizeFillOpacity,
  normalizeFillRule,
  normalizeFilter,
  normalizeFloat,
  normalizeFloodColor,
  normalizeFloodOpacity,
  normalizeFont,
  normalizeFontFamily,
  normalizeFontSize,
  normalizeFontStretch,
  normalizeFontStyle,
  normalizeFontVariant,
  normalizeFontWeight,
  normalizeFontFeatureSettings,
  normalizeFontKerning,
  normalizeFontLanguageOverride,
  normalizeFontOpticalSizing,
  normalizeFontPalette,
  normalizeFontSizeAdjust,
  normalizeFontSynthesisSmallCaps,
  normalizeFontSynthesisStyle,
  normalizeFontSynthesisWeight,
  normalizeFontVariantAlternates,
  normalizeFontVariantCaps,
  normalizeFontVariantEastAsian,
  normalizeFontVariantLigatures,
  normalizeFontVariantNumeric,
  normalizeFontVariantPosition,
  normalizeFontVariationSettings,
  normalizeForcedColorAdjust,
  normalizeGap,
  normalizeGridAutoColumns,
  normalizeGridAutoFlow,
  normalizeGridAutoRows,
  normalizeGridColumn,
  normalizeGridRow,
  normalizeGridTemplate,
  normalizeGridTemplateAreas,
  normalizeGridTemplateColumns,
  normalizeGridTemplateRows,
  normalizeHeight,
  normalizeHyphenateCharacter,
  normalizeHyphens,
  normalizeImageOrientation,
  normalizeImageRendering,
  normalizeInlineSize,
  normalizeInset,
  normalizeInsetBlock,
  normalizeInsetInline,
  normalizeIsolation,
  normalizeJustifyContent,
  normalizeJustifyItems,
  normalizeJustifySelf,
  normalizeLeft,
  normalizeLetterSpacing,
  normalizeLightingColor,
  normalizeLineBreak,
  normalizeLineHeight,
  normalizeListStyle,
  normalizeMargin,
  normalizeMarginBlock,
  normalizeMarginInline,
  normalizeMask,
  normalizeMaskClip,
  normalizeMathStyle,
  normalizeMaxBlockSize,
  normalizeMaxHeight,
  normalizeMaxInlineSize,
  normalizeMaxWidth,
  normalizeMinBlockSize,
  normalizeMinHeight,
  normalizeMinInlineSize,
  normalizeMinWidth,
  normalizeMixBlendMode,
  normalizeObjectFit,
  normalizeObjectPosition,
  normalizeOffset,
  normalizeOffsetAnchor,
  normalizeOpacity,
  normalizeOrder,
  normalizeOutline,
  normalizeOutlineOffset,
  normalizeOverflow,
  normalizeOverscrollBehavior,
  normalizeOverscrollBehaviorBlock,
  normalizeOverscrollBehaviorInline,
  normalizePadding,
  normalizePerspective,
  normalizePerspectiveOrigin,
  normalizePlaceContent,
  normalizePlaceItems,
  normalizePlaceSelf,
  normalizePointerEvents,
  normalizePosition,
  normalizeQuotes,
  normalizeResize,
  normalizeRight,
  normalizeRotate,
  normalizeRubyAlign,
  normalizeRubyPosition,
  normalizeScale,
  normalizeScrollBehavior,
  normalizeScrollMargin,
  normalizeScrollPadding,
  normalizeScrollSnapAlign,
  normalizeScrollSnapStop,
  normalizeScrollSnapType,
  normalizeScrollTimeline,
  normalizeScrollTimelineAxis,
  normalizeScrollTimelineName,
  normalizeScrollbarColor,
  normalizeScrollbarGutter,
  normalizeScrollbarWidth,
  normalizeShapeImageThreshold,
  normalizeShapeMargin,
  normalizeShapeOutside,
  normalizeShapeRendering,
  normalizeStopColor,
  normalizeStopOpacity,
  normalizeStroke,
  normalizeStrokeDasharray,
  normalizeStrokeDashoffset,
  normalizeStrokeLinecap,
  normalizeStrokeLinejoin,
  normalizeStrokeMiterlimit,
  normalizeStrokeOpacity,
  normalizeStrokeWidth,
  normalizeTabSize,
  normalizeTableLayout,
  normalizeTextAlign,
  normalizeTextAlignLast,
  normalizeTextAnchor,
  normalizeTextCombineUpright,
  normalizeTextDecoration,
  normalizeTextEmphasis,
  normalizeTextIndent,
  normalizeTextJustify,
  normalizeTextOrientation,
  normalizeTextOverflow,
  normalizeTextRendering,
  normalizeTextShadow,
  normalizeTextTransform,
  normalizeTextUnderlineOffset,
  normalizeTextUnderlinePosition,
  normalizeTextWrap,
  normalizeTextWrapStyle,
  normalizeTop,
  normalizeTouchAction,
  normalizeTransform,
  normalizeTransformBox,
  normalizeTransformOrigin,
  normalizeTransformStyle,
  normalizeTransition,
  normalizeTransitionBehavior,
  normalizeTranslate,
  normalizeUserSelect,
  normalizeVectorEffect,
  normalizeVerticalAlign,
  normalizeViewTransitionName,
  normalizeVisibility,
  normalizeWhiteSpace,
  normalizeWidth,
  normalizeWillChange,
  normalizeWordBreak,
  normalizeWordSpacing,
  normalizeWritingMode,
  normalizeZIndex,
  normalizeZoom,
} from './style'

```

## TYPESCRIPT: src/util/is-px/index.ts

```typescript
export { isPx } from './is-px'

```

## TYPESCRIPT: src/util/is-px/is-px.test.ts

```typescript
import { isPx } from './is-px'
import { describe, expect, test } from 'bun:test'

describe('isPx', () => {
  test('should return true for valid pixel values', () => {
    expect(isPx('10px')).toBe(true)
    expect(isPx('0px')).toBe(true)
    expect(isPx('10.5px')).toBe(true)
    expect(isPx('010px')).toBe(true)
  })

  test('should return false for invalid pixel values', () => {
    expect(isPx('10')).toBe(false)
    expect(isPx('abc')).toBe(false)
    expect(isPx('10pxabc')).toBe(false)
    expect(isPx('px10')).toBe(false)
    expect(isPx('')).toBe(false)
    expect(isPx('10 px')).toBe(false)
  })
})

```

## TYPESCRIPT: src/util/is-px/is-px.ts

```typescript
export const isPx = (value: string): boolean => /^[\d.]+px$/.test(value)

```

## TYPESCRIPT: src/util/normalize-directional/index.ts

```typescript
export { normalizeDirectional } from './normalize-directional'

```

## TYPESCRIPT: src/util/normalize-directional/normalize-directional.test.ts

```typescript
import { convertToRem } from '../convert-to-rem'
import { normalizeDirectional } from './normalize-directional'
import { describe, expect, test } from 'bun:test'

describe('normalizeDirectional', () => {
  test('should return the string value as-is', () => {
    expect(normalizeDirectional('32px', convertToRem)).toBe('2rem')
    expect(normalizeDirectional('1rem', convertToRem)).toBe('1rem')
  })

  test('should convert a numeric value using the convertToRem function', () => {
    expect(normalizeDirectional(16, convertToRem)).toBe('1rem')
    expect(normalizeDirectional(0, convertToRem)).toBe('0')
  })

  test('should normalize an array value and convert each unit', () => {
    expect(normalizeDirectional([16], convertToRem)).toBe('1rem')
    expect(normalizeDirectional([16, 32], convertToRem)).toBe('1rem 2rem')
    expect(normalizeDirectional([16, 32, 48], convertToRem)).toBe(
      '1rem 2rem 3rem',
    )
    expect(normalizeDirectional([16, 32, 48, 64], convertToRem)).toBe(
      '1rem 2rem 3rem 4rem',
    )
  })

  test('should normalize an object value and convert each unit', () => {
    expect(normalizeDirectional({ top: 16 }, convertToRem)).toBe('1rem 0 0')
    expect(normalizeDirectional({ top: 16, right: 32 }, convertToRem)).toBe(
      '1rem 2rem 0 0',
    )
    expect(
      normalizeDirectional({ top: 16, right: 32, bottom: 48 }, convertToRem),
    ).toBe('1rem 2rem 3rem 0')
    expect(
      normalizeDirectional(
        { top: 16, right: 32, bottom: 48, left: 64 },
        convertToRem,
      ),
    ).toBe('1rem 2rem 3rem 4rem')
  })

  test('should handle missing values in the object and apply defaults', () => {
    expect(normalizeDirectional({}, convertToRem)).toBe('0')
    expect(normalizeDirectional({ right: 32 }, convertToRem)).toBe('0 2rem 0 0')
  })
})

```

## TYPESCRIPT: src/util/normalize-directional/normalize-directional.ts

```typescript
import type { TDirectional, TDirectionalUnit } from '../../type'
import { condensedFour } from '../condensed'
import { convertToRem } from '../convert-to-rem'
import { getValue } from '../get-value'
import { isPx } from '../is-px'

export const normalizeDirectional = <T extends string>(
  value: TDirectional<T> = 0,
  convertUnit: (v: number | TDirectionalUnit | string) => string = (v) =>
    (v || '').toString(),
) => {
  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertUnit(value)
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '0'
    }

    if (value.length > 0) {
      return condensedFour(value.map(getValue).map(convertUnit))
    }
  }

  if (value === null || value === undefined) {
    return getValue(value)
  }

  if (
    typeof value === 'object' &&
    ('top' in value || 'bottom' in value || 'right' in value || 'left' in value)
  ) {
    const { top, right, bottom, left } = value || {}

    return condensedFour(
      [top, right, bottom, left].map(getValue).map(convertUnit),
    )
  }

  return '0'
}

```

## TYPESCRIPT: src/util/style/accent-color.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeAccentColor } from './accent-color'

describe('normalizeAccentColor', () => {
  test('should return "auto" for the auto keyword', () => {
    expect(normalizeAccentColor('auto')).toBe('auto')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeAccentColor('darkred')).toBe('darkred')
    expect(normalizeAccentColor('#5729e9')).toBe('#5729e9')
    expect(normalizeAccentColor('rgb(0 200 0)')).toBe('rgb(0 200 0)')
    expect(normalizeAccentColor('hsl(228 4% 24%)')).toBe('hsl(228 4% 24%)')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeAccentColor(undefined as any)).toBe('auto')
    expect(normalizeAccentColor(null as any)).toBe('auto')
  })

  test('should return global keywords as-is', () => {
    expect(normalizeAccentColor('inherit')).toBe('inherit')
    expect(normalizeAccentColor('initial')).toBe('initial')
    expect(normalizeAccentColor('revert')).toBe('revert')
    expect(normalizeAccentColor('revert-layer')).toBe('revert-layer')
    expect(normalizeAccentColor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/accent-color.ts

```typescript
import type { TAccentColor } from '../../type'

export const normalizeAccentColor = (accentColor: TAccentColor): string => {
  if (accentColor === null || accentColor === undefined) {
    return 'auto'
  }

  // Return valid values as-is
  return accentColor
}

```

## TYPESCRIPT: src/util/style/align-content.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeAlignContent } from './align-content'

describe('normalizeAlignContent', () => {
  test('should return normal alignment values as-is', () => {
    expect(normalizeAlignContent('normal')).toBe('normal')
  })

  test('should return basic positional alignment values as-is', () => {
    expect(normalizeAlignContent('start')).toBe('start')
    expect(normalizeAlignContent('center')).toBe('center')
    expect(normalizeAlignContent('end')).toBe('end')
    expect(normalizeAlignContent('flex-start')).toBe('flex-start')
    expect(normalizeAlignContent('flex-end')).toBe('flex-end')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeAlignContent('baseline')).toBe('baseline')
    expect(normalizeAlignContent('first baseline')).toBe('first baseline')
    expect(normalizeAlignContent('last baseline')).toBe('last baseline')
  })

  test('should return distributed alignment values as-is', () => {
    expect(normalizeAlignContent('space-between')).toBe('space-between')
    expect(normalizeAlignContent('space-around')).toBe('space-around')
    expect(normalizeAlignContent('space-evenly')).toBe('space-evenly')
    expect(normalizeAlignContent('stretch')).toBe('stretch')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeAlignContent('safe center')).toBe('safe center')
    expect(normalizeAlignContent('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeAlignContent('inherit')).toBe('inherit')
    expect(normalizeAlignContent('initial')).toBe('initial')
    expect(normalizeAlignContent('revert')).toBe('revert')
    expect(normalizeAlignContent('revert-layer')).toBe('revert-layer')
    expect(normalizeAlignContent('unset')).toBe('unset')
  })

  test('should return "normal" for null or undefined', () => {
    expect(normalizeAlignContent(undefined as any)).toBe('normal')
    expect(normalizeAlignContent(null as any)).toBe('normal')
  })
})

```

## TYPESCRIPT: src/util/style/align-content.ts

```typescript
import type { TAlignContent } from '../../type'

export const normalizeAlignContent = (alignContent: TAlignContent): string => {
  if (alignContent === null || alignContent === undefined) {
    return 'normal'
  }

  // Return valid values as-is
  return alignContent.toString()
}

```

## TYPESCRIPT: src/util/style/align-items.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeAlignItems } from './align-items'

describe('normalizeAlignItems', () => {
  test('should return basic keyword values as-is', () => {
    expect(normalizeAlignItems('normal')).toBe('normal')
    expect(normalizeAlignItems('stretch')).toBe('stretch')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeAlignItems('center')).toBe('center')
    expect(normalizeAlignItems('start')).toBe('start')
    expect(normalizeAlignItems('end')).toBe('end')
    expect(normalizeAlignItems('flex-start')).toBe('flex-start')
    expect(normalizeAlignItems('flex-end')).toBe('flex-end')
    expect(normalizeAlignItems('self-start')).toBe('self-start')
    expect(normalizeAlignItems('self-end')).toBe('self-end')
    expect(normalizeAlignItems('anchor-center')).toBe('anchor-center')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeAlignItems('baseline')).toBe('baseline')
    expect(normalizeAlignItems('first baseline')).toBe('first baseline')
    expect(normalizeAlignItems('last baseline')).toBe('last baseline')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeAlignItems('safe center')).toBe('safe center')
    expect(normalizeAlignItems('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeAlignItems('inherit')).toBe('inherit')
    expect(normalizeAlignItems('initial')).toBe('initial')
    expect(normalizeAlignItems('revert')).toBe('revert')
    expect(normalizeAlignItems('revert-layer')).toBe('revert-layer')
    expect(normalizeAlignItems('unset')).toBe('unset')
  })

  test('should return "normal" for null or undefined', () => {
    expect(normalizeAlignItems(undefined as any)).toBe('normal')
    expect(normalizeAlignItems(null as any)).toBe('normal')
  })
})

```

## TYPESCRIPT: src/util/style/align-items.ts

```typescript
import type { TAlignItems } from '../../type'

export const normalizeAlignItems = (alignItems: TAlignItems): string => {
  if (alignItems === null || alignItems === undefined) {
    return 'normal'
  }

  // Return valid values as-is
  return alignItems
}

```

## TYPESCRIPT: src/util/style/align-self.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeAlignSelf } from './align-self'

describe('normalizeAlignSelf', () => {
  test('should return keyword values as-is', () => {
    expect(normalizeAlignSelf('auto')).toBe('auto')
    expect(normalizeAlignSelf('normal')).toBe('normal')
    expect(normalizeAlignSelf('stretch')).toBe('stretch')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeAlignSelf('center')).toBe('center')
    expect(normalizeAlignSelf('start')).toBe('start')
    expect(normalizeAlignSelf('end')).toBe('end')
    expect(normalizeAlignSelf('flex-start')).toBe('flex-start')
    expect(normalizeAlignSelf('flex-end')).toBe('flex-end')
    expect(normalizeAlignSelf('self-start')).toBe('self-start')
    expect(normalizeAlignSelf('self-end')).toBe('self-end')
    expect(normalizeAlignSelf('anchor-center')).toBe('anchor-center')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeAlignSelf('baseline')).toBe('baseline')
    expect(normalizeAlignSelf('first baseline')).toBe('first baseline')
    expect(normalizeAlignSelf('last baseline')).toBe('last baseline')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeAlignSelf('safe center')).toBe('safe center')
    expect(normalizeAlignSelf('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeAlignSelf('inherit')).toBe('inherit')
    expect(normalizeAlignSelf('initial')).toBe('initial')
    expect(normalizeAlignSelf('revert')).toBe('revert')
    expect(normalizeAlignSelf('revert-layer')).toBe('revert-layer')
    expect(normalizeAlignSelf('unset')).toBe('unset')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeAlignSelf(undefined as any)).toBe('auto')
    expect(normalizeAlignSelf(null as any)).toBe('auto')
  })
})

```

## TYPESCRIPT: src/util/style/align-self.ts

```typescript
import type { TAlignSelf } from '../../type'

export const normalizeAlignSelf = (alignSelf: TAlignSelf): string => {
  if (alignSelf === null || alignSelf === undefined) {
    return 'auto'
  }

  // Return valid values as-is
  return alignSelf
}

```

## TYPESCRIPT: src/util/style/animation.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeAnimation } from './animation'

describe('normalizeAnimation', () => {
  test('should return a string animation value as-is', () => {
    expect(normalizeAnimation('fade-in 2s ease-in')).toBe('fade-in 2s ease-in')
  })

  test('should normalize an animation object with defaults', () => {
    expect(
      normalizeAnimation({
        name: 'fade-in',
        duration: 2000,
      }),
    ).toBe('fade-in 2s ease 0s 1 normal none running replace')
  })

  test('should normalize an animation object with millisecond duration', () => {
    expect(
      normalizeAnimation({
        name: 'fade-in',
        duration: 1000,
      }),
    ).toBe('fade-in 1s ease 0s 1 normal none running replace')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeAnimation(undefined as any)).toBe('none')
    expect(normalizeAnimation(null as any)).toBe('none')
  })

  test('should normalize all properties in an animation object', () => {
    expect(
      normalizeAnimation({
        name: 'slide-in',
        duration: '1.5s',
        timingFunction: 'linear',
        delay: '0.5s',
        iterationCount: 'infinite',
        direction: 'alternate',
        fillMode: 'both',
        playState: 'paused',
        composition: 'add',
      }),
    ).toBe('slide-in 1.5s linear 0.5s infinite alternate both paused add')
  })
})

```

## TYPESCRIPT: src/util/style/animation.ts

```typescript
import type { TAnimation } from '../../type'

export const normalizeAnimation = (animation: TAnimation): string => {
  if (typeof animation === 'string') {
    return animation
  }

  if (Array.isArray(animation)) {
    return animation.join(' ')
  }

  if (animation === undefined || animation === null) {
    return 'none'
  }

  if (typeof animation === 'object') {
    const {
      name = 'none',
      duration = 0,
      timingFunction = 'ease',
      delay = 0,
      iterationCount = 1,
      direction = 'normal',
      fillMode = 'none',
      playState = 'running',
      composition = 'replace',
    } = animation

    return [
      name,
      typeof duration === 'number' ? `${duration / 1000}s` : duration,
      timingFunction,
      typeof delay === 'number' ? `${delay / 1000}s` : delay,
      iterationCount,
      direction,
      fillMode,
      playState,
      composition,
    ].join(' ')
  }

  return 'none 0s ease 0s 1 normal none running replace'
}

```

## TYPESCRIPT: src/util/style/appearance.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeAppearance } from './appearance'

describe('normalizeAppearance', () => {
  test('should return valid basic values as-is', () => {
    expect(normalizeAppearance('none')).toBe('none')
    expect(normalizeAppearance('auto')).toBe('auto')
    expect(normalizeAppearance('menulist-button')).toBe('menulist-button')
    expect(normalizeAppearance('textfield')).toBe('textfield')
  })

  test('should return valid compat-auto values as-is', () => {
    expect(normalizeAppearance('button')).toBe('button')
    expect(normalizeAppearance('checkbox')).toBe('checkbox')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeAppearance(undefined as any)).toBe('auto')
    expect(normalizeAppearance(null as any)).toBe('auto')
  })

  test('should return global keywords as-is', () => {
    expect(normalizeAppearance('inherit')).toBe('inherit')
    expect(normalizeAppearance('initial')).toBe('initial')
    expect(normalizeAppearance('revert')).toBe('revert')
    expect(normalizeAppearance('revert-layer')).toBe('revert-layer')
    expect(normalizeAppearance('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/appearance.ts

```typescript
import type { TAppearance } from '../../type'

export const normalizeAppearance = (appearance: TAppearance): string => {
  if (appearance === null || appearance === undefined) {
    return 'auto'
  }

  // Return valid values as-is
  return appearance
}

```

## TYPESCRIPT: src/util/style/aspect-ratio.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeAspectRatio } from './aspect-ratio'

describe('normalizeAspectRatio', () => {
  test('should return valid fraction values as-is', () => {
    expect(normalizeAspectRatio('1 / 1')).toBe('1 / 1')
    expect(normalizeAspectRatio('16 / 9')).toBe('16 / 9')
  })

  test('should return single numeric values as-is', () => {
    expect(normalizeAspectRatio('1')).toBe('1')
    expect(normalizeAspectRatio('16')).toBe('16')
  })

  test('should return valid auto fallback combinations as-is', () => {
    expect(normalizeAspectRatio('auto 3 / 4')).toBe('auto 3 / 4')
    expect(normalizeAspectRatio('9 / 6 auto')).toBe('9 / 6 auto')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeAspectRatio(undefined as any)).toBe('auto')
    expect(normalizeAspectRatio(null as any)).toBe('auto')
  })

  test('should return global keywords as-is', () => {
    expect(normalizeAspectRatio('inherit')).toBe('inherit')
    expect(normalizeAspectRatio('initial')).toBe('initial')
    expect(normalizeAspectRatio('revert')).toBe('revert')
    expect(normalizeAspectRatio('revert-layer')).toBe('revert-layer')
    expect(normalizeAspectRatio('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/aspect-ratio.ts

```typescript
import type { TAspectRatio } from '../../type'

export const normalizeAspectRatio = (aspectRatio: TAspectRatio): string => {
  if (aspectRatio === null || aspectRatio === undefined) {
    return 'auto'
  }

  // Return valid values as-is
  return aspectRatio.toString()
}

```

## TYPESCRIPT: src/util/style/backdrop-filter.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBackdropFilter } from './backdrop-filter'

describe('normalizeBackdropFilter', () => {
  test('should return "none" as-is', () => {
    expect(normalizeBackdropFilter('none')).toBe('none')
  })

  test('should return URL values as-is', () => {
    expect(normalizeBackdropFilter('url(common-filters.svg#filter)')).toBe(
      'url(common-filters.svg#filter)'
    )
  })

  test('should return valid <filter-function> values as-is', () => {
    expect(normalizeBackdropFilter('blur(2px)')).toBe('blur(2px)')
    expect(normalizeBackdropFilter('brightness(60%)')).toBe('brightness(60%)')
    expect(normalizeBackdropFilter('contrast(40%)')).toBe('contrast(40%)')
    expect(normalizeBackdropFilter('drop-shadow(4px 4px 10px blue)')).toBe(
      'drop-shadow(4px 4px 10px blue)'
    )
    expect(normalizeBackdropFilter('grayscale(30%)')).toBe('grayscale(30%)')
    expect(normalizeBackdropFilter('hue-rotate(120deg)')).toBe(
      'hue-rotate(120deg)'
    )
    expect(normalizeBackdropFilter('invert(70%)')).toBe('invert(70%)')
    expect(normalizeBackdropFilter('opacity(20%)')).toBe('opacity(20%)')
    expect(normalizeBackdropFilter('sepia(90%)')).toBe('sepia(90%)')
    expect(normalizeBackdropFilter('saturate(80%)')).toBe('saturate(80%)')
  })

  test('should return combined filter values as-is', () => {
    expect(normalizeBackdropFilter('blur(4px) saturate(150%)')).toBe(
      'blur(4px) saturate(150%)'
    )
    expect(
      normalizeBackdropFilter(
        'url(filters.svg#filter) blur(4px) saturate(150%)'
      )
    ).toBe('url(filters.svg#filter) blur(4px) saturate(150%)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackdropFilter('inherit')).toBe('inherit')
    expect(normalizeBackdropFilter('initial')).toBe('initial')
    expect(normalizeBackdropFilter('revert')).toBe('revert')
    expect(normalizeBackdropFilter('revert-layer')).toBe('revert-layer')
    expect(normalizeBackdropFilter('unset')).toBe('unset')
  })

  test('should return "none" for null or undefined', () => {
    expect(normalizeBackdropFilter(undefined as any)).toBe('none')
    expect(normalizeBackdropFilter(null as any)).toBe('none')
  })
})

```

## TYPESCRIPT: src/util/style/backdrop-filter.ts

```typescript
import type { TBackdropFilter } from '../../type'

export const normalizeBackdropFilter = (
  backdropFilter: TBackdropFilter
): string => {
  if (backdropFilter === null || backdropFilter === undefined) {
    return 'none'
  }

  // Return valid values as-is
  return backdropFilter
}

```

## TYPESCRIPT: src/util/style/backface-visibility.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBackfaceVisibility } from './backface-visibility'

describe('normalizeBackfaceVisibility', () => {
  test('should return "visible" as-is', () => {
    expect(normalizeBackfaceVisibility('visible')).toBe('visible')
  })

  test('should return "hidden" as-is', () => {
    expect(normalizeBackfaceVisibility('hidden')).toBe('hidden')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackfaceVisibility('inherit')).toBe('inherit')
    expect(normalizeBackfaceVisibility('initial')).toBe('initial')
    expect(normalizeBackfaceVisibility('revert')).toBe('revert')
    expect(normalizeBackfaceVisibility('revert-layer')).toBe('revert-layer')
    expect(normalizeBackfaceVisibility('unset')).toBe('unset')
  })

  test('should return "visible" for null or undefined', () => {
    expect(normalizeBackfaceVisibility(undefined as any)).toBe('visible')
    expect(normalizeBackfaceVisibility(null as any)).toBe('visible')
  })
})

```

## TYPESCRIPT: src/util/style/backface-visibility.ts

```typescript
import type { TBackfaceVisibility } from '../../type'

export const normalizeBackfaceVisibility = (
  backfaceVisibility: TBackfaceVisibility
): string => {
  if (backfaceVisibility === null || backfaceVisibility === undefined) {
    return 'visible'
  }

  // Return valid values as-is
  return backfaceVisibility.toString()
}

```

## TYPESCRIPT: src/util/style/background-blend-mode.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBackgroundBlendMode } from './background-blend-mode'

describe('normalizeBackgroundBlendMode', () => {
  test('should return single blend mode values as-is', () => {
    expect(normalizeBackgroundBlendMode('normal')).toBe('normal')
    expect(normalizeBackgroundBlendMode('darken')).toBe('darken')
    expect(normalizeBackgroundBlendMode('luminosity')).toBe('luminosity')
  })

  test('should return multiple blend mode values as-is', () => {
    expect(normalizeBackgroundBlendMode('darken, luminosity')).toBe(
      'darken, luminosity'
    )
    expect(normalizeBackgroundBlendMode('multiply, screen, overlay')).toBe(
      'multiply, screen, overlay'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackgroundBlendMode('inherit')).toBe('inherit')
    expect(normalizeBackgroundBlendMode('initial')).toBe('initial')
    expect(normalizeBackgroundBlendMode('revert')).toBe('revert')
    expect(normalizeBackgroundBlendMode('revert-layer')).toBe('revert-layer')
    expect(normalizeBackgroundBlendMode('unset')).toBe('unset')
  })

  test('should return "normal" for null or undefined', () => {
    expect(normalizeBackgroundBlendMode(undefined as any)).toBe('normal')
    expect(normalizeBackgroundBlendMode(null as any)).toBe('normal')
  })
})

```

## TYPESCRIPT: src/util/style/background-blend-mode.ts

```typescript
import type { TBackgroundBlendMode } from '../../type'

export const normalizeBackgroundBlendMode = (
  backgroundBlendMode: TBackgroundBlendMode
): string => {
  if (backgroundBlendMode === null || backgroundBlendMode === undefined) {
    return 'normal'
  }

  // Return valid values as-is
  return backgroundBlendMode.toString()
}

```

## TYPESCRIPT: src/util/style/background-clip.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBackgroundClip } from './background-clip'

describe('normalizeBackgroundClip', () => {
  test('should return valid keyword values as-is', () => {
    expect(normalizeBackgroundClip('border-box')).toBe('border-box')
    expect(normalizeBackgroundClip('padding-box')).toBe('padding-box')
    expect(normalizeBackgroundClip('content-box')).toBe('content-box')
    expect(normalizeBackgroundClip('text')).toBe('text')
    expect(normalizeBackgroundClip('border-area')).toBe('border-area')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackgroundClip('inherit')).toBe('inherit')
    expect(normalizeBackgroundClip('initial')).toBe('initial')
    expect(normalizeBackgroundClip('revert')).toBe('revert')
    expect(normalizeBackgroundClip('revert-layer')).toBe('revert-layer')
    expect(normalizeBackgroundClip('unset')).toBe('unset')
  })

  test('should return "border-box" for null or undefined', () => {
    expect(normalizeBackgroundClip(undefined as any)).toBe('border-box')
    expect(normalizeBackgroundClip(null as any)).toBe('border-box')
  })
})

```

## TYPESCRIPT: src/util/style/background-clip.ts

```typescript
import type { TBackgroundClip } from '../../type'

export const normalizeBackgroundClip = (
  backgroundClip: TBackgroundClip
): string => {
  if (backgroundClip === null || backgroundClip === undefined) {
    return 'border-box'
  }

  // Return valid values as-is
  return backgroundClip.toString()
}

```

## TYPESCRIPT: src/util/style/background-origin.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBackgroundOrigin } from './background-origin'

describe('normalizeBackgroundOrigin', () => {
  test('should return valid keyword values as-is', () => {
    expect(normalizeBackgroundOrigin('border-box')).toBe('border-box')
    expect(normalizeBackgroundOrigin('padding-box')).toBe('padding-box')
    expect(normalizeBackgroundOrigin('content-box')).toBe('content-box')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBackgroundOrigin('inherit')).toBe('inherit')
    expect(normalizeBackgroundOrigin('initial')).toBe('initial')
    expect(normalizeBackgroundOrigin('revert')).toBe('revert')
    expect(normalizeBackgroundOrigin('revert-layer')).toBe('revert-layer')
    expect(normalizeBackgroundOrigin('unset')).toBe('unset')
  })

  test('should return "border-box" for null or undefined', () => {
    expect(normalizeBackgroundOrigin(undefined as any)).toBe('border-box')
    expect(normalizeBackgroundOrigin(null as any)).toBe('border-box')
  })
})

```

## TYPESCRIPT: src/util/style/background-origin.ts

```typescript
import type { TBackgroundOrigin } from '../../type'

export const normalizeBackgroundOrigin = (
  backgroundOrigin: TBackgroundOrigin
): string => {
  if (backgroundOrigin === null || backgroundOrigin === undefined) {
    return 'border-box'
  }

  // Return valid values as-is
  return backgroundOrigin
}

```

## TYPESCRIPT: src/util/style/background.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBackground } from './background'

describe('normalizeBackground', () => {
  test('should return a string background value as-is', () => {
    expect(normalizeBackground('red url(image.png) no-repeat')).toBe(
      'red url(image.png) no-repeat',
    )
  })

  test('should normalize a background object with defaults', () => {
    expect(
      normalizeBackground({
        color: 'blue',
        image: 'url(image.png)',
      }),
    ).toBe(
      'blue url(image.png) 0 0 auto repeat scroll padding-box border-box normal',
    )
  })

  test('should normalize a background object with position and size', () => {
    expect(
      normalizeBackground({
        color: 'green',
        positionX: 'center',
        positionY: 'top',
        size: 'cover',
      }),
    ).toBe(
      'green none center top cover repeat scroll padding-box border-box normal',
    )
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeBackground(undefined as any)).toBe('none')
    expect(normalizeBackground(null as any)).toBe('none')
  })

  test('should normalize all properties in a background object', () => {
    expect(
      normalizeBackground({
        color: 'red',
        image: 'url(image.png)',
        positionX: '50%',
        positionY: '50%',
        size: 'contain',
        repeat: 'no-repeat',
        attachment: 'fixed',
        origin: 'content-box',
        clip: 'padding-box',
        blendMode: 'multiply',
      }),
    ).toBe(
      'red url(image.png) 50% 50% contain no-repeat fixed content-box padding-box multiply',
    )
  })
})

```

## TYPESCRIPT: src/util/style/background.ts

```typescript
import type { TBackground } from '../../type'

export const normalizeBackground = (background: TBackground): string => {
  if (typeof background === 'string') {
    return background
  }

  if (background === null || background === undefined) {
    return 'none'
  }

  if (Array.isArray(background)) {
    return background.join(' ')
  }

  if (typeof background === 'object') {
    const {
      color = 'transparent',
      image = 'none',
      positionX = 0,
      positionY = 0,
      size = 'auto',
      repeat = 'repeat',
      attachment = 'scroll',
      origin = 'padding-box',
      clip = 'border-box',
      blendMode = 'normal',
    } = background

    return [
      color,
      image,
      `${positionX} ${positionY}`,
      size,
      repeat,
      attachment,
      origin,
      clip,
      blendMode,
    ].join(' ')
  }

  return 'transparent none 0 0 auto repeat scroll padding-box border-box normal'
}

```

## TYPESCRIPT: src/util/style/block-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBlockSize } from './block-size'

describe('normalizeBlockSize', () => {
  test('should return valid keyword values as-is', () => {
    expect(normalizeBlockSize('auto')).toBe('auto')
    expect(normalizeBlockSize('max-content')).toBe('max-content')
    expect(normalizeBlockSize('min-content')).toBe('min-content')
    expect(normalizeBlockSize('fit-content')).toBe('fit-content')
    expect(normalizeBlockSize('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should return valid <percentage> values as-is', () => {
    expect(normalizeBlockSize('75%')).toBe('75%')
  })

  test('should return valid <length> values as-is if not in px', () => {
    expect(normalizeBlockSize('25em')).toBe('25em')
    expect(normalizeBlockSize('anchor-size(height)')).toBe(
      'anchor-size(height)'
    )
    expect(
      normalizeBlockSize('calc(anchor-size(--myAnchor block) * 0.75)')
    ).toBe('calc(anchor-size(--myAnchor block) * 0.75)')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBlockSize('300px')).toBe('18.75rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBlockSize(300)).toBe('18.75rem')
  })

  test('should return "auto" for null or undefined', () => {
    expect(normalizeBlockSize(undefined as any)).toBe('auto')
    expect(normalizeBlockSize(null as any)).toBe('auto')
  })

  test('should return global keywords as-is', () => {
    expect(normalizeBlockSize('inherit')).toBe('inherit')
    expect(normalizeBlockSize('initial')).toBe('initial')
    expect(normalizeBlockSize('revert')).toBe('revert')
    expect(normalizeBlockSize('revert-layer')).toBe('revert-layer')
    expect(normalizeBlockSize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/block-size.ts

```typescript
import type { TBlockSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBlockSize = (blockSize: TBlockSize): string => {
  if (typeof blockSize === 'string') {
    if (isPx(blockSize)) {
      return convertToRem(blockSize)
    }

    // Return valid <length>, <percentage>, or keyword values as-is
    return blockSize
  }

  if (typeof blockSize === 'number') {
    return convertToRem(blockSize)
  }

  if (blockSize === null || blockSize === undefined) {
    return 'auto'
  }

  return blockSize
}

```

## TYPESCRIPT: src/util/style/border-block-end.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderBlockEnd } from './border-block-end'

describe('normalizeBorderBlockEnd', () => {
  test('should return a string border-block-end value as-is', () => {
    expect(normalizeBorderBlockEnd('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-block-end object with defaults', () => {
    expect(
      normalizeBorderBlockEnd({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderBlockEnd(undefined as any)).toBe('none')
    expect(normalizeBorderBlockEnd(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-block-end object', () => {
    expect(
      normalizeBorderBlockEnd({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})

```

## TYPESCRIPT: src/util/style/border-block-end.ts

```typescript
import type { TBorderBlockEnd } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBlockEnd = (
  borderBlockEnd: TBorderBlockEnd
): string => {
  if (typeof borderBlockEnd === 'string') {
    return borderBlockEnd
  }

  if (borderBlockEnd === null || borderBlockEnd === undefined) {
    return 'none'
  }

  if (typeof borderBlockEnd === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderBlockEnd

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}

```

## TYPESCRIPT: src/util/style/border-block-start.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderBlockStart } from './border-block-start'

describe('normalizeBorderBlockStart', () => {
  test('should return a string border-block-start value as-is', () => {
    expect(normalizeBorderBlockStart('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-block-start object with defaults', () => {
    expect(
      normalizeBorderBlockStart({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderBlockStart(undefined as any)).toBe('none')
    expect(normalizeBorderBlockStart(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-block-start object', () => {
    expect(
      normalizeBorderBlockStart({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})

```

## TYPESCRIPT: src/util/style/border-block-start.ts

```typescript
import type { TBorderBlockStart } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBlockStart = (
  borderBlockStart: TBorderBlockStart
): string => {
  if (typeof borderBlockStart === 'string') {
    return borderBlockStart
  }

  if (borderBlockStart === null || borderBlockStart === undefined) {
    return 'none'
  }

  if (typeof borderBlockStart === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderBlockStart

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}

```

## TYPESCRIPT: src/util/style/border-block.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderBlock } from './border-block'

describe('normalizeBorderBlock', () => {
  test('should return a string border-block value as-is', () => {
    expect(normalizeBorderBlock('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-block object with defaults', () => {
    expect(
      normalizeBorderBlock({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderBlock(undefined as any)).toBe('none')
    expect(normalizeBorderBlock(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-block object', () => {
    expect(
      normalizeBorderBlock({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})

```

## TYPESCRIPT: src/util/style/border-block.ts

```typescript
import type { TBorderBlock } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBlock = (borderBlock: TBorderBlock): string => {
  if (typeof borderBlock === 'string') {
    return borderBlock
  }

  if (borderBlock === null || borderBlock === undefined) {
    return 'none'
  }

  if (typeof borderBlock === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderBlock

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}

```

## TYPESCRIPT: src/util/style/border-bottom-left-radius.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderBottomLeftRadius } from './border-bottom-left-radius'

describe('normalizeBorderBottomLeftRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderBottomLeftRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderBottomLeftRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderBottomLeftRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderBottomLeftRadius(undefined as any)).toBe('0')
    expect(normalizeBorderBottomLeftRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderBottomLeftRadius('inherit')).toBe('inherit')
  })
})

```

## TYPESCRIPT: src/util/style/border-bottom-left-radius.ts

```typescript
import type { TBorderBottomLeftRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBottomLeftRadius = (
  borderBottomLeftRadius: TBorderBottomLeftRadius
): string => {
  if (typeof borderBottomLeftRadius === 'string') {
    return isPx(borderBottomLeftRadius)
      ? convertToRem(borderBottomLeftRadius)
      : borderBottomLeftRadius
  }

  if (typeof borderBottomLeftRadius === 'number') {
    return convertToRem(borderBottomLeftRadius)
  }

  if (borderBottomLeftRadius === null || borderBottomLeftRadius === undefined) {
    return '0'
  }

  return borderBottomLeftRadius
}

```

## TYPESCRIPT: src/util/style/border-bottom-right-radius.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderBottomRightRadius } from './border-bottom-right-radius'

describe('normalizeBorderBottomRightRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderBottomRightRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderBottomRightRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderBottomRightRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderBottomRightRadius(undefined as any)).toBe('0')
    expect(normalizeBorderBottomRightRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderBottomRightRadius('inherit')).toBe('inherit')
  })
})

```

## TYPESCRIPT: src/util/style/border-bottom-right-radius.ts

```typescript
import type { TBorderBottomRightRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBottomRightRadius = (
  borderBottomRightRadius: TBorderBottomRightRadius
): string => {
  if (typeof borderBottomRightRadius === 'string') {
    return isPx(borderBottomRightRadius)
      ? convertToRem(borderBottomRightRadius)
      : borderBottomRightRadius
  }

  if (typeof borderBottomRightRadius === 'number') {
    return convertToRem(borderBottomRightRadius)
  }

  if (
    borderBottomRightRadius === null ||
    borderBottomRightRadius === undefined
  ) {
    return '0'
  }

  return borderBottomRightRadius
}

```

## TYPESCRIPT: src/util/style/border-bottom.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderBottom } from './border-bottom'

describe('normalizeBorderBottom', () => {
  test('should return a string border-bottom value as-is', () => {
    expect(normalizeBorderBottom('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-bottom object with defaults', () => {
    expect(
      normalizeBorderBottom({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should normalize all properties in a border-bottom object', () => {
    expect(
      normalizeBorderBottom({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderBottom(undefined as any)).toBe('none')
    expect(normalizeBorderBottom(null as any)).toBe('none')
  })
})

```

## TYPESCRIPT: src/util/style/border-bottom.ts

```typescript
import type { TBorderBottom } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBottom = (borderBottom: TBorderBottom): string => {
  if (typeof borderBottom === 'string') {
    return isPx(borderBottom) ? convertToRem(borderBottom) : borderBottom
  }

  if (typeof borderBottom === 'number') {
    return convertToRem(borderBottom)
  }

  if (borderBottom === null || borderBottom === undefined) {
    return 'none'
  }

  if (typeof borderBottom === 'object') {
    const {
      color = 'currentcolor',
      style = 'none',
      width = 'medium',
    } = borderBottom

    const formattedWidth =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [formattedWidth, style, color].join(' ')
  }

  return 'none'
}

```

## TYPESCRIPT: src/util/style/border-collapse.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderCollapse } from './border-collapse'

describe('normalizeBorderCollapse', () => {
  test('should return "collapse" as-is', () => {
    expect(normalizeBorderCollapse('collapse')).toBe('collapse')
  })

  test('should return "separate" as-is', () => {
    expect(normalizeBorderCollapse('separate')).toBe('separate')
  })

  test('should return "inherit" as-is for global keywords', () => {
    expect(normalizeBorderCollapse('inherit')).toBe('inherit')
  })

  test('should return the default value "separate" for null or undefined', () => {
    expect(normalizeBorderCollapse(null as any)).toBe('separate')
    expect(normalizeBorderCollapse(undefined as any)).toBe('separate')
  })
})

```

## TYPESCRIPT: src/util/style/border-collapse.ts

```typescript
import type { TBorderCollapse } from '../../type'

export const normalizeBorderCollapse = (
  borderCollapse: TBorderCollapse
): string => {
  if (borderCollapse === null || borderCollapse === undefined) {
    return 'separate'
  }

  return borderCollapse
}

```

## TYPESCRIPT: src/util/style/border-end-end-radius.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderEndEndRadius } from './border-end-end-radius'

describe('normalizeBorderEndEndRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderEndEndRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderEndEndRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderEndEndRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderEndEndRadius(undefined as any)).toBe('0')
    expect(normalizeBorderEndEndRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderEndEndRadius('inherit')).toBe('inherit')
  })
})

```

## TYPESCRIPT: src/util/style/border-end-end-radius.ts

```typescript
import type { TBorderEndEndRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderEndEndRadius = (
  borderEndEndRadius: TBorderEndEndRadius
): string => {
  if (typeof borderEndEndRadius === 'string') {
    return isPx(borderEndEndRadius)
      ? convertToRem(borderEndEndRadius)
      : borderEndEndRadius
  }

  if (typeof borderEndEndRadius === 'number') {
    return convertToRem(borderEndEndRadius)
  }

  if (borderEndEndRadius === null || borderEndEndRadius === undefined) {
    return '0'
  }

  return borderEndEndRadius
}

```

## TYPESCRIPT: src/util/style/border-end-start-radius.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderEndStartRadius } from './border-end-start-radius'

describe('normalizeBorderEndStartRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderEndStartRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderEndStartRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderEndStartRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderEndStartRadius(undefined as any)).toBe('0')
    expect(normalizeBorderEndStartRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderEndStartRadius('inherit')).toBe('inherit')
  })
})

```

## TYPESCRIPT: src/util/style/border-end-start-radius.ts

```typescript
import type { TBorderEndStartRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderEndStartRadius = (
  borderEndStartRadius: TBorderEndStartRadius
): string => {
  if (typeof borderEndStartRadius === 'string') {
    return isPx(borderEndStartRadius)
      ? convertToRem(borderEndStartRadius)
      : borderEndStartRadius
  }

  if (typeof borderEndStartRadius === 'number') {
    return convertToRem(borderEndStartRadius)
  }

  if (borderEndStartRadius === null || borderEndStartRadius === undefined) {
    return '0'
  }

  return borderEndStartRadius
}

```

## TYPESCRIPT: src/util/style/border-image.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderImage } from './border-image'

describe('normalizeBorderImage', () => {
  test('should return a string border-image value as-is', () => {
    expect(normalizeBorderImage('url(border.png) 30 fill')).toBe(
      'url(border.png) 30 fill',
    )
  })

  test('should normalize a border-image object with defaults', () => {
    expect(
      normalizeBorderImage({
        source: 'url(border.png)',
      }),
    ).toBe('url(border.png) 100% 1 0 stretch')
  })

  test('should normalize a border-image object with slice and width', () => {
    expect(
      normalizeBorderImage({
        source: 'url(border.png)',
        slice: '50%',
        width: '2px',
      }),
    ).toBe('url(border.png) 50% 2px 0 stretch')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeBorderImage(undefined as any)).toBe('none')
    expect(normalizeBorderImage(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-image object', () => {
    expect(
      normalizeBorderImage({
        source: 'url(border.png)',
        slice: '20% 30%',
        width: '5px',
        outset: '10px',
        repeat: 'round',
      }),
    ).toBe('url(border.png) 20% 30% 5px 10px round')
  })
})

```

## TYPESCRIPT: src/util/style/border-image.ts

```typescript
import type { TBorderImage } from '../../type'

export const normalizeBorderImage = (borderImage: TBorderImage): string => {
  if (typeof borderImage === 'string') {
    return borderImage
  }

  if (borderImage === null || borderImage === undefined) {
    return 'none'
  }

  if (Array.isArray(borderImage)) {
    return borderImage.join(' ')
  }

  if (typeof borderImage === 'object') {
    const {
      source = 'none',
      slice = '100%',
      width = 1,
      outset = 0,
      repeat = 'stretch',
    } = borderImage

    return [source, slice, width, outset, repeat].join(' ')
  }

  return 'none 100% 1 0 stretch'
}

```

## TYPESCRIPT: src/util/style/border-inline-end.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderInlineEnd } from './border-inline-end'

describe('normalizeBorderInlineEnd', () => {
  test('should return a string border-inline-end value as-is', () => {
    expect(normalizeBorderInlineEnd('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-inline-end object with defaults', () => {
    expect(
      normalizeBorderInlineEnd({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderInlineEnd(undefined as any)).toBe('none')
    expect(normalizeBorderInlineEnd(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-inline-end object', () => {
    expect(
      normalizeBorderInlineEnd({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})

```

## TYPESCRIPT: src/util/style/border-inline-end.ts

```typescript
import type { TBorderInlineEnd } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderInlineEnd = (
  borderInlineEnd: TBorderInlineEnd
): string => {
  if (typeof borderInlineEnd === 'string') {
    return borderInlineEnd
  }

  if (borderInlineEnd === null || borderInlineEnd === undefined) {
    return 'none'
  }

  if (typeof borderInlineEnd === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderInlineEnd

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}

```

## TYPESCRIPT: src/util/style/border-inline-start.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderInlineStart } from './border-inline-start'

describe('normalizeBorderInlineStart', () => {
  test('should return a string border-inline-start value as-is', () => {
    expect(normalizeBorderInlineStart('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-inline-start object with defaults', () => {
    expect(
      normalizeBorderInlineStart({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderInlineStart(undefined as any)).toBe('none')
    expect(normalizeBorderInlineStart(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-inline-start object', () => {
    expect(
      normalizeBorderInlineStart({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})

```

## TYPESCRIPT: src/util/style/border-inline-start.ts

```typescript
import type { TBorderInlineStart } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderInlineStart = (
  borderInlineStart: TBorderInlineStart
): string => {
  if (typeof borderInlineStart === 'string') {
    return borderInlineStart
  }

  if (borderInlineStart === null || borderInlineStart === undefined) {
    return 'none'
  }

  if (typeof borderInlineStart === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderInlineStart

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}

```

## TYPESCRIPT: src/util/style/border-inline.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderInline } from './border-inline'

describe('normalizeBorderInline', () => {
  test('should return a string border-inline value as-is', () => {
    expect(normalizeBorderInline('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-inline object with defaults', () => {
    expect(
      normalizeBorderInline({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderInline(undefined as any)).toBe('none')
    expect(normalizeBorderInline(null as any)).toBe('none')
  })

  test('should normalize all properties in a border-inline object', () => {
    expect(
      normalizeBorderInline({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })
})

```

## TYPESCRIPT: src/util/style/border-inline.ts

```typescript
import type { TBorderInline } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderInline = (borderInline: TBorderInline): string => {
  if (typeof borderInline === 'string') {
    return borderInline
  }

  if (borderInline === null || borderInline === undefined) {
    return 'none'
  }

  if (typeof borderInline === 'object') {
    const {
      width = 'medium',
      style = 'none',
      color = 'currentcolor',
    } = borderInline

    const widthValue =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [widthValue, style, color].join(' ')
  }

  return 'medium none currentcolor'
}

```

## TYPESCRIPT: src/util/style/border-left.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderLeft } from './border-left'

describe('normalizeBorderLeft', () => {
  test('should return a string border-left value as-is', () => {
    expect(normalizeBorderLeft('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-left object with defaults', () => {
    expect(
      normalizeBorderLeft({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should normalize all properties in a border-left object', () => {
    expect(
      normalizeBorderLeft({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderLeft(undefined as any)).toBe('none')
    expect(normalizeBorderLeft(null as any)).toBe('none')
  })
})

```

## TYPESCRIPT: src/util/style/border-left.ts

```typescript
import type { TBorderLeft } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderLeft = (borderLeft: TBorderLeft): string => {
  if (typeof borderLeft === 'string') {
    return borderLeft
  }

  if (borderLeft === null || borderLeft === undefined) {
    return 'none'
  }

  if (typeof borderLeft === 'object') {
    const {
      color = 'currentcolor',
      style = 'none',
      width = 'medium',
    } = borderLeft

    const formattedWidth =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [formattedWidth, style, color].join(' ')
  }

  return 'none'
}

```

## TYPESCRIPT: src/util/style/border-radius.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderRadius } from './border-radius'

describe('normalizeBorderRadius', () => {
  test('should return a string border-radius value as-is', () => {
    expect(normalizeBorderRadius('10px')).toBe('10px')
    expect(normalizeBorderRadius('50%')).toBe('50%')
  })

  test('should normalize numeric values', () => {
    expect(normalizeBorderRadius(16)).toBe('1rem')
    expect(normalizeBorderRadius(0)).toBe('0')
  })

  test('should normalize array values', () => {
    expect(normalizeBorderRadius(['10px', '20px', '30px', '40px'])).toBe(
      '0.625rem 1.25rem 1.875rem 2.5rem'
    )
    expect(normalizeBorderRadius(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeBorderRadius(['10px'])).toBe('0.625rem')
  })

  test('should normalize object values', () => {
    expect(
      normalizeBorderRadius({
        topLeft: '10px',
        topRight: '20px',
        bottomRight: '30px',
        bottomLeft: '40px',
      })
    ).toBe('0.625rem 1.25rem 1.875rem 2.5rem')
  })

  test('should handle partial object values with defaults', () => {
    expect(
      normalizeBorderRadius({
        topLeft: '10px',
        bottomRight: '20px',
      })
    ).toBe('0.625rem 0 1.25rem')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeBorderRadius(undefined as any)).toBe('0')
    expect(normalizeBorderRadius(null as any)).toBe('0')
  })
})

```

## TYPESCRIPT: src/util/style/border-radius.ts

```typescript
import type { TBorderRadius } from '../../type'
import { condensedFour } from '../condensed'
import { convertToRem } from '../convert-to-rem'
import { getValue } from '../get-value'

export const normalizeBorderRadius = (borderRadius: TBorderRadius): string => {
  if (typeof borderRadius === 'string') {
    return borderRadius.toString()
  }

  if (typeof borderRadius === 'number') {
    return convertToRem(borderRadius)
  }

  if (borderRadius === null || borderRadius === undefined) {
    return '0'
  }

  if (Array.isArray(borderRadius)) {
    const values = borderRadius.map((value) =>
      value !== undefined ? convertToRem(getValue(value)) : '0',
    )
    return condensedFour(values)
  }

  if (typeof borderRadius === 'object') {
    const {
      topLeft = '0',
      topRight = '0',
      bottomRight = '0',
      bottomLeft = '0',
    } = borderRadius

    const values = [
      convertToRem(getValue(topLeft)),
      convertToRem(getValue(topRight)),
      convertToRem(getValue(bottomRight)),
      convertToRem(getValue(bottomLeft)),
    ]

    return condensedFour(values)
  }

  return '0'
}

```

## TYPESCRIPT: src/util/style/border-right.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderRight } from './border-right'

describe('normalizeBorderRight', () => {
  test('should return a string border-right value as-is', () => {
    expect(normalizeBorderRight('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-right object with defaults', () => {
    expect(
      normalizeBorderRight({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should normalize all properties in a border-right object', () => {
    expect(
      normalizeBorderRight({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderRight(undefined as any)).toBe('none')
    expect(normalizeBorderRight(null as any)).toBe('none')
  })
})

```

## TYPESCRIPT: src/util/style/border-right.ts

```typescript
import type { TBorderRight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderRight = (borderRight: TBorderRight): string => {
  if (typeof borderRight === 'string') {
    return borderRight
  }

  if (borderRight === null || borderRight === undefined) {
    return 'none'
  }

  if (typeof borderRight === 'object') {
    const {
      color = 'currentcolor',
      style = 'none',
      width = 'medium',
    } = borderRight

    const formattedWidth =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [formattedWidth, style, color].join(' ')
  }

  return 'none'
}

```

## TYPESCRIPT: src/util/style/border-start-end-radius.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderStartEndRadius } from './border-start-end-radius'

describe('normalizeBorderStartEndRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderStartEndRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderStartEndRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderStartEndRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderStartEndRadius(undefined as any)).toBe('0')
    expect(normalizeBorderStartEndRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderStartEndRadius('inherit')).toBe('inherit')
  })
})

```

## TYPESCRIPT: src/util/style/border-start-end-radius.ts

```typescript
import type { TBorderStartEndRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderStartEndRadius = (
  borderStartEndRadius: TBorderStartEndRadius
): string => {
  if (typeof borderStartEndRadius === 'string') {
    return isPx(borderStartEndRadius)
      ? convertToRem(borderStartEndRadius)
      : borderStartEndRadius
  }

  if (typeof borderStartEndRadius === 'number') {
    return convertToRem(borderStartEndRadius)
  }

  if (borderStartEndRadius === null || borderStartEndRadius === undefined) {
    return '0'
  }

  return borderStartEndRadius
}

```

## TYPESCRIPT: src/util/style/border-start-start-radius.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderStartStartRadius } from './border-start-start-radius'

describe('normalizeBorderStartStartRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderStartStartRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderStartStartRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderStartStartRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderStartStartRadius(undefined as any)).toBe('0')
    expect(normalizeBorderStartStartRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderStartStartRadius('inherit')).toBe('inherit')
  })
})

```

## TYPESCRIPT: src/util/style/border-start-start-radius.ts

```typescript
import type { TBorderStartStartRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderStartStartRadius = (
  borderStartStartRadius: TBorderStartStartRadius
): string => {
  if (typeof borderStartStartRadius === 'string') {
    return isPx(borderStartStartRadius)
      ? convertToRem(borderStartStartRadius)
      : borderStartStartRadius
  }

  if (typeof borderStartStartRadius === 'number') {
    return convertToRem(borderStartStartRadius)
  }

  if (borderStartStartRadius === null || borderStartStartRadius === undefined) {
    return '0'
  }

  return borderStartStartRadius
}

```

## TYPESCRIPT: src/util/style/border-style.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderStyle } from './border-style'

describe('normalizeBorderStyle', () => {
  test('should return single border style as-is', () => {
    expect(normalizeBorderStyle('solid')).toBe('solid')
    expect(normalizeBorderStyle('dashed')).toBe('dashed')
    expect(normalizeBorderStyle('none')).toBe('none')
  })

  test('should handle missing or invalid styles gracefully', () => {
    expect(normalizeBorderStyle(undefined as any)).toBe('none')
    expect(normalizeBorderStyle(null as any)).toBe('none')
  })

  test('should normalize array of styles', () => {
    expect(normalizeBorderStyle(['solid'])).toBe('solid')
    expect(normalizeBorderStyle(['solid', 'dashed'])).toBe('solid dashed')
    expect(normalizeBorderStyle(['solid', 'dashed', 'dotted'])).toBe(
      'solid dashed dotted',
    )
    expect(normalizeBorderStyle(['solid', 'dashed', 'dotted', 'double'])).toBe(
      'solid dashed dotted double',
    )
  })

  test('should normalize incomplete or invalid array values', () => {
    expect(normalizeBorderStyle(['solid', undefined, 'dotted', null])).toBe(
      'solid none dotted',
    )
    expect(normalizeBorderStyle([])).toBe('none')
  })
})

```

## TYPESCRIPT: src/util/style/border-style.ts

```typescript
import type { TBorderStyle } from '../../type/border'
import { condensedFour } from '../condensed'

export const normalizeBorderStyle = (
  style: TBorderStyle | TBorderStyle[],
): string => {
  if (Array.isArray(style)) {
    if (style.length === 0) {
      return 'none'
    }
    return condensedFour(style.map((value) => value || 'none'))
  }

  return style || 'none'
}

```

## TYPESCRIPT: src/util/style/border-top-left-radius.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderTopLeftRadius } from './border-top-left-radius'

describe('normalizeBorderTopLeftRadius', () => {
  test('should return a string value as-is if it is not in px', () => {
    expect(normalizeBorderTopLeftRadius('50%')).toBe('50%')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeBorderTopLeftRadius('16px')).toBe('1rem')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeBorderTopLeftRadius(16)).toBe('1rem')
  })

  test('should return "0" for null or undefined', () => {
    expect(normalizeBorderTopLeftRadius(undefined as any)).toBe('0')
    expect(normalizeBorderTopLeftRadius(null as any)).toBe('0')
  })

  test('should return a global keyword as-is', () => {
    expect(normalizeBorderTopLeftRadius('inherit')).toBe('inherit')
  })
})

```

## TYPESCRIPT: src/util/style/border-top-left-radius.ts

```typescript
import type { TBorderTopLeftRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderTopLeftRadius = (
  borderTopLeftRadius: TBorderTopLeftRadius
): string => {
  if (typeof borderTopLeftRadius === 'string') {
    return isPx(borderTopLeftRadius)
      ? convertToRem(borderTopLeftRadius)
      : borderTopLeftRadius
  }

  if (typeof borderTopLeftRadius === 'number') {
    return convertToRem(borderTopLeftRadius)
  }

  if (borderTopLeftRadius === null || borderTopLeftRadius === undefined) {
    return '0'
  }

  return borderTopLeftRadius
}

```

## TYPESCRIPT: src/util/style/border-top-right-radius.test.ts

```typescript

```

## TYPESCRIPT: src/util/style/border-top-right-radius.ts

```typescript
import type { TBorderTopRightRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderTopRightRadius = (
  borderTopRightRadius: TBorderTopRightRadius
): string => {
  if (typeof borderTopRightRadius === 'string') {
    return isPx(borderTopRightRadius)
      ? convertToRem(borderTopRightRadius)
      : borderTopRightRadius
  }

  if (typeof borderTopRightRadius === 'number') {
    return convertToRem(borderTopRightRadius)
  }

  if (borderTopRightRadius === null || borderTopRightRadius === undefined) {
    return '0'
  }

  return borderTopRightRadius
}

```

## TYPESCRIPT: src/util/style/border-top.ts

```typescript
import type { TBorderTop } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderTop = (borderTop: TBorderTop): string => {
  if (typeof borderTop === 'string') {
    return borderTop
  }

  if (borderTop === null || borderTop === undefined) {
    return 'none'
  }

  if (typeof borderTop === 'object') {
    const {
      color = 'currentcolor',
      style = 'none',
      width = 'medium',
    } = borderTop

    const formattedWidth =
      isPx(String(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [formattedWidth, style, color].join(' ')
  }

  return 'none'
}

```

## TYPESCRIPT: src/util/style/border-top.type.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderTop } from './border-top'

describe('normalizeBorderTop', () => {
  test('should return a string border-top value as-is', () => {
    expect(normalizeBorderTop('2px solid red')).toBe('2px solid red')
  })

  test('should normalize a border-top object with defaults', () => {
    expect(
      normalizeBorderTop({
        style: 'dashed',
      })
    ).toBe('medium dashed currentcolor')
  })

  test('should normalize all properties in a border-top object', () => {
    expect(
      normalizeBorderTop({
        width: '8px',
        style: 'solid',
        color: 'blue',
      })
    ).toBe('0.5rem solid blue')
  })

  test('should handle missing or invalid values gracefully', () => {
    expect(normalizeBorderTop(undefined as any)).toBe('none')
    expect(normalizeBorderTop(null as any)).toBe('none')
  })
})

```

## TYPESCRIPT: src/util/style/border-width.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorderWidth } from './border-width'

describe('normalizeBorderWidth', () => {
  // Single values
  test('should normalize single values', () => {
    expect(normalizeBorderWidth(16)).toBe('1rem')
    expect(normalizeBorderWidth('8px')).toBe('0.5rem')
    expect(normalizeBorderWidth('inherit')).toBe('inherit')
  })

  // Arrays
  test('should normalize arrays', () => {
    expect(normalizeBorderWidth([16])).toBe('1rem')
    expect(normalizeBorderWidth([16, 32])).toBe('1rem 2rem')
    expect(normalizeBorderWidth([16, 32, 48])).toBe('1rem 2rem 3rem')
    expect(normalizeBorderWidth([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })

  // Mixed values
  test('should handle mixed units', () => {
    expect(normalizeBorderWidth(['8px', 'auto', '16px'])).toBe(
      '0.5rem auto 1rem',
    )
  })

  // Special cases
  test('should handle empty or invalid inputs', () => {
    expect(normalizeBorderWidth([])).toBe('0')
    expect(normalizeBorderWidth(null as any)).toBe('0')
    expect(normalizeBorderWidth(undefined as any)).toBe('0')
  })
})

```

## TYPESCRIPT: src/util/style/border-width.ts

```typescript
import { normalizeDirectional } from '../normalize-directional'
import { convertToRem } from '../convert-to-rem/convert-to-rem'
import type { TBorderWidth } from '../../type'

export const normalizeBorderWidth = (width: TBorderWidth): string | number => {
  return normalizeDirectional(width, convertToRem)
}

```

## TYPESCRIPT: src/util/style/border.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBorder } from './border'

describe('normalizeBorder', () => {
  describe('Single values', () => {
    test('should handle string values as-is', () => {
      expect(normalizeBorder('none')).toBe('none')
      expect(normalizeBorder('inherit')).toBe('inherit')
    })

    test('should return "none" for null or undefined input', () => {
      expect(normalizeBorder(null as any)).toBe('none')
      expect(normalizeBorder(undefined as any)).toBe('none')
    })
  })

  describe('Simple border objects', () => {
    test('should handle complete border objects', () => {
      expect(
        normalizeBorder({
          width: '1px',
          style: 'solid',
          color: 'black',
        }),
      ).toBe('0.0625rem solid black')
    })

    test('should handle partial border objects with defaults', () => {
      expect(
        normalizeBorder({
          width: '2px',
          style: 'dashed',
        }),
      ).toBe('0.125rem dashed currentColor')
      expect(
        normalizeBorder({
          style: 'dotted',
        }),
      ).toBe('0 dotted currentColor')
      expect(
        normalizeBorder({
          color: 'red',
        }),
      ).toBe('0 solid red')
    })
  })

  describe('Empty objects and defaults', () => {
    test('should return "none" for empty objects', () => {
      expect(normalizeBorder({})).toBe('none')
    })
  })

  describe('Edge cases', () => {
    test('should return "none" for empty strings', () => {
      expect(normalizeBorder('')).toBe('none')
    })

    test('should handle mixed valid and invalid values', () => {
      expect(
        normalizeBorder({
          width: '',
          style: null,
          color: undefined,
        } as any),
      ).toBe('0 solid currentColor')
    })

    test('should handle unexpected data types gracefully', () => {
      expect(normalizeBorder(true as any)).toBe('none')
      expect(normalizeBorder(false as any)).toBe('none')
    })
  })
})

```

## TYPESCRIPT: src/util/style/border.ts

```typescript
import { convertToRem } from '../convert-to-rem/convert-to-rem' // Import the conversion function
import type { TBorder } from '../../type/border'

export const normalizeBorder = (border: TBorder): string => {
  if (
    border === null ||
    border === undefined ||
    border === '' ||
    border === true ||
    border === false
  ) {
    return 'none'
  }

  if (typeof border === 'object') {
    if (Object.keys(border).length === 0) {
      return 'none'
    }

    const { width, style, color } = border
    return [
      width ? convertToRem(width) : '0', // Default to '0' for width
      style || 'solid',
      color || 'currentColor', // Default to 'currentColor' for color
    ]
      .filter(Boolean)
      .join(' ')
  }

  // If border is already a string or number, return it as-is
  return border?.toString() || 'none'
}

```

## TYPESCRIPT: src/util/style/bottom.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBottom } from './bottom'

describe('normalizeBottom', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeBottom(null as any)).toBe('auto')
    expect(normalizeBottom(undefined as any)).toBe('auto')
    expect(normalizeBottom('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeBottom('3px')).toBe('0.1875rem')
    expect(normalizeBottom(3)).toBe('0.1875rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeBottom('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeBottom('calc(anchor(--myAnchor 50%) + 5px)')).toBe(
      'calc(anchor(--myAnchor 50%) + 5px)'
    )
    expect(normalizeBottom('anchor-size(width)')).toBe('anchor-size(width)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBottom('inherit')).toBe('inherit')
    expect(normalizeBottom('initial')).toBe('initial')
    expect(normalizeBottom('revert')).toBe('revert')
    expect(normalizeBottom('revert-layer')).toBe('revert-layer')
    expect(normalizeBottom('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/bottom.ts

```typescript
import type { TBottom } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBottom = (value: TBottom): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/box-shadow.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBoxShadow } from './box-shadow'

describe('normalizeBoxShadow', () => {
  test('should return "none" as-is', () => {
    expect(normalizeBoxShadow('none')).toBe('none')
  })

  test('should return valid single shadow values as-is', () => {
    expect(normalizeBoxShadow('red 60px -16px')).toBe('red 60px -16px')
    expect(normalizeBoxShadow('10px 5px 5px black')).toBe('10px 5px 5px black')
  })

  test('should handle array of shadows and join them with a comma', () => {
    expect(normalizeBoxShadow(['red 60px -16px', '10px 5px 5px black'])).toBe(
      'red 60px -16px, 10px 5px 5px black'
    )
    expect(
      normalizeBoxShadow([
        'inset 5em 1em gold',
        '2px 2px 2px 1px rgb(0 0 0 / 20%)',
      ])
    ).toBe('inset 5em 1em gold, 2px 2px 2px 1px rgb(0 0 0 / 20%)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBoxShadow('inherit')).toBe('inherit')
    expect(normalizeBoxShadow('initial')).toBe('initial')
    expect(normalizeBoxShadow('revert')).toBe('revert')
    expect(normalizeBoxShadow('unset')).toBe('unset')
  })

  test('should return "none" for null or undefined', () => {
    expect(normalizeBoxShadow(undefined as any)).toBe('none')
    expect(normalizeBoxShadow(null as any)).toBe('none')
  })
})

```

## TYPESCRIPT: src/util/style/box-shadow.ts

```typescript
import type { TBoxShadow } from '../../type'

export const normalizeBoxShadow = (boxShadow: TBoxShadow): string => {
  if (boxShadow === null || boxShadow === undefined) {
    return 'none'
  }

  // If boxShadow is an array, join values with a comma
  if (Array.isArray(boxShadow)) {
    return boxShadow.join(', ')
  }

  // Return valid single shadow or keyword values as-is
  return boxShadow.toString()
}

```

## TYPESCRIPT: src/util/style/box-sizing.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBoxSizing } from './box-sizing'

describe('normalizeBoxSizing', () => {
  test('should return "border-box" for null or undefined', () => {
    expect(normalizeBoxSizing(null as any)).toBe('border-box')
    expect(normalizeBoxSizing(undefined as any)).toBe('border-box')
  })

  test('should return valid box-sizing values as-is', () => {
    expect(normalizeBoxSizing('border-box')).toBe('border-box')
    expect(normalizeBoxSizing('content-box')).toBe('content-box')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBoxSizing('inherit')).toBe('inherit')
    expect(normalizeBoxSizing('initial')).toBe('initial')
    expect(normalizeBoxSizing('revert')).toBe('revert')
    expect(normalizeBoxSizing('revert-layer')).toBe('revert-layer')
    expect(normalizeBoxSizing('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/box-sizing.ts

```typescript
import type { TBoxSizing } from '../../type'

export const normalizeBoxSizing = (boxSizing: TBoxSizing): string => {
  if (!boxSizing) {
    return 'border-box' // Default value
  }
  return boxSizing.toString()
}

```

## TYPESCRIPT: src/util/style/break-after.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBreakAfter } from './break-after'

describe('normalizeBreakAfter', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeBreakAfter(null as any)).toBe('auto')
    expect(normalizeBreakAfter(undefined as any)).toBe('auto')
  })

  test('should return generic break values as-is', () => {
    expect(normalizeBreakAfter('auto')).toBe('auto')
    expect(normalizeBreakAfter('avoid')).toBe('avoid')
    expect(normalizeBreakAfter('always')).toBe('always')
    expect(normalizeBreakAfter('all')).toBe('all')
  })

  test('should return page break values as-is', () => {
    expect(normalizeBreakAfter('avoid-page')).toBe('avoid-page')
    expect(normalizeBreakAfter('page')).toBe('page')
    expect(normalizeBreakAfter('left')).toBe('left')
    expect(normalizeBreakAfter('right')).toBe('right')
    expect(normalizeBreakAfter('recto')).toBe('recto')
    expect(normalizeBreakAfter('verso')).toBe('verso')
  })

  test('should return column break values as-is', () => {
    expect(normalizeBreakAfter('avoid-column')).toBe('avoid-column')
    expect(normalizeBreakAfter('column')).toBe('column')
  })

  test('should return region break values as-is', () => {
    expect(normalizeBreakAfter('avoid-region')).toBe('avoid-region')
    expect(normalizeBreakAfter('region')).toBe('region')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBreakAfter('inherit')).toBe('inherit')
    expect(normalizeBreakAfter('initial')).toBe('initial')
    expect(normalizeBreakAfter('revert')).toBe('revert')
    expect(normalizeBreakAfter('revert-layer')).toBe('revert-layer')
    expect(normalizeBreakAfter('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/break-after.ts

```typescript
import type { TBreakAfter } from '../../type'

export const normalizeBreakAfter = (breakAfter: TBreakAfter): string => {
  if (!breakAfter) {
    return 'auto' // Default value
  }
  return breakAfter
}

```

## TYPESCRIPT: src/util/style/break-before.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBreakBefore } from './break-before'

describe('normalizeBreakBefore', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeBreakBefore(null as any)).toBe('auto')
    expect(normalizeBreakBefore(undefined as any)).toBe('auto')
  })

  test('should return generic break values as-is', () => {
    expect(normalizeBreakBefore('auto')).toBe('auto')
    expect(normalizeBreakBefore('avoid')).toBe('avoid')
    expect(normalizeBreakBefore('always')).toBe('always')
    expect(normalizeBreakBefore('all')).toBe('all')
  })

  test('should return page break values as-is', () => {
    expect(normalizeBreakBefore('avoid-page')).toBe('avoid-page')
    expect(normalizeBreakBefore('page')).toBe('page')
    expect(normalizeBreakBefore('left')).toBe('left')
    expect(normalizeBreakBefore('right')).toBe('right')
    expect(normalizeBreakBefore('recto')).toBe('recto')
    expect(normalizeBreakBefore('verso')).toBe('verso')
  })

  test('should return column break values as-is', () => {
    expect(normalizeBreakBefore('avoid-column')).toBe('avoid-column')
    expect(normalizeBreakBefore('column')).toBe('column')
  })

  test('should return region break values as-is', () => {
    expect(normalizeBreakBefore('avoid-region')).toBe('avoid-region')
    expect(normalizeBreakBefore('region')).toBe('region')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBreakBefore('inherit')).toBe('inherit')
    expect(normalizeBreakBefore('initial')).toBe('initial')
    expect(normalizeBreakBefore('revert')).toBe('revert')
    expect(normalizeBreakBefore('revert-layer')).toBe('revert-layer')
    expect(normalizeBreakBefore('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/break-before.ts

```typescript
import type { TBreakBefore } from '../../type'

export const normalizeBreakBefore = (breakBefore: TBreakBefore): string => {
  if (!breakBefore) {
    return 'auto' // Default value
  }
  return breakBefore.toString()
}

```

## TYPESCRIPT: src/util/style/break-inside.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeBreakInside } from './break-inside'

describe('normalizeBreakInside', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeBreakInside(null as any)).toBe('auto')
    expect(normalizeBreakInside(undefined as any)).toBe('auto')
  })

  test('should return break-inside values as-is', () => {
    expect(normalizeBreakInside('auto')).toBe('auto')
    expect(normalizeBreakInside('avoid')).toBe('avoid')
    expect(normalizeBreakInside('avoid-page')).toBe('avoid-page')
    expect(normalizeBreakInside('avoid-column')).toBe('avoid-column')
    expect(normalizeBreakInside('avoid-region')).toBe('avoid-region')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeBreakInside('inherit')).toBe('inherit')
    expect(normalizeBreakInside('initial')).toBe('initial')
    expect(normalizeBreakInside('revert')).toBe('revert')
    expect(normalizeBreakInside('revert-layer')).toBe('revert-layer')
    expect(normalizeBreakInside('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/break-inside.ts

```typescript
import type { TBreakInside } from '../../type'

export const normalizeBreakInside = (breakInside: TBreakInside): string => {
  if (!breakInside) {
    return 'auto' // Default value
  }
  return breakInside
}

```

## TYPESCRIPT: src/util/style/caption-side.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeCaptionSide } from './caption-side'

describe('normalizeCaptionSide', () => {
  test('should return "top" for null or undefined', () => {
    expect(normalizeCaptionSide(null as any)).toBe('top')
    expect(normalizeCaptionSide(undefined as any)).toBe('top')
  })

  test('should return directional values as-is', () => {
    expect(normalizeCaptionSide('top')).toBe('top')
    expect(normalizeCaptionSide('bottom')).toBe('bottom')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCaptionSide('inherit')).toBe('inherit')
    expect(normalizeCaptionSide('initial')).toBe('initial')
    expect(normalizeCaptionSide('revert')).toBe('revert')
    expect(normalizeCaptionSide('revert-layer')).toBe('revert-layer')
    expect(normalizeCaptionSide('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/caption-side.ts

```typescript
import type { TCaptionSide } from '../../type'

export const normalizeCaptionSide = (captionSide: TCaptionSide): string => {
  if (!captionSide) {
    return 'top' // Default value
  }
  return captionSide.toString()
}

```

## TYPESCRIPT: src/util/style/caret-color.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeCaretColor } from './caret-color'

describe('normalizeCaretColor', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeCaretColor(null as any)).toBe('auto')
    expect(normalizeCaretColor(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeCaretColor('auto')).toBe('auto')
    expect(normalizeCaretColor('transparent')).toBe('transparent')
    expect(normalizeCaretColor('currentcolor')).toBe('currentcolor')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeCaretColor('red')).toBe('red')
    expect(normalizeCaretColor('#5729e9')).toBe('#5729e9')
    expect(normalizeCaretColor('rgb(0 200 0)')).toBe('rgb(0 200 0)')
    expect(normalizeCaretColor('hsl(228deg 4% 24% / 80%)')).toBe(
      'hsl(228deg 4% 24% / 80%)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCaretColor('inherit')).toBe('inherit')
    expect(normalizeCaretColor('initial')).toBe('initial')
    expect(normalizeCaretColor('revert')).toBe('revert')
    expect(normalizeCaretColor('revert-layer')).toBe('revert-layer')
    expect(normalizeCaretColor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/caret-color.ts

```typescript
import type { TCaretColor } from '../../type'

export const normalizeCaretColor = (caretColor: TCaretColor): string => {
  if (!caretColor) {
    return 'auto' // Default value
  }
  return caretColor.toString()
}

```

## TYPESCRIPT: src/util/style/clear.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeClear } from './clear'

describe('normalizeClear', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeClear(null as any)).toBe('none')
    expect(normalizeClear(undefined as any)).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeClear('none')).toBe('none')
    expect(normalizeClear('left')).toBe('left')
    expect(normalizeClear('right')).toBe('right')
    expect(normalizeClear('both')).toBe('both')
    expect(normalizeClear('inline-start')).toBe('inline-start')
    expect(normalizeClear('inline-end')).toBe('inline-end')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeClear('inherit')).toBe('inherit')
    expect(normalizeClear('initial')).toBe('initial')
    expect(normalizeClear('revert')).toBe('revert')
    expect(normalizeClear('revert-layer')).toBe('revert-layer')
    expect(normalizeClear('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/clear.ts

```typescript
import type { TClear } from '../../type'

export const normalizeClear = (clear: TClear): string => {
  if (!clear) {
    return 'none' // Default value
  }
  return clear
}

```

## TYPESCRIPT: src/util/style/clip-path.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeClipPath } from './clip-path'

describe('normalizeClipPath', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeClipPath(null as any)).toBe('none')
    expect(normalizeClipPath(undefined as any)).toBe('none')
  })

  test('should return the "none" keyword as-is', () => {
    expect(normalizeClipPath('none')).toBe('none')
  })

  test('should return <clip-source> values as-is', () => {
    expect(normalizeClipPath('url(resources.svg#c1)')).toBe(
      'url(resources.svg#c1)'
    )
  })

  test('should return <geometry-box> values as-is', () => {
    expect(normalizeClipPath('margin-box')).toBe('margin-box')
    expect(normalizeClipPath('border-box')).toBe('border-box')
    expect(normalizeClipPath('padding-box')).toBe('padding-box')
    expect(normalizeClipPath('content-box')).toBe('content-box')
    expect(normalizeClipPath('fill-box')).toBe('fill-box')
    expect(normalizeClipPath('stroke-box')).toBe('stroke-box')
    expect(normalizeClipPath('view-box')).toBe('view-box')
  })

  test('should return <basic-shape> values as-is', () => {
    expect(normalizeClipPath('inset(100px 50px)')).toBe('inset(100px 50px)')
    expect(normalizeClipPath('circle(50px at 0 100px)')).toBe(
      'circle(50px at 0 100px)'
    )
    expect(normalizeClipPath('ellipse(50px 60px at 10% 20%)')).toBe(
      'ellipse(50px 60px at 10% 20%)'
    )
    expect(
      normalizeClipPath('polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)')
    ).toBe('polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)')
    expect(
      normalizeClipPath(
        'path("M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z")'
      )
    ).toBe(
      'path("M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z")'
    )
    expect(normalizeClipPath('rect(5px 5px 160px 145px round 20%)')).toBe(
      'rect(5px 5px 160px 145px round 20%)'
    )
    expect(normalizeClipPath('xywh(0 5px 100% 75% round 15% 0)')).toBe(
      'xywh(0 5px 100% 75% round 15% 0)'
    )
  })

  test('should return box and shape values combined as-is', () => {
    expect(normalizeClipPath('padding-box circle(50px at 0 100px)')).toBe(
      'padding-box circle(50px at 0 100px)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeClipPath('inherit')).toBe('inherit')
    expect(normalizeClipPath('initial')).toBe('initial')
    expect(normalizeClipPath('revert')).toBe('revert')
    expect(normalizeClipPath('revert-layer')).toBe('revert-layer')
    expect(normalizeClipPath('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/clip-path.ts

```typescript
import type { TClipPath } from '../../type'

export const normalizeClipPath = (clipPath: TClipPath): string => {
  if (!clipPath) {
    return 'none' // Default value
  }
  return clipPath
}

```

## TYPESCRIPT: src/util/style/clip.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeClip } from './clip'

describe('normalizeClip', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeClip(null as any)).toBe('auto')
    expect(normalizeClip(undefined as any)).toBe('auto')
  })

  test('should return the "auto" keyword as-is', () => {
    expect(normalizeClip('auto')).toBe('auto')
  })

  test('should return valid <shape> values as-is', () => {
    expect(normalizeClip('rect(1px, 10em, 3rem, 2ch)')).toBe(
      'rect(1px, 10em, 3rem, 2ch)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeClip('inherit')).toBe('inherit')
    expect(normalizeClip('initial')).toBe('initial')
    expect(normalizeClip('revert')).toBe('revert')
    expect(normalizeClip('revert-layer')).toBe('revert-layer')
    expect(normalizeClip('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/clip.ts

```typescript
import type { TClip } from '../../type'

export const normalizeClip = (clip: TClip): string => {
  if (!clip) {
    return 'auto' // Default value
  }

  return clip
}

```

## TYPESCRIPT: src/util/style/color-interpolation-filters.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColorInterpolationFilters } from './color-interpolation-filters'

describe('normalizeColorInterpolationFilters', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeColorInterpolationFilters(null as any)).toBe('auto')
    expect(normalizeColorInterpolationFilters(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeColorInterpolationFilters('auto')).toBe('auto')
    expect(normalizeColorInterpolationFilters('sRGB')).toBe('sRGB')
    expect(normalizeColorInterpolationFilters('linearRGB')).toBe('linearRGB')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColorInterpolationFilters('inherit')).toBe('inherit')
    expect(normalizeColorInterpolationFilters('initial')).toBe('initial')
    expect(normalizeColorInterpolationFilters('revert')).toBe('revert')
    expect(normalizeColorInterpolationFilters('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeColorInterpolationFilters('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/color-interpolation-filters.ts

```typescript
import type { TColorInterpolationFilters } from '../../type'

export const normalizeColorInterpolationFilters = (
  colorInterpolationFilters: TColorInterpolationFilters
): string => {
  if (!colorInterpolationFilters) {
    return 'auto' // Default value
  }
  return colorInterpolationFilters
}

```

## TYPESCRIPT: src/util/style/color-interpolation.test.ts

```typescript

```

## TYPESCRIPT: src/util/style/color-interpolation.ts

```typescript
import type { TColorInterpolation } from '../../type'

export const normalizeColorInterpolation = (
  colorInterpolation: TColorInterpolation
): string => {
  if (!colorInterpolation) {
    return 'auto' // Default value
  }

  return colorInterpolation
}

```

## TYPESCRIPT: src/util/style/color-scheme.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColorScheme } from './color-scheme'

describe('normalizeColorScheme', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeColorScheme(null as any)).toBe('normal')
    expect(normalizeColorScheme(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeColorScheme('normal')).toBe('normal')
    expect(normalizeColorScheme('light')).toBe('light')
    expect(normalizeColorScheme('dark')).toBe('dark')
    expect(normalizeColorScheme('light dark')).toBe('light dark')
    expect(normalizeColorScheme('only light')).toBe('only light')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColorScheme('inherit')).toBe('inherit')
    expect(normalizeColorScheme('initial')).toBe('initial')
    expect(normalizeColorScheme('revert')).toBe('revert')
    expect(normalizeColorScheme('revert-layer')).toBe('revert-layer')
    expect(normalizeColorScheme('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/color-scheme.ts

```typescript
import type { TColorScheme } from '../../type'

export const normalizeColorScheme = (colorScheme: TColorScheme): string => {
  if (!colorScheme) {
    return 'normal' // Default value
  }
  return colorScheme
}

```

## TYPESCRIPT: src/util/style/color.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColor } from './color'

describe('normalizeColor', () => {
  test('should return "currentcolor" for null or undefined', () => {
    expect(normalizeColor(null as any)).toBe('currentcolor')
    expect(normalizeColor(undefined as any)).toBe('currentcolor')
  })

  test('should return <named-color> values as-is', () => {
    expect(normalizeColor('red')).toBe('red')
    expect(normalizeColor('orange')).toBe('orange')
    expect(normalizeColor('tan')).toBe('tan')
    expect(normalizeColor('rebeccapurple')).toBe('rebeccapurple')
  })

  test('should return <hex-color> values as-is', () => {
    expect(normalizeColor('#090')).toBe('#090')
    expect(normalizeColor('#009900')).toBe('#009900')
    expect(normalizeColor('#090a')).toBe('#090a')
    expect(normalizeColor('#009900aa')).toBe('#009900aa')
  })

  test('should return <rgb()> and <rgba()> values as-is', () => {
    expect(normalizeColor('rgb(34, 12, 64)')).toBe('rgb(34, 12, 64)')
    expect(normalizeColor('rgb(34, 12, 64, 0.6)')).toBe('rgb(34, 12, 64, 0.6)')
    expect(normalizeColor('rgba(34, 12, 64, 0.6)')).toBe(
      'rgba(34, 12, 64, 0.6)'
    )
    expect(normalizeColor('rgb(34 12 64 / 0.6)')).toBe('rgb(34 12 64 / 0.6)')
    expect(normalizeColor('rgba(34.6 12 64 / 60%)')).toBe(
      'rgba(34.6 12 64 / 60%)'
    )
  })

  test('should return <hsl()> and <hsla()> values as-is', () => {
    expect(normalizeColor('hsl(30, 100%, 50%)')).toBe('hsl(30, 100%, 50%)')
    expect(normalizeColor('hsl(30 100% 50% / 0.6)')).toBe(
      'hsl(30 100% 50% / 0.6)'
    )
    expect(normalizeColor('hsla(30.2 100% 50% / 60%)')).toBe(
      'hsla(30.2 100% 50% / 60%)'
    )
  })

  test('should return <hwb()> values as-is', () => {
    expect(normalizeColor('hwb(90 10% 10%)')).toBe('hwb(90 10% 10%)')
    expect(normalizeColor('hwb(90deg 10% 10%)')).toBe('hwb(90deg 10% 10%)')
    expect(normalizeColor('hwb(1.5708rad 60% 0%)')).toBe(
      'hwb(1.5708rad 60% 0%)'
    )
    expect(normalizeColor('hwb(0.25turn 0% 40% / 50%)')).toBe(
      'hwb(0.25turn 0% 40% / 50%)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColor('inherit')).toBe('inherit')
    expect(normalizeColor('initial')).toBe('initial')
    expect(normalizeColor('revert')).toBe('revert')
    expect(normalizeColor('revert-layer')).toBe('revert-layer')
    expect(normalizeColor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/color.ts

```typescript
import type { TColor } from '../../type'

export const normalizeColor = (color: TColor): string => {
  if (!color) {
    return 'currentcolor' // Default value
  }
  return color
}

```

## TYPESCRIPT: src/util/style/column-count.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColumnCount } from './column-count'

describe('normalizeColumnCount', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeColumnCount(null as any)).toBe('auto')
    expect(normalizeColumnCount(undefined as any)).toBe('auto')
  })

  test('should return "auto" keyword value as-is', () => {
    expect(normalizeColumnCount('auto')).toBe('auto')
  })

  test('should return <integer> values as-is', () => {
    expect(normalizeColumnCount(3)).toBe(3)
    expect(normalizeColumnCount(0)).toBe(0)
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnCount('inherit')).toBe('inherit')
    expect(normalizeColumnCount('initial')).toBe('initial')
    expect(normalizeColumnCount('revert')).toBe('revert')
    expect(normalizeColumnCount('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnCount('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/column-count.ts

```typescript
import type { TColumnCount } from '../../type'

export const normalizeColumnCount = (
  columnCount: TColumnCount
): string | number => {
  if (columnCount === undefined || columnCount === null) {
    return 'auto' // Default value
  }
  return columnCount
}

```

## TYPESCRIPT: src/util/style/column-fill.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColumnFill } from './column-fill'

describe('normalizeColumnFill', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeColumnFill(null as any)).toBe('auto')
    expect(normalizeColumnFill(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeColumnFill('auto')).toBe('auto')
    expect(normalizeColumnFill('balance')).toBe('balance')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnFill('inherit')).toBe('inherit')
    expect(normalizeColumnFill('initial')).toBe('initial')
    expect(normalizeColumnFill('revert')).toBe('revert')
    expect(normalizeColumnFill('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnFill('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/column-fill.ts

```typescript
import type { TColumnFill } from '../../type'

export const normalizeColumnFill = (columnFill: TColumnFill): string => {
  if (!columnFill) {
    return 'auto' // Default value
  }
  return columnFill
}

```

## TYPESCRIPT: src/util/style/column-gap.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColumnGap } from './column-gap'

describe('normalizeColumnGap', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeColumnGap(null as any)).toBe('normal')
    expect(normalizeColumnGap(undefined as any)).toBe('normal')
  })

  test('should return the "normal" keyword value as-is', () => {
    expect(normalizeColumnGap('normal')).toBe('normal')
  })

  test('should convert valid <length> pixel values to rem', () => {
    expect(normalizeColumnGap('16px')).toBe('1rem')
    expect(normalizeColumnGap('32px')).toBe('2rem')
    expect(normalizeColumnGap(16)).toBe('1rem')
    expect(normalizeColumnGap(32)).toBe('2rem')
  })

  test('should return valid <length> values as-is when not in px', () => {
    expect(normalizeColumnGap('2.5em')).toBe('2.5em')
  })

  test('should return valid <percentage> values as-is', () => {
    expect(normalizeColumnGap('3%')).toBe('3%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnGap('inherit')).toBe('inherit')
    expect(normalizeColumnGap('initial')).toBe('initial')
    expect(normalizeColumnGap('revert')).toBe('revert')
    expect(normalizeColumnGap('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnGap('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/column-gap.ts

```typescript
import type { TColumnGap } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeColumnGap = (columnGap: TColumnGap): string => {
  if (!columnGap) {
    return 'normal' // Default value
  }

  if (
    (typeof columnGap === 'string' && isPx(columnGap)) ||
    typeof columnGap === 'number'
  ) {
    return convertToRem(columnGap)
  }

  return columnGap
}

```

## TYPESCRIPT: src/util/style/column-rule.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColumnRule } from './column-rule'

describe('normalizeColumnRule', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeColumnRule(null as any)).toBe('')
    expect(normalizeColumnRule(undefined as any)).toBe('')
  })

  test('should return shorthand values as-is', () => {
    expect(normalizeColumnRule('dotted')).toBe('dotted')
    expect(normalizeColumnRule('solid 8px')).toBe('solid 8px')
    expect(normalizeColumnRule('solid blue')).toBe('solid blue')
    expect(normalizeColumnRule('thick inset blue')).toBe('thick inset blue')
  })

  test('should normalize object input', () => {
    expect(
      normalizeColumnRule({ style: 'solid', color: 'blue', width: '16px' })
    ).toBe('1rem solid blue')
    expect(normalizeColumnRule({ style: 'dotted', width: 8 })).toBe(
      '0.5rem dotted'
    )
    expect(normalizeColumnRule({ color: 'red' })).toBe('red')
    expect(normalizeColumnRule({})).toBe('')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnRule('inherit')).toBe('inherit')
    expect(normalizeColumnRule('initial')).toBe('initial')
    expect(normalizeColumnRule('revert')).toBe('revert')
    expect(normalizeColumnRule('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnRule('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/column-rule.ts

```typescript
import type { TColumnRule } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeColumnRule = (columnRule: TColumnRule): string => {
  if (!columnRule) {
    return '' // Default empty value
  }

  if (typeof columnRule === 'string') {
    return columnRule
  }

  if (typeof columnRule === 'object') {
    const { color = '', style = '', width = '' } = columnRule

    const normalizedWidth =
      (typeof width === 'string' && isPx(width)) || typeof width === 'number'
        ? convertToRem(width)
        : width

    return [normalizedWidth, style, color].filter(Boolean).join(' ')
  }

  return columnRule
}

```

## TYPESCRIPT: src/util/style/column-span.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColumnSpan } from './column-span'

describe('normalizeColumnSpan', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeColumnSpan(null as any)).toBe('none')
    expect(normalizeColumnSpan(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeColumnSpan('none')).toBe('none')
    expect(normalizeColumnSpan('all')).toBe('all')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnSpan('inherit')).toBe('inherit')
    expect(normalizeColumnSpan('initial')).toBe('initial')
    expect(normalizeColumnSpan('revert')).toBe('revert')
    expect(normalizeColumnSpan('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnSpan('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/column-span.ts

```typescript
import type { TColumnSpan } from '../../type'

export const normalizeColumnSpan = (columnSpan: TColumnSpan): string => {
  if (!columnSpan) {
    return 'none' // Default value
  }
  return columnSpan
}

```

## TYPESCRIPT: src/util/style/column-width.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeColumnWidth } from './column-width'

describe('normalizeColumnWidth', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeColumnWidth(null as any)).toBe('auto')
    expect(normalizeColumnWidth(undefined as any)).toBe('auto')
  })

  test('should return "auto" keyword value as-is', () => {
    expect(normalizeColumnWidth('auto')).toBe('auto')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeColumnWidth('16px')).toBe('1rem')
    expect(normalizeColumnWidth('32px')).toBe('2rem')
    expect(normalizeColumnWidth(16)).toBe('1rem')
    expect(normalizeColumnWidth(32)).toBe('2rem')
  })

  test('should return valid <length> values as-is when not in px', () => {
    expect(normalizeColumnWidth('15.5em')).toBe('15.5em')
    expect(normalizeColumnWidth('3.3vw')).toBe('3.3vw')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeColumnWidth('inherit')).toBe('inherit')
    expect(normalizeColumnWidth('initial')).toBe('initial')
    expect(normalizeColumnWidth('revert')).toBe('revert')
    expect(normalizeColumnWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeColumnWidth('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/column-width.ts

```typescript
import type { TColumnWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeColumnWidth = (columnWidth: TColumnWidth): string => {
  if (!columnWidth) {
    return 'auto' // Default value
  }

  if (
    (typeof columnWidth === 'string' && isPx(columnWidth)) ||
    typeof columnWidth === 'number'
  ) {
    return convertToRem(columnWidth)
  }

  return columnWidth
}

```

## TYPESCRIPT: src/util/style/contain-intrinsic-block-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicBlockSize } from './contain-intrinsic-block-size'

describe('normalizeContainIntrinsicBlockSize', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicBlockSize(null as any)).toBe('none')
    expect(normalizeContainIntrinsicBlockSize(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicBlockSize('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicBlockSize('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicBlockSize(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicBlockSize('10rem')).toBe('10rem')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicBlockSize('auto 300px')).toBe('auto 300px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicBlockSize('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicBlockSize('initial')).toBe('initial')
    expect(normalizeContainIntrinsicBlockSize('revert')).toBe('revert')
    expect(normalizeContainIntrinsicBlockSize('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeContainIntrinsicBlockSize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/contain-intrinsic-block-size.ts

```typescript
import type { TContainIntrinsicBlockSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeContainIntrinsicBlockSize = (
  containIntrinsicBlockSize: TContainIntrinsicBlockSize
): string => {
  if (!containIntrinsicBlockSize) {
    return 'none' // Default value
  }

  if (
    (typeof containIntrinsicBlockSize === 'string' &&
      isPx(containIntrinsicBlockSize)) ||
    typeof containIntrinsicBlockSize === 'number'
  ) {
    return convertToRem(containIntrinsicBlockSize)
  }

  return containIntrinsicBlockSize
}

```

## TYPESCRIPT: src/util/style/contain-intrinsic-height.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicHeight } from './contain-intrinsic-height'

describe('normalizeContainIntrinsicHeight', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicHeight(null as any)).toBe('none')
    expect(normalizeContainIntrinsicHeight(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicHeight('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicHeight('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicHeight(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicHeight('10rem')).toBe('10rem')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicHeight('auto 300px')).toBe('auto 300px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicHeight('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicHeight('initial')).toBe('initial')
    expect(normalizeContainIntrinsicHeight('revert')).toBe('revert')
    expect(normalizeContainIntrinsicHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeContainIntrinsicHeight('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/contain-intrinsic-height.ts

```typescript
import type { TContainIntrinsicHeight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeContainIntrinsicHeight = (
  containIntrinsicHeight: TContainIntrinsicHeight
): string => {
  if (!containIntrinsicHeight) {
    return 'none' // Default value
  }

  if (
    (typeof containIntrinsicHeight === 'string' &&
      isPx(containIntrinsicHeight)) ||
    typeof containIntrinsicHeight === 'number'
  ) {
    return convertToRem(containIntrinsicHeight)
  }

  return containIntrinsicHeight
}

```

## TYPESCRIPT: src/util/style/contain-intrinsic-inline-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicInlineSize } from './contain-intrinsic-inline-size'

describe('normalizeContainIntrinsicInlineSize', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicInlineSize(null as any)).toBe('none')
    expect(normalizeContainIntrinsicInlineSize(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicInlineSize('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicInlineSize('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicInlineSize(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicInlineSize('10rem')).toBe('10rem')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicInlineSize('auto 300px')).toBe('auto 300px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicInlineSize('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicInlineSize('initial')).toBe('initial')
    expect(normalizeContainIntrinsicInlineSize('revert')).toBe('revert')
    expect(normalizeContainIntrinsicInlineSize('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeContainIntrinsicInlineSize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/contain-intrinsic-inline-size.ts

```typescript
import type { TContainIntrinsicInlineSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeContainIntrinsicInlineSize = (
  containIntrinsicInlineSize: TContainIntrinsicInlineSize
): string => {
  if (!containIntrinsicInlineSize) {
    return 'none' // Default value
  }

  if (
    (typeof containIntrinsicInlineSize === 'string' &&
      isPx(containIntrinsicInlineSize)) ||
    typeof containIntrinsicInlineSize === 'number'
  ) {
    return convertToRem(containIntrinsicInlineSize)
  }

  return containIntrinsicInlineSize
}

```

## TYPESCRIPT: src/util/style/contain-intrinsic-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicSize } from './contain-intrinsic-size'

describe('normalizeContainIntrinsicSize', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicSize(null as any)).toBe('none')
    expect(normalizeContainIntrinsicSize(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicSize('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicSize('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicSize(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicSize('10rem')).toBe('10rem')
  })

  test('should return width | height values as-is', () => {
    expect(normalizeContainIntrinsicSize('1000px 1.5em')).toBe('1000px 1.5em')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicSize('auto 300px')).toBe('auto 300px')
    expect(normalizeContainIntrinsicSize('auto none')).toBe('auto none')
  })

  test('should return "auto width | auto height" combinations as-is', () => {
    expect(normalizeContainIntrinsicSize('auto 300px auto 4rem')).toBe(
      'auto 300px auto 4rem'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicSize('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicSize('initial')).toBe('initial')
    expect(normalizeContainIntrinsicSize('revert')).toBe('revert')
    expect(normalizeContainIntrinsicSize('revert-layer')).toBe('revert-layer')
    expect(normalizeContainIntrinsicSize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/contain-intrinsic-size.ts

```typescript
import type { TContainIntrinsicSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeContainIntrinsicSize = (
  containIntrinsicSize: TContainIntrinsicSize
): string => {
  if (!containIntrinsicSize) {
    return 'none' // Default value
  }

  if (
    (typeof containIntrinsicSize === 'string' && isPx(containIntrinsicSize)) ||
    typeof containIntrinsicSize === 'number'
  ) {
    return convertToRem(containIntrinsicSize)
  }

  return containIntrinsicSize
}

```

## TYPESCRIPT: src/util/style/contain-intrinsic-width.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContainIntrinsicWidth } from './contain-intrinsic-width'

describe('normalizeContainIntrinsicWidth', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContainIntrinsicWidth(null as any)).toBe('none')
    expect(normalizeContainIntrinsicWidth(undefined as any)).toBe('none')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeContainIntrinsicWidth('none')).toBe('none')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeContainIntrinsicWidth('1000px')).toBe('62.5rem')
    expect(normalizeContainIntrinsicWidth(300)).toBe('18.75rem')
  })

  test('should return <length> values as-is when not in px', () => {
    expect(normalizeContainIntrinsicWidth('10rem')).toBe('10rem')
  })

  test('should return "auto <length>" combinations as-is', () => {
    expect(normalizeContainIntrinsicWidth('auto 300px')).toBe('auto 300px')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainIntrinsicWidth('inherit')).toBe('inherit')
    expect(normalizeContainIntrinsicWidth('initial')).toBe('initial')
    expect(normalizeContainIntrinsicWidth('revert')).toBe('revert')
    expect(normalizeContainIntrinsicWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeContainIntrinsicWidth('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/contain-intrinsic-width.ts

```typescript
import type { TContainIntrinsicWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeContainIntrinsicWidth = (
  containIntrinsicWidth: TContainIntrinsicWidth
): string => {
  if (!containIntrinsicWidth) {
    return 'none' // Default value
  }

  if (
    (typeof containIntrinsicWidth === 'string' &&
      isPx(containIntrinsicWidth)) ||
    typeof containIntrinsicWidth === 'number'
  ) {
    return convertToRem(containIntrinsicWidth)
  }

  return containIntrinsicWidth
}

```

## TYPESCRIPT: src/util/style/contain.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContain } from './contain'

describe('normalizeContain', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeContain(null as any)).toBe('none')
    expect(normalizeContain(undefined as any)).toBe('none')
  })

  test('should return valid single keyword values as-is', () => {
    expect(normalizeContain('none')).toBe('none')
    expect(normalizeContain('strict')).toBe('strict')
    expect(normalizeContain('content')).toBe('content')
    expect(normalizeContain('size')).toBe('size')
    expect(normalizeContain('inline-size')).toBe('inline-size')
    expect(normalizeContain('layout')).toBe('layout')
    expect(normalizeContain('style')).toBe('style')
    expect(normalizeContain('paint')).toBe('paint')
  })

  test('should return valid multiple keyword values as-is', () => {
    expect(normalizeContain('size paint')).toBe('size paint')
    expect(normalizeContain('size layout paint')).toBe('size layout paint')
    expect(normalizeContain('inline-size layout')).toBe('inline-size layout')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContain('inherit')).toBe('inherit')
    expect(normalizeContain('initial')).toBe('initial')
    expect(normalizeContain('revert')).toBe('revert')
    expect(normalizeContain('revert-layer')).toBe('revert-layer')
    expect(normalizeContain('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/contain.ts

```typescript
import type { TContain } from '../../type'

export const normalizeContain = (contain: TContain): string => {
  if (!contain) {
    return 'none' // Default value
  }
  return contain
}

```

## TYPESCRIPT: src/util/style/container.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContainer } from './container'

describe('normalizeContainer', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeContainer(null as any)).toBe('')
    expect(normalizeContainer(undefined as any)).toBe('')
  })

  test('should return <container-name> values as-is', () => {
    expect(normalizeContainer('my-layout')).toBe('my-layout')
  })

  test('should return <container-name> / <container-type> values as-is', () => {
    expect(normalizeContainer('my-layout / size')).toBe('my-layout / size')
    expect(normalizeContainer('my-layout / inline-size')).toBe(
      'my-layout / inline-size'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContainer('inherit')).toBe('inherit')
    expect(normalizeContainer('initial')).toBe('initial')
    expect(normalizeContainer('revert')).toBe('revert')
    expect(normalizeContainer('revert-layer')).toBe('revert-layer')
    expect(normalizeContainer('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/container.ts

```typescript
import type { TContainer } from '../../type'

export const normalizeContainer = (container: TContainer): string => {
  if (!container) {
    return '' // Default value
  }
  return container
}

```

## TYPESCRIPT: src/util/style/content-visibility.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContentVisibility } from './content-visibility'

describe('normalizeContentVisibility', () => {
  test('should return "visible" for null or undefined', () => {
    expect(normalizeContentVisibility(null as any)).toBe('visible')
    expect(normalizeContentVisibility(undefined as any)).toBe('visible')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeContentVisibility('visible')).toBe('visible')
    expect(normalizeContentVisibility('hidden')).toBe('hidden')
    expect(normalizeContentVisibility('auto')).toBe('auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContentVisibility('inherit')).toBe('inherit')
    expect(normalizeContentVisibility('initial')).toBe('initial')
    expect(normalizeContentVisibility('revert')).toBe('revert')
    expect(normalizeContentVisibility('revert-layer')).toBe('revert-layer')
    expect(normalizeContentVisibility('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/content-visibility.ts

```typescript
import type { TContentVisibility } from '../../type'

export const normalizeContentVisibility = (
  contentVisibility: TContentVisibility
): string => {
  if (!contentVisibility) {
    return 'visible' // Default value
  }
  return contentVisibility
}

```

## TYPESCRIPT: src/util/style/content.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeContent } from './content'

describe('normalizeContent', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeContent(null as any)).toBe('normal')
    expect(normalizeContent(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeContent('normal')).toBe('normal')
    expect(normalizeContent('none')).toBe('none')
  })

  test('should return <content-replacement> values as-is', () => {
    expect(normalizeContent('url("http://www.example.com/test.png")')).toBe(
      'url("http://www.example.com/test.png")'
    )
    expect(normalizeContent('linear-gradient(#e66465, #9198e5)')).toBe(
      'linear-gradient(#e66465, #9198e5)'
    )
    expect(
      normalizeContent('image-set("image1x.png" 1x, "image2x.png" 2x)')
    ).toBe('image-set("image1x.png" 1x, "image2x.png" 2x)')
  })

  test('should return speech output with alternative text as-is', () => {
    expect(
      normalizeContent('url("../img/test.png") / "This is the alt text"')
    ).toBe('url("../img/test.png") / "This is the alt text"')
  })

  test('should return <string> values as-is', () => {
    expect(normalizeContent('"unparsed text"')).toBe('"unparsed text"')
  })

  test('should return <counter> values as-is', () => {
    expect(normalizeContent('counter(chapter_counter)')).toBe(
      'counter(chapter_counter)'
    )
    expect(normalizeContent('counter(chapter_counter, upper-roman)')).toBe(
      'counter(chapter_counter, upper-roman)'
    )
    expect(normalizeContent('counters(section_counter, ".")')).toBe(
      'counters(section_counter, ".")'
    )
    expect(
      normalizeContent('counters(section_counter, ".", decimal-leading-zero)')
    ).toBe('counters(section_counter, ".", decimal-leading-zero)')
  })

  test('should return attr() values as-is', () => {
    expect(normalizeContent('attr(href)')).toBe('attr(href)')
  })

  test('should return <quote> values as-is', () => {
    expect(normalizeContent('open-quote')).toBe('open-quote')
    expect(normalizeContent('close-quote')).toBe('close-quote')
    expect(normalizeContent('no-open-quote')).toBe('no-open-quote')
    expect(normalizeContent('no-close-quote')).toBe('no-close-quote')
  })

  test('should return <content-list> values as-is', () => {
    expect(
      normalizeContent('"prefix" url(http://www.example.com/test.png)')
    ).toBe('"prefix" url(http://www.example.com/test.png)')
    expect(
      normalizeContent('"prefix" url("/img/test.png") "suffix" / "Alt text"')
    ).toBe('"prefix" url("/img/test.png") "suffix" / "Alt text"')
    expect(normalizeContent('open-quote counter(chapter_counter)')).toBe(
      'open-quote counter(chapter_counter)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeContent('inherit')).toBe('inherit')
    expect(normalizeContent('initial')).toBe('initial')
    expect(normalizeContent('revert')).toBe('revert')
    expect(normalizeContent('revert-layer')).toBe('revert-layer')
    expect(normalizeContent('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/content.ts

```typescript
import type { TContent } from '../../type'

export const normalizeContent = (content: TContent): string => {
  if (!content) {
    return 'normal' // Default value
  }
  return content
}

```

## TYPESCRIPT: src/util/style/counter-increment.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeCounterIncrement } from './counter-increment'

describe('normalizeCounterIncrement', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeCounterIncrement(null as any)).toBe('none')
    expect(normalizeCounterIncrement(undefined as any)).toBe('none')
  })

  test('should return valid counter values as-is', () => {
    expect(normalizeCounterIncrement('my-counter')).toBe('my-counter')
    expect(normalizeCounterIncrement('my-counter -1')).toBe('my-counter -1')
    expect(normalizeCounterIncrement('counter1 counter2 -4')).toBe(
      'counter1 counter2 -4'
    )
    expect(normalizeCounterIncrement('chapter 0 section 2 page')).toBe(
      'chapter 0 section 2 page'
    )
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeCounterIncrement('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCounterIncrement('inherit')).toBe('inherit')
    expect(normalizeCounterIncrement('initial')).toBe('initial')
    expect(normalizeCounterIncrement('revert')).toBe('revert')
    expect(normalizeCounterIncrement('revert-layer')).toBe('revert-layer')
    expect(normalizeCounterIncrement('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/counter-increment.ts

```typescript
import type { TCounterIncrement } from '../../type'

export const normalizeCounterIncrement = (
  counterIncrement: TCounterIncrement
): string => {
  if (!counterIncrement) {
    return 'none' // Default value
  }
  return counterIncrement
}

```

## TYPESCRIPT: src/util/style/counter-reset.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeCounterReset } from './counter-reset'

describe('normalizeCounterReset', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeCounterReset(null as any)).toBe('none')
    expect(normalizeCounterReset(undefined as any)).toBe('none')
  })

  test('should return valid counter reset values as-is', () => {
    expect(normalizeCounterReset('my-counter')).toBe('my-counter')
    expect(normalizeCounterReset('my-counter -3')).toBe('my-counter -3')
    expect(normalizeCounterReset('reversed(my-counter)')).toBe(
      'reversed(my-counter)'
    )
    expect(normalizeCounterReset('reversed(my-counter) -1')).toBe(
      'reversed(my-counter) -1'
    )
    expect(
      normalizeCounterReset('reversed(pages) 10 items 1 reversed(sections) 4')
    ).toBe('reversed(pages) 10 items 1 reversed(sections) 4')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeCounterReset('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCounterReset('inherit')).toBe('inherit')
    expect(normalizeCounterReset('initial')).toBe('initial')
    expect(normalizeCounterReset('revert')).toBe('revert')
    expect(normalizeCounterReset('revert-layer')).toBe('revert-layer')
    expect(normalizeCounterReset('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/counter-reset.ts

```typescript
import type { TCounterReset } from '../../type'

export const normalizeCounterReset = (counterReset: TCounterReset): string => {
  if (!counterReset) {
    return 'none' // Default value
  }
  return counterReset
}

```

## TYPESCRIPT: src/util/style/counter-set.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeCounterSet } from './counter-set'

describe('normalizeCounterSet', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeCounterSet(null as any)).toBe('none')
    expect(normalizeCounterSet(undefined as any)).toBe('none')
  })

  test('should return valid counter set values as-is', () => {
    expect(normalizeCounterSet('my-counter')).toBe('my-counter')
    expect(normalizeCounterSet('my-counter -1')).toBe('my-counter -1')
    expect(normalizeCounterSet('counter1 1 counter2 4')).toBe(
      'counter1 1 counter2 4'
    )
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeCounterSet('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCounterSet('inherit')).toBe('inherit')
    expect(normalizeCounterSet('initial')).toBe('initial')
    expect(normalizeCounterSet('revert')).toBe('revert')
    expect(normalizeCounterSet('revert-layer')).toBe('revert-layer')
    expect(normalizeCounterSet('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/counter-set.ts

```typescript
import type { TCounterSet } from '../../type'

export const normalizeCounterSet = (counterSet: TCounterSet): string => {
  if (!counterSet) {
    return 'none' // Default value
  }
  return counterSet
}

```

## TYPESCRIPT: src/util/style/cursor.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeCursor } from './cursor'

describe('normalizeCursor', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeCursor(null as any)).toBe('auto')
    expect(normalizeCursor(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeCursor('pointer')).toBe('pointer')
    expect(normalizeCursor('zoom-out')).toBe('zoom-out')
  })

  test('should return URL with fallback keyword as-is', () => {
    expect(normalizeCursor('url(hand.cur), pointer')).toBe(
      'url(hand.cur), pointer'
    )
  })

  test('should return URL with coordinates and fallback keyword as-is', () => {
    expect(normalizeCursor('url(cursor_1.png) 4 12, auto')).toBe(
      'url(cursor_1.png) 4 12, auto'
    )
    expect(normalizeCursor('url(cursor_2.png) 2 2, pointer')).toBe(
      'url(cursor_2.png) 2 2, pointer'
    )
  })

  test('should return multiple URLs and fallback keyword as-is', () => {
    expect(
      normalizeCursor(
        'url(cursor_1.svg) 4 5, url(cursor_2.svg), url(cursor_n.cur) 5 5, progress'
      )
    ).toBe(
      'url(cursor_1.svg) 4 5, url(cursor_2.svg), url(cursor_n.cur) 5 5, progress'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCursor('inherit')).toBe('inherit')
    expect(normalizeCursor('initial')).toBe('initial')
    expect(normalizeCursor('revert')).toBe('revert')
    expect(normalizeCursor('revert-layer')).toBe('revert-layer')
    expect(normalizeCursor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/cursor.ts

```typescript
import type { TCursor } from '../../type'

export const normalizeCursor = (cursor: TCursor): string => {
  if (!cursor) {
    return 'auto' // Default value
  }
  return cursor
}

```

## TYPESCRIPT: src/util/style/cx.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeCx } from './cx'

describe('normalizeCx', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeCx(null as any)).toBe('')
    expect(normalizeCx(undefined as any)).toBe('')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeCx('20px')).toBe('1.25rem')
    expect(normalizeCx(20)).toBe('1.25rem')
  })

  test('should return <percentage> values as-is', () => {
    expect(normalizeCx('20%')).toBe('20%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCx('inherit')).toBe('inherit')
    expect(normalizeCx('initial')).toBe('initial')
    expect(normalizeCx('revert')).toBe('revert')
    expect(normalizeCx('revert-layer')).toBe('revert-layer')
    expect(normalizeCx('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/cx.ts

```typescript
import type { TCx } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeCx = (cx: TCx): string => {
  if (!cx) {
    return '' // Default empty value
  }

  if ((typeof cx === 'string' && isPx(cx)) || typeof cx === 'number') {
    return convertToRem(cx)
  }

  return cx
}

```

## TYPESCRIPT: src/util/style/cy.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeCy } from './cy'

describe('normalizeCy', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeCy(null as any)).toBe('')
    expect(normalizeCy(undefined as any)).toBe('')
  })

  test('should convert <length> pixel values to rem', () => {
    expect(normalizeCy('3px')).toBe('0.1875rem')
    expect(normalizeCy(3)).toBe('0.1875rem')
  })

  test('should return <percentage> values as-is', () => {
    expect(normalizeCy('20%')).toBe('20%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeCy('inherit')).toBe('inherit')
    expect(normalizeCy('initial')).toBe('initial')
    expect(normalizeCy('revert')).toBe('revert')
    expect(normalizeCy('revert-layer')).toBe('revert-layer')
    expect(normalizeCy('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/cy.ts

```typescript
import type { TCy } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeCy = (cy: TCy): string => {
  if (!cy) {
    return '' // Default empty value
  }

  if ((typeof cy === 'string' && isPx(cy)) || typeof cy === 'number') {
    return convertToRem(cy)
  }

  return cy
}

```

## TYPESCRIPT: src/util/style/d.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeD } from './d'

describe('normalizeD', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeD(null as any)).toBe('none')
    expect(normalizeD(undefined as any)).toBe('none')
  })

  test('should return the "none" keyword value as-is', () => {
    expect(normalizeD('none')).toBe('none')
  })

  test('should return valid path values as-is', () => {
    expect(normalizeD('path("m 5,5 h 35 L 20,30 z")')).toBe(
      'path("m 5,5 h 35 L 20,30 z")'
    )
    expect(normalizeD('path("M 0,25 l 50,150 l 200,50 z")')).toBe(
      'path("M 0,25 l 50,150 l 200,50 z")'
    )
    expect(normalizeD('path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z")')).toBe(
      'path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z")'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeD('inherit')).toBe('inherit')
    expect(normalizeD('initial')).toBe('initial')
    expect(normalizeD('revert')).toBe('revert')
    expect(normalizeD('revert-layer')).toBe('revert-layer')
    expect(normalizeD('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/d.ts

```typescript
import type { TD } from '../../type'

export const normalizeD = (d: TD): string => {
  if (!d) {
    return 'none' // Default value
  }
  return d
}

```

## TYPESCRIPT: src/util/style/direction.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeDirection } from './direction'

describe('normalizeDirection', () => {
  test('should return "ltr" for null or undefined', () => {
    expect(normalizeDirection(null as any)).toBe('ltr')
    expect(normalizeDirection(undefined as any)).toBe('ltr')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeDirection('ltr')).toBe('ltr')
    expect(normalizeDirection('rtl')).toBe('rtl')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeDirection('inherit')).toBe('inherit')
    expect(normalizeDirection('initial')).toBe('initial')
    expect(normalizeDirection('revert')).toBe('revert')
    expect(normalizeDirection('revert-layer')).toBe('revert-layer')
    expect(normalizeDirection('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/direction.ts

```typescript
import type { TDirection } from '../../type'

export const normalizeDirection = (direction: TDirection): string => {
  if (!direction) {
    return 'ltr' // Default value
  }
  return direction
}

```

## TYPESCRIPT: src/util/style/display.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeDisplay } from './display'

describe('normalizeDisplay', () => {
  test('should return valid display values', () => {
    expect(normalizeDisplay('block')).toBe('block')
    expect(normalizeDisplay('inline')).toBe('inline')
    expect(normalizeDisplay('none')).toBe('none')
  })

  test('should handle invalid or missing display values gracefully', () => {
    expect(normalizeDisplay(undefined as any)).toBe('block')
    expect(normalizeDisplay(null as any)).toBe('block')
  })

  test('should handle global keywords', () => {
    expect(normalizeDisplay('inherit')).toBe('inherit')
    expect(normalizeDisplay('initial')).toBe('initial')
    expect(normalizeDisplay('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/display.ts

```typescript
import type { TDisplay } from '../../type'

export const normalizeDisplay = (display: TDisplay): string => {
  return display || 'block'
}

```

## TYPESCRIPT: src/util/style/dominant-baseline.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeDominantBaseline } from './dominant-baseline'

describe('normalizeDominantBaseline', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeDominantBaseline(null as any)).toBe('auto')
    expect(normalizeDominantBaseline(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeDominantBaseline('auto')).toBe('auto')
    expect(normalizeDominantBaseline('alphabetic')).toBe('alphabetic')
    expect(normalizeDominantBaseline('central')).toBe('central')
    expect(normalizeDominantBaseline('hanging')).toBe('hanging')
    expect(normalizeDominantBaseline('ideographic')).toBe('ideographic')
    expect(normalizeDominantBaseline('mathematical')).toBe('mathematical')
    expect(normalizeDominantBaseline('middle')).toBe('middle')
    expect(normalizeDominantBaseline('text-bottom')).toBe('text-bottom')
    expect(normalizeDominantBaseline('text-top')).toBe('text-top')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeDominantBaseline('inherit')).toBe('inherit')
    expect(normalizeDominantBaseline('initial')).toBe('initial')
    expect(normalizeDominantBaseline('revert')).toBe('revert')
    expect(normalizeDominantBaseline('revert-layer')).toBe('revert-layer')
    expect(normalizeDominantBaseline('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/dominant-baseline.ts

```typescript
import type { TDominantBaseline } from '../../type'

export const normalizeDominantBaseline = (
  dominantBaseline: TDominantBaseline
): string => {
  if (!dominantBaseline) {
    return 'auto' // Default value
  }
  return dominantBaseline
}

```

## TYPESCRIPT: src/util/style/empty-cells.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeEmptyCells } from './empty-cells'

describe('normalizeEmptyCells', () => {
  test('should return "show" for null or undefined', () => {
    expect(normalizeEmptyCells(null as any)).toBe('show')
    expect(normalizeEmptyCells(undefined as any)).toBe('show')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeEmptyCells('show')).toBe('show')
    expect(normalizeEmptyCells('hide')).toBe('hide')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeEmptyCells('inherit')).toBe('inherit')
    expect(normalizeEmptyCells('initial')).toBe('initial')
    expect(normalizeEmptyCells('revert')).toBe('revert')
    expect(normalizeEmptyCells('revert-layer')).toBe('revert-layer')
    expect(normalizeEmptyCells('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/empty-cells.ts

```typescript
import type { TEmptyCells } from '../../type'

export const normalizeEmptyCells = (emptyCells: TEmptyCells): string => {
  if (!emptyCells) {
    return 'show' // Default value
  }
  return emptyCells
}

```

## TYPESCRIPT: src/util/style/field-sizing.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFieldSizing } from './field-sizing'

describe('normalizeFieldSizing', () => {
  test('should return "content" for null or undefined', () => {
    expect(normalizeFieldSizing(null as any)).toBe('content')
    expect(normalizeFieldSizing(undefined as any)).toBe('content')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFieldSizing('content')).toBe('content')
    expect(normalizeFieldSizing('fixed')).toBe('fixed')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFieldSizing('inherit')).toBe('inherit')
    expect(normalizeFieldSizing('initial')).toBe('initial')
    expect(normalizeFieldSizing('revert')).toBe('revert')
    expect(normalizeFieldSizing('revert-layer')).toBe('revert-layer')
    expect(normalizeFieldSizing('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/field-sizing.ts

```typescript
import type { TFieldSizing } from '../../type'

export const normalizeFieldSizing = (fieldSizing: TFieldSizing): string => {
  if (!fieldSizing) {
    return 'content' // Default value
  }
  return fieldSizing
}

```

## TYPESCRIPT: src/util/style/fill-opacity.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFillOpacity } from './fill-opacity'

describe('normalizeFillOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeFillOpacity(null as any)).toBe('1')
    expect(normalizeFillOpacity(undefined as any)).toBe('1')
  })

  test('should return numeric values as-is', () => {
    expect(normalizeFillOpacity(0.2)).toBe('0.2')
    expect(normalizeFillOpacity(1)).toBe('1')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeFillOpacity('20%')).toBe('20%')
    expect(normalizeFillOpacity('100%')).toBe('100%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFillOpacity('inherit')).toBe('inherit')
    expect(normalizeFillOpacity('initial')).toBe('initial')
    expect(normalizeFillOpacity('revert')).toBe('revert')
    expect(normalizeFillOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeFillOpacity('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/fill-opacity.ts

```typescript
import type { TFillOpacity } from '../../type'

export const normalizeFillOpacity = (fillOpacity: TFillOpacity): string => {
  if (!fillOpacity) {
    return '1' // Default value (100% opacity)
  }
  return fillOpacity.toString()
}

```

## TYPESCRIPT: src/util/style/fill-rule.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFillRule } from './fill-rule'

describe('normalizeFillRule', () => {
  test('should return "evenodd" for null or undefined', () => {
    expect(normalizeFillRule(null as any)).toBe('evenodd')
    expect(normalizeFillRule(undefined as any)).toBe('evenodd')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFillRule('evenodd')).toBe('evenodd')
    expect(normalizeFillRule('nonzero')).toBe('nonzero')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFillRule('inherit')).toBe('inherit')
    expect(normalizeFillRule('initial')).toBe('initial')
    expect(normalizeFillRule('revert')).toBe('revert')
    expect(normalizeFillRule('revert-layer')).toBe('revert-layer')
    expect(normalizeFillRule('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/fill-rule.ts

```typescript
import type { TFillRule } from '../../type'

export const normalizeFillRule = (fillRule: TFillRule): string => {
  if (!fillRule) {
    return 'evenodd' // Default value
  }
  return fillRule
}

```

## TYPESCRIPT: src/util/style/fill.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFill } from './fill'

describe('normalizeFill', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeFill(null as any)).toBe('none')
    expect(normalizeFill(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFill('none')).toBe('none')
    expect(normalizeFill('context-fill')).toBe('context-fill')
    expect(normalizeFill('context-stroke')).toBe('context-stroke')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeFill('red')).toBe('red')
    expect(normalizeFill('hsl(120deg 75% 25% / 60%)')).toBe(
      'hsl(120deg 75% 25% / 60%)'
    )
  })

  test('should return valid <url> values as-is', () => {
    expect(normalizeFill('url(#gradientElementID)')).toBe(
      'url(#gradientElementID)'
    )
    expect(normalizeFill('url(star.png)')).toBe('url(star.png)')
  })

  test('should return <url> with fallback values as-is', () => {
    expect(normalizeFill('url(#gradientElementID) blue')).toBe(
      'url(#gradientElementID) blue'
    )
    expect(normalizeFill('url(star.png) none')).toBe('url(star.png) none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFill('inherit')).toBe('inherit')
    expect(normalizeFill('initial')).toBe('initial')
    expect(normalizeFill('revert')).toBe('revert')
    expect(normalizeFill('revert-layer')).toBe('revert-layer')
    expect(normalizeFill('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/fill.ts

```typescript
import type { TFill } from '../../type'

export const normalizeFill = (fill: TFill): string => {
  if (!fill) {
    return 'none' // Default value
  }
  return fill
}

```

## TYPESCRIPT: src/util/style/filter.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFilter } from './filter'

describe('normalizeFilter', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeFilter(null as any)).toBe('none')
    expect(normalizeFilter(undefined as any)).toBe('none')
  })

  test('should return valid <filter-function> values as-is', () => {
    expect(normalizeFilter('blur(5px)')).toBe('blur(5px)')
    expect(normalizeFilter('brightness(0.4)')).toBe('brightness(0.4)')
    expect(normalizeFilter('contrast(200%)')).toBe('contrast(200%)')
    expect(normalizeFilter('drop-shadow(16px 16px 20px blue)')).toBe(
      'drop-shadow(16px 16px 20px blue)'
    )
    expect(normalizeFilter('grayscale(50%)')).toBe('grayscale(50%)')
    expect(normalizeFilter('hue-rotate(90deg)')).toBe('hue-rotate(90deg)')
    expect(normalizeFilter('invert(75%)')).toBe('invert(75%)')
    expect(normalizeFilter('opacity(25%)')).toBe('opacity(25%)')
    expect(normalizeFilter('saturate(30%)')).toBe('saturate(30%)')
    expect(normalizeFilter('sepia(60%)')).toBe('sepia(60%)')
  })

  test('should return <url> values as-is', () => {
    expect(normalizeFilter('url("filters.svg#filter-id")')).toBe(
      'url("filters.svg#filter-id")'
    )
  })

  test('should return multiple filters as-is', () => {
    expect(normalizeFilter('contrast(175%) brightness(3%)')).toBe(
      'contrast(175%) brightness(3%)'
    )
    expect(
      normalizeFilter(
        'drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)'
      )
    ).toBe('drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)')
  })

  test('should return "none" keyword value as-is', () => {
    expect(normalizeFilter('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFilter('inherit')).toBe('inherit')
    expect(normalizeFilter('initial')).toBe('initial')
    expect(normalizeFilter('revert')).toBe('revert')
    expect(normalizeFilter('revert-layer')).toBe('revert-layer')
    expect(normalizeFilter('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/filter.ts

```typescript
import type { TFilter } from '../../type'

export const normalizeFilter = (filter: TFilter): string => {
  if (!filter) {
    return 'none' // Default value
  }
  return filter
}

```

## TYPESCRIPT: src/util/style/flex-basis.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFlexBasis } from './flex-basis'

describe('normalizeFlexBasis', () => {
  test('should return valid flex-basis values', () => {
    expect(normalizeFlexBasis('auto')).toBe('auto')
    expect(normalizeFlexBasis('50%')).toBe('50%')
    expect(normalizeFlexBasis('inherit')).toBe('inherit')
  })

  test('should convert pixel values to rem', () => {
    expect(normalizeFlexBasis('16px')).toBe('1rem')
    expect(normalizeFlexBasis('32px')).toBe('2rem')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexBasis(undefined as any)).toBe('auto')
    expect(normalizeFlexBasis(null as any)).toBe('auto')
  })
})

```

## TYPESCRIPT: src/util/style/flex-basis.ts

```typescript
import type { TFlexBasis } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeFlexBasis = (basis: TFlexBasis): string => {
  if (isPx(basis as string)) {
    return convertToRem(basis as string)
  }

  return basis || 'auto'
}

```

## TYPESCRIPT: src/util/style/flex-direction.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFlexDirection } from './flex-direction'

describe('normalizeFlexDirection', () => {
  test('should return valid flex-direction values', () => {
    expect(normalizeFlexDirection('row')).toBe('row')
    expect(normalizeFlexDirection('column')).toBe('column')
    expect(normalizeFlexDirection('row-reverse')).toBe('row-reverse')
    expect(normalizeFlexDirection('column-reverse')).toBe('column-reverse')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexDirection(undefined as any)).toBe('row')
    expect(normalizeFlexDirection(null as any)).toBe('row')
  })

  test('should handle global keywords', () => {
    expect(normalizeFlexDirection('inherit')).toBe('inherit')
    expect(normalizeFlexDirection('initial')).toBe('initial')
    expect(normalizeFlexDirection('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/flex-direction.ts

```typescript
import type { TFlexDirection } from '../../type'

export const normalizeFlexDirection = (direction: TFlexDirection): string => {
  return direction || 'row'
}

```

## TYPESCRIPT: src/util/style/flex-grow.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFlexGrow } from './flex-grow'

describe('normalizeFlexGrow', () => {
  test('should return valid flex-grow values', () => {
    expect(normalizeFlexGrow(1)).toBe('1')
    expect(normalizeFlexGrow(0)).toBe('0')
    expect(normalizeFlexGrow('inherit')).toBe('inherit')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexGrow(undefined as any)).toBe('0')
    expect(normalizeFlexGrow(null as any)).toBe('0')
  })
})

```

## TYPESCRIPT: src/util/style/flex-grow.ts

```typescript
import type { TFlexGrow } from '../../type'

export const normalizeFlexGrow = (grow: TFlexGrow): string => {
  if (typeof grow === 'number') {
    return grow.toString()
  }

  return grow || '0'
}

```

## TYPESCRIPT: src/util/style/flex-shrink.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFlexShrink } from './flex-shrink'

describe('normalizeFlexShrink', () => {
  test('should return valid flex-shrink values', () => {
    expect(normalizeFlexShrink(1)).toBe('1')
    expect(normalizeFlexShrink(0)).toBe('0')
    expect(normalizeFlexShrink('inherit')).toBe('inherit')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexShrink(undefined as any)).toBe('1')
    expect(normalizeFlexShrink(null as any)).toBe('1')
  })
})

```

## TYPESCRIPT: src/util/style/flex-shrink.ts

```typescript
import type { TFlexShrink } from '../../type'

export const normalizeFlexShrink = (shrink: TFlexShrink): string => {
  if (typeof shrink === 'number') {
    return shrink.toString()
  }

  return shrink || '1'
}

```

## TYPESCRIPT: src/util/style/flex-wrap.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFlexWrap } from './flex-wrap'

describe('normalizeFlexWrap', () => {
  test('should return valid flex-wrap values', () => {
    expect(normalizeFlexWrap('nowrap')).toBe('nowrap')
    expect(normalizeFlexWrap('wrap')).toBe('wrap')
    expect(normalizeFlexWrap('wrap-reverse')).toBe('wrap-reverse')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlexWrap(undefined as any)).toBe('nowrap')
    expect(normalizeFlexWrap(null as any)).toBe('nowrap')
  })

  test('should handle global keywords', () => {
    expect(normalizeFlexWrap('inherit')).toBe('inherit')
    expect(normalizeFlexWrap('initial')).toBe('initial')
    expect(normalizeFlexWrap('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/flex-wrap.ts

```typescript
import type { TFlexWrap } from '../../type'

export const normalizeFlexWrap = (wrap: TFlexWrap): string => {
  return wrap || 'nowrap'
}

```

## TYPESCRIPT: src/util/style/flex.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFlex } from './flex'

describe('normalizeFlex', () => {
  test('should return valid flex values', () => {
    expect(normalizeFlex('none')).toBe('none')
    expect(normalizeFlex('auto')).toBe('auto')
  })

  test('should normalize array values', () => {
    expect(normalizeFlex([1, 0, 'auto'])).toBe('1 0 auto')
    expect(normalizeFlex([2, 1, '50%'])).toBe('2 1 50%')
  })

  test('should handle invalid or missing values gracefully', () => {
    expect(normalizeFlex(undefined as any)).toBe('0 1 auto')
    expect(normalizeFlex(null as any)).toBe('0 1 auto')
  })

  test('should handle global keywords', () => {
    expect(normalizeFlex('inherit')).toBe('inherit')
    expect(normalizeFlex('initial')).toBe('initial')
    expect(normalizeFlex('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/flex.ts

```typescript
import type { TFlex } from '../../type'

export const normalizeFlex = (flex: TFlex): string => {
  if (Array.isArray(flex)) {
    const [grow, shrink, basis] = flex
    return [grow ?? 0, shrink ?? 1, basis ?? 'auto'].join(' ')
  }

  return flex ?? '0 1 auto'
}

```

## TYPESCRIPT: src/util/style/float.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFloat } from './float'

describe('normalizeFloat', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeFloat(null as any)).toBe('none')
    expect(normalizeFloat(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFloat('left')).toBe('left')
    expect(normalizeFloat('right')).toBe('right')
    expect(normalizeFloat('none')).toBe('none')
    expect(normalizeFloat('inline-start')).toBe('inline-start')
    expect(normalizeFloat('inline-end')).toBe('inline-end')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFloat('inherit')).toBe('inherit')
    expect(normalizeFloat('initial')).toBe('initial')
    expect(normalizeFloat('revert')).toBe('revert')
    expect(normalizeFloat('revert-layer')).toBe('revert-layer')
    expect(normalizeFloat('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/float.ts

```typescript
import type { TFloat } from '../../type'

export const normalizeFloat = (float: TFloat): string => {
  if (!float) {
    return 'none' // Default value
  }
  return float
}

```

## TYPESCRIPT: src/util/style/flood-color.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFloodColor } from './flood-color'

describe('normalizeFloodColor', () => {
  test('should return "currentcolor" for null or undefined', () => {
    expect(normalizeFloodColor(null as any)).toBe('currentcolor')
    expect(normalizeFloodColor(undefined as any)).toBe('currentcolor')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeFloodColor('red')).toBe('red')
    expect(normalizeFloodColor('hsl(120deg 75% 25% / 60%)')).toBe(
      'hsl(120deg 75% 25% / 60%)'
    )
    expect(normalizeFloodColor('currentcolor')).toBe('currentcolor')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFloodColor('inherit')).toBe('inherit')
    expect(normalizeFloodColor('initial')).toBe('initial')
    expect(normalizeFloodColor('revert')).toBe('revert')
    expect(normalizeFloodColor('revert-layer')).toBe('revert-layer')
    expect(normalizeFloodColor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/flood-color.ts

```typescript
import type { TFloodColor } from '../../type'

export const normalizeFloodColor = (floodColor: TFloodColor): string => {
  if (!floodColor) {
    return 'currentcolor' // Default value
  }
  return floodColor
}

```

## TYPESCRIPT: src/util/style/flood-opacity.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFloodOpacity } from './flood-opacity'

describe('normalizeFloodOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeFloodOpacity(null as any)).toBe('1')
    expect(normalizeFloodOpacity(undefined as any)).toBe('1')
  })

  test('should return numeric values as-is', () => {
    expect(normalizeFloodOpacity(0.2)).toBe('0.2')
    expect(normalizeFloodOpacity(1)).toBe('1')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeFloodOpacity('20%')).toBe('20%')
    expect(normalizeFloodOpacity('100%')).toBe('100%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFloodOpacity('inherit')).toBe('inherit')
    expect(normalizeFloodOpacity('initial')).toBe('initial')
    expect(normalizeFloodOpacity('revert')).toBe('revert')
    expect(normalizeFloodOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeFloodOpacity('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/flood-opacity.ts

```typescript
import type { TFloodOpacity } from '../../type'

export const normalizeFloodOpacity = (floodOpacity: TFloodOpacity): string => {
  if (!floodOpacity) {
    return '1' // Default value (100% opacity)
  }
  return floodOpacity.toString()
}

```

## TYPESCRIPT: src/util/style/font-family.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontFamily } from './font-family'

describe('normalizeFontFamily', () => {
  test('should return "inherit" for null or undefined', () => {
    expect(normalizeFontFamily(null as any)).toBe('inherit')
    expect(normalizeFontFamily(undefined as any)).toBe('inherit')
  })

  test('should return valid font family names as-is', () => {
    expect(normalizeFontFamily('"Gill Sans Extrabold", sans-serif')).toBe(
      '"Gill Sans Extrabold", sans-serif'
    )
    expect(normalizeFontFamily('"Goudy Bookletter 1911", sans-serif')).toBe(
      '"Goudy Bookletter 1911", sans-serif'
    )
  })

  test('should return generic family names as-is', () => {
    expect(normalizeFontFamily('serif')).toBe('serif')
    expect(normalizeFontFamily('sans-serif')).toBe('sans-serif')
    expect(normalizeFontFamily('monospace')).toBe('monospace')
    expect(normalizeFontFamily('cursive')).toBe('cursive')
    expect(normalizeFontFamily('fantasy')).toBe('fantasy')
    expect(normalizeFontFamily('system-ui')).toBe('system-ui')
    expect(normalizeFontFamily('ui-serif')).toBe('ui-serif')
    expect(normalizeFontFamily('ui-sans-serif')).toBe('ui-sans-serif')
    expect(normalizeFontFamily('ui-monospace')).toBe('ui-monospace')
    expect(normalizeFontFamily('ui-rounded')).toBe('ui-rounded')
    expect(normalizeFontFamily('emoji')).toBe('emoji')
    expect(normalizeFontFamily('math')).toBe('math')
    expect(normalizeFontFamily('fangsong')).toBe('fangsong')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontFamily('inherit')).toBe('inherit')
    expect(normalizeFontFamily('initial')).toBe('initial')
    expect(normalizeFontFamily('revert')).toBe('revert')
    expect(normalizeFontFamily('revert-layer')).toBe('revert-layer')
    expect(normalizeFontFamily('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-family.ts

```typescript
import type { TFontFamily } from '../../type'

export const normalizeFontFamily = (fontFamily: TFontFamily): string => {
  if (!fontFamily) {
    return 'inherit' // Default value for font-family
  }
  return fontFamily
}

```

## TYPESCRIPT: src/util/style/font-feature-settings.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontFeatureSettings } from './font-feature-settings'

describe('normalizeFontFeatureSettings', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontFeatureSettings(null as any)).toBe('normal')
    expect(normalizeFontFeatureSettings(undefined as any)).toBe('normal')
  })

  test('should return valid feature tag settings as-is', () => {
    expect(normalizeFontFeatureSettings('"smcp"')).toBe('"smcp"')
    expect(normalizeFontFeatureSettings('"smcp" on')).toBe('"smcp" on')
    expect(normalizeFontFeatureSettings('"swsh" 2')).toBe('"swsh" 2')
    expect(normalizeFontFeatureSettings('"smcp", "swsh" 2')).toBe(
      '"smcp", "swsh" 2'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontFeatureSettings('inherit')).toBe('inherit')
    expect(normalizeFontFeatureSettings('initial')).toBe('initial')
    expect(normalizeFontFeatureSettings('revert')).toBe('revert')
    expect(normalizeFontFeatureSettings('revert-layer')).toBe('revert-layer')
    expect(normalizeFontFeatureSettings('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-feature-settings.ts

```typescript
import type { TFontFeatureSettings } from '../../type'

export const normalizeFontFeatureSettings = (
  fontFeatureSettings: TFontFeatureSettings
): string => {
  if (!fontFeatureSettings) {
    return 'normal' // Default value
  }
  return fontFeatureSettings
}

```

## TYPESCRIPT: src/util/style/font-kerning.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontKerning } from './font-kerning'

describe('normalizeFontKerning', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontKerning(null as any)).toBe('auto')
    expect(normalizeFontKerning(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontKerning('auto')).toBe('auto')
    expect(normalizeFontKerning('normal')).toBe('normal')
    expect(normalizeFontKerning('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontKerning('inherit')).toBe('inherit')
    expect(normalizeFontKerning('initial')).toBe('initial')
    expect(normalizeFontKerning('revert')).toBe('revert')
    expect(normalizeFontKerning('revert-layer')).toBe('revert-layer')
    expect(normalizeFontKerning('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-kerning.ts

```typescript
import type { TFontKerning } from '../../type'

export const normalizeFontKerning = (fontKerning: TFontKerning): string => {
  if (!fontKerning) {
    return 'auto' // Default value
  }
  return fontKerning
}

```

## TYPESCRIPT: src/util/style/font-language-override.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontLanguageOverride } from './font-language-override'

describe('normalizeFontLanguageOverride', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontLanguageOverride(null as any)).toBe('normal')
    expect(normalizeFontLanguageOverride(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontLanguageOverride('normal')).toBe('normal')
  })

  test('should return valid <string> values as-is', () => {
    expect(normalizeFontLanguageOverride('"ENG"')).toBe('"ENG"')
    expect(normalizeFontLanguageOverride('"TRK"')).toBe('"TRK"')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontLanguageOverride('inherit')).toBe('inherit')
    expect(normalizeFontLanguageOverride('initial')).toBe('initial')
    expect(normalizeFontLanguageOverride('revert')).toBe('revert')
    expect(normalizeFontLanguageOverride('revert-layer')).toBe('revert-layer')
    expect(normalizeFontLanguageOverride('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-language-override.ts

```typescript
import type { TFontLanguageOverride } from '../../type'

export const normalizeFontLanguageOverride = (
  fontLanguageOverride: TFontLanguageOverride
): string => {
  if (!fontLanguageOverride) {
    return 'normal' // Default value
  }
  return fontLanguageOverride
}

```

## TYPESCRIPT: src/util/style/font-optical-sizing.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontOpticalSizing } from './font-optical-sizing'

describe('normalizeFontOpticalSizing', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontOpticalSizing(null as any)).toBe('auto')
    expect(normalizeFontOpticalSizing(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontOpticalSizing('none')).toBe('none')
    expect(normalizeFontOpticalSizing('auto')).toBe('auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontOpticalSizing('inherit')).toBe('inherit')
    expect(normalizeFontOpticalSizing('initial')).toBe('initial')
    expect(normalizeFontOpticalSizing('revert')).toBe('revert')
    expect(normalizeFontOpticalSizing('revert-layer')).toBe('revert-layer')
    expect(normalizeFontOpticalSizing('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-optical-sizing.ts

```typescript
import type { TFontOpticalSizing } from '../../type'

export const normalizeFontOpticalSizing = (
  fontOpticalSizing: TFontOpticalSizing
): string => {
  if (!fontOpticalSizing) {
    return 'auto' // Default value
  }
  return fontOpticalSizing
}

```

## TYPESCRIPT: src/util/style/font-palette.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontPalette } from './font-palette'

describe('normalizeFontPalette', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontPalette(null as any)).toBe('normal')
    expect(normalizeFontPalette(undefined as any)).toBe('normal')
  })

  test('should return font-defined palette keyword as-is', () => {
    expect(normalizeFontPalette('normal')).toBe('normal')
  })

  test('should return user-defined palette as-is', () => {
    expect(normalizeFontPalette('--one')).toBe('--one')
  })

  test('should return palette-mix values as-is', () => {
    expect(normalizeFontPalette('palette-mix(in lch, --blue, --yellow)')).toBe(
      'palette-mix(in lch, --blue, --yellow)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontPalette('inherit')).toBe('inherit')
    expect(normalizeFontPalette('initial')).toBe('initial')
    expect(normalizeFontPalette('revert')).toBe('revert')
    expect(normalizeFontPalette('revert-layer')).toBe('revert-layer')
    expect(normalizeFontPalette('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-palette.ts

```typescript
import type { TFontPalette } from '../../type'

export const normalizeFontPalette = (fontPalette: TFontPalette): string => {
  if (!fontPalette) {
    return 'normal' // Default value
  }
  return fontPalette
}

```

## TYPESCRIPT: src/util/style/font-size-adjust.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontSizeAdjust } from './font-size-adjust'

describe('normalizeFontSizeAdjust', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeFontSizeAdjust(null as any)).toBe('none')
    expect(normalizeFontSizeAdjust(undefined as any)).toBe('none')
  })

  test('should return single values as-is', () => {
    expect(normalizeFontSizeAdjust(0.5)).toBe('0.5')
    expect(normalizeFontSizeAdjust('from-font')).toBe('from-font')
  })

  test('should return two values as-is', () => {
    expect(normalizeFontSizeAdjust('ex-height 0.5')).toBe('ex-height 0.5')
    expect(normalizeFontSizeAdjust('ch-width from-font')).toBe(
      'ch-width from-font'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontSizeAdjust('inherit')).toBe('inherit')
    expect(normalizeFontSizeAdjust('initial')).toBe('initial')
    expect(normalizeFontSizeAdjust('revert')).toBe('revert')
    expect(normalizeFontSizeAdjust('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSizeAdjust('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-size-adjust.ts

```typescript
import type { TFontSizeAdjust } from '../../type'

export const normalizeFontSizeAdjust = (
  fontSizeAdjust: TFontSizeAdjust
): string => {
  if (!fontSizeAdjust) {
    return 'none' // Default value
  }
  return fontSizeAdjust.toString()
}

```

## TYPESCRIPT: src/util/style/font-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontSize } from './font-size'

describe('normalizeFontSize', () => {
  test('should return "medium" for null or undefined', () => {
    expect(normalizeFontSize(null as any)).toBe('medium')
    expect(normalizeFontSize(undefined as any)).toBe('medium')
  })

  test('should return valid absolute-size values as-is', () => {
    expect(normalizeFontSize('xx-small')).toBe('xx-small')
    expect(normalizeFontSize('x-small')).toBe('x-small')
    expect(normalizeFontSize('small')).toBe('small')
    expect(normalizeFontSize('medium')).toBe('medium')
    expect(normalizeFontSize('large')).toBe('large')
    expect(normalizeFontSize('x-large')).toBe('x-large')
    expect(normalizeFontSize('xx-large')).toBe('xx-large')
    expect(normalizeFontSize('xxx-large')).toBe('xxx-large')
  })

  test('should return valid relative-size values as-is', () => {
    expect(normalizeFontSize('smaller')).toBe('smaller')
    expect(normalizeFontSize('larger')).toBe('larger')
  })

  test('should convert px values to rem', () => {
    expect(normalizeFontSize('12px')).toBe('0.75rem') // Assuming 16px base font size
    expect(normalizeFontSize(16)).toBe('1rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeFontSize('80%')).toBe('80%')
  })

  test('should return "math" as-is', () => {
    expect(normalizeFontSize('math')).toBe('math')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontSize('inherit')).toBe('inherit')
    expect(normalizeFontSize('initial')).toBe('initial')
    expect(normalizeFontSize('revert')).toBe('revert')
    expect(normalizeFontSize('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-size.ts

```typescript
import type { TFontSize } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeFontSize = (fontSize: TFontSize): string => {
  if (!fontSize) {
    return 'medium' // Default value
  }

  if (typeof fontSize === 'number' || /^[\d.]+px$/.test(fontSize)) {
    return convertToRem(fontSize)
  }

  return fontSize.toString()
}

```

## TYPESCRIPT: src/util/style/font-stretch.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontStretch } from './font-stretch'

describe('normalizeFontStretch', () => {
  test('should return "normal" for null or undefined', () => {
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontStretch(null as any)).toBe('normal')
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontStretch(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontStretch('normal')).toBe('normal')
    expect(normalizeFontStretch('ultra-condensed')).toBe('ultra-condensed')
    expect(normalizeFontStretch('extra-condensed')).toBe('extra-condensed')
    expect(normalizeFontStretch('condensed')).toBe('condensed')
    expect(normalizeFontStretch('semi-condensed')).toBe('semi-condensed')
    expect(normalizeFontStretch('semi-expanded')).toBe('semi-expanded')
    expect(normalizeFontStretch('expanded')).toBe('expanded')
    expect(normalizeFontStretch('extra-expanded')).toBe('extra-expanded')
    expect(normalizeFontStretch('ultra-expanded')).toBe('ultra-expanded')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeFontStretch('50%')).toBe('50%')
    expect(normalizeFontStretch('100%')).toBe('100%')
    expect(normalizeFontStretch('200%')).toBe('200%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontStretch('inherit')).toBe('inherit')
    expect(normalizeFontStretch('initial')).toBe('initial')
    expect(normalizeFontStretch('revert')).toBe('revert')
    expect(normalizeFontStretch('revert-layer')).toBe('revert-layer')
    expect(normalizeFontStretch('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-stretch.ts

```typescript
import type { TFontStretch } from '../../type'

export const normalizeFontStretch = (fontStretch: TFontStretch): string => {
  if (!fontStretch) {
    return 'normal' // Default value
  }
  return fontStretch
}

```

## TYPESCRIPT: src/util/style/font-style.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontStyle } from './font-style'

describe('normalizeFontStyle', () => {
  test('should return "normal" for null or undefined', () => {
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontStyle(null as any)).toBe('normal')
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontStyle(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontStyle('normal')).toBe('normal')
    expect(normalizeFontStyle('italic')).toBe('italic')
    expect(normalizeFontStyle('oblique')).toBe('oblique')
  })

  test('should return oblique with angle as-is', () => {
    expect(normalizeFontStyle('oblique 10deg')).toBe('oblique 10deg')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontStyle('inherit')).toBe('inherit')
    expect(normalizeFontStyle('initial')).toBe('initial')
    expect(normalizeFontStyle('revert')).toBe('revert')
    expect(normalizeFontStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeFontStyle('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-style.ts

```typescript
import type { TFontStyle } from '../../type'

export const normalizeFontStyle = (fontStyle: TFontStyle): string => {
  if (!fontStyle) {
    return 'normal' // Default value
  }
  return fontStyle
}

```

## TYPESCRIPT: src/util/style/font-synthesis-small-caps.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontSynthesisSmallCaps } from './font-synthesis-small-caps'

describe('normalizeFontSynthesisSmallCaps', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontSynthesisSmallCaps(null as any)).toBe('auto')
    expect(normalizeFontSynthesisSmallCaps(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontSynthesisSmallCaps('auto')).toBe('auto')
    expect(normalizeFontSynthesisSmallCaps('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontSynthesisSmallCaps('inherit')).toBe('inherit')
    expect(normalizeFontSynthesisSmallCaps('initial')).toBe('initial')
    expect(normalizeFontSynthesisSmallCaps('revert')).toBe('revert')
    expect(normalizeFontSynthesisSmallCaps('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSynthesisSmallCaps('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-synthesis-small-caps.ts

```typescript
import type { TFontSynthesisSmallCaps } from '../../type'

export const normalizeFontSynthesisSmallCaps = (
  fontSynthesisSmallCaps: TFontSynthesisSmallCaps
): string => {
  if (!fontSynthesisSmallCaps) {
    return 'auto' // Default value
  }
  return fontSynthesisSmallCaps
}

```

## TYPESCRIPT: src/util/style/font-synthesis-style.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontSynthesisStyle } from './font-synthesis-style'

describe('normalizeFontSynthesisStyle', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontSynthesisStyle(null as any)).toBe('auto')
    expect(normalizeFontSynthesisStyle(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontSynthesisStyle('auto')).toBe('auto')
    expect(normalizeFontSynthesisStyle('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontSynthesisStyle('inherit')).toBe('inherit')
    expect(normalizeFontSynthesisStyle('initial')).toBe('initial')
    expect(normalizeFontSynthesisStyle('revert')).toBe('revert')
    expect(normalizeFontSynthesisStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSynthesisStyle('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-synthesis-style.ts

```typescript
import type { TFontSynthesisStyle } from '../../type'

export const normalizeFontSynthesisStyle = (
  fontSynthesisStyle: TFontSynthesisStyle
): string => {
  if (!fontSynthesisStyle) {
    return 'auto' // Default value
  }
  return fontSynthesisStyle
}

```

## TYPESCRIPT: src/util/style/font-synthesis-weight.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontSynthesisWeight } from './font-synthesis-weight'

describe('normalizeFontSynthesisWeight', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeFontSynthesisWeight(null as any)).toBe('auto')
    expect(normalizeFontSynthesisWeight(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontSynthesisWeight('auto')).toBe('auto')
    expect(normalizeFontSynthesisWeight('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontSynthesisWeight('inherit')).toBe('inherit')
    expect(normalizeFontSynthesisWeight('initial')).toBe('initial')
    expect(normalizeFontSynthesisWeight('revert')).toBe('revert')
    expect(normalizeFontSynthesisWeight('revert-layer')).toBe('revert-layer')
    expect(normalizeFontSynthesisWeight('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-synthesis-weight.ts

```typescript
import type { TFontSynthesisWeight } from '../../type'

export const normalizeFontSynthesisWeight = (
  fontSynthesisWeight: TFontSynthesisWeight
): string => {
  if (!fontSynthesisWeight) {
    return 'auto' // Default value
  }
  return fontSynthesisWeight
}

```

## TYPESCRIPT: src/util/style/font-variant-alternates.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantAlternates } from './font-variant-alternates'

describe('normalizeFontVariantAlternates', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantAlternates(null as any)).toBe('normal')
    expect(normalizeFontVariantAlternates(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantAlternates('normal')).toBe('normal')
    expect(normalizeFontVariantAlternates('historical-forms')).toBe(
      'historical-forms'
    )
  })

  test('should return functional notation values as-is', () => {
    expect(
      normalizeFontVariantAlternates('stylistic(user-defined-ident)')
    ).toBe('stylistic(user-defined-ident)')
    expect(normalizeFontVariantAlternates('styleset(user-defined-ident)')).toBe(
      'styleset(user-defined-ident)'
    )
    expect(
      normalizeFontVariantAlternates('character-variant(user-defined-ident)')
    ).toBe('character-variant(user-defined-ident)')
    expect(normalizeFontVariantAlternates('swash(user-defined-ident)')).toBe(
      'swash(user-defined-ident)'
    )
    expect(
      normalizeFontVariantAlternates('ornaments(user-defined-ident)')
    ).toBe('ornaments(user-defined-ident)')
    expect(
      normalizeFontVariantAlternates('annotation(user-defined-ident)')
    ).toBe('annotation(user-defined-ident)')
    expect(
      normalizeFontVariantAlternates('swash(ident1) annotation(ident2)')
    ).toBe('swash(ident1) annotation(ident2)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantAlternates('inherit')).toBe('inherit')
    expect(normalizeFontVariantAlternates('initial')).toBe('initial')
    expect(normalizeFontVariantAlternates('revert')).toBe('revert')
    expect(normalizeFontVariantAlternates('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantAlternates('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-variant-alternates.ts

```typescript
import type { TFontVariantAlternates } from '../../type'

export const normalizeFontVariantAlternates = (
  fontVariantAlternates: TFontVariantAlternates
): string => {
  if (!fontVariantAlternates) {
    return 'normal' // Default value
  }
  return fontVariantAlternates
}

```

## TYPESCRIPT: src/util/style/font-variant-caps.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantCaps } from './font-variant-caps'

describe('normalizeFontVariantCaps', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantCaps(null as any)).toBe('normal')
    expect(normalizeFontVariantCaps(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantCaps('normal')).toBe('normal')
    expect(normalizeFontVariantCaps('small-caps')).toBe('small-caps')
    expect(normalizeFontVariantCaps('all-small-caps')).toBe('all-small-caps')
    expect(normalizeFontVariantCaps('petite-caps')).toBe('petite-caps')
    expect(normalizeFontVariantCaps('all-petite-caps')).toBe('all-petite-caps')
    expect(normalizeFontVariantCaps('unicase')).toBe('unicase')
    expect(normalizeFontVariantCaps('titling-caps')).toBe('titling-caps')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantCaps('inherit')).toBe('inherit')
    expect(normalizeFontVariantCaps('initial')).toBe('initial')
    expect(normalizeFontVariantCaps('revert')).toBe('revert')
    expect(normalizeFontVariantCaps('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantCaps('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-variant-caps.ts

```typescript
import type { TFontVariantCaps } from '../../type'

export const normalizeFontVariantCaps = (
  fontVariantCaps: TFontVariantCaps
): string => {
  if (!fontVariantCaps) {
    return 'normal' // Default value
  }
  return fontVariantCaps
}

```

## TYPESCRIPT: src/util/style/font-variant-east-asian.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantEastAsian } from './font-variant-east-asian'

describe('normalizeFontVariantEastAsian', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantEastAsian(null as any)).toBe('normal')
    expect(normalizeFontVariantEastAsian(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantEastAsian('normal')).toBe('normal')
    expect(normalizeFontVariantEastAsian('ruby')).toBe('ruby')
    expect(normalizeFontVariantEastAsian('jis78')).toBe('jis78')
    expect(normalizeFontVariantEastAsian('simplified')).toBe('simplified')
    expect(normalizeFontVariantEastAsian('full-width')).toBe('full-width')
    expect(normalizeFontVariantEastAsian('proportional-width')).toBe(
      'proportional-width'
    )
  })

  test('should return combinations of values as-is', () => {
    expect(normalizeFontVariantEastAsian('ruby full-width jis83')).toBe(
      'ruby full-width jis83'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantEastAsian('inherit')).toBe('inherit')
    expect(normalizeFontVariantEastAsian('initial')).toBe('initial')
    expect(normalizeFontVariantEastAsian('revert')).toBe('revert')
    expect(normalizeFontVariantEastAsian('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantEastAsian('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-variant-east-asian.ts

```typescript
import type { TFontVariantEastAsian } from '../../type'

export const normalizeFontVariantEastAsian = (
  fontVariantEastAsian: TFontVariantEastAsian
): string => {
  if (!fontVariantEastAsian) {
    return 'normal' // Default value
  }
  return fontVariantEastAsian
}

```

## TYPESCRIPT: src/util/style/font-variant-ligatures.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantLigatures } from './font-variant-ligatures'

describe('normalizeFontVariantLigatures', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantLigatures(null as any)).toBe('normal')
    expect(normalizeFontVariantLigatures(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantLigatures('normal')).toBe('normal')
    expect(normalizeFontVariantLigatures('none')).toBe('none')
    expect(normalizeFontVariantLigatures('common-ligatures')).toBe(
      'common-ligatures'
    )
    expect(normalizeFontVariantLigatures('no-common-ligatures')).toBe(
      'no-common-ligatures'
    )
    expect(normalizeFontVariantLigatures('contextual')).toBe('contextual')
    expect(normalizeFontVariantLigatures('no-contextual')).toBe('no-contextual')
  })

  test('should return combinations of values as-is', () => {
    expect(
      normalizeFontVariantLigatures('no-contextual common-ligatures')
    ).toBe('no-contextual common-ligatures')
    expect(
      normalizeFontVariantLigatures(
        'common-ligatures no-discretionary-ligatures historical-ligatures contextual'
      )
    ).toBe(
      'common-ligatures no-discretionary-ligatures historical-ligatures contextual'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantLigatures('inherit')).toBe('inherit')
    expect(normalizeFontVariantLigatures('initial')).toBe('initial')
    expect(normalizeFontVariantLigatures('revert')).toBe('revert')
    expect(normalizeFontVariantLigatures('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantLigatures('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-variant-ligatures.ts

```typescript
import type { TFontVariantLigatures } from '../../type'

export const normalizeFontVariantLigatures = (
  fontVariantLigatures: TFontVariantLigatures
): string => {
  if (!fontVariantLigatures) {
    return 'normal' // Default value
  }
  return fontVariantLigatures
}

```

## TYPESCRIPT: src/util/style/font-variant-numeric.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantNumeric } from './font-variant-numeric'

describe('normalizeFontVariantNumeric', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariantNumeric(null as any)).toBe('normal')
    expect(normalizeFontVariantNumeric(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantNumeric('normal')).toBe('normal')
    expect(normalizeFontVariantNumeric('ordinal')).toBe('ordinal')
    expect(normalizeFontVariantNumeric('slashed-zero')).toBe('slashed-zero')
    expect(normalizeFontVariantNumeric('lining-nums')).toBe('lining-nums')
    expect(normalizeFontVariantNumeric('tabular-nums')).toBe('tabular-nums')
    expect(normalizeFontVariantNumeric('diagonal-fractions')).toBe(
      'diagonal-fractions'
    )
  })

  test('should return combinations of values as-is', () => {
    expect(normalizeFontVariantNumeric('oldstyle-nums stacked-fractions')).toBe(
      'oldstyle-nums stacked-fractions'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantNumeric('inherit')).toBe('inherit')
    expect(normalizeFontVariantNumeric('initial')).toBe('initial')
    expect(normalizeFontVariantNumeric('revert')).toBe('revert')
    expect(normalizeFontVariantNumeric('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantNumeric('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-variant-numeric.ts

```typescript
import type { TFontVariantNumeric } from '../../type'

export const normalizeFontVariantNumeric = (
  fontVariantNumeric: TFontVariantNumeric
): string => {
  if (!fontVariantNumeric) {
    return 'normal' // Default value
  }
  return fontVariantNumeric
}

```

## TYPESCRIPT: src/util/style/font-variant-position.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontVariantPosition } from './font-variant-position'

describe('normalizeFontVariantPosition', () => {
  test('should return "normal" for null or undefined', () => {
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontVariantPosition(null as any)).toBe('normal')
    // biome-ignore lint: lint/suspicious/noExplicitAny
    expect(normalizeFontVariantPosition(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeFontVariantPosition('normal')).toBe('normal')
    expect(normalizeFontVariantPosition('sub')).toBe('sub')
    expect(normalizeFontVariantPosition('super')).toBe('super')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariantPosition('inherit')).toBe('inherit')
    expect(normalizeFontVariantPosition('initial')).toBe('initial')
    expect(normalizeFontVariantPosition('revert')).toBe('revert')
    expect(normalizeFontVariantPosition('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariantPosition('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-variant-position.ts

```typescript
import type { TFontVariantPosition } from '../../type'

export const normalizeFontVariantPosition = (
  fontVariantPosition: TFontVariantPosition
): string => {
  if (!fontVariantPosition) {
    return 'normal' // Default value
  }
  return fontVariantPosition
}

```

## TYPESCRIPT: src/util/style/font-variant.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontVariant } from './font-variant'

describe('normalizeFontVariant', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariant(null as any)).toBe('normal')
    expect(normalizeFontVariant(undefined as any)).toBe('normal')
  })

  test('should return "none" as-is', () => {
    expect(normalizeFontVariant('none')).toBe('none')
  })

  test('should handle ligature-related values', () => {
    expect(normalizeFontVariant('common-ligatures')).toBe('common-ligatures')
    expect(normalizeFontVariant('no-common-ligatures')).toBe(
      'no-common-ligatures'
    )
    expect(normalizeFontVariant('contextual')).toBe('contextual')
    expect(normalizeFontVariant('no-contextual')).toBe('no-contextual')
  })

  test('should handle caps-related values', () => {
    expect(normalizeFontVariant('small-caps')).toBe('small-caps')
    expect(normalizeFontVariant('all-small-caps')).toBe('all-small-caps')
    expect(normalizeFontVariant('petite-caps')).toBe('petite-caps')
    expect(normalizeFontVariant('all-petite-caps')).toBe('all-petite-caps')
    expect(normalizeFontVariant('unicase')).toBe('unicase')
    expect(normalizeFontVariant('titling-caps')).toBe('titling-caps')
  })

  test('should handle numeric-related values', () => {
    expect(normalizeFontVariant('lining-nums')).toBe('lining-nums')
    expect(normalizeFontVariant('oldstyle-nums')).toBe('oldstyle-nums')
    expect(normalizeFontVariant('proportional-nums')).toBe('proportional-nums')
    expect(normalizeFontVariant('tabular-nums')).toBe('tabular-nums')
    expect(normalizeFontVariant('diagonal-fractions')).toBe(
      'diagonal-fractions'
    )
    expect(normalizeFontVariant('stacked-fractions')).toBe('stacked-fractions')
    expect(normalizeFontVariant('ordinal')).toBe('ordinal')
    expect(normalizeFontVariant('slashed-zero')).toBe('slashed-zero')
  })

  test('should handle east-asian-related values', () => {
    expect(normalizeFontVariant('jis78')).toBe('jis78')
    expect(normalizeFontVariant('simplified')).toBe('simplified')
    expect(normalizeFontVariant('proportional-width')).toBe(
      'proportional-width'
    )
    expect(normalizeFontVariant('ruby')).toBe('ruby')
  })

  test('should handle position-related values', () => {
    expect(normalizeFontVariant('sub')).toBe('sub')
    expect(normalizeFontVariant('super')).toBe('super')
  })

  test('should handle emoji-related values', () => {
    expect(normalizeFontVariant('text')).toBe('text')
    expect(normalizeFontVariant('emoji')).toBe('emoji')
    expect(normalizeFontVariant('unicode')).toBe('unicode')
  })

  test('should handle combinations of values', () => {
    expect(normalizeFontVariant('common-ligatures small-caps')).toBe(
      'common-ligatures small-caps'
    )
    expect(normalizeFontVariant('proportional-nums sub')).toBe(
      'proportional-nums sub'
    )
    expect(
      normalizeFontVariant('lining-nums small-caps jis78 proportional-width')
    ).toBe('lining-nums small-caps jis78 proportional-width')
  })

  test('should handle functional values as-is', () => {
    expect(normalizeFontVariant('stylistic(1)')).toBe('stylistic(1)')
    expect(normalizeFontVariant('styleset(2,3)')).toBe('styleset(2,3)')
    expect(normalizeFontVariant('swash(ornament)')).toBe('swash(ornament)')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontVariant('inherit')).toBe('inherit')
    expect(normalizeFontVariant('initial')).toBe('initial')
    expect(normalizeFontVariant('revert')).toBe('revert')
    expect(normalizeFontVariant('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariant('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-variant.ts

```typescript
import type { TFontVariant } from '../../type'

export const normalizeFontVariant = (fontVariant: TFontVariant): string => {
  if (!fontVariant) {
    return 'normal' // Default value for font-variant
  }
  return fontVariant
}

```

## TYPESCRIPT: src/util/style/font-variation-settings.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontVariationSettings } from './font-variation-settings'

describe('normalizeFontVariationSettings', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeFontVariationSettings(null as any)).toBe('normal')
    expect(normalizeFontVariationSettings(undefined as any)).toBe('normal')
  })

  test('should return valid variable font axis settings as-is', () => {
    expect(normalizeFontVariationSettings('"xhgt" 0.7')).toBe('"xhgt" 0.7')
    expect(normalizeFontVariationSettings('"wght" 1.0')).toBe('"wght" 1.0')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFontVariationSettings('inherit')).toBe('inherit')
    expect(normalizeFontVariationSettings('initial')).toBe('initial')
    expect(normalizeFontVariationSettings('revert')).toBe('revert')
    expect(normalizeFontVariationSettings('revert-layer')).toBe('revert-layer')
    expect(normalizeFontVariationSettings('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-variation-settings.ts

```typescript
import type { TFontVariationSettings } from '../../type'

export const normalizeFontVariationSettings = (
  fontVariationSettings: TFontVariationSettings
): string => {
  if (!fontVariationSettings) {
    return 'normal' // Default value
  }
  return fontVariationSettings
}

```

## TYPESCRIPT: src/util/style/font-weight.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFontWeight } from './font-weight'

describe('normalizeFontWeight', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeFontWeight(null as any)).toBe('normal')
    expect(normalizeFontWeight(undefined as any)).toBe('normal')
    expect(normalizeFontWeight('normal')).toBe('normal')
  })

  test('should return "bold" for "bold"', () => {
    expect(normalizeFontWeight('bold')).toBe('bold')
  })

  test('should return valid numeric values as strings', () => {
    expect(normalizeFontWeight(100)).toBe('100')
    expect(normalizeFontWeight(400)).toBe('400') // Normal equivalent
    expect(normalizeFontWeight(700)).toBe('700') // Bold equivalent
    expect(normalizeFontWeight(900)).toBe('900')
  })

  test('should clamp numeric values between 1 and 1000', () => {
    expect(normalizeFontWeight(0)).toBe('1') // Clamped to minimum
    expect(normalizeFontWeight(-10)).toBe('1') // Clamped to minimum
    expect(normalizeFontWeight(1500)).toBe('1000') // Clamped to maximum
    expect(normalizeFontWeight(1100)).toBe('1000') // Clamped to maximum
  })

  test('should return relative keyword values as-is', () => {
    expect(normalizeFontWeight('lighter')).toBe('lighter')
    expect(normalizeFontWeight('bolder')).toBe('bolder')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeFontWeight('inherit')).toBe('inherit')
    expect(normalizeFontWeight('initial')).toBe('initial')
    expect(normalizeFontWeight('revert')).toBe('revert')
    expect(normalizeFontWeight('revert-layer')).toBe('revert-layer')
    expect(normalizeFontWeight('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font-weight.ts

```typescript
import type { TFontWeight } from '../../type'

export const normalizeFontWeight = (fontWeight: TFontWeight): string => {
  if (
    fontWeight === undefined ||
    fontWeight === null ||
    fontWeight === 'normal'
  ) {
    return 'normal' // Default value
  }

  if (fontWeight === 'bold') {
    return 'bold'
  }

  if (typeof fontWeight === 'number') {
    // Ensure clamping to the range [1, 1000]
    const clampedValue = Math.min(1000, Math.max(1, fontWeight))
    return `${clampedValue}`
  }

  return fontWeight
}

```

## TYPESCRIPT: src/util/style/font.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeFont } from './font'

describe('normalizeFont', () => {
  test('should return an empty string for null or undefined', () => {
    expect(normalizeFont(null as any)).toBe('')
    expect(normalizeFont(undefined as any)).toBe('')
  })

  test('should return shorthand string representation as-is', () => {
    expect(normalizeFont('italic small-caps bold 16px/1.5 Arial')).toBe(
      'italic small-caps bold 16px/1.5 Arial'
    )
  })

  test('should normalize object representation correctly', () => {
    expect(
      normalizeFont({
        style: 'italic',
        variant: 'small-caps',
        weight: 'bold',
        size: '16px',
        lineHeight: '1.5',
        family: 'Arial',
      })
    ).toBe('italic small-caps bold 1rem/1.5 Arial')

    expect(
      normalizeFont({
        style: 'oblique 10deg',
        weight: '300',
        stretch: 'condensed',
        size: 16,
        family: 'Helvetica',
      })
    ).toBe('oblique 10deg 300 condensed 1rem Helvetica')
  })

  test('should normalize fontSize and lineHeight correctly', () => {
    expect(
      normalizeFont({
        size: '16px',
        lineHeight: '1.5',
        family: 'Verdana',
      })
    ).toBe('1rem/1.5 Verdana')

    expect(
      normalizeFont({
        size: 18,
        lineHeight: '150%',
        family: 'Verdana',
      })
    ).toBe('1.125rem/150% Verdana')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeFont('inherit')).toBe('inherit')
    expect(normalizeFont('initial')).toBe('initial')
    expect(normalizeFont('revert')).toBe('revert')
    expect(normalizeFont('revert-layer')).toBe('revert-layer')
    expect(normalizeFont('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/font.ts

```typescript
import type { TFont } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeFont = (font: TFont): string => {
  if (!font) {
    return '' // Default empty value
  }

  if (typeof font === 'string') {
    return font // Shorthand string
  }

  const {
    family = '',
    size = '',
    stretch = '',
    style = '',
    variant = '',
    weight = '',
    lineHeight = '',
  } = font

  const normalizedFontSize =
    (typeof size === 'string' && isPx(size)) || typeof size === 'number'
      ? convertToRem(size)
      : size

  const sizeWithLineHeight =
    normalizedFontSize && lineHeight
      ? `${normalizedFontSize}/${lineHeight}`
      : normalizedFontSize

  return [style, variant, weight, stretch, sizeWithLineHeight, family]
    .filter(Boolean) // Remove empty values
    .join(' ')
}

```

## TYPESCRIPT: src/util/style/forced-color-adjust.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeForcedColorAdjust } from './forced-color-adjust'

describe('normalizeForcedColorAdjust', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeForcedColorAdjust(null as any)).toBe('auto')
    expect(normalizeForcedColorAdjust(undefined as any)).toBe('auto')
  })

  test('should return valid values as-is', () => {
    expect(normalizeForcedColorAdjust('auto')).toBe('auto')
    expect(normalizeForcedColorAdjust('none')).toBe('none')
    expect(normalizeForcedColorAdjust('preserve-parent-color')).toBe(
      'preserve-parent-color'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeForcedColorAdjust('inherit')).toBe('inherit')
    expect(normalizeForcedColorAdjust('initial')).toBe('initial')
    expect(normalizeForcedColorAdjust('revert')).toBe('revert')
    expect(normalizeForcedColorAdjust('revert-layer')).toBe('revert-layer')
    expect(normalizeForcedColorAdjust('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/forced-color-adjust.ts

```typescript
import type { TForcedColorAdjust } from '../../type'

export const normalizeForcedColorAdjust = (
  forcedColorAdjust: TForcedColorAdjust
): string => {
  if (!forcedColorAdjust) {
    return 'auto' // Default value
  }
  return forcedColorAdjust
}

```

## TYPESCRIPT: src/util/style/gap.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGap } from './gap'

describe('normalizeGap', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeGap(null as any)).toBe('0')
    expect(normalizeGap(undefined as any)).toBe('0')
  })

  test('should normalize single values', () => {
    expect(normalizeGap('20px')).toBe('1.25rem')
    expect(normalizeGap(16)).toBe('1rem')
    expect(normalizeGap('100%')).toBe('100%')
    expect(normalizeGap('calc(10% + 20px)')).toBe('calc(10% + 20px)')
  })

  test('should normalize array of values', () => {
    expect(normalizeGap(['20px', '10px'])).toBe('1.25rem 0.625rem')
    expect(normalizeGap(['1em', '0.5em'])).toBe('1em 0.5em')
    expect(normalizeGap([16, '100%'])).toBe('1rem 100%')
    expect(normalizeGap(['calc(10% + 20px)', 'calc(20px + 10%)'])).toBe(
      'calc(10% + 20px) calc(20px + 10%)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGap('inherit')).toBe('inherit')
    expect(normalizeGap('initial')).toBe('initial')
    expect(normalizeGap('revert')).toBe('revert')
    expect(normalizeGap('revert-layer')).toBe('revert-layer')
    expect(normalizeGap('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/gap.ts

```typescript
import type { TGap } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeGap = (gap: TGap): string => {
  if (!gap) {
    return '0' // Default value
  }

  const gapList = Array.isArray(gap) ? gap : [gap]

  return gapList
    .slice(0, 2)
    .map((value) => {
      if (value === undefined || value === null) {
        return '0'
      }

      if (typeof value === 'string') {
        return isPx(value) ? convertToRem(value) : value
      }

      if (typeof value === 'number') {
        return convertToRem(value)
      }
    })
    .join(' ')
}

```

## TYPESCRIPT: src/util/style/grid-auto-columns.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridAutoColumns } from './grid-auto-columns'

describe('normalizeGridAutoColumns', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeGridAutoColumns(null as any)).toBe('auto')
    expect(normalizeGridAutoColumns(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridAutoColumns('auto')).toBe('auto')
    expect(normalizeGridAutoColumns('min-content')).toBe('min-content')
    expect(normalizeGridAutoColumns('max-content')).toBe('max-content')
  })

  test('should normalize <length> values', () => {
    expect(normalizeGridAutoColumns('100px')).toBe('6.25rem')
    expect(normalizeGridAutoColumns(100)).toBe('6.25rem')
    expect(normalizeGridAutoColumns('50vmax')).toBe('50vmax')
  })

  test('should normalize <percentage> values as-is', () => {
    expect(normalizeGridAutoColumns('10%')).toBe('10%')
    expect(normalizeGridAutoColumns('33.3%')).toBe('33.3%')
  })

  test('should return <flex> values as-is', () => {
    expect(normalizeGridAutoColumns('0.5fr')).toBe('0.5fr')
    expect(normalizeGridAutoColumns('3fr')).toBe('3fr')
  })

  test('should return minmax() and fit-content() values as-is', () => {
    expect(normalizeGridAutoColumns('minmax(100px, auto)')).toBe(
      'minmax(100px, auto)'
    )
    expect(normalizeGridAutoColumns('fit-content(400px)')).toBe(
      'fit-content(400px)'
    )
  })

  test('should normalize multiple track sizes', () => {
    expect(normalizeGridAutoColumns(['100px', '0.5fr', '10%'])).toBe(
      '6.25rem 0.5fr 10%'
    )
    expect(
      normalizeGridAutoColumns([
        'minmax(100px, auto)',
        'fit-content(400px)',
        '3fr',
      ])
    ).toBe('minmax(100px, auto) fit-content(400px) 3fr')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridAutoColumns('inherit')).toBe('inherit')
    expect(normalizeGridAutoColumns('initial')).toBe('initial')
    expect(normalizeGridAutoColumns('revert')).toBe('revert')
    expect(normalizeGridAutoColumns('revert-layer')).toBe('revert-layer')
    expect(normalizeGridAutoColumns('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-auto-columns.ts

```typescript
import type { TGridAutoColumns } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeGridAutoColumns = (
  value: TGridAutoColumns
): string | number => {
  if (!value) {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  if (Array.isArray(value)) {
    return value
      .map((trackSize) => {
        if (typeof trackSize === 'string') {
          return isPx(trackSize) ? convertToRem(trackSize) : trackSize
        }
        if (typeof trackSize === 'number') {
          return convertToRem(trackSize)
        }
        return trackSize
      })
      .join(' ')
  }

  return value
}

```

## TYPESCRIPT: src/util/style/grid-auto-flow.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridAutoFlow } from './grid-auto-flow'

describe('normalizeGridAutoFlow', () => {
  test('should return "row" for null or undefined', () => {
    expect(normalizeGridAutoFlow(null as any)).toBe('row')
    expect(normalizeGridAutoFlow(undefined as any)).toBe('row')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridAutoFlow('row')).toBe('row')
    expect(normalizeGridAutoFlow('column')).toBe('column')
    expect(normalizeGridAutoFlow('dense')).toBe('dense')
    expect(normalizeGridAutoFlow('row dense')).toBe('row dense')
    expect(normalizeGridAutoFlow('column dense')).toBe('column dense')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridAutoFlow('inherit')).toBe('inherit')
    expect(normalizeGridAutoFlow('initial')).toBe('initial')
    expect(normalizeGridAutoFlow('revert')).toBe('revert')
    expect(normalizeGridAutoFlow('revert-layer')).toBe('revert-layer')
    expect(normalizeGridAutoFlow('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-auto-flow.ts

```typescript
import type { TGridAutoFlow } from '../../type'

export const normalizeGridAutoFlow = (value: TGridAutoFlow): string => {
  if (!value) {
    return 'row' // Default value
  }
  return value
}

```

## TYPESCRIPT: src/util/style/grid-auto-rows.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridAutoRows } from './grid-auto-rows'

describe('normalizeGridAutoRows', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeGridAutoRows(null as any)).toBe('auto')
    expect(normalizeGridAutoRows(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridAutoRows('auto')).toBe('auto')
    expect(normalizeGridAutoRows('min-content')).toBe('min-content')
    expect(normalizeGridAutoRows('max-content')).toBe('max-content')
  })

  test('should normalize <length> values', () => {
    expect(normalizeGridAutoRows('100px')).toBe('6.25rem')
    expect(normalizeGridAutoRows(100)).toBe('6.25rem')
    expect(normalizeGridAutoRows('50vmax')).toBe('50vmax')
  })

  test('should normalize <percentage> values as-is', () => {
    expect(normalizeGridAutoRows('10%')).toBe('10%')
    expect(normalizeGridAutoRows('33.3%')).toBe('33.3%')
  })

  test('should return <flex> values as-is', () => {
    expect(normalizeGridAutoRows('0.5fr')).toBe('0.5fr')
    expect(normalizeGridAutoRows('3fr')).toBe('3fr')
  })

  test('should return minmax() and fit-content() values as-is', () => {
    expect(normalizeGridAutoRows('minmax(100px, auto)')).toBe(
      'minmax(100px, auto)'
    )
    expect(normalizeGridAutoRows('fit-content(400px)')).toBe(
      'fit-content(400px)'
    )
  })

  test('should normalize multiple track sizes', () => {
    expect(normalizeGridAutoRows(['100px', '0.5fr', '10%'])).toBe(
      '6.25rem 0.5fr 10%'
    )
    expect(
      normalizeGridAutoRows([
        'minmax(100px, auto)',
        'fit-content(400px)',
        '3fr',
      ])
    ).toBe('minmax(100px, auto) fit-content(400px) 3fr')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridAutoRows('inherit')).toBe('inherit')
    expect(normalizeGridAutoRows('initial')).toBe('initial')
    expect(normalizeGridAutoRows('revert')).toBe('revert')
    expect(normalizeGridAutoRows('revert-layer')).toBe('revert-layer')
    expect(normalizeGridAutoRows('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-auto-rows.ts

```typescript
import type { TGridAutoRows } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeGridAutoRows = (
  value: TGridAutoRows
): string | number => {
  if (!value) {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  if (Array.isArray(value)) {
    return value
      .map((trackSize) => {
        if (typeof trackSize === 'string') {
          return isPx(trackSize) ? convertToRem(trackSize) : trackSize
        }
        if (typeof trackSize === 'number') {
          return convertToRem(trackSize)
        }
        return trackSize
      })
      .join(' ')
  }

  return value
}

```

## TYPESCRIPT: src/util/style/grid-column.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridColumn } from './grid-column'

describe('normalizeGridColumn', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeGridColumn(null as any)).toBe('auto')
    expect(normalizeGridColumn(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridColumn('auto')).toBe('auto')
    expect(normalizeGridColumn('auto / auto')).toBe('auto / auto')
  })

  test('should return <custom-ident> values as-is', () => {
    expect(normalizeGridColumn('some-grid-area')).toBe('some-grid-area')
    expect(normalizeGridColumn('some-grid-area / some-other-grid-area')).toBe(
      'some-grid-area / some-other-grid-area'
    )
  })

  test('should handle <integer> + <custom-ident> combinations', () => {
    expect(normalizeGridColumn('some-grid-area 4')).toBe('some-grid-area 4')
    expect(normalizeGridColumn('4 some-grid-area / 6')).toBe(
      '4 some-grid-area / 6'
    )
  })

  test('should handle span combinations', () => {
    expect(normalizeGridColumn('span 3')).toBe('span 3')
    expect(normalizeGridColumn('span some-grid-area')).toBe(
      'span some-grid-area'
    )
    expect(normalizeGridColumn('5 some-grid-area span')).toBe(
      '5 some-grid-area span'
    )
    expect(normalizeGridColumn('span 3 / 6')).toBe('span 3 / 6')
    expect(
      normalizeGridColumn('span some-grid-area / span some-other-grid-area')
    ).toBe('span some-grid-area / span some-other-grid-area')
    expect(normalizeGridColumn('5 some-grid-area span / 2 span')).toBe(
      '5 some-grid-area span / 2 span'
    )
  })

  test('should handle arrays of values', () => {
    expect(normalizeGridColumn(['span 3', '6'])).toBe('span 3 / 6')
    expect(
      normalizeGridColumn(['span some-grid-area', 'span some-other-grid-area'])
    ).toBe('span some-grid-area / span some-other-grid-area')
  })

  test('should handle objects with start and end', () => {
    expect(normalizeGridColumn({ start: 2, end: 'span 5' })).toBe('2 / span 5')
    expect(normalizeGridColumn({ start: 'auto' })).toBe('auto / auto')
    expect(normalizeGridColumn({ end: 'span 3' })).toBe('auto / span 3')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridColumn('inherit')).toBe('inherit')
    expect(normalizeGridColumn('initial')).toBe('initial')
    expect(normalizeGridColumn('revert')).toBe('revert')
    expect(normalizeGridColumn('revert-layer')).toBe('revert-layer')
    expect(normalizeGridColumn('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-column.ts

```typescript
import type { TGridColumn } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeGridColumn = (value: TGridColumn): string | number => {
  if (!value) {
    return 'auto' // Default value
  }

  let start: string | number = 'auto'
  let end: string | number = 'auto'

  if (Array.isArray(value)) {
    ;[start, end] = value
  } else if (
    typeof value === 'object' &&
    ('start' in value || 'end' in value)
  ) {
    start = value.start ?? 'auto'
    end = value.end ?? 'auto'
  } else if (typeof value === 'string' || typeof value === 'number') {
    return value
  }

  const normalize = (val: string | number): string | number => {
    if (typeof val === 'string') {
      return isPx(val) ? convertToRem(val) : val
    }

    return val
  }

  return `${normalize(start)} / ${normalize(end)}`
}

```

## TYPESCRIPT: src/util/style/grid-row.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridRow } from './grid-row'

describe('normalizeGridRow', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeGridRow(null as any)).toBe('auto')
    expect(normalizeGridRow(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeGridRow('auto')).toBe('auto')
    expect(normalizeGridRow('auto / auto')).toBe('auto / auto')
  })

  test('should return <custom-ident> values as-is', () => {
    expect(normalizeGridRow('some-grid-area')).toBe('some-grid-area')
    expect(normalizeGridRow('some-grid-area / some-other-grid-area')).toBe(
      'some-grid-area / some-other-grid-area'
    )
  })

  test('should handle <integer> + <custom-ident> combinations', () => {
    expect(normalizeGridRow('some-grid-area 4')).toBe('some-grid-area 4')
    expect(normalizeGridRow('4 some-grid-area / 6')).toBe(
      '4 some-grid-area / 6'
    )
  })

  test('should handle span combinations', () => {
    expect(normalizeGridRow('span 3')).toBe('span 3')
    expect(normalizeGridRow('span some-grid-area')).toBe('span some-grid-area')
    expect(normalizeGridRow('5 some-grid-area span')).toBe(
      '5 some-grid-area span'
    )
    expect(normalizeGridRow('span 3 / 6')).toBe('span 3 / 6')
    expect(
      normalizeGridRow('span some-grid-area / span some-other-grid-area')
    ).toBe('span some-grid-area / span some-other-grid-area')
    expect(normalizeGridRow('5 some-grid-area span / 2 span')).toBe(
      '5 some-grid-area span / 2 span'
    )
  })

  test('should handle arrays of values', () => {
    expect(normalizeGridRow(['span 3', '6'])).toBe('span 3 / 6')
    expect(
      normalizeGridRow(['span some-grid-area', 'span some-other-grid-area'])
    ).toBe('span some-grid-area / span some-other-grid-area')
  })

  test('should handle objects with start and end', () => {
    expect(normalizeGridRow({ start: 2, end: 'span 5' })).toBe('2 / span 5')
    expect(normalizeGridRow({ start: 'auto' })).toBe('auto / auto')
    expect(normalizeGridRow({ end: 'span 3' })).toBe('auto / span 3')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridRow('inherit')).toBe('inherit')
    expect(normalizeGridRow('initial')).toBe('initial')
    expect(normalizeGridRow('revert')).toBe('revert')
    expect(normalizeGridRow('revert-layer')).toBe('revert-layer')
    expect(normalizeGridRow('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-row.ts

```typescript
import type { TGridRow } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeGridRow = (value: TGridRow): string | number => {
  if (!value) {
    return 'auto' // Default value
  }

  let start: string | number = 'auto'
  let end: string | number = 'auto'

  if (Array.isArray(value)) {
    ;[start, end] = value
  } else if (
    typeof value === 'object' &&
    ('start' in value || 'end' in value)
  ) {
    start = value.start ?? 'auto'
    end = value.end ?? 'auto'
  } else if (typeof value === 'string' || typeof value === 'number') {
    return value
  }

  const normalize = (val: string | number): string | number => {
    if (typeof val === 'string') {
      return isPx(val) ? convertToRem(val) : val
    }
    return val
  }

  return `${normalize(start)} / ${normalize(end)}`
}

```

## TYPESCRIPT: src/util/style/grid-template-areas.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridTemplateAreas } from './grid-template-areas'

describe('normalizeGridTemplateAreas', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeGridTemplateAreas(null as any)).toBe('none')
    expect(normalizeGridTemplateAreas(undefined as any)).toBe('none')
    expect(normalizeGridTemplateAreas('none')).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeGridTemplateAreas('"a b"')).toBe('"a b"')
    expect(
      normalizeGridTemplateAreas(`"a b ."
"a c d"`)
    ).toBe(`"a b ."
"a c d"`)
  })

  test('should handle arrays of values', () => {
    expect(normalizeGridTemplateAreas(['a b', 'c d'])).toBe('"a b" "c d"')
    expect(normalizeGridTemplateAreas(['a b .', 'a c d'])).toBe(
      '"a b ." "a c d"'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridTemplateAreas('inherit')).toBe('inherit')
    expect(normalizeGridTemplateAreas('initial')).toBe('initial')
    expect(normalizeGridTemplateAreas('revert')).toBe('revert')
    expect(normalizeGridTemplateAreas('revert-layer')).toBe('revert-layer')
    expect(normalizeGridTemplateAreas('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-template-areas.ts

```typescript
import type { TGridTemplateAreas } from '../../type'

export const normalizeGridTemplateAreas = (
  value: TGridTemplateAreas
): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    return value.map((area) => `"${area}"`).join(' ')
  }

  return value
}

```

## TYPESCRIPT: src/util/style/grid-template-columns.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridTemplateColumns } from './grid-template-columns'

describe('normalizeGridTemplateColumns', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeGridTemplateColumns(null as any)).toBe('none')
    expect(normalizeGridTemplateColumns(undefined as any)).toBe('none')
    expect(normalizeGridTemplateColumns('none')).toBe('none')
  })

  test('should return valid track-list values as-is', () => {
    expect(normalizeGridTemplateColumns('100px 1fr')).toBe('100px 1fr')
    expect(normalizeGridTemplateColumns('[line-name] 100px')).toBe(
      '[line-name] 100px'
    )
    expect(normalizeGridTemplateColumns('minmax(100px, 1fr)')).toBe(
      'minmax(100px, 1fr)'
    )
    expect(normalizeGridTemplateColumns('fit-content(40%)')).toBe(
      'fit-content(40%)'
    )
    expect(normalizeGridTemplateColumns('repeat(3, 200px)')).toBe(
      'repeat(3, 200px)'
    )
    expect(normalizeGridTemplateColumns('subgrid')).toBe('subgrid')
    expect(normalizeGridTemplateColumns('masonry')).toBe('masonry')
  })

  test('should return valid auto-track-list values as-is', () => {
    expect(
      normalizeGridTemplateColumns('200px repeat(auto-fill, 100px) 300px')
    ).toBe('200px repeat(auto-fill, 100px) 300px')
    expect(
      normalizeGridTemplateColumns(
        '[line-name1] 100px [line-name2] repeat(auto-fit, [line-name3] 300px) [line-name4]'
      )
    ).toBe(
      '[line-name1] 100px [line-name2] repeat(auto-fit, [line-name3] 300px) [line-name4]'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeGridTemplateColumns('inherit')).toBe('inherit')
    expect(normalizeGridTemplateColumns('initial')).toBe('initial')
    expect(normalizeGridTemplateColumns('revert')).toBe('revert')
    expect(normalizeGridTemplateColumns('revert-layer')).toBe('revert-layer')
    expect(normalizeGridTemplateColumns('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-template-columns.ts

```typescript
import type { TGridTemplateColumns } from '../../type'

export const normalizeGridTemplateColumns = (
  gridTemplateColumns: TGridTemplateColumns
): string => {
  if (!gridTemplateColumns || gridTemplateColumns === 'none') {
    return 'none' // Default value
  }

  return gridTemplateColumns
}

```

## TYPESCRIPT: src/util/style/grid-template-rows.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridTemplateRows } from './grid-template-rows'

describe('normalizeGridTemplateRows', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeGridTemplateRows(null as any)).toBe('none')
    expect(normalizeGridTemplateRows(undefined as any)).toBe('none')
    expect(normalizeGridTemplateRows('none')).toBe('none')
  })

  test('should return valid track-list values as-is', () => {
    expect(normalizeGridTemplateRows('100px 1fr')).toBe('100px 1fr')
    expect(normalizeGridTemplateRows('[line-name] 100px')).toBe(
      '[line-name] 100px'
    )
    expect(normalizeGridTemplateRows('minmax(100px, 1fr)')).toBe(
      'minmax(100px, 1fr)'
    )
    expect(normalizeGridTemplateRows('fit-content(40%)')).toBe(
      'fit-content(40%)'
    )
    expect(normalizeGridTemplateRows('repeat(3, 200px)')).toBe(
      'repeat(3, 200px)'
    )
    expect(normalizeGridTemplateRows('subgrid')).toBe('subgrid')
    expect(normalizeGridTemplateRows('masonry')).toBe('masonry')
  })

  test('should return valid auto-track-list values as-is', () => {
    expect(
      normalizeGridTemplateRows('200px repeat(auto-fill, 100px) 300px')
    ).toBe('200px repeat(auto-fill, 100px) 300px')
    expect(
      normalizeGridTemplateRows(
        '[line-name1] 100px [line-name2] repeat(auto-fit, [line-name3] 300px) [line-name4]'
      )
    ).toBe(
      '[line-name1] 100px [line-name2] repeat(auto-fit, [line-name3] 300px) [line-name4]'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeGridTemplateRows('inherit')).toBe('inherit')
    expect(normalizeGridTemplateRows('initial')).toBe('initial')
    expect(normalizeGridTemplateRows('revert')).toBe('revert')
    expect(normalizeGridTemplateRows('revert-layer')).toBe('revert-layer')
    expect(normalizeGridTemplateRows('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-template-rows.ts

```typescript
import type { TGridTemplateRows } from '../../type'

export const normalizeGridTemplateRows = (
  gridTemplateRows: TGridTemplateRows
): string => {
  if (!gridTemplateRows || gridTemplateRows === 'none') {
    return 'none' // Default value
  }
  return gridTemplateRows
}

```

## TYPESCRIPT: src/util/style/grid-template.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeGridTemplate } from './grid-template'

describe('normalizeGridTemplate', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeGridTemplate(null as any)).toBe('none')
    expect(normalizeGridTemplate(undefined as any)).toBe('none')
    expect(normalizeGridTemplate('none')).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeGridTemplate('100px 1fr / 50px 1fr')).toBe(
      '100px 1fr / 50px 1fr'
    )
    expect(
      normalizeGridTemplate('[line-name] 100px / [col1] 30% [col2] 70%')
    ).toBe('[line-name] 100px / [col1] 30% [col2] 70%')
  })

  test('should handle arrays of values', () => {
    expect(normalizeGridTemplate(['100px 1fr', '50px 1fr'])).toBe(
      '100px 1fr / 50px 1fr'
    )
    expect(
      normalizeGridTemplate([
        '[line-name] 100px',
        '[col-name1] 30% [col-name2] 70%',
      ])
    ).toBe('[line-name] 100px / [col-name1] 30% [col-name2] 70%')
  })

  test('should handle object with rows and columns', () => {
    expect(
      normalizeGridTemplate({ rows: '100px 1fr', columns: '50px 1fr' })
    ).toBe('100px 1fr / 50px 1fr')
    expect(
      normalizeGridTemplate({
        rows: '[header-top] "a a a" [header-bottom]',
        columns: '[main-top] "b b b" 1fr [main-bottom]',
      })
    ).toBe(
      '[header-top] "a a a" [header-bottom] / [main-top] "b b b" 1fr [main-bottom]'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeGridTemplate('inherit')).toBe('inherit')
    expect(normalizeGridTemplate('initial')).toBe('initial')
    expect(normalizeGridTemplate('revert')).toBe('revert')
    expect(normalizeGridTemplate('revert-layer')).toBe('revert-layer')
    expect(normalizeGridTemplate('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/grid-template.ts

```typescript
import type { TGridTemplate } from '../../type'

export const normalizeGridTemplate = (value: TGridTemplate): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    const [rows, columns] = value
    return `${String(rows).trim()} / ${String(columns).trim()}`
  }

  if (typeof value === 'object') {
    const rows = value.rows
      ? Array.isArray(value.rows)
        ? value.rows.join(' ')
        : value.rows
      : 'none'
    const columns = value.columns
      ? Array.isArray(value.columns)
        ? value.columns.join(' ')
        : value.columns
      : 'none'
    return `${rows} / ${columns}`
  }

  return value
}

```

## TYPESCRIPT: src/util/style/height.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeHeight } from './height'

describe('normalizeHeight', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeHeight(null as any)).toBe('auto')
    expect(normalizeHeight(undefined as any)).toBe('auto')
    expect(normalizeHeight('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeHeight('max-content')).toBe('max-content')
    expect(normalizeHeight('min-content')).toBe('min-content')
    expect(normalizeHeight('fit-content')).toBe('fit-content')
    expect(normalizeHeight('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeHeight('120px')).toBe('7.5rem')
    expect(normalizeHeight(120)).toBe('7.5rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeHeight('75%')).toBe('75%')
  })

  test('should return values with other length units as-is', () => {
    expect(normalizeHeight('10em')).toBe('10em')
    expect(normalizeHeight('5rem')).toBe('5rem')
    expect(normalizeHeight('100vh')).toBe('100vh')
    expect(normalizeHeight('100vw')).toBe('100vw')
    expect(normalizeHeight('3vmin')).toBe('3vmin')
    expect(normalizeHeight('5vmax')).toBe('5vmax')
    expect(normalizeHeight('2cm')).toBe('2cm')
    expect(normalizeHeight('5mm')).toBe('5mm')
    expect(normalizeHeight('1in')).toBe('1in')
    expect(normalizeHeight('10pt')).toBe('10pt')
    expect(normalizeHeight('8pc')).toBe('8pc')
  })

  test('should return custom function values as-is', () => {
    expect(normalizeHeight('anchor-size(height)')).toBe('anchor-size(height)')
    expect(normalizeHeight('anchor-size(--myAnchor self-block, 250px)')).toBe(
      'anchor-size(--myAnchor self-block, 250px)'
    )
    expect(normalizeHeight('clamp(200px, anchor-size(width))')).toBe(
      'clamp(200px, anchor-size(width))'
    )
    expect(normalizeHeight('minmax(min-content, anchor-size(width))')).toBe(
      'minmax(min-content, anchor-size(width))'
    )
  })

  test('should handle fit-content with parameters', () => {
    expect(normalizeHeight('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeHeight('inherit')).toBe('inherit')
    expect(normalizeHeight('initial')).toBe('initial')
    expect(normalizeHeight('revert')).toBe('revert')
    expect(normalizeHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeHeight('unset')).toBe('unset')
  })

  test('should handle edge cases for invalid inputs gracefully', () => {
    expect(normalizeHeight('invalid-value')).toBe('invalid-value')
    expect(normalizeHeight('500lightyears')).toBe('500lightyears')
  })
})

```

## TYPESCRIPT: src/util/style/height.ts

```typescript
import type { THeight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeHeight = (value: THeight): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/hyphenate-character.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeHyphenateCharacter } from './hyphenate-character'

describe('normalizeHyphenateCharacter', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeHyphenateCharacter(null as any)).toBe('auto')
    expect(normalizeHyphenateCharacter(undefined as any)).toBe('auto')
    expect(normalizeHyphenateCharacter('auto')).toBe('auto')
  })

  test('should return string values as-is', () => {
    expect(normalizeHyphenateCharacter('-')).toBe('-')
    expect(normalizeHyphenateCharacter('*')).toBe('*')
    expect(normalizeHyphenateCharacter('~')).toBe('~')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeHyphenateCharacter('inherit')).toBe('inherit')
    expect(normalizeHyphenateCharacter('initial')).toBe('initial')
    expect(normalizeHyphenateCharacter('revert')).toBe('revert')
    expect(normalizeHyphenateCharacter('revert-layer')).toBe('revert-layer')
    expect(normalizeHyphenateCharacter('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeHyphenateCharacter('')).toBe('auto')
    expect(normalizeHyphenateCharacter('invalid-char')).toBe('invalid-char')
  })
})

```

## TYPESCRIPT: src/util/style/hyphenate-character.ts

```typescript
import type { THyphenateCharacter } from '../../type'

export const normalizeHyphenateCharacter = (
  value: THyphenateCharacter
): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (value === undefined || value === null) {
    return 'auto'
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/hyphens.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeHyphens } from './hyphens'

describe('normalizeHyphens', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeHyphens(null as any)).toBe('none')
    expect(normalizeHyphens(undefined as any)).toBe('none')
    expect(normalizeHyphens('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeHyphens('manual')).toBe('manual')
    expect(normalizeHyphens('auto')).toBe('auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeHyphens('inherit')).toBe('inherit')
    expect(normalizeHyphens('initial')).toBe('initial')
    expect(normalizeHyphens('revert')).toBe('revert')
    expect(normalizeHyphens('revert-layer')).toBe('revert-layer')
    expect(normalizeHyphens('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/hyphens.ts

```typescript
import type { THyphens } from '../../type'

export const normalizeHyphens = (value: THyphens): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/image-orientation.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeImageOrientation } from './image-orientation'

describe('normalizeImageOrientation', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeImageOrientation(null as any)).toBe('none')
    expect(normalizeImageOrientation(undefined as any)).toBe('none')
    expect(normalizeImageOrientation('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeImageOrientation('from-image')).toBe('from-image')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeImageOrientation('inherit')).toBe('inherit')
    expect(normalizeImageOrientation('initial')).toBe('initial')
    expect(normalizeImageOrientation('revert')).toBe('revert')
    expect(normalizeImageOrientation('revert-layer')).toBe('revert-layer')
    expect(normalizeImageOrientation('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/image-orientation.ts

```typescript
import type { TImageOrientation } from '../../type'

export const normalizeImageOrientation = (value: TImageOrientation): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/image-rendering.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeImageRendering } from './image-rendering'

describe('normalizeImageRendering', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeImageRendering(null as any)).toBe('auto')
    expect(normalizeImageRendering(undefined as any)).toBe('auto')
    expect(normalizeImageRendering('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeImageRendering('smooth')).toBe('smooth')
    expect(normalizeImageRendering('crisp-edges')).toBe('crisp-edges')
    expect(normalizeImageRendering('pixelated')).toBe('pixelated')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeImageRendering('inherit')).toBe('inherit')
    expect(normalizeImageRendering('initial')).toBe('initial')
    expect(normalizeImageRendering('revert')).toBe('revert')
    expect(normalizeImageRendering('revert-layer')).toBe('revert-layer')
    expect(normalizeImageRendering('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/image-rendering.ts

```typescript
import type { TImageRendering } from '../../type'

export const normalizeImageRendering = (value: TImageRendering): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/index.ts

```typescript
export { normalizeAccentColor } from './accent-color'
export { normalizeAlignContent } from './align-content'
export { normalizeAlignItems } from './align-items'
export { normalizeAlignSelf } from './align-self'
export { normalizeAnimation } from './animation'
export { normalizeAppearance } from './appearance'
export { normalizeAspectRatio } from './aspect-ratio'
export { normalizeBackdropFilter } from './backdrop-filter'
export { normalizeBackfaceVisibility } from './backface-visibility'
export { normalizeBackground } from './background'
export { normalizeBackgroundBlendMode } from './background-blend-mode'
export { normalizeBackgroundClip } from './background-clip'
export { normalizeBackgroundOrigin } from './background-origin'
export { normalizeBlockSize } from './block-size'
export { normalizeBorder } from './border'
export { normalizeBorderBlock } from './border-block'
export { normalizeBorderBlockStart } from './border-block-start'
export { normalizeBorderBlockEnd } from './border-block-end'
export { normalizeBorderBottom } from './border-bottom'
export { normalizeBorderBottomLeftRadius } from './border-bottom-left-radius'
export { normalizeBorderBottomRightRadius } from './border-bottom-right-radius'
export { normalizeBorderCollapse } from './border-collapse'
export { normalizeBorderEndEndRadius } from './border-end-end-radius'
export { normalizeBorderEndStartRadius } from './border-end-start-radius'
export { normalizeBorderImage } from './border-image'
export { normalizeBorderInlineStart } from './border-inline-start'
export { normalizeBorderInlineEnd } from './border-inline-end'
export { normalizeBorderLeft } from './border-left'
export { normalizeBorderRadius } from './border-radius'
export { normalizeBorderRight } from './border-right'
export { normalizeBorderWidth } from './border-width'
export { normalizeBorderStyle } from './border-style'
export { normalizeBorderStartEndRadius } from './border-start-end-radius'
export { normalizeBorderStartStartRadius } from './border-start-start-radius'
export { normalizeBorderTop } from './border-top'
export { normalizeBorderTopLeftRadius } from './border-top-left-radius'
export { normalizeBorderTopRightRadius } from './border-top-right-radius'
export { normalizeBoxShadow } from './box-shadow'
export { normalizeBoxSizing } from './box-sizing'
export { normalizeBreakAfter } from './break-after'
export { normalizeBreakBefore } from './break-before'
export { normalizeBreakInside } from './break-inside'
export { normalizeBottom } from './bottom'
export { normalizeCaptionSide } from './caption-side'
export { normalizeCaretColor } from './caret-color'
export { normalizeClear } from './clear'
export { normalizeClip } from './clip'
export { normalizeClipPath } from './clip-path'
export { normalizeColor } from './color'
export { normalizeColorInterpolation } from './color-interpolation'
export { normalizeColorInterpolationFilters } from './color-interpolation-filters'
export { normalizeColorScheme } from './color-scheme'
export { normalizeColumnCount } from './column-count'
export { normalizeColumnFill } from './column-fill'
export { normalizeColumnGap } from './column-gap'
export { normalizeColumnRule } from './column-rule'
export { normalizeColumnSpan } from './column-span'
export { normalizeColumnWidth } from './column-width'
export { normalizeContain } from './contain'
export { normalizeContainIntrinsicBlockSize } from './contain-intrinsic-block-size'
export { normalizeContainIntrinsicHeight } from './contain-intrinsic-height'
export { normalizeContainIntrinsicInlineSize } from './contain-intrinsic-inline-size'
export { normalizeContainIntrinsicSize } from './contain-intrinsic-size'
export { normalizeContainIntrinsicWidth } from './contain-intrinsic-width'
export { normalizeContainer } from './container'
export { normalizeContent } from './content'
export { normalizeContentVisibility } from './content-visibility'
export { normalizeCounterIncrement } from './counter-increment'
export { normalizeCounterReset } from './counter-reset'
export { normalizeCounterSet } from './counter-set'
export { normalizeCursor } from './cursor'
export { normalizeCx } from './cx'
export { normalizeCy } from './cy'
export { normalizeD } from './d'
export { normalizeDisplay } from './display'
export { normalizeDirection } from './direction'
export { normalizeDominantBaseline } from './dominant-baseline'
export { normalizeEmptyCells } from './empty-cells'
export { normalizeFlex } from './flex'
export { normalizeFlexBasis } from './flex-basis'
export { normalizeFlexDirection } from './flex-direction'
export { normalizeFlexGrow } from './flex-grow'
export { normalizeFlexShrink } from './flex-shrink'
export { normalizeFlexWrap } from './flex-wrap'
export { normalizeFieldSizing } from './field-sizing'
export { normalizeFill } from './fill'
export { normalizeFillOpacity } from './fill-opacity'
export { normalizeFillRule } from './fill-rule'
export { normalizeFilter } from './filter'
export { normalizeFloat } from './float'
export { normalizeFloodColor } from './flood-color'
export { normalizeFloodOpacity } from './flood-opacity'
export { normalizeFont } from './font'
export { normalizeFontFamily } from './font-family'
export { normalizeFontSize } from './font-size'
export { normalizeFontStretch } from './font-stretch'
export { normalizeFontStyle } from './font-style'
export { normalizeFontVariant } from './font-variant'
export { normalizeFontWeight } from './font-weight'
export { normalizeFontFeatureSettings } from './font-feature-settings'
export { normalizeFontKerning } from './font-kerning'
export { normalizeFontLanguageOverride } from './font-language-override'
export { normalizeFontOpticalSizing } from './font-optical-sizing'
export { normalizeFontPalette } from './font-palette'
export { normalizeFontSizeAdjust } from './font-size-adjust'
export { normalizeFontSynthesisSmallCaps } from './font-synthesis-small-caps'
export { normalizeFontSynthesisStyle } from './font-synthesis-style'
export { normalizeFontSynthesisWeight } from './font-synthesis-weight'
export { normalizeFontVariantAlternates } from './font-variant-alternates'
export { normalizeFontVariantCaps } from './font-variant-caps'
export { normalizeFontVariantEastAsian } from './font-variant-east-asian'
export { normalizeFontVariantLigatures } from './font-variant-ligatures'
export { normalizeFontVariantNumeric } from './font-variant-numeric'
export { normalizeFontVariantPosition } from './font-variant-position'
export { normalizeFontVariationSettings } from './font-variation-settings'
export { normalizeForcedColorAdjust } from './forced-color-adjust'
export { normalizeGap } from './gap'
export { normalizeGridAutoColumns } from './grid-auto-columns'
export { normalizeGridAutoFlow } from './grid-auto-flow'
export { normalizeGridAutoRows } from './grid-auto-rows'
export { normalizeGridColumn } from './grid-column'
export { normalizeGridRow } from './grid-row'
export { normalizeGridTemplate } from './grid-template'
export { normalizeGridTemplateAreas } from './grid-template-areas'
export { normalizeGridTemplateColumns } from './grid-template-columns'
export { normalizeGridTemplateRows } from './grid-template-rows'
export { normalizeHeight } from './height'
export { normalizeHyphenateCharacter } from './hyphenate-character'
export { normalizeHyphens } from './hyphens'
export { normalizeImageOrientation } from './image-orientation'
export { normalizeImageRendering } from './image-rendering'
export { normalizeInlineSize } from './inline-size'
export { normalizeInset } from './inset'
export { normalizeInsetBlock } from './inset-block'
export { normalizeInsetInline } from './inset-inline'
export { normalizeIsolation } from './isolation'
export { normalizeJustifyContent } from './justify-content'
export { normalizeJustifyItems } from './justify-items'
export { normalizeJustifySelf } from './justify-self'
export { normalizeLeft } from './left'
export { normalizeLetterSpacing } from './letter-spacing'
export { normalizeLightingColor } from './lighting-color'
export { normalizeLineBreak } from './line-break'
export { normalizeLineHeight } from './line-height'
export { normalizeListStyle } from './list-style'
export { normalizeMargin } from './margin'
export { normalizeMarginBlock } from './margin-block'
export { normalizeMarginInline } from './margin-inline'
export { normalizeMask } from './mask'
export { normalizeMaskClip } from './mask-clip'
export { normalizeMathStyle } from './math-style'
export { normalizeMaxBlockSize } from './max-block-size'
export { normalizeMaxHeight } from './max-height'
export { normalizeMaxInlineSize } from './max-inline-size'
export { normalizeMaxWidth } from './max-width'
export { normalizeMinBlockSize } from './min-block-size'
export { normalizeMinHeight } from './min-height'
export { normalizeMinInlineSize } from './min-inline-size'
export { normalizeMinWidth } from './min-width'
export { normalizeMixBlendMode } from './mix-blend-mode'
export { normalizeObjectFit } from './object-fit'
export { normalizeObjectPosition } from './object-position'
export { normalizeOffset } from './offset'
export { normalizeOffsetAnchor } from './offset-anchor'
export { normalizeOpacity } from './opacity'
export { normalizeOrder } from './order'
export { normalizeOutline } from './outline'
export { normalizeOutlineOffset } from './outline-offset'
export { normalizeOverflow } from './overflow'
export { normalizeOverscrollBehavior } from './overscroll-behavior'
export { normalizeOverscrollBehaviorBlock } from './overscroll-behavior-block'
export { normalizeOverscrollBehaviorInline } from './overscroll-behavior-inline'
export { normalizePadding } from './padding'
export { normalizePerspective } from './perspective'
export { normalizePerspectiveOrigin } from './perspective-origin'
export { normalizePlaceContent } from './place-content'
export { normalizePlaceItems } from './place-items'
export { normalizePlaceSelf } from './place-self'
export { normalizePointerEvents } from './pointer-events'
export { normalizePosition } from './position'
export { normalizeQuotes } from './quotes'
export { normalizeResize } from './resize'
export { normalizeRight } from './right'
export { normalizeRotate } from './rotate'
export { normalizeRubyAlign } from './ruby-align'
export { normalizeRubyPosition } from './ruby-position'
export { normalizeScale } from './scale'
export { normalizeScrollBehavior } from './scroll-behavior'
export { normalizeScrollMargin } from './scroll-margin'
export { normalizeScrollPadding } from './scroll-padding'
export { normalizeScrollSnapAlign } from './scroll-snap-align'
export { normalizeScrollSnapStop } from './scroll-snap-stop'
export { normalizeScrollSnapType } from './scroll-snap-type'
export { normalizeScrollTimeline } from './scroll-timeline'
export { normalizeScrollTimelineAxis } from './scroll-timeline-axis'
export { normalizeScrollTimelineName } from './scroll-timeline-name'
export { normalizeScrollbarColor } from './scrollbar-color'
export { normalizeScrollbarGutter } from './scrollbar-gutter'
export { normalizeScrollbarWidth } from './scrollbar-width'
export { normalizeShapeImageThreshold } from './shape-image-threshold'
export { normalizeShapeMargin } from './shape-margin'
export { normalizeShapeOutside } from './shape-outside'
export { normalizeShapeRendering } from './shape-rendering'
export { normalizeStopColor } from './stop-color'
export { normalizeStopOpacity } from './stop-opacity'
export { normalizeStroke } from './stroke'
export { normalizeStrokeDasharray } from './stroke-dasharray'
export { normalizeStrokeDashoffset } from './stroke-dashoffset'
export { normalizeStrokeLinecap } from './stroke-linecap'
export { normalizeStrokeLinejoin } from './stroke-linejoin'
export { normalizeStrokeMiterlimit } from './stroke-miterlimit'
export { normalizeStrokeOpacity } from './stroke-opacity'
export { normalizeStrokeWidth } from './stroke-width'
export { normalizeTabSize } from './tab-size'
export { normalizeTableLayout } from './table-layout'
export { normalizeTextAlign } from './text-align'
export { normalizeTextAlignLast } from './text-align-last'
export { normalizeTextAnchor } from './text-anchor'
export { normalizeTextCombineUpright } from './text-combine-upright'
export { normalizeTextDecoration } from './text-decoration'
export { normalizeTextEmphasis } from './text-emphasis'
export { normalizeTextIndent } from './text-indent'
export { normalizeTextJustify } from './text-justify'
export { normalizeTextOrientation } from './text-orientation'
export { normalizeTextOverflow } from './text-overflow'
export { normalizeTextRendering } from './text-rendering'
export { normalizeTextShadow } from './text-shadow'
export { normalizeTextTransform } from './text-transform'
export { normalizeTextUnderlineOffset } from './text-underline-offset'
export { normalizeTextUnderlinePosition } from './text-underline-position'
export { normalizeTextWrap } from './text-wrap'
export { normalizeTextWrapStyle } from './text-wrap-style'
export { normalizeTouchAction } from './touch-action'
export { normalizeTop } from './top'
export { normalizeTransform } from './transform'
export { normalizeTransformBox } from './transform-box'
export { normalizeTransformOrigin } from './transform-origin'
export { normalizeTransformStyle } from './transform-style'
export { normalizeTransition } from './transition'
export { normalizeTransitionBehavior } from './transition-behavior'
export { normalizeTranslate } from './translate'
export { normalizeUserSelect } from './user-select'
export { normalizeVectorEffect } from './vector-effect'
export { normalizeVerticalAlign } from './vertical-align'
export { normalizeVisibility } from './visibility'
export { normalizeViewTransitionName } from './view-transition-name'
export { normalizeWhiteSpace } from './white-space'
export { normalizeWidth } from './width'
export { normalizeWillChange } from './will-change'
export { normalizeWordBreak } from './word-break'
export { normalizeWordSpacing } from './word-spacing'
export { normalizeWritingMode } from './writing-mode'
export { normalizeZIndex } from './z-index'
export { normalizeZoom } from './zoom'

```

## TYPESCRIPT: src/util/style/inline-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeInlineSize } from './inline-size'

describe('normalizeInlineSize', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeInlineSize(null as any)).toBe('auto')
    expect(normalizeInlineSize(undefined as any)).toBe('auto')
    expect(normalizeInlineSize('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeInlineSize('max-content')).toBe('max-content')
    expect(normalizeInlineSize('min-content')).toBe('min-content')
    expect(normalizeInlineSize('fit-content')).toBe('fit-content')
  })

  test('should handle fit-content with parameters', () => {
    expect(normalizeInlineSize('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeInlineSize('75%')).toBe('75%')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeInlineSize('300px')).toBe('18.75rem')
    expect(normalizeInlineSize(300)).toBe('18.75rem')
  })

  test('should handle anchor-size values as-is', () => {
    expect(normalizeInlineSize('anchor-size(width)')).toBe('anchor-size(width)')
    expect(normalizeInlineSize('anchor-size(--myAnchor inline)')).toBe(
      'anchor-size(--myAnchor inline)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeInlineSize('inherit')).toBe('inherit')
    expect(normalizeInlineSize('initial')).toBe('initial')
    expect(normalizeInlineSize('revert')).toBe('revert')
    expect(normalizeInlineSize('revert-layer')).toBe('revert-layer')
    expect(normalizeInlineSize('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeInlineSize('')).toBe('auto')
    expect(normalizeInlineSize('invalid-value')).toBe('invalid-value')
  })
})

```

## TYPESCRIPT: src/util/style/inline-size.ts

```typescript
import type { TInlineSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeInlineSize = (value: TInlineSize): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/inset-block.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeInsetBlock } from './inset-block'

describe('normalizeInsetBlock', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeInsetBlock(null as any)).toBe('auto')
    expect(normalizeInsetBlock(undefined as any)).toBe('auto')
    expect(normalizeInsetBlock('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeInsetBlock('10px')).toBe('0.625rem')
    expect(normalizeInsetBlock(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeInsetBlock('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeInsetBlock('anchor(start)')).toBe('anchor(start)')
    expect(normalizeInsetBlock('anchor-size(--myAnchor height, 10%)')).toBe(
      'anchor-size(--myAnchor height, 10%)'
    )
  })

  test('should handle arrays with shorthand logic', () => {
    expect(normalizeInsetBlock(['10px'])).toBe('0.625rem')
    expect(normalizeInsetBlock(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeInsetBlock(['10px', '10px'])).toBe('0.625rem')
  })

  test('should handle objects with start and end keys', () => {
    expect(normalizeInsetBlock({ start: '10px', end: '20px' })).toBe(
      '0.625rem 1.25rem'
    )
    expect(normalizeInsetBlock({ start: '10px' })).toBe('0.625rem auto')
    expect(normalizeInsetBlock({ end: '20px' })).toBe('auto 1.25rem')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeInsetBlock('inherit')).toBe('inherit')
    expect(normalizeInsetBlock('initial')).toBe('initial')
    expect(normalizeInsetBlock('revert')).toBe('revert')
    expect(normalizeInsetBlock('revert-layer')).toBe('revert-layer')
    expect(normalizeInsetBlock('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeInsetBlock(['10px', undefined])).toBe('0.625rem auto')
  })
})

```

## TYPESCRIPT: src/util/style/inset-block.ts

```typescript
import type { TInsetBlock } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeInsetBlock = (value: TInsetBlock): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  const normalize = (val: unknown): string | number => {
    if (typeof val === 'string') {
      return isPx(val) ? convertToRem(val) : val
    }
    if (typeof val === 'number') {
      return convertToRem(val)
    }
    return 'auto' // Default fallback
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return normalize(value)
  }

  if (Array.isArray(value)) {
    const [start = 'auto', end = start] = value.map((item) =>
      typeof item === 'string' || typeof item === 'number'
        ? normalize(item)
        : 'auto'
    )
    return start === end ? `${start}` : `${start} ${end}`
  }

  if (typeof value === 'object' && value !== null) {
    const start =
      typeof value.start === 'string' || typeof value.start === 'number'
        ? normalize(value.start)
        : 'auto'
    const end =
      typeof value.end === 'string' || typeof value.end === 'number'
        ? normalize(value.end)
        : 'auto'
    return `${start} ${end}`
  }

  return value as string // Final fallback for unhandled cases
}

```

## TYPESCRIPT: src/util/style/inset-inline.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeInsetInline } from './inset-inline'

describe('normalizeInsetInline', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeInsetInline(null as any)).toBe('auto')
    expect(normalizeInsetInline(undefined as any)).toBe('auto')
    expect(normalizeInsetInline('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeInsetInline('10px')).toBe('0.625rem')
    expect(normalizeInsetInline(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeInsetInline('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeInsetInline('anchor(start)')).toBe('anchor(start)')
    expect(normalizeInsetInline('anchor-size(--myAnchor inline, 10%)')).toBe(
      'anchor-size(--myAnchor inline, 10%)'
    )
  })

  test('should handle arrays with shorthand logic', () => {
    expect(normalizeInsetInline(['10px'])).toBe('0.625rem')
    expect(normalizeInsetInline(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeInsetInline(['10px', '10px'])).toBe('0.625rem')
  })

  test('should handle objects with start and end keys', () => {
    expect(normalizeInsetInline({ start: '10px', end: '20px' })).toBe(
      '0.625rem 1.25rem'
    )
    expect(normalizeInsetInline({ start: '10px' })).toBe('0.625rem auto')
    expect(normalizeInsetInline({ end: '20px' })).toBe('auto 1.25rem')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeInsetInline('inherit')).toBe('inherit')
    expect(normalizeInsetInline('initial')).toBe('initial')
    expect(normalizeInsetInline('revert')).toBe('revert')
    expect(normalizeInsetInline('revert-layer')).toBe('revert-layer')
    expect(normalizeInsetInline('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeInsetInline(['10px', undefined])).toBe('0.625rem auto')
  })
})

```

## TYPESCRIPT: src/util/style/inset-inline.ts

```typescript
import type { TInsetInline } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeInsetInline = (value: TInsetInline): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  const normalize = (val: unknown): string | number => {
    if (typeof val === 'string') {
      return isPx(val) ? convertToRem(val) : val
    }
    if (typeof val === 'number') {
      return convertToRem(val)
    }
    return 'auto' // Default fallback
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return normalize(value)
  }

  if (Array.isArray(value)) {
    const [start = 'auto', end = start] = value.map((item) =>
      typeof item === 'string' || typeof item === 'number'
        ? normalize(item)
        : 'auto'
    )
    return start === end ? `${start}` : `${start} ${end}`
  }

  if (typeof value === 'object' && value !== null) {
    const start =
      typeof value.start === 'string' || typeof value.start === 'number'
        ? normalize(value.start)
        : 'auto'
    const end =
      typeof value.end === 'string' || typeof value.end === 'number'
        ? normalize(value.end)
        : 'auto'
    return `${start} ${end}`
  }

  return value as string // Final fallback for unhandled cases
}

```

## TYPESCRIPT: src/util/style/inset.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeInset } from './inset'

describe('normalizeInset', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeInset(null as any)).toBe('auto')
    expect(normalizeInset(undefined as any)).toBe('auto')
    expect(normalizeInset('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeInset('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeInset('10px')).toBe('0.625rem')
    expect(normalizeInset(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeInset('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeInset('calc(anchor(50%) + 10px)')).toBe(
      'calc(anchor(50%) + 10px)'
    )
    expect(
      normalizeInset(
        'anchor-size(block) calc(anchor(50%) + 10px) auto calc(anchor-size(width) / 4)'
      )
    ).toBe(
      'anchor-size(block) calc(anchor(50%) + 10px) auto calc(anchor-size(width) / 4)'
    )
  })

  test('should apply shorthand logic for arrays', () => {
    expect(normalizeInset(['10px'])).toBe('0.625rem')
    expect(normalizeInset(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeInset(['10px', '20px', '10px'])).toBe('0.625rem 1.25rem')
    expect(normalizeInset(['10px', '20px', '30px', '40px'])).toBe(
      '0.625rem 1.25rem 1.875rem 2.5rem'
    )
    expect(normalizeInset(['10px', '10px', '10px', '10px'])).toBe('0.625rem')
    expect(normalizeInset(['10px', '20px', '10px', '20px'])).toBe(
      '0.625rem 1.25rem'
    )
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeInset('')).toBe('auto')
    expect(normalizeInset('invalid-value')).toBe('invalid-value')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeInset('inherit')).toBe('inherit')
    expect(normalizeInset('initial')).toBe('initial')
    expect(normalizeInset('revert')).toBe('revert')
    expect(normalizeInset('revert-layer')).toBe('revert-layer')
    expect(normalizeInset('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/inset.ts

```typescript
import type { TInset } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeInset = (value: TInset): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  if (Array.isArray(value)) {
    const [top = '0', right = top, bottom = top, left = right] = value.map(
      (item) => {
        if (typeof item === 'string') {
          return isPx(item) ? convertToRem(item) : item
        }
        if (typeof item === 'number') {
          return convertToRem(item)
        }
        return '0'
      }
    )

    // Apply shorthand logic
    if (top === right && top === bottom && top === left) {
      return top // All sides are the same
    }

    if (top === bottom && right === left) {
      return `${top} ${right}` // Top/Bottom and Right/Left are the same
    }

    if (top === bottom) {
      return `${top} ${right} ${bottom}` // Top/Bottom are the same, Left/Right differ
    }

    return `${top} ${right} ${bottom} ${left}` // All sides differ
  }

  return value
}

```

## TYPESCRIPT: src/util/style/isolation.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeIsolation } from './isolation'

describe('normalizeIsolation', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeIsolation(null as any)).toBe('auto')
    expect(normalizeIsolation(undefined as any)).toBe('auto')
    expect(normalizeIsolation('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeIsolation('isolate')).toBe('isolate')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeIsolation('inherit')).toBe('inherit')
    expect(normalizeIsolation('initial')).toBe('initial')
    expect(normalizeIsolation('revert')).toBe('revert')
    expect(normalizeIsolation('revert-layer')).toBe('revert-layer')
    expect(normalizeIsolation('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/isolation.ts

```typescript
import type { TIsolation } from '../../type'

export const normalizeIsolation = (value: TIsolation): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/justify-content.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeJustifyContent } from './justify-content'

describe('normalizeJustifyContent', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeJustifyContent(null as any)).toBe('normal')
    expect(normalizeJustifyContent(undefined as any)).toBe('normal')
    expect(normalizeJustifyContent('normal')).toBe('normal')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeJustifyContent('center')).toBe('center')
    expect(normalizeJustifyContent('start')).toBe('start')
    expect(normalizeJustifyContent('end')).toBe('end')
    expect(normalizeJustifyContent('flex-start')).toBe('flex-start')
    expect(normalizeJustifyContent('flex-end')).toBe('flex-end')
    expect(normalizeJustifyContent('left')).toBe('left')
    expect(normalizeJustifyContent('right')).toBe('right')
  })

  test('should return distributed alignment values as-is', () => {
    expect(normalizeJustifyContent('space-between')).toBe('space-between')
    expect(normalizeJustifyContent('space-around')).toBe('space-around')
    expect(normalizeJustifyContent('space-evenly')).toBe('space-evenly')
    expect(normalizeJustifyContent('stretch')).toBe('stretch')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeJustifyContent('safe center')).toBe('safe center')
    expect(normalizeJustifyContent('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeJustifyContent('inherit')).toBe('inherit')
    expect(normalizeJustifyContent('initial')).toBe('initial')
    expect(normalizeJustifyContent('revert')).toBe('revert')
    expect(normalizeJustifyContent('revert-layer')).toBe('revert-layer')
    expect(normalizeJustifyContent('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/justify-content.ts

```typescript
import type { TJustifyContent } from '../../type'

export const normalizeJustifyContent = (value: TJustifyContent): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/justify-items.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeJustifyItems } from './justify-items'

describe('normalizeJustifyItems', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeJustifyItems(null as any)).toBe('normal')
    expect(normalizeJustifyItems(undefined as any)).toBe('normal')
    expect(normalizeJustifyItems('normal')).toBe('normal')
  })

  test('should return basic keyword values as-is', () => {
    expect(normalizeJustifyItems('stretch')).toBe('stretch')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeJustifyItems('center')).toBe('center')
    expect(normalizeJustifyItems('start')).toBe('start')
    expect(normalizeJustifyItems('end')).toBe('end')
    expect(normalizeJustifyItems('flex-start')).toBe('flex-start')
    expect(normalizeJustifyItems('flex-end')).toBe('flex-end')
    expect(normalizeJustifyItems('self-start')).toBe('self-start')
    expect(normalizeJustifyItems('self-end')).toBe('self-end')
    expect(normalizeJustifyItems('left')).toBe('left')
    expect(normalizeJustifyItems('right')).toBe('right')
    expect(normalizeJustifyItems('anchor-center')).toBe('anchor-center')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeJustifyItems('baseline')).toBe('baseline')
    expect(normalizeJustifyItems('first baseline')).toBe('first baseline')
    expect(normalizeJustifyItems('last baseline')).toBe('last baseline')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeJustifyItems('safe center')).toBe('safe center')
    expect(normalizeJustifyItems('unsafe center')).toBe('unsafe center')
  })

  test('should return legacy alignment values as-is', () => {
    expect(normalizeJustifyItems('legacy right')).toBe('legacy right')
    expect(normalizeJustifyItems('legacy left')).toBe('legacy left')
    expect(normalizeJustifyItems('legacy center')).toBe('legacy center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeJustifyItems('inherit')).toBe('inherit')
    expect(normalizeJustifyItems('initial')).toBe('initial')
    expect(normalizeJustifyItems('revert')).toBe('revert')
    expect(normalizeJustifyItems('revert-layer')).toBe('revert-layer')
    expect(normalizeJustifyItems('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/justify-items.ts

```typescript
import type { TJustifyItems } from '../../type'

export const normalizeJustifyItems = (value: TJustifyItems): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/justify-self.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeJustifySelf } from './justify-self'

describe('normalizeJustifySelf', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeJustifySelf(null as any)).toBe('auto')
    expect(normalizeJustifySelf(undefined as any)).toBe('auto')
    expect(normalizeJustifySelf('auto')).toBe('auto')
  })

  test('should return basic keyword values as-is', () => {
    expect(normalizeJustifySelf('normal')).toBe('normal')
    expect(normalizeJustifySelf('stretch')).toBe('stretch')
  })

  test('should return positional alignment values as-is', () => {
    expect(normalizeJustifySelf('center')).toBe('center')
    expect(normalizeJustifySelf('start')).toBe('start')
    expect(normalizeJustifySelf('end')).toBe('end')
    expect(normalizeJustifySelf('flex-start')).toBe('flex-start')
    expect(normalizeJustifySelf('flex-end')).toBe('flex-end')
    expect(normalizeJustifySelf('self-start')).toBe('self-start')
    expect(normalizeJustifySelf('self-end')).toBe('self-end')
    expect(normalizeJustifySelf('left')).toBe('left')
    expect(normalizeJustifySelf('right')).toBe('right')
    expect(normalizeJustifySelf('anchor-center')).toBe('anchor-center')
  })

  test('should return baseline alignment values as-is', () => {
    expect(normalizeJustifySelf('baseline')).toBe('baseline')
    expect(normalizeJustifySelf('first baseline')).toBe('first baseline')
    expect(normalizeJustifySelf('last baseline')).toBe('last baseline')
  })

  test('should return overflow alignment values as-is', () => {
    expect(normalizeJustifySelf('safe center')).toBe('safe center')
    expect(normalizeJustifySelf('unsafe center')).toBe('unsafe center')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeJustifySelf('inherit')).toBe('inherit')
    expect(normalizeJustifySelf('initial')).toBe('initial')
    expect(normalizeJustifySelf('revert')).toBe('revert')
    expect(normalizeJustifySelf('revert-layer')).toBe('revert-layer')
    expect(normalizeJustifySelf('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/justify-self.ts

```typescript
import type { TJustifySelf } from '../../type'

export const normalizeJustifySelf = (value: TJustifySelf): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/left.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeLeft } from './left'

describe('normalizeLeft', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeLeft(null as any)).toBe('auto')
    expect(normalizeLeft(undefined as any)).toBe('auto')
    expect(normalizeLeft('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeLeft('3px')).toBe('0.1875rem')
    expect(normalizeLeft(3)).toBe('0.1875rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeLeft('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeLeft('calc(anchor(--myAnchor 50%) + 5px)')).toBe(
      'calc(anchor(--myAnchor 50%) + 5px)'
    )
    expect(normalizeLeft('anchor-size(width)')).toBe('anchor-size(width)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLeft('inherit')).toBe('inherit')
    expect(normalizeLeft('initial')).toBe('initial')
    expect(normalizeLeft('revert')).toBe('revert')
    expect(normalizeLeft('revert-layer')).toBe('revert-layer')
    expect(normalizeLeft('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/left.ts

```typescript
import type { TLeft } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeLeft = (value: TLeft): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/letter-spacing.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeLetterSpacing } from './letter-spacing'

describe('normalizeLetterSpacing', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeLetterSpacing(null as any)).toBe('normal')
    expect(normalizeLetterSpacing(undefined as any)).toBe('normal')
    expect(normalizeLetterSpacing('normal')).toBe('normal')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeLetterSpacing('3px')).toBe('0.1875rem')
    expect(normalizeLetterSpacing(3)).toBe('0.1875rem')
  })

  test('should handle em values as-is', () => {
    expect(normalizeLetterSpacing('0.3em')).toBe('0.3em')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLetterSpacing('inherit')).toBe('inherit')
    expect(normalizeLetterSpacing('initial')).toBe('initial')
    expect(normalizeLetterSpacing('revert')).toBe('revert')
    expect(normalizeLetterSpacing('revert-layer')).toBe('revert-layer')
    expect(normalizeLetterSpacing('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/letter-spacing.ts

```typescript
import type { TLetterSpacing } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeLetterSpacing = (
  value: TLetterSpacing
): string | number => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/lighting-color.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeLightingColor } from './lighting-color'

describe('normalizeLightingColor', () => {
  test('should return "currentcolor" for null or undefined', () => {
    expect(normalizeLightingColor(null as any)).toBe('currentcolor')
    expect(normalizeLightingColor(undefined as any)).toBe('currentcolor')
  })

  test('should return color values as-is', () => {
    expect(normalizeLightingColor('red')).toBe('red')
    expect(normalizeLightingColor('hsl(120deg 75% 25% / 60%)')).toBe(
      'hsl(120deg 75% 25% / 60%)'
    )
    expect(normalizeLightingColor('currentcolor')).toBe('currentcolor')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLightingColor('inherit')).toBe('inherit')
    expect(normalizeLightingColor('initial')).toBe('initial')
    expect(normalizeLightingColor('revert')).toBe('revert')
    expect(normalizeLightingColor('revert-layer')).toBe('revert-layer')
    expect(normalizeLightingColor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/lighting-color.ts

```typescript
import type { TLightingColor } from '../../type'

export const normalizeLightingColor = (value: TLightingColor): string => {
  if (!value) {
    return 'currentcolor' // Default to currentcolor
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/line-break.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeLineBreak } from './line-break'

describe('normalizeLineBreak', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeLineBreak(null as any)).toBe('auto')
    expect(normalizeLineBreak(undefined as any)).toBe('auto')
    expect(normalizeLineBreak('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeLineBreak('loose')).toBe('loose')
    expect(normalizeLineBreak('normal')).toBe('normal')
    expect(normalizeLineBreak('strict')).toBe('strict')
    expect(normalizeLineBreak('anywhere')).toBe('anywhere')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLineBreak('inherit')).toBe('inherit')
    expect(normalizeLineBreak('initial')).toBe('initial')
    expect(normalizeLineBreak('revert')).toBe('revert')
    expect(normalizeLineBreak('revert-layer')).toBe('revert-layer')
    expect(normalizeLineBreak('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/line-break.ts

```typescript
import type { TLineBreak } from '../../type'

export const normalizeLineBreak = (value: TLineBreak): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/line-height.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeLineHeight } from './line-height'

describe('normalizeLineHeight', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeLineHeight(null as any)).toBe('normal')
    expect(normalizeLineHeight(undefined as any)).toBe('normal')
    expect(normalizeLineHeight('normal')).toBe('normal')
  })

  test('should handle unitless values as-is', () => {
    expect(normalizeLineHeight(3.5)).toBe(3.5)
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeLineHeight('3px')).toBe('0.1875rem')
  })

  test('should handle em values as-is', () => {
    expect(normalizeLineHeight('3em')).toBe('3em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeLineHeight('34%')).toBe('34%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeLineHeight('inherit')).toBe('inherit')
    expect(normalizeLineHeight('initial')).toBe('initial')
    expect(normalizeLineHeight('revert')).toBe('revert')
    expect(normalizeLineHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeLineHeight('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/line-height.ts

```typescript
import type { TLineHeight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeLineHeight = (value: TLineHeight): string | number => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    if (isPx(value)) {
      return convertToRem(value)
    }
    return value
  }

  if (typeof value === 'number') {
    return value // Unitless value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/list-style.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeListStyle } from './list-style'

describe('normalizeListStyle', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeListStyle(null as any)).toBe('none')
    expect(normalizeListStyle(undefined as any)).toBe('none')
    expect(normalizeListStyle('none')).toBe('none')
  })

  test('should return type values as-is', () => {
    expect(normalizeListStyle('square')).toBe('square')
    expect(normalizeListStyle('lower-roman')).toBe('lower-roman')
  })

  test('should return image values as-is', () => {
    expect(normalizeListStyle('url("../img/shape.png")')).toBe(
      'url("../img/shape.png")'
    )
  })

  test('should return position values as-is', () => {
    expect(normalizeListStyle('inside')).toBe('inside')
    expect(normalizeListStyle('outside')).toBe('outside')
  })

  test('should return two values as-is', () => {
    expect(normalizeListStyle('georgian outside')).toBe('georgian outside')
    expect(normalizeListStyle('url("img/pip.svg") inside')).toBe(
      'url("img/pip.svg") inside'
    )
  })

  test('should return three values as-is', () => {
    expect(normalizeListStyle('lower-roman url("img/shape.png") outside')).toBe(
      'lower-roman url("img/shape.png") outside'
    )
  })

  test('should handle object format', () => {
    expect(normalizeListStyle({ type: 'square', position: 'inside' })).toBe(
      'square inside'
    )
    expect(
      normalizeListStyle({
        type: 'lower-roman',
        image: 'url("img/shape.png")',
        position: 'outside',
      })
    ).toBe('lower-roman url("img/shape.png") outside')
    expect(normalizeListStyle({ image: 'url("img/shape.png")' })).toBe(
      'none url("img/shape.png")'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeListStyle('inherit')).toBe('inherit')
    expect(normalizeListStyle('initial')).toBe('initial')
    expect(normalizeListStyle('revert')).toBe('revert')
    expect(normalizeListStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeListStyle('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/list-style.ts

```typescript
import type { TListStyle } from '../../type'

export const normalizeListStyle = (value: TListStyle): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'object') {
    const { type = 'none', image = '', position = '' } = value
    return [type, image, position].filter((part) => part).join(' ')
  }

  return value
}

```

## TYPESCRIPT: src/util/style/margin-block.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMarginBlock } from './margin-block'

describe('normalizeMarginBlock', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeMarginBlock(null as any)).toBe('auto')
    expect(normalizeMarginBlock(undefined as any)).toBe('auto')
    expect(normalizeMarginBlock('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMarginBlock('10px')).toBe('0.625rem')
    expect(normalizeMarginBlock(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMarginBlock('5%')).toBe('5%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMarginBlock('calc(anchor-size(width) / 4)')).toBe(
      'calc(anchor-size(width) / 4)'
    )
    expect(normalizeMarginBlock('anchor-size(inline)')).toBe(
      'anchor-size(inline)'
    )
  })

  test('should handle arrays with shorthand logic', () => {
    expect(normalizeMarginBlock(['10px'])).toBe('0.625rem')
    expect(normalizeMarginBlock(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeMarginBlock(['10px', '10px'])).toBe('0.625rem')
  })

  test('should handle objects with start and end keys', () => {
    expect(normalizeMarginBlock({ start: '10px', end: '20px' })).toBe(
      '0.625rem 1.25rem'
    )
    expect(normalizeMarginBlock({ start: '10px' })).toBe('0.625rem auto')
    expect(normalizeMarginBlock({ end: '20px' })).toBe('auto 1.25rem')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMarginBlock('inherit')).toBe('inherit')
    expect(normalizeMarginBlock('initial')).toBe('initial')
    expect(normalizeMarginBlock('revert')).toBe('revert')
    expect(normalizeMarginBlock('revert-layer')).toBe('revert-layer')
    expect(normalizeMarginBlock('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeMarginBlock(['10px', undefined])).toBe('0.625rem auto')
  })
})

```

## TYPESCRIPT: src/util/style/margin-block.ts

```typescript
import type { TMarginBlock } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMarginBlock = (value: TMarginBlock): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  const normalize = (val: unknown): string | number => {
    if (typeof val === 'string') {
      return isPx(val) ? convertToRem(val) : val
    }
    if (typeof val === 'number') {
      return convertToRem(val)
    }
    return 'auto'
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return normalize(value)
  }

  if (Array.isArray(value)) {
    const [start = 'auto', end = start] = value.map((item) =>
      typeof item === 'string' || typeof item === 'number'
        ? normalize(item)
        : 'auto'
    )
    return start === end ? `${start}` : `${start} ${end}`
  }

  if (typeof value === 'object' && value !== null) {
    const start =
      typeof value.start === 'string' || typeof value.start === 'number'
        ? normalize(value.start)
        : 'auto'
    const end =
      typeof value.end === 'string' || typeof value.end === 'number'
        ? normalize(value.end)
        : 'auto'
    return `${start} ${end}`
  }

  return value as string
}

```

## TYPESCRIPT: src/util/style/margin-inline.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMarginInline } from './margin-inline'

describe('normalizeMarginInline', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeMarginInline(null as any)).toBe('auto')
    expect(normalizeMarginInline(undefined as any)).toBe('auto')
    expect(normalizeMarginInline('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMarginInline('10px')).toBe('0.625rem')
    expect(normalizeMarginInline(10)).toBe('0.625rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMarginInline('5%')).toBe('5%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMarginInline('calc(anchor-size(self-block) / 5)')).toBe(
      'calc(anchor-size(self-block) / 5)'
    )
    expect(normalizeMarginInline('anchor-size(width)')).toBe(
      'anchor-size(width)'
    )
  })

  test('should handle arrays with shorthand logic', () => {
    expect(normalizeMarginInline(['10px'])).toBe('0.625rem')
    expect(normalizeMarginInline(['10px', '20px'])).toBe('0.625rem 1.25rem')
    expect(normalizeMarginInline(['10px', '10px'])).toBe('0.625rem')
  })

  test('should handle objects with start and end keys', () => {
    expect(normalizeMarginInline({ start: '10px', end: '20px' })).toBe(
      '0.625rem 1.25rem'
    )
    expect(normalizeMarginInline({ start: '10px' })).toBe('0.625rem auto')
    expect(normalizeMarginInline({ end: '20px' })).toBe('auto 1.25rem')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMarginInline('inherit')).toBe('inherit')
    expect(normalizeMarginInline('initial')).toBe('initial')
    expect(normalizeMarginInline('revert')).toBe('revert')
    expect(normalizeMarginInline('revert-layer')).toBe('revert-layer')
    expect(normalizeMarginInline('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeMarginInline(['10px', undefined])).toBe('0.625rem auto')
  })
})

```

## TYPESCRIPT: src/util/style/margin-inline.ts

```typescript
import type { TMarginInline } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMarginInline = (
  value: TMarginInline
): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  const normalize = (val: unknown): string | number => {
    if (typeof val === 'string') {
      return isPx(val) ? convertToRem(val) : val
    }
    if (typeof val === 'number') {
      return convertToRem(val)
    }
    return 'auto'
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return normalize(value)
  }

  if (Array.isArray(value)) {
    const [start = 'auto', end = start] = value.map((item) =>
      typeof item === 'string' || typeof item === 'number'
        ? normalize(item)
        : 'auto'
    )
    return start === end ? `${start}` : `${start} ${end}`
  }

  if (typeof value === 'object' && value !== null) {
    const start =
      typeof value.start === 'string' || typeof value.start === 'number'
        ? normalize(value.start)
        : 'auto'
    const end =
      typeof value.end === 'string' || typeof value.end === 'number'
        ? normalize(value.end)
        : 'auto'
    return `${start} ${end}`
  }

  return value as string
}

```

## TYPESCRIPT: src/util/style/margin.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMargin } from './margin'

describe('normalizeMargin', () => {
  // Test special CSS values
  test('should return special CSS values as-is', () => {
    expect(normalizeMargin('inherit')).toBe('inherit')
    expect(normalizeMargin('initial')).toBe('initial')
    expect(normalizeMargin('revert')).toBe('revert')
    expect(normalizeMargin('revert-layer')).toBe('revert-layer')
    expect(normalizeMargin('unset')).toBe('unset')
    expect(normalizeMargin('auto')).toBe('auto')
  })

  // Test string inputs
  test('should return the string value as-is when passed a string', () => {
    expect(normalizeMargin('12px')).toBe('0.75rem')
    expect(normalizeMargin('1rem')).toBe('1rem')
    expect(normalizeMargin('0')).toBe('0')
  })

  // Test single number input
  test('should convert a single numeric value to rem', () => {
    expect(normalizeMargin(16)).toBe('1rem')
    expect(normalizeMargin(0)).toBe('0')
    expect(normalizeMargin(32)).toBe('2rem')
  })

  // Test array inputs
  test('should normalize an array and convert numbers to rem', () => {
    expect(normalizeMargin([16])).toBe('1rem')
    expect(normalizeMargin([16, 32])).toBe('1rem 2rem')
    expect(normalizeMargin([16, 32, 48])).toBe('1rem 2rem 3rem')
    expect(normalizeMargin([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
    expect(normalizeMargin(['10px', 16, '1rem', 32])).toBe(
      '0.625rem 1rem 1rem 2rem',
    )
  })

  // Test object inputs
  test('should normalize an object and convert values to rem', () => {
    expect(normalizeMargin({ top: 16 })).toBe('1rem 0 0')
    expect(normalizeMargin({ top: 16, right: 32 })).toBe('1rem 2rem 0 0')
    expect(normalizeMargin({ top: 16, right: 32, bottom: 48 })).toBe(
      '1rem 2rem 3rem 0',
    )
    expect(
      normalizeMargin({ top: '10px', right: 16, bottom: '1rem', left: 32 }),
    ).toBe('0.625rem 1rem 1rem 2rem')
    expect(normalizeMargin({})).toBe('0')
  })

  // Test mixed inputs
  test('should handle mixed units correctly', () => {
    expect(normalizeMargin([16, 'auto', 48, 'inherit'])).toBe(
      '1rem auto 3rem inherit',
    )
    expect(
      normalizeMargin({
        top: 'inherit',
        right: 'auto',
        bottom: 48,
        left: '10px',
      }),
    ).toBe('inherit auto 3rem 0.625rem')
  })

  // Test edge cases for special CSS values
  test('should handle special CSS values with arrays and objects', () => {
    expect(normalizeMargin(['inherit', 'initial', 'unset', 'auto'])).toBe(
      'inherit initial unset auto',
    )
    expect(
      normalizeMargin({
        top: 'revert',
        right: 'revert-layer',
        bottom: 'unset',
        left: 'initial',
      }),
    ).toBe('revert revert-layer unset initial')
  })

  // Test empty and invalid inputs
  test('should handle empty or invalid inputs', () => {
    expect(normalizeMargin([])).toBe('0')
    expect(normalizeMargin({})).toBe('0')
  })

  // Test shorthand normalization edge cases
  test('should correctly normalize shorthand scenarios', () => {
    expect(normalizeMargin([16, 16, 16, 16])).toBe('1rem')
    expect(normalizeMargin([16, 32, 16, 32])).toBe('1rem 2rem')
    expect(normalizeMargin([16, 32, 48, 32])).toBe('1rem 2rem 3rem')
    expect(normalizeMargin([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })
})

```

## TYPESCRIPT: src/util/style/margin.ts

```typescript
import { convertToRem } from '../convert-to-rem/convert-to-rem'
import { normalizeDirectional } from '../normalize-directional'
import type { TMargin } from '../../type'

export const normalizeMargin = (margin: TMargin): string | number =>
  normalizeDirectional(margin, convertToRem)

```

## TYPESCRIPT: src/util/style/mask-clip.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMaskClip } from './mask-clip'

describe('normalizeMaskClip', () => {
  test('should return "content-box" for null or undefined', () => {
    expect(normalizeMaskClip(null as any)).toBe('content-box')
    expect(normalizeMaskClip(undefined as any)).toBe('content-box')
  })

  test('should return single keyword values as-is', () => {
    expect(normalizeMaskClip('content-box')).toBe('content-box')
    expect(normalizeMaskClip('padding-box')).toBe('padding-box')
    expect(normalizeMaskClip('no-clip')).toBe('no-clip')
  })

  test('should return non-standard values as-is', () => {
    expect(normalizeMaskClip('-webkit-mask-clip')).toBe('-webkit-mask-clip')
    expect(normalizeMaskClip('border')).toBe('border')
    expect(normalizeMaskClip('text')).toBe('text')
  })

  test('should handle multiple values', () => {
    expect(normalizeMaskClip(['padding-box', 'no-clip'])).toBe(
      'padding-box, no-clip'
    )
    expect(normalizeMaskClip(['view-box', 'fill-box', 'border-box'])).toBe(
      'view-box, fill-box, border-box'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaskClip('inherit')).toBe('inherit')
    expect(normalizeMaskClip('initial')).toBe('initial')
    expect(normalizeMaskClip('revert')).toBe('revert')
    expect(normalizeMaskClip('revert-layer')).toBe('revert-layer')
    expect(normalizeMaskClip('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})

```

## TYPESCRIPT: src/util/style/mask-clip.ts

```typescript
import type { TMaskClip } from '../../type'

export const normalizeMaskClip = (value: TMaskClip): string => {
  if (!value) {
    return 'content-box' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  return value
}

```

## TYPESCRIPT: src/util/style/mask.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMask } from './mask'

describe('normalizeMask', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeMask(null as any)).toBe('none')
    expect(normalizeMask(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeMask('url(mask.svg)')).toBe('url(mask.svg)')
    expect(normalizeMask('alpha')).toBe('alpha')
  })

  test('should handle objects with multiple properties', () => {
    expect(
      normalizeMask({
        mode: 'alpha',
        image: 'url(mask1.svg)',
        origin: 'content-box',
        repeat: 'no-repeat',
        size: 'contain',
        composite: 'add',
        type: 'alpha',
      })
    ).toBe('alpha url(mask1.svg) content-box no-repeat contain add alpha')

    expect(
      normalizeMask({
        image: 'url(mask1.svg)',
        size: '50%',
      })
    ).toBe('url(mask1.svg) 50%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMask('inherit')).toBe('inherit')
    expect(normalizeMask('initial')).toBe('initial')
    expect(normalizeMask('revert')).toBe('revert')
    expect(normalizeMask('revert-layer')).toBe('revert-layer')
    expect(normalizeMask('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeMask('')).toBe('none')
    expect(normalizeMask('invalid-value')).toBe('invalid-value')
  })
})

```

## TYPESCRIPT: src/util/style/mask.ts

```typescript
import type { TMask } from '../../type'

export const normalizeMask = (value: TMask): string => {
  if (!value) {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'object') {
    const {
      mode = '',
      image = '',
      origin = '',
      repeat = '',
      size = '',
      composite = '',
      type = '',
    } = value

    // Filter and combine valid properties
    return [mode, image, origin, repeat, size, composite, type]
      .filter((part) => !!part && typeof part === 'string')
      .join(' ')
  }

  return value as string
}

```

## TYPESCRIPT: src/util/style/math-style.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMathStyle } from './math-style'

describe('normalizeMathStyle', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeMathStyle(null as any)).toBe('normal')
    expect(normalizeMathStyle(undefined as any)).toBe('normal')
    expect(normalizeMathStyle('normal')).toBe('normal')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMathStyle('compact')).toBe('compact')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMathStyle('inherit')).toBe('inherit')
    expect(normalizeMathStyle('initial')).toBe('initial')
    expect(normalizeMathStyle('revert')).toBe('revert')
    expect(normalizeMathStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeMathStyle('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})

```

## TYPESCRIPT: src/util/style/math-style.ts

```typescript
import type { TMathStyle } from '../../type'

export const normalizeMathStyle = (value: TMathStyle): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/max-block-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMaxBlockSize } from './max-block-size'

describe('normalizeMaxBlockSize', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeMaxBlockSize(null as any)).toBe('none')
    expect(normalizeMaxBlockSize(undefined as any)).toBe('none')
    expect(normalizeMaxBlockSize('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMaxBlockSize('max-content')).toBe('max-content')
    expect(normalizeMaxBlockSize('min-content')).toBe('min-content')
    expect(normalizeMaxBlockSize('fit-content')).toBe('fit-content')
    expect(normalizeMaxBlockSize('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMaxBlockSize('300px')).toBe('18.75rem')
    expect(normalizeMaxBlockSize(300)).toBe('18.75rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMaxBlockSize('75%')).toBe('75%')
  })

  test('should handle custom functions as-is', () => {
    expect(
      normalizeMaxBlockSize('anchor-size(--myAnchor self-inline, 250px)')
    ).toBe('anchor-size(--myAnchor self-inline, 250px)')
    expect(normalizeMaxBlockSize('calc(anchor-size(width) / 2)')).toBe(
      'calc(anchor-size(width) / 2)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaxBlockSize('inherit')).toBe('inherit')
    expect(normalizeMaxBlockSize('initial')).toBe('initial')
    expect(normalizeMaxBlockSize('revert')).toBe('revert')
    expect(normalizeMaxBlockSize('revert-layer')).toBe('revert-layer')
    expect(normalizeMaxBlockSize('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})

```

## TYPESCRIPT: src/util/style/max-block-size.ts

```typescript
import type { TMaxBlockSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMaxBlockSize = (
  value: TMaxBlockSize
): string | number => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/max-height.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMaxHeight } from './max-height'

describe('normalizeMaxHeight', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeMaxHeight(null as any)).toBe('none')
    expect(normalizeMaxHeight(undefined as any)).toBe('none')
    expect(normalizeMaxHeight('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMaxHeight('max-content')).toBe('max-content')
    expect(normalizeMaxHeight('min-content')).toBe('min-content')
    expect(normalizeMaxHeight('fit-content')).toBe('fit-content')
    expect(normalizeMaxHeight('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeMaxHeight('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMaxHeight('3.5em')).toBe('3.5em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMaxHeight('75%')).toBe('75%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMaxHeight('anchor-size(height)')).toBe(
      'anchor-size(height)'
    )
    expect(
      normalizeMaxHeight(
        'calc(anchor-size(--myAnchor self-block, 250px) + 2em)'
      )
    ).toBe('calc(anchor-size(--myAnchor self-block, 250px) + 2em)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaxHeight('inherit')).toBe('inherit')
    expect(normalizeMaxHeight('initial')).toBe('initial')
    expect(normalizeMaxHeight('revert')).toBe('revert')
    expect(normalizeMaxHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeMaxHeight('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})

```

## TYPESCRIPT: src/util/style/max-height.ts

```typescript
import type { TMaxHeight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMaxHeight = (value: TMaxHeight): string | number => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/max-inline-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMaxInlineSize } from './max-inline-size'

describe('normalizeMaxInlineSize', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeMaxInlineSize(null as any)).toBe('none')
    expect(normalizeMaxInlineSize(undefined as any)).toBe('none')
    expect(normalizeMaxInlineSize('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMaxInlineSize('max-content')).toBe('max-content')
    expect(normalizeMaxInlineSize('min-content')).toBe('min-content')
    expect(normalizeMaxInlineSize('fit-content')).toBe('fit-content')
    expect(normalizeMaxInlineSize('fit-content(20em)')).toBe(
      'fit-content(20em)'
    )
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMaxInlineSize('300px')).toBe('18.75rem')
    expect(normalizeMaxInlineSize(300)).toBe('18.75rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMaxInlineSize('75%')).toBe('75%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMaxInlineSize('anchor-size(width)')).toBe(
      'anchor-size(width)'
    )
    expect(
      normalizeMaxInlineSize('anchor-size(--myAnchor self-block, 200px)')
    ).toBe('anchor-size(--myAnchor self-block, 200px)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaxInlineSize('inherit')).toBe('inherit')
    expect(normalizeMaxInlineSize('initial')).toBe('initial')
    expect(normalizeMaxInlineSize('revert')).toBe('revert')
    expect(normalizeMaxInlineSize('revert-layer')).toBe('revert-layer')
    expect(normalizeMaxInlineSize('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {})
})

```

## TYPESCRIPT: src/util/style/max-inline-size.ts

```typescript
import type { TMaxInlineSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMaxInlineSize = (
  value: TMaxInlineSize
): string | number => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/max-width.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMaxWidth } from './max-width'

describe('normalizeMaxWidth', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeMaxWidth(null as any)).toBe('none')
    expect(normalizeMaxWidth(undefined as any)).toBe('none')
    expect(normalizeMaxWidth('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMaxWidth('max-content')).toBe('max-content')
    expect(normalizeMaxWidth('min-content')).toBe('min-content')
    expect(normalizeMaxWidth('fit-content')).toBe('fit-content')
    expect(normalizeMaxWidth('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeMaxWidth('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMaxWidth('3.5em')).toBe('3.5em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMaxWidth('75%')).toBe('75%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMaxWidth('anchor-size(--myAnchor inline, 245px)')).toBe(
      'anchor-size(--myAnchor inline, 245px)'
    )
    expect(normalizeMaxWidth('calc(anchor-size(width) + 4em)')).toBe(
      'calc(anchor-size(width) + 4em)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMaxWidth('inherit')).toBe('inherit')
    expect(normalizeMaxWidth('initial')).toBe('initial')
    expect(normalizeMaxWidth('revert')).toBe('revert')
    expect(normalizeMaxWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeMaxWidth('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/max-width.ts

```typescript
import type { TMaxWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMaxWidth = (value: TMaxWidth): string | number => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/min-block-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMinBlockSize } from './min-block-size'

describe('normalizeMinBlockSize', () => {
  test('should return "min-content" for null or undefined', () => {
    expect(normalizeMinBlockSize(null as any)).toBe('min-content')
    expect(normalizeMinBlockSize(undefined as any)).toBe('min-content')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMinBlockSize('max-content')).toBe('max-content')
    expect(normalizeMinBlockSize('min-content')).toBe('min-content')
    expect(normalizeMinBlockSize('fit-content')).toBe('fit-content')
    expect(normalizeMinBlockSize('fit-content(20em)')).toBe('fit-content(20em)')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMinBlockSize('100px')).toBe('6.25rem')
    expect(normalizeMinBlockSize(100)).toBe('6.25rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMinBlockSize('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMinBlockSize('anchor-size(self-inline)')).toBe(
      'anchor-size(self-inline)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMinBlockSize('inherit')).toBe('inherit')
    expect(normalizeMinBlockSize('initial')).toBe('initial')
    expect(normalizeMinBlockSize('revert')).toBe('revert')
    expect(normalizeMinBlockSize('revert-layer')).toBe('revert-layer')
    expect(normalizeMinBlockSize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/min-block-size.ts

```typescript
import type { TMinBlockSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMinBlockSize = (
  value: TMinBlockSize
): string | number => {
  if (!value) {
    return 'min-content' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/min-height.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMinHeight } from './min-height'

describe('normalizeMinHeight', () => {
  test('should return "min-content" for null or undefined', () => {
    expect(normalizeMinHeight(null as any)).toBe('min-content')
    expect(normalizeMinHeight(undefined as any)).toBe('min-content')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMinHeight('max-content')).toBe('max-content')
    expect(normalizeMinHeight('min-content')).toBe('min-content')
    expect(normalizeMinHeight('fit-content')).toBe('fit-content')
    expect(normalizeMinHeight('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeMinHeight('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMinHeight('3.5em')).toBe('3.5em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMinHeight('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMinHeight('anchor-size(height)')).toBe(
      'anchor-size(height)'
    )
    expect(normalizeMinHeight('anchor-size(--myAnchor block, 200px)')).toBe(
      'anchor-size(--myAnchor block, 200px)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMinHeight('inherit')).toBe('inherit')
    expect(normalizeMinHeight('initial')).toBe('initial')
    expect(normalizeMinHeight('revert')).toBe('revert')
    expect(normalizeMinHeight('revert-layer')).toBe('revert-layer')
    expect(normalizeMinHeight('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/min-height.ts

```typescript
import type { TMinHeight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMinHeight = (value: TMinHeight): string | number => {
  if (!value) {
    return 'min-content' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/min-inline-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMinInlineSize } from './min-inline-size'

describe('normalizeMinInlineSize', () => {
  test('should return "min-content" for null or undefined', () => {
    expect(normalizeMinInlineSize(null as any)).toBe('min-content')
    expect(normalizeMinInlineSize(undefined as any)).toBe('min-content')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMinInlineSize('max-content')).toBe('max-content')
    expect(normalizeMinInlineSize('min-content')).toBe('min-content')
    expect(normalizeMinInlineSize('fit-content')).toBe('fit-content')
    expect(normalizeMinInlineSize('fit-content(20em)')).toBe(
      'fit-content(20em)'
    )
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMinInlineSize('100px')).toBe('6.25rem')
    expect(normalizeMinInlineSize(100)).toBe('6.25rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMinInlineSize('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMinInlineSize('anchor-size(width)')).toBe(
      'anchor-size(width)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMinInlineSize('inherit')).toBe('inherit')
    expect(normalizeMinInlineSize('initial')).toBe('initial')
    expect(normalizeMinInlineSize('revert')).toBe('revert')
    expect(normalizeMinInlineSize('revert-layer')).toBe('revert-layer')
    expect(normalizeMinInlineSize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/min-inline-size.ts

```typescript
import type { TMinInlineSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMinInlineSize = (
  value: TMinInlineSize
): string | number => {
  if (!value) {
    return 'min-content' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/min-width.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMinWidth } from './min-width'

describe('normalizeMinWidth', () => {
  test('should return "min-content" for null or undefined', () => {
    expect(normalizeMinWidth(null as any)).toBe('min-content')
    expect(normalizeMinWidth(undefined as any)).toBe('min-content')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMinWidth('max-content')).toBe('max-content')
    expect(normalizeMinWidth('min-content')).toBe('min-content')
    expect(normalizeMinWidth('fit-content')).toBe('fit-content')
    expect(normalizeMinWidth('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeMinWidth('stretch')).toBe('stretch')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeMinWidth('3.5em')).toBe('3.5em')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeMinWidth('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeMinWidth('anchor-size(width)')).toBe('anchor-size(width)')
    expect(normalizeMinWidth('anchor-size(--myAnchor self-inline, 200%)')).toBe(
      'anchor-size(--myAnchor self-inline, 200%)'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMinWidth('inherit')).toBe('inherit')
    expect(normalizeMinWidth('initial')).toBe('initial')
    expect(normalizeMinWidth('revert')).toBe('revert')
    expect(normalizeMinWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeMinWidth('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/min-width.ts

```typescript
import type { TMinWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMinWidth = (value: TMinWidth): string | number => {
  if (!value) {
    return 'min-content' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/mix-blend-mode.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeMixBlendMode } from './mix-blend-mode'

describe('normalizeMixBlendMode', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeMixBlendMode(null as any)).toBe('normal')
    expect(normalizeMixBlendMode(undefined as any)).toBe('normal')
    expect(normalizeMixBlendMode('normal')).toBe('normal')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeMixBlendMode('multiply')).toBe('multiply')
    expect(normalizeMixBlendMode('screen')).toBe('screen')
    expect(normalizeMixBlendMode('overlay')).toBe('overlay')
    expect(normalizeMixBlendMode('darken')).toBe('darken')
    expect(normalizeMixBlendMode('lighten')).toBe('lighten')
    expect(normalizeMixBlendMode('color-dodge')).toBe('color-dodge')
    expect(normalizeMixBlendMode('color-burn')).toBe('color-burn')
    expect(normalizeMixBlendMode('hard-light')).toBe('hard-light')
    expect(normalizeMixBlendMode('soft-light')).toBe('soft-light')
    expect(normalizeMixBlendMode('difference')).toBe('difference')
    expect(normalizeMixBlendMode('exclusion')).toBe('exclusion')
    expect(normalizeMixBlendMode('hue')).toBe('hue')
    expect(normalizeMixBlendMode('saturation')).toBe('saturation')
    expect(normalizeMixBlendMode('color')).toBe('color')
    expect(normalizeMixBlendMode('luminosity')).toBe('luminosity')
    expect(normalizeMixBlendMode('plus-darker')).toBe('plus-darker')
    expect(normalizeMixBlendMode('plus-lighter')).toBe('plus-lighter')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeMixBlendMode('inherit')).toBe('inherit')
    expect(normalizeMixBlendMode('initial')).toBe('initial')
    expect(normalizeMixBlendMode('revert')).toBe('revert')
    expect(normalizeMixBlendMode('revert-layer')).toBe('revert-layer')
    expect(normalizeMixBlendMode('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/mix-blend-mode.ts

```typescript
import type { TMixBlendMode } from '../../type'

export const normalizeMixBlendMode = (value: TMixBlendMode): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/object-fit.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeObjectFit } from './object-fit'

describe('normalizeObjectFit', () => {
  test('should return "fill" for null, undefined, or "fill"', () => {
    expect(normalizeObjectFit(null as any)).toBe('fill')
    expect(normalizeObjectFit(undefined as any)).toBe('fill')
    expect(normalizeObjectFit('fill')).toBe('fill')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeObjectFit('contain')).toBe('contain')
    expect(normalizeObjectFit('cover')).toBe('cover')
    expect(normalizeObjectFit('none')).toBe('none')
    expect(normalizeObjectFit('scale-down')).toBe('scale-down')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeObjectFit('inherit')).toBe('inherit')
    expect(normalizeObjectFit('initial')).toBe('initial')
    expect(normalizeObjectFit('revert')).toBe('revert')
    expect(normalizeObjectFit('revert-layer')).toBe('revert-layer')
    expect(normalizeObjectFit('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/object-fit.ts

```typescript
import type { TObjectFit } from '../../type'

export const normalizeObjectFit = (value: TObjectFit): string => {
  if (!value || value === 'fill') {
    return 'fill' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/object-position.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeObjectPosition } from './object-position'

describe('normalizeObjectPosition', () => {
  test('should return "center" for null, undefined, or "center"', () => {
    expect(normalizeObjectPosition(null as any)).toBe('center')
    expect(normalizeObjectPosition(undefined as any)).toBe('center')
    expect(normalizeObjectPosition('center')).toBe('center')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeObjectPosition('top')).toBe('top')
    expect(normalizeObjectPosition('bottom')).toBe('bottom')
    expect(normalizeObjectPosition('left')).toBe('left')
    expect(normalizeObjectPosition('right')).toBe('right')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeObjectPosition('25% 75%')).toBe('25% 75%')
  })

  test('should handle length values as-is', () => {
    expect(normalizeObjectPosition('0 0')).toBe('0 0')
    expect(normalizeObjectPosition('1cm 2cm')).toBe('1cm 2cm')
    expect(normalizeObjectPosition('10ch 8em')).toBe('10ch 8em')
  })

  test('should handle edge offset values as-is', () => {
    expect(normalizeObjectPosition('bottom 10px right 20px')).toBe(
      'bottom 10px right 20px'
    )
    expect(normalizeObjectPosition('right 3em bottom 10px')).toBe(
      'right 3em bottom 10px'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeObjectPosition('inherit')).toBe('inherit')
    expect(normalizeObjectPosition('initial')).toBe('initial')
    expect(normalizeObjectPosition('revert')).toBe('revert')
    expect(normalizeObjectPosition('revert-layer')).toBe('revert-layer')
    expect(normalizeObjectPosition('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/object-position.ts

```typescript
import type { TObjectPosition } from '../../type'

export const normalizeObjectPosition = (value: TObjectPosition): string => {
  if (!value || value === 'center') {
    return 'center' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/offset-anchor.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOffsetAnchor } from './offset-anchor'

describe('normalizeOffsetAnchor', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeOffsetAnchor(null as any)).toBe('auto')
    expect(normalizeOffsetAnchor(undefined as any)).toBe('auto')
    expect(normalizeOffsetAnchor('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeOffsetAnchor('top')).toBe('top')
    expect(normalizeOffsetAnchor('bottom')).toBe('bottom')
    expect(normalizeOffsetAnchor('left')).toBe('left')
    expect(normalizeOffsetAnchor('right')).toBe('right')
    expect(normalizeOffsetAnchor('center')).toBe('center')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeOffsetAnchor('25% 75%')).toBe('25% 75%')
  })

  test('should handle length values as-is', () => {
    expect(normalizeOffsetAnchor('0 0')).toBe('0 0')
    expect(normalizeOffsetAnchor('1cm 2cm')).toBe('1cm 2cm')
    expect(normalizeOffsetAnchor('10ch 8em')).toBe('10ch 8em')
  })

  test('should handle edge offset values as-is', () => {
    expect(normalizeOffsetAnchor('bottom 10px right 20px')).toBe(
      'bottom 10px right 20px'
    )
    expect(normalizeOffsetAnchor('right 3em bottom 10px')).toBe(
      'right 3em bottom 10px'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOffsetAnchor('inherit')).toBe('inherit')
    expect(normalizeOffsetAnchor('initial')).toBe('initial')
    expect(normalizeOffsetAnchor('revert')).toBe('revert')
    expect(normalizeOffsetAnchor('revert-layer')).toBe('revert-layer')
    expect(normalizeOffsetAnchor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/offset-anchor.ts

```typescript
import type { TOffsetAnchor } from '../../type'

export const normalizeOffsetAnchor = (value: TOffsetAnchor): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/offset.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOffset } from './offset'

describe('normalizeOffset', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeOffset(null as any)).toBe('none')
    expect(normalizeOffset(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeOffset('url(#myCircle)')).toBe('url(#myCircle)')
    expect(normalizeOffset('ray(45deg)')).toBe('ray(45deg)')
  })

  test('should handle objects with multiple properties', () => {
    expect(
      normalizeOffset({
        path: 'ray(45deg)',
        distance: '50%',
        rotate: 'auto 45deg',
      })
    ).toBe('ray(45deg) 50% auto 45deg')

    expect(
      normalizeOffset({
        path: 'circle(50% at 25% 25%)',
        rotate: 'reverse',
      })
    ).toBe('circle(50% at 25% 25%) reverse')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOffset('inherit')).toBe('inherit')
    expect(normalizeOffset('initial')).toBe('initial')
    expect(normalizeOffset('revert')).toBe('revert')
    expect(normalizeOffset('revert-layer')).toBe('revert-layer')
    expect(normalizeOffset('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeOffset('')).toBe('none')
    expect(normalizeOffset('invalid-value')).toBe('invalid-value')
  })
})

```

## TYPESCRIPT: src/util/style/offset.ts

```typescript
import type { TOffset } from '../../type'

export const normalizeOffset = (value: TOffset): string => {
  if (!value) {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    // Filter out empty or undefined values
    return value.filter((item) => !!item).join(' ')
  }

  if (typeof value === 'object') {
    const { path = '', distance = '', rotate = '' } = value
    return [path, distance, rotate].filter(Boolean).join(' ')
  }

  return value as string
}

```

## TYPESCRIPT: src/util/style/opacity.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOpacity } from './opacity'

describe('normalizeOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeOpacity(null as any)).toBe('1')
    expect(normalizeOpacity(undefined as any)).toBe('1')
  })

  test('should handle numeric values as-is', () => {
    expect(normalizeOpacity(0.9)).toBe(0.9)
    expect(normalizeOpacity(1)).toBe(1)
    expect(normalizeOpacity(0)).toBe(0)
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeOpacity('90%')).toBe('90%')
    expect(normalizeOpacity('100%')).toBe('100%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOpacity('inherit')).toBe('inherit')
    expect(normalizeOpacity('initial')).toBe('initial')
    expect(normalizeOpacity('revert')).toBe('revert')
    expect(normalizeOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeOpacity('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/opacity.ts

```typescript
import type { TOpacity } from '../../type'

export const normalizeOpacity = (value: TOpacity): string | number => {
  if (!value && value !== 0) {
    return '1' // Default value (fully opaque)
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/order.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOrder } from './order'

describe('normalizeOrder', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeOrder(null as any)).toBe('0')
    expect(normalizeOrder(undefined as any)).toBe('0')
  })

  test('should handle integer values as-is', () => {
    expect(normalizeOrder(5)).toBe(5)
    expect(normalizeOrder(-5)).toBe(-5)
    expect(normalizeOrder(0)).toBe(0)
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOrder('inherit')).toBe('inherit')
    expect(normalizeOrder('initial')).toBe('initial')
    expect(normalizeOrder('revert')).toBe('revert')
    expect(normalizeOrder('revert-layer')).toBe('revert-layer')
    expect(normalizeOrder('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/order.ts

```typescript
import type { TOrder } from '../../type'

export const normalizeOrder = (value: TOrder): string | number => {
  if (value === undefined || value === null) {
    return '0' // Default value
  }

  if (typeof value === 'number') {
    return value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/outline-offset.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOutlineOffset } from './outline-offset'

describe('normalizeOutlineOffset', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeOutlineOffset(null as any)).toBe('0')
    expect(normalizeOutlineOffset(undefined as any)).toBe('0')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeOutlineOffset('3px')).toBe('0.1875rem')
  })

  test('should handle em values as-is', () => {
    expect(normalizeOutlineOffset('0.2em')).toBe('0.2em')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOutlineOffset('inherit')).toBe('inherit')
    expect(normalizeOutlineOffset('initial')).toBe('initial')
    expect(normalizeOutlineOffset('revert')).toBe('revert')
    expect(normalizeOutlineOffset('revert-layer')).toBe('revert-layer')
    expect(normalizeOutlineOffset('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/outline-offset.ts

```typescript
import type { TOutlineOffset } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeOutlineOffset = (
  value: TOutlineOffset
): string | number => {
  if (!value) {
    return '0' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/outline.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOutline } from './outline'

describe('normalizeOutline', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeOutline(null as any)).toBe('none')
    expect(normalizeOutline(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeOutline('1px solid blue')).toBe('1px solid blue')
  })

  test('should handle objects with multiple properties', () => {
    expect(
      normalizeOutline({
        color: '#f92525',
        style: 'solid',
        width: '1px',
      })
    ).toBe('#f92525 solid 1px')

    expect(
      normalizeOutline({
        color: 'rgb(30 222 121)',
        style: 'dashed',
      })
    ).toBe('rgb(30 222 121) dashed')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOutline('inherit')).toBe('inherit')
    expect(normalizeOutline('initial')).toBe('initial')
    expect(normalizeOutline('revert')).toBe('revert')
    expect(normalizeOutline('revert-layer')).toBe('revert-layer')
    expect(normalizeOutline('unset')).toBe('unset')
  })

  test('should handle edge cases gracefully', () => {
    expect(normalizeOutline('')).toBe('none')
    expect(normalizeOutline('invalid-value')).toBe('invalid-value')
  })
})

```

## TYPESCRIPT: src/util/style/outline.ts

```typescript
import type { TOutline } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeOutline = (value: TOutline): string => {
  if (!value) {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    return value.filter((item) => !!item).join(' ')
  }

  if (typeof value === 'object') {
    const { color = '', style = '', width = '' } = value
    return [
      color,
      style,
      typeof width === 'number' ? convertToRem(width) : width,
    ]
      .filter(Boolean)
      .join(' ')
  }

  return value as string
}

```

## TYPESCRIPT: src/util/style/overflow.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOverflow } from './overflow'

describe('normalizeOverflow', () => {
  test('should return "visible" for null or undefined', () => {
    expect(normalizeOverflow(null as any)).toBe('visible')
    expect(normalizeOverflow(undefined as any)).toBe('visible')
  })

  test('should return string values as-is', () => {
    expect(normalizeOverflow('hidden')).toBe('hidden')
    expect(normalizeOverflow('hidden visible')).toBe('hidden visible')
  })

  test('should handle object format for x and y', () => {
    expect(normalizeOverflow({ x: 'hidden', y: 'hidden' })).toBe('hidden')
    expect(normalizeOverflow({ x: 'hidden', y: 'visible' })).toBe(
      'hidden visible'
    )
    expect(normalizeOverflow({ x: 'scroll' })).toBe('scroll visible')
    expect(normalizeOverflow({ y: 'auto' })).toBe('visible auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOverflow('inherit')).toBe('inherit')
    expect(normalizeOverflow('initial')).toBe('initial')
    expect(normalizeOverflow('revert')).toBe('revert')
    expect(normalizeOverflow('revert-layer')).toBe('revert-layer')
    expect(normalizeOverflow('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/overflow.ts

```typescript
import type { TOverflow } from '../../type'

export const normalizeOverflow = (value: TOverflow): string => {
  if (!value) {
    return 'visible' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'object' && !Array.isArray(value)) {
    const { x = 'visible', y = 'visible' } = value
    return x === y ? x : `${x} ${y}`
  }

  return String(value)
}

```

## TYPESCRIPT: src/util/style/overscroll-behavior-block.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOverscrollBehaviorBlock } from './overscroll-behavior-block'

describe('normalizeOverscrollBehaviorBlock', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeOverscrollBehaviorBlock(null as any)).toBe('auto')
    expect(normalizeOverscrollBehaviorBlock(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeOverscrollBehaviorBlock('auto')).toBe('auto')
    expect(normalizeOverscrollBehaviorBlock('contain')).toBe('contain')
    expect(normalizeOverscrollBehaviorBlock('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOverscrollBehaviorBlock('inherit')).toBe('inherit')
    expect(normalizeOverscrollBehaviorBlock('initial')).toBe('initial')
    expect(normalizeOverscrollBehaviorBlock('revert')).toBe('revert')
    expect(normalizeOverscrollBehaviorBlock('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeOverscrollBehaviorBlock('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/overscroll-behavior-block.ts

```typescript
import type { TOverscrollBehaviorBlock } from '../../type'

export const normalizeOverscrollBehaviorBlock = (
  value: TOverscrollBehaviorBlock
): string => {
  if (!value) {
    return 'auto' // Default value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/overscroll-behavior-inline.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOverscrollBehaviorInline } from './overscroll-behavior-inline'

describe('normalizeOverscrollBehaviorInline', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeOverscrollBehaviorInline(null as any)).toBe('auto')
    expect(normalizeOverscrollBehaviorInline(undefined as any)).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeOverscrollBehaviorInline('auto')).toBe('auto')
    expect(normalizeOverscrollBehaviorInline('contain')).toBe('contain')
    expect(normalizeOverscrollBehaviorInline('none')).toBe('none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOverscrollBehaviorInline('inherit')).toBe('inherit')
    expect(normalizeOverscrollBehaviorInline('initial')).toBe('initial')
    expect(normalizeOverscrollBehaviorInline('revert')).toBe('revert')
    expect(normalizeOverscrollBehaviorInline('revert-layer')).toBe(
      'revert-layer'
    )
    expect(normalizeOverscrollBehaviorInline('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/overscroll-behavior-inline.ts

```typescript
import type { TOverscrollBehaviorInline } from '../../type'

export const normalizeOverscrollBehaviorInline = (
  value: TOverscrollBehaviorInline
): string => {
  if (!value) {
    return 'auto' // Default value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/overscroll-behavior.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeOverscrollBehavior } from './overscroll-behavior'

describe('normalizeOverscrollBehavior', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeOverscrollBehavior(null as any)).toBe('auto')
    expect(normalizeOverscrollBehavior(undefined as any)).toBe('auto')
  })

  test('should return string values as-is', () => {
    expect(normalizeOverscrollBehavior('auto')).toBe('auto')
    expect(normalizeOverscrollBehavior('auto contain')).toBe('auto contain')
  })

  test('should handle object format for x and y', () => {
    expect(normalizeOverscrollBehavior({ x: 'contain', y: 'contain' })).toBe(
      'contain'
    )
    expect(normalizeOverscrollBehavior({ x: 'auto', y: 'none' })).toBe(
      'auto none'
    )
    expect(normalizeOverscrollBehavior({ x: 'contain' })).toBe('contain auto')
    expect(normalizeOverscrollBehavior({ y: 'none' })).toBe('auto none')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeOverscrollBehavior('inherit')).toBe('inherit')
    expect(normalizeOverscrollBehavior('initial')).toBe('initial')
    expect(normalizeOverscrollBehavior('revert')).toBe('revert')
    expect(normalizeOverscrollBehavior('revert-layer')).toBe('revert-layer')
    expect(normalizeOverscrollBehavior('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/overscroll-behavior.ts

```typescript
import type { TOverscrollBehavior } from '../../type'

export const normalizeOverscrollBehavior = (
  value: TOverscrollBehavior
): string => {
  if (!value) {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'object' && !Array.isArray(value)) {
    const { x = 'auto', y = 'auto' } = value
    return x === y ? x : `${x} ${y}`
  }

  return String(value)
}

```

## TYPESCRIPT: src/util/style/padding.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizePadding } from './padding'

describe('normalizePadding', () => {
  // Test special CSS values
  test('should return special CSS values as-is', () => {
    expect(normalizePadding('inherit')).toBe('inherit')
    expect(normalizePadding('initial')).toBe('initial')
    expect(normalizePadding('revert')).toBe('revert')
    expect(normalizePadding('revert-layer')).toBe('revert-layer')
    expect(normalizePadding('unset')).toBe('unset')
  })

  // Test string inputs
  test('should return the string value as-is when passed a string', () => {
    expect(normalizePadding('12px')).toBe('0.75rem')
    expect(normalizePadding('1rem')).toBe('1rem')
    expect(normalizePadding('0')).toBe('0')
  })

  // Test single number input
  test('should convert a single numeric value to rem', () => {
    expect(normalizePadding(16)).toBe('1rem')
    expect(normalizePadding(0)).toBe('0')
    expect(normalizePadding(32)).toBe('2rem')
  })

  // Test array inputs
  test('should normalize an array and convert numbers to rem', () => {
    expect(normalizePadding([16])).toBe('1rem')
    expect(normalizePadding([16, 32])).toBe('1rem 2rem')
    expect(normalizePadding([16, 32, 48])).toBe('1rem 2rem 3rem')
    expect(normalizePadding([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
    expect(normalizePadding(['10px', 16, '1rem', 32])).toBe(
      '0.625rem 1rem 1rem 2rem',
    )
  })

  // Test object inputs
  test('should normalize an object and convert values to rem', () => {
    expect(normalizePadding({ top: 16 })).toBe('1rem 0 0')
    expect(normalizePadding({ top: 16, right: 32 })).toBe('1rem 2rem 0 0')
    expect(normalizePadding({ top: 16, right: 32, bottom: 48 })).toBe(
      '1rem 2rem 3rem 0',
    )
    expect(
      normalizePadding({ top: '10px', right: 16, bottom: '1rem', left: 32 }),
    ).toBe('0.625rem 1rem 1rem 2rem')
    expect(normalizePadding({})).toBe('0')
  })

  // Test mixed inputs
  test('should handle mixed units correctly', () => {
    expect(normalizePadding([16, 'revert', 48, 'inherit'])).toBe(
      '1rem revert 3rem inherit',
    )
    expect(
      normalizePadding({
        top: 'inherit',
        right: 'revert-layer',
        bottom: 48,
        left: '10px',
      }),
    ).toBe('inherit revert-layer 3rem 0.625rem')
  })

  // Test edge cases for special CSS values
  test('should handle special CSS values with arrays and objects', () => {
    expect(normalizePadding(['inherit', 'initial', 'unset', 'revert'])).toBe(
      'inherit initial unset revert',
    )
    expect(
      normalizePadding({
        top: 'revert',
        right: 'revert-layer',
        bottom: 'unset',
        left: 'initial',
      }),
    ).toBe('revert revert-layer unset initial')
  })

  // Test empty and invalid inputs
  test('should handle empty or invalid inputs', () => {
    expect(normalizePadding([])).toBe('0')
    expect(normalizePadding({})).toBe('0')
    expect(normalizePadding(null as any)).toBe('0')
    expect(normalizePadding(false as any)).toBe('0')
    expect(normalizePadding(true as any)).toBe('0')
    expect(normalizePadding(undefined as any)).toBe('0')
  })

  // Test shorthand normalization edge cases
  test('should correctly normalize shorthand scenarios', () => {
    expect(normalizePadding([16, 16, 16, 16])).toBe('1rem')
    expect(normalizePadding([16, 32, 16, 32])).toBe('1rem 2rem')
    expect(normalizePadding([16, 32, 48, 32])).toBe('1rem 2rem 3rem')
    expect(normalizePadding([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })
})

```

## TYPESCRIPT: src/util/style/padding.ts

```typescript
import { convertToRem } from '../convert-to-rem/convert-to-rem'
import { normalizeDirectional } from '../normalize-directional'
import type { TPadding } from '../../type'

export const normalizePadding = (padding: TPadding): string | number => {
  return normalizeDirectional(padding, convertToRem)
}

```

## TYPESCRIPT: src/util/style/perspective-origin.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizePerspectiveOrigin } from './perspective-origin'

describe('normalizePerspectiveOrigin', () => {
  test('should return "center" for null, undefined, or "center"', () => {
    expect(normalizePerspectiveOrigin(null as any)).toBe('center')
    expect(normalizePerspectiveOrigin(undefined as any)).toBe('center')
    expect(normalizePerspectiveOrigin('center')).toBe('center')
  })

  test('should return single keyword values as-is', () => {
    expect(normalizePerspectiveOrigin('top')).toBe('top')
    expect(normalizePerspectiveOrigin('bottom')).toBe('bottom')
    expect(normalizePerspectiveOrigin('left')).toBe('left')
    expect(normalizePerspectiveOrigin('right')).toBe('right')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizePerspectiveOrigin('25%')).toBe('25%')
  })

  test('should handle length values as-is', () => {
    expect(normalizePerspectiveOrigin('10px')).toBe('10px')
    expect(normalizePerspectiveOrigin('3.5em')).toBe('3.5em')
  })

  test('should handle two-value syntax', () => {
    expect(normalizePerspectiveOrigin('top left')).toBe('top left')
    expect(normalizePerspectiveOrigin('bottom 25%')).toBe('bottom 25%')
    expect(normalizePerspectiveOrigin('10% right')).toBe('10% right')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePerspectiveOrigin('inherit')).toBe('inherit')
    expect(normalizePerspectiveOrigin('initial')).toBe('initial')
    expect(normalizePerspectiveOrigin('revert')).toBe('revert')
    expect(normalizePerspectiveOrigin('revert-layer')).toBe('revert-layer')
    expect(normalizePerspectiveOrigin('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/perspective-origin.ts

```typescript
import type { TPerspectiveOrigin } from '../../type'

export const normalizePerspectiveOrigin = (
  value: TPerspectiveOrigin
): string => {
  if (!value || value === 'center') {
    return 'center' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/perspective.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizePerspective } from './perspective'

describe('normalizePerspective', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizePerspective(null as any)).toBe('none')
    expect(normalizePerspective(undefined as any)).toBe('none')
    expect(normalizePerspective('none')).toBe('none')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizePerspective('20px')).toBe('1.25rem')
  })

  test('should handle em values as-is', () => {
    expect(normalizePerspective('3.5em')).toBe('3.5em')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePerspective('inherit')).toBe('inherit')
    expect(normalizePerspective('initial')).toBe('initial')
    expect(normalizePerspective('revert')).toBe('revert')
    expect(normalizePerspective('revert-layer')).toBe('revert-layer')
    expect(normalizePerspective('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/perspective.ts

```typescript
import type { TPerspective } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizePerspective = (value: TPerspective): string | number => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/place-content.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizePlaceContent } from './place-content'

describe('normalizePlaceContent', () => {
  test('should return "stretch" for null, undefined, or "stretch"', () => {
    expect(normalizePlaceContent(null as any)).toBe('stretch')
    expect(normalizePlaceContent(undefined as any)).toBe('stretch')
    expect(normalizePlaceContent('stretch')).toBe('stretch')
  })

  test('should return single alignment values as-is', () => {
    expect(normalizePlaceContent('center')).toBe('center')
    expect(normalizePlaceContent('start')).toBe('start')
    expect(normalizePlaceContent('flex-end')).toBe('flex-end')
    expect(normalizePlaceContent('baseline')).toBe('baseline')
    expect(normalizePlaceContent('space-between')).toBe('space-between')
  })

  test('should handle two-value alignment syntax', () => {
    expect(normalizePlaceContent('center start')).toBe('center start')
    expect(normalizePlaceContent('flex-end center')).toBe('flex-end center')
    expect(normalizePlaceContent('space-around space-evenly')).toBe(
      'space-around space-evenly'
    )
    expect(normalizePlaceContent('stretch space-evenly')).toBe(
      'stretch space-evenly'
    )
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePlaceContent('inherit')).toBe('inherit')
    expect(normalizePlaceContent('initial')).toBe('initial')
    expect(normalizePlaceContent('revert')).toBe('revert')
    expect(normalizePlaceContent('revert-layer')).toBe('revert-layer')
    expect(normalizePlaceContent('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/place-content.ts

```typescript
import type { TPlaceContent } from '../../type'

export const normalizePlaceContent = (value: TPlaceContent): string => {
  if (!value || value === 'stretch') {
    return 'stretch' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/place-items.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizePlaceItems } from './place-items'

describe('normalizePlaceItems', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizePlaceItems(null as any)).toBe('normal')
    expect(normalizePlaceItems(undefined as any)).toBe('normal')
    expect(normalizePlaceItems('normal')).toBe('normal')
  })

  test('should return single alignment values as-is', () => {
    expect(normalizePlaceItems('center')).toBe('center')
    expect(normalizePlaceItems('start')).toBe('start')
    expect(normalizePlaceItems('flex-end')).toBe('flex-end')
    expect(normalizePlaceItems('baseline')).toBe('baseline')
  })

  test('should handle two-value alignment syntax', () => {
    expect(normalizePlaceItems('normal start')).toBe('normal start')
    expect(normalizePlaceItems('center normal')).toBe('center normal')
    expect(normalizePlaceItems('stretch legacy')).toBe('stretch legacy')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePlaceItems('inherit')).toBe('inherit')
    expect(normalizePlaceItems('initial')).toBe('initial')
    expect(normalizePlaceItems('revert')).toBe('revert')
    expect(normalizePlaceItems('revert-layer')).toBe('revert-layer')
    expect(normalizePlaceItems('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/place-items.ts

```typescript
import type { TPlaceItems } from '../../type'

export const normalizePlaceItems = (value: TPlaceItems): string => {
  if (!value || value === 'normal') {
    return 'normal' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/place-self.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizePlaceSelf } from './place-self'

describe('normalizePlaceSelf', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizePlaceSelf(null as any)).toBe('auto')
    expect(normalizePlaceSelf(undefined as any)).toBe('auto')
    expect(normalizePlaceSelf('auto')).toBe('auto')
  })

  test('should return single alignment values as-is', () => {
    expect(normalizePlaceSelf('center')).toBe('center')
    expect(normalizePlaceSelf('start')).toBe('start')
    expect(normalizePlaceSelf('flex-end')).toBe('flex-end')
    expect(normalizePlaceSelf('baseline')).toBe('baseline')
  })

  test('should handle two-value alignment syntax', () => {
    expect(normalizePlaceSelf('auto center')).toBe('auto center')
    expect(normalizePlaceSelf('normal start')).toBe('normal start')
    expect(normalizePlaceSelf('center normal')).toBe('center normal')
    expect(normalizePlaceSelf('stretch auto')).toBe('stretch auto')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePlaceSelf('inherit')).toBe('inherit')
    expect(normalizePlaceSelf('initial')).toBe('initial')
    expect(normalizePlaceSelf('revert')).toBe('revert')
    expect(normalizePlaceSelf('revert-layer')).toBe('revert-layer')
    expect(normalizePlaceSelf('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/place-self.ts

```typescript
import type { TPlaceSelf } from '../../type'

export const normalizePlaceSelf = (value: TPlaceSelf): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/pointer-events.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizePointerEvents } from './pointer-events'

describe('normalizePointerEvents', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizePointerEvents(null as any)).toBe('auto')
    expect(normalizePointerEvents(undefined as any)).toBe('auto')
    expect(normalizePointerEvents('auto')).toBe('auto')
  })

  test('should return keyword values as-is', () => {
    expect(normalizePointerEvents('none')).toBe('none')
    expect(normalizePointerEvents('painted')).toBe('painted')
    expect(normalizePointerEvents('bounding-box')).toBe('bounding-box')
    expect(normalizePointerEvents('all')).toBe('all')
  })

  test('should return SVG-specific values as-is', () => {
    expect(normalizePointerEvents('visiblePainted')).toBe('visiblePainted')
    expect(normalizePointerEvents('visibleFill')).toBe('visibleFill')
    expect(normalizePointerEvents('visibleStroke')).toBe('visibleStroke')
    expect(normalizePointerEvents('visible')).toBe('visible')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePointerEvents('inherit')).toBe('inherit')
    expect(normalizePointerEvents('initial')).toBe('initial')
    expect(normalizePointerEvents('revert')).toBe('revert')
    expect(normalizePointerEvents('revert-layer')).toBe('revert-layer')
    expect(normalizePointerEvents('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/pointer-events.ts

```typescript
import type { TPointerEvents } from '../../type'

export const normalizePointerEvents = (value: TPointerEvents): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/position.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizePosition } from './position'

describe('normalizePosition', () => {
  test('should return "static" for null, undefined, or "static"', () => {
    expect(normalizePosition(null as any)).toBe('static')
    expect(normalizePosition(undefined as any)).toBe('static')
    expect(normalizePosition('static')).toBe('static')
  })

  test('should return positional keyword values as-is', () => {
    expect(normalizePosition('relative')).toBe('relative')
    expect(normalizePosition('absolute')).toBe('absolute')
    expect(normalizePosition('fixed')).toBe('fixed')
    expect(normalizePosition('sticky')).toBe('sticky')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizePosition('inherit')).toBe('inherit')
    expect(normalizePosition('initial')).toBe('initial')
    expect(normalizePosition('revert')).toBe('revert')
    expect(normalizePosition('revert-layer')).toBe('revert-layer')
    expect(normalizePosition('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/position.ts

```typescript
import type { TPosition } from '../../type'

export const normalizePosition = (value: TPosition): string => {
  if (!value || value === 'static') {
    return 'static' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/quotes.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeQuotes } from './quotes'

describe('normalizeQuotes', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeQuotes(null as any)).toBe('auto')
    expect(normalizeQuotes(undefined as any)).toBe('auto')
    expect(normalizeQuotes('auto')).toBe('auto')
  })

  test('should return "none" as-is', () => {
    expect(normalizeQuotes('none')).toBe('none')
  })

  test('should handle single level of quotation marks', () => {
    expect(normalizeQuotes('"«" "»"')).toBe('"«" "»"')
  })

  test('should handle two levels of quotation marks', () => {
    expect(normalizeQuotes('"«" "»" "‹" "›"')).toBe('"«" "»" "‹" "›"')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeQuotes('inherit')).toBe('inherit')
    expect(normalizeQuotes('initial')).toBe('initial')
    expect(normalizeQuotes('revert')).toBe('revert')
    expect(normalizeQuotes('revert-layer')).toBe('revert-layer')
    expect(normalizeQuotes('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/quotes.ts

```typescript
import type { TQuotes } from '../../type'

export const normalizeQuotes = (value: TQuotes): string => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/resize.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeResize } from './resize'

describe('normalizeResize', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeResize(null as any)).toBe('none')
    expect(normalizeResize(undefined as any)).toBe('none')
    expect(normalizeResize('none')).toBe('none')
  })

  test('should return keyword values as-is', () => {
    expect(normalizeResize('both')).toBe('both')
    expect(normalizeResize('horizontal')).toBe('horizontal')
    expect(normalizeResize('vertical')).toBe('vertical')
    expect(normalizeResize('block')).toBe('block')
    expect(normalizeResize('inline')).toBe('inline')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeResize('inherit')).toBe('inherit')
    expect(normalizeResize('initial')).toBe('initial')
    expect(normalizeResize('revert')).toBe('revert')
    expect(normalizeResize('revert-layer')).toBe('revert-layer')
    expect(normalizeResize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/resize.ts

```typescript
import type { TResize } from '../../type'

export const normalizeResize = (value: TResize): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/right.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeRight } from './right'

describe('normalizeRight', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeRight(null as any)).toBe('auto')
    expect(normalizeRight(undefined as any)).toBe('auto')
    expect(normalizeRight('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeRight('3px')).toBe('0.1875rem')
    expect(normalizeRight(3)).toBe('0.1875rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeRight('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeRight('calc(anchor(--myAnchor 50%) + 5px)')).toBe(
      'calc(anchor(--myAnchor 50%) + 5px)'
    )
    expect(normalizeRight('anchor-size(width)')).toBe('anchor-size(width)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeRight('inherit')).toBe('inherit')
    expect(normalizeRight('initial')).toBe('initial')
    expect(normalizeRight('revert')).toBe('revert')
    expect(normalizeRight('revert-layer')).toBe('revert-layer')
    expect(normalizeRight('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/right.ts

```typescript
import type { TRight } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeRight = (value: TRight): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/rotate.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeRotate } from './rotate'

describe('normalizeRotate', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeRotate(null as any)).toBe('none')
    expect(normalizeRotate(undefined as any)).toBe('none')
    expect(normalizeRotate('none')).toBe('none')
  })

  test('should return angle values as-is', () => {
    expect(normalizeRotate('90deg')).toBe('90deg')
    expect(normalizeRotate('0.25turn')).toBe('0.25turn')
    expect(normalizeRotate('1.57rad')).toBe('1.57rad')
  })

  test('should handle axis plus angle syntax', () => {
    expect(normalizeRotate('x 90deg')).toBe('x 90deg')
    expect(normalizeRotate('y 0.25turn')).toBe('y 0.25turn')
    expect(normalizeRotate('z 1.57rad')).toBe('z 1.57rad')
  })

  test('should handle vector plus angle syntax', () => {
    expect(normalizeRotate('1 1 1 90deg')).toBe('1 1 1 90deg')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeRotate('inherit')).toBe('inherit')
    expect(normalizeRotate('initial')).toBe('initial')
    expect(normalizeRotate('revert')).toBe('revert')
    expect(normalizeRotate('revert-layer')).toBe('revert-layer')
    expect(normalizeRotate('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/rotate.ts

```typescript
import type { TRotate } from '../../type'

export const normalizeRotate = (value: TRotate): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/ruby-align.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeRubyAlign } from './ruby-align'

describe('normalizeRubyAlign', () => {
  test('should return valid ruby-align values as-is', () => {
    expect(normalizeRubyAlign('start')).toBe('start')
    expect(normalizeRubyAlign('center')).toBe('center')
    expect(normalizeRubyAlign('space-between')).toBe('space-between')
    expect(normalizeRubyAlign('space-around')).toBe('space-around')
    expect(normalizeRubyAlign('inherit')).toBe('inherit')
    expect(normalizeRubyAlign('initial')).toBe('initial')
    expect(normalizeRubyAlign('revert')).toBe('revert')
    expect(normalizeRubyAlign('revert-layer')).toBe('revert-layer')
    expect(normalizeRubyAlign('unset')).toBe('unset')
  })

  test('should return null for invalid ruby-align values', () => {
    expect(normalizeRubyAlign('')).toBe('initial')
    expect(normalizeRubyAlign(null as any)).toBe('initial')
    expect(normalizeRubyAlign(undefined as any)).toBe('initial')
  })
})

```

## TYPESCRIPT: src/util/style/ruby-align.ts

```typescript
import type { TRubyAlign } from '../../type'

export const normalizeRubyAlign = (value: string): TRubyAlign => {
  const validValues: TRubyAlign[] = [
    'start',
    'center',
    'space-between',
    'space-around',
    'inherit',
    'initial',
    'revert',
    'revert-layer',
    'unset',
  ]

  return validValues.includes(value as TRubyAlign)
    ? (value as TRubyAlign)
    : 'initial' // Default to 'initial' for invalid values
}

```

## TYPESCRIPT: src/util/style/ruby-position.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeRubyPosition } from './ruby-position'

describe('normalizeRubyPosition', () => {
  test('should return "over" for null, undefined, or "over"', () => {
    expect(normalizeRubyPosition(null as any)).toBe('over')
    expect(normalizeRubyPosition(undefined as any)).toBe('over')
    expect(normalizeRubyPosition('over')).toBe('over')
  })

  test('should return valid ruby-position keyword values as-is', () => {
    expect(normalizeRubyPosition('under')).toBe('under')
    expect(normalizeRubyPosition('alternate')).toBe('alternate')
    expect(normalizeRubyPosition('alternate over')).toBe('alternate over')
    expect(normalizeRubyPosition('alternate under')).toBe('alternate under')
    expect(normalizeRubyPosition('inter-character')).toBe('inter-character')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeRubyPosition('inherit')).toBe('inherit')
    expect(normalizeRubyPosition('initial')).toBe('initial')
    expect(normalizeRubyPosition('revert')).toBe('revert')
    expect(normalizeRubyPosition('revert-layer')).toBe('revert-layer')
    expect(normalizeRubyPosition('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/ruby-position.ts

```typescript
import type { TRubyPosition } from '../../type'

export const normalizeRubyPosition = (value: TRubyPosition): string => {
  if (!value || value === 'over') {
    return 'over' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}

```

## TYPESCRIPT: src/util/style/scale.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScale } from './scale'

describe('normalizeScale', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeScale(null as any)).toBe('none')
    expect(normalizeScale(undefined as any)).toBe('none')
    expect(normalizeScale('none')).toBe('none')
  })

  test('should handle single values', () => {
    expect(normalizeScale(2)).toBe('2')
    expect(normalizeScale('50%')).toBe('50%')
  })

  test('should handle two values', () => {
    expect(normalizeScale('2 0.5')).toBe('2 0.5')
  })

  test('should handle three values', () => {
    expect(normalizeScale('200% 50% 200%')).toBe('200% 50% 200%')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScale('inherit')).toBe('inherit')
    expect(normalizeScale('initial')).toBe('initial')
    expect(normalizeScale('revert')).toBe('revert')
    expect(normalizeScale('revert-layer')).toBe('revert-layer')
    expect(normalizeScale('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scale.ts

```typescript
import type { TScale } from '../../type'

export const normalizeScale = (value: TScale): string => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return value.toString()
  }

  return value
}

```

## TYPESCRIPT: src/util/style/scroll-behavior.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollBehavior } from './scroll-behavior'

describe('normalizeScrollBehavior', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeScrollBehavior(null as any)).toBe('auto')
    expect(normalizeScrollBehavior(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeScrollBehavior('auto')).toBe('auto')
    expect(normalizeScrollBehavior('smooth')).toBe('smooth')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScrollBehavior('inherit')).toBe('inherit')
    expect(normalizeScrollBehavior('initial')).toBe('initial')
    expect(normalizeScrollBehavior('revert')).toBe('revert')
    expect(normalizeScrollBehavior('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollBehavior('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-behavior.ts

```typescript
import type { TScrollBehavior } from '../../type'

export const normalizeScrollBehavior = (
  scrollBehavior: TScrollBehavior
): string => {
  if (!scrollBehavior) {
    return 'auto' // Default value
  }
  return scrollBehavior
}

```

## TYPESCRIPT: src/util/style/scroll-margin.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollMargin } from './scroll-margin'

describe('normalizeScrollMargin', () => {
  test('should return string value as-is', () => {
    expect(normalizeScrollMargin('2rem')).toBe('2rem')
  })

  test('should normalize numeric value to rem', () => {
    expect(normalizeScrollMargin(32)).toBe('2rem')
  })

  test('should normalize array values', () => {
    expect(normalizeScrollMargin([16, 32])).toBe('1rem 2rem')
    expect(normalizeScrollMargin([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })

  test('should normalize object values', () => {
    expect(normalizeScrollMargin({ top: 16, right: 32 })).toBe('1rem 2rem 0 0')
    expect(
      normalizeScrollMargin({ top: 16, right: 32, bottom: 48, left: 64 })
    ).toBe('1rem 2rem 3rem 4rem')
  })

  test('should handle empty or invalid inputs gracefully', () => {
    expect(normalizeScrollMargin({})).toBe('0')
    expect(normalizeScrollMargin(undefined as any)).toBe('0')
    expect(normalizeScrollMargin(null as any)).toBe('0')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-margin.ts

```typescript
import { normalizeDirectional } from '../normalize-directional'
import { convertToRem } from '../convert-to-rem/convert-to-rem'
import type { TScrollMargin } from '../../type'

export const normalizeScrollMargin = (
  scrollMargin: TScrollMargin
): string | number => {
  return normalizeDirectional(scrollMargin, convertToRem)
}

```

## TYPESCRIPT: src/util/style/scroll-padding.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollPadding } from './scroll-padding'

describe('normalizeScrollPadding', () => {
  test('should return string value as-is', () => {
    expect(normalizeScrollPadding('2rem')).toBe('2rem')
  })

  test('should normalize numeric value to rem', () => {
    expect(normalizeScrollPadding(32)).toBe('2rem')
  })

  test('should normalize array values', () => {
    expect(normalizeScrollPadding([16, 32])).toBe('1rem 2rem')
    expect(normalizeScrollPadding([16, 32, 48, 64])).toBe('1rem 2rem 3rem 4rem')
  })

  test('should normalize object values', () => {
    expect(normalizeScrollPadding({ top: 16, right: 32 })).toBe('1rem 2rem 0 0')
    expect(
      normalizeScrollPadding({ top: 16, right: 32, bottom: 48, left: 64 })
    ).toBe('1rem 2rem 3rem 4rem')
  })

  test('should handle empty or invalid inputs gracefully', () => {
    expect(normalizeScrollPadding({})).toBe('0')
    expect(normalizeScrollPadding(undefined as any)).toBe('0')
    expect(normalizeScrollPadding(null as any)).toBe('0')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-padding.ts

```typescript
import { normalizeDirectional } from '../normalize-directional'
import { convertToRem } from '../convert-to-rem/convert-to-rem'
import type { TScrollPadding } from '../../type'

export const normalizeScrollPadding = (
  scrollPadding: TScrollPadding
): string | number => {
  return normalizeDirectional(scrollPadding, convertToRem)
}

```

## TYPESCRIPT: src/util/style/scroll-snap-align.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollSnapAlign } from './scroll-snap-align'

describe('normalizeScrollSnapAlign', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeScrollSnapAlign(null as any)).toBe('none')
    expect(normalizeScrollSnapAlign(undefined as any)).toBe('none')
  })

  test('should return valid single keyword values as-is', () => {
    expect(normalizeScrollSnapAlign('none')).toBe('none')
    expect(normalizeScrollSnapAlign('start')).toBe('start')
    expect(normalizeScrollSnapAlign('end')).toBe('end')
    expect(normalizeScrollSnapAlign('center')).toBe('center')
  })

  test('should return valid two keyword values as-is', () => {
    expect(normalizeScrollSnapAlign('start end')).toBe('start end')
    expect(normalizeScrollSnapAlign('end center')).toBe('end center')
    expect(normalizeScrollSnapAlign('center start')).toBe('center start')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScrollSnapAlign('inherit')).toBe('inherit')
    expect(normalizeScrollSnapAlign('initial')).toBe('initial')
    expect(normalizeScrollSnapAlign('revert')).toBe('revert')
    expect(normalizeScrollSnapAlign('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollSnapAlign('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-snap-align.ts

```typescript
import type { TScrollSnapAlign } from '../../type'

export const normalizeScrollSnapAlign = (
  scrollSnapAlign: TScrollSnapAlign
): string => {
  if (!scrollSnapAlign) {
    return 'none' // Default value
  }
  return scrollSnapAlign
}

```

## TYPESCRIPT: src/util/style/scroll-snap-stop.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollSnapStop } from './scroll-snap-stop'

describe('normalizeScrollSnapStop', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeScrollSnapStop(null as any)).toBe('normal')
    expect(normalizeScrollSnapStop(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeScrollSnapStop('normal')).toBe('normal')
    expect(normalizeScrollSnapStop('always')).toBe('always')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScrollSnapStop('inherit')).toBe('inherit')
    expect(normalizeScrollSnapStop('initial')).toBe('initial')
    expect(normalizeScrollSnapStop('revert')).toBe('revert')
    expect(normalizeScrollSnapStop('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollSnapStop('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-snap-stop.ts

```typescript
import type { TScrollSnapStop } from '../../type'

export const normalizeScrollSnapStop = (
  scrollSnapStop: TScrollSnapStop
): string => {
  if (!scrollSnapStop) {
    return 'normal' // Default value
  }
  return scrollSnapStop
}

```

## TYPESCRIPT: src/util/style/scroll-snap-type.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollSnapType } from './scroll-snap-type'

describe('normalizeScrollSnapType', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeScrollSnapType(null as any)).toBe('none')
    expect(normalizeScrollSnapType(undefined as any)).toBe('none')
  })

  test('should return valid keyword values for snap axes as-is', () => {
    expect(normalizeScrollSnapType('none')).toBe('none')
    expect(normalizeScrollSnapType('x')).toBe('x')
    expect(normalizeScrollSnapType('y')).toBe('y')
    expect(normalizeScrollSnapType('block')).toBe('block')
    expect(normalizeScrollSnapType('inline')).toBe('inline')
    expect(normalizeScrollSnapType('both')).toBe('both')
  })

  test('should return valid values with snap strictness as-is', () => {
    expect(normalizeScrollSnapType('x mandatory')).toBe('x mandatory')
    expect(normalizeScrollSnapType('y proximity')).toBe('y proximity')
    expect(normalizeScrollSnapType('both mandatory')).toBe('both mandatory')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeScrollSnapType('inherit')).toBe('inherit')
    expect(normalizeScrollSnapType('initial')).toBe('initial')
    expect(normalizeScrollSnapType('revert')).toBe('revert')
    expect(normalizeScrollSnapType('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollSnapType('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-snap-type.ts

```typescript
import type { TScrollSnapType } from '../../type'

export const normalizeScrollSnapType = (
  scrollSnapType: TScrollSnapType
): string => {
  if (!scrollSnapType) {
    return 'none' // Default value
  }
  return scrollSnapType
}

```

## TYPESCRIPT: src/util/style/scroll-timeline-axis.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollTimelineAxis } from './scroll-timeline-axis'

describe('normalizeScrollTimelineAxis', () => {
  test('should return "block" for null or undefined', () => {
    expect(normalizeScrollTimelineAxis(null as any)).toBe('block')
    expect(normalizeScrollTimelineAxis(undefined as any)).toBe('block')
  })

  test('should return valid logical property values as-is', () => {
    expect(normalizeScrollTimelineAxis('block')).toBe('block')
    expect(normalizeScrollTimelineAxis('inline')).toBe('inline')
  })

  test('should return valid non-logical property values as-is', () => {
    expect(normalizeScrollTimelineAxis('x')).toBe('x')
    expect(normalizeScrollTimelineAxis('y')).toBe('y')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollTimelineAxis('inherit')).toBe('inherit')
    expect(normalizeScrollTimelineAxis('initial')).toBe('initial')
    expect(normalizeScrollTimelineAxis('revert')).toBe('revert')
    expect(normalizeScrollTimelineAxis('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollTimelineAxis('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-timeline-axis.ts

```typescript
import type { TScrollTimelineAxis } from '../../type'

export const normalizeScrollTimelineAxis = (
  scrollTimelineAxis: TScrollTimelineAxis
): string => {
  if (!scrollTimelineAxis) {
    return 'block' // Default value
  }
  return scrollTimelineAxis
}

```

## TYPESCRIPT: src/util/style/scroll-timeline-name.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollTimelineName } from './scroll-timeline-name'

describe('normalizeScrollTimelineName', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeScrollTimelineName(null as any)).toBe('none')
    expect(normalizeScrollTimelineName(undefined as any)).toBe('none')
  })

  test('should return valid values as-is', () => {
    expect(normalizeScrollTimelineName('none')).toBe('none')
    expect(normalizeScrollTimelineName('--custom_name_for_timeline')).toBe(
      '--custom_name_for_timeline'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollTimelineName('inherit')).toBe('inherit')
    expect(normalizeScrollTimelineName('initial')).toBe('initial')
    expect(normalizeScrollTimelineName('revert')).toBe('revert')
    expect(normalizeScrollTimelineName('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollTimelineName('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-timeline-name.ts

```typescript
import type { TScrollTimelineName } from '../../type'

export const normalizeScrollTimelineName = (
  scrollTimelineName: TScrollTimelineName
): string => {
  if (!scrollTimelineName) {
    return 'none' // Default value
  }
  return scrollTimelineName
}

```

## TYPESCRIPT: src/util/style/scroll-timeline.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollTimeline } from './scroll-timeline'

describe('normalizeScrollTimeline', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeScrollTimeline(null as any)).toBe('none')
    expect(normalizeScrollTimeline(undefined as any)).toBe('none')
  })

  test('should return valid single values as-is', () => {
    expect(normalizeScrollTimeline('none')).toBe('none')
    expect(normalizeScrollTimeline('--custom_name_for_timeline')).toBe(
      '--custom_name_for_timeline'
    )
  })

  test('should return valid two values as-is', () => {
    expect(normalizeScrollTimeline('--custom_name_for_timeline block')).toBe(
      '--custom_name_for_timeline block'
    )
    expect(normalizeScrollTimeline('none inline')).toBe('none inline')
    expect(normalizeScrollTimeline('--custom_name_for_timeline x')).toBe(
      '--custom_name_for_timeline x'
    )
    expect(normalizeScrollTimeline('none y')).toBe('none y')
  })

  test('should handle invalid inputs gracefully', () => {
    expect(normalizeScrollTimeline('')).toBe('none')
    expect(normalizeScrollTimeline(undefined as any)).toBe('none')
  })
})

```

## TYPESCRIPT: src/util/style/scroll-timeline.ts

```typescript
import type { TScrollTimeline } from '../../type'

export const normalizeScrollTimeline = (
  scrollTimeline: TScrollTimeline
): string => {
  if (!scrollTimeline) {
    return 'none' // Default value
  }
  return scrollTimeline
}

```

## TYPESCRIPT: src/util/style/scrollbar-color.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollbarColor } from './scrollbar-color'

describe('normalizeScrollbarColor', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeScrollbarColor(null as any)).toBe('auto')
    expect(normalizeScrollbarColor(undefined as any)).toBe('auto')
  })

  test('should return valid keyword value as-is', () => {
    expect(normalizeScrollbarColor('auto')).toBe('auto')
  })

  test('should return valid color values as-is', () => {
    expect(normalizeScrollbarColor('rebeccapurple green')).toBe(
      'rebeccapurple green'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollbarColor('inherit')).toBe('inherit')
    expect(normalizeScrollbarColor('initial')).toBe('initial')
    expect(normalizeScrollbarColor('revert')).toBe('revert')
    expect(normalizeScrollbarColor('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollbarColor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scrollbar-color.ts

```typescript
import type { TScrollbarColor } from '../../type'

export const normalizeScrollbarColor = (
  scrollbarColor: TScrollbarColor
): string => {
  if (!scrollbarColor) {
    return 'auto' // Default value
  }
  return scrollbarColor
}

```

## TYPESCRIPT: src/util/style/scrollbar-gutter.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollbarGutter } from './scrollbar-gutter'

describe('normalizeScrollbarGutter', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeScrollbarGutter(null as any)).toBe('auto')
    expect(normalizeScrollbarGutter(undefined as any)).toBe('auto')
  })

  test('should return valid single keyword value as-is', () => {
    expect(normalizeScrollbarGutter('auto')).toBe('auto')
    expect(normalizeScrollbarGutter('stable')).toBe('stable')
  })

  test('should return valid combined keyword values as-is', () => {
    expect(normalizeScrollbarGutter('stable both-edges')).toBe(
      'stable both-edges'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollbarGutter('inherit')).toBe('inherit')
    expect(normalizeScrollbarGutter('initial')).toBe('initial')
    expect(normalizeScrollbarGutter('revert')).toBe('revert')
    expect(normalizeScrollbarGutter('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollbarGutter('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scrollbar-gutter.ts

```typescript
import type { TScrollbarGutter } from '../../type'

export const normalizeScrollbarGutter = (
  scrollbarGutter: TScrollbarGutter
): string => {
  if (!scrollbarGutter) {
    return 'auto' // Default value
  }
  return scrollbarGutter
}

```

## TYPESCRIPT: src/util/style/scrollbar-width.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeScrollbarWidth } from './scrollbar-width'

describe('normalizeScrollbarWidth', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeScrollbarWidth(null as any)).toBe('auto')
    expect(normalizeScrollbarWidth(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeScrollbarWidth('auto')).toBe('auto')
    expect(normalizeScrollbarWidth('thin')).toBe('thin')
    expect(normalizeScrollbarWidth('none')).toBe('none')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeScrollbarWidth('inherit')).toBe('inherit')
    expect(normalizeScrollbarWidth('initial')).toBe('initial')
    expect(normalizeScrollbarWidth('revert')).toBe('revert')
    expect(normalizeScrollbarWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeScrollbarWidth('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/scrollbar-width.ts

```typescript
import type { TScrollbarWidth } from '../../type'

export const normalizeScrollbarWidth = (
  scrollbarWidth: TScrollbarWidth
): string => {
  if (!scrollbarWidth) {
    return 'auto' // Default value
  }
  return scrollbarWidth
}

```

## TYPESCRIPT: src/util/style/shape-image-threshold.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeShapeImageThreshold } from './shape-image-threshold'

describe('normalizeShapeImageThreshold', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeShapeImageThreshold(null as any)).toBe('0')
    expect(normalizeShapeImageThreshold(undefined as any)).toBe('0')
  })

  test('should return valid <number> value as a string', () => {
    expect(normalizeShapeImageThreshold(0.7)).toBe('0.7')
    expect(normalizeShapeImageThreshold(1)).toBe('1')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeShapeImageThreshold('inherit')).toBe('inherit')
    expect(normalizeShapeImageThreshold('initial')).toBe('initial')
    expect(normalizeShapeImageThreshold('revert')).toBe('revert')
    expect(normalizeShapeImageThreshold('revert-layer')).toBe('revert-layer')
    expect(normalizeShapeImageThreshold('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/shape-image-threshold.ts

```typescript
import type { TShapeImageThreshold } from '../../type'

export const normalizeShapeImageThreshold = (
  shapeImageThreshold: TShapeImageThreshold
): string => {
  if (shapeImageThreshold === null || shapeImageThreshold === undefined) {
    return '0' // Default value
  }
  return typeof shapeImageThreshold === 'number'
    ? shapeImageThreshold.toString()
    : shapeImageThreshold
}

```

## TYPESCRIPT: src/util/style/shape-margin.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeShapeMargin } from './shape-margin'

describe('normalizeShapeMargin', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeShapeMargin(null as any)).toBe('0')
    expect(normalizeShapeMargin(undefined as any)).toBe('0')
  })

  test('should normalize <length> values in px to rem', () => {
    expect(normalizeShapeMargin('10px')).toBe('0.625rem')
    expect(normalizeShapeMargin(16)).toBe('1rem')
  })

  test('should return other <length> or <percentage> values as-is', () => {
    expect(normalizeShapeMargin('20mm')).toBe('20mm')
    expect(normalizeShapeMargin('60%')).toBe('60%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeShapeMargin('inherit')).toBe('inherit')
    expect(normalizeShapeMargin('initial')).toBe('initial')
    expect(normalizeShapeMargin('revert')).toBe('revert')
    expect(normalizeShapeMargin('revert-layer')).toBe('revert-layer')
    expect(normalizeShapeMargin('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/shape-margin.ts

```typescript
import type { TShapeMargin } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeShapeMargin = (shapeMargin: TShapeMargin): string => {
  if (shapeMargin === null || shapeMargin === undefined) {
    return '0' // Default value
  }

  if (typeof shapeMargin === 'number' || /^[\d.]+px$/.test(shapeMargin)) {
    return convertToRem(shapeMargin)
  }

  return shapeMargin.toString()
}

```

## TYPESCRIPT: src/util/style/shape-outside.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeShapeOutside } from './shape-outside'

describe('normalizeShapeOutside', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeShapeOutside(null as any)).toBe('none')
    expect(normalizeShapeOutside(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeShapeOutside('none')).toBe('none')
    expect(normalizeShapeOutside('margin-box')).toBe('margin-box')
    expect(normalizeShapeOutside('content-box')).toBe('content-box')
    expect(normalizeShapeOutside('border-box')).toBe('border-box')
    expect(normalizeShapeOutside('padding-box')).toBe('padding-box')
  })

  test('should return valid function values as-is', () => {
    expect(normalizeShapeOutside('circle()')).toBe('circle()')
    expect(normalizeShapeOutside('ellipse()')).toBe('ellipse()')
    expect(normalizeShapeOutside('inset(10px 10px 10px 10px)')).toBe(
      'inset(10px 10px 10px 10px)'
    )
    expect(
      normalizeShapeOutside('polygon(10px 10px, 20px 20px, 30px 30px)')
    ).toBe('polygon(10px 10px, 20px 20px, 30px 30px)')
  })

  test('should return shape box with basic shape as-is', () => {
    expect(normalizeShapeOutside('circle() border-box')).toBe(
      'circle() border-box'
    )
    expect(normalizeShapeOutside('margin-box ellipse()')).toBe(
      'margin-box ellipse()'
    )
  })

  test('should return <url> and <gradient> values as-is', () => {
    expect(normalizeShapeOutside('url(image.png)')).toBe('url(image.png)')
    expect(
      normalizeShapeOutside('linear-gradient(45deg, #fff 150px, red 150px)')
    ).toBe('linear-gradient(45deg, #fff 150px, red 150px)')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeShapeOutside('inherit')).toBe('inherit')
    expect(normalizeShapeOutside('initial')).toBe('initial')
    expect(normalizeShapeOutside('revert')).toBe('revert')
    expect(normalizeShapeOutside('revert-layer')).toBe('revert-layer')
    expect(normalizeShapeOutside('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/shape-outside.ts

```typescript
import type { TShapeOutside } from '../../type'

export const normalizeShapeOutside = (shapeOutside: TShapeOutside): string => {
  if (!shapeOutside) {
    return 'none' // Default value
  }
  return shapeOutside
}

```

## TYPESCRIPT: src/util/style/shape-rendering.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeShapeRendering } from './shape-rendering'

describe('normalizeShapeRendering', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeShapeRendering(null as any)).toBe('auto')
    expect(normalizeShapeRendering(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeShapeRendering('auto')).toBe('auto')
    expect(normalizeShapeRendering('crispEdges')).toBe('crispEdges')
    expect(normalizeShapeRendering('geometricPrecision')).toBe(
      'geometricPrecision'
    )
    expect(normalizeShapeRendering('optimizeSpeed')).toBe('optimizeSpeed')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeShapeRendering('inherit')).toBe('inherit')
    expect(normalizeShapeRendering('initial')).toBe('initial')
    expect(normalizeShapeRendering('revert')).toBe('revert')
    expect(normalizeShapeRendering('revert-layer')).toBe('revert-layer')
    expect(normalizeShapeRendering('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/shape-rendering.ts

```typescript
import type { TShapeRendering } from '../../type'

export const normalizeShapeRendering = (
  shapeRendering: TShapeRendering
): string => {
  if (!shapeRendering) {
    return 'auto' // Default value
  }
  return shapeRendering
}

```

## TYPESCRIPT: src/util/style/stop-color.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStopColor } from './stop-color'

describe('normalizeStopColor', () => {
  test('should return "currentcolor" for null or undefined', () => {
    expect(normalizeStopColor(null as any)).toBe('currentcolor')
    expect(normalizeStopColor(undefined as any)).toBe('currentcolor')
  })

  test('should return valid <color> values as-is', () => {
    expect(normalizeStopColor('red')).toBe('red')
    expect(normalizeStopColor('hsl(120deg 75% 25% / 60%)')).toBe(
      'hsl(120deg 75% 25% / 60%)'
    )
    expect(normalizeStopColor('currentcolor')).toBe('currentcolor')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStopColor('inherit')).toBe('inherit')
    expect(normalizeStopColor('initial')).toBe('initial')
    expect(normalizeStopColor('revert')).toBe('revert')
    expect(normalizeStopColor('revert-layer')).toBe('revert-layer')
    expect(normalizeStopColor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stop-color.ts

```typescript
import type { TStopColor } from '../../type'

export const normalizeStopColor = (stopColor: TStopColor): string => {
  if (!stopColor) {
    return 'currentcolor' // Default value
  }
  return stopColor
}

```

## TYPESCRIPT: src/util/style/stop-opacity.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStopOpacity } from './stop-opacity'

describe('normalizeStopOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeStopOpacity(null as any)).toBe('1')
    expect(normalizeStopOpacity(undefined as any)).toBe('1')
  })

  test('should return numeric values as a string', () => {
    expect(normalizeStopOpacity(0.2)).toBe('0.2')
    expect(normalizeStopOpacity(1)).toBe('1')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeStopOpacity('20%')).toBe('20%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStopOpacity('inherit')).toBe('inherit')
    expect(normalizeStopOpacity('initial')).toBe('initial')
    expect(normalizeStopOpacity('revert')).toBe('revert')
    expect(normalizeStopOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeStopOpacity('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stop-opacity.ts

```typescript
import type { TStopOpacity } from '../../type'

export const normalizeStopOpacity = (stopOpacity: TStopOpacity): string => {
  if (stopOpacity === null || stopOpacity === undefined) {
    return '1' // Default value
  }
  return typeof stopOpacity === 'number' ? stopOpacity.toString() : stopOpacity
}

```

## TYPESCRIPT: src/util/style/stroke-dasharray.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStrokeDasharray } from './stroke-dasharray'

describe('normalizeStrokeDasharray', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeStrokeDasharray(null as any)).toBe('none')
    expect(normalizeStrokeDasharray(undefined as any)).toBe('none')
    expect(normalizeStrokeDasharray('none')).toBe('none')
  })

  test('should normalize array of numbers or strings', () => {
    expect(normalizeStrokeDasharray([2, 5])).toBe('2, 5')
    expect(normalizeStrokeDasharray(['20%', '50%'])).toBe('20%, 50%')
    expect(normalizeStrokeDasharray([2, 5, 3])).toBe('2, 5, 3')
  })

  test('should handle individual numeric or string values', () => {
    expect(normalizeStrokeDasharray(2)).toBe('2')
    expect(normalizeStrokeDasharray('5px')).toBe('5px')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeDasharray('inherit')).toBe('inherit')
    expect(normalizeStrokeDasharray('initial')).toBe('initial')
    expect(normalizeStrokeDasharray('revert')).toBe('revert')
    expect(normalizeStrokeDasharray('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeDasharray('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stroke-dasharray.ts

```typescript
import type { TStrokeDasharray } from '../../type'

export const normalizeStrokeDasharray = (
  strokeDasharray: TStrokeDasharray
): string => {
  if (!strokeDasharray || strokeDasharray === 'none') {
    return 'none' // Default value
  }

  if (Array.isArray(strokeDasharray)) {
    return strokeDasharray.join(', ')
  }

  return strokeDasharray.toString()
}

```

## TYPESCRIPT: src/util/style/stroke-dashoffset.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStrokeDashoffset } from './stroke-dashoffset'

describe('normalizeStrokeDashoffset', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeStrokeDashoffset(null as any)).toBe('none')
    expect(normalizeStrokeDashoffset(undefined as any)).toBe('none')
    expect(normalizeStrokeDashoffset('none')).toBe('none')
  })

  test('should convert numeric values to rem', () => {
    expect(normalizeStrokeDashoffset(16)).toBe('1rem') // Assuming 16px base font size
    expect(normalizeStrokeDashoffset(8)).toBe('0.5rem')
  })

  test('should convert px values to rem', () => {
    expect(normalizeStrokeDashoffset('16px')).toBe('1rem')
    expect(normalizeStrokeDashoffset('8px')).toBe('0.5rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeStrokeDashoffset('50%')).toBe('50%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeDashoffset('inherit')).toBe('inherit')
    expect(normalizeStrokeDashoffset('initial')).toBe('initial')
    expect(normalizeStrokeDashoffset('revert')).toBe('revert')
    expect(normalizeStrokeDashoffset('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeDashoffset('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stroke-dashoffset.ts

```typescript
import type { TStrokeDashoffset } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeStrokeDashoffset = (
  strokeDashoffset: TStrokeDashoffset
): string => {
  if (!strokeDashoffset || strokeDashoffset === 'none') {
    return 'none' // Default value
  }

  if (
    typeof strokeDashoffset === 'number' ||
    /^[\d.]+px$/.test(strokeDashoffset)
  ) {
    return convertToRem(strokeDashoffset)
  }

  return strokeDashoffset.toString()
}

```

## TYPESCRIPT: src/util/style/stroke-linecap.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStrokeLinecap } from './stroke-linecap'

describe('normalizeStrokeLinecap', () => {
  test('should return "butt" for null or undefined', () => {
    expect(normalizeStrokeLinecap(null as any)).toBe('butt')
    expect(normalizeStrokeLinecap(undefined as any)).toBe('butt')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeStrokeLinecap('butt')).toBe('butt')
    expect(normalizeStrokeLinecap('round')).toBe('round')
    expect(normalizeStrokeLinecap('square')).toBe('square')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeLinecap('inherit')).toBe('inherit')
    expect(normalizeStrokeLinecap('initial')).toBe('initial')
    expect(normalizeStrokeLinecap('revert')).toBe('revert')
    expect(normalizeStrokeLinecap('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeLinecap('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stroke-linecap.ts

```typescript
import type { TStrokeLinecap } from '../../type'

export const normalizeStrokeLinecap = (
  strokeLinecap: TStrokeLinecap
): string => {
  if (!strokeLinecap) {
    return 'butt' // Default value
  }
  return strokeLinecap
}

```

## TYPESCRIPT: src/util/style/stroke-linejoin.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStrokeLinejoin } from './stroke-linejoin'

describe('normalizeStrokeLinejoin', () => {
  test('should return "miter" for null or undefined', () => {
    expect(normalizeStrokeLinejoin(null as any)).toBe('miter')
    expect(normalizeStrokeLinejoin(undefined as any)).toBe('miter')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeStrokeLinejoin('bevel')).toBe('bevel')
    expect(normalizeStrokeLinejoin('miter')).toBe('miter')
    expect(normalizeStrokeLinejoin('round')).toBe('round')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeLinejoin('inherit')).toBe('inherit')
    expect(normalizeStrokeLinejoin('initial')).toBe('initial')
    expect(normalizeStrokeLinejoin('revert')).toBe('revert')
    expect(normalizeStrokeLinejoin('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeLinejoin('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stroke-linejoin.ts

```typescript
import type { TStrokeLinejoin } from '../../type'

export const normalizeStrokeLinejoin = (
  strokeLinejoin: TStrokeLinejoin
): string => {
  if (!strokeLinejoin) {
    return 'miter' // Default value
  }
  return strokeLinejoin
}

```

## TYPESCRIPT: src/util/style/stroke-miterlimit.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStrokeMiterlimit } from './stroke-miterlimit'

describe('normalizeStrokeMiterlimit', () => {
  test('should return "4" for null or undefined', () => {
    expect(normalizeStrokeMiterlimit(null as any)).toBe('4')
    expect(normalizeStrokeMiterlimit(undefined as any)).toBe('4')
  })

  test('should return number values as strings', () => {
    expect(normalizeStrokeMiterlimit(1)).toBe('1')
    // biome-ignore lint: biomelint/suspicious/noApproximativeNumericConstant
    expect(normalizeStrokeMiterlimit(3.1416)).toBe('3.1416')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeMiterlimit('inherit')).toBe('inherit')
    expect(normalizeStrokeMiterlimit('initial')).toBe('initial')
    expect(normalizeStrokeMiterlimit('revert')).toBe('revert')
    expect(normalizeStrokeMiterlimit('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeMiterlimit('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stroke-miterlimit.ts

```typescript
import type { TStrokeMiterlimit } from '../../type'

export const normalizeStrokeMiterlimit = (
  strokeMiterlimit: TStrokeMiterlimit
): string => {
  if (strokeMiterlimit === null || strokeMiterlimit === undefined) {
    return '4' // Default value for stroke-miterlimit
  }
  return typeof strokeMiterlimit === 'number'
    ? strokeMiterlimit.toString()
    : strokeMiterlimit
}

```

## TYPESCRIPT: src/util/style/stroke-opacity.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStrokeOpacity } from './stroke-opacity'

describe('normalizeStrokeOpacity', () => {
  test('should return "1" for null or undefined', () => {
    expect(normalizeStrokeOpacity(null as any)).toBe('1')
    expect(normalizeStrokeOpacity(undefined as any)).toBe('1')
  })

  test('should return numeric values as strings', () => {
    expect(normalizeStrokeOpacity(1)).toBe('1')
    expect(normalizeStrokeOpacity(0.3)).toBe('0.3')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeStrokeOpacity('50%')).toBe('50%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeOpacity('inherit')).toBe('inherit')
    expect(normalizeStrokeOpacity('initial')).toBe('initial')
    expect(normalizeStrokeOpacity('revert')).toBe('revert')
    expect(normalizeStrokeOpacity('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeOpacity('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stroke-opacity.ts

```typescript
import type { TStrokeOpacity } from '../../type'

export const normalizeStrokeOpacity = (
  strokeOpacity: TStrokeOpacity
): string => {
  if (strokeOpacity === null || strokeOpacity === undefined) {
    return '1' // Default value
  }
  return typeof strokeOpacity === 'number'
    ? strokeOpacity.toString()
    : strokeOpacity
}

```

## TYPESCRIPT: src/util/style/stroke-width.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStrokeWidth } from './stroke-width'

describe('normalizeStrokeWidth', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeStrokeWidth(null as any)).toBe('0')
    expect(normalizeStrokeWidth(undefined as any)).toBe('0')
  })

  test('should convert px values to rem', () => {
    expect(normalizeStrokeWidth('1.414px')).toBe('0.088375rem') // Assuming 16px base font size
    expect(normalizeStrokeWidth(16)).toBe('1rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeStrokeWidth('0%')).toBe('0%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStrokeWidth('inherit')).toBe('inherit')
    expect(normalizeStrokeWidth('initial')).toBe('initial')
    expect(normalizeStrokeWidth('revert')).toBe('revert')
    expect(normalizeStrokeWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeStrokeWidth('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stroke-width.ts

```typescript
import type { TStrokeWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeStrokeWidth = (strokeWidth: TStrokeWidth): string => {
  if (strokeWidth === null || strokeWidth === undefined) {
    return '0' // Default value
  }

  if (typeof strokeWidth === 'number' || /^[\d.]+px$/.test(strokeWidth)) {
    return convertToRem(strokeWidth)
  }

  return strokeWidth.toString()
}

```

## TYPESCRIPT: src/util/style/stroke.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeStroke } from './stroke'

describe('normalizeStroke', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeStroke(null as any)).toBe('none')
    expect(normalizeStroke(undefined as any)).toBe('none')
  })

  test('should return assorted color values as-is', () => {
    expect(normalizeStroke('rgb(153 51 102 / 1)')).toBe('rgb(153 51 102 / 1)')
    expect(
      normalizeStroke('color-mix(in lch, var(--primaryColor) 35%, gray 15%)')
    ).toBe('color-mix(in lch, var(--primaryColor) 35%, gray 15%)')
    expect(normalizeStroke('dodgerblue')).toBe('dodgerblue')
    expect(normalizeStroke('currentColor')).toBe('currentColor')
    expect(normalizeStroke('transparent')).toBe('transparent')
    expect(normalizeStroke('context-stroke')).toBe('context-stroke')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeStroke('inherit')).toBe('inherit')
    expect(normalizeStroke('initial')).toBe('initial')
    expect(normalizeStroke('revert')).toBe('revert')
    expect(normalizeStroke('revert-layer')).toBe('revert-layer')
    expect(normalizeStroke('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/stroke.ts

```typescript
import type { TStroke } from '../../type'

export const normalizeStroke = (stroke: TStroke): string => {
  if (!stroke) {
    return 'none' // Default value
  }
  return stroke
}

```

## TYPESCRIPT: src/util/style/tab-size.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTabSize } from './tab-size'

describe('normalizeTabSize', () => {
  test('should return "8" for null or undefined', () => {
    expect(normalizeTabSize(null as any)).toBe('8')
    expect(normalizeTabSize(undefined as any)).toBe('8')
  })

  test('should convert px values to rem', () => {
    expect(normalizeTabSize('10px')).toBe('0.625rem') // Assuming 16px base font size
  })

  test('should return length values as-is', () => {
    expect(normalizeTabSize('2em')).toBe('2em')
  })

  test('should return number values as strings', () => {
    expect(normalizeTabSize(4)).toBe('4')
    expect(normalizeTabSize(0)).toBe('0')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTabSize('inherit')).toBe('inherit')
    expect(normalizeTabSize('initial')).toBe('initial')
    expect(normalizeTabSize('revert')).toBe('revert')
    expect(normalizeTabSize('revert-layer')).toBe('revert-layer')
    expect(normalizeTabSize('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/tab-size.ts

```typescript
import type { TTabSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeTabSize = (tabSize: TTabSize): string => {
  if (tabSize === null || tabSize === undefined) {
    return '8' // Default value for tab-size
  }

  if (typeof tabSize === 'string' && isPx(tabSize)) {
    return convertToRem(tabSize)
  }

  return tabSize.toString()
}

```

## TYPESCRIPT: src/util/style/table-layout.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTableLayout } from './table-layout'

describe('normalizeTableLayout', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTableLayout(null as any)).toBe('auto')
    expect(normalizeTableLayout(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTableLayout('auto')).toBe('auto')
    expect(normalizeTableLayout('fixed')).toBe('fixed')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTableLayout('inherit')).toBe('inherit')
    expect(normalizeTableLayout('initial')).toBe('initial')
    expect(normalizeTableLayout('revert')).toBe('revert')
    expect(normalizeTableLayout('revert-layer')).toBe('revert-layer')
    expect(normalizeTableLayout('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/table-layout.ts

```typescript
import type { TTableLayout } from '../../type'

export const normalizeTableLayout = (tableLayout: TTableLayout): string => {
  if (!tableLayout) {
    return 'auto' // Default value
  }
  return tableLayout
}

```

## TYPESCRIPT: src/util/style/text-align-last.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextAlignLast } from './text-align-last'

describe('normalizeTextAlignLast', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextAlignLast(null as any)).toBe('auto')
    expect(normalizeTextAlignLast(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextAlignLast('auto')).toBe('auto')
    expect(normalizeTextAlignLast('start')).toBe('start')
    expect(normalizeTextAlignLast('end')).toBe('end')
    expect(normalizeTextAlignLast('left')).toBe('left')
    expect(normalizeTextAlignLast('right')).toBe('right')
    expect(normalizeTextAlignLast('center')).toBe('center')
    expect(normalizeTextAlignLast('justify')).toBe('justify')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextAlignLast('inherit')).toBe('inherit')
    expect(normalizeTextAlignLast('initial')).toBe('initial')
    expect(normalizeTextAlignLast('revert')).toBe('revert')
    expect(normalizeTextAlignLast('revert-layer')).toBe('revert-layer')
    expect(normalizeTextAlignLast('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-align-last.ts

```typescript
import type { TTextAlignLast } from '../../type'

export const normalizeTextAlignLast = (
  textAlignLast: TTextAlignLast
): string => {
  if (!textAlignLast) {
    return 'auto' // Default value
  }
  return textAlignLast
}

```

## TYPESCRIPT: src/util/style/text-align.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextAlign } from './text-align'

describe('normalizeTextAlign', () => {
  test('should return "start" for null or undefined', () => {
    expect(normalizeTextAlign(null as any)).toBe('start')
    expect(normalizeTextAlign(undefined as any)).toBe('start')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextAlign('start')).toBe('start')
    expect(normalizeTextAlign('end')).toBe('end')
    expect(normalizeTextAlign('left')).toBe('left')
    expect(normalizeTextAlign('right')).toBe('right')
    expect(normalizeTextAlign('center')).toBe('center')
    expect(normalizeTextAlign('justify')).toBe('justify')
    expect(normalizeTextAlign('match-parent')).toBe('match-parent')
  })

  test('should return block alignment values as-is', () => {
    expect(normalizeTextAlign('-moz-center')).toBe('-moz-center')
    expect(normalizeTextAlign('-webkit-center')).toBe('-webkit-center')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextAlign('inherit')).toBe('inherit')
    expect(normalizeTextAlign('initial')).toBe('initial')
    expect(normalizeTextAlign('revert')).toBe('revert')
    expect(normalizeTextAlign('revert-layer')).toBe('revert-layer')
    expect(normalizeTextAlign('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-align.ts

```typescript
import type { TTextAlign } from '../../type'

export const normalizeTextAlign = (textAlign: TTextAlign): string => {
  if (!textAlign) {
    return 'start' // Default value
  }
  return textAlign
}

```

## TYPESCRIPT: src/util/style/text-anchor.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextAnchor } from './text-anchor'

describe('normalizeTextAnchor', () => {
  test('should return "start" for null or undefined', () => {
    expect(normalizeTextAnchor(null as any)).toBe('start')
    expect(normalizeTextAnchor(undefined as any)).toBe('start')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextAnchor('start')).toBe('start')
    expect(normalizeTextAnchor('middle')).toBe('middle')
    expect(normalizeTextAnchor('end')).toBe('end')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextAnchor('inherit')).toBe('inherit')
    expect(normalizeTextAnchor('initial')).toBe('initial')
    expect(normalizeTextAnchor('revert')).toBe('revert')
    expect(normalizeTextAnchor('revert-layer')).toBe('revert-layer')
    expect(normalizeTextAnchor('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-anchor.ts

```typescript
import type { TTextAnchor } from '../../type'

export const normalizeTextAnchor = (textAnchor: TTextAnchor): string => {
  if (!textAnchor) {
    return 'start' // Default value
  }
  return textAnchor
}

```

## TYPESCRIPT: src/util/style/text-combine-upright.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextCombineUpright } from './text-combine-upright'

describe('normalizeTextCombineUpright', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextCombineUpright(null as any)).toBe('none')
    expect(normalizeTextCombineUpright(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextCombineUpright('none')).toBe('none')
    expect(normalizeTextCombineUpright('all')).toBe('all')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextCombineUpright('inherit')).toBe('inherit')
    expect(normalizeTextCombineUpright('initial')).toBe('initial')
    expect(normalizeTextCombineUpright('revert')).toBe('revert')
    expect(normalizeTextCombineUpright('revert-layer')).toBe('revert-layer')
    expect(normalizeTextCombineUpright('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-combine-upright.ts

```typescript
import type { TTextCombineUpright } from '../../type'

export const normalizeTextCombineUpright = (
  textCombineUpright: TTextCombineUpright
): string => {
  if (!textCombineUpright) {
    return 'none' // Default value
  }
  return textCombineUpright
}

```

## TYPESCRIPT: src/util/style/text-decoration.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextDecoration } from './text-decoration'

describe('normalizeTextDecoration', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextDecoration(null as any)).toBe('none')
    expect(normalizeTextDecoration(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeTextDecoration('underline')).toBe('underline')
    expect(normalizeTextDecoration('underline overline')).toBe(
      'underline overline'
    )
  })

  test('should join array values with spaces', () => {
    expect(normalizeTextDecoration(['underline', 'overline'])).toBe(
      'underline overline'
    )
    expect(normalizeTextDecoration(['solid', 'red'])).toBe('solid red')
  })

  test('should normalize object values', () => {
    expect(
      normalizeTextDecoration({
        line: 'underline',
        style: 'solid',
        color: 'red',
        thickness: '2px',
      })
    ).toBe('underline solid red 0.125rem') // Assuming 16px base font size
    expect(
      normalizeTextDecoration({
        line: 'overline',
        style: 'dashed',
        thickness: 3,
      })
    ).toBe('overline dashed 0.1875rem')
  })

  test('should handle global keyword values in object', () => {
    expect(
      normalizeTextDecoration({
        line: 'inherit',
        style: 'initial',
        color: 'unset',
        thickness: 'revert-layer',
      })
    ).toBe('inherit initial unset revert-layer')
  })
})

```

## TYPESCRIPT: src/util/style/text-decoration.ts

```typescript
import type { TTextDecoration } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeTextDecoration = (
  textDecoration: TTextDecoration
): string => {
  if (!textDecoration) {
    return 'none' // Default value
  }

  if (typeof textDecoration === 'string') {
    return textDecoration
  }

  if (Array.isArray(textDecoration)) {
    return textDecoration.join(' ')
  }

  const { line, style, color, thickness } = textDecoration
  const normalizedThickness =
    thickness && (typeof thickness === 'number' || /^[\d.]+px$/.test(thickness))
      ? convertToRem(thickness)
      : thickness

  return [line, style, color, normalizedThickness].filter(Boolean).join(' ')
}

```

## TYPESCRIPT: src/util/style/text-emphasis.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextEmphasis } from './text-emphasis'

describe('normalizeTextEmphasis', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextEmphasis(null as any)).toBe('none')
    expect(normalizeTextEmphasis(undefined as any)).toBe('none')
  })

  test('should return string values as-is', () => {
    expect(normalizeTextEmphasis('filled')).toBe('filled')
    expect(normalizeTextEmphasis('dot red over')).toBe('dot red over')
  })

  test('should normalize object values', () => {
    expect(
      normalizeTextEmphasis({
        style: 'filled sesame',
        color: 'blue',
        position: 'over right',
      })
    ).toBe('filled sesame blue over right')

    expect(
      normalizeTextEmphasis({
        style: 'circle',
        position: 'under left',
      })
    ).toBe('circle under left')

    expect(
      normalizeTextEmphasis({
        color: '#555',
      })
    ).toBe('#555')
  })

  test('should handle global keyword values in object', () => {
    expect(
      normalizeTextEmphasis({
        style: 'inherit',
        color: 'initial',
        position: 'unset',
      })
    ).toBe('inherit initial unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-emphasis.ts

```typescript
import type { TTextEmphasis } from '../../type'

export const normalizeTextEmphasis = (textEmphasis: TTextEmphasis): string => {
  if (!textEmphasis) {
    return 'none' // Default value
  }

  if (typeof textEmphasis === 'string') {
    return textEmphasis
  }

  const { style, color, position } = textEmphasis
  return [style, color, position].filter(Boolean).join(' ')
}

```

## TYPESCRIPT: src/util/style/text-indent.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextIndent } from './text-indent'

describe('normalizeTextIndent', () => {
  test('should return "0" for null or undefined', () => {
    expect(normalizeTextIndent(null as any)).toBe('0')
    expect(normalizeTextIndent(undefined as any)).toBe('0')
  })

  test('should convert px values to rem', () => {
    expect(normalizeTextIndent('40px')).toBe('2.5rem') // Assuming 16px base font size
    expect(normalizeTextIndent(32)).toBe('2rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeTextIndent('15%')).toBe('15%')
  })

  test('should handle keyword values', () => {
    expect(normalizeTextIndent('5em each-line')).toBe('5em each-line')
    expect(normalizeTextIndent('5em hanging')).toBe('5em hanging')
    expect(normalizeTextIndent('5em hanging each-line')).toBe(
      '5em hanging each-line'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextIndent('inherit')).toBe('inherit')
    expect(normalizeTextIndent('initial')).toBe('initial')
    expect(normalizeTextIndent('revert')).toBe('revert')
    expect(normalizeTextIndent('revert-layer')).toBe('revert-layer')
    expect(normalizeTextIndent('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-indent.ts

```typescript
import type { TTextIndent } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeTextIndent = (textIndent: TTextIndent): string => {
  if (!textIndent) {
    return '0' // Default value
  }

  if (typeof textIndent === 'number' || /^[\d.]+px$/.test(textIndent)) {
    return convertToRem(textIndent)
  }

  return textIndent.toString()
}

```

## TYPESCRIPT: src/util/style/text-justify.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextJustify } from './text-justify'

describe('normalizeTextJustify', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextJustify(null as any)).toBe('auto')
    expect(normalizeTextJustify(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextJustify('none')).toBe('none')
    expect(normalizeTextJustify('auto')).toBe('auto')
    expect(normalizeTextJustify('inter-word')).toBe('inter-word')
    expect(normalizeTextJustify('inter-character')).toBe('inter-character')
    expect(normalizeTextJustify('distribute')).toBe('distribute') // Deprecated
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextJustify('inherit')).toBe('inherit')
    expect(normalizeTextJustify('initial')).toBe('initial')
    expect(normalizeTextJustify('revert')).toBe('revert')
    expect(normalizeTextJustify('revert-layer')).toBe('revert-layer')
    expect(normalizeTextJustify('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-justify.ts

```typescript
import type { TTextJustify } from '../../type'

export const normalizeTextJustify = (textJustify: TTextJustify): string => {
  if (!textJustify) {
    return 'auto' // Default value
  }
  return textJustify
}

```

## TYPESCRIPT: src/util/style/text-orientation.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextOrientation } from './text-orientation'

describe('normalizeTextOrientation', () => {
  test('should return "mixed" for null or undefined', () => {
    expect(normalizeTextOrientation(null as any)).toBe('mixed')
    expect(normalizeTextOrientation(undefined as any)).toBe('mixed')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextOrientation('mixed')).toBe('mixed')
    expect(normalizeTextOrientation('upright')).toBe('upright')
    expect(normalizeTextOrientation('sideways-right')).toBe('sideways-right')
    expect(normalizeTextOrientation('sideways')).toBe('sideways')
    expect(normalizeTextOrientation('use-glyph-orientation')).toBe(
      'use-glyph-orientation'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextOrientation('inherit')).toBe('inherit')
    expect(normalizeTextOrientation('initial')).toBe('initial')
    expect(normalizeTextOrientation('revert')).toBe('revert')
    expect(normalizeTextOrientation('revert-layer')).toBe('revert-layer')
    expect(normalizeTextOrientation('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-orientation.ts

```typescript
import type { TTextOrientation } from '../../type'

export const normalizeTextOrientation = (
  textOrientation: TTextOrientation
): string => {
  if (!textOrientation) {
    return 'mixed' // Default value
  }
  return textOrientation
}

```

## TYPESCRIPT: src/util/style/text-overflow.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextOverflow } from './text-overflow'

describe('normalizeTextOverflow', () => {
  test('should return "clip" for null or undefined', () => {
    expect(normalizeTextOverflow(null as any)).toBe('clip')
    expect(normalizeTextOverflow(undefined as any)).toBe('clip')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextOverflow('clip')).toBe('clip')
    expect(normalizeTextOverflow('ellipsis')).toBe('ellipsis')
  })

  test('should return compound values as-is', () => {
    expect(normalizeTextOverflow('ellipsis ellipsis')).toBe('ellipsis ellipsis')
    expect(normalizeTextOverflow('ellipsis " [..]"')).toBe('ellipsis " [..]"')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextOverflow('inherit')).toBe('inherit')
    expect(normalizeTextOverflow('initial')).toBe('initial')
    expect(normalizeTextOverflow('revert')).toBe('revert')
    expect(normalizeTextOverflow('revert-layer')).toBe('revert-layer')
    expect(normalizeTextOverflow('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-overflow.ts

```typescript
import type { TTextOverflow } from '../../type'

export const normalizeTextOverflow = (textOverflow: TTextOverflow): string => {
  if (!textOverflow) {
    return 'clip' // Default value
  }
  return textOverflow
}

```

## TYPESCRIPT: src/util/style/text-rendering.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextRendering } from './text-rendering'

describe('normalizeTextRendering', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextRendering(null as any)).toBe('auto')
    expect(normalizeTextRendering(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextRendering('auto')).toBe('auto')
    expect(normalizeTextRendering('optimizeSpeed')).toBe('optimizeSpeed')
    expect(normalizeTextRendering('optimizeLegibility')).toBe(
      'optimizeLegibility'
    )
    expect(normalizeTextRendering('geometricPrecision')).toBe(
      'geometricPrecision'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextRendering('inherit')).toBe('inherit')
    expect(normalizeTextRendering('initial')).toBe('initial')
    expect(normalizeTextRendering('revert')).toBe('revert')
    expect(normalizeTextRendering('revert-layer')).toBe('revert-layer')
    expect(normalizeTextRendering('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-rendering.ts

```typescript
import type { TTextRendering } from '../../type'

export const normalizeTextRendering = (
  textRendering: TTextRendering
): string => {
  if (!textRendering) {
    return 'auto' // Default value
  }
  return textRendering
}

```

## TYPESCRIPT: src/util/style/text-shadow.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextShadow } from './text-shadow'

describe('normalizeTextShadow', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextShadow(null as any)).toBe('none')
    expect(normalizeTextShadow(undefined as any)).toBe('none')
  })

  test('should return valid text-shadow values as-is', () => {
    expect(normalizeTextShadow('1px 1px 2px black')).toBe('1px 1px 2px black')
    expect(normalizeTextShadow('#fc0 1px 0 10px')).toBe('#fc0 1px 0 10px')
    expect(normalizeTextShadow('5px 5px #558abb')).toBe('5px 5px #558abb')
    expect(normalizeTextShadow('white 2px 5px')).toBe('white 2px 5px')
    expect(normalizeTextShadow('5px 10px')).toBe('5px 10px')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextShadow('inherit')).toBe('inherit')
    expect(normalizeTextShadow('initial')).toBe('initial')
    expect(normalizeTextShadow('revert')).toBe('revert')
    expect(normalizeTextShadow('revert-layer')).toBe('revert-layer')
    expect(normalizeTextShadow('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-shadow.ts

```typescript
import type { TTextShadow } from '../../type'

export const normalizeTextShadow = (textShadow: TTextShadow): string => {
  if (!textShadow) {
    return 'none' // Default value
  }
  return textShadow
}

```

## TYPESCRIPT: src/util/style/text-transform.test.ts

```typescript
import { describe, expect, test } from 'bun:test';
import { normalizeTextTransform } from './text-transform';

describe('normalizeTextTransform', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTextTransform(null as any)).toBe('none');
    expect(normalizeTextTransform(undefined as any)).toBe('none');
  });

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextTransform('none')).toBe('none');
    expect(normalizeTextTransform('capitalize')).toBe('capitalize');
    expect(normalizeTextTransform('uppercase')).toBe('uppercase');
    expect(normalizeTextTransform('lowercase')).toBe('lowercase');
    expect(normalizeTextTransform('full-width')).toBe('full-width');
    expect(normalizeTextTransform('full-size-kana')).toBe('full-size-kana');
    expect(normalizeTextTransform('math-auto')).toBe('math-auto');
  });

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextTransform('inherit')).toBe('inherit');
    expect(normalizeTextTransform('initial')).toBe('initial');
    expect(normalizeTextTransform('revert')).toBe('revert');
    expect(normalizeTextTransform('revert-layer')).toBe('revert-layer');
    expect(normalizeTextTransform('unset')).toBe('unset');
  });
});

```

## TYPESCRIPT: src/util/style/text-transform.ts

```typescript
import type { TTextTransform } from '../../type'

export const normalizeTextTransform = (
  textTransform: TTextTransform
): string => {
  if (!textTransform) {
    return 'none' // Default value
  }
  return textTransform
}

```

## TYPESCRIPT: src/util/style/text-underline-offset.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextUnderlineOffset } from './text-underline-offset'

describe('normalizeTextUnderlineOffset', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeTextUnderlineOffset(null as any)).toBe('auto')
    expect(normalizeTextUnderlineOffset(undefined as any)).toBe('auto')
    expect(normalizeTextUnderlineOffset('auto')).toBe('auto')
  })

  test('should convert px values to rem', () => {
    expect(normalizeTextUnderlineOffset('3px')).toBe('0.1875rem') // Assuming 16px base font size
    expect(normalizeTextUnderlineOffset(16)).toBe('1rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeTextUnderlineOffset('20%')).toBe('20%')
  })

  test('should handle length values as-is', () => {
    expect(normalizeTextUnderlineOffset('0.1em')).toBe('0.1em')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextUnderlineOffset('inherit')).toBe('inherit')
    expect(normalizeTextUnderlineOffset('initial')).toBe('initial')
    expect(normalizeTextUnderlineOffset('revert')).toBe('revert')
    expect(normalizeTextUnderlineOffset('revert-layer')).toBe('revert-layer')
    expect(normalizeTextUnderlineOffset('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-underline-offset.ts

```typescript
import type { TTextUnderlineOffset } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeTextUnderlineOffset = (
  textUnderlineOffset: TTextUnderlineOffset
): string => {
  if (!textUnderlineOffset || textUnderlineOffset === 'auto') {
    return 'auto' // Default value
  }

  if (typeof textUnderlineOffset === 'string' && isPx(textUnderlineOffset)) {
    return convertToRem(textUnderlineOffset)
  }

  if (typeof textUnderlineOffset === 'number') {
    return convertToRem(textUnderlineOffset)
  }

  return textUnderlineOffset.toString()
}

```

## TYPESCRIPT: src/util/style/text-underline-position.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextUnderlinePosition } from './text-underline-position'

describe('normalizeTextUnderlinePosition', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextUnderlinePosition(null as any)).toBe('auto')
    expect(normalizeTextUnderlinePosition(undefined as any)).toBe('auto')
  })

  test('should return valid single keyword values as-is', () => {
    expect(normalizeTextUnderlinePosition('auto')).toBe('auto')
    expect(normalizeTextUnderlinePosition('under')).toBe('under')
    expect(normalizeTextUnderlinePosition('left')).toBe('left')
    expect(normalizeTextUnderlinePosition('right')).toBe('right')
  })

  test('should return valid multiple keyword values as-is', () => {
    expect(normalizeTextUnderlinePosition('under left')).toBe('under left')
    expect(normalizeTextUnderlinePosition('right under')).toBe('right under')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextUnderlinePosition('inherit')).toBe('inherit')
    expect(normalizeTextUnderlinePosition('initial')).toBe('initial')
    expect(normalizeTextUnderlinePosition('revert')).toBe('revert')
    expect(normalizeTextUnderlinePosition('revert-layer')).toBe('revert-layer')
    expect(normalizeTextUnderlinePosition('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-underline-position.ts

```typescript
import type { TTextUnderlinePosition } from '../../type'

export const normalizeTextUnderlinePosition = (
  textUnderlinePosition: TTextUnderlinePosition
): string => {
  if (!textUnderlinePosition) {
    return 'auto' // Default value
  }
  return textUnderlinePosition
}

```

## TYPESCRIPT: src/util/style/text-wrap-style.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextWrapStyle } from './text-wrap-style'

describe('normalizeTextWrapStyle', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTextWrapStyle(null as any)).toBe('auto')
    expect(normalizeTextWrapStyle(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextWrapStyle('auto')).toBe('auto')
    expect(normalizeTextWrapStyle('balance')).toBe('balance')
    expect(normalizeTextWrapStyle('pretty')).toBe('pretty')
    expect(normalizeTextWrapStyle('stable')).toBe('stable')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextWrapStyle('inherit')).toBe('inherit')
    expect(normalizeTextWrapStyle('initial')).toBe('initial')
    expect(normalizeTextWrapStyle('revert')).toBe('revert')
    expect(normalizeTextWrapStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeTextWrapStyle('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-wrap-style.ts

```typescript
import type { TTextWrapStyle } from '../../type'

export const normalizeTextWrapStyle = (
  textWrapStyle: TTextWrapStyle
): string => {
  if (!textWrapStyle) {
    return 'auto' // Default value
  }
  return textWrapStyle
}

```

## TYPESCRIPT: src/util/style/text-wrap.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTextWrap } from './text-wrap'

describe('normalizeTextWrap', () => {
  test('should return "wrap" for null or undefined', () => {
    expect(normalizeTextWrap(null as any)).toBe('wrap')
    expect(normalizeTextWrap(undefined as any)).toBe('wrap')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTextWrap('wrap')).toBe('wrap')
    expect(normalizeTextWrap('nowrap')).toBe('nowrap')
    expect(normalizeTextWrap('balance')).toBe('balance')
    expect(normalizeTextWrap('pretty')).toBe('pretty')
    expect(normalizeTextWrap('stable')).toBe('stable')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTextWrap('inherit')).toBe('inherit')
    expect(normalizeTextWrap('initial')).toBe('initial')
    expect(normalizeTextWrap('revert')).toBe('revert')
    expect(normalizeTextWrap('revert-layer')).toBe('revert-layer')
    expect(normalizeTextWrap('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/text-wrap.ts

```typescript
import type { TTextWrap } from '../../type'

export const normalizeTextWrap = (textWrap: TTextWrap): string => {
  if (!textWrap) {
    return 'wrap' // Default value
  }
  return textWrap
}

```

## TYPESCRIPT: src/util/style/top.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTop } from './top'

describe('normalizeTop', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeTop(null as any)).toBe('auto')
    expect(normalizeTop(undefined as any)).toBe('auto')
    expect(normalizeTop('auto')).toBe('auto')
  })

  test('should normalize pixel values to rem', () => {
    expect(normalizeTop('3px')).toBe('0.1875rem')
    expect(normalizeTop(3)).toBe('0.1875rem')
  })

  test('should handle percentage values as-is', () => {
    expect(normalizeTop('10%')).toBe('10%')
  })

  test('should handle custom functions as-is', () => {
    expect(normalizeTop('calc(anchor(--myAnchor 50%) + 5px)')).toBe(
      'calc(anchor(--myAnchor 50%) + 5px)'
    )
    expect(normalizeTop('anchor-size(width)')).toBe('anchor-size(width)')
  })

  test('should return global keyword values as-is', () => {
    expect(normalizeTop('inherit')).toBe('inherit')
    expect(normalizeTop('initial')).toBe('initial')
    expect(normalizeTop('revert')).toBe('revert')
    expect(normalizeTop('revert-layer')).toBe('revert-layer')
    expect(normalizeTop('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/top.ts

```typescript
import type { TTop } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeTop = (value: TTop): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}

```

## TYPESCRIPT: src/util/style/touch-action.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTouchAction } from './touch-action'

describe('normalizeTouchAction', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeTouchAction(null as any)).toBe('auto')
    expect(normalizeTouchAction(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTouchAction('auto')).toBe('auto')
    expect(normalizeTouchAction('none')).toBe('none')
    expect(normalizeTouchAction('pan-x')).toBe('pan-x')
    expect(normalizeTouchAction('pan-left')).toBe('pan-left')
    expect(normalizeTouchAction('pan-right')).toBe('pan-right')
    expect(normalizeTouchAction('pan-y')).toBe('pan-y')
    expect(normalizeTouchAction('pan-up')).toBe('pan-up')
    expect(normalizeTouchAction('pan-down')).toBe('pan-down')
    expect(normalizeTouchAction('pinch-zoom')).toBe('pinch-zoom')
    expect(normalizeTouchAction('manipulation')).toBe('manipulation')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTouchAction('inherit')).toBe('inherit')
    expect(normalizeTouchAction('initial')).toBe('initial')
    expect(normalizeTouchAction('revert')).toBe('revert')
    expect(normalizeTouchAction('revert-layer')).toBe('revert-layer')
    expect(normalizeTouchAction('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/touch-action.ts

```typescript
import type { TTouchAction } from '../../type'

export const normalizeTouchAction = (touchAction: TTouchAction): string => {
  if (!touchAction) {
    return 'auto' // Default value
  }
  return touchAction
}

```

## TYPESCRIPT: src/util/style/transform-box.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTransformBox } from './transform-box'

describe('normalizeTransformBox', () => {
  test('should return "content-box" for null or undefined', () => {
    expect(normalizeTransformBox(null as any)).toBe('content-box')
    expect(normalizeTransformBox(undefined as any)).toBe('content-box')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTransformBox('content-box')).toBe('content-box')
    expect(normalizeTransformBox('border-box')).toBe('border-box')
    expect(normalizeTransformBox('fill-box')).toBe('fill-box')
    expect(normalizeTransformBox('stroke-box')).toBe('stroke-box')
    expect(normalizeTransformBox('view-box')).toBe('view-box')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransformBox('inherit')).toBe('inherit')
    expect(normalizeTransformBox('initial')).toBe('initial')
    expect(normalizeTransformBox('revert')).toBe('revert')
    expect(normalizeTransformBox('revert-layer')).toBe('revert-layer')
    expect(normalizeTransformBox('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/transform-box.ts

```typescript
import type { TTransformBox } from '../../type'

export const normalizeTransformBox = (transformBox: TTransformBox): string => {
  if (!transformBox) {
    return 'content-box' // Default value
  }
  return transformBox
}

```

## TYPESCRIPT: src/util/style/transform-origin.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTransformOrigin } from './transform-origin'

describe('normalizeTransformOrigin', () => {
  test('should return "50% 50% 0" for null or undefined', () => {
    expect(normalizeTransformOrigin(null as any)).toBe('50% 50% 0')
    expect(normalizeTransformOrigin(undefined as any)).toBe('50% 50% 0')
  })

  test('should return valid single value syntax as-is', () => {
    expect(normalizeTransformOrigin('2px')).toBe('2px')
    expect(normalizeTransformOrigin('bottom')).toBe('bottom')
  })

  test('should return valid two-value syntax as-is', () => {
    expect(normalizeTransformOrigin('3cm 2px')).toBe('3cm 2px')
    expect(normalizeTransformOrigin('left 2px')).toBe('left 2px')
    expect(normalizeTransformOrigin('right top')).toBe('right top')
  })

  test('should return valid three-value syntax as-is', () => {
    expect(normalizeTransformOrigin('2px 30% 10px')).toBe('2px 30% 10px')
    expect(normalizeTransformOrigin('left 5px -3px')).toBe('left 5px -3px')
    expect(normalizeTransformOrigin('right bottom 2cm')).toBe(
      'right bottom 2cm'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransformOrigin('inherit')).toBe('inherit')
    expect(normalizeTransformOrigin('initial')).toBe('initial')
    expect(normalizeTransformOrigin('revert')).toBe('revert')
    expect(normalizeTransformOrigin('revert-layer')).toBe('revert-layer')
    expect(normalizeTransformOrigin('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/transform-origin.ts

```typescript
import type { TTransformOrigin } from '../../type'

export const normalizeTransformOrigin = (
  transformOrigin: TTransformOrigin
): string => {
  if (!transformOrigin) {
    return '50% 50% 0' // Default value
  }
  return transformOrigin
}

```

## TYPESCRIPT: src/util/style/transform-style.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTransformStyle } from './transform-style'

describe('normalizeTransformStyle', () => {
  test('should return "flat" for null or undefined', () => {
    expect(normalizeTransformStyle(null as any)).toBe('flat')
    expect(normalizeTransformStyle(undefined as any)).toBe('flat')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTransformStyle('flat')).toBe('flat')
    expect(normalizeTransformStyle('preserve-3d')).toBe('preserve-3d')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransformStyle('inherit')).toBe('inherit')
    expect(normalizeTransformStyle('initial')).toBe('initial')
    expect(normalizeTransformStyle('revert')).toBe('revert')
    expect(normalizeTransformStyle('revert-layer')).toBe('revert-layer')
    expect(normalizeTransformStyle('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/transform-style.ts

```typescript
import type { TTransformStyle } from '../../type'

export const normalizeTransformStyle = (
  transformStyle: TTransformStyle
): string => {
  if (!transformStyle) {
    return 'flat' // Default value
  }
  return transformStyle
}

```

## TYPESCRIPT: src/util/style/transform.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTransform } from './transform'

describe('normalizeTransform', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeTransform(null as any)).toBe('none')
    expect(normalizeTransform(undefined as any)).toBe('none')
    expect(normalizeTransform('none')).toBe('none')
  })

  test('should return valid function values as-is', () => {
    expect(normalizeTransform('matrix(1, 2, 3, 4, 5, 6)')).toBe(
      'matrix(1, 2, 3, 4, 5, 6)'
    )
    expect(
      normalizeTransform('translateX(10px) rotate(10deg) translateY(5px)')
    ).toBe('translateX(10px) rotate(10deg) translateY(5px)')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransform('inherit')).toBe('inherit')
    expect(normalizeTransform('initial')).toBe('initial')
    expect(normalizeTransform('revert')).toBe('revert')
    expect(normalizeTransform('revert-layer')).toBe('revert-layer')
    expect(normalizeTransform('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/transform.ts

```typescript
import type { TTransform } from '../../type'

export const normalizeTransform = (transform: TTransform): string => {
  if (!transform || transform === 'none') {
    return 'none' // Default value
  }
  return transform
}

```

## TYPESCRIPT: src/util/style/transition-behavior.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTransitionBehavior } from './transition-behavior'

describe('normalizeTransitionBehavior', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeTransitionBehavior(null as any)).toBe('normal')
    expect(normalizeTransitionBehavior(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeTransitionBehavior('allow-discrete')).toBe('allow-discrete')
    expect(normalizeTransitionBehavior('normal')).toBe('normal')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTransitionBehavior('inherit')).toBe('inherit')
    expect(normalizeTransitionBehavior('initial')).toBe('initial')
    expect(normalizeTransitionBehavior('revert')).toBe('revert')
    expect(normalizeTransitionBehavior('revert-layer')).toBe('revert-layer')
    expect(normalizeTransitionBehavior('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/transition-behavior.ts

```typescript
import type { TTransitionBehavior } from '../../type'

export const normalizeTransitionBehavior = (
  transitionBehavior: TTransitionBehavior
): string => {
  if (!transitionBehavior) {
    return 'normal' // Default value
  }
  return transitionBehavior
}

```

## TYPESCRIPT: src/util/style/transition.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTransition } from './transition'

describe('normalizeTransition', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeTransition(null as any)).toBe('none')
    expect(normalizeTransition(undefined as any)).toBe('none')
  })

  test('should return valid string values as-is', () => {
    expect(normalizeTransition('all 1s ease-in')).toBe('all 1s ease-in')
    expect(normalizeTransition('height 2s ease-out, opacity 1s linear')).toBe(
      'height 2s ease-out, opacity 1s linear'
    )
  })

  test('should join array values with commas', () => {
    expect(normalizeTransition(['all', '1s', 'ease-in'])).toBe(
      'all, 1s, ease-in'
    )
    expect(normalizeTransition(['opacity', '2s', 'ease'])).toBe(
      'opacity, 2s, ease'
    )
  })

  test('should normalize object values', () => {
    expect(
      normalizeTransition({
        property: 'all',
        duration: '1s',
        timingFunction: 'ease-in',
        delay: '0.5s',
      })
    ).toBe('all 1s ease-in 0.5s')

    expect(
      normalizeTransition({
        property: 'opacity',
        duration: '2s',
        timingFunction: 'linear',
      })
    ).toBe('opacity 2s linear')
  })

  test('should handle global keyword values in object', () => {
    expect(
      normalizeTransition({
        property: 'inherit',
        duration: 'initial',
        timingFunction: 'unset',
        delay: 'revert-layer',
      })
    ).toBe('inherit initial unset revert-layer')
  })
})

```

## TYPESCRIPT: src/util/style/transition.ts

```typescript
import type { TTransition } from '../../type'

const convertToMs = (value: number | string): string => {
  return typeof value === 'number' ? `${value}ms` : value
}

export const normalizeTransition = (transition: TTransition): string => {
  if (!transition) {
    return 'none' // Default value
  }

  if (typeof transition === 'string') {
    return transition
  }

  if (Array.isArray(transition)) {
    return transition.map(convertToMs).join(', ')
  }

  const { property, duration, timingFunction, delay } = transition

  return [
    property,
    duration ? convertToMs(duration) : undefined,
    timingFunction,
    delay ? convertToMs(delay) : undefined,
  ]
    .filter(Boolean)
    .join(' ')
}

```

## TYPESCRIPT: src/util/style/translate.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeTranslate } from './translate'

describe('normalizeTranslate', () => {
  test('should return "none" for null, undefined, or "none"', () => {
    expect(normalizeTranslate(null as any)).toBe('none')
    expect(normalizeTranslate(undefined as any)).toBe('none')
    expect(normalizeTranslate('none')).toBe('none')
  })

  test('should convert px values to rem', () => {
    expect(normalizeTranslate('100px')).toBe('6.25rem') // Assuming 16px base font size
    expect(normalizeTranslate(200)).toBe('12.5rem')
  })

  test('should return single percentage or string values as-is', () => {
    expect(normalizeTranslate('50%')).toBe('50%')
  })

  test('should return two-value syntax as-is', () => {
    expect(normalizeTranslate('100px 200px')).toBe('100px 200px')
    expect(normalizeTranslate('50% 105px')).toBe('50% 105px')
  })

  test('should return three-value syntax as-is', () => {
    expect(normalizeTranslate('50% 105px 5rem')).toBe('50% 105px 5rem')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeTranslate('inherit')).toBe('inherit')
    expect(normalizeTranslate('initial')).toBe('initial')
    expect(normalizeTranslate('revert')).toBe('revert')
    expect(normalizeTranslate('revert-layer')).toBe('revert-layer')
    expect(normalizeTranslate('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/translate.ts

```typescript
import type { TTranslate } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeTranslate = (translate: TTranslate): string => {
  if (!translate || translate === 'none') {
    return 'none' // Default value
  }

  if (typeof translate === 'number' || /^[\d.]+px$/.test(translate)) {
    return convertToRem(translate)
  }

  return translate
}

```

## TYPESCRIPT: src/util/style/user-select.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeUserSelect } from './user-select'

describe('normalizeUserSelect', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeUserSelect(null as any)).toBe('auto')
    expect(normalizeUserSelect(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeUserSelect('none')).toBe('none')
    expect(normalizeUserSelect('auto')).toBe('auto')
    expect(normalizeUserSelect('text')).toBe('text')
    expect(normalizeUserSelect('all')).toBe('all')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeUserSelect('inherit')).toBe('inherit')
    expect(normalizeUserSelect('initial')).toBe('initial')
    expect(normalizeUserSelect('revert')).toBe('revert')
    expect(normalizeUserSelect('revert-layer')).toBe('revert-layer')
    expect(normalizeUserSelect('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/user-select.ts

```typescript
import type { TUserSelect } from '../../type'

export const normalizeUserSelect = (userSelect: TUserSelect): string => {
  if (!userSelect) {
    return 'auto' // Default value
  }
  return userSelect
}

```

## TYPESCRIPT: src/util/style/vector-effect.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeVectorEffect } from './vector-effect'

describe('normalizeVectorEffect', () => {
  test('should return "none" for null or undefined', () => {
    expect(normalizeVectorEffect(null as any)).toBe('none')
    expect(normalizeVectorEffect(undefined as any)).toBe('none')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeVectorEffect('none')).toBe('none')
    expect(normalizeVectorEffect('non-scaling-stroke')).toBe(
      'non-scaling-stroke'
    )
    expect(normalizeVectorEffect('non-scaling-size')).toBe('non-scaling-size')
    expect(normalizeVectorEffect('non-rotation')).toBe('non-rotation')
    expect(normalizeVectorEffect('fixed-position')).toBe('fixed-position')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeVectorEffect('inherit')).toBe('inherit')
    expect(normalizeVectorEffect('initial')).toBe('initial')
    expect(normalizeVectorEffect('revert')).toBe('revert')
    expect(normalizeVectorEffect('revert-layer')).toBe('revert-layer')
    expect(normalizeVectorEffect('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/vector-effect.ts

```typescript
import type { TVectorEffect } from '../../type'

export const normalizeVectorEffect = (vectorEffect: TVectorEffect): string => {
  if (!vectorEffect) {
    return 'none' // Default value
  }
  return vectorEffect
}

```

## TYPESCRIPT: src/util/style/vertical-align.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeVerticalAlign } from './vertical-align'

describe('normalizeVerticalAlign', () => {
  test('should return "baseline" for null or undefined', () => {
    expect(normalizeVerticalAlign(null as any)).toBe('baseline')
    expect(normalizeVerticalAlign(undefined as any)).toBe('baseline')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeVerticalAlign('baseline')).toBe('baseline')
    expect(normalizeVerticalAlign('sub')).toBe('sub')
    expect(normalizeVerticalAlign('super')).toBe('super')
    expect(normalizeVerticalAlign('text-top')).toBe('text-top')
    expect(normalizeVerticalAlign('text-bottom')).toBe('text-bottom')
    expect(normalizeVerticalAlign('middle')).toBe('middle')
    expect(normalizeVerticalAlign('top')).toBe('top')
    expect(normalizeVerticalAlign('bottom')).toBe('bottom')
  })

  test('should convert px values to rem', () => {
    expect(normalizeVerticalAlign('10px')).toBe('0.625rem') // Assuming 16px base font size
    expect(normalizeVerticalAlign(32)).toBe('2rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeVerticalAlign('20%')).toBe('20%')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeVerticalAlign('inherit')).toBe('inherit')
    expect(normalizeVerticalAlign('initial')).toBe('initial')
    expect(normalizeVerticalAlign('revert')).toBe('revert')
    expect(normalizeVerticalAlign('revert-layer')).toBe('revert-layer')
    expect(normalizeVerticalAlign('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/vertical-align.ts

```typescript
import type { TVerticalAlign } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeVerticalAlign = (
  verticalAlign: TVerticalAlign
): string => {
  if (!verticalAlign) {
    return 'baseline' // Default value
  }

  if (typeof verticalAlign === 'number' || /^[\d.]+px$/.test(verticalAlign)) {
    return convertToRem(verticalAlign)
  }

  return verticalAlign.toString()
}

```

## TYPESCRIPT: src/util/style/view-transition-name.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeViewTransitionName } from './view-transition-name'

describe('viewTransitionName', () => {
  test('should return emtpy string or name of the transition', () => {
    expect(normalizeViewTransitionName(null as any)).toBe('')
    expect(normalizeViewTransitionName('test')).toBe('test')
  })
})

```

## TYPESCRIPT: src/util/style/view-transition-name.ts

```typescript
import type { TViewTransitionName } from '../../type'

export const normalizeViewTransitionName = (
  viewTransitionName: TViewTransitionName,
): string => {
  return viewTransitionName || ''
}

```

## TYPESCRIPT: src/util/style/visibility.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeVisibility } from './visibility'

describe('normalizeVisibility', () => {
  test('should return "visible" for null or undefined', () => {
    expect(normalizeVisibility(null as any)).toBe('visible')
    expect(normalizeVisibility(undefined as any)).toBe('visible')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeVisibility('visible')).toBe('visible')
    expect(normalizeVisibility('hidden')).toBe('hidden')
    expect(normalizeVisibility('collapse')).toBe('collapse')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeVisibility('inherit')).toBe('inherit')
    expect(normalizeVisibility('initial')).toBe('initial')
    expect(normalizeVisibility('revert')).toBe('revert')
    expect(normalizeVisibility('revert-layer')).toBe('revert-layer')
    expect(normalizeVisibility('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/visibility.ts

```typescript
import type { TVisibility } from '../../type'

export const normalizeVisibility = (visibility: TVisibility): string => {
  if (!visibility) {
    return 'visible' // Default value
  }
  return visibility
}

```

## TYPESCRIPT: src/util/style/white-space.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeWhiteSpace } from './white-space'

describe('normalizeWhiteSpace', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeWhiteSpace(null as any)).toBe('normal')
    expect(normalizeWhiteSpace(undefined as any)).toBe('normal')
  })

  test('should return valid single keyword values as-is', () => {
    expect(normalizeWhiteSpace('normal')).toBe('normal')
    expect(normalizeWhiteSpace('pre')).toBe('pre')
    expect(normalizeWhiteSpace('pre-wrap')).toBe('pre-wrap')
    expect(normalizeWhiteSpace('pre-line')).toBe('pre-line')
  })

  test('should return shorthand values as-is', () => {
    expect(normalizeWhiteSpace('wrap')).toBe('wrap')
    expect(normalizeWhiteSpace('collapse')).toBe('collapse')
    expect(normalizeWhiteSpace('preserve nowrap')).toBe('preserve nowrap')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWhiteSpace('inherit')).toBe('inherit')
    expect(normalizeWhiteSpace('initial')).toBe('initial')
    expect(normalizeWhiteSpace('revert')).toBe('revert')
    expect(normalizeWhiteSpace('revert-layer')).toBe('revert-layer')
    expect(normalizeWhiteSpace('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/white-space.ts

```typescript
import type { TWhiteSpace } from '../../type'

export const normalizeWhiteSpace = (whiteSpace: TWhiteSpace): string => {
  if (!whiteSpace) {
    return 'normal' // Default value
  }
  return whiteSpace
}

```

## TYPESCRIPT: src/util/style/width.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeWidth } from './width'

describe('normalizeWidth', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeWidth(null as any)).toBe('auto')
    expect(normalizeWidth(undefined as any)).toBe('auto')
  })

  test('should convert px values to rem', () => {
    expect(normalizeWidth('300px')).toBe('18.75rem') // Assuming 16px base font size
    expect(normalizeWidth(400)).toBe('25rem')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeWidth('75%')).toBe('75%')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeWidth('auto')).toBe('auto')
    expect(normalizeWidth('stretch')).toBe('stretch')
    expect(normalizeWidth('max-content')).toBe('max-content')
    expect(normalizeWidth('min-content')).toBe('min-content')
  })

  test('should return valid function syntax as-is', () => {
    expect(normalizeWidth('fit-content(20em)')).toBe('fit-content(20em)')
    expect(normalizeWidth('anchor-size(--myAnchor inline, 120%)')).toBe(
      'anchor-size(--myAnchor inline, 120%)'
    )
    expect(normalizeWidth('minmax(100px, anchor-size(width))')).toBe(
      'minmax(100px, anchor-size(width))'
    )
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWidth('inherit')).toBe('inherit')
    expect(normalizeWidth('initial')).toBe('initial')
    expect(normalizeWidth('revert')).toBe('revert')
    expect(normalizeWidth('revert-layer')).toBe('revert-layer')
    expect(normalizeWidth('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/width.ts

```typescript
import type { TWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeWidth = (width: TWidth): string => {
  if (!width) {
    return 'auto' // Default value
  }

  if (typeof width === 'number' || /^[\d.]+px$/.test(width)) {
    return convertToRem(width)
  }

  return width.toString()
}

```

## TYPESCRIPT: src/util/style/will-change.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeWillChange } from './will-change'

describe('normalizeWillChange', () => {
  test('should return "auto" for null or undefined', () => {
    expect(normalizeWillChange(null as any)).toBe('auto')
    expect(normalizeWillChange(undefined as any)).toBe('auto')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeWillChange('auto')).toBe('auto')
    expect(normalizeWillChange('scroll-position')).toBe('scroll-position')
    expect(normalizeWillChange('contents')).toBe('contents')
  })

  test('should return custom-ident and animatable-feature values as-is', () => {
    expect(normalizeWillChange('transform')).toBe('transform')
    expect(normalizeWillChange('opacity')).toBe('opacity')
    expect(normalizeWillChange('left, top')).toBe('left, top')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWillChange('inherit')).toBe('inherit')
    expect(normalizeWillChange('initial')).toBe('initial')
    expect(normalizeWillChange('revert')).toBe('revert')
    expect(normalizeWillChange('revert-layer')).toBe('revert-layer')
    expect(normalizeWillChange('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/will-change.ts

```typescript
import type { TWillChange } from '../../type'

export const normalizeWillChange = (willChange: TWillChange): string => {
  if (!willChange) {
    return 'auto' // Default value
  }
  return willChange
}

```

## TYPESCRIPT: src/util/style/word-break.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeWordBreak } from './word-break'

describe('normalizeWordBreak', () => {
  test('should return "normal" for null or undefined', () => {
    expect(normalizeWordBreak(null as any)).toBe('normal')
    expect(normalizeWordBreak(undefined as any)).toBe('normal')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeWordBreak('normal')).toBe('normal')
    expect(normalizeWordBreak('break-all')).toBe('break-all')
    expect(normalizeWordBreak('keep-all')).toBe('keep-all')
    expect(normalizeWordBreak('auto-phrase')).toBe('auto-phrase') // Experimental
    expect(normalizeWordBreak('break-word')).toBe('break-word') // Deprecated
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWordBreak('inherit')).toBe('inherit')
    expect(normalizeWordBreak('initial')).toBe('initial')
    expect(normalizeWordBreak('revert')).toBe('revert')
    expect(normalizeWordBreak('revert-layer')).toBe('revert-layer')
    expect(normalizeWordBreak('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/word-break.ts

```typescript
import type { TWordBreak } from '../../type'

export const normalizeWordBreak = (wordBreak: TWordBreak): string => {
  if (!wordBreak) {
    return 'normal' // Default value
  }
  return wordBreak
}

```

## TYPESCRIPT: src/util/style/word-spacing.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeWordSpacing } from './word-spacing'

describe('normalizeWordSpacing', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeWordSpacing(null as any)).toBe('normal')
    expect(normalizeWordSpacing(undefined as any)).toBe('normal')
    expect(normalizeWordSpacing('normal')).toBe('normal')
  })

  test('should convert px values to rem', () => {
    expect(normalizeWordSpacing('3px')).toBe('0.1875rem') // Assuming 16px base font size
    expect(normalizeWordSpacing(32)).toBe('2rem')
  })

  test('should handle length values as-is', () => {
    expect(normalizeWordSpacing('0.3em')).toBe('0.3em')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWordSpacing('inherit')).toBe('inherit')
    expect(normalizeWordSpacing('initial')).toBe('initial')
    expect(normalizeWordSpacing('revert')).toBe('revert')
    expect(normalizeWordSpacing('revert-layer')).toBe('revert-layer')
    expect(normalizeWordSpacing('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/word-spacing.ts

```typescript
import type { TWordSpacing } from '../../type'
import { convertToRem } from '../convert-to-rem'

export const normalizeWordSpacing = (wordSpacing: TWordSpacing): string => {
  if (!wordSpacing || wordSpacing === 'normal') {
    return 'normal' // Default value
  }

  if (typeof wordSpacing === 'number' || /^[\d.]+px$/.test(wordSpacing)) {
    return convertToRem(wordSpacing)
  }

  return wordSpacing.toString()
}

```

## TYPESCRIPT: src/util/style/writing-mode.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeWritingMode } from './writing-mode'

describe('normalizeWritingMode', () => {
  test('should return "horizontal-tb" for null or undefined', () => {
    expect(normalizeWritingMode(null as any)).toBe('horizontal-tb')
    expect(normalizeWritingMode(undefined as any)).toBe('horizontal-tb')
  })

  test('should return valid keyword values as-is', () => {
    expect(normalizeWritingMode('horizontal-tb')).toBe('horizontal-tb')
    expect(normalizeWritingMode('vertical-rl')).toBe('vertical-rl')
    expect(normalizeWritingMode('vertical-lr')).toBe('vertical-lr')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeWritingMode('inherit')).toBe('inherit')
    expect(normalizeWritingMode('initial')).toBe('initial')
    expect(normalizeWritingMode('revert')).toBe('revert')
    expect(normalizeWritingMode('revert-layer')).toBe('revert-layer')
    expect(normalizeWritingMode('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/writing-mode.ts

```typescript
import type { TWritingMode } from '../../type'

export const normalizeWritingMode = (writingMode: TWritingMode): string => {
  if (!writingMode) {
    return 'horizontal-tb' // Default value
  }
  return writingMode
}

```

## TYPESCRIPT: src/util/style/z-index.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeZIndex } from './z-index'

describe('normalizeZIndex', () => {
  test('should return "auto" for null, undefined, or "auto"', () => {
    expect(normalizeZIndex(null as any)).toBe('auto')
    expect(normalizeZIndex(undefined as any)).toBe('auto')
    expect(normalizeZIndex('auto')).toBe('auto')
  })

  test('should return integer values as strings', () => {
    expect(normalizeZIndex(0)).toBe('0')
    expect(normalizeZIndex(3)).toBe('3')
    expect(normalizeZIndex(289)).toBe('289')
    expect(normalizeZIndex(-1)).toBe('-1')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeZIndex('inherit')).toBe('inherit')
    expect(normalizeZIndex('initial')).toBe('initial')
    expect(normalizeZIndex('revert')).toBe('revert')
    expect(normalizeZIndex('revert-layer')).toBe('revert-layer')
    expect(normalizeZIndex('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/z-index.ts

```typescript
import type { TZIndex } from '../../type'

export const normalizeZIndex = (zIndex: TZIndex): string => {
  if ((!zIndex && zIndex !== 0) || zIndex === 'auto') {
    return 'auto' // Default value
  }

  return typeof zIndex === 'number' ? zIndex.toString() : zIndex
}

```

## TYPESCRIPT: src/util/style/zoom.test.ts

```typescript
import { describe, expect, test } from 'bun:test'
import { normalizeZoom } from './zoom'

describe('normalizeZoom', () => {
  test('should return "normal" for null, undefined, or "normal"', () => {
    expect(normalizeZoom(null as any)).toBe('normal')
    expect(normalizeZoom(undefined as any)).toBe('normal')
    expect(normalizeZoom('normal')).toBe('normal')
  })

  test('should return percentage values as-is', () => {
    expect(normalizeZoom('50%')).toBe('50%')
    expect(normalizeZoom('200%')).toBe('200%')
  })

  test('should return numeric zoom values as strings', () => {
    expect(normalizeZoom(1.1)).toBe('1.1')
    expect(normalizeZoom(0.7)).toBe('0.7')
  })

  test('should return non-standard keyword values as-is', () => {
    expect(normalizeZoom('reset')).toBe('reset')
  })

  test('should handle global keyword values as-is', () => {
    expect(normalizeZoom('inherit')).toBe('inherit')
    expect(normalizeZoom('initial')).toBe('initial')
    expect(normalizeZoom('revert')).toBe('revert')
    expect(normalizeZoom('revert-layer')).toBe('revert-layer')
    expect(normalizeZoom('unset')).toBe('unset')
  })
})

```

## TYPESCRIPT: src/util/style/zoom.ts

```typescript
import type { TZoom } from '../../type'

export const normalizeZoom = (zoom: TZoom): string => {
  if (!zoom || zoom === 'normal') {
    return 'normal' // Default value
  }

  return typeof zoom === 'number' ? zoom.toString() : zoom
}

```

