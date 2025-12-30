#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';

const program = new Command();

program
  .name('typescript-cli-starter')
  .description('A starter kit for commander based CLI tools built with TypeScript')
  .version('1.0.0');

program
  .command('hello')
  .description('Say hello with style')
  .argument('[name]', 'name to greet', 'World')
  .option('-s, --spinner', 'show a loading spinner')
  .action((name: string, options: { spinner?: boolean }) => {
    if (options.spinner) {
      const spinner = ora('Preparing greeting...').start();

      setTimeout(() => {
        spinner.succeed('Greeting ready!');
        console.log(chalk.blue.bold(`Hello, ${chalk.green(name)}!`));
        console.log(chalk.gray('(Styled with chalk and ora)'));
      }, 1500);
    } else {
      console.log(chalk.blue.bold(`Hello, ${chalk.green(name)}!`));
      console.log(chalk.gray('(Styled with chalk)'));
    }
  });

program
  .command('demo')
  .description('Demonstrate chalk colors and ora spinners')
  .action(async () => {
    console.log(chalk.bold('\n📦 Chalk Color Demo:\n'));
    console.log(chalk.red('Red text'));
    console.log(chalk.green('Green text'));
    console.log(chalk.yellow('Yellow text'));
    console.log(chalk.blue('Blue text'));
    console.log(chalk.magenta('Magenta text'));
    console.log(chalk.cyan('Cyan text'));
    console.log(chalk.white('White text'));
    console.log(chalk.gray('Gray text'));
    console.log(chalk.bold('Bold text'));
    console.log(chalk.italic('Italic text'));
    console.log(chalk.underline('Underlined text'));
    console.log(chalk.bgGreen.black(' Background colors '));
    console.log(chalk.red.bold.underline('Combined styles\n'));

    console.log(chalk.bold('⏳ Ora Spinner Demo:\n'));

    const spinner1 = ora('Loading...').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner1.succeed('Task completed successfully!');

    const spinner2 = ora('Processing...').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner2.fail('Task failed!');

    const spinner3 = ora('Checking...').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner3.warn('Warning message!');

    const spinner4 = ora('Analyzing...').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner4.info('Information message!');

    console.log(chalk.green.bold('\n✨ Demo complete!\n'));
  });

program.parse();
