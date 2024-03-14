/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    output: "standalone",
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['http://0.0.0.0:8000/api/', 'https://img.icons8.com/', '127.0.0.1'],
    },
};