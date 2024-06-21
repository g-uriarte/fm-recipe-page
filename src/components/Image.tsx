import { ComponentPropsWithoutRef, FC } from 'react'

type ImageProps = {

} & ComponentPropsWithoutRef<'img'>

export const Image: FC<ImageProps> = ({
    ...props
}) => {
    return (
        <img {...props} />
    )
}
