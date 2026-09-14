# FinanceConsult

A modern, static Next.js website for tax filing and financial advisory services. Built with Next.js, TypeScript, and Tailwind CSS, deployed on AWS S3 with CloudFront CDN.

## 🌟 Project Overview

FinanceConsult is a professional tax consultancy and financial advisory platform designed to help individuals and businesses with:
- ITR (Income Tax Return) filing
- Tax planning and optimization
- Investment advisory
- GST/TDS compliance
- Tax notice resolution

The website features a modern, responsive design with smooth animations, interactive testimonials map, and a contact form integrated with AWS Lambda via API Gateway.

## ✨ Key Features

- **Static Site Generation** - Fast loading with Next.js static export
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Testimonials Map** - Animated map showing customer locations across India
- **Auto-rotating Testimonials** - Displays customer reviews every 5 seconds
- **Contact Form** - Integrated with AWS Lambda for form submissions
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Proper meta tags and semantic HTML
- **HTTPS Enabled** - CloudFront with ACM SSL certificate

## 🏗️ Architecture

```
┌─────────────────┐
│   Browser       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   CloudFront    │ (CDN + HTTPS)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   S3 Bucket     │ (Static Hosting)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ API Gateway     │ (Contact Form)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Lambda        │ (Form Processing)
└─────────────────┘
```

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

This project is configured for static export (compatible with S3 static hosting):

```bash
npm run build
```

This generates an `out` folder containing all static files (HTML, CSS, JS, images).

## AWS S3 Deployment

### Prerequisites

- AWS CLI installed and configured with your credentials
- An S3 bucket created
- Bucket region noted (e.g., us-east-1)

### Initial Setup (One-time)

**1. Upload files to S3:**
```bash
aws s3 sync out/ s3://your-bucket-name --delete --cache-control "public, max-age=31536000, immutable"
```
- `--delete`: Removes files in S3 that don't exist locally
- `--cache-control`: Sets browser caching for better performance

**2. Set bucket policy for public read access:**
```bash
aws s3api put-bucket-policy --bucket your-bucket-name --policy '{"Version":"2012-10-17","Statement":[{"Sid":"PublicReadGetObject","Effect":"Allow","Principal":"*","Action":"s3:GetObject","Resource":"arn:aws:s3:::your-bucket-name/*"}]}'
```
This allows public access to all files in the bucket.

**3. Enable static website hosting:**
```bash
aws s3 website s3://your-bucket-name --index-document index.html --error-document 404.html
```
- `--index-document`: The file to serve as homepage
- `--error-document`: The file to serve for 404 errors

### Access Your Website

After setup, your website will be available at:
```
http://your-bucket-name.s3-website-region.amazonaws.com
```

To find your exact website endpoint:
```bash
aws s3api get-bucket-website --bucket your-bucket-name
```

### Future Deployments

For subsequent deployments, only run the sync command:
```bash
npm run build
aws s3 sync out/ s3://your-bucket-name --delete --cache-control "public, max-age=31536000, immutable"
```

The bucket policy and website hosting settings persist, so you only need to sync files.

### Custom Domain + HTTPS

For a custom domain with HTTPS, set up:
1. **CloudFront** - CDN for faster delivery
2. **AWS Certificate Manager (ACM)** - Free SSL certificate
3. **Route 53** - DNS management (optional)

### CloudFront Configuration

For optimal performance, configure CloudFront with:
- **Origin**: S3 website endpoint (not bucket endpoint)
- **Default Root Object**: `index.html`
- **Custom Error Responses**: 403 and 404 redirect to `index.html` (for Next.js routing)
- **Cache Policy**: CachingOptimized or custom policy with long TTL for static assets
- **Viewer Protocol Policy**: Redirect HTTP to HTTPS
- **Compression**: Enabled

## 🔐 Environment Variables

This project uses environment variables for configuration. Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api-gateway-url.amazonaws.com
```

## 🐛 Troubleshooting

### Build Issues

**Error: API routes not supported in static export**
- Remove or comment out any API routes in `app/api/`
- Use external API services or Lambda functions instead

**Error: Cannot find module**
- Delete `.next` folder: `rm -rf .next` (or `Remove-Item -Recurse -Force .next` on Windows)
- Run `npm run build` again

### Deployment Issues

**Website shows only HTML without styles**
- Check S3 bucket policy allows public read access
- Verify static website hosting is enabled
- Ensure CloudFront custom error responses are configured

**Mobile browsers can't access website**
- Ensure HTTPS is enabled (CloudFront + ACM)
- Check that viewer protocol policy redirects HTTP to HTTPS

### Form Submission Issues

**Form not submitting**
- Verify API Gateway endpoint is correct
- Check Lambda function is deployed and working
- Ensure CORS is configured on API Gateway

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support, contact hello@financeconsult.in

---

**Built with ❤️ using Next.js and AWS**
