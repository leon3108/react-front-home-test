/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        pathname: '/id/1182279813/photo/butter-toffee-crunch-chocolate-chip-cookies.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mycake.fr',
        port: '',
        pathname: '/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.guydemarle.com',
        port: '',
        pathname: '/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0ZvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--333bff76e254e1934153f809f2d9cc2b5967da52/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VWTI5dFltbHVaVjl2Y0hScGIyNXpld2c2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpvR1JWUTZER2R5WVhacGRIbEpJZ3REWlc1MFpYSUdPd2RVT2dsamNtOXdTU0lRTmpBd2VEWXdNQ3N3S3pBR093ZFUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--929a1958a8630156464b089800ca739f1b4570de/fondant-au-chocolat.jpg',
      },
      {
        protocol: 'https',
        hostname: 'assets.afcdn.com',
        port: '',
        pathname: '/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp',
      },
      {
        protocol: 'https',
        hostname: 'assets.afcdn.com',
        port: '',
        pathname: '/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp',
      }

    ],
  },
};

export default nextConfig;
