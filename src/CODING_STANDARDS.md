# Lucid Jobs - Coding Standards

## React Components

### Component Structure

- Always use arrow function syntax with const
- Named exports for utilities, default export for components
- One component per file

```javascript
const ComponentName = () => {
  return <div>Content</div>;
};

export default ComponentName;
```

### Naming Conventions

- Components: PascalCase (Homepage, SearchBar, JobCard)
- Files: PascalCase for components (Homepage.jsx)
- Variables/functions: camelCase (getUserData, isLoading)
- Constants: UPPER_SNAKE_CASE (API_URL, MAX_RETRIES)

### File Organization

```
src/
├── components/     # Reusable UI components
├── pages/          # Full page components
├── services/       # API calls, external services
├── utils/          # Helper functions
├── context/        # Global state management
```

### Styling

- Tailwind CSS utility classes
- Custom colors from our ocean palette
- Mobile-first responsive design

### Best Practices

- Keep components small and focused
- Extract reusable logic into custom hooks
- Use semantic HTML
- Always handle loading and error states
