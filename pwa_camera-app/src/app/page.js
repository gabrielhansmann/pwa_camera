import Link from 'next/link';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the PWA Camera App</h1>
      <Link href="/camera"> Access Camera </Link>
    </div>
  );
};

export default HomePage;