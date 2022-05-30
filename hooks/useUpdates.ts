import update from '../public/updates.json'

export default function useUpdates() {
  const { version, label } = update
  return {
    version,
    label,
  }
}
