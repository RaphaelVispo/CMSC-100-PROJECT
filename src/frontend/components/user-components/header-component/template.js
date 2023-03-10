import { html } from 'lit';

export function template () {
  return html`<header>
    <h1>
      Blog App
    </h1>
    <nav>
    ${this.loggedIn
      ? html`
      <a href="/blog">
      Blogs
    </a>
      <a href="/user">
          Look at users
        </a>
        <a href="/change-user-data">
          Change User Data
        </a>
        <a href="/change-password">
          Change Password
        </a>
        <a href="/logout">
          Logout
        </a>
      `
      : html`
        <a href="/login">
          Login
        </a>
      `}
    </nav> 
  </header>`;
}
