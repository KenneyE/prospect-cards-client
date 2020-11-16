import React from 'react'
import { ListingImageFragment } from 'types/graphql'

interface Props {
  image: ListingImageFragment;
  alt?: string;
  className?: string;
}

const Image = ({
  image: { urls, fallbackUrl },
  alt,
  className,
}: Props): JSX.Element => {
  return (
    <picture>
      {urls.map((url) => (
        <source key={ url } srcSet={ url } />
      ))}
      {fallbackUrl && <img className={ className } src={ fallbackUrl } alt={ alt } />}
    </picture>
  )
}

export default Image
