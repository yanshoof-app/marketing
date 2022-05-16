export default function useUpdates() {
  return {
    version: process.env.VERSION,
    label: process.env.LABEL,
  }
}
