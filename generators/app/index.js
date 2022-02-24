"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const getp = require("@jswork/generator-prompts");
const MAIN = "@jswork/ui-kit";
const prompts = getp(["scope", "registry", "project_name", "description"]);


module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the rad ${chalk.red("generator-wsui-uikit")} generator!`
      )
    );

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("**"),
      this.destinationPath(),
      this.props
    );
  }
};
