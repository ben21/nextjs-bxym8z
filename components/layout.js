export default function Layout({ children }) {
  return (
    <div>
      <p>Navbar</p>
      <main>{children}</main>
      <p>Footer</p>
    </div>
  )
}