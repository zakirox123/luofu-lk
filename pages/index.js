import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>luofu.lk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx>{`
        .maintenance-page {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          font-family: Arial, sans-serif;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          text-align: center;
        }

        .container {
          background: rgba(0, 0, 0, 0.4);
          padding: 40px;
          border-radius: 12px;
          max-width: 500px;
          width: 90%;
        }

        h1 {
          font-size: 42px;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        p {
          font-size: 18px;
          margin: 10px 0;
        }

        .contact {
          margin-top: 20px;
          font-size: 16px;
        }

        a {
          color: #ffd700;
          text-decoration: none;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }

        .website-link {
          display: inline-block;
          color: #ffd700;
          text-decoration: none;
          font-weight: bold;
          padding: 12px 24px;
          border: 2px solid #ffd700;
          border-radius: 8px;
          transition: all 0.3s;
          margin-top: 10px;
        }

        .website-link:hover {
          background: #ffd700;
          color: #1e3c72;
          text-decoration: none;
        }

        .footer {
          margin-top: 25px;
          font-size: 14px;
          opacity: 0.8;
        }
      `}</style>
      <div className="maintenance-page">
        <div className="container">
          <h1>luofu.lk</h1>
          <p>Our website is currently under maintenance.</p>
          <p>Please check back soon.</p>

          <div className="contact">
            <p>For inquiries, contact:</p>
            <p>Mobile: <a href="tel:+94770022281">0770022281</a></p>
            <p style={{ marginTop: '20px' }}>
              <Link href="/website" className="website-link">
                Visit Website →
              </Link>
            </p>
          </div>

          <div className="footer">
            © 2026 luofu.lk. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
