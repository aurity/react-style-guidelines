# react-style-guidelines
React opinionated style guidelines with examples

## Why?
There are many (too many!) ways to write React components so to make sure we all have the same styles, and good ideas are not lost, let's put them here. PR's more than welcome

## Index
* [More info](#more-info)
* [Naming conventions](#naming-conventions)
* [File structure](#file-structure)
* [Working with repositories](https://github.com/aurity/react-style-guidelines/docs/gitflow/README.md)

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
