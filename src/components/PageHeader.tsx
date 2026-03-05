
import type { ReactNode } from 'react'
import avatar_big from '@/assets/big_avatar.png'

type SidePosition = 'left' | 'right'
type TextPosition = 'left' | 'right' | 'center'
type HeaderLayout = 'split' | 'center'
type VerticalAlign = 'top' | 'center' | 'bottom'

type PageHeaderProps = {
  image?: string
  title: string
  text: string
  backgroundClassName?: string
  sectionClassName?: string
  autoText?: ReactNode
  layout?: HeaderLayout
  textPosition?: TextPosition
  sideImage?: string
  sideImageAlt?: string
  sideImagePosition?: SidePosition
  showSideImage?: boolean
  verticalAlign?: VerticalAlign
  contentWrapperClassName?: string
  textBlockClassName?: string
  imageWrapperClassName?: string
}

export default function PageHeader({
  image,
  title,
  text,
  backgroundClassName,
  sectionClassName,
  autoText,
  layout = 'split',
  textPosition,
  sideImage = avatar_big,
  sideImageAlt,
  sideImagePosition,
  showSideImage = true,
  verticalAlign = 'bottom',
  contentWrapperClassName,
  textBlockClassName,
  imageWrapperClassName,
}: PageHeaderProps) {
  const effectiveImagePosition: SidePosition = sideImagePosition ?? 'right'
  const effectiveTextPosition: TextPosition =
    textPosition ?? (layout === 'center' ? 'center' : effectiveImagePosition === 'left' ? 'right' : 'left')

  const textOrderClass =
    layout === 'split' && effectiveTextPosition === 'right' ? 'md:order-2' : 'md:order-1'
  const imageOrderClass =
    layout === 'split' && effectiveImagePosition === 'left' ? 'md:order-1' : 'md:order-2'

  const textAlignmentClass =
    effectiveTextPosition === 'center' ? 'text-center mx-auto' : effectiveTextPosition === 'right' ? 'text-right ml-auto' : 'text-left'

  const verticalAlignClass =
    verticalAlign === 'top' ? 'items-start' : verticalAlign === 'center' ? 'items-center' : 'items-end'

  const contentWrapperBaseClass =
    layout === 'center'
      ? 'content-container w-full'
      : 'content-container grid w-full items-end gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center'

  const imageWrapperBaseClass = `justify-self-center md:justify-self-end ${imageOrderClass}`

  return (
    <section className={`relative -mt-24 h-[65vh] min-h-[430px] w-full overflow-hidden md:h-[50vh] ${sectionClassName ?? ''}`.trim()}>
      {image ? (
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className={`absolute inset-0 ${backgroundClassName ?? 'bg-background'}`} />
      )}
      <div className="absolute inset-0 bg-black/45" />

      <div className={`relative flex h-full w-full ${verticalAlignClass} pb-14`}>
        <div className={`${contentWrapperBaseClass} ${contentWrapperClassName ?? ''}`.trim()}>
          <div className={`content-readable max-w-[75ch] space-y-4 text-white ${textAlignmentClass} ${textOrderClass} ${textBlockClassName ?? ''}`.trim()}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="text-base/7 text-white/90 sm:text-lg/8">{text}</p>
            {autoText}
          </div>

          {layout === 'split' && showSideImage ? (
            <div className={`${imageWrapperBaseClass} ${imageWrapperClassName ?? ''}`.trim()}>
              <img
                src={sideImage}
                alt={sideImageAlt ?? `${title} avatar`}
                className="h-40 w-40 rounded-full object-cover ring-4 ring-white/35 sm:h-48 sm:w-48 md:h-56 md:w-56"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
