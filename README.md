# Daily Tech, a Tech Blog for Techies!
# Table of Contents
1. [Introduction](#introduction)
2. [Application](#application)
3. [Roadmap](#roadmap)
4. [Contributions](#contributions)
5. [Authors](#authors)
6. [License](#license)


## <a id="introduction">Introduction</a>
Daily Tech is a blog site that is meant for techies of all proficiency! Write up a post about your favorite piece of gear, or pose a question to the community that's got you stumped.

If you're cloning the repository, be sure to run `node server.js` to begin the application. If you run into dependency errors, be sure the required dependencies are all included by running `npm i`.

This product is also deployed to Heroku.

## <a id="application">Application</a>
Soon there will be a video walkthrough of the application for your reference and enjoyment!

This application requires the following dependencies to run, which are already declared within the package.json file:

* bcrypt: ^5.0.1
* body-parser: ^1.20.0
* connect-session-sequelize: ^7.1.4
* dotenv: ^16.0.1
* express: ^4.18.1
* express-handlebars: ^6.0.6
* express-session: ^1.17.3
* mysql2: ^2.3.3
* node-modules: ^1.0.1
* sequelize: ^6.20.1

## <a id="roadmap">Roadmap</a>
Adding images and videos are up next for Daily Tech's development, where users will be able to easily search their computer's library for images and videos which will attach to their posts. As well, privacy options for users will be implemented.

## <a id="contributions">Contributions</a>
Please feel free to make a pull request or submit an issue to troubleshoot any bugs you come across.

## <a id="authors">Authors</a>
[Elyse Stanziale](https://github.com/elystanz) is the main contributors and the creators of this application.

## <a id="license">License</a>
This application is protected under the ISC license.

## <a id=#status>Project Status</a>
The product is currently experiencing the following error, which prevents it from properly deploying:

    `code: undefined,
    errno: 3780,
    sqlState: 'HY000',
    sqlMessage: "Referencing column 'user_id' and referenced column 'id' in foreign key constraint 'blogs_ibfk_1' are incompatible.",
    sql: 'CREATE TABLE IF NOT EXISTS `blogs` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255) NOT NULL, `content` VARCHAR(255) NOT NULL, `user_id` VARCHAR(255), `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;',
    parameters: undefined`

This has been an ongoing issue that is still being dissected by a team and a patch will arrive soon.