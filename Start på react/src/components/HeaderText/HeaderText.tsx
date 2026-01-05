type Props = { headerText?: string }

export const HeaderText = ({ headerText = 'Mangler headerText' }: Props) => {
  return <h1>{headerText}</h1>
}
