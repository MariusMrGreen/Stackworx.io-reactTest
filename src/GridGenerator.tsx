import { chunk } from 'lodash';
import * as React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';

type GridGeneratorProps = {
  cols: 1 | 2 | 3 | 4 | 6 | 12
}
const GridGenerator: React.FC<GridGeneratorProps> = ({ cols, children }) => {
 
const colWidth = 12 / cols
const rows = chunk(React.Children.toArray(children), cols)
return (
    <Grid>
      {rows.map((cols) => (
        <Row>
          {cols.map((col) => (
            <Col sm={12} md={colWidth}>
              {col}
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  )
}
export default GridGenerator