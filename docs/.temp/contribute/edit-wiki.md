---
title: Edit the wiki
description: How you can properly edit the ItemsAdder wiki
---

# Edit the wiki

## How to start

- The easiest way to start is to visit the [GitHub Repository][github] of the wiki and fork it by clicking the ":octicons-repo-forked-24: Fork" button on the top-right of the site.  
  ![fork wiki](/assets/images/contribute/fork_wiki.png){ loading=lazy }
- On your fork, make sure you're on the `master` branch:  
  ![branch](/assets/images/contribute/branch.png){ loading=lazy }
- Navigate to the page you would like to update:  
  ![edit](/assets/images/contribute/page_edit.png){ loading=lazy }
  
    !!! warning "Page structure"
        Please make sure to read the page about the [general page structure](/contribute/page-structure.md) of the wiki to avoid editing mistakes.
  
- Once you made your edits, go to the "Commit changes" box at the bottom, give it a commit message and description (optional) and click "Commit changes"  
  ![commit changes](/assets/images/contribute/commit_changes.png)
  
    !!! tip "Recommendet"
        It is recommended to click on the radio button saying ":octicons-git-pull-request-24: Create a **new branch** for this commit and start a pull request. [Learn more about pull requests][pr-info]" and creating a new branch.  
        This allows you to have more freedom of how your branch is called compared to the default `patch-<number>` format GitHub uses.

- Finally, create a Pull request on the [upstream repository][github] and contact LoneDev to get your changes reviewed and eventually merged.

## Recommendations

Try to keep your fork up to date with the upstream repository. To do that, go to your fork and click on the text saying ":octicons-sync-24: Fetch upstream".  
If the text box says "**This branch is X commits behind the upstream and has conflicts that must be resolved.**" you need to create a Pull request and try to fix the conflicts in it before merging back into your fork.  
Otherwise the fork should either be up to date, or the changes can be merged without any extra work from your end.  

![fetch upstream](/assets/images/contribute/fetch_upstream.png)

[github]: https://github.com/LoneDev6/Wiki-ItemsAdder
[pr-info]: https://docs.github.com/articles/using-pull-requests