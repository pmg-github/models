# models
Typescript project containing all classes used for front- and backend projects.


# Installation
Add this project as an npm git dependency to the project you want to use it in.

```bash
npm install --save models@git+https://github.com/pmg-github/models.git#main
```

# Update to latest version
Git dependencies are only updated after running npm update. If certain classes aren't available, be sure to update to the latest version:

```bash
npm update models
```

# Usage during development
To prevent having to push changes before testing set up 'npm link' for local development

1. Use the windows terminal to navigate to the folder containing the dependencies and create a symbolic link.
```bash
cd path/to/models
npm link
```

2. Now navigate to the folder which uses the dependency and add the link
```bash
cd path/to/other-project
npm link models
```

Note: If Visual Studio Code doesn't properly show the change, close and restart.

# Frontend usage
1. Import the classes you need. (Ensure typescript!):

```ts
import { Article } from 'models';
```

2. In nuxt3 projects when fetching we can ensure the class of the reveived object as follows:
```ts
const data: Article[] = await $fetch<Article[]>('/api/groceries');
```

3. You can also ensure classes of state variables as follows: 

```ts
const groceryList: Ref<Article[]> = useState<Article[]>('groceryList', () => []);
```