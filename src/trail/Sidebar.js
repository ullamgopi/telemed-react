import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
// import SideData from './SideData'

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map(({title , icon, ...rest }) => (
          <ListItem key={title} button {...rest}>
            <ListItemText>{icon}</ListItemText>
            <ListItemText>{title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Sidebar;