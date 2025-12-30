#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('typescript-cli-starter')
  .description('A starter kit for commander based CLI tools built with TypeScript')
  .version('1.0.0');

program
  .command('hello')
  .description('Say hello')
  .argument('[name]', 'name to greet', 'World')
  .action((name: string) => {
    console.log(`Hello, ${name}!`);
  });

program.parse();
