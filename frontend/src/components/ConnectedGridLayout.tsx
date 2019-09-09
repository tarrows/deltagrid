import React from 'react'
import GridLayout, { Layout } from 'react-grid-layout'

export interface ConnectedGridLayoutProps {
  items: {
    key: string
    layout: Layout
    content: {
      type: string
      data: string
    }
  }[]
  settings: {
    cols: number
    rowHeight: number
    width: number
    editable: boolean
  }
}

const ConnectedGridLayout: React.FC<ConnectedGridLayoutProps> = (props) => {
  const { items, settings } = props
  const { cols, rowHeight, width, editable } = settings
  return (
    <GridLayout className={'layout'}
      cols={cols} rowHeight={rowHeight} width={width}
      isDraggable={editable} isResizable={editable} >
      {items.map(i => (
        <div key={i.key} data-grid={i.layout} style={{ border: '1px solid #FAA' }}>
          {i.content.type}: {i.content.data}
        </div>))}
    </GridLayout>
  )
}

export default ConnectedGridLayout
