const chalk = require('chalk')
const { promises } = require('fs')
const path = require('path')


const basePath = `${process.cwd()}${path.sep}src${path.sep}`

module.exports.createFeature = async (featureName) => {
    console.info(chalk.blueBright(`Creating feature in ${basePath}features${path.sep}${featureName}`))
    try {
        await promises.access(`${basePath}features`)
        await promises.cp(
            `${__dirname}${path.sep}boilerplates${path.sep}feature`,
            `${basePath}features${path.sep}${featureName}`,
            { recursive: true }
        )
        await promises.appendFile(`${basePath}init.ts`, `\nimport './features/${featureName}/init'`)
        console.log(chalk.greenBright(`Feature ${featureName} created`))
    } catch (err) {
        console.error(chalk.redBright('Error. Check your pwd, it must be in root project folder'))
    }
}

module.exports.createLogin = async () => {
    try {
        await promises.access(`${basePath}features`)
        await promises.cp(
            `${__dirname}${path.sep}boilerplates${path.sep}login`,
            `${basePath}features${path.sep}login`,
            { recursive: true }
        )
        await promises.appendFile(`${basePath}init.ts`, `\nimport './features/login/init'`)
        console.log(chalk.greenBright(`Login feature initialized`))
    } catch (err) {
        console.error(chalk.redBright('Error. Check your pwd, it must be in root project folder'))
    }

}
module.exports.createDal = async () => {
    try {
        await promises.access(basePath)
        await promises.cp(
            `${__dirname}${path.sep}boilerplates${path.sep}dal`,
            `${basePath}dal`,
            { recursive: true }
        )
        await promises.appendFile(`${basePath}init.ts`, `\nimport './dal/init'`)
        console.log(chalk.greenBright(`DAL initialized`))
    } catch (err) {
        console.error(chalk.redBright('Error. Check your pwd, it must be in root project folder'))
    }
}

module.exports.createTheming = async () => {
    try {
        await promises.access(basePath)
    } catch (err) {
        console.error(chalk.redBright('Error. Check your pwd, it must be in root project folder'))
        throw err
    }
    try {
        await promises.access(`${basePath}ui`)
    } catch (err) {
        await promises.mkdir(`${basePath}ui`)
    }

    await promises.cp(
        `${__dirname}${path.sep}boilerplates${path.sep}theming`,
        `${basePath}ui${path.sep}theming`,
        { recursive: true }
    )
    await promises.appendFile(`${basePath}init.ts`, `\nimport './ui/theming/init'`)
    console.log(chalk.greenBright(`Theming initialized`))
}
