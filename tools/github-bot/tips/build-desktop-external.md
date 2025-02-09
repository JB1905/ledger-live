## 💡 Basics Tips

##### To share some piece of advice and help the community, please do not hesitate to [edit this file](https://github.com/LedgerHQ/ledger-live/edit/develop/tools/github-bot/tips/build-desktop-external.md) and submit a pull request. Thank you! 🙏

If you're troubleshooting a build failure, here are a few tips to keep in mind.

_Note: you should always navigate to the workflow run page linked above to get additional information about the build failure._

### ⚠️ Read the logs ⚠️

#### Start by carefully reading the logs. In most cases (99% of the time), this will be enough to understand the cause of the failure.

### Determine if the failure is os-specific

LLD is built on Linux, macOS, and Windows, and some errors may only occur on a single platform.

### Identify the specific step where the error occurred

The LLD build process consists of the following actions that are performed sequentially (in a nutshell):

- For each os (in parallel):
  - Checkout the repository
  - Install the system dependencies
  - Install the javascript dependencies
  - Build the native node.js addons
  - Build all the dependencies required by LLD and belonging to the ledger-live repository
  - And finally, build the application

Look for for the source of the error in the logs.

**Use the keyboard shortcut Cmd + F on macOS or Ctrl + F on Windows and Linux to search for the relevant error message.**

The error could be unrelated to the LLD codebase, but rather related to a dependency like `live-common` or `ledgerjs`.

### Check other runs of the same workflow

Check other runs of the same workflow. If other branches are experiencing the same issue, it's likely that the error is not specific to your code.

### Review the workflow code.

[The workflow YAML file](https://github.com/LedgerHQ/ledger-live/blob/develop/.github/workflows/build-desktop-external.yml) provides information about the commands that are run on the continuous integration (CI) environment.

You should be able to reproduce locally by simply running the commands in the same order.

### Infrastucture issues

Consider the possibility of infrastructure issues.

If the error appears to be related to a slow network or a physical machine, it's possible that the problem is not related to the code. In this case, wait a bit and restart the job, or file an issue if the problem persists.
