import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

function App() {
  // Mount the TanStack Router so components using its <Link> have the proper context.
  return <RouterProvider router={router} />;
}

export default App;
