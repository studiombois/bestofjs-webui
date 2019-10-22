// Header used by project related items: reviews and links
import React from 'react'
import { Link } from 'react-router-dom'

import fromNow from '../../helpers/fromNow'
import { ExternalLink } from '../core/typography'

const EditButton = ({ url }) => {
  return (
    <Link to={url} style={{ marginLeft: 5 }}>
      <span className="octicon octicon-pencil" /> EDIT
    </Link>
  )
}

const ItemHeader = ({ item, editable, editLinkTo }) => {
  const displayDate = item.updatedAt ? item.updatedAt : item.createdAt
  return (
    <div className="project-review-date">
      <span className="octicon octicon-person" />{' '}
      <ExternalLink
        url={`https://github.com/${item.createdBy}`}
        title="GitHub profile"
      >
        {item.createdBy}
      </ExternalLink>
      <span className="octicon octicon-calendar" style={{ marginLeft: 10 }} />{' '}
      {item.updatedAt && 'Updated '}
      {fromNow(displayDate)}
      {editable && editLinkTo && <EditButton url={editLinkTo} />}
    </div>
  )
}

export default ItemHeader
