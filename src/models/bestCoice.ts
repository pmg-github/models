export interface BestChoiceCategories {
  code: string;
  name: string;
  categories: {
    code: string;
    name: string;
    tools: { code: string; name: string }[];
  }[];
}
