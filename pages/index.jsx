import Link from 'next/link'

function indexPage() {
  return (
    <>
    <h1>INDEX PAGE</h1>
    <Link href="/ssr">GO TO SSR PAGE</Link>
    </>
  );
}


export default indexPage;