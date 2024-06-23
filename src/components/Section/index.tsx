import { ComponentPropsWithoutRef, FC } from 'react'

type indexProps = {
  
} & ComponentPropsWithoutRef<'section'>;

export const Section: FC<indexProps> = ({
    children
}) => <section className='flex flex-col gap-3' >{children}</section>
