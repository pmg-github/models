# shared-classes-poc
Proof of concept for shared classes used across both frontend and backend projects


# Installation
Add this project as an npm git dependency to the project you want to use it in.

```bash
npm install --save models@git+https://github.com/pmg-github/models.git#main
```

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

# Update to latest version
Git dependencies are only updated after running npm update. If certain classes aren't available, be sure to update to the latest version:

```bash
npm update models
```