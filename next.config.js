/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            
            {
            protocol:'https',
            hostname:'images.unplash.com'
        },
        {

            protocol: 'https',
            hostname:'raw.githubusercontent.com'
        }
    ]
    
    }
}

module.exports = nextConfig
