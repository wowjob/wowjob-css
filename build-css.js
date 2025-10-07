import { themeHueSaturation, themeLightnessAlpha } from './src/style/theme'

import { camelToKebabCase } from './src/util'
import { cssDefaultPropertyValueMap } from './src/style/default-value-map'
import fs from 'node:fs'
import path from 'node:path'
import { propertyMap } from './src/style/property-map'

const outputDir = 'dist/'
const srcDir = 'src/'

/**
 * Cleans the output directory to ensure a fresh build.
 */
const clean = () => {
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true })
  }
  fs.mkdirSync(outputDir, { recursive: true })
}

/**
 * Copies static assets from the src directory to the dist directory.
 */
const copyStaticAssets = () => {
  console.log('Copying static assets...')
  const resetCssPath = path.join(srcDir, 'reset.css')
  if (fs.existsSync(resetCssPath)) {
    fs.copyFileSync(resetCssPath, path.join(outputDir, 'reset.css'))
    console.log('✅ Copied reset.css')
  } else {
    console.warn('⚠️ reset.css not found in src, skipping.')
  }
}

const themeCSS = `/* WOWJOB UI CSS
Yet Another CSS UI library, which provides zero build time, best debugging DX, very flexible, reposniveness for RWD at core, and works with React, NextJS, Astro and more
Author: Marian Zburlea
Organization: Wow Job
Website: https://wowjob.ai
Website: https://wowjob.dev
GitHub: https://github.com/wowjob
*/
/* CSS theme */
${themeHueSaturation}
${themeLightnessAlpha}
/* CSS Properties */`

const allCSSNameMap = {
  development: `${outputDir}/all.css`,
  production: `${outputDir}/all.min.css`,
}

const propertyList = Object.keys(propertyMap)

const buildCss = () => {
  // create dir structure
  fs.mkdirSync(outputDir, { recursive: true })

  const finalCSSMap = {
    development: [],
    production: [],
  }

  const finalCSS = {
    development: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
    production: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
  }

  for (const env of ['development', 'production']) {
    for (const property of propertyList) {
      finalCSSMap[env].push({
        cssPropertyName: property,
        className: propertyMap[property].className[env],
        responsive: {
          mobile: propertyMap[property].className[env],
          tablet: `t-${propertyMap[property].className[env]}`,
          desktop: `d-${propertyMap[property].className[env]}`,
        },
      })
    }
  }

  for (const env of ['development', 'production']) {
    for (const screenType of ['mobile', 'tablet', 'desktop']) {
      for (const property of finalCSSMap[env]) {
        const varName = `--${property.responsive[screenType]}`
        const varNameM = `--${property.responsive.mobile}`
        const varNameT = `--${property.responsive.tablet}`
        const defaultValue =
          screenType === 'mobile'
            ? cssDefaultPropertyValueMap[property.cssPropertyName]
            : `var(${screenType === 'tablet' ? varNameM : varNameT})`

        finalCSS[env][screenType] +=
          env === 'development'
            ? `${
                screenType === 'mobile'
                  ? '#wowjob-ui '
                  : `#wowjob-ui .${screenType}`
              }.${property.className} {
  ${varName}: ${defaultValue};
  ${camelToKebabCase(property.cssPropertyName)}: var(${varName});
}
`
            : `#wowjob-ui .${
                property.className
              }{${varName}:${defaultValue};${camelToKebabCase(
                property.cssPropertyName,
              )}:var(${varName});}`
      }
    }

    const filePath = path.resolve(allCSSNameMap[env])
    console.log(filePath, 'file path')

    const fileContent =
      env === 'development'
        ? `${themeCSS}
${finalCSS[env].mobile}

@media screen and (min-width: 48rem) {
${finalCSS[env].tablet}
}

@media screen and (min-width: 80rem) {
${finalCSS[env].desktop}
}`
        : `${themeCSS}
${finalCSS[env].mobile}@media screen and (min-width: 48rem) {${finalCSS[env].tablet}}@media screen and (min-width: 80rem) {${finalCSS[env].desktop}}`

    fs.writeFileSync(filePath, fileContent, 'utf8')
  }

  console.log('✅ CSS build complete.')
}

/**
 * Builds the main TypeScript entry point into JavaScript.
 */
const buildTypeScript = async () => {
  console.log('Building TypeScript with Bun...')

  const result = await Bun.build({
    entrypoints: [`${srcDir}/index.ts`],
    outdir: outputDir,
    minify: false, // Set to true for production if needed
    sourcemap: 'none', // Or 'inline' for debugging
  })

  if (!result.success) {
    console.error('Bun build failed:')
    for (const message of result.logs) {
      console.error(message)
    }
    process.exit(1)
  }

  console.log('✅ TypeScript build complete.')
}

/**
 * Main build function to orchestrate all steps.
 */
const main = async () => {
  console.log('🚀 Starting library build...')

  clean()
  buildCss()
  copyStaticAssets()
  await buildTypeScript()
  // Note: Type generation is handled by a separate `tsc` command in package.json

  console.log('🎉 Build finished successfully!')
}

main()
