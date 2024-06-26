import { FC } from 'react'
import { Instruction } from '../types'
import { SectionTitle } from './SectionTitle'
import { Section } from './Section'

type InstructionsProps = {
    steps: Instruction[]
}

const ListItem: FC<{ step: Instruction }> = ({
    step
}) => {
    return (
        <li className="flex py-1.5 [counter-increment:section] before:text-Nutmeg before:font-semibold before:text-sm before:pl-2 before:[content:counter(section)'.']">
            <p className='pl-5 text-sm font-Outfit text-Wenge-Brown'>
                <span className='mr-2 font-semibold'>{step.title}:</span>
                {step.description}
            </p>
        </li>
    )
}

export const Instructions: FC<InstructionsProps> = ({
    steps
}) => {
    return (
        <Section>
            <SectionTitle title='Instructions' />
            <ol className='list-none list-inside'>
                {steps.map(step => (
                    <ListItem key={step.title} step={step} />
                ))}
            </ol>
        </Section>
    )
}
