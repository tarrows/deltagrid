import React from 'react'

import GridLayout from 'react-grid-layout'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    height: '100%'
  }
}))

const PaperSheet: React.FC<{ title: string }> = (props) => {
  const classes = useStyles({})
  const { title } = props

  return (
    <Paper className={classes.root}>
      <Typography variant="subtitle1">This is {title}.</Typography>
      <Typography variant="body1">content</Typography>
    </Paper>
  )
}

const GridWithMUI: React.FC = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ]
  //  style={{ backgroundColor: '#ddd' }}
  //  style={{ backgroundColor: '#f00' }}
  //  style={{ backgroundColor: '#00f' }}
  return (
    <GridLayout className={'layout'} layout={layout}
      cols={12} rowHeight={30} width={1200}>
      <div key="a">
        <PaperSheet title={'a'} />
      </div>
      <div key="b">
        <PaperSheet title={'b'} />
      </div>
      <div key="c">
        <PaperSheet title={'c'} />
      </div>
    </GridLayout>
  )
}

export default GridWithMUI
