/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    amp: {
        validator: './custom_validator.js',
    },
}
module.exports = nextConfig
