import React from 'react'
 
export default function Header({title = 'Currency IUD'}) {
  return (
    <nav class="navbar bg-light">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">{title}</span>
    </div>
    </nav>
  )
}
