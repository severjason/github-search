export default {
  '*.{ts,tsx}': [() => 'npm run tscheck', 'npm run lint', 'npm run format'],
};
