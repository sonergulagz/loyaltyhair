import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SVG } from '@svgdotjs/svg.js'

const HeadShapeContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 2rem;
  
  svg {
    width: 100%;
    height: auto;
  }
`

interface HeadShapeProps {
  selectedAreas: string[]
  onAreaSelect: (area: string) => void
}

const HEAD_REGIONS = [
  { id: 'front', path: 'M 150,100 C 150,60 250,60 250,100', title: 'Ön Bölge' },
  { id: 'top', path: 'M 150,100 C 150,140 250,140 250,100', title: 'Üst Bölge' },
  { id: 'crown', path: 'M 150,140 C 150,180 250,180 250,140', title: 'Tepe Bölgesi' },
]

const HeadShape: React.FC<HeadShapeProps> = ({ selectedAreas, onAreaSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // SVG alanını temizle
    containerRef.current.innerHTML = ''

    // Yeni SVG oluştur
    const draw = SVG().addTo(containerRef.current).size(400, 400)

    // Ana kafa şekli
    draw.path('M 100,200 C 100,100 300,100 300,200 C 300,300 100,300 100,200')
      .fill('none')
      .stroke({ color: '#2c3e50', width: 2 })

    // Bölgeleri oluştur
    HEAD_REGIONS.forEach(region => {
      const path = draw.path(region.path)
        .fill(selectedAreas.includes(region.id) ? '#3498db' : 'transparent')
        .stroke({ color: '#2c3e50', width: 1 })
        .attr('style', 'cursor: pointer')

      // Hover efekti
      path.on('mouseover', () => {
        if (!selectedAreas.includes(region.id)) {
          path.fill('#e0e0e0')
        }
      })

      path.on('mouseout', () => {
        if (!selectedAreas.includes(region.id)) {
          path.fill('transparent')
        }
      })

      // Tıklama olayı
      path.on('click', () => {
        onAreaSelect(region.id)
      })

      // Tooltip
      const title = draw.element('title')
      title.words(region.title)
      path.add(title)
    })

  }, [selectedAreas, onAreaSelect])

  return <HeadShapeContainer ref={containerRef} />
}

export default HeadShape 