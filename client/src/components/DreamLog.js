import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

function DreamLog({ log }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{log.title}</Card.Header>
        <Card.Meta>
          <span className="date">{log.published_at}</span>
        </Card.Meta>
        <Card.Description>{log.text_content}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        {log.user["username"]}
      </Card.Content>
      <Card.Content extra>
        <div>
          <strong>Tags: </strong>
          {log.tags && log.tags.length > 0
            ? log.tags.map((tag) => (
                <Label key={uuid()} color="blue">
                  {tag.name}
                </Label>
              ))
            : "No tags available"}
        </div>
      </Card.Content>
    </Card>
  );
}

export default DreamLog;