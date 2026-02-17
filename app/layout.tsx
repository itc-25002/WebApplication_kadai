import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="header">
          <h1 className="title">
            <Link href="/">企業まとめ</Link>
          </h1>

          <nav className="nav">
            <ul>
              <li>
                <Link href="/companies">企業一覧</Link>
              </li>
              <li>
                <Link href="/bookmarks">お気に入り</Link>
              </li>
              <li>
                <Link href="/status">選考状況</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
