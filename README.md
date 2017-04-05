# react-style-guidelines
React opinionated style guidelines with examples

## Why?
There are many (too many!) ways to write React components so to make sure we all have the same styles, and good ideas are not lost, let's put them here. PR's more than welcome

## Index
* [More info](#more-info)
* [Naming conventions](#naming-conventions)
* [File structure](#file-structure)
* [Working with repositories](#working-with-repositories)

## More info
- Our code style is mainly based on AirBnb guidelines https://github.com/airbnb/javascript/blob/master/react/README.md

## Naming Conventions
- components - component-name.js
- containers - component-name.container.js
- styles - component-name.style.js
- generic - `<component-name>-<type>.-<purpose>.<extension>` eg. `order-modal.container.js`

## File structure
```
.
├── modules
|   ├── component-module-name
|       ├── assets
|       |   ├── images
|       |   ├── icons
|       ├── fixtures
|       ├── redux <- only if specific for this component, otherwise use redux shared repository
|       ├── elements-one
|           ├── element-one.js
|           ├── element-one.spec.js
|       ├── elements-two
|           ├── element-two.js
|           ├── element-two.spec.js
|           ├── element-two.scss
|       ├── specific-module (eg. modals)
|           ├── elements
|              ├── element-one.js
|              ├── element-one.spec.js
|              ├── element-one.scss
|           ├── specific-module.container.js
|           ├── specific-module.container.spec.js
|           ├── specific-module.js
|           ├── specific-module.spec.js
|           ├── specific-module.scss
|       ├── component-name.container.js
|       ├── component-name.container.spec.js
|       ├── component-name.js
|       ├── component-name.spec.js
|       ├── component-name.scss
```

## Working with repositories
If you've copied a project repository, cloned it down to your local system, and added a Git remote to your clone that point to the original repository on GitHub, now you're ready to make some changes in code. Far as you will be making changes to your local Git repository and collaborate with others on the same repo, you should use a branch.

The flow looks like this:
1. Create and checkout a new branch.
2. Make changes.
3. Commit your changes to the branch.
4. Push the changes to GitHub.

To create a new branch and check it out (telling Git you will be making changes to the branch), use this command:
### `git checkout -b <name_of_your_new_branch>`

To push the new branch on GitHub:
### `git push origin <name_of_your_new_branch>`

As far as you make changes in the files, you will need to commit those changes using the command:
### `git add .`
>Adds the files in the local repository and stages them for commit.

Commit the files that you have staged in your local repository:
### `git commit -m "Commit message"`

Push the changes you made in that branch back to GitHub would look like this:
### `git push origin <name_of_your_new_branch>`
>In this case, you are pushing the changes in the name_of_your_new_branch branch to origin remote.

In case you want to push code to existing repository, in the last line you need specify the existing repository, for example on`master` branch:
### `git push origin master`

#### You are welcome to ask any question in the [issues](https://github.com/aurity/react-style-guidelines/issues) page.

#### TODO:
- [ ] add redux guidelines
- [ ] add redux init store
- [ ] update react guidelines with new ideas
- [ ] add react file generator
- [ ] add storybook
- [ ] add example with media-queries -> Radium

### Changelog
#### 0.0.1
 - Example stateless component
 - Example component
 - Example container
