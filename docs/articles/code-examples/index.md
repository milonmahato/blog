---
title: Code Examples
description: Collection of useful code snippets and examples
---

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

# Code Examples & Snippets

Welcome to our code examples collection. Here you'll find well-documented code snippets for various programming tasks.

## JavaScript Array Manipulation

```javascript
// Modern array manipulation techniques
const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

// Using filter to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Using reduce to calculate sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum);
```

## React Hooks Example

Here's a practical example of using React hooks to manage state and side effects:

```jsx
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user found</div>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default UserProfile;
```

## Python Data Processing

Example of processing data using pandas:

```python
import pandas as pd
import numpy as np

def process_sales_data(df):
    """
    Process sales data to calculate various metrics
    
    Parameters:
    df (pandas.DataFrame): Input DataFrame with columns ['date', 'product', 'amount']
    
    Returns:
    pandas.DataFrame: Processed data with additional metrics
    """
    # Create a copy of the DataFrame
    processed = df.copy()
    
    # Convert date column to datetime
    processed['date'] = pd.to_datetime(processed['date'])
    
    # Add month and year columns
    processed['month'] = processed['date'].dt.month
    processed['year'] = processed['date'].dt.year
    
    # Calculate monthly totals
    monthly_totals = processed.groupby(['year', 'month'])['amount'].sum()
    
    # Calculate moving average
    processed['moving_avg'] = processed.groupby('product')['amount'].transform(
        lambda x: x.rolling(window=3, min_periods=1).mean()
    )
    
    return processed

# Example usage
data = pd.DataFrame({
    'date': ['2024-01-01', '2024-01-02', '2024-01-03'],
    'product': ['A', 'B', 'A'],
    'amount': [100, 150, 200]
})

processed_data = process_sales_data(data)
print(processed_data.head())
```

## CSS Grid Layout

Modern CSS Grid layout example:

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.grid-item {
    background: var(--code-bg-color);
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.3s ease;
}

.grid-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
```

## Git Commands

Common Git operations and their explanations:

```bash
# Initialize a new repository
git init

# Create and switch to a new branch
git checkout -b feature/new-feature

# Stage all changes
git add .

# Commit with a message
git commit -m "feat: add new feature"

# Push to remote repository
git push origin feature/new-feature

# Fetch and rebase with main branch
git fetch origin
git rebase origin/main

# Cherry-pick a specific commit
git cherry-pick <commit-hash>
```

## TypeScript Interface

Example of TypeScript interfaces and types:

```typescript
// User-related interfaces
interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    preferences?: UserPreferences;
}

type UserRole = 'admin' | 'user' | 'moderator';

interface UserPreferences {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
}

// API response types
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: number;
}

// Function type example
type AsyncDataFetcher<T> = (id: string) => Promise<ApiResponse<T>>;

// Usage example
const fetchUser: AsyncDataFetcher<User> = async (id: string) => {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
};
```

## Performance Tips

::: tip 💡 Performance Best Practices
- Always use appropriate data structures for your use case
- Implement caching for expensive operations
- Optimize your bundle size in production
- Use lazy loading for components and modules
- Implement proper error boundaries and fallbacks
  :::

## Additional Resources

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Python Documentation](https://docs.python.org)