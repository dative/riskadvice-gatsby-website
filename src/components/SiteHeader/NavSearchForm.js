import React, { useState } from 'react'

const NavSearchForm = () => {
  const [query, setQuery] = useState('')
  return (
    <form>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={evt => setQuery(evt.target.value)}
      />
    </form>
  )
}

export default NavSearchForm
