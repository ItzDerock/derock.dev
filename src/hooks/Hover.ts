import { useState } from 'react'

type HoverProps = {
  onMouseOver: () => void,
  onMouseLeave: () => void,
}

export function useHover(): [boolean, HoverProps] {
  const [hovering, setHovering] = useState(false)
  const onHoverProps = {
    onMouseOver: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  }
  return [hovering, onHoverProps]
}