* [Working with repositories](#working-with-repositories)
* [Pull Request](#pull-request)
* [Review Process](#review-process)

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

In case you want to push code to existing repository, in the last line you need to specify the repository, for example changing the `master` branch:
### `git push origin master`

## Pull Request
If you're created a pull request from a branch within a repository. To create a pull request, you must have changes committed to your new branch.

Go to the repository page on GitHub and click on "Pull Request" in the repo header:
![create-pull-request](https://i.gyazo.com/2d81bc4f355f47f375e33174fb9339c3.png)

Use the base branch drop-down menu to select the branch you'd like to merge your changes into:
![select-branch](https://i.gyazo.com/9e44805dcb50ba138c7d655c17ae8ee9.png)

Enter a title and description of the pull request.

Effective Pull Request looks like:
1. Make it small and clean piece of code.
2. Make sure all tests pass - ESLINT and tests before final commit.
3. Checked and compare with ticket requirements before releasing to others.
4. In description adding a link to Jira ticket.

## Review Process
Pull request are necessary to fostering code review.

Review process looks like:
1. Create Pull Request.
2. Check Pull Request.
3. Share on slack and move into "Review" column in Jira.
4. Minimum two persons will review the Pull Request.
5. After review a ticket can be move in Jira.
6. The successful proposed changes, can be merge to the head branch of the base branch that was specified in the pull request.
