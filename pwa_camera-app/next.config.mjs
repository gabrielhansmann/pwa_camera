import withPWA from 'next-pwa';

const nextConfig = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
})({
    // Other Next.js config
});

export default nextConfig;
