import { FC } from 'react'

type SectionTitleProps = {
    title: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => <h3 className='text-Nutmeg font-Young-Serif text-2xl'>{title}</h3>
