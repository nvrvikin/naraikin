interface Props {
    className: string
}

function CircleIcon({className}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 46.96" className={className}>
        <path d="M7.69,40.37A1,1,0,0,1,6.92,40,23.5,23.5,0,0,1,25,1.5a23.25,23.25,0,0,1,9.49,2,1,1,0,1,1-.81,1.82A21.5,21.5,0,0,0,8.46,38.73a1,1,0,0,1-.13,1.41A1,1,0,0,1,7.69,40.37Z" transform="translate(-1.5 -1.5)"/>
        <path d="M13.32,45.23a1,1,0,0,1-.52-.14l-.46-.29a1,1,0,1,1,1.08-1.68l.42.26a1,1,0,0,1-.52,1.85Z" transform="translate(-1.5 -1.5)"/>
        <path d="M20.28,48a.75.75,0,0,1-.21,0A23.09,23.09,0,0,1,16.8,47a1,1,0,1,1,.7-1.87,22.09,22.09,0,0,0,3,.87,1,1,0,0,1-.2,2Z" transform="translate(-1.5 -1.5)"/>
        <path d="M26.36,48.46a1,1,0,0,1-.06-2A21.5,21.5,0,0,0,42.75,12.87,1,1,0,0,1,43,11.48a1,1,0,0,1,1.4.26,23.51,23.51,0,0,1-18,36.72Z" transform="translate(-1.5 -1.5)"/>
        <path d="M38.39,7.92a1,1,0,0,1-.6-.2l-.5-.36a1,1,0,0,1,1.15-1.64l.55.39a1,1,0,0,1,.2,1.4A1,1,0,0,1,38.39,7.92Z" transform="translate(-1.5 -1.5)"/>
    </svg>
  )
}

CircleIcon.propTypes = {}

export default CircleIcon
