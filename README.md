# Icon

Icon renders a standard `<svg>` with themed styling. It has a range of pre-defined icons to choose from. These have been normalised to work in a square viewport for consistent render

-------

## Usage

Install

```javascript
yarn add @salo/icons
```

Include

```javascript
import Icon from '@salo/icons';
```

Implement as follows

```javascript
<Icon icon='dashboard' />
```

**For full prop types and usage see storybook info/knobs**

# Publishing

1. Create a feature branch from master
2. Open a PR from your feature back to master
3. When you are ready to release the library checkout master and pull down the latest code.
4. run `yarn release` locally to add changelog and increment version number and then push directly to master to trigger publish action
5. If you want to deploy to GitHub pages then run `yarn release:ghp`. This should only be run from master so not before a PR is merged