import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './SideData.css'


function SideData({ items }) {
  return (
    <div className="sideDtSideData">
      <List disablePadding dense>
        {items.map(({title , icon, ...rest }) => (
          <ListItem key={title} button {...rest}>
            <ListItemText>{icon}</ListItemText>
            <ListItemText className='text-title'>{title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SideData;