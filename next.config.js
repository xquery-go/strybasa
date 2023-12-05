/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['http://127.0.0.1/api/'],
    },
};