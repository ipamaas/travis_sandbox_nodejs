# Contributing Guide

## Welcome

Welcome and thank you for considering contributing to this project!
Please take a moment to read the basics about working on this project and be aware of our Code-of-Conduct.

We welcome any type of contribution: 
- **Code**: add code through pull requests including new features or bug fixes (check the [open issues](/../../issues))
- **QA**: add [issue](/../../issues/new), label it as `bug` or comments to other issues
- **Roadmap**: contact us if you have ideas to be considered in our roadmap
- **Exploitation**: write blog posts, tutorials, present the project on public events, ...

If you just want to know how to use the project, see [README.md](/../../)

## Is this your first contribution on Github?

If you are not sure how to work with Pull Requests, you can find an introduction here: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

## Pull Request Guidelines

- Do not create Pull Requests against the `master` branch! The `master` is used to tag stable releases.

- If you want to add a new feature, add a [issue](/../../issues/new) (with label `enhancement`) first so that the community has the chance to discuss it and provide helpful input

- Checkout a topic branch (`feature-*` or `fix-*` or `tests-*` or `refactor-*` or `docs-*`) from the relevant branch, usually `develop`

- Keep your commit history clean: changes are atomic and the git message format is considered

- Always `rebase` your work on top of the base branch to ensure your commit history is clean and linear

- Keep the `.gitignore` file up-to-date

- Feature added?
  - Make sure that the feaure is tested and add a new test if needed

- Bug fixed?
  - Add a Pull Request title ending with `(fix #xxxx[,#xxxx])` (representing the dedicated github issue ids)

- `npm test` need to be passed

- `Coding Guidelines` have to be considered: We use `eslint` and base on the StrongLoop style

## Branch Naming Convention

Base your work on the `develop` branch (current snapshot version) or a current release branch.

- `feature-*` for new features
- `fix-*` for bug fixes
- `tests-*` when updating test suite
- `refactor-*` when refactoring code without bbehavior changes
- `docs-*` for README.md updates (or similar documents)

## Commit Messages

Make sure that you have your own user and email setup correctly in git before
you commit

Take the time to write good commit messages.

Commit message template:

    ---- start ----
    [short line describing main purpose]
    -- empty line --
    [description, why this change is made]
    -- empty line --
    [close/fix #xxxx - representing dedicated github issue ids]
    ---- end ----

## Review of the Pull Request

After you have created your Pull Request, a project maintainer reviews it and decides wether it will be merged or rejected.

Try to avoid large Pull Requests as it will take longer to review them.

## Development Setup

Requirements:
- Setup [Node.js](http://nodejs.org) **version 7+**

Editor Suggestion:
- [Visual Studio Code](https://code.visualstudio.com/)

## Development Lifecycle

### Step 1: Fork

Fork the project on GitHub and clone this fork locally.

```sh
$ git clone git@github.com:username/<forkedprojectname>.git
$ cd <forkedprojectname>
$ git remote add upstream https://github.com/<projectname>/<projectname>.git
$ git fetch upstream
```

### Step 2: Branch

Create local branches to hold your changes. These should be branched directly off of the `develop` or `release-*` branch.

```sh
$ git checkout -b my-branch -t upstream/develop
```

### Step 3: Install/Build

To get all required dependencies, run:

```sh
$ npm install
```

Now you are ready to make changes.

### Step 4: Code

If you have made some code changes, be aware of the coding guidelines.

We use `eslint` and base on the StrongLoop style.

After you have changed code, check for new eslint issues
```sh
$ npm run lint
```

Possible rule violations are listed here: https://eslint.org/docs/rules/

Some rules can be auto-fixed by eslint
```sh
$ npm run lint -- --fix
```

Note that the pretest script is also part of the overall test to be passed.

### Step 5: Commit

Keep your changes grouped logically within individual commits. 
This will make the review process easier.

```sh
$ git add changed/files
$ git commit -m "Commit message"
```

### Step 6: Rebase

Use `git rebase` after you have commited a change.

Do NOT use `git merge`.

```sh
$ git fetch upstream
$ git rebase upstream/develop
```

If there are conflicts, solve them e.g. by using a diff tool like Meld.

Then continue to rebase

```sh
$ git rebase --continue
```

This ensures that your working branch has the latest changes from the upstream repository
and your history is clean and linear.

In case you want to abort the rabse process:

```sh
$ git rebase --abort
```

### Step 7: Test

New features should also add new tests. 

Unit test are written in Mocha/Chai.

Run the `unit tests` before submitting a Pull Request:

```sh
$ npm test
```
All tests have to be passed.

To check test coverage run

```sh
$ npm run test:coverage
```

Run `integration tests` against local or remote MSB instance:

```sh
$ TESTENV_CUSTOMIP=192.168.0.10 npm run test:integration
```

TODO: Link to runing MSB test instances

### Step 8: Push

Once you have finished your work prepare your pull request by 
pushing your working branch to your fork on GitHub.

```sh
$ git push origin my-branch
```

### Step 9: Opening the Pull Request

Create a new pull request from your fork on Github.
A pull request template will help you to provide all information needed 
and to check if all requirements are met.

 ### Step 10: Update a Pull Reuest

It is likely that you get some comments to your Pull Request and requests for changes by the reviewer.
This is part of the review process.

In this case, you can still make changes to the existing Pull Request.

Simply make the changes to your local branch, add a new commit and push to your fork.
GitHub will automatically update the pull request.

```sh
$ git add changed/files
$ git commit -m "Commit message"
$ git push origin my-branch
```

Check if a `git rebase` is neccessary before. 
If you have a conflict after a rebase with your remote branch on origin, 
and you are the `ONLY` one working on it, you can overwrite it on origin by 

```sh
$ git push --force origin my-branch
```

### Step 11: Finally

The Pull Requests will be successfully merged if:
- Code reviewer accepted the Pull Request
- CI successfully checked the branch of the Pull Request

## License

By contributing to this project, you agree that your contributions will be licensed under its [LICENSE](/../../blob/master/LICENSE).

## Questions

If you have any questions, add an [issue](/../../issues/new) and label it as `question`
