import { version, label } from '../public/updates.json'

export default function useUpdates() {
  return {
    version,
    label,
  }
}
