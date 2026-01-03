# Git Guidelines for ShopEZ Project

## Files to NEVER commit:
- `node_modules/` - Dependencies (will be installed via npm install)
- `package-lock.json` - Lock files (can cause conflicts)
- `.env` files - Environment variables with sensitive data
- `dist/` or `build/` folders - Generated build files
- Log files (`*.log`)
- Cache directories
- OS-specific files (`.DS_Store`, `Thumbs.db`)

## Files to ALWAYS commit:
- `package.json` - Dependency definitions
- Source code files (`.js`, `.jsx`, `.css`, etc.)
- Configuration files (`vite.config.js`, `tailwind.config.js`)
- README files and documentation
- `.gitignore` files

## Before pushing to repository:
1. Run `git status` to check what files are staged
2. Ensure no `node_modules` or `.env` files are included
3. Use `git add .` only after verifying the files

## To install dependencies after cloning:
```bash
npm install                    # Install root dependencies
cd backend && npm install      # Install backend dependencies  
cd ../frontend && npm install  # Install frontend dependencies
cd ../admin && npm install     # Install admin dependencies
```

## To run the project:
```bash
npm run dev  # Runs all services concurrently
```