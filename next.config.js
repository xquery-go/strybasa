/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    output: "standalone",
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['http://stroi-basa.ru/api/', 'https://img.icons8.com/', '127.0.0.1'],
    },
};