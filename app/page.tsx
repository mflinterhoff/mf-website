// Root entry: redirect to the default locale. Works for static export via a
// meta refresh plus an inline script (and a no-JS fallback link).
export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <noscript>
          <a href="/en/">Continue to matthiasflinterhoff.com →</a>
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: "location.replace('/en/')" }} />
      </main>
    </>
  )
}
