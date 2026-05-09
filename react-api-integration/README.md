# Blog Post Manager

A professional, high-performance Blog Post Manager built with React, TanStack Query (React Query), and Tailwind CSS. This application demonstrates advanced data fetching, state management, and a premium user experience using the JSONPlaceholder API.

## 🚀 Key Features

- **Real-time Data Fetching**: Powered by TanStack Query for efficient caching and background synchronization.
- **Dynamic Search**: Real-time filtering of blog posts by title without additional API calls.
- **Premium UI/UX**: Built with a custom design system using Tailwind CSS 4.0, featuring glassmorphism, smooth transitions, and responsive layouts.
- **Interactive Detail View**: View full post information in a sophisticated, blurred-backdrop modal.
- **Post Creation**: Fully functional "Create Post" form with optimistic UI patterns (cache invalidation) and graceful feedback.
- **State Management**: Robust handling of loading and error states across the entire application.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-api-integration
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📐 Project Structure

```text
src/
├── components/
│   ├── CreatePostForm.jsx    # Post creation logic & UI
│   ├── PostDetailModal.jsx   # Detailed view modal
│   └── PostList.jsx          # Interactive post list
├── App.jsx                   # Main application logic & layout
├── main.jsx                  # Entry point & QueryClient provider
└── index.css                 # Global styles & Tailwind imports
```

## 💡 Implementation Details

- **React Query v5**: Utilizes the latest object-based syntax for `useQuery` and `useMutation`.
- **Caching Strategy**: Implements a 1-minute `staleTime` and 15-minute `gcTime` to minimize redundant network requests while ensuring data freshness.
- **Performance**: Search filtering is performed locally on cached data to ensure zero latency during user interaction.
- **Responsive Design**: Mobile-first approach ensuring a seamless experience across all device sizes.

---

Built with ❤️ by [Your Name/RafatAiub]
