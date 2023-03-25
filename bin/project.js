const path = require("path");
const { exec } = require("child_process");
const { promises } = require('fs');
const chalk = require("chalk");
const { boilerplateURL } = require("./const");

module.exports.createProject = async (projectName) => {
    exec(`git clone ${boilerplateURL} ${projectName}`, async () => {
        await promises.cp(`${process.cwd()}${path.sep}${projectName}${path.sep}.env.example`, `${projectName}${path.sep}.env`)
        await promises.rm(`${process.cwd()}${path.sep}${projectName}${path.sep}.git`, {
            recursive: true
        })
        console.log(chalk.greenBright('Project initialized!'))
    })
}