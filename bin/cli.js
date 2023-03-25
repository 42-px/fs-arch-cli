#! /usr/bin/env node
const { program } = require('commander');
const { createFeature, createLogin, createTheming, createDal } = require('./feat');
const { createProject } = require('./project');

program
    .command('project:init')
    .description('creates feature in project')
    .argument('<string>', 'name of project folder')
    .action(createProject)

program
    .command('feat:create')
    .argument('<string>', 'name of feature')
    .description('creates feature in project')
    .action(createFeature)


program
    .command('dal:create')
    .description('creates login feature')
    .action(createDal)

program
    .command('login:create')
    .description('creates login feature')
    .action(createLogin)

program
    .command('theming:create')
    .description('creates theming')
    .action(createTheming)


program.parse();
