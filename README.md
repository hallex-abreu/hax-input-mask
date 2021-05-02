# hax-input-mask

> The hax-input-mask will help with mask in your inputs Reactjs and Nextjs.

<!-- [START getstarted] -->
## Getting Started

### Installation

To use hax-input-mask in your project, run:

```bash
npm i hax-input-mask
# or "yarn add hax-input-mask"
```
### Usage 

Use within the setValue of input

```js
const { cpfMask } = require('hax-input-mask')

<input type="text" value={cpf} onChange={event => serCpf(cpfMask(event.target.value))}/>
```

Help us maintain the project: [donate](https://mpago.la/1zCdgRN).