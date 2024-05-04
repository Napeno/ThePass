/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        output: 'export',
        removeConsole: process.env.NODE_ENV === "production"
    },
}

module.exports = nextConfig
