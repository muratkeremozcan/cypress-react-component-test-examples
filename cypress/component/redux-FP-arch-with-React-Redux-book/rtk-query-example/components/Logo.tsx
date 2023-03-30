import LogoFile from '../assets/logo.svg'

const DEFAULT_IMAGE_SIZE_PX = '100%'

interface Props {
  width?: number | string
  height?: number | string
}

export default function Logo({
  width = DEFAULT_IMAGE_SIZE_PX,
  height = DEFAULT_IMAGE_SIZE_PX,
}: Props) {
  return <img src={LogoFile} width={width} height={height} alt="Extend" />
}
