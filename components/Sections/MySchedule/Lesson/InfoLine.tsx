export interface InfoLineProps {
  info: string
  newInfo?: string | boolean
  bold?: boolean
}

export default function InfoLine({
  info = '',
  newInfo,
  bold = false,
}: InfoLineProps) {
  return (
    <div
      className={`truncate mb-[-0.92rem] mt-[-0.92rem] ${
        bold ? 'font-bold' : 'font-semibold'
      } text-[32px]`}
    >
      <span className={`${newInfo && 'line-through ml-2'}`}>{info}</span>
      {typeof newInfo === 'string' && <span>{newInfo}</span>}
    </div>
  )
}
