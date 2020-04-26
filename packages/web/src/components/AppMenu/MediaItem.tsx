import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Types
import {Route} from "components/AppMenu/types";

export const MediaItem = (route: Route) => {
  const {id, text, Icon} = route;

  return (
    <ListItem button key={id}>
      <ListItemIcon>
        <Icon/>
      </ListItemIcon>
      <ListItemText primary={text}/>
    </ListItem>
  );
};
